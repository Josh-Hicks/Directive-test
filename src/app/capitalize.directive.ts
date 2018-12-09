import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[dtCapitalize]'
})
export class CapitalizeDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click')
  onClick() {
    this.toggleTextCasing();
  }

  private toggleTextCasing() {
    (this.el.nativeElement.style.textTransform === 'uppercase') ?
      this.el.nativeElement.style.textTransform = 'lowercase' :
      this.el.nativeElement.style.textTransform = 'uppercase';
  }
}
