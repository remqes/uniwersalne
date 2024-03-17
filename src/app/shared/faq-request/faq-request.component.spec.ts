import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqRequestComponent } from './faq-request.component';

describe('FaqRequestComponent', () => {
  let component: FaqRequestComponent;
  let fixture: ComponentFixture<FaqRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
