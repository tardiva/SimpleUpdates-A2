import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
 
@Directive({
    selector: '[clickOutside]'
})

export class ClickOutsideDirective {
    
    constructor(private elementRef : ElementRef) {
        
    }
    
    @Output() public clickOutside: EventEmitter<any> = new EventEmitter();

    @HostListener('document:click', ['$event.target']) public onClick(targetElement) {
        
        const isInside = this.elementRef.nativeElement.contains(targetElement);
        if (!isInside) {
            this.clickOutside.emit();
            //console.log('click outside!' + targetElement);
        }
        
    }
}
 