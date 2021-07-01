import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Voiture} from '../model/voiture.model'
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceParcService } from '../Services/service-parc.service';
import { Demandemisdispo } from './../model/demandemisdispo.model';


@Component({
  selector: 'kt-edite-demandedispo',
  templateUrl: './edite-demandedispo.component.html',
  styleUrls: ['./edite-demandedispo.component.scss']
})
export class EditeDemandedispoComponent implements OnInit {
 formGroup : FormGroup
 iniForm: Voiture[]
 edit: boolean
 add: boolean
 operation: String ="Ajouter"
 idDemande: any
 demandemisdispo: Demandemisdispo 

 





  constructor(private fb: FormBuilder,
   private activatedRoute: ActivatedRoute,
   private route: Router,
   private parcservice: ServiceParcService) {
    this.formGroup=this.fb.group(
      {
        datedemande:['',
        []
      ],
        datedebudispo:['',
        [Validators.required]
      ],
        datefindispo:['',
        [Validators.required]
      ],
        heurdebut:['',
        [Validators.required]
      ],
      heurfin:['',
      [Validators.required]
    ],
       motif:['',
      [Validators.required]
      ],
        typevehicule:['',
        []
      ],
        matricule:['',
        [Validators.required]
      ],
        lieudepart:['',
        [Validators.required]
      ],
        lieuarrive:['',
        [Validators.required]
      ],
        division:['',
        [Validators.required]
      ],
        service:['',
        [Validators.required]
      ],
        nombrebeneficiaire:['',
        []
      ],
        beneficiaire:['',
        []
      ],
        piecejoints:['',
        []
      ],
        statut:['',
        []
      ],
      piecejointesContentType:['',
      []
    ]

      }
    )
    this.loadInitForm();
   
   }

  
   ngOnInit() {
    this.iniForm = [];
    this.activatedRoute.paramMap.subscribe(param => {
      this.idDemande = param.get('id');
      if (this.idDemande == null) {
        this.add = true;
        this.edit = false;
        this.operation = "Ajouter"
      } else {
        this.getDemandeById(this.idDemande);
      }
    })
  }


  async getDemandeById(idAbattoire: any) {
    await this.parcservice.getById(idAbattoire).subscribe(res => {
      this.formGroup.setValue({
        datedemande: res.datedemande,
        datedebudispo: res.datedebutmisedisposition,
        datefindispo: res.datefinmisedisposition,
       // betes: this.fb.array([this.createItem()]),
        
        heurdebut: res.heurdebut,
        heurfin: res.heurfin,
        motif: res.motif,
        typevehicule:res.typevehicule,
        lieudepart:res.lieudepart,
        lieuarrive:res.lieuarrive,
        division:res.division,
        service:res.services,
        nombrebeneficiaire:res.nombrebenificiaire,
        beneficiaire:res.benificaire,
        piecejoints:res.piecejointes,
        statut:res.statutdis,
        matricule:res.matricule
      })
      this.add = false ;
      this.edit = true;
      this.operation = "Modifier";
    })
  }


  async loadInitForm() {
    await this.parcservice.initForm().subscribe(res => {
      this.iniForm = JSON.parse(res + '');
    })
  }

  // createItem(): FormGroup {
  //   return this.fb.group({
  //     numeroSequence: ['', [
  //       Validators.required
  //     ]],
  //     poidsInit: ['', [
  //       Validators.required
  //     ]],
  //     poidsCarcasse: ['', [
  //       Validators.required
  //     ]],
  //     poidsExploitable: ['', [
  //       Validators.required
  //     ]],
  //     typeEspece: ['', [
  //       Validators.required
  //     ]]
  //   })
  // }

  // addItem(event: any):void {
  //   console.log(event);
  //   this.betes = this.formGroup.get('betes') as FormArray;
  //   this.betes.clear();
  //   for (let index = 0; index < event; index++) {
  //     this.betes.push(this.createItem());
  //   }
  // }
  editerdemande() {
    this.demandemisdispo = {
      id: this.idDemande,
      datedemande: this.formGroup.get('').value,
      datedebutmisedisposition: this.formGroup.get('').value,
      datefinmisedisposition: this.formGroup.get('').value,
      heurdebut: this.formGroup.get('').value,
      heurfin: this.formGroup.get('').value,
      motif: this.formGroup.get('').value,
      typevehicule: this.formGroup.get('').value,
      lieudepart: this.formGroup.get('').value,
      lieuarrive: this.formGroup.get('').value,
      division: this.formGroup.get('').value,
      services: this.formGroup.get('').value,
      nombrebenificiaire: this.formGroup.get('').value,
      benificaire: this.formGroup.get('').value,
      piecejointes: this.formGroup.get('').value,
      statutdis: this.formGroup.get('').value,
      matricule: this.formGroup.get('').value,
      piecejointesContentType: this.formGroup.get('').value


    },
      this.parcservice.add(this.demandemisdispo).subscribe(res => {
        this.route.navigate(['']);
      })
  }
  ajouterdemande() {
    this.demandemisdispo = {
      id: null,
      datedemande: this.formGroup.get('').value,
      datedebutmisedisposition: this.formGroup.get('').value,
      datefinmisedisposition: this.formGroup.get('').value,
      heurdebut: this.formGroup.get('').value,
      heurfin: this.formGroup.get('').value,
      motif: this.formGroup.get('').value,
      typevehicule: this.formGroup.get('').value,
      lieudepart: this.formGroup.get('').value,
      lieuarrive: this.formGroup.get('').value,
      division: this.formGroup.get('').value,
      services: this.formGroup.get('').value,
      nombrebenificiaire: this.formGroup.get('').value,
      benificaire: this.formGroup.get('').value,
      piecejointes: this.formGroup.get('').value,
      statutdis: this.formGroup.get('').value,
      matricule: this.formGroup.get('').value,
      piecejointesContentType: this.formGroup.get('').value


    },
      this.parcservice.add(this.demandemisdispo).subscribe(res => {
        this.route.navigate(['']);
      })
  }


}
