import { Injectable } from '@angular/core';
import { Recepie } from './recepies.model';

@Injectable({
  providedIn: 'root'
})
export class RecepieDetailsService {
  private allItems: Recepie[] = [
    {
      id:'1',
      title: 'Recepie1',
      image: 'https://www.gstatic.com/webp/gallery3/1.png',
      ingredients: ['Fries', 'Pizza']
    },
    {
      id:'2',
      title: 'Recepie2',
      image: 'https://www.gstatic.com/webp/gallery3/2.png',
      ingredients: ['Chlli Potato', 'Paneer']
    },
    {
      id:'3',
      title: 'Recepie3',
      image: 'https://www.gstatic.com/webp/gallery3/3.png',
      ingredients: ['Naan', 'Dal']
    }
  ]
  constructor() { }

  getAllRecepie(){
    return [...this.allItems];
  }
  getRecepieDetails(recepieId: string){
    return {
      ...this.allItems.find(recepie => {
        return recepie.id === recepieId
      })
    }
  }
}
