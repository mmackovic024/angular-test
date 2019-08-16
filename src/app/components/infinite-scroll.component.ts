import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';

@Component({
  selector: 'infinite-scroll',
  template: `
    <ng-content></ng-content>
    <div #anchor></div>
  `,
  styles: ['div{height: 2rem}']
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {
  @Input() options = {};
  @Output() scrolled = new EventEmitter();
  @ViewChild('anchor', { static: true }) anchor: ElementRef<HTMLElement>;

  private observer: IntersectionObserver;

  constructor(private host: ElementRef) {}

  ngOnInit() {
    const options = {
      root: null,

      ...this.options
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    }, options);

    this.observer.observe(this.anchor.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect;
  }

  // get element() {
  //   return this.host.nativeElement;
  // }
}
