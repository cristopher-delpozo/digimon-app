import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonHeaderComponent } from './digimon-header.component';

describe('DigimonHeaderComponent', () => {
  let component: DigimonHeaderComponent;
  let fixture: ComponentFixture<DigimonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
