import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  service = inject(AppService);
  title = 'angular-testing-playground';

  message = this.service.getMessage();
}
