import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsEditAssemblyLineComponent } from './settings-edit-assembly-line.component';

describe('SettingsEditAssemblyLineComponent', () => {
  let component: SettingsEditAssemblyLineComponent;
  let fixture: ComponentFixture<SettingsEditAssemblyLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsEditAssemblyLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsEditAssemblyLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
