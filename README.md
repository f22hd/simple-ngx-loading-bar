# SimpleLoadingBar

An angular library allows a developer to show the loading bar at the top of the app, such as indicating an Http request and showing the loading bar until request is finished.

#### About Library

it contains a single component that should be added into your parent component app or header app.
To make sure the loading bar will be on top of the app,
the component styled with an absolute position so always will be top and above on all elements.

### Installation

- run this command in your terminal

```
npm i simple-ngx-loading-bar
```

- import the module in your app module

```
import { SimpleNgxLoadingBarModule } from 'simple-ngx-loading-bar';
@NgModule({
  declarations: [...],
  imports: [
   ...,
    SimpleNgxLoadingBarModule.forRoot({
      color: 'red' // define your custom color by any background property value.
    })
  ],
  providers: [],
  bootstrap: [...]
})
export class AppModule { }

```

- add the selector into your component html

```
 <simple-ngx-loading-bar></simple-ngx-loading-bar>
```

- finally , we have it's service for controlling visiblity of the loading bar.

```
import { SimpleNgxLoadingBarService } from 'simple-ngx-loading-bar';

export class AppComponent {
  constructor(private loader: SimpleNgxLoadingBarService) { }

  start() {
  // show loading indicator
    this.loader.show();
  }

  complete() {
  // hide loading indicator
    this.loader.hide();
  }

```

That's set.

### Contribution

I will be more than happy to join me in this project.
just open via codebase and do your magic then make pull request.
