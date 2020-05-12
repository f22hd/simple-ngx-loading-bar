# SimpleLoadingBar

This library for indicate every http request and showing loading bar as line on the
top of page.

it contains component that should be added into parent app or header app.
To make sure the loading bar will be on top of the app ,
the component styled with absolute position so always will be top and above on all elements.

### When will be shown?

when http request starting , and increased slowly until the request is finished.

### When will be disappeared?

it will be disappeared once a http request is finished.

### How can i use it?

i made it simple as i can. just follow the below few steps:

- import the module into app module ( recommended ).
- add ngx-loading-bar component in any component ( header ).
- calling start/stop methods inside your http interceptor.
  - before starting a request call start method.
  - when you recieve your response call stop method.
- That's set.

### Contribution

I will be more than happy to join me in this project.
just open via codebase and do your magic then make pull request.
