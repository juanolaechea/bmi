import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi:number;
  resultado:string;
  

  constructor(private route: ActivatedRoute) {
    this.bmi =+route.snapshot.paramMap.get('valor')!;
    this.resultado='';
  
   }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(): void {

    if(this.bmi >= 25) {

      this.resultado='Peso superior al normal';
    }else if(this.bmi >= 18.5){
      this.resultado='Peso Normal';
    }else{
      this.resultado='Bajo peso';
    }
  }

}
