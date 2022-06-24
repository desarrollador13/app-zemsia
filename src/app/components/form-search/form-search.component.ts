import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { 
  FormBuilder, 
  Validators } from '@angular/forms';
import { PersonListService } from '../../services/person-list.service'

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css'],
  providers: [PersonListService]
})
export class FormSearchComponent implements OnInit {

  formPerson;
  dataSelect = [
    {value:"C",name:"Cedula de ciudadanía"},
    {value:"P",name:"Pasaporte"}
  ];
  enabled = true;
  rangeMaxMix = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder, 
    private personListService:PersonListService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.formPerson = this.formBuilder.group({
      tipoDocumento : ['',Validators.required],
      numDocumento: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    })
  }

  controlfields(campo: any) {
    return this.formPerson.controls[campo];
  }

  checkInput() {
    if(this.formPerson.value.numDocumento.length >= 8 && 
       this.formPerson.value.numDocumento.length <= 11) {
        this.rangeMaxMix  = true;   
    }
    this.enabled = (!this.formPerson.invalid) ? false : true;
    this.rangeMaxMix = false;
  }

  onSubmit(event) {
    if (this.formPerson.invalid) {
      return;
    }
    this.router.navigate([
      "informacion/",
      this.formPerson.value.tipoDocumento,
      this.formPerson.value.numDocumento
    ]);
    // let data:any = this.formPerson.value;
    // this.personListService.consult(data).subscribe((data:any) => {
    //   console.log('==',data)
    //   if(data.message != 'Exitoso.') {
    //     this.msg = "No se encontraron registros con los datos enviados."
    //     return;
    //   }
    //   this.msg = "Exitoso"
    //   this.data = data;
    // })
  }

}
