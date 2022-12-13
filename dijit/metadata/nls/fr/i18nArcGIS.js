// COPYRIGHT © 2022 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define({documentTypes:{arcgis:{caption:"Métadonnées ArcGIS",editorCaption:"Métadonnées",description:""}},emptyOption:"Vide",conditionals:{ISO19139A1_ROW4:"Si le niveau hiérarchique des métadonnées est Jeu de données, une emprise géographique ou une description géographique est requise.",ISO19139A1_ROW6:"L’identifiant ou le nom du jeu de données est requis.",ISO19139A1_ROW7:"Si vous choisissez Autres restrictions, Autres contraintes est requis.",ISO19139A1_ROW9:"Si le champ d’application n’est pas Jeu de données ou Série, une description de niveau est requise.",ISO19139A1_ROW10_11_12:"Si le champ d’application est Jeu de données ou Série, un des paramètres Instruction, Étape de processus ou Source de données est requis.",ISO19139A1_ROW15:"Si Disponibilité des points de vérification est sélectionné, Description des points de vérification est requis.",ISO19139A1_ROW18:"Si Distribution est documenté, un format ou un distributeur/format est requis.",INSPIRE_AccessLimitation:" Au moins un code de restriction d’accès légal ou de classification de sécurité est requis. (INSPIRE)",INSPIRE_UseLimitation:" Au moins une limite d’utilisation est requise. (INSPIRE)",INSPIRE_ConformanceResult:"Un rapport Cohérence des domaines nécessite un résultat de conformité. (INSPIRE)",INSPIRE_DomainConsistency:"Un rapport Cohérence des domaines est requis. (INSPIRE)",INSPIRE_LineageStatement:"Si le champ d’application est Jeu de données ou Série, une instruction de lignée est requise. (INSPIRE).",FGDC_DescIfTemporal:"Une description est requise pour une étendue temporelle. (FGDC)",FGDC_Keywords:"Une rubrique, une balise ou un mot-clé thématique est requis. (FGDC)",FGDC_Reports:"Les rapports Omission de complétude et Cohérence conceptuelle sont requis. (FGDC)",FGDC_Temporal:"Au moins une étendue temporelle est requise. (FGDC)",NAP_Contact:"Une adresse/adresse postale, un numéro de téléphone/serveur vocal ou une ressource en ligne/URL est requis. (NAP)",GEN_BoundingBox:"Au moins une emprise géographique est requise.",GEN_ReportResult:"Un résultat de conformité ou résultat quantitatif est requis.",minLessThanMax:"La valeur minimum doit être inférieure à la valeur maximum."},hints:{integerGreaterThanZero:"(saisissez un entier > 0)",integerGreaterThanOne:"(saisissez un entier > 1)",integer0To100:"(saisissez un entier 0..100)",maxScale:"(saisissez un entier > 0, par exemple 50000)",minScale:"(saisissez un entier > 0, par exemple 150000000)",number0To100:"(saisissez un nombre 0..100)",number0To360:"(saisissez un nombre 0..360)",number90To90:"(saisissez un nombre -90..90)",listOfDoubles:"(saisissez une liste de nombres en les séparant par un espace)"},htmlEditor:{button:"Modifier..."},sections:{overview:"Vue d’ensemble",esri:"Esri",resource:"Ressource",reference:"Référence",content:"Contenu",distribution:"Répartition",quality:"Qualité",eainfo:"Champs",representation:"Représentation",metadata:"Métadonnées"},metadataStyle:{caption:"Style de métadonnées ArcGIS",changeButton:"Modifier...",dialogTitle:"Choisir un style de métadonnées",updating:"Mise à jour du document...","Item Description":"Description de l’élément","FGDC CSDGM Metadata":"Métadonnées FGDC CSDGM","ISO 19139 Metadata Implementation Specification":"Spécification d’implémentation des métadonnées ISO 19139","ISO 19139 Metadata Implementation Specification GML3.2":"Spécification d’implémentation des métadonnées GML3.2 ISO 19139","INSPIRE Metadata Directive":"Directive concernant les métadonnées INSPIRE","North American Profile of ISO19115 2003":"Profil nord américain d’ISO19115 2003"},aggrInfo:{caption:"Informations d’agrégat",datasetHint:"L’identifiant ou le nom du jeu de données est requis.",aggrDSIdent:"Identifiant du jeu de données",aggrDSName:"Nom du jeu de données"},appSchInfo:{caption:"Schéma d’application",asName:"Nom du schéma",asSchLang:"Schéma de langue",asCstLang:"Langage de contrainte",asAscii:"ASCII",asGraFile:"Fichier graphique",asGraFile_src:"Fichier graphique source",asSwDevFile:"Fichier de développement logiciel",asSwDevFile_src:"Fichier source de développement logiciel",asSwDevFiFt:"Format de fichier de développement logiciel"},citation:{caption:"Référence",section:{titlesAndDates:"Titres et dates",links:"URL",identifiers:"Identifiants",presentation:"Forme",other:"Autre",edition:"Mise à jour",series:"Série"},conditionalDate:{caption:"Date de référence",msg:"Un des paramètres Date de création, Date de publication ou Date de révision est requis.",msg_nap:"Une date de publication est requise."},resTitle:"Titre",resAltTitle:"Autre titre",resTitleForInspire:{bg:"Bulgare",cs:"Tchèque",da:"Danois",de:"Allemand",el:"Grec",en:"English (Anglais)",es:"Espagnol",et:"Estonien",fi:"Finlandais",fr:"Français",hr:"Croate",hu:"Hongrois",it:"Italien",lt:"Lituanien",lv:"Letton",mt:"Maltais",nl:"Néerlandais",pl:"Polonais",pt:"Portugais",ro:"Roumain",sk:"Slovaque",sl:"Slovène",sv:"Suédois"},collTitle:"Titre collectif",date:{createDate:"Date de création",pubDate:"Date de publication",reviseDate:"Date de révision",notavailDate:"Date non disponible",inforceDate:"Date de validité",adoptDate:"Date d’adoption",deprecDate:"Date d’expiration",supersDate:"Date de remplacement"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identifiant",identCode:"Code",identAuth:"Référence d’autorité"},resEd:"Mise à jour",resEdDate:"Date de mise à jour",datasetSeries:{seriesName:"Nom",issId:"Émission",artPage:"Page"},otherCitDet:"Autres détails",contactCaption:"Contact de référence"},cntAddress:{caption:"Adresse",delPoint:"Adresse postale",city:"Ville",adminArea:"Zone administrative",postCode:"Code postal",country:"Pays",eMailAdd:"Adresse e-mail",addressType:{caption:"Type d’adresse",postal:"Postale",physical:"Physique",both:"Les deux"}},cntOnlineRes:{caption:"Ressource en ligne",linkage:"URL",protocol:"Protocole",appProfile:"Profil d’application",orName:"Nom",orDesc:"Description"},cntPhone:{caption:"Téléphone",voiceNum:"Voix",faxNum:"Télécopie",tddtty:"TDD/TTY ?"},codeRef:{caption:"Identifiant",identCode:"Code",idCodeSpace:"Espace de code",idVersion:"Version",identAuth:"Référence d’autorité"},constraints:{caption:"Contraintes",useLimit:"Limite d’utilisation",general:{caption:"Général"},legal:{caption:"Légal",accessConsts:"Contraintes d’accès",useConsts:"Contraintes d’utilisation",othConsts:"Autres contraintes"},security:{caption:"Sécurité",classSys:"Système de classification",userNote:"Note de l’utilisateur",handDesc:"Description de la gestion"}},contInfo:{caption:"Informations sur le contenu",section:{CovDesc:"Description de couverture",ImgDesc:"Description d’image",FetCatDesc:"Catalogue des entités"},attDesc:"Description d’attribut",covDim:{caption:"Plage ou canal",seqID:"Identifiant de séquence",seqIDType:"Type d’identifiant de séquence",dimDescrp:"Descripteur"},RangeDim:{caption:"Dimension de plage"},Band:{caption:"Canal",minVal:"Valeur minimale",maxVal:"Valeur maximale",valUnit:"Unités de valeur",pkResp:"Meilleure réponse",bitsPerVal:"Bits par valeur",toneGrad:"Dégradé de tons",sclFac:"Facteur d’échelle",offset:"Décalage"},CovDesc:{caption:"Description de couverture",section:{description:"Description",rangesAndBands:"Plages et canaux"}},ImgDesc:{caption:"Description de l’image",section:{description:"Description",rangesAndBands:"Plages et canaux"},illElevAng:"Angle d’élévation de l’éclairage",illAziAng:"Angle azimutal de l’éclairage",cloudCovPer:"Pourcentage de couverture nuageuse",cmpGenQuan:"Qualité de compression",trianInd:"Indicateur de triangulation ?",radCalDatAv:"Disponibilité des données de calibrage radiométrique ?",camCalInAv:"Disponibilité des informations de calibrage de la caméra ?",filmDistInAv:"Disponibilité des informations sur la déformation de la pellicule ?",lensDistInAv:"Disponibilité des informations de déformation de l'objectif ?",imagQuCode:"Code de qualité",prcTypCde:"Code de niveau de traitement"},FetCatDesc:{caption:"Catalogue des entités",section:{description:"Description",featureTypes:"Types d’entités",citation:"Référence"},compCode:"Conforme à la norme ISO 19110 ?",incWithDS:"Included With Dataset?",catCitation:"Référence de catalogue d’entités",catFetTyps:{caption:"Type d’entités",genericName:"Nom",codeSpace:"Espace de code"}}},contact:{caption:"Contact",section:{name:"Nom du contact",info:"Coordonnées",hoursAndInstructions:"Heures et instructions"},conditionalName:{caption:"Nom du contact",msg:"Un des paramètres Nom de l’individu, Nom de l’organisation ou Nom du poste est requis.",msg_fgdc:"Un des paramètres Nom de l’individu ou Nom de l’organisation est requis."},rpIndName:"Nom de l’individu",rpOrgName:"Nom de l’organisation",rpPosName:"Nom du poste",rpCntInfo:"Coordonnées",cntHours:"Heures de service",cntInstr:"Instructions de contact"},distInfo:{caption:"Informations de distribution",section:{format:"Format",distributor:"Distributeur",transfer:"Options de transfert"},distFormat:{caption:"Format de distribution",formatName:"Nom du format",formatVer:"Version du format",formatAmdNum:"Numéro de modification",formatSpec:"Spécification",fileDecmTech:"Technique de décompression",formatInfo:"Contenu d’informations"},distributor:{caption:"Distributeur"},distTranOps:{caption:"Options de transfert numérique",section:{unitsAndSize:"Unités"},unitsODist:"Unités de distribution",transSize:"Taille de transfert",offLineMed:{caption:"Support hors ligne",medDensity:"Densité",medDenUnits:"Unités de densité",medVol:"Volumes",medNote:"Note moyenne"}},distorOrdPrc:{caption:"Processus de commande",resFees:"Frais",planAvDtTm:"Date de disponibilité",planAvTmPd:{caption:"Période de disponibilité",tmBegin:"Date/heure de début",tmEnd:"Date/heure de fin"},ordInstr:"Instructions de commande",ordTurn:"Rond-point"}},dqInfo:{caption:"Qualité des données",section:{scope:"Domaine d’applicabilité",report:"Rapport",lineage:"Lignée"},dqScope:{section:{level:"Niveau",extent:"Étendue"},scpLvl:"Niveau du domaine d’applicabilité",scpLvlDesc:"Description de niveau",scpExt:"Étendue du champ d’application"},report:{section:{measure:"Mesurer",evaluation:"Évaluation",result:"Résultat",conformance:"Conformité"},measDesc:"Description de la mesure",measName:"Nom de la mesure",measDateTm:"Date de mesure",measId:"Identifiant de mesure",evalMethDesc:"Méthode d’évaluation",evalProc:"Référence de la procédure",ConResult:{caption:"Résultat de conformité",conExpl:"Explication",conSpec:"Spécification",conPass:{caption:"Degré",_1:"Conforme",_0:"Non conforme"}},QuanResult:{caption:"Résultat quantitatif",quanVal:"Valeur",quanValType:"Type de valeur",quanValUnit:"Unités de valeur",errStat:"Statistique d’erreur"}},dataLineage:{section:{statement:"Instruction",dataSource:"Source de données",prcStep:"Étape de processus"},statement:"Instruction de lignée",dataSource:{caption:"Source de données",section:{description:"Description",srcRefSys:"Système de référence",srcExt:"Étendue",srcCitatn:"Référence"},srcDesc:"Description de la source",srcScale:{rfDenom:"Dénominateur d’échelle"},srcRefSys:"Système de référence source",srcExt:"Étendue source",srcCitatn:"Référence de source"},prcStep:{caption:"Étape de processus",section:{description:"Description",stepProc:"Processeur",stepSrc:"Source de données"},stepDesc:"Description du processus",stepRat:"But du processus",stepDateTm:"Date de l’étape du processus",stepProc:"Processeur",stepSrc:"Source de données"}}},eainfo:{caption:"Informations sur l’entité et l’attribut",section:{detailed:"Détails",overview:"Vue d’ensemble"},detailed:{caption:"Détails sur l’entité et les attributs",section:{enttyp:"Entité",attr:"Attributs"},enttyp:{caption:"Type d’entité",enttypl:"Étiquette",enttypt:"Objet",enttypc:"Effectif",enttypd:"Définition",enttypds:"Source de définition"},attr:{caption:"Attribut",section:{description:"Description",value:"Valeur",domain:"Domaine"},attrlabl:"Étiquette",attalias:"Alias",attrdef:"Définition",attrdefs:"Source de définition",attrtype:"Type",attwidth:"Largeur",atprecis:"Précision",attscale:"Échelle",atindex:"Indexé",attrvai:{attrva:"Explication de valeurs",attrvae:"Précision de valeur"},attrmfrq:"Fréquence de mesure de valeur",begdatea:"Date de début des valeurs",enddatea:"Date de fin des valeurs",attrdomv:{caption:"Domaine",edom:{caption:"Énuméré",edomv:"Valeur",edomvd:"Définition",edomvds:"Source de définition"},rdom:{caption:"Plage",rdommin:"Valeur minimale",rdommax:"Valeur maximale",rdommean:"Moyenne",rdomstdv:"Écart-type",attrunit:"Unités",attrmres:"Résolution de la mesure"},codesetd:{caption:"Jeu de codes",codesetn:"Nom",codesets:"Source"},udom:{caption:"Non représentable"}}}},overview:{caption:"Vue d’ensemble",eaover:"Résumé",eadetcit:"Référence"}},extent:{caption:"Étendue",section:{description:"Description",geographic:"Géographique",temporal:"Temporelle",vertical:"Verticale"},exDesc:"Description de l’étendue",geoEle:{caption:"Étendue géographique",GeoBndBox:{caption:"Emprise",esriExtentType:"Étendue destinée à la recherche ?",exTypeCode:"L’étendue contient-elle la ressource ?",westBL:"Longitude limite ouest",eastBL:"Longitude limite est",southBL:"Latitude limite sud",northBL:"Latitude limite nord"},GeoDesc:{caption:"Description géographique",exTypeCode:"La description contient-elle la ressource ?",identCode:"Code"}},tempEle:{caption:"Étendue temporelle",TM_Period:"Période",TM_Instant:"Instant ponctuel",tmPosition:"Date",tmBegin:"Date de début",tmEnd:"Date de fin"},vertEle:{caption:"Étendue verticale",vertMinVal:"Valeur minimale",vertMaxVal:"Valeur maximale"}},graphOver:{caption:"Parcourir le graphique",bgFileName:"Parcourir l’URL du graphique",bgFileDesc:"Parcourir la description graphique",bgFileType:"Parcourir les types de fichier graphique"},keywords:{caption:"Mot-clé",section:{topicCategory:"Rubrique",searchKeys:"Balises",themeKeys:"Thème",placeKeys:"Site",tempKeys:"Temporel",discKeys:"Discipline",stratKeys:"Niveau",productKeys:"Produit",subTopicCatKeys:"Sous-rubrique",otherKeys:"Autre"},delimited:"Mot-clé",searchKeys:"Balises",themeKeys:"Mots-clés thématiques",placeKeys:"Mots-clés de site",tempKeys:"Mots-clés temporels",discKeys:"Mots-clés de discipline",stratKeys:"Mots-clés de niveau",productKeys:"Mots-clés de produit",subTopicCatKeys:"Mots-clés de sous-rubrique",otherKeys:"Autres mots-clés",thesaName:"Référence de thésaurus",thesaLang:"Langue de thésaurus",gemet:"Recherche"},locales:{caption:"Paramètres locaux",locale:"Paramètre régional",resTitle:"Titre",idAbs:"Résumé"},maintenance:{caption:"Maintenance",section:{frequency:"Fréquence",scope:"Domaine d’applicabilité",note:"Remarque"},usrDefFreq:"Fréquence personnalisée",dateNext:"Mise à jour suivante",maintScp:"Domaine d’applicabilité de la mise à jour",upScpDesc:{caption:"Description du champ d’application",attribSet:"Attributs",attribIntSet:"Instances d’attributs",featSet:"Entités",featIntSet:"Instances d’entités",datasetSet:"Jeu de données",other:"Autres instances"},maintNote:"Note de maintenance",maintCont:"Contact de maintenance"},metadata:{section:{profile:"Profil",details:"Domaine d’applicabilité"},mdFileID:"Identifiant de fichier",mdParentID:"Identifiant parent",datasetURI:"URI de jeu de données",dataSetFn:"Fonction du jeu de données",mdDateSt:"Date des métadonnées",mdTimeSt:"Date/heure des métadonnées",mdLang:"Langue des métadonnées",mdChar:"Jeu de caractères",mdHrLv:"Niveau de hiérarchie",mdHrLvName:"Nom du niveau de hiérarchie",mdContact:"Contacts de métadonnées",mdMaint:"Maintenance des métadonnées",mdConst:"Contraintes relatives aux métadonnées"},porCatInfo:{caption:"Référence de rendu"},refSysInfo:{caption:"Référence spatiale"},resource:{section:{citation:"Référence",details:"Détails",description:"Description",keywords:"Mot-clé",status:"Statut",resolution:"Résolution",representation:"Représentation",browse:"Parcourir le graphique",format:"Format",usage:"Utilisation",aggregateInfo:"Agrégation",additional:"Supplémentaire"},idAbs:"Description",idPurp:"Récapitulatif (objet)",suppInfo:"Informations supplémentaires",idCredit:"Crédits",envirDesc:"Environnement de traitement",dataLang:"Langue de ressource",dataExt:"Étendue de ressource",idPoC:"Point de contact",resMaint:"Maintenance des ressources",resConst:"Contraintes de ressources",dsFormat:"Format de ressource",dataScale:{caption:"Échelle des données",equScale:"Résolution de l’échelle",scaleDist:"Résolution de la distance",scaleDist_value:"Distance"},idSpecUse:{caption:"Utilisation de ressource",specUsage:"Utilisation spécifique",usageDate:"Date d’utilisation",usrDetLim:"Limites",usrCntInfo:"Contact d’utilisation"}},service:{caption:"Service",svType:"Type de service",svType_Name:"Nom",svAccProps:"Propriétés d’accès",svCouplRes:{caption:"Ressource couplée",svOpName:"Nom d’opération",svResCitId:"Identifiant de ressource"},svCoupleType:"Type de couplage"},scaleRange:{caption:"Plage d’échelle",maxScale:"Échelle maximale",minScale:"Échelle minimale"},spatRepInfo:{caption:"Représentation spatiale",section:{dimension:"Dimension",parameters:"Paramètres"},numDims:"Nombre de dimensions",tranParaAv:"Disponibilité du paramètre de transformation ?",axisDimension:{caption:"Dimension",dimSize:"Taille",dimResol:{caption:"Résolution",_value:"Valeur de résolution",uom:"Unités de résolution"}},VectSpatRep:{caption:"Vecteur",geometObjs:"Objets géométriques",geoObjCnt:"Nombre d’objets"},GridSpatRep:{caption:"Grille"},Georect:{caption:"Géorectifié",section:{centerPoint:"Point central",cornerPts:"Points d’angle"},chkPtAv:"Disponibilité des points de vérification ?",chkPtDesc:"Description des points de vérification",ptInPixel:"Point dans pixel",transDimDesc:"Description des dimensions de transformation",transDimMap:"Appariement des dimensions de la transformation",cornerPts:{caption:"Point d’angle",pos:"Position",gmlDesc:"Description",gmlDescRef:"Référence",gmlIdent:"Identifiant",codeSpace:"Espace de code de l’identifiant"}},Georef:{caption:"Géoréférençable",ctrlPtAv:"Disponibilité du point de contrôle ?",orieParaAv:"Disponibilité du paramètre d’orientation ?",orieParaDs:"Description du paramètre d’orientation",georefPars:"Paramètres géoréférencés",paraCit:"Référence de paramètre"},Indref:{caption:"Indirect"}},booleanOptions:{_false:"Non",_true:"Oui"},codelist:{CountryCode:"Pays",LanguageCode:"Langue",MonetaryUnits:"Unités monétaires",MonetaryUnits_empty:"Aucune devise universelle",PresentationForm:"Formulaire de présentation de données géospatiales FGDC",CI_PresentationFormCode:"Format de présentation",CI_RoleCode:"Rôle",CI_OnLineFunctionCode:"Fonction",IMS_ContentType:"Type de contenu",DQ_ElementDimension:"Dimension",DQ_ElementType:"Type de rapport",DQ_EvaluationMethodTypeCode:"Type d’évaluation",DS_AssociationTypeCode:"Type d’association",DS_InitiativeTypeCode:"Type d’initiative",LI_SourceType:"Type de source",MD_CellGeometryCode:"Géométrie de cellule",MD_CharacterSetCode:"Jeu de caractères",MD_ClassificationCode:"Classification",MD_CoverageContentTypeCode:"Type de contenu",MD_DimensionNameTypeCode:"Type de dimension",MD_GeometricObjectTypeCode:"Type d’objet géométrique",MD_ImagingConditionCode:"Condition de traitement d’images",MD_MaintenanceFrequenceCode:"Fréquence de mise à jour",MD_MediumFormatCode:"Code de format",MD_MediumNameCode:"Nom de support",MD_PixelOrientationCode:"Orientation des pixels",MD_ProgressCode:"Statut",MD_RestrictionCode:"Code de restriction",MD_ScopeCode:"Domaine d’applicabilité",MD_SpatialRepresentationTypeCode:"Type de représentation spatiale",MD_TopicCategoryCode:"Catégorie",MD_TopologyLevelCode:"Niveau de topologie",RS_Dimension:"Dimension",SV_CouplingType:"Type de couplage",UCUM:"Unités",UCUM_Length:"Unités de distance",RS_UseLimitations:"Limites d’utilisation",RS_AccessConstraints:"Contraintes d’accès"}});