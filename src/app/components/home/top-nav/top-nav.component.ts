import { Component, OnInit } from '@angular/core';
import { Notification } from '../../interface/notification';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  numberOfNotification = 0;
  notificationList: Notification[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.findAllNotification().subscribe(notifications => {
      this.notificationList = notifications;
    });
  }

  checkNotificationNotRead(): Notification[] {
    return this.notificationList.filter(notification => notification.isNew && !notification.isRead);
  }

}
