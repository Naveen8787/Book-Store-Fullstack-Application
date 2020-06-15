import { Component, OnInit, Input, Output } from '@angular/core';
import {User} from 'src/app/model/User';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router ,OutletContext } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Input()
  user : User

  @Output()
  userAddedEvent = new EventEmitter();
  newUser:User;
  constructor(private httpClientService: HttpClientService,private router:Router) { }

  ngOnInit() {
    this.newUser =this.user;
  }

  addUser(){
    this.httpClientService.addUser(this.user).subscribe((user) => {
    this.userAddedEvent.emit();
    this.router.navigate(['admin','users']);
    }
    );
  }

}
