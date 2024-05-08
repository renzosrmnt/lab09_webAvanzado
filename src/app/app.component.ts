import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludoomponent } from "./saludo/saludo.component";
import { ContadorComponent } from "./contador/contador.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Saludoomponent, ContadorComponent]
})
export class AppComponent {
  title = 'mi-app-angular';
}
