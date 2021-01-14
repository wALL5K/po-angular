import { Directive, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';

@Directive({
  selector: '[poPoDomChange]'
})
export class PoDomChangeDirective implements OnDestroy {
  private changes: MutationObserver;

  @Output() domChange = new EventEmitter<MutationRecord>();

  constructor(private elementRef: ElementRef) {
    const element = this.elementRef.nativeElement;
    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
      console.log('ARO', mutations);
      mutations.forEach((mutation: MutationRecord) => this.domChange.emit(mutation));
    });

    this.changes.observe(element, {
      attributes: true,
      childList: true,
      characterData: true
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
