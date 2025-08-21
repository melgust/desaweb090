import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esian } from './esian';

describe('Esian', () => {
  let component: Esian;
  let fixture: ComponentFixture<Esian>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esian]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esian);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
