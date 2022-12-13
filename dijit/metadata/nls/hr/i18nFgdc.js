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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Nema",notComplete:"Nije gotovo",other:"Ostalo",present:"Postoji",unknown:"Nepoznato",unpublishedMaterial:"Neobjavljeni materijal"},hints:{integerGreaterThanOne:"(unesite cijeli broj > 1)",integer0To100:"(unesite cijeli broj 0..100)"},citeinfo:{caption:"Podaci o navodu",origin:"Izvorište",pubdate:"Datum objave",pubtime:"Vrijeme objave",title:"Naslov",edition:"Izdanje",geoform:{caption:"Oblik prezentacije geoprostornih podataka",atlas:"Atlas",audio:"Audiozapis",diagram:"Dijagram",sDocument:"Dokument",globe:"Globus",map:"Karta",model:"Model",multiMediaPresentation:"Prezentacija multimedija",profile:"Profil",rasterDigitalData:"Digitalni podaci rastera",remoteSensingImage:"Slika daljinskog istraživanja",section:"Odjeljak",spreadsheet:"Proračunska tablica",tabularDigitalData:"Tablični digitalni podaci",vectorDigitalData:"Vektorski digitalni podaci",video:"Videozapis",view:"Prikaz"},serinfo:{caption:"Podaci o seriji",sername:"Naziv serije",issue:"Identifikacija problema"},pubinfo:{caption:"Podaci o objavi",pubplace:"Mjesto objave",publish:"Objavljivač"},othercit:"Ostale pojedinosti o navodu",onlink:"Mrežno povezivanje (URL)"},cntinfo:{caption:"Kontaktni podaci",section:{primary:"Primarni",phoneAndEmail:"Telefon i e-pošta",hoursAndInstructions:"Sati i upute"},cntorgp:{caption:"Prema organizaciji",cntorg:"Organizacija",cntper:"Osoba"},cntperp:{caption:"Prema osobi",cntper:"Osoba",cntorg:"Organizacija"},cntpos:"Položaj",cntaddr:{caption:"Adresa",addrtype:{caption:"Vrsta adrese",mailing:"Poštanska adresa",physical:"Fizička adresa",mailingAndPhysical:"Poštanska i fizička adresa"},address:"Adresa",city:"Grad",state:"Pokrajina",postal:"Poštanski broj",country:"Zemlja"},cntvoice:"Glas",cnttdd:"Telefon TDD/TTY (osobe s oštećenjem sluha)",cntfax:"Faks",cntemail:"Adresa e-pošte",hours:"Sati",cntinst:"Upute"},dataqual:{caption:"Informacija o kvaliteti podataka",section:{attributeAccuracy:"Točnost atributa",logicalConsistency:"Logička dosljednost",completeness:"Cjelovitost",positionalAccuracy:"Položajna točnost",lineage:"Podrijetlo",cloudCover:"Naoblaka"},attracc:{caption:"Točnost atributa",attraccr:"Izvješće o točnosti atributa",qattracc:{caption:"Procjena točnosti kvantitativnog atributa",attraccv:"Vrijednost točnosti atributa",attracce:"Objašnjenje točnosti atributa"}},logic:"Izvješće o logičkoj dosljednosti",complete:"Izvješće o cjelovitosti",posacc:"Položajna točnost",horizpa:{caption:"Položajna točnost",horizpar:"Izvješće o položajnoj točnosti",qhorizpa:{caption:"Kvantitativna procjena položajne točnosti",horizpav:"Vrijednost položajne točnosti",horizpae:"Objašnjenje položajne točnosti"}},vertacc:{caption:"Visinska položajna točnost",vertaccr:"Izvješće o visinskoj položajnoj točnosti",qvertpa:{caption:"Kvantitativna procjena visinske položajne točnosti",vertaccv:"Vrijednost visinske položajne točnosti",vertacce:"Objašnjenje visinske položajne točnosti"}},lineage:{caption:"Podrijetlo"},srcinfo:{caption:"Informacije o izvoru",srccite:"Navod izvora",srcscale:"Nazivnik mjerila izvora",typesrc:{caption:"Vrsta medija izvora",paper:"Papir",stableBaseMaterial:"Materijal stabilne baze",microfiche:"Mikrofiš",microfilm:"Mikrofilm",audiocassette:"Audiokazeta",chart:"Grafikon",filmstrip:"Traka filma",transparency:"Prozirnost",videocassette:"Videokazeta",videodisc:"Videodisk",videotape:"Videotraka",physicalModel:"Fizički model",computerProgram:"Računalni program",disc:"Disk",cartridgeTape:"Kazeta s trakom",magneticTape:"Magnetska traka",online:"Na mreži",cdrom:"CD-ROM",electronicBulletinBoard:"Elektronička oglasna ploča",electronicMailSystem:"Elektronički sustav pošte"},srctime:"Vremensko razdoblje sadržaja izvora",srccurr:"Referenca o aktualnosti izvora",srccitea:"Skraćenica navoda izvora",srccontr:"Doprinos izvora"},procstep:{caption:"Korak postupka",procdesc:"Opis postupka",srcused:"Skraćenica navoda upotrijebljena u izvoru",procdate:"Datum obrade",proctime:"Vrijeme obrade",srcprod:"Skraćenica navoda nastala u izvoru",proccont:"Kontakt za obradu"},cloud:"Naoblaka"},distinfo:{caption:"Informacije o distribuciji",section:{distributor:"Distributer",description:"Opis",orderProcess:"Postupak narudžbe",prerequisites:"Preduvjeti",availability:"Dostupnost"},distrib:"Distributer",resdesc:{caption:"Opis resursa",liveData:"Podaci uživo i karte",downloadableData:"Podaci koji se mogu preuzimati",offlineData:"Izvanmrežni podaci",staticMapImages:"Statičke slike karte",sDocument:"Ostali dokumenti",application:"Aplikacije",geographicService:"Geografske usluge",clearingHouse:"Klirinške ustanove",mapFiles:"Datoteke karte",geographicActivies:"Geografske aktivnosti"},distliab:"Izjava o odgovornosti o distribuciji",custom:"Postupak narudžbe kupca",techpreq:"Tehnički preduvjeti",availabl:"Dostupnost"},eainfo:{caption:"Podaci o entitetu i atributu",overview:"Opis pregleda",eaover:"Pregled entiteta i atributa",eadetcit:"Navod pojedinosti o entitetu i atributu"},idinfo:{caption:"Podaci o identifikaciji",section:{timeAndStatus:"Vrijeme i status",constraints:"Ograničenja",contact:"Kontakt",additional:"Dodatno"},citeinfo:"Navod",descript:{caption:"Opis",sAbstract:"Sažetak",purpose:"Svrha",supplinf:"Dopunske informacije"},timeperd:{caption:"Vremensko razdoblje sadržaja",current:{caption:"Referenca o aktualnosti",groundCondition:"Stanje tla",publicationDate:"Datum objave"}},status:{caption:"Status",progress:{caption:"Napredak",complete:"Završeno",inWork:"U izradi",planned:"Planirano"},update:{caption:"Učestalost održavanja i ažuriranja",continual:"Kontinuirano",daily:"Dnevno",weekly:"Tjedno",monthly:"Mjesečno",annually:"Godišnje",unknown:"Nepoznato",asNeeded:"Prema potrebi",irregular:"Neredovito",nonePlanned:"Nije planirano"}},spdom:{caption:"Obuhvat",bounding:{caption:"Granične koordinate",westbc:"Zapadna geografska dužina",eastbc:"Istočna geografska dužina",northbc:"Sjeverna geografska širina",southbc:"Južna geografska širina"}},keywords:{caption:"Ključne riječi",theme:"Tema",place:"Mjesto",stratum:"Stratum",temporal:"Vremensko",thesaursus:"Povezani rječnik sinonima",delimited:"Ključne riječi",themektIsoTopicCategory:"ISO tema...",themektIsoTopicDialog:"ISO tema",placektGnis:"Sustav podataka geografskih naziva"},accconst:"Ograničenja pristupa",useconst:"Ograničenja upotrebe",ptcontac:"Točka za kontakt za resurse",browse:{caption:"Pregledaj grafiku",browsen:"Pregledaj URL grafike",browsed:"Pregledaj opis grafičke datoteke",browset:"Pregledaj vrstu grafičke datoteke"},datacred:"Zasluge za skup podataka",secinfo:{caption:"Sigurnosne informacije",secsys:"Sustav sigurnosne klasifikacije",secclass:{caption:"Sigurnosna klasifikacija",topSecret:"Strogo povjerljivo",secret:"Tajno",confidential:"Povjerljivo",restricted:"Ograničeno",unclassified:"Neklasificirano",sensitive:"Osjetljivo"},sechandl:"Opis sigurnosnog rukovanja"},sNative:"Nativno okruženje skupa podataka",crossref:"Unakrsna referenca"},metadata:{idinfo:"Identifikacija",dataqual:"Kvaliteta",spdoinfo:"Prostorna organizacija podataka",spref:"Prostorna referenca",eainfo:"Entitet i atribut",distinfo:"Distribucija",metainfo:"Metapodaci"},metainfo:{caption:"Informacije o metapodacima",section:{dates:"Datumi metapodataka",contact:"Kontakt za metapodatke",standard:"Standard metapodataka",additional:"Dodatno"},metd:"Datum metapodataka",metrd:"Datum revizije metapodataka",metfrd:"Sljedeći datum revizije metapodataka",metstdn:"Standardni naziv metapodataka",metstdv:"Standardna verzija metapodataka",metac:"Ograničenja pristupa metapodacima",metuc:"Ograničenja upotrebe metapodataka",metsi:{caption:"Sigurnosne informacije o metapodacima",metscs:"Sustav sigurnosne klasifikacije metapodataka",metsc:"Sigurnosna klasifikacija metapodataka",metshd:"Opis sigurnosnog rukovanja metapodacima"}},spref:{caption:"Podaci o prostornoj referenci",horizsys:{caption:"Vodoravni koordinatni sustav",geograph:{caption:"Geografsko",latres:"Razlučivost geografske širine",longres:"Razlučivost geografske dužine",geogunit:{caption:"Jedinice geografskih koordinata",decimalDegrees:"Decimalni stupnjevi",decimalMinutes:"Decimalne minute",decimalSeconds:"Decimalne sekunde",degreesAndDecimalMinutes:"Stupnjevi i decimalne minute",degreesMinutesAndDecimalSeconds:"Stupnjevi, minute i decimalne sekunde",radians:"Radijani",grads:"Gradi"}},planar:{caption:"Planarno"},local:{caption:"Lokalno",localdes:"Lokalni opis",localgeo:"Podaci o lokalnom georeferenciranju"},geodetic:{caption:"Geodetski model",horizdn:{caption:"Naziv položajnog datuma",nad83:"Sjevernoamerički podatak iz 1983.",nad27:"Sjevernoamerički podatak iz 1927."},ellips:{caption:"Naziv elipsoida",grs80:"Geodetski referentni sustav 80",clarke1866:"Clarke 1866"},semiaxis:"Velika poluos",denflat:"Nazivnik spljoštenosti"}},vertdef:{caption:"Visinski koordinatni sustav",altsys:{caption:"Visinski sustav",altdatum:{caption:"Naziv visinskog datuma",navd88:"Sjevernoamerički visinski datum iz 1988.",ngvd29:"Nacionalni geodetski visinski datum iz 1929."},altres:"Visinska razlučivost",altunits:{caption:"Jedinice visinske udaljenosti",meters:"Metri",feet:"Stope"},altenc:{caption:"Metoda šifriranja visine",explicit:"Izričita koordinata visine uključena s vodoravnim koordinatama",implicit:"Implicitna koordinata",attribute:"Vrijednosti atributa"}},depthsys:{caption:"Dubinski sustav",depthdn:{caption:"Naziv dubinskog datuma",option1:"Lokalna površina",option2:"Hidrografska nula;  referenca za mjerenje dubine",option3:"Najniža astronomska plima",option4:"Najviša astronomska plima",option5:"Srednje niska plima",option6:"Srednje visoka plima",option7:"Srednja razina mora",option8:"Referenca visinske točke mjerenja",option9:"Srednje niska višegodišnja plima",option10:"Srednje visoka višegodišnja plima",option11:"Srednje niski godišnji prosjek plime",option12:"Srednje visoki godišnji prosjek plime",option13:"Srednje niža niska plima",option14:"Srednje niža niska višegodišnja plima",option15:"Srednje viša visoka plima",option16:"Srednje viša niska plima",option17:"Srednje niža visoka plima",option18:"Maksimalna plima",option19:"Polumjesečna niža niska plima",option20:"Najmanja razlika plime i oseke",option21:"Visoka plima",option22:"Viša visoka plima",option23:"Niska plima",option24:"Referentna niska plima",option25:"Najniža niska plima",option26:"Niža niska plima",option27:"Niža normalno niska plima",option28:"Srednja razina plime",option29:"Najniža regionalna plima",option30:"Najveća razlika plime",option31:"Najmanja razlika plime",option32:"Referentna razina rijeke Columbia",option33:"Referentna razina niske plime Meksičkog zaljeva",option34:"Najniža ekvatorijalna plima",option35:"Približna najniža astronomska plima",option36:"Nema ispravka"},depthres:"Razlučivost dubine",depthdu:{caption:"Jedinica dubinske udaljenosti",meters:"Metri",feet:"Stope"},depthem:{caption:"Metoda šifriranja dubine",explicit:"Izričita koordinata dubine uključena s X i Y koordinatama",implicit:"Implicitna koordinata",attribute:"Vrijednosti atributa"}}}},timeinfo:{caption:"Podaci o vremenskom razdoblju",sngdate:"Jedan datum",mdattim:"Više datuma",rngdates:"Raspon datuma",caldate:"Datum",time:"Vrijeme",begdate:"Datum početka",begtime:"Početno vrijeme",enddate:"Datum završetka",endtime:"Završno vrijeme"}});