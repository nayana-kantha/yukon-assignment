import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableService } from '../services/data-table.service';
import { takeUntil } from 'rxjs/operators';
import { DataTable } from './../models/data-table'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit,OnDestroy {

  private unsubscribe$ = new Subject;
  paginationData = [];
  tableData =[];
  defaultRowsPerPage:number = 10;
  rowsPerPage = [5,10,20,50]
  fullDataSet:any;
  showSpinner:boolean = true;
  isError:boolean = false;
  activatePaginator = 0;
  constructor(
    private DataTableService:DataTableService
  ) { }

  ngOnInit(): void {

    //Set default values
    this.defaultRowsPerPage = 10;
    this.activatePaginator = 0;

    //Initiate data retriving method
    this.fectDataTableData();
  }

  /**
   * Call to backend api and retrive data to view
   */
  fectDataTableData(){
    this.DataTableService.getDataTableData()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      (data:DataTable) => {
        this.fullDataSet = [];
        this.fullDataSet = data;
        this.paginationData=this.chunkFullDataSet(data,this.defaultRowsPerPage);
        this.tableData = this.paginationData[0];
        this.showSpinner = false;
        this.isError = false;
      },
      error => {
        this.showSpinner = false;
        this.isError = true;
      }
    )
  }

  /**
   * Slice full data set base on row per page value
   * @param data 
   * @param chunk_size 
   */
  chunkFullDataSet(data, chunk_size){
    var index = 0;
    var arrayLength = data.length;
    var tempArray = [];
    var dataChunk;
    for (index = 0; index < arrayLength; index += chunk_size) {
        dataChunk = data.slice(index, index+chunk_size);
        tempArray.push(dataChunk);
    }
    return tempArray;
  }

  onClickPagination(index){
    this.activatePaginator = index;
    this.tableData = this.paginationData[index]
  }

  onChangRow(value){
    this.activatePaginator = 0;
    this.paginationData = this.chunkFullDataSet(this.fullDataSet,+value);
    this.tableData = this.paginationData[0];
  }

  ngOnDestroy(){
    /**
     * Unsubscribe, subcription when component destroy. 
     */
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  
}
