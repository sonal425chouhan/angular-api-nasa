import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

import { Rover } from '../../shared/models/rover.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.scss']
})
export class RoverComponent implements OnInit {

  rovers: Rover[] = [];
  selectedRover =  <Rover>{};
  fetchingData: boolean = true;
  displayedColumns: string[] = ['position', 'id', 'name', 'details'];
  errorMessage: string = '';

  constructor(private _apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchRovers();
  }

  private async fetchRovers() {
    this.fetchingData = true;

    this._apiService.get('https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=FXAd7DhKoBPLakh0eGzY1EilXFSOHelqpwMInjjp')
    .then((res: any) => {
      if(res) {
        if(res.error) {
          this.errorMessage = res.error;
        } else {
          this.rovers = res.rovers;
        }
      }
      this.fetchingData = false;
    });

  }

  viewRoverDetails(rover: Rover) {
    this._apiService.setSessionStorageItem('selectedRover', JSON.stringify(rover));
    this.router.navigate(['/rovers/rover-detail', rover.id]);
  }
}
