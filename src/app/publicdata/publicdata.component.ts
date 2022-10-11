import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-publicdata',
  templateUrl: './publicdata.component.html',
  styleUrls: ['./publicdata.component.css']
})
export class PublicdataComponent implements OnInit {

  constructor(private myapi:ApiService) {

    this.fetchData()

   }

   fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.publicData=data
      }
    )
   }

   publicData:any={}

  ngOnInit(): void {
  }

}
