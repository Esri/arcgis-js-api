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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define({documentTypes:{arcgis:{caption:"ArcGIS-metadata",editorCaption:"Metadata",description:""}},emptyOption:"Tom",conditionals:{ISO19139A1_ROW4:"Om hierarkinivån för metadata är Dataset måste en geografisk begränsningsruta eller geografisk beskrivning anges.",ISO19139A1_ROW6:"Ett dataset-ID eller datasetsnamn måste anges.",ISO19139A1_ROW7:"Om Andra begränsningar har valts måste Andra avgränsningar anges.",ISO19139A1_ROW9:"Om Omfång inte är Dataset eller Serie måste en nivåbeskrivning anges.",ISO19139A1_ROW10_11_12:"Om Omfång är Dataset eller Serie måste ett av Påstående, Processteg eller Datakälla anges.",ISO19139A1_ROW15:"Om Kontrollpunktens tillgänglighet har valt måste Beskrivning av kontrollpunkt anges.",ISO19139A1_ROW18:"Om Distribution är dokumenterad måste Format eller Distributör/Format anges.",INSPIRE_AccessLimitation:" Minst en juridisk åtkomstbegränsningskod eller säkerhetsklassificeringskod måste anges. (INSPIRE)",INSPIRE_UseLimitation:" Minst en användningsbegränsning måste anges. (INSPIRE)",INSPIRE_ConformanceResult:"En rapport över värdemängdslikformighet kräver ett konformansresultat. (INSPIRE)",INSPIRE_DomainConsistency:"En rapport över värdemängdslikformighet måste anges. (INSPIRE)",INSPIRE_LineageStatement:"Om Omfång är Dataset eller Serie måste ett härkomstuttryck anges. (INSPIRE).",FGDC_DescIfTemporal:"En beskrivning måste anges för en tidsbestämd utbredning. (FGDC)",FGDC_Keywords:"En tagg, ett ämne eller ett nyckelordstema måste anges. (FGDC)",FGDC_Reports:"Rapporter om fullständighetsbrist och begreppslikformighet måste anges. (FGDC)",FGDC_Temporal:"Minst en tidsbestämd utbredning måste anges. (INSPIRE)",NAP_Contact:"En adress/leveransplats, ett telefonnummer eller en internetresurs/URL måste anges. (NAP)",GEN_BoundingBox:"Minst en geografisk begränsningsruta måste anges.",GEN_ReportResult:"Ett konformansresultat eller ett kvantitativt resultat måste anges.",minLessThanMax:"Det minsta värdet måste vara mindre än det högsta värdet."},hints:{integerGreaterThanZero:"(ange ett heltal > 0)",integerGreaterThanOne:"(ange ett heltal > 1)",integer0To100:"(ange ett heltal 0..100)",maxScale:"(ange ett heltal > 0, t.ex. 50000)",minScale:"(ange ett heltal > 0, t.ex. 150000000)",number0To100:"(ange ett tal 0..100)",number0To360:"(ange ett tal 0..360)",number90To90:"(ange ett tal -90..90)",listOfDoubles:"(ange en lista över tal, avgränsa dem med blanksteg)"},htmlEditor:{button:"Redigera..."},sections:{overview:"Översikt",esri:"Esri",resource:"Resurs",reference:"Referenser",content:"Innehåll",distribution:"Distribution",quality:"Kvalitet",eainfo:"Fält",representation:"Representation",metadata:"Metadata"},metadataStyle:{caption:"ArcGIS-metadatastil",changeButton:"Byt...",dialogTitle:"Välj en metadatastil",updating:"Uppdaterar dokument...","Item Description":"Objektbeskrivning","FGDC CSDGM Metadata":"FGDC CSDGM-metadata","ISO 19139 Metadata Implementation Specification":"Implementeringsspecifikation för ISO 19139-metadata","ISO 19139 Metadata Implementation Specification GML3.2":"Implementeringsspecifikation för ISO 19139-metadata GML3.2","INSPIRE Metadata Directive":"INSPIRE-metadatadirektiv","North American Profile of ISO19115 2003":"Nordamerikansk profil för ISO19115 2003"},aggrInfo:{caption:"Aggregatinformation",datasetHint:"Ett dataset-ID eller datasetsnamn krävs.",aggrDSIdent:"Dataset-ID",aggrDSName:"Datauppsättningens namn"},appSchInfo:{caption:"Programschema",asName:"Schemanamn",asSchLang:"Schemaspråk",asCstLang:"Begränsningsspråk",asAscii:"ASCII",asGraFile:"Grafikfil",asGraFile_src:"Filkälla för bilder",asSwDevFile:"Programutvecklingsfil",asSwDevFile_src:"Filkälla för programutveckling",asSwDevFiFt:"Filformat för programutveckling"},citation:{caption:"Omnämnande",section:{titlesAndDates:"Titlar och datum",links:"webbadresser",identifiers:"Identifierare",presentation:"Form",other:"Annat",edition:"Utgåva",series:"Serier"},conditionalDate:{caption:"Omnämnandedatum",msg:"Något av skapelsedatum, publiceringsdatum eller revisionsdatum måste anges.",msg_nap:"Ett omnämnandedatum måste anges."},resTitle:"Titel",resAltTitle:"Alternativ titel",resTitleForInspire:{bg:"Bulgariska",cs:"Tjeckiska",da:"Danska",de:"Tyska",el:"Grekiska",en:"Engelska",es:"Spanska",et:"Estniska",fi:"Finska",fr:"Franska",hr:"Kroatiska",hu:"Ungerska",it:"Italienska",lt:"Litauiska",lv:"Lettiska",mt:"Maltesiska",nl:"Nederländska",pl:"Polska",pt:"Portugisiska",ro:"Rumänska",sk:"Slovakiska",sl:"Slovenska",sv:"Svenska"},collTitle:"Samlingstitel",date:{createDate:"Skapad den",pubDate:"Publiceringsdatum",reviseDate:"Revisionsdatum",notavailDate:"Inget tillgängligt datum",inforceDate:"Giltighetsdatum",adoptDate:"Datum för antagning",deprecDate:"Inaktuellt datum",supersDate:"Datum för ersättning"},isbn:"ISBN",issn:"ISSN",citId:{caption:"ID:n",identCode:"Kod",identAuth:"Auktoritetsomnämnande"},resEd:"Utgåva",resEdDate:"Utgåvans datum",datasetSeries:{seriesName:"Namn",issId:"Utgåva",artPage:"Sida"},otherCitDet:"Övriga uppgifter",contactCaption:"Kontaktpersoner för omnämnanden"},cntAddress:{caption:"Adress",delPoint:"Leveransplats",city:"Stad",adminArea:"Förvaltningsområde",postCode:"Postnummer",country:"Land",eMailAdd:"E-post",addressType:{caption:"Adresstyp",postal:"Postnummer",physical:"Fysiskt",both:"Båda"}},cntOnlineRes:{caption:"Internetresurs",linkage:"URL",protocol:"Protokoll",appProfile:"Programprofil",orName:"Namn",orDesc:"Beskrivning"},cntPhone:{caption:"Telefon",voiceNum:"Samtal",faxNum:"Fax",tddtty:"Texttelefon?"},codeRef:{caption:"ID:n",identCode:"Kod",idCodeSpace:"Kodrymd",idVersion:"Version",identAuth:"Auktoritetsomnämnande"},constraints:{caption:"Begränsningar",useLimit:"Användningsbegränsning",general:{caption:"Allmänt"},legal:{caption:"Juridisk information",accessConsts:"Åtkomstbegränsningar",useConsts:"Användningsbegränsningar",othConsts:"Andra begränsningar"},security:{caption:"Säkerhet",classSys:"Klassificeringssystem",userNote:"Juridiska begränsningar",handDesc:"Hanteringsbeskrivning"}},contInfo:{caption:"Innehållsinformation",section:{CovDesc:"Beskrivning av coverage",ImgDesc:"Bildbeskrivning",FetCatDesc:"Geoobjektskatalog"},attDesc:"Attributbeskrivning",covDim:{caption:"Intervall eller band",seqID:"Sekvensidentifierare",seqIDType:"Typ av sekvensidentifierare",dimDescrp:"Beskrivare"},RangeDim:{caption:"Intervallmått"},Band:{caption:"Band",minVal:"Minsta värde",maxVal:"Maximalt värde",valUnit:"Värdeenheter",pkResp:"Topprespons",bitsPerVal:"Bitar per värde",toneGrad:"Nyansgradering",sclFac:"Skalfaktor",offset:"Förskjutning"},CovDesc:{caption:"Beskrivning av coverage",section:{description:"Beskrivning",rangesAndBands:"Intervall och band"}},ImgDesc:{caption:"Bildbeskrivning",section:{description:"Beskrivning",rangesAndBands:"Intervall och band"},illElevAng:"Höjdvinkel för belysning",illAziAng:"Azimutvinkel för belysning",cloudCovPer:"Molntäcke i procent",cmpGenQuan:"Komprimeringskvalitet",trianInd:"Trianguleringsindikator?",radCalDatAv:"Tillgänglighet för radiometriska kalibreringsdata?",camCalInAv:"Tillgänglighet för information om kamerakalibrering?",filmDistInAv:"Tillgänglighet för information om filmförvrängning?",lensDistInAv:"Tillgänglighet för information om linsförvrängning?",imagQuCode:"Kvalitetskod",prcTypCde:"Kod för bearbetningsnivå"},FetCatDesc:{caption:"Geoobjektskatalog",section:{description:"Beskrivning",featureTypes:"Geoobjektstyper",citation:"Omnämnande"},compCode:"Följer ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Omnämnande av geoobjektskatalog",catFetTyps:{caption:"Geoobjektstyp",genericName:"Namn",codeSpace:"Kodrymd"}}},contact:{caption:"Kontaktperson",section:{name:"Kontaktpersonens namn",info:"Kontaktinformation",hoursAndInstructions:"Tider och anvisningar"},conditionalName:{caption:"Kontaktpersonens namn",msg:"Något av personnamn, organisationsnamn eller positionsnamn måste anges.",msg_fgdc:"Något av personnamn eller organisationsnamn måste anges."},rpIndName:"Personnamn",rpOrgName:"Organisationsnamn",rpPosName:"Positionsnamn",rpCntInfo:"Kontaktinformation",cntHours:"Öppettider",cntInstr:"Anvisningar för kontaktperson"},distInfo:{caption:"Distributionsinformation",section:{format:"Format",distributor:"Distributör",transfer:"Alternativ för överföring"},distFormat:{caption:"Distributionsformat",formatName:"Namn på format",formatVer:"Formatversion",formatAmdNum:"Formatändringsnummer",formatSpec:"Specificering",fileDecmTech:"Dekomprimeringsteknik",formatInfo:"Innehåll i informationen"},distributor:{caption:"Distributör"},distTranOps:{caption:"Alternativ för digital överföring",section:{unitsAndSize:"Enheter"},unitsODist:"Distributionsenheter",transSize:"Överföringsstorlek",offLineMed:{caption:"Offlinemedium",medDensity:"Densitet",medDenUnits:"Enheter för täthet",medVol:"Enheter",medNote:"Mellananteckning"}},distorOrdPrc:{caption:"Beställningsrutin",resFees:"Avgifter",planAvDtTm:"Tillgängligt datum",planAvTmPd:{caption:"Tillgänglig datumperiod",tmBegin:"Startdatum/klockslag",tmEnd:"Slutdatum/klockslag"},ordInstr:"Beställningsanvisningar",ordTurn:"Expediering"}},dqInfo:{caption:"Datakvalitet",section:{scope:"Omfång",report:"Rapport",lineage:"Lineage"},dqScope:{section:{level:"Nivå",extent:"Utbredning"},scpLvl:"Omfångsnivå",scpLvlDesc:"Nivåbeskrivning",scpExt:"Omfångsutbredning"},report:{section:{measure:"Mät",evaluation:"Utvärdering",result:"Resultat",conformance:"Konformans"},measDesc:"Beskrivning av mått",measName:"Måttnamn",measDateTm:"Måttdatum",measId:"Måttidentifierare",evalMethDesc:"Utvärderingsmetod",evalProc:"Proceduromnämnande",ConResult:{caption:"Konformansresultat",conExpl:"Förklaring",conSpec:"Specificering",conPass:{caption:"Grad",_1:"Uppfyllande",_0:"Icke uppfyllande"}},QuanResult:{caption:"Kvantitativt resultat",quanVal:"Värde",quanValType:"Värdetyp",quanValUnit:"Värdeenheter",errStat:"Felstatistik"}},dataLineage:{section:{statement:"Påstående",dataSource:"Datakälla",prcStep:"Processteg"},statement:"Härkomstuttryck",dataSource:{caption:"Datakälla",section:{description:"Beskrivning",srcRefSys:"Referenssystem",srcExt:"Utbredning",srcCitatn:"Omnämnande"},srcDesc:"Källbeskrivning",srcScale:{rfDenom:"Skalningsnämnare"},srcRefSys:"Källreferenssystem",srcExt:"Källutbredning",srcCitatn:"Källomnämnande"},prcStep:{caption:"Processteg",section:{description:"Beskrivning",stepProc:"Processor",stepSrc:"Datakälla"},stepDesc:"Processbeskrivning",stepRat:"Förklaring",stepDateTm:"Processtegsdatum",stepProc:"Processor",stepSrc:"Datakälla"}}},eainfo:{caption:"Information om enhet och attribut",section:{detailed:"Detaljer",overview:"Översikt"},detailed:{caption:"Information om enhet och attribut",section:{enttyp:"Enhet",attr:"Attribut"},enttyp:{caption:"Enhetstyp",enttypl:"Etikett",enttypt:"Objekt",enttypc:"Antal",enttypd:"Definition",enttypds:"Definitionskälla"},attr:{caption:"Attribut",section:{description:"Beskrivning",value:"Värde",domain:"Värdemängd"},attrlabl:"Etikett",attalias:"Alias",attrdef:"Definition",attrdefs:"Definitionskälla",attrtype:"Typ",attwidth:"Bredd",atprecis:"Precision",attscale:"Skala",atindex:"Indexerat",attrvai:{attrva:"Värdeförklaring",attrvae:"Värdets noggrannhet"},attrmfrq:"Värdemåttsfrekvens",begdatea:"Startdatum för värden",enddatea:"Slutdatum för värden",attrdomv:{caption:"Värdemängd",edom:{caption:"Uppräknad",edomv:"Värde",edomvd:"Definition",edomvds:"Definitionskälla"},rdom:{caption:"Intervall",rdommin:"Minsta värde",rdommax:"Maximalt värde",rdommean:"Medelvärde",rdomstdv:"Standardavvikelse",attrunit:"Enheter",attrmres:"Mätningsupplösning"},codesetd:{caption:"Koduppsättning",codesetn:"Namn",codesets:"Källa"},udom:{caption:"Icke representerbar"}}}},overview:{caption:"Översikt",eaover:"Sammanfattning",eadetcit:"Omnämnande"}},extent:{caption:"Utbredning",section:{description:"Beskrivning",geographic:"Geografiska",temporal:"Tidsbestämning",vertical:"Vertikal"},exDesc:"Beskrivning av utbredning",geoEle:{caption:"Geografisk utbredning",GeoBndBox:{caption:"Begränsningsruta",esriExtentType:"Är utbredningen för sökning?",exTypeCode:"Innehåller utbredningen resursen?",westBL:"Begränsningslongitud väst",eastBL:"Begränsningslongitud öst",southBL:"Begränsningslatitud syd",northBL:"Begränsningslatitud nord"},GeoDesc:{caption:"Geografisk beskrivning",exTypeCode:"Innehåller beskrivningen resursen?",identCode:"Kod"}},tempEle:{caption:"Tidsbestämd utbredning",TM_Period:"Tidsperiod",TM_Instant:"Tidpunkt",tmPosition:"Datum",tmBegin:"Startdatum",tmEnd:"Slutdatum"},vertEle:{caption:"Vertikal utbredning",vertMinVal:"Minsta värde",vertMaxVal:"Maximalt värde"}},graphOver:{caption:"Bläddringsgrafik",bgFileName:"Bläddringsgrafik-URL",bgFileDesc:"Beskrivning av bläddringsgrafik",bgFileType:"Bläddringsgrafikens typ"},keywords:{caption:"Nyckelord",section:{topicCategory:"Ämne",searchKeys:"Etiketter",themeKeys:"Tema",placeKeys:"Plats",tempKeys:"Tidsbestämning",discKeys:"Verksamhet",stratKeys:"Stratum",productKeys:"Produkt",subTopicCatKeys:"Underämne",otherKeys:"Annat"},delimited:"Nyckelord",searchKeys:"Etiketter",themeKeys:"Temanyckelord",placeKeys:"Platsnyckelord",tempKeys:"Nyckelord för tidsbestämning",discKeys:"Verksamhetsnyckelord",stratKeys:"Nyckelord för skikt",productKeys:"Produktnyckelord",subTopicCatKeys:"Nyckelavsnitt för underavsnitt",otherKeys:"Andra nyckelord",thesaName:"Omnämnande för synonymordlista",thesaLang:"Språk för synonymordlista",gemet:"Sök"},locales:{caption:"Språkversioner",locale:"Språkversion",resTitle:"Titel",idAbs:"Sammanfattning"},maintenance:{caption:"Underhåll",section:{frequency:"Frekvens",scope:"Omfång",note:"Meddelande"},usrDefFreq:"Anpassad frekvens",dateNext:"Nästa uppdatering",maintScp:"Uppdateringsomfång",upScpDesc:{caption:"Beskrivning av omfång",attribSet:"Attribut",attribIntSet:"Attributinstanser",featSet:"Geoobjekt",featIntSet:"Geoobjektsinstanser",datasetSet:"Datauppsättning",other:"Andra instanser"},maintNote:"Andra underhållskrav",maintCont:"Underhållskontakt"},metadata:{section:{profile:"Profil",details:"Omfång"},mdFileID:"Fil-ID",mdParentID:"ID för överordnat objekt",datasetURI:"Datasetets URI",dataSetFn:"Datasetets funktion",mdDateSt:"Metadatadatum",mdTimeSt:"Metadatatid",mdLang:"Metadataspråk",mdChar:"Teckenuppsättning",mdHrLv:"Hierarkinivå",mdHrLvName:"Hierarkinivåns namn",mdContact:"Kontaktperson för metadata",mdMaint:"Underhåll av metadata",mdConst:"Metadatabegränsningar"},porCatInfo:{caption:"Porträttomnämnande"},refSysInfo:{caption:"Geografisk referens"},resource:{section:{citation:"Omnämnande",details:"Detaljer",description:"Beskrivning",keywords:"Nyckelord",status:"Status",resolution:"Upplösning",representation:"Representation",browse:"Bläddringsgrafik",format:"Format",usage:"Användning",aggregateInfo:"Aggregering",additional:"Ytterligare"},idAbs:"Beskrivning (sammandrag)",idPurp:"Sammanfattning (syfte)",suppInfo:"Ytterligare information",idCredit:"Krediter",envirDesc:"Bearbetningsmiljö",dataLang:"Resursspråk",dataExt:"Resursutbredning",idPoC:"Kontaktpunkt",resMaint:"Resursunderhåll",resConst:"Resursbegränsningar",dsFormat:"Resursformat",dataScale:{caption:"Dataskala",equScale:"Skalupplösning",scaleDist:"Avståndsupplösning",scaleDist_value:"Avstånd"},idSpecUse:{caption:"Resursanvändning",specUsage:"Specifik användning",usageDate:"Användningsdatum",usrDetLim:"Begränsningar",usrCntInfo:"Användningskontakt"}},service:{caption:"Tjänst",svType:"Typ av tjänst",svType_Name:"Namn",svAccProps:"Åtkomstegenskaper",svCouplRes:{caption:"Kopplad resurs",svOpName:"Åtgärdsnamn",svResCitId:"Resurs-ID"},svCoupleType:"Kopplingstyp"},scaleRange:{caption:"Skalintervall",maxScale:"Maximal skala",minScale:"Minimal skala"},spatRepInfo:{caption:"Geografisk representation",section:{dimension:"Mått",parameters:"Parametrar"},numDims:"Antal mått",tranParaAv:"Transformationsparameterns tillgänglighet?",axisDimension:{caption:"Mått",dimSize:"Storlek",dimResol:{caption:"Upplösning",_value:"Upplösningsvärde",uom:"Upplösningsenheter"}},VectSpatRep:{caption:"Vektor",geometObjs:"Geometriska objekt",geoObjCnt:"Antal objekt"},GridSpatRep:{caption:"Rutnät"},Georect:{caption:"Georektifierat",section:{centerPoint:"Mittpunkt",cornerPts:"Hörnpunkter"},chkPtAv:"Kontrollpunktens tillgänglighet?",chkPtDesc:"Beskrivning av kontrollpunkt",ptInPixel:"Punkt i pixel",transDimDesc:"Beskrivning av transformationsmått",transDimMap:"Mappning av transformationsmått",cornerPts:{caption:"Hörnpunkt",pos:"Position",gmlDesc:"Beskrivning",gmlDescRef:"Referenser",gmlIdent:"ID:n",codeSpace:"Identifierarens kodrymd"}},Georef:{caption:"Georefererbart",ctrlPtAv:"Kontrollpunktens tillgänglighet?",orieParaAv:"Riktningsparameterns tillgänglighet?",orieParaDs:"Beskrivning av riktningsparameter",georefPars:"Georeferensparametrar",paraCit:"Parameteromnämnande"},Indref:{caption:"Indirekt"}},booleanOptions:{_false:"Nej",_true:"Ja"},codelist:{CountryCode:"Land",LanguageCode:"Språk",MonetaryUnits:"Valutaenheter",MonetaryUnits_empty:"Ingen universell valuta",PresentationForm:"FDGC-formulär för geografisk datapresentation",CI_PresentationFormCode:"Presentationsformulär",CI_RoleCode:"Roll",CI_OnLineFunctionCode:"Funktion",IMS_ContentType:"Innehållstyp",DQ_ElementDimension:"Mått",DQ_ElementType:"Rapporttyp",DQ_EvaluationMethodTypeCode:"Utvärderingstyp",DS_AssociationTypeCode:"Associationstyp",DS_InitiativeTypeCode:"Initiativtyp",LI_SourceType:"Typ av datakälla",MD_CellGeometryCode:"Cellgeometri",MD_CharacterSetCode:"Teckenuppsättning",MD_ClassificationCode:"Klassificering",MD_CoverageContentTypeCode:"Innehållstyp",MD_DimensionNameTypeCode:"Måttyp",MD_GeometricObjectTypeCode:"Geometrisk objekttyp",MD_ImagingConditionCode:"Bildvillkor",MD_MaintenanceFrequenceCode:"Uppdateringsfrekvens",MD_MediumFormatCode:"Formatkod",MD_MediumNameCode:"Medienamn",MD_PixelOrientationCode:"Pixelriktning",MD_ProgressCode:"Status",MD_RestrictionCode:"Begränsningskod",MD_ScopeCode:"Omfång",MD_SpatialRepresentationTypeCode:"Geografisk representationstyp",MD_TopicCategoryCode:"Ämneskategori",MD_TopologyLevelCode:"Topologinivå",RS_Dimension:"Mått",SV_CouplingType:"Kopplingstyp",UCUM:"Enheter",UCUM_Length:"Distansenheter",RS_UseLimitations:"Användningsbegränsningar",RS_AccessConstraints:"Åtkomstbegränsningar"}});