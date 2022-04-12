import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemProfileComponent } from './list-item-profile.component';

describe('ListItemProfileComponent', () => {
  let component: ListItemProfileComponent;
  let fixture: ComponentFixture<ListItemProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
