  import { Component, OnInit } from '@angular/core';
  import { NavController } from '@ionic/angular';

  @Component({
    selector: 'app-welcome',
    templateUrl: './welcome.page.html',
    styleUrls: ['./welcome.page.scss'],
  })
  export class WelcomePage implements OnInit {

    companies: any = 0;

    constructor() {

      let temp = this;
      setTimeout(function(){

        temp.companies =  5;
        
        },
      5000);
    }

    ngOnInit() {
    }

  }
