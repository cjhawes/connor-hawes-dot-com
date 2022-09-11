import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getBio(): string {
    return 'Connor Hawes is a Software Development Engineer working on Asset Monitoring and Maintenance solutions for Telent Technology Services. He has obtained a 1st Class Honours Degree in Computer Information Systems from Bangor University in North Wales, with a dissertation project focussing on "Data Extraction and Display of Energy Metrics". Currently, he is deeply focussed on developing his skills in Angular, C#, DeepLearning with TensorFlow, and more in order to progress his career as a Software Developer.';
  }
}
