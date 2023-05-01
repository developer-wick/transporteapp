import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  label1:any = "";
  label11:any = "";
  label2:any = "";
  label21:any = "";
  label3:any = "";
  label31:any = "";
  label4:any = "";
  label41:any = "";
  constructor() { }

  ngOnInit(): void {
    this.label1 = "15";
    this.label11 = "VIAJES";
    this.label2 = "25";
    this.label21 = "VALES";
    this.label3 = "50";
    this.label31 = "POLIZAS";
    this.label4 = "75";
    this.label41 = "DIESEL";
  }

}
