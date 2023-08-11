import { Component } from '@angular/core';
import { PlaceorderalertService } from 'src/app/services/placeorderalert.service';


@Component({
  selector: 'app-placeorder-alert',
  templateUrl: './placeorder-alert.component.html',
  styleUrls: ['./placeorder-alert.component.css']
})
export class PlaceorderAlertComponent {

  showAlert: boolean = false;
  alertClass: string = 'hide'; // Initialize with 'hide' class

  constructor(private alertService : PlaceorderalertService) {}

  ngOnInit(): void {
    this.alertService.alertVisible$.subscribe((visible: boolean) => {
      this.showAlert = visible;
      this.alertClass = visible ? 'show' : 'hide';
    });
  }

}
