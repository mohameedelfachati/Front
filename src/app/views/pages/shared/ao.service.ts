import { Injectable, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { delay } from "rxjs/operators";
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator } from '@angular/material';
import { DatePipe } from '@angular/common';
import * as XLSX from "xlsx";

@Injectable({
	providedIn: "root",
})
export class AoService {
	private baseUrl = environment.marcheUrl + "/Ao/";
	private baseUrl2 = environment.marcheUrl + "/Marche/";
	private baseUrl1 = environment.API_ALFRESCO_URL + "/PjAoG";
	private baseUrl3 = environment.API_ALFRESCO_URL + "/PjMarche";
	private baseUrl4 = environment.API_ALFRESCO_URL + "/PjBC";
	private baseUrl5 = environment.marcheUrl + "/Config/";
	private baseUrl6 = environment.marcheUrl + "/Reports/";

	constructor(private http: HttpClient, private datePipe: DatePipe) { }
	SM: number;
	PourcentageTechnique: number;
	PourcentageFinancier: number;
	ModePassationAo: String;
	/** Print report */

	printFile(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl6 + "generate/" + id
		);
	}

	fileGenerator(path, id, lang) {
		const httpOptions = {
			responseType: "arraybuffer" as "json",
		};
		return this.http.get<any[]>(this.baseUrl6 + path + id +"/"+ lang, httpOptions);
	}
	
	bordereaufileGenerator(path, id, dest) {
		const httpOptions = {
			responseType: "arraybuffer" as "json",
		};
		return this.http.get<any[]>(this.baseUrl6 + path + id + "/" + dest, httpOptions);
	}

	pvCommissionfileGenerator(path, id, dest, type) {
		const httpOptions = {
			responseType: "arraybuffer" as "json",
		};
		return this.http.get<any[]>(this.baseUrl6 + path + id + "/" + dest + "/" + type, httpOptions);
	}
	
	/*
	bordereaufileGenerator(path, id, division) {
		const httpOptions = {
			responseType: "arraybuffer" as "json",
		};
		return this.http.get<any[]>(this.baseUrl6 + path + id + "/"+ division, httpOptions);
	}
	*/

	lettreMaintienGenerator(path, id, Prestataire) {
		const httpOptions = {
			responseType: "arraybuffer" as "json",
		};
		return this.http.get<any[]>(this.baseUrl6 + path +id + "/"+ Prestataire , httpOptions);
	}

	/** generer des convocations commission Ao */
	convocationCommissionAoGenerator(path, idAo, participant, etape) {
		const httpOptions = {
			responseType: "arraybuffer" as "json",
		};
		return this.http.get<any[]>(this.baseUrl6 + path + idAo + "/" + participant + "/"+ etape, httpOptions);
	}

	/** Formatting */
	
	getLettreMtn(mtn): Observable<any> {
		return this.http.get(
			this.baseUrl5 + "formatting/" + mtn
		);
	}
