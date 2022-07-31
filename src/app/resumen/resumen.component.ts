import { Component, OnInit } from '@angular/core';
import { CvabastidasService } from '../services/cvrafael.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: CvabastidasService) { }

  ngOnInit(): void {
    console.log(this.cv.profesional)
  }

}
