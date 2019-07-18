import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelAddPage } from './imovel-add.page';

describe('ImovelAddPage', () => {
  let component: ImovelAddPage;
  let fixture: ComponentFixture<ImovelAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImovelAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
