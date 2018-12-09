import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMNGPage } from './group-mng.page';

describe('GroupMNGPage', () => {
  let component: GroupMNGPage;
  let fixture: ComponentFixture<GroupMNGPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMNGPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMNGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
