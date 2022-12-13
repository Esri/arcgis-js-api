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

define({documentTypes:{arcgis:{caption:"Metadate ArcGIS",editorCaption:"Metadate",description:""}},emptyOption:"Gol",conditionals:{ISO19139A1_ROW4:"Dacă nivelul ierarhic al metadatelor este Set de date, este necesară o Casetă de legătură geografică sau o Descriere geografică.",ISO19139A1_ROW6:"Este necesar un Identificator de set de date sau un Nume de set de date.",ISO19139A1_ROW7:"Dacă se selectează Alte restricţii, este necesară opţiunea Alte constrângeri.",ISO19139A1_ROW9:"Dacă Domeniu nu este Set de date sau Serie, este necesară o Descriere de nivel.",ISO19139A1_ROW10_11_12:"Dacă Domeniu nu este Set de date sau Serie, este necesară una dintre opţiunile Declaraţie, Pas proces sau Sursă de date.",ISO19139A1_ROW15:"Dacă este selectată opţiunea Disponibilitate puncte intermediare, este necesară opţiunea Descriere puncte intermediare.",ISO19139A1_ROW18:"Dacă Distribuţie este documentată, este necesar un Format sau un Distribuitor/Format.",INSPIRE_AccessLimitation:" Este necesar cel puţin un cod de restricţionare a accesului legal sau un cod de clasificare a securităţii. (INSPIRE)",INSPIRE_UseLimitation:" Este necesară cel puţin o limitare de utilizare. (INSPIRE)",INSPIRE_ConformanceResult:"Un raport Consecvenţă domeniu necesită un Rezultat conformitate. (INSPIRE)",INSPIRE_DomainConsistency:"Este necesar un raport Consecvenţă domeniu. (INSPIRE)",INSPIRE_LineageStatement:"Dacă Domeniu nu este Set de date sau Serie, este necesară o Declaraţie de descendenţă. (INSPIRE).",FGDC_DescIfTemporal:"Pentru o Extindere temporală este necesară o Descriere. (FGDC)",FGDC_Keywords:"Este necesar(ă) un Subiect, Etichetă sau Cuvânt cheie pentru temă. (FGDC)",FGDC_Reports:"Sunt necesare rapoarte privind Omiterea caracterului complet şi Consecvenţa conceptuală. (FGDC)",FGDC_Temporal:"Este obligatorie cel puţin o Extindere temporală. (FGDC)",NAP_Contact:"Este necesar(ă) o Adresă/un Punct de livrare, un număr de Telefon/Voce sau o Resursă online/un URL. (NAP)",GEN_BoundingBox:"Este necesară cel puţin o Casetă de legătură geografică.",GEN_ReportResult:"Este necesar un rezultat de Conformitate sau Cantitativ.",minLessThanMax:"Valoarea minimă trebuie să fie mai mică decât Valoarea maximă."},hints:{integerGreaterThanZero:"(introduceţi un număr întreg > 0)",integerGreaterThanOne:"(introduceţi un număr întreg > 1)",integer0To100:"(introduceţi un număr întreg 0..100)",maxScale:"(introduceţi un număr întreg > 0, de ex. 50000)",minScale:"(introduceţi un număr întreg > 0, de ex. 150000000)",number0To100:"(introduceţi un număr 0..100)",number0To360:"(introduceţi un număr 0..360)",number90To90:"(introduceţi un număr -90..90)",listOfDoubles:"(introduceţi o listă de numere, utilizaţi un spaţiu pentru separare)"},htmlEditor:{button:"Editare..."},sections:{overview:"Prezentare generală",esri:"Esri",resource:"Resursă",reference:"Referinţă",content:"Conţinut",distribution:"Distribuţie",quality:"Calitate",eainfo:"Câmpuri",representation:"Reprezentare",metadata:"Metadate"},metadataStyle:{caption:"Stil metadate ArcGIS",changeButton:"Modificare...",dialogTitle:"Alegere stil metadate",updating:"Se actualizează documentul...","Item Description":"Descriere element","FGDC CSDGM Metadata":"Metadate FGDC CSDGM","ISO 19139 Metadata Implementation Specification":"Specificaţie implementare metadate ISO 19139","ISO 19139 Metadata Implementation Specification GML3.2":"Specificaţie implementare metadate ISO 19139 GML3.2","INSPIRE Metadata Directive":"Directiva pentru metadate INSPIRE","North American Profile of ISO19115 2003":"Profilul nord-american al ISO19115 2003"},aggrInfo:{caption:"Însumare informaţii",datasetHint:"Este necesar un Identificator de set de date sau un Nume de set de date.",aggrDSIdent:"Identificator set de date",aggrDSName:"Nume set de date"},appSchInfo:{caption:"Schemă aplicaţie",asName:"Nume schemă",asSchLang:"Limbă schemă",asCstLang:"Limbă restricţie",asAscii:"ASCII",asGraFile:"Fişier grafică",asGraFile_src:"Sursă fişier grafică",asSwDevFile:"Fişier dezvoltare software",asSwDevFile_src:"Sursă fişier dezvoltare software",asSwDevFiFt:"Format fişier dezvoltare software"},citation:{caption:"Citaţie",section:{titlesAndDates:"Titluri şi date",links:"URL-uri",identifiers:"Identificatori",presentation:"Formular",other:"Altul",edition:"Ediţie",series:"Serie"},conditionalDate:{caption:"Data citaţiei",msg:"Este necesară una dintre opţiunile Data creării, Data publicării sau Data revizuirii.",msg_nap:"Este necesară o dată de citaţie."},resTitle:"Titlu",resAltTitle:"Titlu alternativ",resTitleForInspire:{bg:"Bulgară",cs:"Cehă",da:"Daneză",de:"Germană",el:"Greacă",en:"Engleză",es:"Spaniolă",et:"Estoniană",fi:"Finlandeză",fr:"Franceză",hr:"Croată",hu:"Maghiară",it:"Italiană",lt:"Lituaniană",lv:"Letonă",mt:"Malteză",nl:"Olandeză",pl:"Poloneză",pt:"Portugheză",ro:"Română",sk:"Slovacă",sl:"Slovenă",sv:"Suedeză"},collTitle:"Titlu colectiv",date:{createDate:"Data creării",pubDate:"Data publicării",reviseDate:"Data revizuirii",notavailDate:"Data indisponibilităţii",inforceDate:"Data intrării în vigoare",adoptDate:"Data adoptării",deprecDate:"Data perimării",supersDate:"Data înlocuirii"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identificator",identCode:"Cod",identAuth:"Citaţie autoritate"},resEd:"Ediţie",resEdDate:"Data ediţiei",datasetSeries:{seriesName:"Nume",issId:"Număr",artPage:"Pagina"},otherCitDet:"Alte detalii",contactCaption:"Contact citaţie"},cntAddress:{caption:"Adresă",delPoint:"Punct livrare",city:"Oraş",adminArea:"Zonă administrativă",postCode:"Cod poştal",country:"Ţară",eMailAdd:"Email",addressType:{caption:"Tip adresă",postal:"Cod poştal",physical:"Fizic",both:"Ambele"}},cntOnlineRes:{caption:"Resursă online",linkage:"URL",protocol:"Protocol",appProfile:"Profil aplicaţie",orName:"Nume",orDesc:"Descriere"},cntPhone:{caption:"Telefon",voiceNum:"Voce",faxNum:"Fax",tddtty:"TDD/TTY?"},codeRef:{caption:"Identificator",identCode:"Cod",idCodeSpace:"Spaţiu cod",idVersion:"Versiune",identAuth:"Citaţie autoritate"},constraints:{caption:"Restricţii",useLimit:"Limitare utilizare",general:{caption:"Generalităţi"},legal:{caption:"Informaţii juridice",accessConsts:"Restricţii de acces",useConsts:"Utilizare restricţii",othConsts:"Alte restricţii"},security:{caption:"Securitate",classSys:"Sistem de clasificare",userNote:"Notă utilizator",handDesc:"Descriere gestionare"}},contInfo:{caption:"Informaţii conţinut",section:{CovDesc:"Descriere acoperire",ImgDesc:"Descriere imagine",FetCatDesc:"Catalog de obiecte spaţiale"},attDesc:"Descriere atribut",covDim:{caption:"Interval sau bandă",seqID:"Identificator secvenţă",seqIDType:"Tip identificator secvenţă",dimDescrp:"Descriptor"},RangeDim:{caption:"Dimensiune interval"},Band:{caption:"Bandă",minVal:"Valoare minimă",maxVal:"Valoare maximă",valUnit:"Unităţi valoare",pkResp:"Răspuns de vârf",bitsPerVal:"Biţi pe valoare",toneGrad:"Gradaţie ton",sclFac:"Factor scară",offset:"Decalare"},CovDesc:{caption:"Descriere acoperire",section:{description:"Descriere",rangesAndBands:"Intervale şi benzi"}},ImgDesc:{caption:"Descriere imagine",section:{description:"Descriere",rangesAndBands:"Intervale şi benzi"},illElevAng:"Unghi elevaţie iluminare",illAziAng:"Unghi azimut iluminare",cloudCovPer:"Procentaj acoperire cloud",cmpGenQuan:"Calitate comprimare",trianInd:"Indicator triangulaţie?",radCalDatAv:"Disponibilitate date calibrare radiometrică?",camCalInAv:"Disponibilitate informaţii calibrare cameră?",filmDistInAv:"Disponibilitate informaţii distorsionări film?",lensDistInAv:"Disponibilitate informaţii distorsionări lentile?",imagQuCode:"Cod calitate",prcTypCde:"Cod nivel procesare"},FetCatDesc:{caption:"Catalog de obiecte spaţiale",section:{description:"Descriere",featureTypes:"Tipuri de obiecte spaţiale",citation:"Citaţie"},compCode:"Conform cu ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Citaţie catalog de obiecte spaţiale",catFetTyps:{caption:"Tip de obiect spaţial",genericName:"Nume",codeSpace:"Spaţiu cod"}}},contact:{caption:"Contact",section:{name:"Nume de contact",info:"Informaţii de contact",hoursAndInstructions:"Ore şi instrucţiuni"},conditionalName:{caption:"Nume de contact",msg:"Este necesară una dintre opţiunile Nume individual, Nume organizaţie sau Nume poziţie.",msg_fgdc:"Este necesară una dintre opţiunile Nume individual sau Nume organizaţie."},rpIndName:"Nume individual",rpOrgName:"Nume organizaţie",rpPosName:"Nume poziţie",rpCntInfo:"Informaţii de contact",cntHours:"Ore de serviciu",cntInstr:"Instrucţiuni de contact"},distInfo:{caption:"Informaţii distribuţie",section:{format:"Formatare",distributor:"Distribuitor",transfer:"Opţiuni transfer"},distFormat:{caption:"Format distribuţie",formatName:"Nume format",formatVer:"Versiune format",formatAmdNum:"Număr amendament",formatSpec:"Specificaţie",fileDecmTech:"Tehnică decomprimare",formatInfo:"Conţinut informaţii"},distributor:{caption:"Distribuitor"},distTranOps:{caption:"Opţiuni transfer digital",section:{unitsAndSize:"Unităţi"},unitsODist:"Unităţi de distribuţie",transSize:"Dimensiune transfer",offLineMed:{caption:"Mediu offline",medDensity:"Densitate",medDenUnits:"Unităţi densitate",medVol:"Volume",medNote:"Notă mediu"}},distorOrdPrc:{caption:"Proces comandare",resFees:"Onorarii",planAvDtTm:"Data disponibilităţii",planAvTmPd:{caption:"Perioadă dată disponibilitate",tmBegin:"Dată/oră început",tmEnd:"Dată/oră sfârşit"},ordInstr:"Instrucţiuni comandă",ordTurn:"Inversare"}},dqInfo:{caption:"Calitate dată",section:{scope:"Domeniu",report:"Raport",lineage:"Descendenţă"},dqScope:{section:{level:"Nivel",extent:"Extindere"},scpLvl:"Nivel domeniu",scpLvlDesc:"Descriere nivel",scpExt:"Extindere domeniu"},report:{section:{measure:"Măsurătoare",evaluation:"Evaluare",result:"Rezultat",conformance:"Conformitate"},measDesc:"Descriere măsură",measName:"Nume măsură",measDateTm:"Dată măsură",measId:"Identificator măsură",evalMethDesc:"Metodă evaluare",evalProc:"Citaţie procedură",ConResult:{caption:"Rezultat conformitate",conExpl:"Explicaţie",conSpec:"Specificaţie",conPass:{caption:"Grad",_1:"Conform",_0:"Neconform"}},QuanResult:{caption:"Rezultat cantitativ",quanVal:"Valoare",quanValType:"Tip valoare",quanValUnit:"Unităţi valoare",errStat:"Statistică erori"}},dataLineage:{section:{statement:"Declaraţie",dataSource:"Sursă date",prcStep:"Pas proces"},statement:"Declaraţie descendenţă",dataSource:{caption:"Sursă date",section:{description:"Descriere",srcRefSys:"Sistem referinţă",srcExt:"Extindere",srcCitatn:"Citaţie"},srcDesc:"Descriere sursă",srcScale:{rfDenom:"Numitor scară"},srcRefSys:"Sistem referinţă surse",srcExt:"Extindere sursă",srcCitatn:"Citaţie sursă"},prcStep:{caption:"Pas proces",section:{description:"Descriere",stepProc:"Procesor",stepSrc:"Sursă date"},stepDesc:"Descriere proces",stepRat:"Motiv",stepDateTm:"Dată pas proces",stepProc:"Procesor",stepSrc:"Sursă date"}}},eainfo:{caption:"Informaţii entitate şi atribut",section:{detailed:"Detalii",overview:"Prezentare generală"},detailed:{caption:"Detalii entitate şi atribut",section:{enttyp:"Entitate",attr:"Atribute"},enttyp:{caption:"Tip entitate",enttypl:"Etichetă",enttypt:"Object",enttypc:"Cont",enttypd:"Definiţie",enttypds:"Sursă definiţie"},attr:{caption:"Atribut",section:{description:"Descriere",value:"Valoare",domain:"Domeniu"},attrlabl:"Etichetă",attalias:"Pseudonim",attrdef:"Definiţie",attrdefs:"Sursă definiţie",attrtype:"Tip",attwidth:"Lăţime",atprecis:"Precizie",attscale:"Scară",atindex:"Indexat",attrvai:{attrva:"Explicaţie valoare",attrvae:"Precizie valoare"},attrmfrq:"Frecvenţă măsurare valoare",begdatea:"Date începere valori",enddatea:"Date sfârşit valori",attrdomv:{caption:"Domeniu",edom:{caption:"Enumerate",edomv:"Valoare",edomvd:"Definiţie",edomvds:"Sursă definiţie"},rdom:{caption:"Distanţă",rdommin:"Valoare minimă",rdommax:"Valoare maximă",rdommean:"Medie",rdomstdv:"Deviaţie standard",attrunit:"Unităţi",attrmres:"Rezolvare măsurare"},codesetd:{caption:"Set de coduri",codesetn:"Nume",codesets:"Sursă"},udom:{caption:"Nereprezentabil"}}}},overview:{caption:"Prezentare generală",eaover:"Rezumat",eadetcit:"Citaţie"}},extent:{caption:"Extindere",section:{description:"Descriere",geographic:"Geografic",temporal:"Temporal",vertical:"Vertical"},exDesc:"Descriere extindere",geoEle:{caption:"Setare extindere geografică",GeoBndBox:{caption:"Casetă de legătură",esriExtentType:"Extinderea este pentru căutare?",exTypeCode:"Extinderea conţine resursa?",westBL:"Longitudine legătură vest",eastBL:"Longitudine legătură est",southBL:"Latitudine legătură sud",northBL:"Latitudine legătură nord"},GeoDesc:{caption:"Descriere geografică",exTypeCode:"Descrierea conţine resursa?",identCode:"Cod"}},tempEle:{caption:"Extindere temporală",TM_Period:"Perioadă de timp",TM_Instant:"Time instantaneu",tmPosition:"Dată",tmBegin:"Dată început",tmEnd:"Data terminării"},vertEle:{caption:"Extindere verticală",vertMinVal:"Valoare minimă",vertMaxVal:"Valoare maximă"}},graphOver:{caption:"Grafic parcurgere",bgFileName:"URL grafic parcurgere",bgFileDesc:"Descriere grafic parcurgere",bgFileType:"Tip fişier grafic parcurgere"},keywords:{caption:"Keywords",section:{topicCategory:"Subiect",searchKeys:"Etichete",themeKeys:"Temă",placeKeys:"Loc",tempKeys:"Temporal",discKeys:"Disciplină",stratKeys:"Stratificare",productKeys:"Produs",subTopicCatKeys:"Subiect secundar",otherKeys:"Altul"},delimited:"Keywords",searchKeys:"Etichete",themeKeys:"Cuvinte cheie pentru temă",placeKeys:"Cuvinte cheie locuri",tempKeys:"Cuvinte cheie temporale",discKeys:"Cuvinte cheie disciplină",stratKeys:"Cuvinte cheie stratificare",productKeys:"Cuvinte cheie produse",subTopicCatKeys:"Cuvinte cheie subiecte secundare",otherKeys:"Alte cuvinte cheie",thesaName:"Citaţie dicţionar",thesaLang:"Limbă dicţionar",gemet:"Căutare"},locales:{caption:"Locaţii",locale:"Locaţie",resTitle:"Titlu",idAbs:"Rezumat"},maintenance:{caption:"Întreţinere",section:{frequency:"Frecvenţă",scope:"Domeniu",note:"Notă"},usrDefFreq:"Frecvenţă personalizată",dateNext:"Următoarea actualizare",maintScp:"Actualizare domeniu",upScpDesc:{caption:"Descriere domeniu",attribSet:"Atribute",attribIntSet:"Instanţe atribute",featSet:"Caracteristici",featIntSet:"Instanţe obiecte spaţiale",datasetSet:"Set de date",other:"Alte instanţe"},maintNote:"Notă întreţinere",maintCont:"Contact întreţinere"},metadata:{section:{profile:"Profil",details:"Domeniu"},mdFileID:"Identificator fişier",mdParentID:"Identificator părinte",datasetURI:"URI set de date",dataSetFn:"Funcţie set de date",mdDateSt:"Dată metadate",mdTimeSt:"Ora Metadate",mdLang:"Limbă metadate",mdChar:"Set de caractere",mdHrLv:"Nivel ierarhic",mdHrLvName:"Nume nivel ierarhic",mdContact:"Contact metadate",mdMaint:"Întreţinere metadate",mdConst:"Restricţii metadate"},porCatInfo:{caption:"Citaţie descriere"},refSysInfo:{caption:"Referinţă spaţială"},resource:{section:{citation:"Citaţie",details:"Detalii",description:"Descriere",keywords:"Keywords",status:"Stare",resolution:"Rezolvare",representation:"Reprezentare",browse:"Grafic parcurgere",format:"Formatare",usage:"Utilizare",aggregateInfo:"Însumare",additional:"Suplimentar"},idAbs:"Descriere (abstractă)",idPurp:"Rezumat (scop)",suppInfo:"Informaţii suplimentare",idCredit:"Credite",envirDesc:"Mediu de procesare",dataLang:"Limbă resurse",dataExt:"Extindere resurse",idPoC:"Punct de contact",resMaint:"Întreţinere resurse",resConst:"Restricţii resurse",dsFormat:"Format resurse",dataScale:{caption:"Scară date",equScale:"Rezoluţie scară",scaleDist:"Rezoluţie distanţă",scaleDist_value:"Distanţă"},idSpecUse:{caption:"Utilizare resurse",specUsage:"Utilizare specifică",usageDate:"Dată utilizare",usrDetLim:"Limitări",usrCntInfo:"Contact utilizare"}},service:{caption:"Serviciu",svType:"Tip serviciu",svType_Name:"Nume",svAccProps:"Proprietăţi acces",svCouplRes:{caption:"Resursă cuplată",svOpName:"Nume operaţiune",svResCitId:"Identificator resursă"},svCoupleType:"Tip cuplare"},scaleRange:{caption:"Interval scară",maxScale:"Scară maximă",minScale:"Scară minimă"},spatRepInfo:{caption:"Reprezentare spaţială",section:{dimension:"Dimensiune",parameters:"Parametri"},numDims:"Număr de dimensiuni",tranParaAv:"Disponibilitate parametru transformare?",axisDimension:{caption:"Dimensiune",dimSize:"Dimensiune",dimResol:{caption:"Rezolvare",_value:"Valoare rezoluţie",uom:"Unităţi rezoluţie"}},VectSpatRep:{caption:"Vector",geometObjs:"Obiecte geometrice",geoObjCnt:"Număr obiecte"},GridSpatRep:{caption:"Grilă"},Georect:{caption:"Georectificat",section:{centerPoint:"Punct central",cornerPts:"Puncte colţ"},chkPtAv:"Disponibilitate puncte intermediare?",chkPtDesc:"Descriere puncte intermediare",ptInPixel:"Punct în pixel",transDimDesc:"Descriere dimensiune transformare",transDimMap:"Cartografiere dimensiune transformare",cornerPts:{caption:"Punct colţ",pos:"Poziţie",gmlDesc:"Descriere",gmlDescRef:"Referinţă",gmlIdent:"Identificator",codeSpace:"Spaţiu cod identificator"}},Georef:{caption:"Georeferenţiabil",ctrlPtAv:"Disponibilitate puncte de control?",orieParaAv:"Disponibilitate parametru orientare?",orieParaDs:"Descriere parametru orientare",georefPars:"Parametri georeferenţiaţi",paraCit:"Citaţie parametri"},Indref:{caption:"Indirect"}},booleanOptions:{_false:"Nu",_true:"Da"},codelist:{CountryCode:"Ţară",LanguageCode:"Limbă",MonetaryUnits:"Unităţi monetare",MonetaryUnits_empty:"Nicio monedă universală",PresentationForm:"Formular reprezentare spaţială date geospaţiale FGDC",CI_PresentationFormCode:"Formular prezentare",CI_RoleCode:"Rol",CI_OnLineFunctionCode:"Funcţie",IMS_ContentType:"Tip conţinut",DQ_ElementDimension:"Dimensiune",DQ_ElementType:"Tip raport",DQ_EvaluationMethodTypeCode:"Tip evaluare",DS_AssociationTypeCode:"Tip asociaţie",DS_InitiativeTypeCode:"Tip iniţiativă",LI_SourceType:"Tip sursă",MD_CellGeometryCode:"Geometrie celulă",MD_CharacterSetCode:"Set de caractere",MD_ClassificationCode:"Clasificare",MD_CoverageContentTypeCode:"Tip conţinut",MD_DimensionNameTypeCode:"Tip dimensiune",MD_GeometricObjectTypeCode:"Tip obiect geometric",MD_ImagingConditionCode:"Condiţie imagini",MD_MaintenanceFrequenceCode:"Frecvenţă actualizare",MD_MediumFormatCode:"Cod format",MD_MediumNameCode:"Nume mediu",MD_PixelOrientationCode:"Orientare pixeli",MD_ProgressCode:"Stare",MD_RestrictionCode:"Cod restricţie",MD_ScopeCode:"Domeniu",MD_SpatialRepresentationTypeCode:"Tip reprezentare spaţială",MD_TopicCategoryCode:"Categorie de subiecte",MD_TopologyLevelCode:"Nivel topologie",RS_Dimension:"Dimensiune",SV_CouplingType:"Tip cuplare",UCUM:"Unităţi",UCUM_Length:"Unităţi distanţă",RS_UseLimitations:"Limitări de utilizare",RS_AccessConstraints:"Restricţii de acces"}});