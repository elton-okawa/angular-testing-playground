import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CdkMenuTrigger, CdkMenu, CdkMenuItem],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  service = inject(AppService);
  title = 'angular-testing-playground';

  public log(message: string) {
    console.log(message);
  }
}
