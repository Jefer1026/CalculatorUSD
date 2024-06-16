import {Component} from '@angular/core';

@Component({
  selector: 'operation-pages-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  public result: string = "";
  public resultn: number = 0;
  public op: number = 0;


  public sumOperation(): void {

    this.resultn = Number(this.result);

    if(this.resultn !==0){

      this.op = (((this.resultn + (this.resultn * 0.07)) * 4150) * 2) + 10000;
      this.result = "";
    }else{
      this.op = 0;
    }

  }

}
