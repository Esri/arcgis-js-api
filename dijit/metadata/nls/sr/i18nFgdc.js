// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Ništa",notComplete:"Nije potpuno",other:"Ostalo",present:"Prisutno",unknown:"Nepoznato",unpublishedMaterial:"Neobjavljeni materijal"},hints:{integerGreaterThanOne:"(unesite ceo broj > 1)",integer0To100:"(unesite ceo broj od 0 do 100)"},citeinfo:{caption:"Informacije o citatu",origin:"Tvorac",pubdate:"Datum objavljivanja",pubtime:"Vreme objavljivanja",title:"Naslov",edition:"Izdanje",geoform:{caption:"Obrazac prezentacije geoprostornih podataka",atlas:"Atlas",audio:"Audio",diagram:"Dijagram",sDocument:"Dokument",globe:"Globus",map:"Mapa",model:"Model",multiMediaPresentation:"Multimedijalna prezentacija",profile:"Profil",rasterDigitalData:"Rasterski digitalni podaci",remoteSensingImage:"Snimak daljinskom detekcijom",section:"Odeljak",spreadsheet:"Tablarni prikaz",tabularDigitalData:"Tabularni digitalni podaci",vectorDigitalData:"Vektorski digitalni podaci",video:"Video zapis",view:"Prikaži"},serinfo:{caption:"Informacije o seriji",sername:"Ime serije",issue:"Identifikacija izdanja"},pubinfo:{caption:"Informacije o objavljivanju",pubplace:"Mesto objavljivanja",publish:"Objavljivač"},othercit:"Drugi detalji o citatu",onlink:"Povezivanje na mreži (URL)"},cntinfo:{caption:"Kontakt podaci",section:{primary:"Primarno",phoneAndEmail:"Telefon i e-pošta",hoursAndInstructions:"Radno vreme i uputstva"},cntorgp:{caption:"Po organizaciji",cntorg:"Organizacija",cntper:"Osoba"},cntperp:{caption:"Po osobi",cntper:"Osoba",cntorg:"Organizacija"},cntpos:"Pozicija",cntaddr:{caption:"Adresa",addrtype:{caption:"Tip adrese",mailing:"Za slanje pošte",physical:"Fizička",mailingAndPhysical:"Za slanje pošte i fizičku"},address:"Adresa",city:"Grad",state:"Država",postal:"Poštanski broj",country:"Zemlja"},cntvoice:"Voice",cnttdd:"TDD/TTY telefon (osobe sa oštećenim sluhom)",cntfax:"Faks",cntemail:"Adresa e-pošte",hours:"Radno vreme",cntinst:"Uputstva"},dataqual:{caption:"Informacije o kvalitetu podataka",section:{attributeAccuracy:"Tačnost atributa",logicalConsistency:"Logička doslednost",completeness:"Potpunost",positionalAccuracy:"Poziciona tačnost",lineage:"Poreklo",cloudCover:"Pokrivenost oblacima"},attracc:{caption:"Tačnost atributa",attraccr:"Izveštaj o tačnosti atributa",qattracc:{caption:"Procena tačnosti kvantitativnog atributa",attraccv:"Vrednost tačnosti atributa",attracce:"Objašnjenje tačnosti atributa"}},logic:"Izveštaj o logičkoj doslednosti",complete:"Izveštaj o potpunosti",posacc:"Poziciona tačnost",horizpa:{caption:"Horizontalna poziciona tačnost",horizpar:"Izveštaj o horizontalnoj pozicionoj tačnosti",qhorizpa:{caption:"Procena kvantitativne horizontalne prostorne tačnosti",horizpav:"Vrednost horizontalne pozicione tačnosti",horizpae:"Objašnjenje horizontalne pozicione tačnosti"}},vertacc:{caption:"Vertikalna poziciona tačnost",vertaccr:"Izveštaj o vertikalnoj pozicionoj tačnosti",qvertpa:{caption:"Procena kvantitativne vertikalne prostorne tačnosti",vertaccv:"Vrednost vertikalne pozicione tačnosti",vertacce:"Objašnjenje vertikalne pozicione tačnosti"}},lineage:{caption:"Poreklo"},srcinfo:{caption:"Informacije o izvoru",srccite:"Citat izvora",srcscale:"Imenitelj izvora razmere",typesrc:{caption:"Tip izvornog medija",paper:"Papir",stableBaseMaterial:"Materijal stabilne osnove",microfiche:"Mikrolist",microfilm:"Mikrofilm",audiocassette:"Audio kaseta",chart:"Grafikon",filmstrip:"Filmska traka",transparency:"Prozirnost",videocassette:"Video kaseta",videodisc:"Video disk",videotape:"Video traka",physicalModel:"Fizički model",computerProgram:"Računarski program",disc:"Disk",cartridgeTape:"Kertridž traka",magneticTape:"Magnetna traka",online:"Na mreži",cdrom:"CD-ROM",electronicBulletinBoard:"Elektronska oglasna tabla",electronicMailSystem:"Sistem elektronske pošte"},srctime:"Izvorni vremenski period sadržaja",srccurr:"Referenca aktuelnosti izvora",srccitea:"Skraćenica citata izvora",srccontr:"Doprinos izvora"},procstep:{caption:"Korak procesa",procdesc:"Opis procesa",srcused:"Skraćenica citata koju koristi izvor",procdate:"Datum procesa",proctime:"Vreme procesa",srcprod:"Skraćenica citata koju proizvodi izvor",proccont:"Kontakt procesa"},cloud:"Pokrivenost oblacima"},distinfo:{caption:"Informacije o distribuciji",section:{distributor:"Distributer",description:"Opis",orderProcess:"Proces naručivanja",prerequisites:"Preduslovi",availability:"Dostupnost"},distrib:"Distributer",resdesc:{caption:"Opis resursa",liveData:"Podaci i mape uživo",downloadableData:"Podaci koji se mogu preuzeti",offlineData:"Podaci van mreže",staticMapImages:"Statični snimci mape",sDocument:"Drugi dokumenti",application:"Aplikacije",geographicService:"Geografski servisi",clearingHouse:"Centralni registri",mapFiles:"Datoteke mape",geographicActivies:"Geografske aktivnosti"},distliab:"Izjava o odgovornosti za distribuciju",custom:"Prilagođeni proces naručivanja",techpreq:"Tehnički preduslovi",availabl:"Dostupnost"},eainfo:{caption:"Informacije o entitetu i atributu",overview:"Opis pregleda",eaover:"Pregled entiteta i atributa",eadetcit:"Citat detalja entiteta i atributa"},idinfo:{caption:"Informacije o identifikaciji",section:{timeAndStatus:"Vreme i status",constraints:"Ograničenja",contact:"Kontakt",additional:"Dodatno"},citeinfo:"Citat",descript:{caption:"Opis",sAbstract:"Apstrakt",purpose:"Svrha",supplinf:"Dodatne informacije"},timeperd:{caption:"Vremenski period sadržaja",current:{caption:"Referenca aktuelnosti",groundCondition:"Stanje tla",publicationDate:"Datum objavljivanja"}},status:{caption:"Status",progress:{caption:"Napredak",complete:"Završi",inWork:"U toku",planned:"Planirano"},update:{caption:"Učestalost održavanja i ažuriraranja",continual:"Kontinuirano",daily:"Dnevno",weekly:"Sedmično",monthly:"Mesečno",annually:"Godišnje",unknown:"Nepoznato",asNeeded:"Po potrebi",irregular:"Neredovno",nonePlanned:"Nijedno nije planirano"}},spdom:{caption:"Obuhvat",bounding:{caption:"Granične koordinate",westbc:"Zapadna granična geografska dužina",eastbc:"Istočna granična geografska dužina",northbc:"Severna granična geografska širina",southbc:"Južna granična geografska širina"}},keywords:{caption:"Ključne reči",theme:"Tema",place:"Mesto",stratum:"Sloj",temporal:"Vremenski",thesaursus:"Povezani tezaurus",delimited:"Ključne reči",themektIsoTopicCategory:"ISO tema...",themektIsoTopicDialog:"ISO tema",placektGnis:"Informacioni sistem geografskih imena"},accconst:"Ograničenja pristupa",useconst:"Ograničenja upotrebe",ptcontac:"Tačka kontakta za resurs",browse:{caption:"Pretraži grafiku",browsen:"Pretraži URL grafike",browsed:"Pretraži opis grafičke datoteke",browset:"Pretraži tip grafičke datoteke"},datacred:"Kredit skupa podataka",secinfo:{caption:"Bezbednosne informacije",secsys:"Sistem klasifikacije bezbednosti",secclass:{caption:"Klasifikacija bezbednosti",topSecret:"Strogo poverljiva tajna",secret:"Tajna",confidential:"Osetljivo",restricted:"Ograničeno",unclassified:"Neklasifikovano",sensitive:"Osetljivo"},sechandl:"Opis rukovanja bezbednošću"},sNative:"Izvorno okruženje skupa podataka",crossref:"Unakrsna referenca"},metadata:{idinfo:"Identifikacija",dataqual:"Kvalitet",spdoinfo:"Organizacija prostornih podataka",spref:"Prostorna referenca",eainfo:"Entitet i atribut",distinfo:"Distribucija",metainfo:"Metapodaci"},metainfo:{caption:"Informacije o metapodacima",section:{dates:"Datumi metapodataka",contact:"Kontakt metapodataka",standard:"Standard metapodataka",additional:"Dodatno"},metd:"Datum metapodataka",metrd:"Datum pregleda metapodataka",metfrd:"Datum budućeg pregleda metapodataka",metstdn:"Standardno ime metapodataka",metstdv:"Standardna verzija metapodataka",metac:"Ograničenja pristupa metapodacima",metuc:"Ograničenja upotrebe metapodataka",metsi:{caption:"Bezbednosne informacije o metapodacima",metscs:"Sistem klasifikacije bezbednosti metapodataka",metsc:"Klasifikacija bezbednosti metapodataka",metshd:"Opis rukovanja bezbednošću metapodataka"}},spref:{caption:"Informacije o prostornoj referenci",horizsys:{caption:"Horizontalni koordinatni sistem",geograph:{caption:"Geografski",latres:"Rezolucija geografske širine",longres:"Rezolucija geografske dužine",geogunit:{caption:"Geografske koordinatne jedinice",decimalDegrees:"Decimalni stepeni",decimalMinutes:"Decimalne minute",decimalSeconds:"Decimalne sekunde",degreesAndDecimalMinutes:"Stepeni i decimalne minute",degreesMinutesAndDecimalSeconds:"Stepeni, minute i decimalne sekunde",radians:"Radijani",grads:"Gradijani"}},planar:{caption:"Planarno"},local:{caption:"Lokalno",localdes:"Lokalni opis",localgeo:"Informacije o lokalnoj georeferenci"},geodetic:{caption:"Geodetski model",horizdn:{caption:"Ime horizontalnog datuma",nad83:"North American Datum of 1983",nad27:"North American Datum of 1927"},ellips:{caption:"Ime elipsoida",grs80:"Geodetic Reference System 80",clarke1866:"Clarke 1866"},semiaxis:"Velika poluosa",denflat:"Denominator odnosa elipticiteta"}},vertdef:{caption:"Vertikalni koordinatni sistem",altsys:{caption:"Sistem nadmorske visine",altdatum:{caption:"Ime datuma nadmorske visine",navd88:"North American Vertical Datum of 1988",ngvd29:"National Geodetic Vertical Datum of 1929"},altres:"Rezolucija nadmorske visine",altunits:{caption:"Jedinice rastojanja nadmorske visine",meters:"Metri",feet:"Stope"},altenc:{caption:"Metod kodiranja nadmorske visine",explicit:"Izričita koordinata elevacije obuhvaćena horizontalnim koordinatama",implicit:"Implicitna koordinata",attribute:"Vrednosti atributa"}},depthsys:{caption:"Sistem dubine",depthdn:{caption:"Ime datuma dubine",option1:"Lokalna površ",option2:"Datum mape; datum redukcije zvuka",option3:"Najniža astronomska plima i oseka",option4:"Najviša astronomska plima i oseka",option5:"Prosečni nivo niske vode",option6:"Prosečni nivo visoke vode",option7:"Prosečni nivo mora",option8:"Geodetski datum",option9:"Prosečni nivo prolećne niske vode",option10:"Prosečni nivo prolećne visoke vode",option11:"Prosečni nivo kvadraturne niske vode",option12:"Prosečni nivo kvadraturne visoke vode",option13:"Prosečni nivo niže niske vode",option14:"Prosečni nivo niže prolećne niske vode",option15:"Prosečni nivo više visoke vode",option16:"Prosečni nivo više niske vode",option17:"Prosečni nivo niže visoke vode",option18:"Prolećna plima",option19:"Tropska niža niska voda",option20:"Kvadraturna plima",option21:"Visoka voda",option22:"Viša visoka voda",option23:"Niska voda",option24:"Datum niske vode",option25:"Najniža niska voda",option26:"Niža niska voda",option27:"Najniža normalna niska voda",option28:"Prosečni nivo plime",option29:"Niska voda indijanskog proleća",option30:"Najviši stepen visoke vode",option31:"Najveća niska voda",option32:"Kolumbijski rečni datum",option33:"Datum niske vode obale zaliva",option34:"Ekvatorijalna prolećna niska voda",option35:"Približna najniža astronomska plima i oseka",option36:"Bez korekcije"},depthres:"Rezolucija dubine",depthdu:{caption:"Jedinice rastojanja dubine",meters:"Metri",feet:"Stope"},depthem:{caption:"Metod kodiranja dubine",explicit:"Izričita koordinata dubine obuhvaćena horizontalnim koordinatama",implicit:"Implicitna koordinata",attribute:"Vrednosti atributa"}}}},timeinfo:{caption:"Informacije o vremenskom periodu",sngdate:"Jedan datum",mdattim:"Više datuma",rngdates:"Opseg datuma",caldate:"Datum",time:"Vreme",begdate:"Datum početka",begtime:"Vreme početka",enddate:"Datum završetka",endtime:"Vreme završetka"}});