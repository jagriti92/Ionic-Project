import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recepie } from '../recepies.model';
import { RecepieDetailsService } from '../recepie-details.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.page.html',
  styleUrls: ['./recepie-details.page.scss'],
})
export class RecepieDetailsPage implements OnInit {
  locateRecipie: Recepie;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private recepieDetailsService: RecepieDetailsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        return;
      }
      const rId = paramMap.get('id');
      this.locateRecipie = this.recepieDetailsService.getRecepieDetails(rId);
    })
  }
  onDelete(){
    this.recepieDetailsService.deleteRecepie(this.locateRecipie.id);
    this.router.navigate(['/recepies'])
  }
}
