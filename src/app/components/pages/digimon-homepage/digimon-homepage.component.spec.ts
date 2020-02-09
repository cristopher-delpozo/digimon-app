import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonHomepageComponent } from './digimon-homepage.component';

describe('DigimonHomepageComponent', () => {
  let component: DigimonHomepageComponent;
  let fixture: ComponentFixture<DigimonHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
