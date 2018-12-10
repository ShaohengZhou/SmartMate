import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteMemberPage } from './invite-member.page';

describe('InviteMemberPage', () => {
  let component: InviteMemberPage;
  let fixture: ComponentFixture<InviteMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteMemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
