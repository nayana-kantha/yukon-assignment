import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-table-rows-per-page',
  templateUrl: './data-table-rows-per-page.component.html',
  styleUrls: ['./data-table-rows-per-page.component.scss']
})
export class DataTableRowsPerPageComponent implements OnInit {
  @Input() fullDataSet;
  @Output() noOfRowsPerPage: any = new EventEmitter();
  defaultRowsPerPage:number = 10;
  rowsPerPage = [5,10,20,50]
  constructor() { }

  ngOnInit(): void {
    this.defaultRowsPerPage = 10;
  }

  onChangRow(value){
    this.noOfRowsPerPage.emit(value)
  }

}
