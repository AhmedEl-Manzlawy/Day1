import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit ,OnChanges{
  // @Input() dcolor ="";//test1
  // @Input('appHighlight') dcolor ="";//test2


  @Input('appHighlight') dcolor ="green";
  @Input() highlightcolor ="brown";


  @HostListener('mouseover')
  changeColorHighlight(){
    this.elm.nativeElement.style.backgroundColor=this.highlightcolor;
  }
  @HostListener('mouseleave')
  changeColorHighlightToDefault(){
    this.elm.nativeElement.style.backgroundColor=this.dcolor;
  }

  constructor(private elm:ElementRef) { }
  ngOnChanges(){
    this.elm.nativeElement.style.backgroundColor=this.dcolor;
  }
  ngOnInit(){
    // this.elm.nativeElement.style.backgroundColor=this.dcolor;

  }
}
