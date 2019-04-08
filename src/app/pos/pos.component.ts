import { Component, OnInit } from '@angular/core';


export class Pos{
 
  constructor(
    public id:number,
    public serialNumber: string,
    public make:string,
    public owner: string,
    public timestamp:Date
  )
  
  {

   
  }
  
  
  }

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})


export class PosComponent implements OnInit {
poss=[ new Pos(1,'klj234','racom','kevin', new Date()),
new Pos(2,'klj23m4','accom','david',  new Date()),
new Pos(3,'klj5l64','tracom','joseph', new Date()),
new Pos(4,'kljk23','hpom','kennedy', new Date()),
new Pos(5,'klj24','ibmom','josiah', new Date()),
new Pos(6,'kly234','lencom','ian', new Date()),
new Pos(7,'zxlj234','ascom','felix', new Date())
]



 
  constructor() { }

  ngOnInit() {
  
  }
  
  
  
  }
