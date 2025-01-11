import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]',//propiedad que invoca la directiva 
  standalone: false
})
export class ResaltadoDirective {//lo que hace la directiva

  //tecnica de inyecion de dependencias   
  constructor(private elementRef: ElementRef) {
     console.log(elementRef) 
     this.elementRef.nativeElement.style.backgroundColor = 'grey'
   }

}
