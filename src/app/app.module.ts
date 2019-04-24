import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiintableComponent } from './apiintable/apiintable.component';
import { HttpClientModule } from '@angular/common/http';
import { ApihandlerService } from './apihandler.service';
import { JobsiteDataHandleComponent } from './jobsite-data-handle/jobsite-data-handle.component';
import { HttpResponseErrorsComponent } from './http-response-errors/http-response-errors.component';
import { LoginErrorsComponent } from './login-errors/login-errors.component';
import { ArraySortComponent } from './array-sort/array-sort.component';
import { NumberSortComponent } from './number-sort/number-sort.component';
import { ArrObjSortComponent } from './arr-obj-sort/arr-obj-sort.component';
import { OnjectListSortComponent } from './onject-list-sort/onject-list-sort.component';
import { ObjectCopyComponent } from './object-copy/object-copy.component';
import { FilterStudentComponent } from './filter-student/filter-student.component';
import { FilterStudentCheckboxComponent } from './filter-student-checkbox/filter-student-checkbox.component';
import { ShowPipesComponent } from './show-pipes/show-pipes.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { ShortPipe } from './short.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ApiintableComponent,
    JobsiteDataHandleComponent,
    HttpResponseErrorsComponent,
    LoginErrorsComponent,
    ArraySortComponent,
    NumberSortComponent,
    ArrObjSortComponent,
    OnjectListSortComponent,
    ObjectCopyComponent,
    FilterStudentComponent,
    FilterStudentCheckboxComponent,
    ShowPipesComponent,
    CustompipeComponent,
    ShortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApihandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
