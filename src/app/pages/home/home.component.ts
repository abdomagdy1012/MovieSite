import { Component, OnInit } from '@angular/core';
import { ServiceApimovieService } from 'src/app/services/service-apimovie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  banner: any = [];
  trendingMoviesResult:any = [];
  actionMoviesResult:any = [];
  adventureMoviesResult:any = [];
  animationMoviesResult: any = [];
  comedyMoviesResult: any = [];
  documentryMoviesResult: any = [];
  scienceFictionMoviesResult: any = [];
  thrillerMoviesResult: any = []


  constructor(private service : ServiceApimovieService) {}

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovies();
    this.adventureMovies();
    this.animationMovies();
    this.comedyMovies();
    this.documentryMovies();
    this.scienceFictionMovies();
    this.thrillerMovies();
  }
  bannerData(){
    return this.service.bannrApiData().subscribe((result=>{
      console.log(result,'bannerresult#')
      this.banner = result.results;
    }))
  }

  trendingData(){
    return this.service.trendingApi().subscribe((result =>{
      console.log(result);
      this.trendingMoviesResult = result.results
    }))
  }

  //action
  actionMovies(){
    return this.service.fetchActionMovies().subscribe((result =>{
      this.actionMoviesResult = result.results
    }))
  }
  //adventure
  adventureMovies(){
    return this.service.fetchAdventureMovies().subscribe((result) =>{
      this.adventureMoviesResult = result.results
    })
  }
  //animation
  animationMovies(){
    return this.service.fetchAnimationMovies().subscribe((result) =>{
      this.animationMoviesResult = result.results
    })
  }
  //comedy
  comedyMovies(){
    return this.service.fetchComedyMovies().subscribe((result) =>{
      this.comedyMoviesResult = result.results
    })
  }
  //documentry
  documentryMovies(){
    return this.service.fetchDocumentryMovies().subscribe((result) =>{
      this.documentryMoviesResult = result.results
    })
  }
  //scienceFiction
  scienceFictionMovies(){
    return this.service.fetchScienceFictionMovies().subscribe((result) =>{
      this.scienceFictionMoviesResult = result.results
    })
  }
  //thriller
  thrillerMovies(){
    return this.service.fetchThrillerMovies().subscribe((result) =>{
      this.thrillerMoviesResult = result.results
    })
  }
}
