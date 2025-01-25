import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OtherService {
  getOtherMessage() {
    return 'other!';
  }
}
