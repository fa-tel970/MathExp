import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationlistComponent } from './operationlist.component';

describe('OperationlistComponent', () => {
  let component: OperationlistComponent;
  let fixture: ComponentFixture<OperationlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
