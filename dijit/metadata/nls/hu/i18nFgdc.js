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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Nincs",notComplete:"Nincs kész",other:"Egyéb",present:"Jelen",unknown:"Ismeretlen",unpublishedMaterial:"Nem kiadott anyag"},hints:{integerGreaterThanOne:"(1-nél nagyobb integert adjon meg)",integer0To100:"(0 és 100 közötti integert adjon meg)"},citeinfo:{caption:"Forrás információk",origin:"Létrehozó",pubdate:"Közzétételi dátum",pubtime:"Közzétételi idő",title:"Cím",edition:"Kiadás",geoform:{caption:"Térinformatikai adatok bemutató űrlapja",atlas:"Atlasz",audio:"Hang",diagram:"Diagram",sDocument:"Dokumentum",globe:"Földgömb",map:"Térkép",model:"Modell",multiMediaPresentation:"Multimédiás bemutató",profile:"Profil",rasterDigitalData:"Raszteres digitális adatok",remoteSensingImage:"Távérzékelt felvétel",section:"Szekció",spreadsheet:"Táblázat",tabularDigitalData:"Táblázatos digitális adatok",vectorDigitalData:"Vektoros digitális adatok",video:"Videó",view:"Nézet"},serinfo:{caption:"Sorozatinformációk",sername:"Sorozat neve",issue:"Kiadásazonosító"},pubinfo:{caption:"Közzétételi információk",pubplace:"Közzététel helye",publish:"Publikáló"},othercit:"Egyéb közzétételi adatok",onlink:"Online hivatkozás (URL)"},cntinfo:{caption:"Elérhetőség",section:{primary:"Elsődleges",phoneAndEmail:"Telefon és e-mail",hoursAndInstructions:"Órák és utasítások"},cntorgp:{caption:"Szervezet szerint",cntorg:"Szervezet",cntper:"Személy"},cntperp:{caption:"Személyenként",cntper:"Személy",cntorg:"Szervezet"},cntpos:"Pozíció",cntaddr:{caption:"Cím",addrtype:{caption:"Cím típusa",mailing:"Levelezési",physical:"Fizikai",mailingAndPhysical:"Levelezési és postai"},address:"Cím",city:"Nagyváros",state:"Állam",postal:"Irányítószám",country:"Ország"},cntvoice:"Hang",cnttdd:"TDD/TTY telefon (halláskárosult)",cntfax:"Fax",cntemail:"E-mail-cím",hours:"Órák",cntinst:"Utasítások"},dataqual:{caption:"Adatminőségi információk",section:{attributeAccuracy:"Attribútumpontosság",logicalConsistency:"Logikai konzisztencia",completeness:"Teljesség",positionalAccuracy:"Pozíciópontosság",lineage:"Leszármazás",cloudCover:"Felhőtakaró"},attracc:{caption:"Attribútumpontosság",attraccr:"Attribútumpontossági jelentés",qattracc:{caption:"Kvantitatív attribútumpontossági értékelés",attraccv:"Attribútumpontossági érték",attracce:"Attribútumpontosság magyarázata"}},logic:"Logikai konzisztenciáról szóló jelentés",complete:"Teljességi jelentés",posacc:"Pozíciópontosság",horizpa:{caption:"Horizontális pontosság",horizpar:"Horizontális pontossági jelentés",qhorizpa:{caption:"Kvantitatív horizontális pontosságértékelés",horizpav:"Horizontális pontossági érték",horizpae:"Horizontális pontosság magyarázata"}},vertacc:{caption:"Magassági pontosság",vertaccr:"Magasságpontossági jelentés",qvertpa:{caption:"Kvantitatív magassági pontosságértékelés",vertaccv:"Magasságpontossági érték",vertacce:"Magassági pontosság magyarázata"}},lineage:{caption:"Leszármazás"},srcinfo:{caption:"Forrásadatok",srccite:"Forrás feltüntetése",srcscale:"Forrás méretarány-nevezője",typesrc:{caption:"Forrás adathordozó-típusa",paper:"Papír",stableBaseMaterial:"Stabil alapú anyag",microfiche:"Mikrofelvétel",microfilm:"Mikrofilm",audiocassette:"Hangkazetta",chart:"Diagram",filmstrip:"Diaszalag",transparency:"Átlátszóság",videocassette:"Videokazetta",videodisc:"Videolemez",videotape:"Videoszalag",physicalModel:"Fizikai modell",computerProgram:"Számítógépes program",disc:"Lemez",cartridgeTape:"Kazettás szalag",magneticTape:"Mágneses szalag",online:"Online",cdrom:"CD-ROM",electronicBulletinBoard:"Elektronikus hirdetőtábla",electronicMailSystem:"Elektronikus levelezőrendszer"},srctime:"Tartalom forrásidőszaka",srccurr:"Forrás aktualitási referenciája",srccitea:"Forrásfeltüntetés rövidítése",srccontr:"Forrás-hozzájárulás"},procstep:{caption:"Folyamatlépés",procdesc:"Folyamatleírás",srcused:"Forrásfelhasználás feltüntetésének rövidítése",procdate:"Folyamat dátuma",proctime:"Folyamat időtartama",srcprod:"Forráslétrehozás feltüntetésének rövidítése",proccont:"Folyamat-kapcsolattartó"},cloud:"Felhőtakaró"},distinfo:{caption:"Forgalmazási információk",section:{distributor:"Forgalmazó",description:"Leírás",orderProcess:"Rendelési folyamat",prerequisites:"Előfeltételek",availability:"Elérhetőség"},distrib:"Forgalmazó",resdesc:{caption:"Erőforrás leírása",liveData:"Valós idejű adatok és térképek",downloadableData:"Letölthető adatok",offlineData:"Offline adatok",staticMapImages:"Statikus térképek",sDocument:"Egyéb dokumentumok",application:"Alkalmazások",geographicService:"Helyspecifikus szolgáltatások",clearingHouse:"Elszámolóház",mapFiles:"Térképfájlok",geographicActivies:"Helyspecifikus tevékenységek"},distliab:"Forgalmazási felelősségi nyilatkozat",custom:"Egyéni rendelési folyamat",techpreq:"Műszaki előfeltételek",availabl:"Elérhetőség"},eainfo:{caption:"Entitás- és attribútuminformációk",overview:"Áttekintő leírás",eaover:"Entitás- és attribútumáttekintés",eadetcit:"Entitás- és attribútumrészletek feltüntetése"},idinfo:{caption:"Azonosítási információk",section:{timeAndStatus:"Idő és állapot",constraints:"Korlátozások",contact:"Kapcsolat",additional:"További"},citeinfo:"Idézet",descript:{caption:"Leírás",sAbstract:"Kivonat",purpose:"Cél",supplinf:"Kiegészítő információ"},timeperd:{caption:"Tartalom időszaka",current:{caption:"Aktualitási referencia",groundCondition:"Alapállapot",publicationDate:"Közzétételi dátum"}},status:{caption:"Státusz",progress:{caption:"Feldolgozás",complete:"Kész",inWork:"Dolgozik",planned:"Tervezett"},update:{caption:"Karbantartási és frissítési gyakoriság",continual:"Folytonos",daily:"Napi",weekly:"Heti",monthly:"Havi",annually:"Éves",unknown:"Ismeretlen",asNeeded:"Szükség szerint",irregular:"Szabálytalan",nonePlanned:"Nincs tervezve"}},spdom:{caption:"Kiterjedés",bounding:{caption:"Határoló koordináták",westbc:"Nyugati határoló hosszúság",eastbc:"Keleti határoló hosszúság",northbc:"Északi határoló szélesség",southbc:"Déli határoló szélesség"}},keywords:{caption:"Kulcsszavak",theme:"Téma",place:"Hely",stratum:"Geológiai réteg",temporal:"Időbeli",thesaursus:"Kapcsolódó lexikon",delimited:"Kulcsszavak",themektIsoTopicCategory:"ISO téma...",themektIsoTopicDialog:"ISO téma",placektGnis:"Földrajzi nevek információs rendszere"},accconst:"Hozzáférési korlátozások",useconst:"Használati korlátozások",ptcontac:"Kapcsolattartó pont az erőforráshoz",browse:{caption:"Grafika keresése",browsen:"Grafika URL-jének keresése",browsed:"Grafikai fájl leírásának keresése",browset:"Grafikai fájltípus keresése"},datacred:"Adatkészlet készítője",secinfo:{caption:"Biztonsági információk",secsys:"Biztonsági osztályozási rendszer",secclass:{caption:"Biztonsági besorolás",topSecret:"Szigorúan bizalmas",secret:"Titkos",confidential:"Bizalmas",restricted:"Korlátozott",unclassified:"Osztályozatlan",sensitive:"Érzékeny"},sechandl:"Biztonságkezelési leírás"},sNative:"Natív adatkészlet-környezet",crossref:"Kereszthivatkozás"},metadata:{idinfo:"Azonosítás",dataqual:"Minőség",spdoinfo:"Térbeli adatok felépítése",spref:"Koordináta-rendszer",eainfo:"Entitás- és attribútum",distinfo:"Eloszlás",metainfo:"Metaadatok"},metainfo:{caption:"Metaadat-információk",section:{dates:"Metaadat-dátumok",contact:"Metaadat-kapcsolattartó",standard:"Metaadat-szabvány",additional:"További"},metd:"Metaadatok dátuma",metrd:"Metaadatok ellenőrzési dátuma",metfrd:"Metaadatok jövőbeli ellenőrzési dátuma",metstdn:"Metaadat-szabvány neve",metstdv:"Metaadat-szabvány verziója",metac:"Metaadat-hozzáférési korlátozások",metuc:"Metaadat-használati korlátozások",metsi:{caption:"Metaadat-biztonsági információk",metscs:"Metaadat-biztonság osztályozási rendszere",metsc:"Metaadat-biztonsági besorolás",metshd:"Metaadat-biztonság kezelési leírása"}},spref:{caption:"Koordinátarendszer-információk",horizsys:{caption:"Horizontális koordináta-rendszer",geograph:{caption:"Földrajzi",latres:"Szélességi felbontás",longres:"Hosszúsági felbontás",geogunit:{caption:"Földrajzi koordináta mértékegységek",decimalDegrees:"Tized fok",decimalMinutes:"Tized perc",decimalSeconds:"Tized fokmásodperc",degreesAndDecimalMinutes:"Fokok és tized fokpercek",degreesMinutesAndDecimalSeconds:"Fokok, percek és tized fokmásodpercek",radians:"Radián",grads:"Újfok"}},planar:{caption:"Síkbeli"},local:{caption:"Helyi",localdes:"Helyi leírás",localgeo:"Helyi georeferencia-információ"},geodetic:{caption:"Geodéziai modell",horizdn:{caption:"Horizontális geodéziai dátum neve",nad83:"1983-as észak-amerikai dátum",nad27:"1927-es észak-amerikai dátum"},ellips:{caption:"Ellipszoid neve",grs80:"Geodéziai referenciarendszer 80",clarke1866:"Clarke 1866"},semiaxis:"Fél nagytengely",denflat:"Lapítási arány nevezője"}},vertdef:{caption:"Függőleges vonatkoztatási-rendszer",altsys:{caption:"Magasságrendszer",altdatum:{caption:"Magassági dátum neve",navd88:"1988-as észak-amerikai vertikális dátum",ngvd29:"1929-es nemzeti vertikális dátum"},altres:"Magassági felbontás",altunits:{caption:"Magasság távolság-mértékegysége",meters:"méter",feet:"láb"},altenc:{caption:"Magasságkódolási módszer",explicit:"Pontos magassági koordináta a horizontális koordinátákkal együtt",implicit:"Implicit koordináta",attribute:"Attribútumértékek"}},depthsys:{caption:"Mélységrendszer",depthdn:{caption:"Mélységi dátum neve",option1:"Helyi felszín",option2:"Mélységábrázolási dátum; hangzáscsökkenés dátuma",option3:"Legalacsonyabb apály",option4:"Legmagasabb csillagászati dagály",option5:"Átlagos apály",option6:"Átlagos magas vízszint",option7:"Átlagos tengerszint",option8:"Földmérési dátum",option9:"Szökőári apály átlagos szintje",option10:"Szökőári dagály átlagos szintje",option11:"Vakári apály átlagos szintje",option12:"Vakári dagály közepes szintje",option13:"Alacsonyabb apály átlagszint",option14:"Szökőári alacsonyabb apály átlagszint",option15:"Magasabb dagály átlagszint",option16:"Magasabb apály átlagszint",option17:"Alacsonyabb dagály átlagszint",option18:"Szökőár",option19:"Trópusi alacsonyabb apály",option20:"Vakár",option21:"magas víz",option22:"Magasabb dagály",option23:"Apály",option24:"Normál apályszint",option25:"Legalacsonyabb vízszint",option26:"Átlagosnál alacsonyabb vízszint",option27:"Legalacsonyabb normál vízszint",option28:"Átlagos árapályszint",option29:"Indiai-óceáni szökőári apály",option30:"Dagály telihold és újhold után",option31:"Apályszint szökőárt követően",option32:"CRD",option33:"GCLWD",option34:"Egyenlitői apálymagasság szökőár napján",option35:"Hozzávetőleges legalacsonyabb ​​apályszint",option36:"Nincs korrekció"},depthres:"Mélységfelbontás",depthdu:{caption:"Mélység távolság-mértékegysége",meters:"méter",feet:"láb"},depthem:{caption:"Mélységkódolási módszer",explicit:"Pontos mélységi koordináta a horizontális koordinátákkal együtt",implicit:"Implicit koordináta",attribute:"Attribútumértékek"}}}},timeinfo:{caption:"Időszakra vonatkozó információ",sngdate:"Egy dátum",mdattim:"Több dátum",rngdates:"Dátumtartomány",caldate:"Dátum",time:"Időpont",begdate:"Kezdő dátum",begtime:"Kezdő időpont",enddate:"Záró dátum",endtime:"Záró időpont"}});