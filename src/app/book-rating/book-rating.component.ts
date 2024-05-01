import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book {
  title: string;
  description: string;
  authors: string[];
  image: string;
  link: string;
  rating: number;
  ratings: number[];
  hasRated: boolean;
}

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class BookRatingComponent {
  books: Book[] = [
    {
      title: 'To Kill a Mockingbird',
      link: 'https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird',
      image:
        'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg',
      description:
        'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.',
      authors: ['Harper Lee'],
      rating: 0,
      ratings: [],
      hasRated: false,
    },
    {
      title: '1984',
      link: 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four',
      image:
        'https://covers.storytel.com/jpg-640/9782291963134.7066841c-347d-4c86-b162-aaf158fc3982?optimize=high&quality=70',
      description: 'A dystopian social science fiction novel by George Orwell.',

      authors: ['George Orwell'],
      rating: 0,
      ratings: [],
      hasRated: false,
    },
    {
      title: 'The Great Gatsby',
      link: 'https://en.wikipedia.org/wiki/The_Great_Gatsby',
      image:
        'https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg',
      description:
        "F. Scott Fitzgerald's third book, stands as the supreme achievement of his career.",
      authors: ['F. Scott Fitzgerald'],
      rating: 0,
      ratings: [],
      hasRated: false,
    },
    {
      title: 'Pride and Prejudice',
      link: 'https://en.wikipedia.org/wiki/Pride_and_Prejudice',
      image:
        'https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg',
      description: 'An 1813 romantic novel of manners written by Jane Austen.',
      authors: ['Jane Austen'],
      rating: 0,
      ratings: [],
      hasRated: false,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      link: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone',
      image:
        'https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF894,1000_QL80_DpWeblab_.jpg',
      description:
        'The first novel in the Harry Potter series written by J.K. Rowling.',
      authors: ['J.K. Rowling'],
      rating: 0,
      ratings: [],
      hasRated: false,
    },
  ];
  currentBookIndex = 0;
  get currentBook(): Book {
    return this.books[this.currentBookIndex];
  }

  restart() {
    this.currentBookIndex = 0;
    this.books.forEach((book) => (book.hasRated = false));
  }

  finish() {
    alert('Стига ти толкоз!');
  }

  get allBooksRated(): boolean {
    return this.books.every((book) => book.hasRated);
  }

  rateBook(rating: number) {
    this.currentBook.ratings.push(rating);
    this.currentBook.rating =
      this.currentBook.ratings.reduce((a, b) => a + b) /
      this.currentBook.ratings.length;
    this.currentBook.hasRated = true;
    this.currentBookIndex = (this.currentBookIndex + 1) % this.books.length;
  }

  updateBook(
    title: string,
    description: string,
    authors: string[],
    image: string
  ) {
    this.currentBook.title = title;
    this.currentBook.description = description;
    this.currentBook.authors = authors;
    this.currentBook.image = image;
  }
}
