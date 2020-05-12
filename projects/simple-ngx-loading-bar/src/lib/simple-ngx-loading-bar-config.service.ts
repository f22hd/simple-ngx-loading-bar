import { InjectionToken } from '@angular/core';
import { LoadingBar } from './simple-ngx-loading-bar.model';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionTToken used to import the config object, provided from the outside
 */

export const loadingBarConfigService = new InjectionToken<LoadingBar>('ConfigSimpleNgxLoadingBarService');
