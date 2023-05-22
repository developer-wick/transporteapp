import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoanticipoComponent } from './tipoanticipo.component';

describe('TipoanticipoComponent', () => {
  let component: TipoanticipoComponent;
  let fixture: ComponentFixture<TipoanticipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoanticipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoanticipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
