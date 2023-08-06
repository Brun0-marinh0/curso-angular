import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRenderComponent } from './liste-render.component';

describe('ListeRenderComponent', () => {
  let component: ListeRenderComponent;
  let fixture: ComponentFixture<ListeRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeRenderComponent]
    });
    fixture = TestBed.createComponent(ListeRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
