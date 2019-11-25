import { Component, OnInit, Input } from '@angular/core';
import {ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  
	@Input() name: string;
	@Input() model: string;
	@Input() modalController: ModalController;

  constructor() { }

  ngOnInit() {
  }

  dismissModal() {
  	this.modalController.dismiss({
  		'dismiss': true
  	});
  }

}
