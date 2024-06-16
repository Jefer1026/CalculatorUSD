import {Component, input} from '@angular/core';

@Component({
  selector: 'operation-pages-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  public result:string="";
  public resultn:number=0;
  public op:number = 0;



  public sumOperation() :void{
   console.log(this.result);
   this.resultn=Number(this.result);
    this.op=(((this.resultn+(this.resultn*0.07))*4150)*2)+10000;
   console.log(this.op);
   this.result="";

}

}
