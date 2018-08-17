import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ItemsData } from '../ItemsData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  items;
  constructor(private dataService: DataService) {
    this.items = dataService.items;
  }

  ngOnInit() { }
  
}

