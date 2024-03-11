import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileRecordComponent } from './tile-record.component';

describe('TileRecordComponent', () => {
  let component: TileRecordComponent;
  let fixture: ComponentFixture<TileRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
