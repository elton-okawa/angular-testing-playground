import { inject, Injectable } from '@angular/core';
import { OtherService } from '../other/other.service';

@Injectable({ providedIn: 'root' })
export class AppService {
  otherService = inject(OtherService);

  getMessage(): string {
    return 'Hello world! ' + this.otherService.getOtherMessage();
  }
}
