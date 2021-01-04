import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerUpdateComponent } from './influencer-update.component';

describe('InfluencerUpdateComponent', () => {
  let component: InfluencerUpdateComponent;
  let fixture: ComponentFixture<InfluencerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
