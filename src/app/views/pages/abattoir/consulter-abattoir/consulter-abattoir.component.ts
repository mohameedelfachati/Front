import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FicheEntree } from '../models/fiche-entree';
import { AbattoirService } from '../services/abattoir.service';

@Component({
  selector: 'kt-consulter-abattoir',
  templateUrl: './consulter-abattoir.component.html',
  styleUrls: ['./consulter-abattoir.component.scss']
})
export class ConsulterAbattoirComponent implements OnInit {
  idAbattoire: any;
  abattoir: FicheEntree;
  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private service: AbattoirService,

  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(param => {
      this.idAbattoire = param.get('id');
      if (this.idAbattoire == null) {
        this.route.navigateByUrl("/abattoir/list");
      } else {
        this.getAbattoirById(this.idAbattoire);
      }
    })
  }


  async getAbattoirById(idAbattoire: any) {
    await this.service.getById(idAbattoire).subscribe(res => {
      this.abattoir = {
        id: res.id,
        dateEntree: res.dateEntree,
        lot: res.lot,
        chevillard: res.chevillard,
        facture: res.facture
      }
    })
  }



}
