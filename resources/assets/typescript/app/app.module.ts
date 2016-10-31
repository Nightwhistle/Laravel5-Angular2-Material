import {NgModule, enableProdMode} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {MdButtonModule} from "@angular2-material/button";
import {MdInputModule} from "@angular2-material/input";
import "rxjs/add/operator/map";
import {AppComponent} from "./app.component";
import {TasksComponent} from "./tasks.component";
import {HttpModule} from "@angular/http";

enableProdMode();

@NgModule({
  imports:      [ BrowserModule, FormsModule, MdInputModule, MdButtonModule, HttpModule ],
  declarations: [ AppComponent, TasksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }