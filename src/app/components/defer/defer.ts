import {NgModule,Directive,ElementRef,AfterViewInit,OnDestroy,Input,TemplateRef,EmbeddedViewRef,
        ViewContainerRef,Renderer2,EventEmitter,Output,ContentChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DomHandler} from '../dom/domhandler';

@Directive({
    selector: '[pDefer]',
    host: {
    },
    providers: [DomHandler]
})
export class DeferredLoader implements AfterViewInit,OnDestroy {
        
    @Input() pDeferOnlyEvent = false;
    @Output() onLoad: EventEmitter<any> = new EventEmitter();
    
    @ContentChild(TemplateRef) template: TemplateRef<any>;
        
    documentScrollListener: Function;
    scrollContainer: any;
    
    view: EmbeddedViewRef<any>;
            
    constructor(public el: ElementRef, public domHandler: DomHandler, public renderer: Renderer2, public viewContainer: ViewContainerRef) {}
    
    ngAfterViewInit() {
        if(this.shouldLoad()) {
            this.load();
        }
        this.scrollContainer = this.getScrollParent(this.el.nativeElement);
        this.documentScrollListener = this.renderer.listen(this.scrollContainer, 'scroll', () => {
            if(this.shouldLoad()) {
                this.load();
                this.documentScrollListener();
                this.documentScrollListener = null;
            }
        });
    }

    getScrollParent(node) {
        if (node == null) {
          return null;
        }
      
        if (node.scrollHeight > node.clientHeight) {
          return node;
        } else {
          return this.getScrollParent(node.parentNode);
        }
      }
    
    shouldLoad(): boolean {
        // let rect = this.el.nativeElement.getBoundingClientRect();
        // let docElement = document.documentElement;
        // let scrollTop = (window.pageYOffset||document.documentElement.scrollTop);
        // let winHeight = docElement.clientHeight;
        
        // return (winHeight >= rect.top);
        let element = this.el.nativeElement;
        let container = this.scrollContainer || this.getScrollParent(this.el.nativeElement);

        //Get container properties
        let cTop = container.scrollTop;
        let cBottom = cTop + container.clientHeight;

        //Get element properties
        let eTop = element.offsetTop;
        let eBottom = eTop + element.clientHeight;

        //Check if in view    
        let isTotal = (eTop >= cTop && eBottom <= cBottom);
        let isPartial = true && (
            (eTop < cTop && eBottom > cTop) ||
            (eBottom > cBottom && eTop < cBottom)
        );

        //Return outcome
        return (isTotal || isPartial);
    }

    load(): void {
        if (!this.pDeferOnlyEvent) {
            this.view = this.viewContainer.createEmbeddedView(this.template);
        }
        this.onLoad.emit();
    }
            
    ngOnDestroy() {
        this.view = null;
        
        if(this.documentScrollListener) {
            this.documentScrollListener();
        }
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [DeferredLoader],
    declarations: [DeferredLoader]
})
export class DeferModule { }