import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-header-side-nav',
  templateUrl: './header-side-nav.component.html',
  styleUrls: ['./header-side-nav.component.css']
})
export class HeaderSideNavComponent implements OnInit {
  itemsData;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById('sideNav').style.width = '200px';
  }

  closeNav() {
    document.getElementById('sideNav').style.width = '0';
  }

  displayItems(category: string) {
    this.dataService.displayItemsByCategory(category);
    this.router.navigate(['category']);
  }
}
