import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGroupPage } from './join-group.page';

describe('JoinGroupPage', () => {
  let component: JoinGroupPage;
  let fixture: ComponentFixture<JoinGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
