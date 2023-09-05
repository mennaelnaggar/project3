import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvshowsService } from '../tvshows.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css']
})
export class TvdetailsComponent implements OnInit {
  selectedTV:any ;
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  constructor(public route:ActivatedRoute,private TVService:TvshowsService) {}



  ngOnInit():void{
    let TVID =  parseInt (this.route.snapshot.paramMap.get('id')!);
     this.TVService. getTVshowsById(TVID).subscribe( {next:(response)=>{
      this.selectedTV=response

    }})
     console.log(this.selectedTV);
  }


}
 