import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  SimpleChange,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native and Emulated is default by ng
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // element property has alias name srvElement in app.component html to receive data from it cause its has @Input()
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement')
  element: { type: string; name: string; content: string };
  @Input()
  name: string;

  @ViewChild('heading')
  header: ElementRef;

  @ContentChild('contentParagraph')
  paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text content' + this.header.nativeElement.textContent);
    console.log(
      'Text content of pargraph' + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit!');
    console.log(
      'Text content of pargraph' + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit!');
    console.log('Text content' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
