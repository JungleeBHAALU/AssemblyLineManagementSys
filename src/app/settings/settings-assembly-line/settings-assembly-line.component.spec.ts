import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAssemblyLineComponent } from './settings-assembly-line.component';

describe('SettingsAssemblyLineComponent', () => {
  let component: SettingsAssemblyLineComponent;
  let fixture: ComponentFixture<SettingsAssemblyLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAssemblyLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAssemblyLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
