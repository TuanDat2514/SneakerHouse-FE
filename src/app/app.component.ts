import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, Routes} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'sneaker-house';
  isAdmin:boolean=false;

  constructor(private router: Router) {
    /*if(location.href === "http://localhost:2514/admin"){
      this.isAdmin=true;
    }*/
  }

}
