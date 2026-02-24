import { Component } from '@angular/core';
import { Search } from '../search/search';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [Search, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
