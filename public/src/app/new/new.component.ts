import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  newAuthor : any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) { }

  ngOnInit() {
    this.newAuthor = {name: ""}
  }
  onSubmit() {
    //add data
    this.addAuthor()
    console.log("It was submited  - newAuthor", this.newAuthor.name)
    //make it go to all page to display
    this._router.navigate(['/all']);
  }
  addAuthor(){
    
    let observable = this._httpService.addAuthors(this.newAuthor);
    observable.subscribe(data => {
      this.newAuthor=data['data']; //expecting sub data
      console.log("AddAuthors to our Authors!", data);
    })
  }

}
