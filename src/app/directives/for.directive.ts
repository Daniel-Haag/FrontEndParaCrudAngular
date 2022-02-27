import { Directive, OnInit , Input, ViewContainerRef, Injectable, Inject, TemplateRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnChanges {

  @Input('myForEm') numbers: number[] = []
  // @Input('myForUsando') texto: string = ""

  constructor(
    private container: ViewContainerRef, 
    @Inject(TemplateRef) private template: TemplateRef<any>
    ) {}

ngOnChanges(): void {
  //Teste para verificar se obtive os valores
  //usando o Decorator @Input
  console.log(this.numbers);

    for (let number of this.numbers){
      this.container.createEmbeddedView(this.template, { $implicit : number } )
    }
  
  }

}


