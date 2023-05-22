import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  exampleString:any = "";
  
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logOut() {
    localStorage.removeItem('User');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getUser(){
    this.exampleString = localStorage.getItem('User');
  }

}
