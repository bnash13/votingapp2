import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongvotingComponent } from './songvoting.component';

describe('SongvotingComponent', () => {
  let component: SongvotingComponent;
  let fixture: ComponentFixture<SongvotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongvotingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongvotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
