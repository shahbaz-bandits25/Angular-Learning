import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import * as wasi from "node:wasi";

@Component({
  selector: 'app-query-fragment',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './query-fragment.component.html',
  styleUrl: './query-fragment.component.css'
})
export class QueryFragmentComponent implements OnInit{
  userName:any ='';
  queryParamName:string | null = null;

  constructor(private route:ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
      // below line of code we need to access the queryparams like this
      // abc.com/?name=ali
      this.route.queryParamMap.subscribe((params) => {
        this.queryParamName = params.get('name');
        console.warn('this.queryParamName',this.queryParamName)
      })


    // the below line of code we need to get the dynamic value from url like
    // abc.com/name=ali so it's not a queryParam
    // this.queryParamName = this.route.snapshot.paramMap.get('name');


    this.route.fragment.subscribe((fragment)=>{
      if(fragment){
        document.getElementById(fragment)?.scrollIntoView({behavior: 'smooth'});
      }
    })

  }


  setQueryParam(){
    this.router.navigate(['/query-fragment'],{queryParams:{name:this.userName}})
    //

  }


}
