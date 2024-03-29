import { Component, OnInit } from '@angular/core';
import { faInstagram, faGithub, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram
  faGithub = faGithub
  faLinkedin = faLinkedin
  faTiktok = faTiktok
  faYoutube = faYoutube

  constructor() { }

  ngOnInit(): void {
  }

}
