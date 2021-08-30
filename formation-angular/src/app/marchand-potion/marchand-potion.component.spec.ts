import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandPotionComponent } from './marchand-potion.component';

describe('MarchandPotionComponent', () => {
  let component: MarchandPotionComponent;
  let fixture: ComponentFixture<MarchandPotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarchandPotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandPotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
