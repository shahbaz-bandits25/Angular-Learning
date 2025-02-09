import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFragmentComponent } from './query-fragment.component';

describe('QueryFragmentComponent', () => {
  let component: QueryFragmentComponent;
  let fixture: ComponentFixture<QueryFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryFragmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
