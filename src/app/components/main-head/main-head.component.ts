import { Component, inject, signal } from '@angular/core';
import { CommonModule,} from "@angular/common";
import { YearService } from '../../services/years.service';
import { CarsService } from '../../services/CarsService.service';
import { FormsModule } from '@angular/forms';
import { SendToModelService } from '../../services/sentYoModel.service';
import { CarEvaluationComponent } from "../car-evaluation/car-evaluation.component";
import { DollarPrice } from '../../services/dollarPrice.service';



@Component({
  selector: 'app-main-head',
  imports: [CommonModule, FormsModule, CarEvaluationComponent],
  templateUrl: './main-head.component.html',
  styleUrl: './main-head.component.scss',
})
export class MainHeadComponent {
  private sendToModel = inject(SendToModelService);

  private carService = inject(CarsService);

  private DollarPriceResult = inject(DollarPrice);
  
  public isActive = signal(false);

  public carPrice = signal<any>(null);

  public carDetails = signal<object>({});

  public errorFromApi = signal<any>('');

  public isLoading = signal(false);

  public IsSendToModel: boolean = true;
  public showMileageError = signal(false);

  carsData: any = {};
  brands: string[] = [];
  models: string[] = [];
  trims: string[] = [];
  bodyTypes: string[] = [];
  fuelTypes: string[] = [];
  transmissions: string[] = [];
  drivetrains: string[] = [];
  engines: number[] = [];

  selectedYearName:number=NaN;
  selectedBrand = '';
  selectedModelName = '';
  selectedTrim = '';
  selectedBody = '';
  selectedEngine:number = NaN;
  selectedTransmission = '';
  selectedFuel = '';
  selectedDrivetrains = '';
  selectedMileage:number =NaN;

  ngOnInit() {

  this.carService.getCars().subscribe(data => {

    this.carsData = data;

    this.brands = Object.keys(data);


  });
    
    this.isActive.set(true);

}

  public yearService = inject(YearService);

  years = this.yearService.years;

  public selectedYearText = "اختر سنة الموديل من فضلك";
  public selectedModelText = "اختر الماركه من فضلك";
  public selectedModelCarText = "اختر الموديل من فضلك";
  public selectedCatCarText = "اختر الفئه من فضلك";
  public selectedBodyCarText = "اختر نوع الهيكل من فضلك";
  public selectedEngCarText = "اختر سعة المحرك من فضلك";
  public selectedTransCarText = "اختر ناقل الحركة من فضلك";
  public selectedFulleCarText = "اختر نوع الوقود من فضلك";
  public selectedDrivetrainsText = "اختر نظام الدفع من فضلك";
  public selectedRateCarText = "(Mi) ادخل قراءة العداد من فضلك";


  public isShow: string | null = "";



  public resetFromYear() {

    this.selectedBrand = '';
    this.selectedModelName = '';
    this.selectedTrim = '';
    this.selectedBody = '';
    this.selectedEngine = NaN;
    this.selectedTransmission = '';
    this.selectedFuel = '';
    this.selectedDrivetrains = '';
    this.selectedModelText = "اختر الماركه من فضلك";
    this.selectedModelCarText = "اختر الموديل من فضلك";
    this.selectedCatCarText = "اختر الفئه من فضلك";
    this.selectedBodyCarText = "اختر نوع الهيكل من فضلك";
    this.selectedEngCarText = "اختر سعة المحرك من فضلك";
    this.selectedTransCarText = "اختر ناقل الحركة من فضلك";
    this.selectedFulleCarText = "اختر نوع الوقود من فضلك";
    this.selectedDrivetrainsText = "اختر نظام الدفع من فضلك";

    this.models = [];
    this.trims = [];
    this.bodyTypes = [];
    this.engines = [];
    this.transmissions = [];
    this.fuelTypes = [];
    this.drivetrains = [];
  }

