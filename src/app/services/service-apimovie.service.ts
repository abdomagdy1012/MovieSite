import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceApimovieService  implements OnInit{

  constructor(private http : HttpClient) { }
  ngOnInit(): void {
    
  }

  baseurl = 'https://api.themoviedb.org/3'
  apikey = '08cc33bd5ae3a747598ce2ad84376e66'

 //bannerData
  bannrApiData() : Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }

  //trendingdastaapi
  trendingApi():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
  }
  //Search Movie
  searchMovie(data:any): Observable<any>{
    console.log(data,'searchmovie##');
    
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }
  // getMovieDetails
  getMovieDetails(data:any):Observable<any>{
    console.log(data,'getMovieDetails##');
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }
  //video
  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }
  //cast
  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
  //action 
  fetchActionMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
  }
  //adventure 
  fetchAdventureMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
  }
  //animation 
  fetchAnimationMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
  }
  //comedy 
  fetchComedyMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
  }
  //documentry 
  fetchDocumentryMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
  }
   //Science fiction 
  fetchScienceFictionMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
  }
   //thriller 
  fetchThrillerMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
  }
}
