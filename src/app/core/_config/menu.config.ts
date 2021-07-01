export class MenuConfig {
	public defaults: any = {
		// ******************************************************************
		//  MENU ADIL
		// ******************************************************************
		header: {
			self: {},
			items: [
				{
					title: "roles",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.ROLES",
					permission: "accessToRoleModule",
					submenu: [
						{
							title: "Liste des roles",
							translate: "MENU.LISTEROLES",
							page: "/user/role-index",
							icon: "flaticon2-list-3",
							permission: "accessToIndexRole",
						},
						{
							title: "ajouter un role",
							translate: "MENU.AJOUTERROLE",
							page: "/user/role-new",
							icon: "flaticon-edit-1",
							permission: "canCreateRole",
						},
					],
				},
				{
					title: "users",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.USERS",
					permission: "accessToUserModule",
					submenu: [
						{
							title: "Liste des utilisateurs",
							translate: "MENU.LISTEUSERS",
							page: "/user/user-index",
							icon: "flaticon2-list-3",
							permission: "accessToIndexUser",
						},
						{
							title: "ajouter un utilisateur",
							translate: "MENU.AJOUTERUSER",
							page: "/user/user-new",
							icon: "flaticon-edit-1",
							permission: "canCreateUser",
						},
					],
				},
			],
		},
		header_RH: {
			self: {},
			items: [
				{
					title: "Personnels",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PERSONNELS",
					permission: "accessToPersonnelModule",
					submenu: [
						{
							title: "Liste des personnels",
							translate: "MENU.LISTEPERSONNELS",
							page: "/personnel/personnel-index",
							icon: "flaticon2-list-3",
							permission: "accessToIndexPersonnel",
						},
						{
							title: "ajouter un personnel",
							translate: "MENU.AJOUTERPERSONNEL",
							page: "/personnel/personnel-new",
							icon: "flaticon-edit-1",
							permission: "canCreatePersonnel",
						},
					],
				},
				/*
				{
					title: "Presences",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PRESENCES",
					permission: "accessToPresenceModule",

					submenu: [
						{
							title: "Liste des registers de presences",
							translate: "MENU.LISTEPRESENCES",
							page: "/presence/presence-index",
							icon: "flaticon2-list-3",
							permission: "accessToIndexPresence",
						},
						{
							title: "ajouter un register",
							translate: "MENU.AJOUTERPRESENCE",
							page: "/presence/presence-new",
							icon: "flaticon-edit-1",
							permission: "canCreatePresence",
						},
					],
				},
				{
					title: "Permanences",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PERMANENCES",
					permission: "accessToPermanenceModule",
					submenu: [
						{
							title: "Liste des permanences",
							translate: "MENU.LISTEPERMANENCES",
							page: "/permanence/permanence-index",
							icon: "flaticon2-list-3",
							permission: "accessToIndexPermanence",
						},
						{
							title: "ajouter une permanence",
							translate: "MENU.AJOUTERPERMANENCE",
							page: "/permanence/permanence-new",
							icon: "flaticon-edit-1",
							permission: "canCreatePermanence",
						},
					],
				},
				{
					title: "notations",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.NOTATIONS",
					permission: "accessToNotationModule",
					submenu: [
						{
							title: "Liste des notations",
							translate: "MENU.LISTENOTATIONS",
							page: "/notation/notation-index",
							icon: "flaticon2-list-3",
							permission: "accessToIndexNotation",
						},
						{
							title: "ajouter une notation",
							translate: "MENU.AJOUTERNOTATION",
							page: "/notation/notation-new",
							icon: "flaticon-edit-1",
							permission: "canCreateNotation",
						},
						{
							title: "Liste des compagnes de notation",
							translate: "MENU.LISTECOMPAGNES_NOTATION",
							page: "/notation/compagne-index",
							icon: "flaticon2-list-3",
							permission: "accessToIndexCompagneNotation",
						},
						{
							title: "ajouter une compagne de notation",
							translate: "MENU.AJOUTERCOMPAGNE_NOTATION",
							page: "/notation/compagne-new",
							icon: "flaticon-edit-1",
							permission: "canCreateCompagneNotation",
						},
					],
				},
				{
					title: "attestations",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.ATTESTATIONS",
					permission: "accessToAttestationModule",
					submenu: [
						{
							title: "Liste des demandes d'attestations",
							translate: "MENU.LISTEATTESTATIONS",
							page: "/attestation/attestation-index",
							icon: "flaticon2-list-3",
							permission: "accessToIndexDemandeAttestation",
						},
						{
							title: "ajouter une demande d'attestation",
							translate: "MENU.AJOUTERATTESTATION",
							page: "/attestation/attestation-new",
							icon: "flaticon-edit-1",
							permission: "canCreateDemandeAttestation",
						},
					],
				},
				{
					title: "congés",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.CONGES",
					permission: "accessToCongeModule",
					submenu: [
						{
							title: "Liste des demandes de congé",
							translate: "MENU.LISTECONGES",
							page: "/conge/conge-index",
							icon: "flaticon2-list-3",
							permission: "accessToIndexDemandeConge",
						},
						{
							title: "ajouter une demande de conge",
							translate: "MENU.AJOUTERCONGE",
							page: "/conge/conge-new",
							icon: "flaticon-edit-1",
							permission: "canCreateDemandeConge",
						},
					],
				},
				*/
			],
		},
		header_projet: {
			self: {},
			items: [
				{
					title: "Prestataires",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PRESTATAIRES",
					permission: "accessToPrestataireModule",
					submenu: [
						{
							title: "Liste des prestataires",
							translate: "MENU.LISTEPRESTATAIRES",
							permission: "accessToIndexPrestataire",
							page: "/prestataire/prestataire-index",
							icon: "flaticon2-list-3",
						},
						// {
						// 	title: "ajouter un prestataire",
						// 	translate: "MENU.AJOUTERPRESTATAIRE",
						// 	permission: "canCreatePrestataire",
						// 	page: "/prestataire/prestataire-new",
						// },
					],
				},
				{
					title: "Projets",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PROJETS",
					permission: "accessToProjetModule",
					submenu: [
						{
							title: "Liste des projets",
							translate: "MENU.LISTEPROJETS",
							permission: "accessToIndexProjet",
							page: "/projet/projet-index",
							icon: "flaticon2-list-3",
						},
						{
							title: "ajouter un projet",
							translate: "MENU.AJOUTERPROJET",
							permission: "canCreateProjet",
							page: "/projet/projet-new",
							icon: "flaticon-edit-1",
						},
					],
				},
			],
		},
		header_patrimoine: {
			self: {},
			items: [
				{
					title: "Patrimoines communal",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PATRIMOINES_COMMUNAL",
					permission: "accessToPatrimoineModule",
					submenu: [
						{
							title: "Liste des patrimoines",
							translate: "MENU.LISTEPATRIMOINES",
							permission: "accessToIndexPatrimoine",
							page: "/patrimoine/patrimoine-index",
							icon: "flaticon2-list-3",
						},
						{
							title: "ajouter un patrimoine",
							translate: "MENU.AJOUTERPATRIMOINE",
							permission: "canCreatePatrimoine",
							page: "/patrimoine/patrimoine-new",
							icon: "flaticon-edit-1",
						},
					],
				},
				{
					title: "Projet d'immatriculation",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.IMMATRICULATION",
					permission: "accessToImmatriculationModule",
					submenu: [
						{
							title: "Liste des immatriculations",
							translate: "MENU.LISTEIMMATRICULATIONS",
							permission: "accessToIndexImmatriculation",
							page: "/immatriculation/immatriculation-index",
							icon: "flaticon2-list-3",
						},

						{
							title: "ajouter un patrimoine",
							translate: "MENU.AJOUTERIMMATRICULATION",
							permission: "canCreateImmatriculation",
							page: "/immatriculation/immatriculation-new",
							icon: "flaticon-edit-1",
						},
					],
				},
				{
					title: "Projet gestion des marchés",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.MARCHES",
					permission: "accessToMarcheComModule",
					submenu: [
						{
							title: "Liste des marchés",
							translate: "MENU.LISTEMARCHES",
							permission: "accessToIndexMarcheCom",
							page: "/marche/marche-index",
							icon: "flaticon2-list-3",
						},

						{
							title: "ajouter un marché",
							translate: "MENU.AJOUTERMARCHE",
							permission: "canCreateMarcheCom",
							page: "/marche/marche-new",
							icon: "flaticon-edit-1",
						},
					],
				},
				{
					title: "Projet gestion des habitations",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.HABITATIONS",
					permission: "accessToHabitationModule",
					submenu: [
						{
							title: "Liste des habitations",
							translate: "MENU.LISTEHABITATIONS",
							permission: "accessToIndexHabitation",
							page: "/habitation/habitation-index",
							icon: "flaticon2-list-3",
						},

						{
							title: "ajouter une habitation",
							translate: "MENU.AJOUTERHABITATION",
							permission: "canCreateHabitation",
							page: "/habitation/habitation-new",
							icon: "flaticon-edit-1",
						},
					],
				},
				{
					title: "Projet gestion des toilettes public",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.TOILETTES",
					permission: "accessToToiletteModule",
					submenu: [
						{
							title: "Liste des toilettes",
							translate: "MENU.LISTETOILETTES",
							permission: "accessToIndexToilette",
							page: "/toilette/toilette-index",
							icon: "flaticon2-list-3",
						},

						{
							title: "ajouter une toilette public",
							translate: "MENU.AJOUTERTOILETTE",
							permission: "canCreateToilette",
							page: "/toilette/toilette-new",
							icon: "flaticon-edit-1",
						},
					],
				},
				{
					title: "Projet gestion des occupations des domaines public",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.DOMAINES",
					permission: "accessToDomainePublicModule",
					submenu: [
						{
							title: "Liste des domaines public",
							translate: "MENU.LISTEDOMAINES",
							permission: "accessToIndexDomainePublic",
							page: "/domaine/domaine-index",
							icon: "flaticon2-list-3",
						},

						{
							title: "ajouter un domaine public",
							translate: "MENU.AJOUTERDOMAINE",
							permission: "canCreateDomainePublic",
							page: "/domaine/domaine-new",
							icon: "flaticon-edit-1",
						},
					],
				},
				{
					title: "locataires",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.LOCATAIRES",
					permission: "accessToLocataireModule",
					submenu: [
						{
							title: "Liste des locataires",
							translate: "MENU.LISTELOCATAIRES",
							permission: "accessToIndexLocataire",
							page: "/locataire/locataire-index",
							icon: "flaticon2-list-3",
						},

						{
							title: "ajouter un locataire",
							translate: "MENU.AJOUTERLOCATAIRE",
							permission: "canCreateLocataire",
							page: "/locataire/locataire-new",
							icon: "flaticon-edit-1",
						},
					],
				},
				{
					title: "Beneficiaires",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.BENEFICIAIRES",
					//permission: "accessToBeneficiaireModule",
					submenu: [
						{
							title: "Liste des Beneficiaires",
							translate: "MENU.LISTEBENEFICIAIRES",
							page: "/beneficiaire/beneficiaire-index",
							icon: "flaticon2-list-3",
							//permission: "accessToIndexBeneficiaire"
						},
						{
							title: "ajouter un beneficiaire",
							translate: "MENU.AJOUTERBENEFICIAIRE",
							page: "/beneficiaire/beneficiaire-new",
							icon: "flaticon-edit-1",
							//permission: "canCreateBeneficiaire"
						}
					]
				},
			],
		},

		// ******************************************************************
		// MENU RACHID
		// ******************************************************************
		header_travaux_communaux: {
			self: {},
			items: [
				{
					title: "Intervention rapide",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.INTERVENTION_RAPIDE",
					permission: "accessToInterventionModule",
					submenu: [
						{
							title: "Liste intervention",
							translate: "PAGES.INTERVENTION_RAPIDE.TITRE_INDEX",
							page:
								"/intervention-rapide/list-intervention-rapide",
							icon: "flaticon2-list-3",
							permission: "accessToIndexIntervention",
						},
						{
							title: "Ajouter intervention",
							translate: "PAGES.INTERVENTION_RAPIDE.TITRE_NEW",
							page:
								"/intervention-rapide/add-intervention-rapide",
							icon: "flaticon-edit-1",
							permission: "canCreateIntervention",
						},
						/*
						{
							title: "Statistiques intervention rapide",
							bullet: "dot",
							translate: "MENU.STATS.INTERVENTION_RAPIDE",
							page: "/intervention-rapide/dashboard",
							icon: "flaticon2-pie-chart-1",
							permission: "accessToAllStatsIntervention",
						},
						*/
					],
				},
				{
					title: "Projet urbain",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PROJET_URBANISME",
					permission: "accessToProjetUrbanismeModule",
					submenu: [
						{
							title: "Liste projet urbain",
							translate: "PAGES.PROJET_URBANISME.TITRE_INDEX",
							page: "/projet-urbanisme/list-projet-urbanisme",
							icon: "flaticon2-list-3",
							permission: "accessToIndexProjetUrb",
						},
						{
							title: "Ajouter projet urbain",
							translate: "PAGES.PROJET_URBANISME.TITRE_NEW",
							page: "/projet-urbanisme/add-projet-urbanisme",
							icon: "flaticon-edit-1",
							permission: "canCreateProjetUrb",
						},
						/*
						{
							title: "Statistiques projet urbain",
							bullet: "dot",
							translate: "MENU.STATS.PROJET_URBANISME",
							page: "/projet-urbanisme/dashboard",
							icon: "flaticon2-pie-chart-1",
							permission: "accessToAllStatsProjetUrbanisme",
						},
						*/
					],
				},
			],
		},
		header_bureau_ordre: {
			self: {},
			items: [
				{
					title: "courrier entrant",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.COURRIER_ANTRANT",
					permission: "accessToCourrierEntrantModule",
					submenu: [
						{
							title: "Liste courrier entrant",
							icon: "flaticon2-list-3",
							translate:
								"PAGES.BUREAU_ORDRE.COURRIER_ENTRANT.TITRE_INDEX",
							page: "/courriers-entrants/list-courriers-entrants",
							permission: "accessToIndexCourrierEntrant",
						},
						{
							title: "Ajouter courrier entrant",
							icon: "flaticon-edit-1",
							translate:
								"PAGES.BUREAU_ORDRE.COURRIER_ENTRANT.TITRE_NEW",
							page: "/courriers-entrants/add-courriers-entrants",
							permission: "canCreateCourrierEntrant",
						},
						/*
						{
							title: "Statistiques courrier entrant",
							bullet: "dot",
							translate: "MENU.STATS.COURRIER_IN",
							page: "/courriers-entrants/dashboard",
							icon: "flaticon2-pie-chart-1",
							permission: "accessToAllStatsCourrierEntrant",
						},
						*/
					],
				},
				{
					title: "courrier sortant",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.COURRIER_SORTANT",
					permission: "accessToCourrierSortantModule",
					submenu: [
						{
							title: "Liste courrier sortant",
							icon: "flaticon2-list-3",
							translate:
								"PAGES.BUREAU_ORDRE.COURRIER_SORTANT.TITRE_INDEX",
							page: "/courriers-sortants/list-courriers-sortants",
							permission: "accessToIndexCourrierSortant",
						},
						{
							title: "Ajouter courrier sortant",
							icon: "flaticon-edit-1",
							translate:
								"PAGES.BUREAU_ORDRE.COURRIER_SORTANT.TITRE_NEW",
							page: "/courriers-sortants/add-courriers-sortants",
							permission: "canCreateCourrierSortant",
						},
						/*
						{
							title: "Statistiques courrier sortant",
							bullet: "dot",
							translate: "MENU.STATS.COURRIER_OUT",
							page: "/courriers-sortants/dashboard",
							icon: "flaticon2-pie-chart-1",
							permission: "accessToAllStatsCourrierSortant",
						},
						*/
					],
				},
				{
					title: "courrier refuse",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.COURRIERS_REFUSES",
					permission: "accessToIndexRefusedCS",
					page: "/courriers-refuses/list-courriers-refuses",
				},
				{
					title: "Origine courrier",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.COURRIER_ORIGIN",
					permission: "accessToOrigineCourrierModule",
					submenu: [
						{
							title: "Liste origine courrier",
							icon: "flaticon2-list-3",
							translate:
								"PAGES.BUREAU_ORDRE.ORIGINE_COURRIER.TITRE_INDEX",
							page:
								"/origine-courriers-sortants/list-origine-courriers-sortants",
							permission: "accessToIndexOrigineCourrier",
						},
						{
							title: "Ajouter origine courrier",
							icon: "flaticon-edit-1",
							translate:
								"PAGES.BUREAU_ORDRE.ORIGINE_COURRIER.TITRE_NEW",
							page:
								"/origine-courriers-sortants/add-origine-courriers-sortants",
							permission: "canCreateOrigineCourrier",
						},
					],
				},
				{
					title: "Recherche",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "TRANSLATOR.SEARCHE",
					page: "/courriers-entrants/search-courriers-entrants",
					permission: "accessToCourrierEntrantModule",
				},
				/*
				{
					title: "Personne physique",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PERSONNE_PHYSIQUE",
					permission: "accessToOrigineCourrierModule",
					submenu: [
						{
							title: "Liste des personnes",
							icon: "flaticon2-list-3",
							translate:
								"PAGES.BUREAU_ORDRE.PERSONNE_PHYSIQUE.TITRE_INDEX",
							page: "/personne-physique/list-personne-physique",
							permission: "accessToIndexOrigineCourrier",
						},
						{
							title: "Ajouter personne",
							icon: "flaticon-edit-1",
							translate:
								"PAGES.BUREAU_ORDRE.PERSONNE_PHYSIQUE.TITRE_NEW",
							page: "/personne-physique/add-personne-physique",
							permission: "canCreateOrigineCourrier",
						},
					],
				},
				*/
			],
		},
		header_insertion_publiciataire: {
			self: {},
			items: [
				{
					title: "Insertion publicitaire",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.INSERT_PUB",
					permission: "accessToInsertPubModule",
					submenu: [
						{
							title: "Liste publicitaire",
							translate: "PAGES.INSERT_PUB.TITRE_INDEX",
							icon: "flaticon2-list-3",
							page:
								"/insertion-publicitaire/list-insertion-publicitaire",
							permission: "accessToIndexInsertPub",
						},
						{
							title: "Ajouter publicitaire",
							translate: "PAGES.INSERT_PUB.TITRE_NEW",
							page:
								"/insertion-publicitaire/add-insertion-publicitaire",
							icon: "flaticon-edit-1",
							permission: "canCreateInsertPub",
						},
						/*
						{
							title: "Statistiques publicitaires",
							bullet: "dot",
							translate: "MENU.STATS.INSERT_PUB",
							page: "/insertion-publicitaire/dashboard",
							icon: "flaticon2-pie-chart-1",
							permission: "accessToAllStatsInsertPub",
						},
						*/
					],
				},
				{
					title: "Insertion media",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.INSERT_MEDIA",
					Permission: "accessToMediasModule",
					submenu: [
						{
							title: "Liste medias",
							translate: "PAGES.INSERT_PUB.MEDIA.TITRE_INDEX",
							page: "/insertion-media/list-insertion-media",
							icon: "flaticon2-list-3",
							permission: "accessToIndexMedias",
						},
						{
							title: "Ajouter medias",
							translate: "PAGES.INSERT_PUB.MEDIA.TITRE_NEW",
							page: "/insertion-media/add-insertion-media",
							icon: "flaticon-edit-1",
							permission: "canCreateMedias",
						},
					],
				},
			],
		},
		header_immobilisation: {
			self: {},
			items: [
				{
					title: "immobilisation",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.IMMOBILISATION",
					permission: "accessToImmobilisationModule",
					submenu: [
						{
							title: "Liste immobilisation",
							translate: "PAGES.IMMOBILISATION.TITRE_INDEX",
							page: "/immobilisation/list-immobilisation",
							icon: "flaticon2-list-3",
							permission: "accessToIndexImmobilisation",
						},
						{
							title: "Ajouter immobilisation",
							translate: "PAGES.IMMOBILISATION.TITRE_NEW",
							page: "/immobilisation/add-immobilisation",
							icon: "flaticon-edit-1",
							permission: "canCreateImmobilisation",
						},
						/*
						{
							title: "Statistiques immoblisation",
							bullet: "dot",
							translate: "MENU.STATS.IMMOBILISATION",
							page: "/immobilisation/dashboard",
							icon: "flaticon2-pie-chart-1",
							permission: "accessToAllStatsImmobilisation",
						},
						*/
					],
				},
				{
					title: "Reforme",
					translate: "PAGES.IMMOBILISATION.REFORME.LIBELLE",
					root: true,
					alignment: "left",
					toggle: "hover",
					permission: "canUpdateReformeImmobilisation",
					submenu: [
						{
							title: "Liste reforme",
							translate:
								"PAGES.IMMOBILISATION.REFORME.TITRE_INDEX",
							page: "/reforme/list-reforme",
							icon: "flaticon2-list-3",
							permission: "accessToIndexImmobilisation",
						},
						{
							title: "Ajouter reforme",
							translate: "PAGES.IMMOBILISATION.REFORME.TITRE_NEW",
							page: "/reforme/add-reforme",
							icon: "flaticon-edit-1",
							permission: "canCreateImmobilisation",
						},
					],
				},
			],
		},
		header_jsce: {
			self: {},
			items: [
				{
					title: "association",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.ASSOCIATION",
					permission: "accessToAssociationModule",
					submenu: [
						{
							title: "Liste association",
							translate: "PAGES.ASSOCIATION.TITRE_INDEX",
							page: "/associations/list-association",
							icon: "flaticon2-list-3",
							permission: "accessToIndexAssociation",
						},
						{
							title: "Ajouter association",
							translate: "PAGES.ASSOCIATION.TITRE_NEW",
							page: "/associations/add-association",
							icon: "flaticon-edit-1",
							permission: "canCreateAssociation",
						},
						/*
						{
							title: "Statistiques association",
							bullet: "dot",
							translate: "MENU.STATS.ASSOCIATION",
							page: "/associations/dashboard",
							icon: "flaticon2-pie-chart-1",
							permission: "accessToAllStatsAssociation",
						},
						{
							title: "Statistiques projet",
							bullet: "dot",
							translate: "MENU.STATS.PROJET_ASSOCIATION",
							page: "/projet-partenariat/dashboard",
							icon: "flaticon2-pie-chart-1",
							permission: "accessToAllStatsAssociation",
						},
						*/
					],
				},
				{
					title: "Personne morale",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PERSONNE_MORALE",
					permission: "accessToIndexActiviteCommunal",
					submenu: [
						{
							title: "Liste des institutions",
							translate:
								"PAGES.ACTIVITE.PERSONNE_MORALE.TITRE_INDEX",
							page: "/activites/list-personne-morale",
							icon: "flaticon2-list-3",
							permission: "accessToIndexActivite",
						},
						{
							title: "Ajouter organisme/institution",
							translate:
								"PAGES.ACTIVITE.PERSONNE_MORALE.TITRE_NEW",
							page: "/activites/add-personne-morale",
							icon: "flaticon-edit-1",
							permission: "canCreateActivite",
						},
					],
				},
				{
					title: "Activite communale",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.ACTIVITE_COMMUNALE",
					permission: "accessToIndexActiviteCommunal",
					submenu: [
						{
							title: "Liste activités",
							translate: "PAGES.ACTIVITE.TITRE_INDEX",
							page: "/activites/list-activites-commune",
							icon: "flaticon2-list-3",
							permission: "accessToIndexActivite",
						},
						{
							title: "Ajouter activité",
							translate: "PAGES.ACTIVITE.TITRE_NEW",
							page: "/activites/add-activites-commune",
							icon: "flaticon-edit-1",
							permission: "canCreateActivite",
						},
					],
				},
				{
					title: "Services subvention",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "PAGES.SUBVENTION.SERVICE_SUBVENTION",
					permission: "accessToServiceImpressionModule",
					submenu: [
						{
							title: "organisme d'accueil",
							bullet: "dot",
							translate: "PAGES.HEBERGEMENT.ORGANISME",
							page: "/hebergement/list-organisme",
							icon: "flaticon-location",
							permission: "accessToHebergementModule",
						},
						{
							title: "Fournisseur impression",
							bullet: "dot",
							translate: "PAGES.IMPRESSION.FOURNISSEUR",
							page: "/impression/list-fournisseur",
							icon: "flaticon2-print",
							permission: "accessToImpressionModule",
						},
						{
							title: "fournisseur-resto",
							bullet: "dot",
							translate: "PAGES.RESTAURATION.FOURNISSEUR",
							page: "/restauration/list-fournisseur-resto",
							icon: "flaticon-tea-cup",
							permission: "accessToRestaurationModule",
						},
					],
				},
				{
					title: "Recherche",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "TRANSLATOR.SEARCHE",
					page: "/associations/mandat-filter",
					//permission: "",
				},
			],
		},
		// ******************************************************************
		// MENU NAIMA
		// ******************************************************************
		header_reclamation: {
			self: {},
			items: [
				{
					title: "Réclamations",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.RECLAMATIONS",
					permission: "accessToReclamationModule",
					submenu: [
						{
							title: "liste des réclamations ",
							translate: "MENU.LISTE_RECLAMATION",
							page: "/reclamations/reclamation-detail",
							icon: "flaticon2-list-3",
							permission: "accessToIndexReclamation",
						},
						{
							title: "ajouter réclamation ",
							translate: "MENU.AJOUT_RECLAMATION",
							page: "/reclamations/reclamations-form",
							icon: "flaticon-edit-1",
							permission: "canCreateReclamation",
						},
					],
				},
				{
					title: "الأشخاص الماديين",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PERSONNES_PHYSIQUES",
					permission: "accessToReclamationModule",
					submenu: [
						{
							title: "لائحة الأشخاص الماديين",
							translate: "MENU.LISTE_PERSONNES_PHYSIQUES",
							page: "/personne-physique/personne-physique-list",
							icon: "flaticon2-list-3",
							permission: "accessToIndexPPSource",
						},
						{
							title: "إضافة شخص مادي",
							translate: "MENU.AJOUT_PERSONNES_PHYSIQUES",
							page: "/personne-physique/personne-physique-form",
							icon: "flaticon-edit-1",
							permission: "canCreatePPSource",
						},
					],
				},
				{
					title: "الأشخاص المعنويين",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PERSONNES_MORALES",
					permission: "accessToReclamationModule",
					submenu: [
						{
							title: "لائحة الأشخاص المعنويين",
							translate: "MENU.LISTE_PERSONNES_MORALES",
							page: "/personne-morale/personne-morale-list",
							icon: "flaticon2-list-3",
							permission: "accessToIndexPMSource",
						},
						{
							title: "إضافة شخص معنوي",
							translate: "MENU.AJOUT_PERSONNES_MORALES",
							page: "/personne-morale/personne-morale-form",
							icon: "flaticon-edit-1",
							permission: "canCreatePMSource",
						},
					],
				},
			],
		},
		header_autorisation: {
			self: {},
			items: [
				{
					title: "autorisations",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.AUTORISATIONS",
					permission: "accessToAutorisationModule",
					submenu: [
						{
							title: "liste des autorisations ",
							translate: "MENU.LISTE_AUTORISATIONS",
							page: "/autorisations/autorisations-list",
							icon: "flaticon2-list-3",
							permission: "accessToIndexAutorisation",
						},
						{
							title: "ajouter autorisation ",
							translate: "MENU.AJOUT_AUTORISATIONS",
							page: "/autorisations/autorisation-form",
							icon: "flaticon-edit-1",
							permission: "canCreateAutorisation",
						},
					],
				},
				{
					title: "الأشخاص الماديين",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PERSONNES_PHYSIQUES",
					permission: "accessToAutorisationModule",
					submenu: [
						{
							title: "لائحة الأشخاص الماديين",
							translate: "MENU.LISTE_PERSONNES_PHYSIQUES",
							page: "/personne-physique/personne-physique-list",
							icon: "flaticon2-list-3",
							//permission: "accessToIndexPPSource",
						},
						{
							title: "إضافة شخص مادي",
							translate: "MENU.AJOUT_PERSONNES_PHYSIQUES",
							page: "/personne-physique/personne-physique-form",
							icon: "flaticon-edit-1",
							//permission: "canCreatePPSource",
						},
					],
				},
				{
					title: "الأشخاص المعنويين",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PERSONNES_MORALES",
					permission: "accessToAutorisationModule",
					submenu: [
						{
							title: "لائحة الأشخاص المعنويين",
							translate: "MENU.LISTE_PERSONNES_MORALES",
							page: "/personne-morale/personne-morale-list",
							icon: "flaticon2-list-3",
							//permission: "accessToIndexPMSource",
						},
						{
							title: "إضافة شخص معنوي",
							translate: "MENU.AJOUT_PERSONNES_MORALES",
							page: "/personne-morale/personne-morale-form",
							icon: "flaticon-edit-1",
							//permission: "canCreatePMSource",
						},
					],
				},
				{
					title: "ممتلكات الجماعة",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.BIENS",
					permission: "accessToAutorisationModule",
					submenu: [
						{
							title: "لائحة ممتلكات الجماعة",
							translate: "MENU.LISTE_BIENS_COMMUNAUX",
							page: "/autorisations/biens-list",
							icon: "flaticon2-list-3",
							permission: "accessToIndexBiensAutorisation",
						},
						{
							title: "إضافة ممتلك",
							page: "/autorisations/bien-form",
							icon: "flaticon-edit-1",
							translate: "MENU.AJOUT_BIEN",
							permission: "canCreateBienAutorisation",
						},
					],
				},
			],
		},
		header_reservations: {
			self: {},
			items: [
				{
					title: "reservations",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.RESERVATIONS",
					permission: "accessToReservationModule",
					submenu: [
						{
							title: "liste des reservations ",
							translate: "MENU.LISTE_RESERVATIONS",
							page: "/reservations/reservations-list",
							icon: "flaticon2-list-3",
							permission: "accessToIndexReservation",
						},
						{
							title: "ajouter reservation ",
							translate: "MENU.AJOUT_RESERVATIONS",
							page: "/reservations/reservation-form",
							icon: "flaticon-edit-1",
							permission: "canCreateReservation",
						},
					],
				},
				{
					title: "الأشخاص الماديين",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PERSONNES_PHYSIQUES",
					permission: "accessToReservationModule",
					submenu: [
						{
							title: "لائحة الأشخاص الماديين",
							translate: "MENU.LISTE_PERSONNES_PHYSIQUES",
							page: "/personne-physique/personne-physique-list",
							icon: "flaticon2-list-3",
							permission: "accessToIndexPPSource",
						},
						{
							title: "إضافة شخص مادي",
							translate: "MENU.AJOUT_PERSONNES_PHYSIQUES",
							page: "/personne-physique/personne-physique-form",
							icon: "flaticon-edit-1",
							permission: "canCreatePPSource",
						},
					],
				},
				{
					title: "الأشخاص المعنويين",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PERSONNES_MORALES",
					permission: "accessToReservationModule",
					submenu: [
						{
							title: "لائحة الأشخاص المعنويين",
							translate: "MENU.LISTE_PERSONNES_MORALES",
							page: "/personne-morale/personne-morale-list",
							icon: "flaticon2-list-3",
							permission: "accessToIndexPMSource",
						},
						{
							title: "إضافة شخص معنوي",
							translate: "MENU.AJOUT_PERSONNES_MORALES",
							page: "/personne-morale/personne-morale-form",
							icon: "flaticon-edit-1",
							permission: "canCreatePMSource",
						},
					],
				},
				{
					title: "ممتلكات الجماعة",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.BIENS",
					permission: "accessToReservationModule",
					submenu: [
						{
							title: "لائحة ممتلكات الجماعة",
							translate: "MENU.LISTE_BIENS_COMMUNAUX",
							page: "/reservations/bienreservations-list",
							icon: "flaticon2-list-3",
							permission: "accessToIndexBiensReservation",
						},
						{
							title: "إضافة ممتلك",
							page: "/reservations/bienreservation-form",
							icon: "flaticon-edit-1",
							translate: "MENU.AJOUT_BIEN",
							permission: "canCreateBienReservation",
						},
					],
				},
			],
		},
		header_affairesConseil: {
			self: {},
			items: [
				{
					title: "mondats",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.MONDATS",
					permission: "accessToMondat",
					submenu: [
						{
							title: "liste des mondats ",
							icon: "flaticon2-list-3",
							translate: "MENU.LISTE_MONDAT",
							page: "/affaires-conseil/mondat-list",
							permission: "accessToIndexMondat",
						},
						{
							title: "ajouter mondat ",
							icon: "flaticon-edit-1",
							translate: "MENU.AJOUT_MONDAT",
							page: "/affaires-conseil/mondat-form",
							permission: "canCreateMondat",
						},
					],
				},
				{
					title: "الدورات ",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.SESSIONS",
					permission: "accessToSession",
					submenu: [
						{
							title: "لائحة الدورات",
							icon: "flaticon2-list-3",
							page: "/affaires-conseil/session-list",
							translate: "MENU.LISTE_SESSIONS",
							permission: "accessToIndexSession",
						},
						{
							title: "إضافة دورة",
							icon: "flaticon-edit-1",
							translate: "MENU.AJOUT_SESSION",
							page: "/affaires-conseil/session-form",
							permission: "canCreateSession",
						},
					],
				},
				{
					title: "النقاط ",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.POINTS",
					page: "/affaires-conseil/point-form",
					permission: "canCreatePoint",
				},
				{
					title: "جدول أعمال المكتب",
					root: true,
					alignment: "left",
					toggle: "hover",
					page: "/affaires-conseil/ordre-jour-session-list",
					translate: "MENU.ORDRE_J_BUREAU",
					permission: "accessOrdreJourAudience",
				},
				{
					title: "الجلسات",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.AUDIENCES",
					permission: "accessToAudience",
					submenu: [
						{
							title: "لائحة الجلسات",
							icon: "flaticon2-list-3",
							page: "/affaires-conseil/audience-list",
							translate: "MENU.LISTE_AUDIENCES",
							permission: "accessToIndexAudience",
						},
						{
							title: "إضافة جلسة",
							icon: "flaticon-edit-1",
							page: "/affaires-conseil/audience-form",
							translate: "MENU.AJOUT_AUDIENCES",
							permission: "canCreateAudience",
						},
					],
				},
				{
					title: "اللجان ",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.COMMISSIONS",
					permission: "accessToCommission",
					submenu: [
						{
							title: "لائحة اللجان",
							icon: "flaticon2-list-3",
							translate: "MENU.LISTE_COMMISSION",
							page: "/affaires-conseil/commission-list",
							permission: "accessToIndexCommission",
						},
						{
							title: "إضافة لجنة",
							icon: "flaticon-edit-1",
							page: "/affaires-conseil/commission-conseil-form",
							translate: "MENU.ADD_COMMISSION",
							permission: "canCreateCommission",
						},
						/*	{
							title: "إضافة اجتماع لجنة",
							translate: "MENU.ADD_REUNION_COMMISSION",
							page: "/affaires-conseil/reunion-commission-form",
							permission: "canCreateReunionCommission",
						},
						{
							title: "لائحة اجتماعات اللجنة",
							translate: "MENU.LISTE_REUNION_COMMISSION",
							page: "/affaires-conseil/reunion-commission-list",
							permission: "accessToIndexReunionCommission",
						},*/
					],
				},
				{
					title: "جدول أعمال اللجان",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.ORDRE_J_COMMISSION",
					page: "/affaires-conseil/ordre-jour-commission",
					permission: "accessOrdreJourCommission",
				},
				{
					title: "Decisions ",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.DECISIONS",
					page: "/affaires-conseil/decisions-points-list",
					permission: "accessToPointSession",
					//permission: "canCreatePoint",
				},
				{
					title: "الجلسات",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.REUNIONS",
					permission: "accessToAudience",
					submenu: [
						{
							title: "لائحة الجلسات",
							icon: "flaticon2-list-3",
							page: "/affaires-conseil/reunion-commission-list",
							translate: "MENU.REUNIONS_COMMISSION",
							//permission: "accessToIndexAudience",
						},
						{
							title: "إضافة جلسة",
							icon: "flaticon-edit-1",
							page: "/affaires-conseil/reunion-bureau-list",
							translate: "MENU.REUNIONS_BUREAU",
							//permission: "canCreateAudience",
						},
					],
				},
			],
		},
		header_marches: {
			self: {},
			items: [
				{
					title: "طلبات العروض",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.AO",
					permission: "accessToAoModule",
					submenu: [
						{
							title: "لائحة طلبات العروض ",
							icon: "flaticon2-list-3",
							translate: "PAGES.MARCHE.AO.TITRE_INDEX",
							page: "/marches/ao-list",
							permission: "accessToIndexAo",
						},
						{
							title: "إضافة طلب العروض",
							icon: "flaticon-edit-1",
							translate: "PAGES.MARCHE.AO.TITRE_NEW",
							page: "/marches/ao-form",
							permission: "canCreateAo",
						},
					],
				},
				{
					title: "marches",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.MARCHE",
					permission: "accessToMarche",
					submenu: [
						{
							title: "liste des marches ",
							icon: "flaticon2-list-3",
							translate: "PAGES.MARCHE.MARCHE.TITRE_INDEX",
							page: "/marches/marches-list",
							permission: "accessToIndexMarche",
						},
						{
							title: "ajouter marche ",
							icon: "flaticon-edit-1",
							translate: "PAGES.MARCHE.MARCHE.TITRE_NEW",
							page: "/marches/marche-new",
							permission: "canCreateMarche",
						},
					],
				},
				{
					title: "consultations",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.CONSULTATION",
					permission: "accessToAoModule",
					submenu: [
						{
							title: "liste des marches ",
							icon: "flaticon2-list-3",
							translate: "PAGES.MARCHE.CONSULTATION_ARCHITECTURALE.TITRE_INDEX",
							page: "/marches/consultation-list",
							permission: "accessToIndexConsultation",
						},
						{
							title: "ajouter marche ",
							icon: "flaticon-edit-1",
							translate: "PAGES.MARCHE.CONSULTATION_ARCHITECTURALE.TITRE_NEW",
							page: "/marches/consultation-form",
							permission: "canCreateConsultation",
						},
					],
				},
				{
					title: "bonCommande",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.BC",
					permission: "accessToIndexBonCommande",
					page: "/marches/bon-commande-list",
				},
				{
					title: "prestataires",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.PRESTATAIRE",
					permission: "accessToAoModule",
					submenu: [
						{
							title: "liste des marches ",
							icon: "flaticon2-list-3",
							translate: "PAGES.MARCHE.PRESTATAIRE.TITRE_INDEX",
							page: "/marches/prestataires-list",
							permission: "accessToIndexPrestataireAo",
						},
						{
							title: "ajouter marche ",
							icon: "flaticon-edit-1",
							translate: "PAGES.MARCHE.PRESTATAIRE.TITRE_NEW",
							page: "/marches/prestataire-new",
							permission: "canCreatePrestataireAo",
						},
					],
				},
				{
					title: "maintien de l\'offre",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "MENU.MAINTIEN_OFFRE",
					page: "/marches/ao-maintien-offre",
					permission: "accessToAoModule",
				},
				{
					title: "Recherche",
					root: true,
					alignment: "left",
					toggle: "hover",
					translate: "TRANSLATOR.SEARCHE",
					page: "/marches/ao-recherche",
					permission: "accessToAoModule",
				},
			],
		},
		// ******************************************************************
		// SIDE MENU
		// ******************************************************************
		aside: {
			self: {},
			items: [],
		},
	};
	public get configs(): any {
		return this.defaults;
	}
}
