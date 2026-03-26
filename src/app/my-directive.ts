import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
  standalone: false,
})
export class MyDirective implements OnInit {
  @HostBinding('style.color') styleColor!: string;
  @HostListener('mouseenter') onMouseEnter(): void {
    this.styleColor = 'black';
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.styleColor = this.color ? this.color : 'red';
  }

  @Input('appMyDirective') color = 'red';

  constructor() {
    console.log(this.color, 'constructor');
    // this.styleColor = this.color;
  }

  ngOnInit(): void {
    console.log(this.color, 'ngOnInit');
    if(this.color) {
      this.styleColor = this.color;
    } else {
      this.styleColor = 'red';
    }

  }
}
