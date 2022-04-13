import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {
  }

  goBack() {
    this.navCtrl.back();
  }

}
