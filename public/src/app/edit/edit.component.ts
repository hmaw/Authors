import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  author: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService,  //TODO is this right?  removed service after _http
  ) { }

  ngOnInit() {
    //obserable here
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])

      let obserable =this._http.getById(params['id'])
      obserable.subscribe(data => {
        console.log(data);
        this.author = data['data']
      })
    });
  }
  onSubmit() {
    let obserable =this._http.editAuthor(this.author)
    obserable.subscribe(data => {
      console.log(data);
      this._router.navigate(['/all']);  //in an if - Subscribe in service
    })
  }
  goHome() {
    this._router.navigate(['/home']);
  }
  deleteTasks(id){
    // return this._http.delete('/author' + id); TODO
  }
  // editAuthor(id){
  //   this._router.navigate(['/edit', id]);
  //   // return this._http.put('/author/' + id, data);
  // }
}
