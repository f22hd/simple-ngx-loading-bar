import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleNgxLoadingBarComponent } from './simple-ngx-loading-bar.component';
import { SimpleNgxLoadingBarService } from './simple-ngx-loading-bar.service'
import { LoadingBar } from './simple-ngx-loading-bar.model';
import { loadingBarConfigService } from './simple-ngx-loading-bar-config.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [SimpleNgxLoadingBarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    SimpleNgxLoadingBarService
  ],
  exports: [SimpleNgxLoadingBarComponent]
})
export class SimpleNgxLoadingBarModule {
  static forRoot(config: LoadingBar): ModuleWithProviders {
    return {
      ngModule: SimpleNgxLoadingBarModule,
      providers: [
        {
          provide: loadingBarConfigService,
          useValue: config
        }
      ]
    }
  }
}
