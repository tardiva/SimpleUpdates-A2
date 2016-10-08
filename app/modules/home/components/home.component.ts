import { Component } from '@angular/core';

    @Component({
        
        selector: 'home',
        template: `<navigation></navigation>
                   <router-outlet></router-outlet>`
        })

    export class HomeComponent {

        constructor() {
        }

    }