import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-table-pagination',
  templateUrl: './data-table-pagination.component.html',
  styleUrls: ['./data-table-pagination.component.scss']
})
export class DataTablePaginationComponent implements OnInit {

  @Input() paginationData;
  @Output() clickedPaginationItem: any = new EventEmitter();
  @Input() activatePaginator;
  constructor() { }

  ngOnInit(): void {
    this.activatePaginator = 0;
  }

  onClickPagination(index){
    this.clickedPaginationItem.emit(index)
  }

  onClickFirst(){
    this.clickedPaginationItem.emit(0)
  }

  onClickLast(){
    this.clickedPaginationItem.emit(this.paginationData.length-1)
  }
}
