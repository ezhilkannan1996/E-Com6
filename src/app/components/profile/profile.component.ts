import { Component, HostListener } from '@angular/core';
import { users } from 'src/app/interface/data-type';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  showPopup = false;
popupStyles = {};
//loggedInUser: any;
loggedInUser: users | null = null;

constructor(private userService: UserService) {
  this.userService.loggedInUser$.subscribe(user => {
    this.loggedInUser = user;
  });

}



@HostListener('mouseenter')
onMouseEnter() {

  this.showPopup = true;
 
}

@HostListener('mouseleave')
onMouseLeave() {
  this.showPopup = false;
}
}