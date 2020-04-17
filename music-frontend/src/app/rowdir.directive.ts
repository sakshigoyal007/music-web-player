import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRowdir]'
})
export class RowdirDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.display="flex";
    el.nativeElement.style.flexDirection="row";
    el.nativeElement.alignItems="space-evenly";
    
    }
    

}
