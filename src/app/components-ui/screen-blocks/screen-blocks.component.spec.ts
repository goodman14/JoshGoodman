import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenBlocksComponent } from './screen-blocks.component';

describe('ScreenBlocksComponent', () => {
  let component: ScreenBlocksComponent;
  let fixture: ComponentFixture<ScreenBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
