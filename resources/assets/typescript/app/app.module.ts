import {NgModule, enableProdMode} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {MdButtonModule} from "@angular2-material/button";
import {MdInputModule} from "@angular2-material/input";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {Ng2PaginationModule} from 'ng2-pagination';
import "rxjs/add/operator/map";

import {TasksComponent} from "./tasks.component";
import {AddNewTaskComponent} from "./add-new-task.component";
import {TasksService} from "./tasks.service";

enableProdMode();

@NgModule({
  imports:      [ BrowserModule, FormsModule, MdInputModule, MdButtonModule, HttpModule, Ng2PaginationModule ],
  declarations: [ AppComponent, TasksComponent, AddNewTaskComponent ],
  providers:    [ TasksService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }