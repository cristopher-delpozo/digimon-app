import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonContentComponent } from './digimon-content.component';

describe('DigimonContentComponent', () => {
  let component: DigimonContentComponent;
  let fixture: ComponentFixture<DigimonContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
