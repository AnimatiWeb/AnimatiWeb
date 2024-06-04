import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LLaverosComponent } from './llaveros.component';

describe('LLaverosComponent', () => {
  let component: LLaverosComponent;
  let fixture: ComponentFixture<LLaverosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LLaverosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LLaverosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
