import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocamionComponent } from './tipocamion.component';

describe('TipocamionComponent', () => {
  let component: TipocamionComponent;
  let fixture: ComponentFixture<TipocamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipocamionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipocamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
