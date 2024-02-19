import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceApimovieService } from 'src/app/services/service-apimovie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  constructor(private service: ServiceApimovieService,private router: ActivatedRoute){}

  getMovieResult : any;
  getMovieVideoResult : any;
  getMovieCastResult:any;
  ngOnInit(): void {
    let getparamid  = this.router.snapshot.paramMap.get('id')
    console.log(getparamid,'getparamid###');
    
    this.getMovie(getparamid);
    this.getMovieVideo(getparamid);
    this.getMovieCast(getparamid);
  }

  getMovie(id:any){
    return this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'getmovieDetails##');
      this.getMovieResult = result;
    })
  }

  getMovieVideo(id:any){
    return this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'getmovieVideo##');
      result.results.forEach((element: any) => {
        if(element.type == "Trailer"){
          this.getMovieVideoResult = element.key;
        }
      });
    })
  }

  getMovieCast(id:any){
    return this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'getMovieCast##');
      this.getMovieCastResult = result.cast;
    })
  }

}
