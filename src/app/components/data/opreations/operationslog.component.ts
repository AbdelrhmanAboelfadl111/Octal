import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface OperationLog {
  timestamp: string;
  operation_type: string;
  success: boolean;
}

type StatusFilter = 'all' | 'success' | 'failed';

@Component({
  selector: 'app-operations-log',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operationslog.component.html',
  styleUrl: './operationslog.component.scss'
})
export class OperationsLogComponent {
  /** البيانات القادمة من الـ API */
  @Input() set operations(value: OperationLog[] | null | undefined) {
   const sorted = [...(value ?? [])].sort((a, b) => {
    return this.parseDate(b.timestamp).getTime() -
           this.parseDate(a.timestamp).getTime();
  });

  this.rawData.set(sorted);
  }

  readonly rawData = signal<OperationLog[]>([
    { timestamp: '20/07/2026 10:13 AM', operation_type: 'from-vin', success: false },
    { timestamp: '20/07/2026 10:12 AM', operation_type: 'from-vin', success: false },
    { timestamp: '20/07/2026 10:11 AM', operation_type: 'from-vin', success: true },
    { timestamp: '20/07/2026 10:11 AM', operation_type: 'from-vin', success: true },
    { timestamp: '20/07/2026 12:16 AM', operation_type: 'linear', success: true },
    { timestamp: '19/07/2026 11:23 PM', operation_type: 'from-vin', success: true },
    { timestamp: '19/07/2026 11:22 PM', operation_type: 'linear', success: true }
  ]);

  // ---- حالة الفلاتر ----
  readonly searchTerm = signal('');
  readonly typeFilter = signal<string>('all');
  readonly statusFilter = signal<StatusFilter>('all');

  readonly operationTypes = computed(() => {
    const types = new Set(this.rawData().map(op => op.operation_type));
    return ['all', ...Array.from(types)];
  });

  readonly filteredData = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const type = this.typeFilter();
    const status = this.statusFilter();

    return this.rawData().filter(op => {
      const matchesType = type === 'all' || op.operation_type === type;
      const matchesStatus =
        status === 'all' ||
        (status === 'success' && op.success) ||
        (status === 'failed' && !op.success);
      const matchesSearch = term === '' || op.timestamp.toLowerCase().includes(term);
      return matchesType && matchesStatus && matchesSearch;
    });
  });

  // ---- إحصائيات سريعة لأعلى الجدول ----
  readonly totalCount = computed(() => this.rawData().length);
  readonly successCount = computed(() => this.rawData().filter(op => op.success).length);
  readonly failedCount = computed(() => this.rawData().filter(op => !op.success).length);
  readonly successRate = computed(() => {
    const total = this.totalCount();
    return total === 0 ? 0 : Math.round((this.successCount() / total) * 100);
  });

  setTypeFilter(type: string): void {
    this.typeFilter.set(type);
  }

  setStatusFilter(status: StatusFilter): void {
    this.statusFilter.set(status);
  }

  resetFilters(): void {
    this.searchTerm.set('');
    this.typeFilter.set('all');
    this.statusFilter.set('all');
  }

  trackByIndex(index: number): number {
    return index;
  }

  operationTypeLabel(type: string): string {
    if (type === 'all') return 'كل العمليات';
    return type;
  }
  private parseDate(timestamp: string): Date {
  const [datePart, timePart, period] = timestamp.split(' ');

  const [day, month, year] = datePart.split('/').map(Number);

  let [hour, minute] = timePart.split(':').map(Number);

  if (period === 'PM' && hour !== 12) {
    hour += 12;
  }

  if (period === 'AM' && hour === 12) {
    hour = 0;
  }

  return new Date(year, month - 1, day, hour, minute);
}
}
