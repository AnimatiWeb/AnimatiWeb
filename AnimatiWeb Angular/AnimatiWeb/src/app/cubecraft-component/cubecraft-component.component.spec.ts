import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubecraftComponentComponent } from './cubecraft-component.component';

describe('CubecraftComponentComponent', () => {
  let component: CubecraftComponentComponent;
  let fixture: ComponentFixture<CubecraftComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubecraftComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CubecraftComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
