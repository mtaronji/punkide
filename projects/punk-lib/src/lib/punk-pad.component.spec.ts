import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunkPadComponent } from './punk-pad.component';


describe('PunkLibComponent', () => {
  let component: PunkPadComponent;
  let fixture: ComponentFixture<PunkPadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PunkPadComponent]
    });
    fixture = TestBed.createComponent(PunkPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have Editor Stream functioning correctly', ()=>{
  
  });

});
