import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Rover, Camera, CameraImage } from '../../../shared/models/rover.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-rover-detail',
  templateUrl: './rover-detail.component.html',
  styleUrls: ['./rover-detail.component.scss']
})
export class RoverDetailComponent implements OnInit {

  rover = <Rover>{} ;
  panelOpenState: boolean = false;
  cameraImages: CameraImage[] = [];
  selectedCamera =  <Camera>{};
  errorMessage: string = '';
  fetchingImages: boolean = true;

  constructor(private _apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRoverData();
  }

  private getRoverData() {
    const jsonData: any = sessionStorage.getItem('selectedRover');
    if(jsonData) {
      const data = JSON.parse(jsonData);
      if(data.id === +this.route.snapshot.params.id) {
        this.rover = data;
      } else {
        this.errorMessage = 'Rover data not found';
      }
    }
  }

  async displayPictures(camera: Camera) {
    this.fetchingImages = true;
    this.cameraImages = [];
    this.selectedCamera = camera;
    this.errorMessage = '';

    this._apiService.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=FXAd7DhKoBPLakh0eGzY1EilXFSOHelqpwMInjjp&sol=0&camera=FHAZ').then((res: any) => {
      if(res) {
        if(res.error) {
          this.errorMessage = res.error.message || res.error;
        } else {
          this.cameraImages = res.photos;
        }
      }
      this.fetchingImages = false;
    })
  }


}
