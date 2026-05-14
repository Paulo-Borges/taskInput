import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoTwo } from './filho-two';

describe('FilhoTwo', () => {
  let component: FilhoTwo;
  let fixture: ComponentFixture<FilhoTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilhoTwo],
    }).compileComponents();

    fixture = TestBed.createComponent(FilhoTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
