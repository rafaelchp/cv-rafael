import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvabastidasService {

  profesional = [{
    Especialidad:"Desarrollo Web",
    Empresa:"Tecnología en Sistemas de Información- TSI"
  }];
  educacion: any[] = [
    {
      Nombre:"Análisis y Desarrollo de Sistemas de Información",
      Institucion:"SENA",
      Fecha:"2020-2022",
      Descripcion:"Tecnólogo"
    },

      {
        Nombre:"Desarrollo Web",
        Institucion:"Universidad Pontificia Bilivariana- Convenio MinTic",
        Fecha:"Dic 2021",
        Descripcion:"Diplomado"
      }
  ];
  testimonio: any[] = [];
  experiencia: any[] = [
    {
      Empresa:"Tecnología en Sistemas de Información- TSI",
      Cargo:"Desarrollador Web",
      Fecha:"07-2021  a la Fecha",
      Descripcion:"Desarrollo de Apis en NetCore, procedimientos almacenados en SSQL, servicios para consumo de Apis, vistas y programación reactiva con Angular 14+"
    },
    {
      Empresa:"Centro de Biotecnología Indistrial CBI-SENA Palmira",
      Cargo:"Aux. de Investigación",
      Fecha:"06-2019 a - 12-2019",
      Descripcion:"Apoyo en desarrollo de backend con Nodejs, Express, generar módulos para vistas en Angular 6+"
    }
  ];
  blog: any[] = [];

  constructor(private http: HttpClient) {
    // this.CargarProfesional();
    // this.CargarEducacion();
    // this.CargarTestimonio();
    // this.CargarExperiencia();
    // this.CargarBlog();
  }

  // private CargarProfesional(){
  //   this.http.get('https://cv-tutorial-70504.firebaseio.com/Profesional.json')
  //     .subscribe((resp: any[]) => {
  //       this.profesional = resp;
  //       console.log(resp);
  //   });
  // }

  // private CargarEducacion(){
  //   this.http.get('https://cv-tutorial-70504.firebaseio.com/Educacion.json')
  //     .subscribe((resp: any[]) => {
  //       this.educacion = resp;
  //       console.log(resp);
  //   });
  // }

  // private CargarTestimonio(){
  //   this.http.get('https://cv-tutorial-70504.firebaseio.com/Testimonio.json')
  //     .subscribe((resp: any[]) => {
  //       this.testimonio = resp;
  //       console.log(resp);
  //   });
  // }

  // private CargarExperiencia(){
  //   this.http.get('https://cv-tutorial-70504.firebaseio.com/Experiencia.json')
  //     .subscribe((resp: any[]) => {
  //       this.experiencia = resp;
  //       console.log(resp);
  //   });
  // }

  // private CargarBlog(){
  //   this.http.get('https://cv-tutorial-70504.firebaseio.com/Blog.json')
  //     .subscribe((resp: any[]) => {
  //       this.blog = resp;
  //       console.log(resp);
  //   });
  // }
}
