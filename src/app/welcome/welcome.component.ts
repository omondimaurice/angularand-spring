import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeserviceService } from '../service/welcomeservice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name='';

  title='welcome.ts';
  welcomemessage:string;

  constructor(private route:ActivatedRoute, private helloworlddata:WelcomeserviceService) { }

  ngOnInit() {
   this.title='maurice'

   
    //accepts parameter name 
  this.route.snapshot.params['name']
  }


  //display welcome message n button click
  getWelcomeMessage(){
    //console.log(this.helloworlddata.HelloWorldBeanService());
    this.helloworlddata.HelloWorldBeanService().subscribe(response=>this.handleSuccessfulResponse(response));
    
    console.log('this is the last line of the getWelcome message');
  }

  handleSuccessfulResponse(response){
    
this.welcomemessage=response.message;

  }

  
}
