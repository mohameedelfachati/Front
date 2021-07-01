import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { FicheEntree } from '../models/fiche-entree';
import { AbattoirService } from '../services/abattoir.service';

@Component({
  selector: 'kt-list-abattoir',
  templateUrl: './list-abattoir.component.html',
  styleUrls: ['./list-abattoir.component.scss']
})
export class ListAbattoirComponent implements OnInit {
  abattoirs: FicheEntree[]
  isLoading = false;
  totalItems = 0;
  itemsPerPage = 4;
  page?: number;
  predicate!: string;
  ascending!: boolean;
  ngbPaginationPage = 1;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  constructor(
    private route: Router,
    private service: AbattoirService,
    private activatedRoute: ActivatedRoute,
   
  ) {
    this.loadData();
  }


  ngOnInit() {
  }


  updateAbattoir(id?: any) {
    this.route.navigate(['/abattoire/edit', id]);
  }
  consulterAbattoir(id?: any) {
    this.route.navigate(['/abattoire/consulter', id]);
  }


  deleteAbattoir(id?: any) {
    /*this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Vous voulez vraiment supprimer le contenu numéro : \t' + id,
      icon: 'pi pi-trash',
      accept: () => {
        this.service.delete(id).subscribe(res => {
          this.loadData();
          document.location.reload();
        })
      },
      reject: () => {

      },

    });*/
  }


  loadPage(page?: number, dontNavigate?: boolean): void {
    this.isLoading = true;

    const pageToLoad: number = page != null ? page : this.page != null ? this.page : 1;


    this.service
      .query({
        page: pageToLoad - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe(
        (res: HttpResponse<FicheEntree[]>) => {
          this.isLoading = false;
          this.onSuccess(res.body, res.headers, pageToLoad, !dontNavigate);
        },
        () => {
          this.isLoading = false;
          this.onError();
        }
      );
  }

 
  async loadData() {
    await combineLatest([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
      const page = params.get('page');
      const pageNumber = page !== null ? +page : 1;
      const sort = ['id'];
      const predicate = sort[0];
      const ascending = sort[1] === 'asc';
      if (pageNumber !== this.page || predicate !== this.predicate || ascending !== this.ascending) {
        this.predicate = predicate;
        this.ascending = ascending;
        this.loadPage(pageNumber, true);
      }
    });
  }



  protected sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected onSuccess(data: FicheEntree[] | null, headers: HttpHeaders, page: number, navigate: boolean): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.page = page;
    if (navigate) {
      this.route.navigate(['/contenu'], {
        queryParams: {
          page: this.page,
          size: this.itemsPerPage,
          sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
        },
      });
    }

    this.abattoirs = data != null ? data : [];
    this.ngbPaginationPage = this.page;
    console.log(this.abattoirs);
  }
  protected onError(): void {

    this.ngbPaginationPage = this.page != null ? this.page : 1;
  }
}
