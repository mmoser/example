import { Component, OnInit } from '@angular/core';
import { INavigationItem } from '../../../model/navigation-item';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  navigationItems: Array<INavigationItem>;
  
  constructor() { }

  ngOnInit() {
    this.navigationItems = [
      { link: 'deductions/preview', name: 'Preview Deductions', icon: '', children: null }
    ]
  }

}