  public resetFromBrand() {

    this.selectedModelName = '';
    this.selectedTrim = '';
    this.selectedBody = '';
    this.selectedEngine = NaN;
    this.selectedTransmission = '';
    this.selectedFuel = '';

    this.selectedModelCarText = "اختر الموديل من فضلك";
    this.selectedCatCarText = "اختر الفئه من فضلك";
    this.selectedBodyCarText = "اختر نوع الهيكل من فضلك";
    this.selectedEngCarText = "اختر سعة المحرك من فضلك";
    this.selectedTransCarText = "اختر ناقل الحركة من فضلك";
    this.selectedFulleCarText = "اختر نوع الوقود من فضلك";
    this.selectedDrivetrains = '';
    this.selectedDrivetrainsText = "اختر نظام الدفع من فضلك";
    this.drivetrains = [];

    this.trims = [];
    this.bodyTypes = [];
    this.engines = [];
    this.transmissions = [];
    this.fuelTypes = [];
  }
  
  public resetFromCar() {

    this.selectedTrim = '';
    this.selectedBody = '';
    this.selectedEngine = NaN;
    this.selectedTransmission = '';
    this.selectedFuel = '';
   this.selectedDrivetrains = '';
    this.selectedDrivetrainsText = "اختر نظام الدفع من فضلك";
    this.drivetrains = [];
    this.selectedCatCarText = "اختر الفئه من فضلك";
    this.selectedBodyCarText = "اختر نوع الهيكل من فضلك";
    this.selectedEngCarText = "اختر سعة المحرك من فضلك";
    this.selectedTransCarText = "اختر ناقل الحركة من فضلك";
    this.selectedFulleCarText = "اختر نوع الوقود من فضلك";
  }
  
  public resetFromTrim() {

    this.selectedBody = '';
    this.selectedEngine = NaN;
    this.selectedTransmission = '';
    this.selectedFuel = '';
     this.selectedDrivetrains = '';
    this.selectedDrivetrainsText = "اختر نظام الدفع من فضلك";
    this.selectedBodyCarText = "اختر نوع الهيكل من فضلك";
    this.selectedEngCarText = "اختر سعة المحرك من فضلك";
    this.selectedTransCarText = "اختر ناقل الحركة من فضلك";
    this.selectedFulleCarText = "اختر نوع الوقود من فضلك";
  }
  
  public resetFromBody() {

    this.selectedEngine = NaN;
    this.selectedTransmission = '';
    this.selectedFuel = '';
     this.selectedDrivetrains = '';
    this.selectedDrivetrainsText = "اختر نظام الدفع من فضلك";
    this.selectedEngCarText = "اختر سعة المحرك من فضلك";
    this.selectedTransCarText = "اختر ناقل الحركة من فضلك";
    this.selectedFulleCarText = "اختر نوع الوقود من فضلك";

  }
  
  public resetFromEngine() {

    this.selectedTransmission = '';
    this.selectedFuel = '';
     this.selectedDrivetrains = '';
    this.selectedDrivetrainsText = "اختر نظام الدفع من فضلك";
    this.selectedTransCarText = "اختر ناقل الحركة من فضلك";
    this.selectedFulleCarText = "اختر نوع الوقود من فضلك";
  }
  
  public resetFromTransmission() {

  this.selectedFuel = '';

    this.selectedFulleCarText = "اختر نوع الوقود من فضلك";
    this.selectedDrivetrains = '';
    this.selectedDrivetrainsText = "اختر نظام الدفع من فضلك";

  }







  public isOpen(name:string) {
    if (this.isShow == name) {
      this.isShow = null;
    } else {
      this.isShow = name;
    }
  };

  public selectedYear(year:number) {
    this.selectedYearText = year.toString();
    this.selectedYearName = year;
    this.resetFromYear();
    this.IsSendToModel = true;
    this.isShow = null;
  }

