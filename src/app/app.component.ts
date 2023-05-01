import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor ( public authservice:AuthService) {}
  
  title = 'transporteApp';
  sideBarOpen = true;

  getSideBar(){
    //this.sideBarOpen = localStorage.getItem('menu');
  }

  ngOnInit(): void {
    this.sideBarOpen = true;
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
