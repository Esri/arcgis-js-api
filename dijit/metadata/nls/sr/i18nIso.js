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

define({documentTypes:{data:{caption:"ISO 19115 (Data)",description:""},service:{caption:"ISO 19119 (Service)",description:""},gmi:{caption:"ISO 19115-2 (Imagery and Gridded Data)",description:""}},general:{reference:"Referenca"},sections:{metadata:"Metapodaci",identification:"Identifikacija",distribution:"Distribucija",quality:"Kvalitet",acquisition:"Akvizicija"},metadataSection:{identifier:"Identifikator",contact:"Kontakt",date:"Datum",standard:"Standard",reference:"Referenca"},identificationSection:{citation:"Citat",description:"Opis",contact:"Kontakt",thumbnail:"Sličica",keywords:"Ključne reči",constraints:"Ograničenja",resource:"Resurs",resourceTab:{representation:"Predstavljanje",language:"Jezik",classification:"Klasifikacija",extent:"Obuhvat"},serviceResourceTab:{serviceType:"Tip servisa",extent:"Obuhvat",couplingType:"Tip spajanja",operation:"Operacija",operatesOn:"Radi na"}},distributionSection:{},qualitySection:{scope:"Opseg",conformance:"Prilagođavanje",lineage:"Poreklo"},acquisitionSection:{requirement:"Zahtev",objective:"Cilj",instrument:"Instrument",plan:"Plan",operation:"Operacija",platform:"Platforma",environment:"Okruženje"},AbstractMD_Identification:{sAbstract:"Apstrakt",purpose:"Svrha",credit:"Krediti",pointOfContact:"Tačka kontakta",resourceMaintenance:"Održavanje",graphicOverview:"Grafički pregled",descriptiveKeywords:"Kolekcija ključnih reči",resourceConstraints:"Ograničenja"},CI_Address:{deliveryPoint:"Tačka isporuke",city:"Grad",administrativeArea:"Administrativna oblast",postalCode:"Poštanski broj",country:"Zemlja",electronicMailAddress:"Adresa e-pošte"},CI_Citation:{title:"Naslov",alternateTitle:"Alternativni naslov",identifier:"Jedinstveni identifikator resursa",resource:{title:"Naslov resursa",date:"Datum resursa"},specification:{title:"Naslov specifikacije",date:"Datum specifikacije"}},CI_Contact:{phone:"Telefon",address:"Adresa",onlineResource:"Resurs na mreži",hoursOfService:"Radno vreme",contactInstructions:"Uputstva kontakta"},CI_Date:{date:"Datum",dateType:"Tip datuma"},CI_DateTypeCode:{caption:"Tip datuma",creation:"Datum kreiranja",publication:"Datum objavljivanja",revision:"Datum pregleda"},CI_OnLineFunctionCode:{caption:"Funkcija",download:"Preuzmi",information:"Informacije",offlineAccess:"Pristup van mreže",order:"Redosled",search:"Pretraži"},CI_OnlineResource:{caption:"Resurs na mreži",linkage:"URL adresa",protocol:"Protokol",applicationProfile:"Profil aplikacije",name:"Naziv",description:"Opis",sFunction:"Funkcija"},CI_ResponsibleParty:{caption:"Tačka kontakta",individualName:"Ime pojedinca",organisationName:"Ime organizacije",positionName:"Naziv radnog mesta",contactInfo:"Kontakt informacije",role:"Uloga"},CI_RoleCode:{caption:"Uloga",resourceProvider:"Dobavljač resursa",custodian:"Staratelj",owner:"Vlasnik",user:"Korisnik",distributor:"Distributer",originator:"Tvorac",pointOfContact:"Tačka kontakta",principalInvestigator:"Glavni ispitivač",processor:"Procesor",publisher:"Objavljivač",author:"Autor"},CI_Telephone:{voice:"Voice",facsimile:"Faks"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"VebServisi"},DQ_ConformanceResult:{caption:"Rezultat prilagođavanja",explanation:"Objašnjenje",degree:{caption:"Stepen",validationPerformed:"Provera valjanosti obavljena",conformant:"Usklađeno",nonConformant:"Neusklađeno"}},DQ_DataQuality:{report:"Izveštaj"},DQ_Scope:{level:"Opseg (informacije o kvalitetu primenjuju se na)",levelDescription:"Opis nivoa"},EX_Extent:{caption:"Obuhvat",description:"Opis",geographicElement:"Prostorni obuhvat",temporalElement:"Vremenski obuhvat",verticalElement:"Vertikalni obuhvat"},EX_GeographicBoundingBox:{westBoundLongitude:"Zapadna granična geografska dužina",eastBoundLongitude:"Istočna granična geografska dužina",southBoundLatitude:"Južna granična geografska širina",northBoundLatitude:"Severna granična geografska širina"},EX_GeographicDescription:{caption:"Geografski opis"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Datum početka",endPosition:"Datum završetka"}},EX_VerticalExtent:{minimumValue:"Minimalna vrednost",maximumValue:"Maksimalna vrednost",verticalCRS:"Vertikalni CRS"},Length:{caption:"Dužina",uom:"Merne jedinice",km:"Kilometri",m:"Metri",mi:"Milje",ft:"Stope"},LI_Lineage:{statement:"Izjava porekla"},MD_BrowseGraphic:{fileName:"Pretraži URL grafike",fileDescription:"Pretraži natpis grafike",fileType:"Pretraži tip grafike"},MD_ClassificationCode:{unclassified:"Neklasifikovano",restricted:"Ograničeno",confidential:"Poverljivo",secret:"Tajna",topSecret:"Strogo poverljiva tajna"},MD_Constraints:{caption:"Ograničenja upotrebe",useLimitation:"Ograničenje upotrebe"},MD_DataIdentification:{spatialRepresentationType:"Tip prostornog predstavljanja",spatialResolution:"Prostorna rezolucija",language:"Jezik resursa",supplementalInformation:"Dodatno"},MD_DigitalTransferOptions:{onLine:"Na mreži"},MD_Distribution:{distributionFormat:"Format distribucije",transferOptions:"Opcije prenosa"},MD_Format:{name:"Ime formata",version:"Verzija formata"},MD_Identifier:{caption:"URI",identifierCaption:"Identifikator",code:"Kod"},MD_Keywords:{delimitedCaption:"Ključne reči",thesaurusName:"Povezani tezaurus"},MD_KeywordTypeCode:{caption:"Tip ključne reči",discipline:"Disciplina",place:"Mesto",stratum:"Sloj",temporal:"Vremenski",theme:"Tema"},MD_LegalConstraints:{caption:"Zakonska ograničenja",accessConstraints:"Ograničenja pristupa",useConstraints:"Ograničenja upotrebe",otherConstraints:"Druga ograničenja"},MD_MaintenanceFrequencyCode:{caption:"Učestalost",continual:"Kontinuirano",daily:"Dnevno",weekly:"Sedmično",fortnightly:"Dvonedeljno",monthly:"Mesečno",quarterly:"Kvartalno",biannually:"Polugodišnje",annually:"Godišnje",asNeeded:"Po potrebi",irregular:"Neredovno",notPlanned:"Neplanirano",unknown:"Nepoznato"},MD_Metadata:{caption:"Metapodaci",fileIdentifier:"Identifikator datoteke",language:"Jezik metapodataka",hierarchyLevel:"Hijerarhijski nivo",hierarchyLevelName:"Ime hijerarhijskog nivoa",contact:"Kontakt metapodataka",dateStamp:"Datum metapodataka",metadataStandardName:"Standardno ime metapodataka",metadataStandardVersion:"Standardna verzija metapodataka",referenceSystemInfo:"Referentni sistem",identificationInfo:"Identifikacija",distributionInfo:"Distribucija",dataQualityInfo:"Kvalitet"},MD_ProgressCode:{caption:"Kod napretka",completed:"Završeno",historicalArchive:"Istorijska arhiva",obsolete:"Zastarelo",onGoing:"U toku",planned:"Planirano",required:"Obavezno",underDevelopment:"Razvoj u toku"},MD_RepresentativeFraction:{denominator:"Imenilac"},MD_Resolution:{equivalentScale:"Ekvivalentna razmera",distance:"Rastojanje"},MD_RestrictionCode:{copyright:"Autorsko pravo",patent:"Patent",patentPending:"Patent na čekanju",trademark:"Žig",license:"Licenca",intellectualPropertyRights:"Prava na intelektualnu svojinu",restricted:"Ograničeno",otherRestrictions:"Druga ograničenja"},MD_ScopeCode:{attribute:"Atribut",attributeType:"Tip atributa",collectionHardware:"Hardver kolekcije",collectionSession:"Sesija kolekcije",dataset:"Skup podataka",series:"Serija",nonGeographicDataset:"Skup negeografskih podataka",dimensionGroup:"Grupa dimenzije",feature:"Geoobjekat",featureType:"Tip geoobjekta",propertyType:"Tip svojstva",fieldSession:"Sesija polja",software:"Softver",service:"Servis",model:"Model",tile:"Tajl"},MD_ScopeDescription:{attributes:"Atributi",features:"Geoobjekti",featureInstances:"Instance geoobjekta",attributeInstances:"Instance atributa",dataset:"Skup podataka",other:"Ostalo"},MD_SecurityConstraints:{caption:"Bezbednosna ograničenja",classification:"Klasifikacija",userNote:"Korisnička napomena",classificationSystem:"Klasifikacioni sistem",handlingDescription:"Opis rukovanja"},MD_SpatialRepresentationTypeCode:{caption:"Tip prostornog predstavljanja",vector:"Vektor",grid:"Mreža",textTable:"Tekstualna tabela",tin:"TIN",stereoModel:"Stereo model",video:"Video zapis"},MD_TopicCategoryCode:{caption:"Kategorija teme",boundaries:"Administrativne i političke granice",farming:"Poljoprivreda i zemljoradnja",climatologyMeteorologyAtmosphere:"Atmosfera i klima",biota:"Biologija i ekologija",economy:"Poslovanje i ekonomija",planningCadastre:"Katastar",society:"Kultura, društvo i demografija",elevation:"Elevacija i izvedeni proizvodi",environment:"Okruženje i konzervacija",structure:"Objekti i strukture",geoscientificInformation:"Geologija i geofizika",health:"Zdravlje i bolesti ljudi",imageryBaseMapsEarthCover:"Snimci i pozadinske mape",inlandWaters:"Vodeni resursi na kopnu",location:"Lokacije i geodetske mreže",intelligenceMilitary:"Vojska",oceans:"Okeani i estuari",transportation:"Transportne mreže",utilitiesCommunication:"Infrastrukturni sistemi i komunikacija"},MI_ContextCode:{caption:"Kontekst",acquisition:"Akvizicija",pass:"Prolaz",wayPoint:"Referentna tačka"},MI_EnvironmentalRecord:{caption:"Uslovi okoline",averageAirTemperature:"Prosečna temperatura vazduha",maxRelativeHumidity:"Maksimalna relativna vlažnost",maxAltitude:"Maksimalna nadmorska visina",meterologicalConditions:"Meterološki uslovi"},MI_Event:{identifier:"Identifikator događaja",time:"Vreme",expectedObjectiveReference:"Očekivani cilj (Identifikator cilja)",relatedSensorReference:"Povezani senzor (Identifikator instrumenta)",relatedPassReference:"Povezani prolaz (Identifikator prolaza platforme)"},MI_GeometryTypeCode:{point:"Tačka",linear:"Linearno",areal:"Vazdušno",strip:"Traka"},MI_Instrument:{citation:"Citat instrumenta",identifier:"Identifikator instrumenta",sType:"Tip instrumenta",description:"Opis instrumenta",mountedOn:"Montirano",mountedOnPlatformReference:"Montirano (Identifikator platforme)"},MI_Metadata:{acquisitionInformation:"Akvizicija"},MI_Objective:{caption:"Cilj",identifier:"Identifikator cilja",priority:"Prioritet mete",sFunction:"Funkcija cilja",extent:"Obuhvat",pass:"Prolaz platforme",sensingInstrumentReference:"Senzorni instrument (Identifikator instrumenata)",objectiveOccurrence:"Dešavanja",sections:{identification:"Identifikacija",extent:"Obuhvat",pass:"Prolaz",sensingInstrument:"Senzorni instrument",objectiveOccurrence:"Dešavanja"}},MI_ObjectiveTypeCode:{caption:"Tip (tehnika prikupljanja za cilj)",instantaneousCollection:"Trenutno prikupljanje",persistentView:"Trajni prikaz",survey:"Ispitivanje"},MI_Operation:{caption:"Operacija",description:"Opis operacije",citation:"Citat operacije",identifier:"Identifikator operacije",status:"Status operacije",objectiveReference:"Povezani cilj (Identifikator cilja)",planReference:"Povezani plan (Identifikator plana)",significantEventReference:"Povezani događaj (Identifikator događaja)",platformReference:"Povezana platforma (Identifikator platforme)",sections:{identification:"Identifikacija",related:"Povezano"}},MI_OperationTypeCode:{caption:"Tip operacije",real:"Stvarno",simulated:"Simulirano",synthesized:"Sintetizovano"},MI_Plan:{sType:"Geometrija uzorkovanja za prikupljanje podataka",status:"Status plana",citation:"Citat institucije koja zahteva prikupljanje",satisfiedRequirementReference:"Zadovoljeni zahtev (Identifikator zahteva)",operationReference:"Povezana operacija (Identifikator operacije)"},MI_Platform:{citation:"Citat platforme",identifier:"Identifikator platforme",description:"Opis platforme koja podržava instrument",sponsor:"Organizacija sponzora za platformu",instrument:"Instrumenti montirani na platformu",instrumentReference:"Identifikator instrumenta",sections:{identification:"Identifikacija",sponsor:"Sponzor",instruments:"Instrumenti"}},MI_PlatformPass:{identifier:"Identifikator prolaza platforme",extent:"Obuhvat prolaza platforme",relatedEventReference:"Povezani događaj (Identifikator događaja)"},MI_PriorityCode:{critical:"Kritično",highImportance:"Visoki stepen važnosti",mediumImportance:"Srednji stepen važnosti",lowImportance:"Niski stepen važnosti"},MI_RequestedDate:{requestedDateOfCollection:"Zahtevani datum prikupljanja",latestAcceptableDate:"Poslednji prihvatljivi datum"},MI_Requirement:{caption:"Zahtev",citation:"Citat za materijal sa smernicama za zahteve",identifier:"Identifikator zahteva",requestor:"Podnosilac zahteva",recipient:"Primalac rezultata zahteva",priority:"Prioritet zahteva",requestedDate:"Datum podnošenja zahteva",expiryDate:"Datum isteka",satisifiedPlanReference:"Ispunjeni plan (Identifikator plana)",sections:{identification:"Identifikacija",requestor:"Podnosilac zahteva",recipient:"Primalac",priorityAndDates:"Prioritet i datumi",satisifiedPlan:"Ispunjeni plan"}},MI_SequenceCode:{caption:"Redosled",start:"Start",end:"Završetak",instantaneous:"Trenutno"},MI_TriggerCode:{caption:"Okidač",automatic:"Automatsko",manual:"Ručno",preProgrammed:"Unapred programirano"},ObjectReference:{uuidref:"UUID referenca",xlinkref:"URL referenca"},RS_Identifier:{caption:"ID plus kodni prostor",code:"Kod",codeSpace:"Kodni prostor"},SV_CouplingType:{loose:"Labavo",mixed:"Mešano",tight:"Čvrsto"},SV_OperationMetadata:{operationName:"Ime operacije",DCP:"DCP",connectPoint:"Tačka povezivanja"},SV_ServiceIdentification:{serviceType:"TipServisa",couplingType:"Tip spajanja",containsOperations:"Metapodaci operacije",operatesOn:"Radi na"},TM_Primitive:{indeterminatePosition:"Neodređeni položaj",indeterminates:{before:"Pre",after:"Posle",now:"Sada",unknown:"Nepoznato"}},gemet:{concept:{gemetConceptKeyword:"GEMET ključna reč koncepta",tool:"Potraži...",dialogTitle:"GEMET – ključna reč koncepta",searchLabel:"Pretraži:",searchTip:"Pretraži GEMET"},theme:{tool:"Potraži...",dialogTitle:"GEMET – Tema Inspire podataka"},ioerror:"Došlo je do greške prilikom komunikacije sa GEMET servisom: {url}",searching:"Pretraživanje GEMET-a...",noMatch:"Nisu nađeni rezultati koji se poklapaju.",languages:{bg:"bugarski",cs:"češki",da:"danski",nl:"holandski",en:"engleski",et:"estonski",fi:"finski",fr:"francuski",de:"nemački",el:"grčki",hu:"mađarski",ga:"gelski (irski)",it:"italijanski",lv:"letonski",lt:"litvanski",mt:"malteški",pl:"poljski",pt:"portugalski",ro:"rumunski",sk:"slovački",sl:"slovenački",es:"španski",sv:"švedski"}}});