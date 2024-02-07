import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  header: string = 'CineMille';
  footer: any = {email:'CineMille@fake', address: "via roma"};
  button1: any = {};
  button2: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    this.button1 = {
      title: "Programmazione",
      enabled: true,
      routerLink: ""
    }
    this.button2 = {
      title: "Storico",
      enabled: true,
      routerLink: ""
    }
  }

  clickButton1(){
    this.router.navigate(["home/programming"]);
  }

  clickButton2(){
    this.router.navigate(["home/history"]);
  }

}
