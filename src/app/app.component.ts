import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseService } from './response.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title;
  response$;
  numbers = [1, 2, 3, 4, 5];

  names = ['Monster1', 'Monster2', 'Monster3', 'Monster4'];

  getUrl() {
    return 'https://api.adorable.io/avatars/140/' + Math.random();
  }

  constructor(private responseService: ResponseService) {
  //  httpClient.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(response => this.title = response);
    this.response$ = responseService.getPosts();

  }



}
