import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class ReadingService {

  getBooks(): Book[] {
    var books: Book[] = [
      {
        "title": "Deep Learning with Python",
        "author": 
        {
          "displayName": "Francois Chollet"
        },
      },
      {
        "title": "Life 3.0",
        "author":
        {
          "displayName": "Max Tegmark"
        },
      },
    ];
    return books;
  }

}
