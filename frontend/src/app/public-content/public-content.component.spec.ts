import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicContentComponent } from './public-content.component';

describe('PublicContentComponent', () => {
  let component: PublicContentComponent;
  let fixture: ComponentFixture<PublicContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