/*
	async getLettreMtn(mtn) {
		return await this.http
			.get<string>(this.baseUrl5 + "formatting/" + mtn)
			.toPromise();
	}*/

	getSeparateMillierMtn(mtn): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl5 + "separate/" + mtn
		);
	}

	/** secteurs */
	getAllSecteurs(): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl + "AllSecteurs");
	}
	/** classes */
	getAllClasses(): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl + "AllClasses");
	}
	/** qualification by secteur */
	getAllQualificationBySecteur(idSect): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "QualificationsBySec/" + idSect
		);
	}
	/** secteur entreprise  */
	getAllSecteurAo(idAo): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "secteurEntreprise/" + idAo
		);
	}

	getSecteurById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "showSecteurEntreprise/" + id
		);
	}

	sendSecteurEntrepriseData(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddSecteurEntreprise",
			f
		);
	}

	deleteSecteurEntrepriseById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl + "DeleteSecteurEntreprise/" + id);
	}
	/** Gestion des lots  */
	getAllLotMarcheByAo(idAo): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "lotMarche/" + idAo
		);
	}

	getLotMarcheById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "showLotMarche/" + id
		);
	}

	sendLotMarcheData(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddLotMarche",
			f
		);
	}

	deleteLotMarcheById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl + "DeleteLotMarche/" + id);
	}
	/******************************************************/
	getAllNatureAo(): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl + "AllNatureAo");
	}
	getAllTypeMarche(): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl + "AllTypeMarche");
	}
	getAllTypeCommission(): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllTypeCommission"
		);
	}
	getAllRoleCommission(): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllRoleCommission"
		);
	}
	// get commision by id
	getRoleCommissionById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "RoleCommissionById/" + id
		);
	}

	// liste types et sous type prestation
	getAllTypePrestationAo(): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllTypePrestationAo"
		);
	}
	getAllSoustypePresattaionAo(idType): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllSousTypePrestationAo/" + idType
		);
	}
	/* getAllAo(): Observable<any> {
    return this.http.get<Observable<any>>(this.baseUrl + 'All');
  }*/

	async getAllAoData() {
		return await this.http
			.get<any>(this.baseUrl + "index")
			.pipe(delay(300))
			.toPromise();
	}

	async getAllAo() {
		return await this.http
			.get<any>(this.baseUrl + "All")
			.pipe(delay(300))
			.toPromise();
	}

	// maintienOffre modified on 27.11.2020
	async getMaintienOffre() {
		return await this.http
			.get<any>(this.baseUrl + "maintienOffre")
			.pipe(delay(300))
			.toPromise();
	}

	getAllPjAo(id): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl1 + "/Allpjs/" + id);
	}

	//********************************************* */

	updloadFile(v, id, type): Observable<any> {
		console.log("taille de fichier  :" + v.length);
		const formda: FormData = new FormData();
		for (var i = 0; i < v.length; i++) {
			formda.append("file", v[i]);
		}
		formda.append("id", id);
		formda.append("type", type);
		console.log("id  :" + id + " / type : " + type);
		return this.http.post<any>(this.baseUrl3 + "/multiplefile", formda, { responseType: 'blob' as 'json' });
	}

	// get all files marché par type file
	getByIdFiles(f): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl3 + "/allById/" + f);
	}

	deletefiles(url, id: number): Observable<any> {
		return this.http.delete<any>(this.baseUrl3 + url + id);
	}

	//********************** PJ BC*********************** */

	updloadBCFile(v, id, type): Observable<any> {
		console.log("taille de fichier  :" + v.length);
		const formda: FormData = new FormData();
		for (var i = 0; i < v.length; i++) {
			formda.append("file", v[i]);
		}
		formda.append("id", id);
		formda.append("type", type);
		console.log("id  :" + id + " / type : " + type);
		return this.http.post<any>(this.baseUrl4 + "/multiplefile", formda, { responseType: 'blob' as 'json' });
	}

	// get all files marché par type file
	getByIdBCFiles(f): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl4 + "/allById/" + f);
	}

	deleteBCfiles(id: number): Observable<any> {
		return this.http.delete<any>(this.baseUrl4 + "/" + id);
	}
	// *********************************************

	getAoById(id): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl + "show/" + id);
	}
	// delete ao by id
	deleteAoById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl + "DeleteAO/" + id);
	}

	getCommissionById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "showCommission/" + id
		);
	}

	async getPEbyAo(id) {
		return await this.http
			.get<any>(this.baseUrl + "ParticipantExterneByAo/" + id)
			.toPromise();
	}

	async getPIbyAo(id) {
		return this.http
			.get<any>(this.baseUrl + "ParticipantInterneByAo/" + id)
			.toPromise();
	}

	getBPById(id): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl + "BPByAo/" + id);
	}

	getPjCps(id): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl + "BPByAo/" + id);
	}

	getPjRc(id): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl + "BPByAo/" + id);
	}

	getAllLigneBP(id): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl + "LigneByBP/" + id);
	}

	//showLigneBP by id lbp
	getLigneBPById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "showLigneBP/" + id
		);
	}

	// delete ligneBP by id
	deleteLigneBPById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl + "DeleteLigneBP/" + id);
	}

	getAllReserveDg(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllReserveDg/" + id
		);
	}

	getAllReserveDgService(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllReserveDgService/" + id
		);
	}

	getAllReserveTresorerie(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllReserveTresorerie/" + id
		);
	}

	getAllCommissionByAo(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllCommissions/" + id
		);
	}

	//===================| PRESTATAIRES |===================

	getAllPrestataires(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllPrestataires/" + id
		);
	}

	getAllPrestatairesAll(): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl + "AllPrestataires");
	}

	getPrestataireById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "Prestataire/" + id
		);
	}

	sendMarcheDocPrestataire(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "addDocPrestataireMarche",
			f
		);
	}

	sendReservePrestataire(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddPrestataire",
			f
		);
	}

	updatePrestataire(data): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "updatePrestataire",
			data
		);
	}

	//===================| OFFRE DEPOSEE |===================

	getAllOffreDeposee(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllOffreDeposee/" + id
		);
	}

	getAllOffreDeposeeEvalAdmin(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllOffreDeposeeEvaluationAdmin/" + id
		);
	}

	getAllOffreDeposeeEvalTechnique(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllOffreDeposeeEvaluationTechnique/" + id
		);
	}

	getAllOffreDeposeeEvalFinanciere(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllOffreDeposeeEvaluationFinanciere/" + id
		);
	}

	getAllOffreDeposeeEvalFinale(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllOffreDeposeeEvaluationFinale/" + id
		);
	}

	getOffreDeposeeAdjucataire(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "OffreDeposeeAdjucataire/" + id
		);
	}

	getOffresDeposeeNonAdjucataire(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "OffresDeposeesNonAdjucataires/" + id
		);
	}

	OffreById(id): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl + "OffreById/" + id);
	}

	OffreByIdPrestataire(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "OffreByIdPrestataire/" + id
		);
	}

	VisiteByAo(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "VisiteByAo/" + id
		);
	}

	getAllVisiteByAo(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "AllVisitesByIdAo/" + id
		);
	}

	sendOffreDeposee(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddOffreDeposee",
			f
		);
	}

	deleteOffreDeposee(id: number): Observable<any> {
		return this.http.delete<any>(this.baseUrl + "DeleteOffreDeposee/" + id);
	}

	sendOffreDeposeeAdj(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddOffreDeposeeAdj",
			f
		);
	}
	//========================================================================
	// Echantillon services
	//========================================================================
	getEchantillonById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "EchantillonById/" + id
		);
	}

	sendEchantillon(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddEchantillon",
			f
		);
	}

	sendLigneEchantillon(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddLigneEchantillon",
			f
		);
	}

	getEchantillon(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "EchantillonByAo/" + id
		);
	}

	getLignesEchantillon(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "LignesByEchantillon/" + id
		);
	}

	getLignesEchantillonById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "LignesEchantillonById/" + id
		);
	}

	// delete ech by id
	deleteEchantillonById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl + "DeleteEchantillonByAo/" + id);
	}

	//========================================================================
	// Ligne Echantillon services
	//========================================================================

	// delete ligneEchantillon by idEch
	deleteByEchantillonId(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl + "DeleteByEchantillonId/" + id);
	}

	// delete ligneEchantillon by id
	deleteLigneEchantillonById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl + "DeleteLigneEchantillon/" + id);
	}

	nouvellepj(v, id, typeS, sModule) {
		if (v.length != 0) {
			const formda: FormData = new FormData();
			for (var i = 0; i < v.length; i++) {
				//console.log("File service : " + v[i]);
				formda.append("file", v[i]);
			}
			formda.append("id", id);
			formda.append("type", typeS);
			formda.append("sModule", sModule);
			return this.http.post<any>(
				this.baseUrl1 + "/multiplefileupload",
				formda, { responseType: 'blob' as 'json' }
			);
		}
	}

	// get all files
	getFilesByIdAndSMOdule(f, s): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl1 + "/allFiles/" + f + "/" + s);
	}

	sendao(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl + "createAo", f);
	}

	updateAoSG(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl + "updateAoSG", f);
	}

	updateAoSM(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl + "updateAoSM", f);
	}

	updateAoDg(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl + "updateAodg", f);
	}

	updateAoTresorerie(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "updateAotresorerie",
			f
		);
	}

	updateStatutAo(obj: any): Observable<any> {
		return this.http.put<any>(this.baseUrl + "updateStatutAo/" + obj.id, obj);
	}
	/*
	updateStatutAo(f): Observable<any> {
		return this.http.put<Observable<any>>(this.baseUrl + "updateStatutAo", f);
	}
	*/
	//========================================================================
	// visite services
	//========================================================================
	sendvisite(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl + "AddVisite", f);
	}
	// delete visite by id
	deleteVisiteById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl + "DeleteVisite/" + id);
	}
	//get visite by id
	getVisiteById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl + "showVisite/" + id
		);
	}
	//========================================================================
	// Bordereau de prix services
	//========================================================================
	sendBP(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl + "AddBP", f);
	}
	//========================================================================
	// Commissions services
	//========================================================================
	sendCommission(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddCommission",
			f
		);
	}
	sendPICommission(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddParticipantsInterneCommission",
			f
		);
	}
	sendPECommission(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddParticipantsExterneCommission",
			f
		);
	}
	//========================================================================
	// Personne externe services
	//========================================================================
	sendPE(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddPersonneExterne",
			f
		);
	}
	//========================================================================
	// Validation DG services
	//========================================================================
	sendReserveDg(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddRerserveDg",
			f
		);
	}
	//========================================================================
	// Validation service services
	//========================================================================
	sendReserveDgService(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddRerserveDgService",
			f
		);
	}
	//========================================================================
	// Validation tresorier services
	//========================================================================
	sendRerserveTresorerie(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl + "AddRerserveTresorerie",
			f
		);
	}
	//========================================================================
	// Ligne bordereau de prix services
	//========================================================================
	sendLigneBP(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl + "AddLigneBP", f);
	}
	//========================================================================
	// Gestion pjs AO services
	//========================================================================
	nouvellepjCps(v, id) {
		const formda: FormData = new FormData();
		formda.append("file", v[0]);
		formda.append("id", id);
		return this.http.post<Observable<any>>(
			this.baseUrl1 + "/file/cpsAo",
			formda
		);
	}

	nouvellepjRc(v, id) {
		const formda: FormData = new FormData();
		formda.append("file", v[0]);
		formda.append("id", id);
		return this.http.post<Observable<any>>(
			this.baseUrl1 + "/file/rcAo",
			formda
		);
	}
	//========================================================================
	// Marche services
	//========================================================================
	async getAllMarche() {
		return await this.http
			.get<any>(this.baseUrl2 + "All")
			.pipe(delay(300))
			.toPromise();
	}

	async getAllAttributeurs() {
		return await this.http
			.get<any>(this.baseUrl2 + "Attributeurs")
			.toPromise();
	}


	getMarcheById(id): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl2 + "show/" + id);
	}

	getAllModePassationMarche(): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "AllModePassationMarche"
		);
	}

	// delete phase marche by id 
	deleteMarcheById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteMarche/" + id);
	}
	// PHASE MARCHE ********************************

	getAllPhasesMarche(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "AllPhasesMarche/" + id
		);
	}

	getPhaseMarcheById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "PhaseMarcheById/" + id
		);
	}

	sendPhaseMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl2 + "Phase", f);
	}

	// delete phase marche by id 
	deletePhaseMarcheById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeletePhaseMarche/" + id);
	}

	// FACTURE PHASE MARCHE ****************************

	getAllPhaseNotFacture(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "AllPhaseNotFacture/" + id
		);
	}

	getAllPhaseNotOS(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "AllPhaseNotOS/" + id
		);
	}

	getAllPhaseNotReception(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "AllPhaseNotReception/" + id
		);
	}

	// ORDRE SERVICE MARCHE ******************************

	getOrdreServiceMarche(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "OrdreServiceMarche/" + id
		);
	}

	getAllOrdreServicePhase(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "AllOrdreServicePhase/" + id
		);
	}

	getOrdreServiceById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "OrdreServiceMarcheById/" + id
		);
	}

	// delete ordre service marche by id 
	deleteOrdreServiceMarcheById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteOrdreServiceMarche/" + id);
	}

	// **********| RECEPTION MARCHE |*******************
	// Param :: id marche
	getReceptionMarche(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "ReceptionMarche/" + id
		);
	}
	// Param : id reception
	getReceptionMarcheById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "ReceptionMarcheById/" + id
		);
	}

	sendReceptionMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "ReceptionMarche",
			f
		);
	}

	// delete reception marche by id 
	deleteReceptionMarcheById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteReceptionMarche/" + id);
	}

	// **********| RECEPTION PHASE MARCHE | **************
	// Param :: id phase marche
	getAllReceptionsPhaseMarche(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "ReceptionPhaseMarche/" + id
		);
	}

	// Param :: id reception phase marche
	getReceptionsPhaseMarcheById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "ReceptionPhaseMarcheById/" + id
		);
	}

	// delete reception phase marche by id 
	deleteReceptionPhaseMarcheById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteReceptionPhaseMarche/" + id);
	}

	// **********| MISE EN DEMEURE & RESILIATION MARCHE |*******************
	getMiseEnDemeureEtResiliation(id, type): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "MiseEnDemeureResiliation/" + id + "&" + type
		);
	}

	getMiseEnDemeureEtResiliationById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "MiseEnDemeureResiliationById/" + id
		);
	}

	sendMiseEnDemeureEtResiliation(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "MiseEnDemeureResiliation",
			f
		);
	}

	deleteMiseEnDemeureEtResiliation(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteMiseEnDemeureResiliation/" + id);
	}
	// **********| AMT / Travaux Supplementaires |*******************
	// Param :: id marche
	getAllTravauxSuppMarche(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "TravauxSupp/" + id
		);
	}
	// Param : id travauxSupp
	getTravauxSuppMarcheById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "TravauxSuppById/" + id
		);
	}

	sendTravauxSuppMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "TravauxSupp",
			f
		);
	}

	// delete methode 
	deleteTravauxSuppMarcheById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteTravauxSupp/" + id);
	}
	// **********| penalites pour retard & interets moratoires |***************

	// Param :: id marche
	getAllModuleMarche(id, path): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + path + id
		);
	}
	// Param : id Module
	getModuleMarcheById(id, path): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + path + id
		);
	}

	sendModuleMarche(f, path): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + path, f
		);
	}

	// delete methode 
	deleteModuleMarcheById(id, path): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + path + id);
	}

	// --------------------------------------------
	sendReceptionPhase(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "ReceptionPhaseMarche",
			f
		);
	}
	// ***************************************************
	getAllComiteMarche(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "AllComiteMarche/" + id
		);
	}

	deleteComiteMarche(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteComiteMarche/" + id);
	}

	getAllFacture(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "AllFacture/" + id
		);
	}

	getAllLivrable(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "AllLivrable/" + id
		);
	}

	getAlltypePjAo(): Observable<any> {
		return this.http.get<Observable<any>>(this.baseUrl1 + "/AlltypePjAo");
	}

	sendMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "addMarcheFromAo",
			f
		);
	}

	updateMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "updateMarcheFromAo",
			f
		);
	}

	updateMntEngageMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "updateMntEngageMarche",
			f
		);
	}

	engagerMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "engagerMarche",
			f
		);
	}

	approuverMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "approuverMarche",
			f
		);
	}

	sendOrdreServiceMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "OrdreServiceMarche",
			f
		);
	}
	// ORDRE SERVICE PHASE MARCHE *************************

	sendOrdreServicePhase(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "OrdreServicePhase",
			f
		);
	}

	getOrdreServicePhaseMarcheById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "OrdreServicePhaseById/" + id
		);
	}

	// delete ordre service phase marche by id 
	deleteOrdreServicePhaseMarcheById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteOrdreServicePhase/" + id);
	}

	sendComiteMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "ComiteMarche",
			f
		);
	}
	// ==================================================
	// order d'arret
	// ==================================================


	getAllOrdreArretMarche(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "AllOrdreArretMarche/" + id
		);
	}

	getListOrdreArretMarche(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "OrdreArretMarcheList/" + id
		);
	}

	getOrdreArretMarcheById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "OrdreArretMarcheById/" + id
		);
	}

	getOrdreArretMarche(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "OrdreArretMarche/" + id
		);
	}

	getOrdreArretByIdOR(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "OrdreArretByIdOrdreReprise/" + id
		);
	}

	sendOrdreArretMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl2 + "OrdreArret", f);
	}

	sendOrdreArretRMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "OrdreArretR",
			f
		);
	}

	// delete ordre arrêt by id 
	deleteOrderArretById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteOrdreArret/" + id);
	}
	// ================================================
	// get ordre reprise 28.12.2020
	getOrdreRepriseMarcheById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "OrdreReprise/" + id
		);
	}

	sendOrdreRepriseMarche(f): Observable<any> {
		return this.http.post<Observable<any>>(
			this.baseUrl2 + "OrdreReprise",
			f
		);
	}

	// delete ordre reprise by id 
	deleteOrderRepriseById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteOrdreReprise/" + id);
	}
	// ++++++++++++++++ DECOMPTE PHASE MARCHE +++++++++++++++++
	sendFacture(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl2 + "Facture", f);
	}
	// +++++++++++++++++ DECOMPTE DEFINITIF +++++++++++++++++++
	sendDecompteDefinitif(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl2 + "DecompteDefinitif", f);
	}

	getDecompteById(id, isDefinitif): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "DecompteDefinitif/" + id + "/" + isDefinitif
		);
	}

	showDecompteById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "DecompteDefinitifById/" + id
		);
	}

	deleteDecompteById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteDecompteDefinitif/" + id);
	}

	// +++++++++++++++++ LIVRABLE +++++++++++++++++++++++++++++
	sendLivrable(f): Observable<any> {
		return this.http.post<Observable<any>>(this.baseUrl2 + "Livrable", f);
	}

	getLivrablePhaseMarcheById(id): Observable<any> {
		return this.http.get<Observable<any>>(
			this.baseUrl2 + "LivrableById/" + id
		);
	}

	// delete livrable phase marche by id 
	deleteDeleteLivrablePhaseMarcheById(id): Observable<any> {
		return this.http.delete<any>(this.baseUrl2 + "DeleteLivrable/" + id);
	}

	PrintGenerator(path, id) {
		const httpOptions = {
			responseType: "arraybuffer" as "json",
		};
		return this.http.get<any[]>(this.baseUrl + path + id, httpOptions);
	}
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// SEARCHE MANDAT BETWEEN DATES
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	getAoBetweenDates(d1, d2): Observable<any> {
		return this.http.get<any>(
			this.baseUrl + "date/" + d1 + "&" + d2
		);
	}

	// options file
	getFileName(file: any) {
		if (file.lastIndexOf(".") != -1 && file.lastIndexOf(".") != 0)
			return file.substring(0, file.lastIndexOf("."));
	}
	// extrension file
	getExtensionFile(file: any) {
		if (file.lastIndexOf(".") != -1 && file.lastIndexOf(".") != 0) {
			var ext = file.substring(file.lastIndexOf(".") + 1);
			switch (ext) {
				case 'txt':
					return 'txt.svg';
				case 'pdf':
					return 'pdf.svg';
				case 'jpg':
					return 'jpg.svg';
				case 'png':
					return 'png.svg';
				case 'doc':
					return 'doc.svg';
				case 'docx':
					return 'doc.svg';
				case 'xls':
					return 'xls.svg';
				case 'xlsx':
					return 'xls.svg';
				case 'ppt':
					return 'ppt.svg';
				case 'pptx':
					return 'ppt.svg';
				case 'csv':
					return 'csv.svg';
				case 'xml':
					return 'xml.svg';
				case 'zip':
					return 'zip.svg';
				case 'rar':
					return 'zip.svg';
				case 'html':
					return 'html.svg';
				default:
					return 'file.svg';
			}
		}
		else return "";
	}

		// export data as excel file
		exportToExcel(tableId: string, name?: string) {
			let now = new Date();
			let timeSpan = this.datePipe.transform(now, "ddMMyyyyHHmmss");
			//let timeSpans = new Date().toISOString();
			let prefix = name;
			let fileName = `${prefix}-${timeSpan}`;
			let targetTableElm = document.getElementById(tableId);
			let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{ sheet: prefix });
			XLSX.writeFile(wb, `${fileName}.xlsx`);
		}
}
