import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Espece } from '../models/espece';
import { FicheEntree } from '../models/fiche-entree';
import { AbattoirService } from '../services/abattoir.service';
@Component({
  selector: 'kt-edit-abattoir',
  templateUrl: './edit-abattoir.component.html',
  styleUrls: ['./edit-abattoir.component.scss']
})
export class EditAbattoirComponent implements OnInit {
  formGroup: FormGroup;
  iniFrom: Espece[];
  betes: FormArray;
  abattoir: FicheEntree;
  add: boolean = false;
  edit: boolean = false;
  idAbattoire: any;
  date: string;
  operation: string = "ajouter"
  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private service: AbattoirService,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      dateEntree: ['', [

      ]],
      nombreBete: ['', [
        Validators.required
      ]],
      poidsTotal: ['', [
        Validators.required
      ]],
      betes: this.fb.array([this.createItem()]),
      cin: ['', [
        Validators.required
      ]],
      nom: ['', [
        Validators.required
      ]],
      prenom: ['', [
        Validators.required
      ]],
      adresse: ['', [
        Validators.required]
      ],
      montantTotal: ['', [
        Validators.required
      ]],
      dateFacture: ['', [

      ]],

    });
    this.loadInitForm();
    this.date = new Date().toLocaleDateString();
  }


  ngOnInit() {
    this.iniFrom = [];
    this.actRoute.paramMap.subscribe(param => {
      this.idAbattoire = param.get('id');
      if (this.idAbattoire == null) {
        this.add = true;
        this.edit = false;
        this.operation = "Ajouter"
      } else {
        this.getAbattoirById(this.idAbattoire);
      }
    })
  }


  async getAbattoirById(idAbattoire: any) {
    await this.service.getById(idAbattoire).subscribe(res => {
      this.formGroup.setValue({
        dateEntree: res.dateEntree,
        nombreBete: res.lot.nombreBete,
        poidsTotal: res.lot.poidsTotal,
       // betes: this.fb.array([this.createItem()]),
        cin: res.chevillard.cin,
        nom: res.chevillard.nom,
        prenom: res.chevillard.prenom,
        adresse:res.chevillard.adresse,
        montantTotal:res.facture.montantTotal,
        dateFacture:res.facture.dateFacture,
      })
      this.add = false ;
      this.edit = true;
      this.operation = "Modifier";
    })
  }


  async loadInitForm() {
    await this.service.initForm().subscribe(res => {
      this.iniFrom = JSON.parse(res + '');
    })
  }

  createItem(): FormGroup {
    return this.fb.group({
      numeroSequence: ['', [
        Validators.required
      ]],
      poidsInit: ['', [
        Validators.required
      ]],
      poidsCarcasse: ['', [
        Validators.required
      ]],
      poidsExploitable: ['', [
        Validators.required
      ]],
      typeEspece: ['', [
        Validators.required
      ]]
    })
  }

  addItem(event: any):void {
    console.log(event);
    this.betes = this.formGroup.get('betes') as FormArray;
    this.betes.clear();
    for (let index = 0; index < event; index++) {
      this.betes.push(this.createItem());
    }
  }
  editerAbattoir() {
    this.abattoir = {
      id: this.idAbattoire,
      dateEntree: this.formGroup.get('').value,
      lot: {
        id: null,
        nombreBete: this.formGroup.get('').value,
        poidsTotal: this.formGroup.get('').value,
        betes: this.betes.value
      },
      chevillard: {
        id: null,
        cin: this.formGroup.get('').value,
        nom: this.formGroup.get('').value,
        prenom: this.formGroup.get('').value,
        adresse: this.formGroup.get('').value
      },
      facture: {
        id: null,
        montantTotal: this.formGroup.get('').value,
        dateFacture: this.formGroup.get('').value,
        ficheEntree: this.idAbattoire
      }
    },
      this.service.add(this.abattoir).subscribe(res => {
        this.route.navigate(['']);
      })
  }
  ajouterAbattoir() {
    this.abattoir = {
      id: null,
      dateEntree: this.formGroup.get('').value,
      lot: {
        id: null,
        nombreBete: this.formGroup.get('').value,
        poidsTotal: this.formGroup.get('').value,
        betes: this.betes.value
      },
      chevillard: {
        id: null,
        cin: this.formGroup.get('').value,
        nom: this.formGroup.get('').value,
        prenom: this.formGroup.get('').value,
        adresse: this.formGroup.get('').value
      },
      facture: {
        id: null,
        montantTotal: this.formGroup.get('').value,
        dateFacture: this.formGroup.get('').value,
        ficheEntree: null
      }
    },
      this.service.add(this.abattoir).subscribe(res => {
        this.route.navigate(['']);
      })
  }
}
