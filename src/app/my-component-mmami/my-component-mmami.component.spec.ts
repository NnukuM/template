import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentMmamiComponent } from './my-component-mmami.component';

describe('MyComponentMmamiComponent', () => {
  let component: MyComponentMmamiComponent;
  let fixture: ComponentFixture<MyComponentMmamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentMmamiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyComponentMmamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
