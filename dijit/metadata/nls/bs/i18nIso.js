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

define({documentTypes:{data:{caption:"ISO 19115 (Podaci)",description:""},service:{caption:"ISO 19119 (Usluga)",description:""},gmi:{caption:"ISO 19115-2 (Snimke i mrežni podaci)",description:""}},general:{reference:"Referenca"},sections:{metadata:"Metapodaci",identification:"Identifikacija",distribution:"Distribucija",quality:"Kvaliteta",acquisition:"Nabava"},metadataSection:{identifier:"Identifikator",contact:"Kontakt",date:"Datum",standard:"Standardno",reference:"Referenca"},identificationSection:{citation:"Navod",description:"Opis",contact:"Kontakt",thumbnail:"Sličica",keywords:"Ključne riječi",constraints:"Ograničenja",resource:"Resurs",resourceTab:{representation:"Predstavljanje",language:"Jezik",classification:"Klasifikacija",extent:"Obuhvat"},serviceResourceTab:{serviceType:"Vrsta usluge",extent:"Obuhvat",couplingType:"Vrsta spajanja",operation:"Radnja",operatesOn:"Radi na"}},distributionSection:{},qualitySection:{scope:"Opseg",conformance:"Usklađenost",lineage:"Podrijetlo"},acquisitionSection:{requirement:"Zahtjev",objective:"Cilj",instrument:"Instrument",plan:"Plan",operation:"Radnja",platform:"Platforma",environment:"Okoliš"},AbstractMD_Identification:{sAbstract:"Sažetak",purpose:"Svrha",credit:"Krediti",pointOfContact:"Točka za kontakt",resourceMaintenance:"Održavanje",graphicOverview:"Grafički pregled",descriptiveKeywords:"Zbirka ključnih riječi",resourceConstraints:"Ograničenja"},CI_Address:{deliveryPoint:"Točka isporuke",city:"Grad",administrativeArea:"Administrativno područje",postalCode:"Poštanski broj",country:"Zemlja",electronicMailAddress:"Adresa e-pošte"},CI_Citation:{title:"Naslov",alternateTitle:"Alternativni naslov",identifier:"Jedinstveni identifikator resursa",resource:{title:"Naslov resursa",date:"Datum resursa"},specification:{title:"Naslov specifikacija",date:"Datum specifikacija"}},CI_Contact:{phone:"Telefon",address:"Adresa",onlineResource:"Resurs na mreži",hoursOfService:"Sati usluge",contactInstructions:"Upute za kontaktiranje"},CI_Date:{date:"Datum",dateType:"Vrsta datuma"},CI_DateTypeCode:{caption:"Vrsta datuma",creation:"Datum stvaranja",publication:"Datum objave",revision:"Datum revizije"},CI_OnLineFunctionCode:{caption:"Funkcija",download:"Preuzmi",information:"Informacije",offlineAccess:"Izvanmrežni pristup",order:"Redoslijed",search:"Pretraži"},CI_OnlineResource:{caption:"Resurs na mreži",linkage:"URL",protocol:"Protokol",applicationProfile:"Profil aplikacije",name:"Naziv",description:"Opis",sFunction:"Funkcija"},CI_ResponsibleParty:{caption:"Točka za kontakt",individualName:"Naziv pojedinca",organisationName:"Naziv organizacije",positionName:"Naziv položaja",contactInfo:"Kontaktni podaci",role:"Uloga"},CI_RoleCode:{caption:"Uloga",resourceProvider:"Davatelj resursa",custodian:"Čuvar",owner:"Vlasnik",user:"Korisnik",distributor:"Distributer",originator:"Izvorište",pointOfContact:"Točka za kontakt",principalInvestigator:"Glavni istraživač",processor:"Procesor",publisher:"Objavljivač",author:"Autor"},CI_Telephone:{voice:"Glas",facsimile:"Faks"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Web-usluge"},DQ_ConformanceResult:{caption:"Rezultat usklađenosti",explanation:"Objašnjenje",degree:{caption:"Stupanj",validationPerformed:"Izvršena provjera valjanosti",conformant:"Usklađeno",nonConformant:"Nije usklađeno"}},DQ_DataQuality:{report:"Izvješće"},DQ_Scope:{level:"Opseg (kvalitetni podaci primjenjuju se na)",levelDescription:"Opis razine"},EX_Extent:{caption:"Obuhvat",description:"Opis",geographicElement:"Prostorni obuhvat",temporalElement:"Vremenski obuhvat",verticalElement:"Visinski obuhvat"},EX_GeographicBoundingBox:{westBoundLongitude:"Zapadna geografska dužina",eastBoundLongitude:"Istočna geografska dužina",southBoundLatitude:"Južna geografska širina",northBoundLatitude:"Sjeverna geografska širina"},EX_GeographicDescription:{caption:"Geografski opis"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Datum početka",endPosition:"Datum kraja"}},EX_VerticalExtent:{minimumValue:"Minimalna vrijednost",maximumValue:"Maksimalna vrijednost",verticalCRS:"Visinski CRS"},Length:{caption:"Duljina",uom:"Mjerne jedinice",km:"Kilometri",m:"Metri",mi:"Milje",ft:"Stope"},LI_Lineage:{statement:"Izjava o podrijetlu"},MD_BrowseGraphic:{fileName:"Pregledaj URL grafike",fileDescription:"Pregledaj grafički natpis",fileType:"Pregledaj vrstu grafike"},MD_ClassificationCode:{unclassified:"Neklasificirano",restricted:"Ograničeno",confidential:"Povjerljivo",secret:"Tajno",topSecret:"Strogo povjerljivo"},MD_Constraints:{caption:"Ograničenja korištenja",useLimitation:"Ograničenje upotrebe"},MD_DataIdentification:{spatialRepresentationType:"Vrsta prostornog predstavljanja",spatialResolution:"Prostorna razlučivost",language:"Jezik resursa",supplementalInformation:"Dopunsko"},MD_DigitalTransferOptions:{onLine:"Na mreži"},MD_Distribution:{distributionFormat:"Format distribucije",transferOptions:"Opcije prijenosa"},MD_Format:{name:"Naziv formata",version:"Verzija formata"},MD_Identifier:{caption:"URI",identifierCaption:"Identifikator",code:"Kod"},MD_Keywords:{delimitedCaption:"Ključne riječi",thesaurusName:"Povezani rječnik sinonima"},MD_KeywordTypeCode:{caption:"Vrsta ključne riječi",discipline:"Disciplina",place:"Mjesto",stratum:"Stratum",temporal:"Vremensko",theme:"Tema"},MD_LegalConstraints:{caption:"Pravna ograničenja",accessConstraints:"Ograničenja pristupa",useConstraints:"Ograničenja upotrebe",otherConstraints:"Ostala ograničenja"},MD_MaintenanceFrequencyCode:{caption:"Učestalost",continual:"Kontinuirano",daily:"Dnevno",weekly:"Tjedno",fortnightly:"Četrnaestodnevno",monthly:"Mjesečno",quarterly:"Tromjesečno",biannually:"Dva puta godišnje",annually:"Godišnje",asNeeded:"Prema potrebi",irregular:"Neredovito",notPlanned:"Neplanirano",unknown:"Nepoznato"},MD_Metadata:{caption:"Metapodaci",fileIdentifier:"Identifikator datoteke",language:"Jezik metapodataka",hierarchyLevel:"Razina hijerarhije",hierarchyLevelName:"Naziv razine hijerarhije",contact:"Kontakt za metapodatke",dateStamp:"Datum metapodataka",metadataStandardName:"Standardni naziv metapodataka",metadataStandardVersion:"Standardna verzija metapodataka",referenceSystemInfo:"Referentni sustav",identificationInfo:"Identifikacija",distributionInfo:"Distribucija",dataQualityInfo:"Kvaliteta"},MD_ProgressCode:{caption:"Kod napretka",completed:"Završeno",historicalArchive:"Povijesni arhiv",obsolete:"Zastarjelo",onGoing:"U tijeku",planned:"Planirano",required:"Potrebno",underDevelopment:"U razvoju"},MD_RepresentativeFraction:{denominator:"Nazivnik"},MD_Resolution:{equivalentScale:"Ekvivalentna ljestvica",distance:"Udaljenost"},MD_RestrictionCode:{copyright:"Autorsko pravo",patent:"Patent",patentPending:"Patent na čekanju",trademark:"Zaštitni znak",license:"Licenca",intellectualPropertyRights:"Prava intelektualnog vlasništva",restricted:"Ograničeno",otherRestrictions:"Ostale restrikcije"},MD_ScopeCode:{attribute:"Atribut",attributeType:"Vrsta atributa",collectionHardware:"Hardver zbirke",collectionSession:"Sesija zbirke",dataset:"Skup podataka",series:"Niz",nonGeographicDataset:"Negeografski skup podataka",dimensionGroup:"Grupa dimenzija",feature:"Geoobjekt",featureType:"Vrsta geoobjekta",propertyType:"Vrsta vlasništva",fieldSession:"Sesija polja",software:"Softver",service:"Usluga",model:"Model",tile:"Ploča"},MD_ScopeDescription:{attributes:"Atributi",features:"Geoobjekti",featureInstances:"Instance geoobjekta",attributeInstances:"Instance atributa",dataset:"Skup podataka",other:"Ostalo"},MD_SecurityConstraints:{caption:"Sigurnosna ograničenja",classification:"Klasifikacija",userNote:"Bilješka korisnika",classificationSystem:"Sustav klasifikacije",handlingDescription:"Opis rukovanja"},MD_SpatialRepresentationTypeCode:{caption:"Vrsta prostornog predstavljanja",vector:"Vektor",grid:"Mreža",textTable:"Tablica teksta",tin:"TIN",stereoModel:"Stereo model",video:"Videozapis"},MD_TopicCategoryCode:{caption:"Kategorija teme",boundaries:"Administrativne i političke granice",farming:"Poljoprivreda i uzgoj",climatologyMeteorologyAtmosphere:"Atmosfera i klima",biota:"Biologija i ekologija",economy:"Poslovanje i ekonomija",planningCadastre:"Katastar",society:"Kultura, društvo i demografija",elevation:"Visina terena i nastali proizvodi",environment:"Okoliš i očuvanje",structure:"Objekti i strukture",geoscientificInformation:"Geologija i geofizika",health:"Ljudsko zdravlje i bolest",imageryBaseMapsEarthCover:"Snimke i kartografske podloge",inlandWaters:"Resursi kopnenih voda",location:"Lokacije i geodetske mreže",intelligenceMilitary:"Vojska",oceans:"Oceani i estuariji",transportation:"Prijevozne mreže",utilitiesCommunication:"Uslužni programi i komunikacija"},MI_ContextCode:{caption:"Kontekst",acquisition:"Nabava",pass:"Pristup",wayPoint:"Međutočka"},MI_EnvironmentalRecord:{caption:"Okolišni uvjeti",averageAirTemperature:"Prosječna temperatura zraka",maxRelativeHumidity:"Maksimalna relativna vlažnost",maxAltitude:"Maksimalna visina",meterologicalConditions:"Meteorološki uvjeti"},MI_Event:{identifier:"Identifikator događaja",time:"Vrijeme",expectedObjectiveReference:"Očekivani cilj (Identifikator cilja)",relatedSensorReference:"Povezani senzor (Identifikator instrumenta)",relatedPassReference:"Povezano pristup (Identifikator pristupa platformi)"},MI_GeometryTypeCode:{point:"Točka",linear:"Linearno",areal:"Zračno",strip:"Traka"},MI_Instrument:{citation:"Navod instrumenta",identifier:"Identifikator instrumenta",sType:"Vrsta instrumenta",description:"Opis instrumenta",mountedOn:"Montirano na",mountedOnPlatformReference:"Montirano na (Identifikator platforme)"},MI_Metadata:{acquisitionInformation:"Nabava"},MI_Objective:{caption:"Cilj",identifier:"Identifikator cilja",priority:"Prioritet cilja",sFunction:"Funkcija cilja",extent:"Obuhvat",pass:"Pristup platformi",sensingInstrumentReference:"Mjerni instrument (Identifikator instrumenta)",objectiveOccurrence:"Događaji",sections:{identification:"Identifikacija",extent:"Obuhvat",pass:"Pristup",sensingInstrument:"Mjerni instrument",objectiveOccurrence:"Događaji"}},MI_ObjectiveTypeCode:{caption:"Vrsta (Tehnika prikupljanja za cilj)",instantaneousCollection:"Trenutna kolekcija",persistentView:"Trajni prikaz",survey:"Anketa"},MI_Operation:{caption:"Radnja",description:"Opis radnje",citation:"Navod radnje",identifier:"Identifikator radnje",status:"Status radnje",objectiveReference:"Povezani cilj (Identifikator cilja)",planReference:"Povezani plan (Identifikator plana)",significantEventReference:"Povezani događaj (Identifikator događaja)",platformReference:"Povezana platforma (Identifikator platforme)",sections:{identification:"Identifikacija",related:"Povezano"}},MI_OperationTypeCode:{caption:"Vrsta radnje",real:"Stvarno",simulated:"Simulirano",synthesized:"Sintetizirano"},MI_Plan:{sType:"Geometrija uzorkovanja za prikupljanje podataka",status:"Status plana",citation:"Navod prikupljanja koje zatraži ovlašteno tijelo",satisfiedRequirementReference:"Ispunjeni zahtjev (Identifikator zahtjeva)",operationReference:"Povezane radnje (Identifikator radnje)"},MI_Platform:{citation:"Navod platforme",identifier:"Identifikator platforme",description:"Opis platforme koja podržava instrument",sponsor:"Organizacijski sponzor za platformu",instrument:"Instrument(i) montiran(i) na platformi",instrumentReference:"Identifikator instrumenta",sections:{identification:"Identifikacija",sponsor:"Sponzor",instruments:"Instrumenti"}},MI_PlatformPass:{identifier:"Identifikator pristupa platformi",extent:"Obuhvat pristupa platformi",relatedEventReference:"Povezani događaj (Identifikator događaja)"},MI_PriorityCode:{critical:"Kritično",highImportance:"Vrlo važno",mediumImportance:"Srednje važno",lowImportance:"Manje važno"},MI_RequestedDate:{requestedDateOfCollection:"Zatraženi datum prikupljanja",latestAcceptableDate:"Najnoviji prihvatljivi datum"},MI_Requirement:{caption:"Zahtjev",citation:"Navod za materijal sa smjernicama za zahtjeve",identifier:"Identifikator zahtjeva",requestor:"Podnositelj zahtjeva",recipient:"Primatelj rezultata zahtjeva",priority:"Prioritet zahtjeva",requestedDate:"Zatraženi datum",expiryDate:"Datum isteka",satisifiedPlanReference:"Ispunjeni plan (Identifikator plana)",sections:{identification:"Identifikacija",requestor:"Podnositelj zahtjeva",recipient:"Primatelj",priorityAndDates:"Prioritet i datumi",satisifiedPlan:"Ispunjeni plan"}},MI_SequenceCode:{caption:"Slijed",start:"Početak",end:"Kraj",instantaneous:"Trenutno"},MI_TriggerCode:{caption:"Geo Trigger",automatic:"Automatski",manual:"Ručno",preProgrammed:"Programirano"},ObjectReference:{uuidref:"UUID referenca",xlinkref:"URL referenca"},RS_Identifier:{caption:"ID i prostor koda",code:"Kod",codeSpace:"Prostor koda"},SV_CouplingType:{loose:"Labavo",mixed:"Miješano",tight:"Čvrsto"},SV_OperationMetadata:{operationName:"Naziv radnje",DCP:"DCP",connectPoint:"Točka spajanja"},SV_ServiceIdentification:{serviceType:"Vrsta usluge",couplingType:"Vrsta spajanja",containsOperations:"Metapodaci radnje",operatesOn:"Radi na"},TM_Primitive:{indeterminatePosition:"Neodređen položaj",indeterminates:{before:"Prije",after:"Poslije",now:"Sada",unknown:"Nepoznato"}},gemet:{concept:{gemetConceptKeyword:"Ključna riječ koncepta GEMET",tool:"Potraži...",dialogTitle:"GEMET - Ključna riječ koncepta",searchLabel:"Pretraži:",searchTip:"Pretraži GEMET"},theme:{tool:"Potraži...",dialogTitle:"GEMET - Tema podataka Inspire"},ioerror:"Došlo je do pogreške prilikom komunikacije s uslugom GEMET: {url}",searching:"Pretraživanje GEMET-a...",noMatch:"Nema odgovarajućih rezultata.",languages:{bg:"Bugarski",cs:"Češki",da:"Danski",nl:"Nizozemski",en:"Engleski",et:"Estonski",fi:"Finski",fr:"Francuski",de:"Njemački",el:"Grčki",hu:"Mađarski",ga:"Gaelski (irski)",it:"Talijanski",lv:"Latvijski",lt:"Litavski",mt:"Malteški",pl:"Poljski",pt:"Portugalski",ro:"Rumunjski",sk:"Slovački",sl:"Slovenski",es:"Španjolski",sv:"Švedski"}}});