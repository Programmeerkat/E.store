import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  getBanner() {
    return new Observable;
  }
}
