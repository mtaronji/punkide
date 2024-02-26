import {Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, fromEvent} from 'rxjs';
import { AfterViewInit} from '@angular/core';
import { EditorStream } from './EditorStream';


@Component({
  selector: 'punk-pad',
  templateUrl: 'punk-pad.component.html',
  styleUrls: ['punk-pad.component.scss'] //temporary. Change for application deployment
})


export class PunkPadComponent implements AfterViewInit{
  @ViewChild('PunkEditor',{static:true}) PunkEditor:ElementRef<HTMLDivElement>;
  EditorKeyup$:Observable<KeyboardEvent> | undefined;
  EditorStream:EditorStream;

  constructor(){
    this.PunkEditor = {} as ElementRef<HTMLDivElement>;
    this.EditorKeyup$ = undefined;
    this.EditorStream = new EditorStream();
    this.EditorStream.formattedlines$.subscribe(l =>{
      this.PunkEditor.nativeElement.innerHTML = "";
      l.forEach(l => {
        this.PunkEditor.nativeElement.innerHTML += l.formattedstring;
      });
      this.PunkEditor.nativeElement.innerHTML += "<div></div>"; //the next line of content
      this.SetCursor(l.length);  
    });
  }
  ngAfterViewInit(): void {
    this.EditorKeyup$ = fromEvent<KeyboardEvent>(this.PunkEditor.nativeElement,'keydown');
    this.EditorKeyup$.subscribe((n:KeyboardEvent) => {
      if(n.key.toLowerCase() === 'backspace'){
        //remove last element
        this.EditorStream.RemoveLastEditorStreamElement();
      }
      else{       
        this.EditorStream.AddElement(n.key);
      }
    }); 
  }

  //set the blinking cursor to the beginning of the new line
  private SetCursor(linecount:number) {
    
    var range = document.createRange()
    var sel = window.getSelection()
    
    range.setStart(this.PunkEditor.nativeElement.childNodes[linecount],0);
    range.collapse(true)

    sel?.removeAllRanges();
    sel?.addRange(range);
    this.PunkEditor.nativeElement.focus();
  }
 
}
  


// onblur="onDivBlur();" onmousedown="return cancelEvent(event);" onclick="return cancelEvent(event);" contentEditable="true" onmouseup="saveSelection();" onkeyup="saveSelection();" onfocus="restoreSelection();"