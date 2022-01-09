export interface Rover {
  cameras: Camera[];
  id: number;
  landing_date: string;
  launch_date: string;
  max_date: string;
  max_sol: number;
  name: string;
  status: string;
  total_photos: number
}

export interface Camera {
  id: number;
  name:string;
  rover_id: number;
  full_name: string;
}

export interface CameraImage {
  camera: Camera;
  earth_date: string;
  id: number
  img_src: string;
  rover: any;
  sol: number
}
