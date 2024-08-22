import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcomComponent } from './testcom.component';

describe('TestcomComponent', () => {
  let component: TestcomComponent;
  let fixture: ComponentFixture<TestcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestcomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
