import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandArmeComponent } from './marchand-arme.component';

describe('MarchandArmeComponent', () => {
  let component: MarchandArmeComponent;
  let fixture: ComponentFixture<MarchandArmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarchandArmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandArmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
