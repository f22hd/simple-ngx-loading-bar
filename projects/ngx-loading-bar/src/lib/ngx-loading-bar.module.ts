import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxLoadingBarComponent } from './ngx-loading-bar.component';
import { NgxLoadingBarService } from './ngx-loading-bar.service';
import { LoadingBar } from './ngx-loading-bar.model';
import { loadingBarConfigService } from './ngx-loading-bar-config.service';



@NgModule({
  declarations: [NgxLoadingBarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    NgxLoadingBarService
  ],
  exports: [NgxLoadingBarComponent]
})
export class NgxLoadingBarModule {
  static forRoot(config: LoadingBar): ModuleWithProviders {
    return {
      ngModule: NgxLoadingBarModule,
      providers: [
        {
          provide: loadingBarConfigService,
          useValue: config
        }
      ]
    }
  }
}
