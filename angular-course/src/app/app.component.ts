import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
  title: 'Angular core deep dive'
  }

  onKeyUp(titleInput: string){
    this.data.title = titleInput;
  }

}
