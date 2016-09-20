import { ModuleWithProviders,
         NgModule,
         Optional,
         SkipSelf }           from '@angular/core';
import { CommonModule }      from '@angular/common';
import { HttpModule }    from '@angular/http';

import { httpAuth } from '../../services/httpAuth.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user-data.service';


@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [  ],
  exports:      [  ],
  providers:    [ httpAuth, AuthService, UserService ]
})

export class CoreModule {
}