import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  private router = inject(Router);

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.router.navigate(['/search'], { queryParams: { searchquery: input.value } });
  }
}
