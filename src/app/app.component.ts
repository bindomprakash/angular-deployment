import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { concatMap, from, map, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  titles: any =  ''
  concatMap: any;
  mergeMap: any;
  switchMap: any;
  observable:any;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    function test(val: any) {
      return of(val + " : " + "vedio");
    }

    const obs = from(["comedy","threler","action","romantic"]);
    this.observable = obs;

    obs.pipe(
      concatMap((data: any)=> test(data))
    ).subscribe((res) => {
      console.log(res);
      this.concatMap  = res;
    },
      (err) => {
        console.log(err);
      }
    )


    obs.pipe(
      mergeMap((data: any)=> test(data))
    ).subscribe((res) => {
      console.log(res);
      this.mergeMap  = res;
    },
      (err) => {
        console.log(err);
      }
    )


    obs.pipe(
      switchMap((data: any)=> test(data))
    ).subscribe((res) => {
      console.log(res);
      this.switchMap  = res;
    },
      (err) => {
        console.log(err);
      }
    )
  }


}
