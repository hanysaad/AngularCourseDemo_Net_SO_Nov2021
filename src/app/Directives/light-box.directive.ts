import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLightBox]'
})
export class LightBoxDirective implements OnChanges, OnInit {
  @Input() hoverColor:string='yellow';
  @Input('appLightBox') defaultColor:string="white";
  constructor(private elem:ElementRef) {
    // this.elem.nativeElement.style="border: white 3px solid";
    
   }
  ngOnInit(): void {
   
  }

  ngOnChanges(): void {
    this.elem.nativeElement.style="border: " + this.defaultColor +" 5px solid"
  }

   @HostListener('mouseover') onMouseOver()
   {
     this.elem.nativeElement.style="border: " + this.hoverColor+" 5px solid"
     console.log(this.hoverColor);
   }

   @HostListener('mouseout') onMouseOut()
   {
    // this.elem.nativeElement.style="border: white 3px solid";
    this.elem.nativeElement.style="border: " + this.defaultColor+" 5px solid"
   }

}
