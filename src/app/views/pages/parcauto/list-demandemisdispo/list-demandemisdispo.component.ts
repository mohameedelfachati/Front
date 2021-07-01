import { Component, OnInit } from '@angular/core';
import { Demandemisdispo } from './../model/demandemisdispo.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceParcService } from './../Services/service-parc.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'kt-list-demandemisdispo',
  templateUrl: './list-demandemisdispo.component.html',
  styleUrls: ['./list-demandemisdispo.component.scss']
})
export class ListDemandemisdispoComponent implements OnInit {

  Demandemisdispos: Demandemisdispo[];
  // isLoading = false;
  // totalItems = 0;
  // itemsPerPage = 4;
  // page?: number;
  // predicate!: string;
  // ascending!: boolean;
  // ngbPaginationPage = 1;
  displayedColumns: string[] = ['id','date', 'datedebut', 'matricule','heurfin','motif'];
  constructor(
    private route: Router,
     private service: ServiceParcService,
    // private activatedRoute: ActivatedRoute,
   
  ) {
    // this.loadData();
  }


  ngOnInit() {
    this.service.getAllDemandemisDispo().subscribe((res: Demandemisdispo[])=>{
      this.Demandemisdispos=res;
      console.log(this.Demandemisdispos+'hhhhhhhhhhhhhhhh');
    })

    console.log(this.Demandemisdispos+'hhhhhhhhhhhhhhhh');
  }


  updateDemandemisdispo(id?: any) {
    this.route.navigate(['/abattoire/edit', id]);
  }
  consulterDemandemisdispo(id?: any) {
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

    this.route.navigate(['']);
  }


  // loadPage(page?: number, dontNavigate?: boolean): void {
  //   this.isLoading = true;

  //   const pageToLoad: number = page != null ? page : this.page != null ? this.page : 1;


  //   this.service
  //     .query({
  //       page: pageToLoad - 1,
  //       size: this.itemsPerPage,
  //       sort: this.sort(),
  //     })
  //     .subscribe(
  //       (res: HttpResponse<FicheEntree[]>) => {
  //         this.isLoading = false;
  //         this.onSuccess(res.body, res.headers, pageToLoad, !dontNavigate);
  //       },
  //       () => {
  //         this.isLoading = false;
  //         this.onError();
  //       }
  //     );
  // }

 
  // async loadData() {
  //   await combineLatest([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
  //     const page = params.get('page');
  //     const pageNumber = page !== null ? +page : 1;
  //     const sort = ['id'];
  //     const predicate = sort[0];
  //     const ascending = sort[1] === 'asc';
  //     if (pageNumber !== this.page || predicate !== this.predicate || ascending !== this.ascending) {
  //       this.predicate = predicate;
  //       this.ascending = ascending;
  //       this.loadPage(pageNumber, true);
  //     }
  //   });
  // }



  // protected sort(): string[] {
  //   const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
  //   if (this.predicate !== 'id') {
  //     result.push('id');
  //   }
  //   return result;
  // }

  // protected onSuccess(data: FicheEntree[] | null, headers: HttpHeaders, page: number, navigate: boolean): void {
  //   this.totalItems = Number(headers.get('X-Total-Count'));
  //   this.page = page;
  //   if (navigate) {
  //     this.route.navigate(['/contenu'], {
  //       queryParams: {
  //         page: this.page,
  //         size: this.itemsPerPage,
  //         sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
  //       },
  //     });
  //   }

  //   this.abattoirs = data != null ? data : [];
  //   this.ngbPaginationPage = this.page;
  //   console.log(this.abattoirs);
  // }
  // protected onError(): void {

  //   this.ngbPaginationPage = this.page != null ? this.page : 1;
  // }
}


