import { Component ,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showtime';
  NavScroll : any;
  @HostListener ('document: scroll') scroll(){
  
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.NavScroll = {
        'background-color' : '#000000'
      }
    } else{
      this.NavScroll = {}
    }
  }
}

