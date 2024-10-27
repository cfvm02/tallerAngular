/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeriesComponent } from './series.component.js';

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesComponent]
    })
    .compileComponents();
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
