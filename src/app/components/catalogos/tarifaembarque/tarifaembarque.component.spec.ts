import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaembarqueComponent } from './tarifaembarque.component';

describe('TarifaembarqueComponent', () => {
  let component: TarifaembarqueComponent;
  let fixture: ComponentFixture<TarifaembarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifaembarqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifaembarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
