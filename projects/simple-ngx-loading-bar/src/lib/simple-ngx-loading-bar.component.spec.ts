import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNgxLoadingBarComponent } from './simple-ngx-loading-bar.component';

describe('SimpleNgxLoadingBarComponent', () => {
  let component: SimpleNgxLoadingBarComponent;
  let fixture: ComponentFixture<SimpleNgxLoadingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleNgxLoadingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNgxLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
