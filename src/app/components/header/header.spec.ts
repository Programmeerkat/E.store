import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { Header } from './header';
import { Search } from '../search/search';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header, ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {},
            params: {},
            queryParams: {},
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
