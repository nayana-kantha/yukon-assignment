import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableRowsPerPageComponent } from './data-table-rows-per-page.component';

describe('DataTableRowsPerPageComponent', () => {
  let component: DataTableRowsPerPageComponent;
  let fixture: ComponentFixture<DataTableRowsPerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableRowsPerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableRowsPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
