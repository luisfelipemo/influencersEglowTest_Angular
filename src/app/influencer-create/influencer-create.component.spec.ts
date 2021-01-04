import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerCreateComponent } from './influencer-create.component';

describe('InfluencerCreateComponent', () => {
  let component: InfluencerCreateComponent;
  let fixture: ComponentFixture<InfluencerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
