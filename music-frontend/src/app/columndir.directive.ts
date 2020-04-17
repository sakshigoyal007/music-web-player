import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColumndir]'
})
export class ColumndirDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.display="flex";
    el.nativeElement.style.flexDirection="column";
    el.nativeElement.alignItems="space-between";
    el.nativeElement.justifyContent="space-evenly";
    }
    

}
