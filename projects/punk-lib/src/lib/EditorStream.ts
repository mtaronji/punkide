import {Subject } from "rxjs";
import { SyntaxColorMap } from "./Assets/PunkSyntaxColorMap";
import { Ruleset } from "./Assets/PunkSyntaxRuleset";
import {SyntaxPatterns} from "./Assets/PunkSyntax";

  export enum StreamValueType{
    EnterType = 1,
    SpaceType = 2,
    Othertype = 3
  }
  export interface position{
    start:number,
    end:number
  }
  export interface line{
    linenumber:number
    words:string[]
    formattedstring:string
  }

  export interface Word{
    
  }
  export class EditorStream{
    charTypes:StreamValueType[]
    stream:string;
    words:string[];
    styledwords:string[];
    formattedlines$:Subject<line[]>;
    lines:string[];
    
    constructor(){
      //this.pausepositioncount = false;
      this.charTypes = [];
      this.words = [];
      this.styledwords = [];
      this.lines = [];
      this.stream = "";
      this.formattedlines$ = new Subject<line[]>;
  
    }
  
    public RemoveLastEditorStreamElement(){
      let lasttype = this.charTypes[this.charTypes.length-1];
      if(lasttype == StreamValueType.EnterType){
        this.stream = this.stream.substring(0, this.stream.length - 5); //remove the characters enter
      }
      else{
        this.stream = this.stream.substring(0, this.stream.length - 1); //remove last char
      }
      this.charTypes.pop(); //pop the type 
    }
    //ADDS and element if it's able to. If it can't it just returns
    public AddElement(key:string):void{

      if(key.trim().length === 0){
        this.charTypes.push(StreamValueType.SpaceType);
        this.stream += key;

      }
      else if(key.toLowerCase() === 'enter'){
        this.charTypes.push(StreamValueType.EnterType);
        this.stream += key.toLowerCase();
        this.UpdateLines();

      }
      else if(key.length > 1){
        //escape key, tab key,...etc
        return;
      }
      else{
        this.charTypes.push(StreamValueType.Othertype);
        this.stream += key;
      }
     
    }
    
    //we will format the lines into divs
    //we will format the words if they require syntax highlighting based on the syntax ruleset
    //lines are seperated by enter
    //words are seperated by whitespace
    private UpdateLines(){
      let formattedlines:line[] = [];
      this.lines = this.stream.split(/enter/).filter(Boolean);
      this.lines.forEach((x,indx,arr) => {

        let words:string[] = x.split(/\s+/).filter(Boolean);
        words.forEach((w:string,idx:number,arr:string[]) => {
          
          for(const [key,value] of Ruleset){
            if(value.test(w)){
              arr[idx]= `${SyntaxColorMap.get(key)}${w}</span>`
            }
          }
        });
        let s:string = `<div>${words.join(" ")}</div>`;
        formattedlines.push({linenumber:indx, words:words,formattedstring:s});
      });
      this.formattedlines$.next(formattedlines);
    }
    private ProduceInnerHtml(){
  
    }
  }
  