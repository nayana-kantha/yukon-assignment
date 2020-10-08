import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';

import { FormsModule } from '@angular/forms';
import { DataTablePaginationComponent } from './data-table-pagination/data-table-pagination.component';
import { DataTableRowsPerPageComponent } from './data-table-rows-per-page/data-table-rows-per-page.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataTablePaginationComponent,
    DataTableRowsPerPageComponent,
    SpinnerComponent,
    ErrorHandleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
