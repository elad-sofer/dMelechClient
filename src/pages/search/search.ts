import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Search occurs in this page.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  
  }
}
