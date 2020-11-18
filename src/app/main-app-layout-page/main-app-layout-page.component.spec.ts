import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppLayoutPageComponent } from './main-app-layout-page.component';

describe('MainAppLayoutPageComponent', () => {
  let component: MainAppLayoutPageComponent;
  let fixture: ComponentFixture<MainAppLayoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAppLayoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAppLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
