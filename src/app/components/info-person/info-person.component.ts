import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonListService } from '../../services/person-list.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-person',
  templateUrl: './info-person.component.html',
  styleUrls: ['./info-person.component.css'],
  providers: [PersonListService]
})
export class InfoPersonComponent implements OnInit {

  data:any;
  msg:string = "No hay datos";
  datos:{tipoDocumento:string,numDocumento:string};

  constructor(
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private personListService:PersonListService) { }

  ngOnInit(): void {
    this.datos = {
      tipoDocumento: this.rutaActiva.snapshot.params.tipoCedula,
      numDocumento: this.rutaActiva.snapshot.params.numCedula
    }
    this.loadData();
  }

  loadData() {
    let data:any = this.datos;
    this.personListService.consult(data).subscribe((data:any) => {
      if(data.message != 'Exitoso.') {
        this.msg = "No se encontraron registros con los datos enviados."
        return;
      }
      this.msg = "Exitoso"
      this.data = data;
    })
  }

  Toreturn() {
    this.router.navigate([''])
  }

}
