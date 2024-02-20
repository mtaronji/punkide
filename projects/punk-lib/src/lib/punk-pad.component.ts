
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, fromEvent, map} from 'rxjs';
import { AfterViewInit} from '@angular/core';


@Component({
  selector: 'punk-pad',
  templateUrl: 'punk-pad.component.html',

  styles: [
  ]
})
export class PunkPadComponent implements AfterViewInit{
  @ViewChild('punkide',{static:true}) PunkIDE:ElementRef;
  CurrentWord:string | null;
  Input$:Observable<string | null> | null;
  constructor(){
    this.PunkIDE = {} as ElementRef;
    this.CurrentWord = null;
    this.Input$ = null;
    
  }
  ngAfterViewInit(): void {

    const event2:Observable<KeyboardEvent> = fromEvent(this.PunkIDE.nativeElement,'keydown');
    event2.subscribe(n => {
      console.log(n.code);
    });
    const event1:Observable<InputEvent> = fromEvent(this.PunkIDE.nativeElement,'input');
    this.Input$ = event1.pipe(map(e => e.data));
    this.Input$.subscribe(e =>{
      console.log(e);
    });
    
  }
  
  private CheckGrammar(){

  }
  private FormatLine(){

  }

}