  public selectedModel(model: string) {
    this.selectedBrand = model;
    this.selectedModelText = model;
     this.IsSendToModel = true;
    this.isShow = null;
    this.resetFromBrand();
    this.models = Object.keys(this.carsData[model]);
  }
  public selectedModelCar(modelCar:string) {
    this.selectedModelCarText = modelCar;
    this.selectedModelName = modelCar;
     this.IsSendToModel = true;
    this.isShow = null;
    this.resetFromCar();
    const car = this.carsData[this.selectedBrand][modelCar];

    this.trims = car.trims;

    this.bodyTypes = car.body_types;

    this.fuelTypes = car.fuel_types;

    this.transmissions = car.transmissions;

    this.engines = car.engine_capacities;

    this.drivetrains = car.drivetrains;

  }

  public selectedCatCar(CatCar:string) {
    this.selectedCatCarText = CatCar;
    this.selectedTrim = CatCar;
     this.IsSendToModel = true;
    this.resetFromTrim();
    this.isShow = null;
  }

  public selectedBodyCar(BodyCar: string) {
    this.selectedBody = BodyCar;
    this.selectedBodyCarText = BodyCar;
    this.IsSendToModel = true;
    this.resetFromBody();
    this.isShow = null;
  }

  public selectedEngCar(EngCar: number) {
    this.selectedEngine = EngCar;
    this.selectedEngCarText = EngCar.toString();
     this.IsSendToModel = true;
    this.resetFromEngine();
    this.isShow = null;
  }

  public selectedTransCar(TransCar:string) {
    this.selectedTransCarText = TransCar;
    this.selectedTransmission = TransCar;
     this.IsSendToModel = true;
    this.resetFromTransmission();
    this.isShow = null;
  }
  public selectedDrivetrainsFun(drivetrains:string) {
    this.selectedDrivetrainsText = drivetrains;
    this.selectedDrivetrains = drivetrains;
     this.IsSendToModel = true;
    this.isShow = null;
  }

  public selectedFulleCar(fulleCar:string) {
    this.selectedFulleCarText = fulleCar;
    this.selectedFuel = fulleCar;
     this.IsSendToModel = true;
    this.isShow = null;
  }

  public onMileage(event: Event) {

    const input = event.target as HTMLInputElement;
     this.IsSendToModel = true;

  input.value = input.value.replace(/\D/g, '');

  this.selectedMileage = Number(input.value);

}
  
    get isMileageValid(): boolean {
  return this.selectedMileage >= 500 && this.selectedMileage <= 300000;
}
  
  get isFormValid(): boolean {
  return !!(
  this.selectedYearName &&
  this.selectedBrand &&
  this.selectedModelName &&
  this.selectedTrim &&
  this.selectedBody &&
  this.selectedEngine &&
  this.selectedTransmission &&
  this.selectedFuel &&
  this.selectedDrivetrains &&
  this.isMileageValid
);
  }
  


  public onSubmit() {
      


    if (!this.IsSendToModel) {
      return;
    }
      


      let DataToModel = {
        year: this.selectedYearName,
        make: this.selectedBrand,
        model: this.selectedModelName,
        trim: this.selectedTrim,
        body_type: this.selectedBody,
        engine_capacity: this.selectedEngine,
        transmission: this.selectedTransmission,
        fuel_type: this.selectedFuel,
        mileage: this.selectedMileage,
        drivetrain: this.selectedDrivetrains
      };
    
    console.log(DataToModel);
    

      this.isLoading.set(true);
      
    
      this.sendToModel.sendData(DataToModel).subscribe({
      next: (response) => {
          this.errorFromApi.set('');
          this.carPrice.set(response.predicted_price * this.DollarPriceResult.dollarRate());
          this.carDetails.set(DataToModel);
          this.isLoading.set(false);
          this.IsSendToModel = false;
    },
      error: (err) => {
        if (err.error?.detail?.[0]?.msg) {
            this.errorFromApi.set(err.error.detail[0].msg);
          } else {
            this.errorFromApi.set('Server is unavailable');
          }

        this.carPrice.set(null);
        this.isLoading.set(false);
        this.IsSendToModel = false;
        this.showMileageError.set(err.status === 422);


      }
}   );
    }




}
