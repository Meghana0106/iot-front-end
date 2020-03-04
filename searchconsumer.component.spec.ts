import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchconsumerComponent } from './searchconsumer.component';

describe('SearchconsumerComponent', () => {
  let component: SearchconsumerComponent;
  let fixture: ComponentFixture<SearchconsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchconsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});