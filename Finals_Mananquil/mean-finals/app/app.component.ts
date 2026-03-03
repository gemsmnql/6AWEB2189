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
  editingId: any = null;


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

  editBook(book: any) {
    this.editingId = book.id;
    (<HTMLInputElement>document.getElementById("newBook")).value = book.title;
    (<HTMLInputElement>document.getElementById("newDesc")).value = book.desc;
    (<HTMLInputElement>document.getElementById("newAuthor")).value = book.author;
    (<HTMLInputElement>document.getElementById("newYear")).value = book.year;
    (<HTMLInputElement>document.getElementById("newPrice")).value = book.price;

    (<HTMLButtonElement>document.getElementById("mainBtn")).innerText = "Update Book";
  }

  addBook() {
    const title = (<HTMLInputElement>document.getElementById("newBook")).value;
    const desc = (<HTMLInputElement>document.getElementById("newDesc")).value;
    const author = (<HTMLInputElement>document.getElementById("newAuthor")).value;
    const year = (<HTMLInputElement>document.getElementById("newYear")).value;
    const price = (<HTMLInputElement>document.getElementById("newPrice")).value;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("author", author);
    formData.append("year", year);
    formData.append("price", price);

    if (this.editingId) {
      // UPDATE LOGIC
      formData.append("id", this.editingId);
      this.http.post(this.APIUrl + 'UpdateBook', formData).subscribe(data => {
        alert(data);
        this.resetForm();
        this.refreshBooks();
      });
    } else {
      // ADD LOGIC
      this.http.post(this.APIUrl + 'AddBook', formData).subscribe(data => {
        alert(data);
        this.resetForm();
        this.refreshBooks();
      });
    }
  }

  resetForm() {
    this.editingId = null;
    (<HTMLInputElement>document.getElementById("newBook")).value = "";
    (<HTMLInputElement>document.getElementById("newDesc")).value = "";
    (<HTMLInputElement>document.getElementById("newAuthor")).value = "";
    (<HTMLInputElement>document.getElementById("newYear")).value = "";
    (<HTMLInputElement>document.getElementById("newPrice")).value = "";
    (<HTMLButtonElement>document.getElementById("mainBtn")).innerText = "Add Book";
  }

  deleteBook(id:any){
      this.http.delete(this.APIUrl+'DeleteBook?id='+id).subscribe(data=>{
      alert(data);
      this.refreshBooks()
    })
  }
}
