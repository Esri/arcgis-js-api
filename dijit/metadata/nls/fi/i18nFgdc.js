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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Ei mitään",notComplete:"Keskeneräinen",other:"Muu",present:"Paikalla",unknown:"Tuntematon",unpublishedMaterial:"Julkaisematonta materiaalia"},hints:{integerGreaterThanOne:"(kirjoita kokonaisluku, joka on suurempi kuin 1)",integer0To100:"(kirjoita kokonaisluku väliltä 0–100)"},citeinfo:{caption:"Viitetiedot",origin:"Tuottaja",pubdate:"Julkaisupäivämäärä",pubtime:"Julkaisuaika",title:"Otsikko",edition:"Versio",geoform:{caption:"Paikkatietoaineiston esityslomake",atlas:"Atlas",audio:"Audio",diagram:"Kaavio",sDocument:"Dokumentti",globe:"Maapallo",map:"Kartta",model:"Malli",multiMediaPresentation:"Multimediaesitys",profile:"Profiili",rasterDigitalData:"Digitaalinen rasteriaineisto",remoteSensingImage:"Kaukokartoituskuva",section:"Section",spreadsheet:"Laskentataulukko",tabularDigitalData:"Digitaalinen taulukkoaineisto",vectorDigitalData:"Digitaalinen vektoriaineisto",video:"Video",view:"Näytä"},serinfo:{caption:"Sarjan tiedot",sername:"Sarjan nimi",issue:"Ongelman tunnus"},pubinfo:{caption:"Julkaisutiedot",pubplace:"Julkaisupaikka",publish:"Julkaisija"},othercit:"Muut viitetiedot",onlink:"Online-linkitys (URL)"},cntinfo:{caption:"Yhteystiedot",section:{primary:"Ensisijainen",phoneAndEmail:"Puhelin ja sähköposti",hoursAndInstructions:"Tunnit ja ohjeet"},cntorgp:{caption:"Organisaation mukaan",cntorg:"Organisaatio",cntper:"Henkilö"},cntperp:{caption:"Henkilön mukaan",cntper:"Henkilö",cntorg:"Organisaatio"},cntpos:"Sijainti",cntaddr:{caption:"Osoite",addrtype:{caption:"Osoitetyyppi",mailing:"Postitus",physical:"Fyysinen",mailingAndPhysical:"Postitus ja fyysinen"},address:"Osoite",city:"kaupunki",state:"Osavaltio",postal:"Postinumero",country:"Maa"},cntvoice:"Ääni",cnttdd:"TDD/TTY-puhelin (kuulovammaiset)",cntfax:"Faksi",cntemail:"Sähköpostiosoite",hours:"Hours",cntinst:"Ohjeet"},dataqual:{caption:"Aineiston laatutiedot",section:{attributeAccuracy:"Ominaisuustiedon tarkkuus",logicalConsistency:"Looginen eheys",completeness:"Täydellisyys",positionalAccuracy:"Sijaintitarkkuus",lineage:"Alkuperä",cloudCover:"Pilvipeite"},attracc:{caption:"Ominaisuustiedon tarkkuus",attraccr:"Ominaisuustiedon tarkkuuden raportti",qattracc:{caption:"Kvantitatiivisen ominaisuustiedon tarkkuuden arviointi",attraccv:"Ominaisuustiedon tarkkuuden arvo",attracce:"Ominaisuustiedon tarkkuuden selitys"}},logic:"Loogisen eheyden raportti",complete:"Täydellisyysraportti",posacc:"Sijaintitarkkuus",horizpa:{caption:"Vaakasijaintitarkkuus",horizpar:"Vaakasijaintitarkkuuden raportti",qhorizpa:{caption:"Kvantitatiivisen vaakasuuntaisen sijainnin tarkkuuden arviointi",horizpav:"Vaakasijaintitarkkuuden arvo",horizpae:"Vaakasijaintitarkkuuden selitys"}},vertacc:{caption:"Pystysijaintitarkkuus",vertaccr:"Pystysijaintitarkkuuden raportti",qvertpa:{caption:"Kvantitatiivisen pystysuuntaisen sijainnin tarkkuuden arviointi",vertaccv:"Pystysijaintitarkkuuden arvo",vertacce:"Pystysijaintitarkkuuden selitys"}},lineage:{caption:"Alkuperä"},srcinfo:{caption:"Lähteen tiedot",srccite:"Lähteen viitetiedot",srcscale:"Lähdemittakaavan nimittäjä",typesrc:{caption:"Lähdemedian tyyppi",paper:"Paperi",stableBaseMaterial:"Kiinteä materiaali",microfiche:"Mikrokortti",microfilm:"Mikrofilmi",audiocassette:"Äänikasetti",chart:"Kaavio",filmstrip:"Kuvanauha",transparency:"Läpinäkyvyys",videocassette:"Videokasetti",videodisc:"Videolevy",videotape:"Videonauha",physicalModel:"Fyysinen malli",computerProgram:"Tietokoneohjelma",disc:"Levy",cartridgeTape:"Tulostusnauha",magneticTape:"Magneettinauha",online:"Verkossa",cdrom:"CD-ROM",electronicBulletinBoard:"Sähköinen ilmoitustaulu",electronicMailSystem:"Sähköpostijärjestelmä"},srctime:"Lähteen sisällön aikajakso",srccurr:"Lähteen ajankohtaisuusviite",srccitea:"Lähteen viitetietolyhenne",srccontr:"Lähteen toimittaja"},procstep:{caption:"Prosessin vaihe",procdesc:"Prosessin kuvaus",srcused:"Lähteen käyttämän viitetiedon lyhenne",procdate:"Prosessin päivämäärä",proctime:"Prosessiaika",srcprod:"Lähteen tuottaman viitetiedon lyhenne",proccont:"Prosessin yhteystaho"},cloud:"Pilvipeite"},distinfo:{caption:"Jakelutiedot",section:{distributor:"Jakelija",description:"Kuvaus",orderProcess:"Tilausprosessi",prerequisites:"Edellytykset",availability:"Saatavuus"},distrib:"Jakelija",resdesc:{caption:"Resurssin kuvaus",liveData:"Live-aineisto ja -kartat",downloadableData:"Ladattava aineisto",offlineData:"Offline-aineisto",staticMapImages:"Staattiset karttakuvat",sDocument:"Muut dokumentit",application:"Sovellukset",geographicService:"Maantieteelliset palvelut",clearingHouse:"Tietokeskukset",mapFiles:"Karttatiedostot",geographicActivies:"Maantieteelliset aktiviteetit"},distliab:"Jakeluvastuulauseke",custom:"Mukautettu tilausprosessi",techpreq:"Tekniset edellytykset",availabl:"Saatavuus"},eainfo:{caption:"Kokonaisuuden ja ominaisuustiedon tiedot",overview:"Yleisnäkymän kuvaus",eaover:"Kokonaisuuden ja ominaisuustietojen yleisnäkymä",eadetcit:"Kokonaisuus- ja ominaisuustietojen viitetiedot"},idinfo:{caption:"Tunnuksen tiedot",section:{timeAndStatus:"Aika ja tila",constraints:"Rajoitukset",contact:"Yhteyshenkilö",additional:"Lisä"},citeinfo:"Viitetiedot",descript:{caption:"Kuvaus",sAbstract:"Tiivistelmä",purpose:"Tarkoitus",supplinf:"Lisätiedot"},timeperd:{caption:"Sisällön aikajakso",current:{caption:"Ajankohtaisuusviite",groundCondition:"Perusehto",publicationDate:"Julkaisupäivämäärä"}},status:{caption:"Tila",progress:{caption:"Edistyminen",complete:"Täydellinen",inWork:"Työssä",planned:"Suunniteltu"},update:{caption:"Ylläpito- ja päivitystiheys",continual:"Jatkuva",daily:"Päivittäin",weekly:"Viikoittain",monthly:"Kuukausittain",annually:"Vuosittain",unknown:"Tuntematon",asNeeded:"Tarvittaessa",irregular:"Epäsäännöllisesti",nonePlanned:"Ei mitään suunniteltu"}},spdom:{caption:"Laajuus",bounding:{caption:"Rajaavat koordinaatit",westbc:"Länteen rajaava pituusaste",eastbc:"Itään rajaava pituusaste",northbc:"Pohjoiseen rajaava leveysaste",southbc:"Etelään rajaava leveysaste"}},keywords:{caption:"Avainsanat",theme:"Teema",place:"Place",stratum:"Kerrostuma",temporal:"Aika",thesaursus:"Liittyvä hakusanaluettelo",delimited:"Avainsanat",themektIsoTopicCategory:"ISO-aihe...",themektIsoTopicDialog:"ISO-aihe",placektGnis:"Maantieteellisten nimien tietojärjestelmä"},accconst:"Käyttörajoitukset",useconst:"Käyttörajoitukset",ptcontac:"Resurssin yhteystaho",browse:{caption:"Grafiikan selaus",browsen:"Grafiikan URL-osoitteen selaus",browsed:"Grafiikkatiedoston kuvauksen selaus",browset:"Grafiikkatiedoston tyypin selaus"},datacred:"Aineistoryhmän krediitti",secinfo:{caption:"Suojaustiedot",secsys:"Suojauksen luokitusjärjestelmä",secclass:{caption:"Suojauksen luokitus",topSecret:"Huippusalainen",secret:"Salainen",confidential:"Luottamuksellinen",restricted:"Rajoitettu",unclassified:"Luokittelematon",sensitive:"Arkaluonteinen"},sechandl:"Suojauksen käsittelyn kuvaus"},sNative:"Alkuperäinen aineistoryhmän ympäristö",crossref:"Ristiviite"},metadata:{idinfo:"Tunnus",dataqual:"Laatu",spdoinfo:"Paikkatiedon järjestäminen",spref:"Koordinaatistotieto",eainfo:"Kokonaisuus ja ominaisuustieto",distinfo:"Jakelu",metainfo:"Metatiedot"},metainfo:{caption:"Metadatan tiedot",section:{dates:"Metadatan päivämäärät",contact:"Metadatan yhteystiedot",standard:"Metadatastandardi",additional:"Lisä"},metd:"Metadatan päivämäärä",metrd:"Metadatan tarkistuspäivä",metfrd:"Metadatan tuleva tarkistuspäivä",metstdn:"Metadatastandardin nimi",metstdv:"Metadatastandardin versio",metac:"Metadata saatavuusrajoitukset",metuc:"Metadatan käyttörajoitukset",metsi:{caption:"Metadatan suojaustiedot",metscs:"Metadatan suojauksen luokitusjärjestelmä",metsc:"Metadatan suojausluokitus",metshd:"Metadatan suojauksen käsittelyn kuvaus"}},spref:{caption:"Sijaintiviitteen tiedot",horizsys:{caption:"Vaakakoordinaattijärjestelmä",geograph:{caption:"Maantieteellinen",latres:"Leveysasteen resoluutio",longres:"Pituusasteen resoluutio",geogunit:{caption:"Maantieteellisten koordinaattien yksiköt",decimalDegrees:"Desimaaliasteet",decimalMinutes:"Desimaaliminuutit",decimalSeconds:"Desimaalisekunnit",degreesAndDecimalMinutes:"Asteet ja desimaaliminuutit",degreesMinutesAndDecimalSeconds:"Asteet, minuutit ja desimaalisekunnit",radians:"Radiaanit",grads:"Asteet"}},planar:{caption:"Planaarinen"},local:{caption:"Paikallinen",localdes:"Paikallinen kuvaus",localgeo:"Paikallinen georeferointitieto"},geodetic:{caption:"Geodeettinen malli",horizdn:{caption:"Vaakadatumin nimi",nad83:"Pohjois-Amerikan datumi vuodelta 1983",nad27:"Pohjois-Amerikan datumi vuodelta 1927"},ellips:{caption:"Ellipsoidin nimi",grs80:"Geodeettinen viitejärjestelmä 80",clarke1866:"Clarke 1866"},semiaxis:"Isoakselin puolikas",denflat:"Litistyssuhteen osoittaja"}},vertdef:{caption:"Pystykoordinaattijärjestelmä",altsys:{caption:"Korkeusjärjestelmä",altdatum:{caption:"Korkeusdatumin nimi",navd88:"Pohjois-Amerikan korkeusdatumi vuodelta 1988",ngvd29:"Kansallinen geodeettinen korkeusdatumi vuodelta 1929"},altres:"Korkeuden resoluutio",altunits:{caption:"Korkeusetäisyyden yksiköt",meters:"Metriä",feet:"Jalka"},altenc:{caption:"Korkeuden koodausmenetelmä",explicit:"Vaakasuuntaisiin koordinaatteihin sisältyvä tarkka korkeustason koordinaatti",implicit:"Implisiittinen koordinaatti",attribute:"Ominaisuustietoarvot"}},depthsys:{caption:"Syvyysjärjestelmä",depthdn:{caption:"Syvyysdatumin nimi",option1:"Paikallinen pinta",option2:"Kaavion datumi; kaikuluotauksessa käytetty datumi",option3:"Alin tähtitieteellinen luode",option4:"Korkein tähtitieteellinen luode",option5:"Laskuveden keskiarvo",option6:"Nousuveden keskiarvo",option7:"Meriveden keskitaso",option8:"Maanmittausdatumi",option9:"Korkein laskuveden keskiarvo",option10:"Korkein nousuveden keskiarvo",option11:"Alhaisin laskuveden keskiarvo",option12:"Alhaisin nousuveden keskiarvo",option13:"Alhaisemman laskuveden keskiarvo",option14:"Alhaisemman laskuveden tulvan keskiarvo",option15:"Korkeamman nousuveden keskiarvo",option16:"Korkeamman laskuveden keskiarvo",option17:"Alhaisemman nousuveden keskiarvo",option18:"Tulvavuoksi",option19:"Trooppinen alhainen laskuvesi",option20:"Vajaavuoksi",option21:"Nousuvesi",option22:"Korkea nousuvesi",option23:"Laskuvesi",option24:"Laskuveden datumi",option25:"Alhaisin laskuvesi",option26:"Alhaisempi laskuvesi",option27:"Alhaisin normaali laskuvesi",option28:"Vuoroveden keskitaso",option29:"Intian tulvavuoksen laskuvesi",option30:"Nousuvesi, täysi",option31:"Laskuvesi, täysi",option32:"Kolumbia-joen datumi",option33:"Lahden rannikon laskuveden datumi",option34:"Päiväntasaajan korkein laskuvesi",option35:"Keskimääräinen alin tähtitieteellinen luode",option36:"Ei korjausta"},depthres:"Syvyyden resoluutio",depthdu:{caption:"Syvyyden etäisyysyksiköt",meters:"Metriä",feet:"Jalka"},depthem:{caption:"Syvyyden koodausmenetelmä",explicit:"Syvyyssuuntaisiin koordinaatteihin sisältyvä tarkka korkeustason koordinaatti",implicit:"Implisiittinen koordinaatti",attribute:"Ominaisuustietoarvot"}}}},timeinfo:{caption:"Aikajaksotiedot",sngdate:"Yksittäinen päivämäärä",mdattim:"Useita päivämääriä",rngdates:"Päivämääräalue",caldate:"Päivämäärä",time:"Kellonaika",begdate:"Alkupäivämäärä",begtime:"Alkukellonaika",enddate:"Lopetuspäivämäärä",endtime:"Lopetusaika"}});