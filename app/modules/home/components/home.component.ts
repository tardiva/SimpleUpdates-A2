import { Component, OnInit } from '@angular/core';


    @Component({
        
        selector: 'home',
        template: `<navigation></navigation>
                   <router-outlet></router-outlet>`
        })

export class HomeComponent implements OnInit{
    
    initTest: string;
    
    constructor() { }
    
    ngOnInit() { }
         
}