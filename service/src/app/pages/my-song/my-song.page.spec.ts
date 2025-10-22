import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MySongPage } from './my-song.page';

describe('MySongPage', () => {
  let component: MySongPage;
  let fixture: ComponentFixture<MySongPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MySongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
