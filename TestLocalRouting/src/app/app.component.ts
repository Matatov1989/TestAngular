import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TestLocalRouting';
  selected: string;

  localList: Language[] = [
    { code: "en", label: "English"},
    { code: "ru", label: "Русский"},
    { code: "iw", label: "Hebrew"},
  ];


  constructor(private router: Router) {
  }

  select(event: Event) {

    this.selected = (event.target as HTMLSelectElement).value;
    console.log('selected  ', event.target);
//    this.router.navigateByUrl("/home");
  }
}

interface Language {
  code: string;
  label: string;
}
