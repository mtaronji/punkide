import { NgModule } from '@angular/core';
import { PunkPadComponent } from './punk-pad.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PunkPadComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    PunkPadComponent
  ]
})
export class PunkLibModule { }
