import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsportsRegister } from './esports-register';

describe('EsportsRegister', () => {
  let component: EsportsRegister;
  let fixture: ComponentFixture<EsportsRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsportsRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsportsRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
