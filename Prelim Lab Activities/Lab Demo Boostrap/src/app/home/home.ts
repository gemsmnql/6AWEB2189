import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  ProfURL = "https://hau.instructure.com/images/thumbnails/6881903/reQltVLOSpASwo4I9kJllGBNXCs5RcSogYYFXXlG"
  name = "James Mananquil,"
  ProfAlt = "Picture of James Mananquil"
  Profcaption = " I am a passionate Student Web Developer with a strong focus on frontend design and development. I enjoy creating visually appealing, responsive, and user-friendly websites using HTML, CSS, and JavaScript, while also exploring modern frameworks like React to bring interactivity to life. My main interest lies in crafting engaging interfaces that prioritize accessibility and seamless navigation, ensuring every user has a smooth experience across devices. Alongside my frontend journey, I have begun learning backend fundamentals with Node.js and basic database management, giving me a broader understanding of how full-stack applications work. My goal is to grow into a creative frontend specialist who can collaborate effectively with backend teams, bridging design and functionality to deliver digital experiences that inspire and engage."

}
