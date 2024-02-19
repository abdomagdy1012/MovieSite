import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { ServiceApimovieService } from 'src/app/services/service-apimovie.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  constructor(private service : ServiceApimovieService){}

  searchResult: any;
  searchForm = new FormGroup({
    'movieName' : new FormControl(null)
  })


  submit(){
    this.service.searchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result,'getMovie###');
      this.searchResult = result.results
      
    })
    
  }
}

