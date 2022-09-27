import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotNewsComponent } from './hot-news.component';

describe('HotNewsComponent', () => {
  let component: HotNewsComponent;
  let fixture: ComponentFixture<HotNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
