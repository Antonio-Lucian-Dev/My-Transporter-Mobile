import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Notification } from '../../interface/notification';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  notificationList: Notification[] = [];

  constructor(private notificationService: NotificationService, private navCtrl: NavController) { }

  ngOnInit(): void {
    this.notificationService.findAllNotification().subscribe(notifications => this.notificationList = notifications);
  }

  goBack() {
    this.navCtrl.back();
  }
}
