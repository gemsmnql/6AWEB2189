import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = "Data Binding Demonstration"; //Text Interpolation
  imageUrl = "https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-Transparent-Images.png";
  w = 300;
  h = 200;
  altText = "Pikachu"

  textColor = true
  isHighLighted = true

  yourName = '';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  hpimage = "https://media.istockphoto.com/id/536892143/vector/pixel-heart.jpg?s=612x612&w=0&k=20&c=u3515MLyfFYDxnfXJ8Lv4IkQBqMFBuK1P2S4GtC2D0Y=";
  HPw = 30;
  HPh = 30;
  HPalt = "Pixelated Heart";

  studentName = "James Mananquil";
  score = 95;

  imageURL = "https://static.pokemonpets.com/images/monsters-images-300-300/26-Raichu.webp"
  isDisabled = true;

  colSpanValue = 3;

  isPassing = true;

  boxColor = "purple";
  boxSize = "150px";

}
