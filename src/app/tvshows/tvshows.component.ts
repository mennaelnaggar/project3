import { Component,OnInit } from '@angular/core';
import { TvshowsService } from '../tvshows.service';
 @Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit{
  searchValue:string='menna';
toggleData: boolean =true;
imagePath: string = 'https://image.tmdb.org/t/p/w500';
allTVshows!:any[];
totalTVshows!:number;
 constructor(private TVService:TvshowsService){

 }
 
 ngOnInit(): void{
  this.TVService.getAllTVshows().subscribe ({next:(response)=>{
    console.log(response);
    
    this.allTVshows=response.results
   this.totalTVshows=response.total_results

  }})
  }
  
} 
