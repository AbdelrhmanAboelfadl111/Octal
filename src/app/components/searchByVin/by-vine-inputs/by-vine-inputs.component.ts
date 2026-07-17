import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarVinDetails } from '../../../services/carDetailsInVin.service';
import { ByVineDetailsComponent } from "../by-vine-details/by-vine-details.component";
import { DollarPrice } from '../../../services/dollarPrice.service';
import { UpperHeadComponent } from "../../upper-head/upper-head.component";

@Component({
  selector: 'app-by-vine-inputs',
  imports: [CommonModule, FormsModule, ByVineDetailsComponent, UpperHeadComponent],
  templateUrl: './by-vine-inputs.component.html',
  styleUrl: './by-vine-inputs.component.scss',
})
export class ByVineInputsComponent {
  lastRequest: any = null;
  public isShow: string | null = "";

  public isLoading = signal(false);

  public isActive = signal(false);

  ngOnInit() {
    this.isActive.set(true);
  }

  public errorFromApi = signal('');

  private carDetailsInVinText = inject(CarVinDetails);

  private DollarPriceResult = inject(DollarPrice);

   public title: string = "استعلم عن السعر المتوقع برقم الشاسيه الخاص  بسيارتك";
  public brief: string = "ادخل رقم الشاسيه بدقة، وسيقوم النظام بعرض البيانات واحتساب القيمة السوقية المتوقعة اعتمادًا على أحدث بيانات السوق المصري";

  public carPrice = signal<any>(null);

  public carDetailsByVinTable = signal<any>(null);

  public carDetailsInVinObj: object = {};

  public isOpen(name:string) {
    if (this.isShow == name) {
      this.isShow = null;
    } else {
      this.isShow = name;
    }
  };

  public selectedMileage: number = NaN;

  public selectedRateCarText = "(Mi) ادخل قراءة العداد ";
  

  public onMileage(event: Event) {

      const input = event.target as HTMLInputElement;

    input.value = input.value.replace(/\D/g, '');

    this.selectedMileage = Number(input.value);
    

  }

  public onVin(event: Event) {
    const input = event.target as HTMLInputElement;

    input.value = input.value
      .toUpperCase()
      .replace(/[^A-HJ-NPR-Z0-9]/g, '')
      .slice(0, 17);

    this.selectedVin = input.value;
    
  }

  public selectedVin: string = "";

  public selectedVinCarText = " ادخل رقم الشاسيه ";

  public selectedTrim = '';

  public selectedCatCarText = "اختر الفئه";
  public resetFromTrim() {

    this.selectedTransCarText = "اختر ناقل الحركة";
    this.selectedTransmission = '';

  }

  public selectedCatCar(CatCar:string) {
    this.selectedCatCarText = CatCar;
    this.selectedTrim = CatCar;
    this.resetFromTrim();
    
    this.isShow = null;
  }

  

  public selectedTransmission = '';

  public selectedTransCarText = "اختر ناقل الحركة";

  public selectedTransCar(TransCar:string) {
    this.selectedTransCarText = TransCar;
    this.selectedTransmission = TransCar;
    this.isShow = null;
    
  }


  get isFormValid(): boolean {
  return !!(
    this.selectedTrim &&
    this.selectedTransmission &&
    this.selectedMileage &&
    this.selectedVin
  );
    
    
  }
  
  get hasErrors(): boolean {
    return (
      (this.selectedVin.length > 0 && this.selectedVin.length < 17) ||
      (this.selectedMileage > 0 && this.selectedMileage < 500) ||
      this.selectedMileage > 300000
    );
  }


  public onSubmit() {
      
  if (this.hasErrors) return;

      let DataToModelByVin = {
        mileage: this.selectedMileage,
        vin: this.selectedVin,
        trim: this.selectedTrim,
        transmission:this.selectedTransmission
      };
    
    
if (
  this.lastRequest &&
  this.lastRequest.vin === DataToModelByVin.vin &&
  this.lastRequest.mileage === DataToModelByVin.mileage &&
  this.lastRequest.trim === DataToModelByVin.trim &&
  this.lastRequest.transmission === DataToModelByVin.transmission
) {
  return;
}
    console.log(DataToModelByVin);
    this.errorFromApi.set(''); // امسح الخطأ القديم
    this.isLoading.set(true);

    this.carDetailsInVinText.sendData(DataToModelByVin).subscribe({
      next: (response) => {
        this.carDetailsInVinObj = response;
        this.lastRequest = { ...DataToModelByVin };
        this.carPrice.set(response.predicted_price * this.DollarPriceResult.dollarRate());
        this.isLoading.set(false);
        this.carDetailsByVinTable.set({
            ...response,
            price: response.predicted_price * this.DollarPriceResult.dollarRate()
        });
        console.log(this.carDetailsInVinObj);
    },
      error: (err) => {
        console.log(err);
        this.errorFromApi.set('حدث خطأ، يرجى المحاولة مرة أخرى.');
        this.isLoading.set(false);
      }
}   );
    
    }
}
