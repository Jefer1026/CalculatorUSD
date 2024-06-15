import {Component, input} from '@angular/core';

@Component({
  selector: 'operation-pages-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  public result:number=0;
  public op:number = 0;
  public option:string="";


  public sumOperation() :void{

    this.op=(((this.result+(this.result*0.07))*4150)*2)+10000;
    this.result=0;


}

}
