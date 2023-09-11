import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiedMessageComponent } from './copied-message.component';

describe('CopiedMessageComponent', () => {
  let component: CopiedMessageComponent;
  let fixture: ComponentFixture<CopiedMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopiedMessageComponent]
    });
    fixture = TestBed.createComponent(CopiedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
