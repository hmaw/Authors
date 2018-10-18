import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css"]
})
export class AllComponent implements OnInit {
  authors: Object;
  constructor(
    private _route: ActivatedRoute,
    private _httpService: HttpService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getAllAuthors();

    // this._route.params.subscribe((params: Params) => {  //Does this send my edit?  Where is this obserable from?
    //     console.log(params['id'])
    // });
  }
  getAllAuthors() {
    let observable = this._httpService.getAllAuthors();
    observable.subscribe(data => {
      this.authors = data["data"]; //expecting sub data
      console.log("Got our tasks!", data);
    });
  }

  delAuthor(id) {
    let observableDel = this._httpService.delAuthor(id);
    observableDel.subscribe(data => {
      console.log("Got our Author to delete!", data);
      //this.delAuthor = data["data"];
      this.getAllAuthors(); //refresh list
    }); //subscrible to obserabl
  }
}
