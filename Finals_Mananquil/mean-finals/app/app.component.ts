import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booksapp';
  //set the link of the based route
  readonly APIUrl="http://localhost:5038/api/books/";


  constructor(private http:HttpClient){
  }
  //initialize the books array
  books:any=[];

  refreshBooks(){
    this.http.get(this.APIUrl+'GetBooks').subscribe(data=>{
      this.books=data;
    })
  }
  ngOnInit(){
    this.refreshBooks();
  }

  addBook() {
  const title = (<HTMLInputElement>document.getElementById("newBook")).value;
  const desc = (<HTMLInputElement>document.getElementById("newDesc")).value;
  const author = (<HTMLInputElement>document.getElementById("newAuthor")).value; // New
  const year = (<HTMLInputElement>document.getElementById("newYear")).value; // New
  const price = (<HTMLInputElement>document.getElementById("newPrice")).value;

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", desc);
  formData.append("author", author); // New
  formData.append("year", year);     // New
  formData.append("price", price);

  this.http.post(this.APIUrl + 'AddBook', formData).subscribe(data => {
    alert(data);
    this.refreshBooks();
  });
}

  deleteBook(id:any){
      this.http.delete(this.APIUrl+'DeleteBook?id='+id).subscribe(data=>{
      alert(data);
      this.refreshBooks()
    })
  }
}
