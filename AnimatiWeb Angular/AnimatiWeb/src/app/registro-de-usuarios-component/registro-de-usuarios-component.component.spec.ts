import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeUsuariosComponentComponent } from './registro-de-usuarios-component.component';

describe('RegistroDeUsuariosComponentComponent', () => {
  let component: RegistroDeUsuariosComponentComponent;
  let fixture: ComponentFixture<RegistroDeUsuariosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroDeUsuariosComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroDeUsuariosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
