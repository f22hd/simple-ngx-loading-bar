import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxHttpLoadingBarComponent } from './ngx-http-loading-bar.component';
import { NgxHttpLoadingBarService } from './ngx-http-loading-bar.service';
import { LoadingBar } from './ngx-loading-bar.model';
import { loadingBarConfigService } from './ngx-loading-bar-config.service';



@NgModule({
  declarations: [NgxHttpLoadingBarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    NgxHttpLoadingBarService
  ],
  exports: [NgxHttpLoadingBarComponent]
})
export class NgxHttpLoadingBarModule {
  static forRoot(config: LoadingBar): ModuleWithProviders {
    return {
      ngModule: NgxHttpLoadingBarModule,
      providers: [
        {
          provide: loadingBarConfigService,
          useValue: config
        }
      ]
    }
  }
}
