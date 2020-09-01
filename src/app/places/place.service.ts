import { Injectable } from '@angular/core';
import { Place } from './offers/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _places: Place[] = [
    {
      id:'p1',
      title: 'Delhi',
      description: 'This is delhi',
      image_url: 'https://www.gstatic.com/webp/gallery3/2.png',
      price: 123.76
    },
    {
      id:'p2',
      title: 'Noida',
      description: 'This is Noida',
      image_url: 'https://www.gstatic.com/webp/gallery3/1.png',
      price: 873.07
    },
    {
      id:'p3',
      title: 'Rohtak',
      description: 'This is Rohtak',
      image_url: 'https://www.gstatic.com/webp/gallery3/5.png',
      price: 111.23
    },
    {
      id:'p4',
      title: 'USA',
      description: 'This is USA',
      image_url: 'https://www.gstatic.com/webp/gallery3/4.png',
      price: 798.67
    },
  ];

  constructor() { }

  getPlaces(){
    return [...this._places];
  }
  getPlace(id: string){
  return {...this._places.find(el=> el.id === id
  )}
}
}
