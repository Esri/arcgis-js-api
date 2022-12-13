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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Brak",notComplete:"Niekompletne",other:"Inne",present:"Obecny",unknown:"Nieznane",unpublishedMaterial:"Materiał nieopublikowany"},hints:{integerGreaterThanOne:"(wprowadź liczbę całkowitą > 1)",integer0To100:"(wprowadź liczbę całkowitą 0–100)"},citeinfo:{caption:"Informacja o przytoczeniu",origin:"Twórca",pubdate:"Data publikacji",pubtime:"Czas publikacji",title:"Tytuł",edition:"Edycja",geoform:{caption:"Formularz prezentacji danych geoprzestrzennych",atlas:"Atlas",audio:"Dźwięk",diagram:"Diagram",sDocument:"Dokument",globe:"Glob",map:"Mapa",model:"Model",multiMediaPresentation:"Prezentacja multimedialna",profile:"Profil",rasterDigitalData:"Rastrowe dane cyfrowe",remoteSensingImage:"Obraz teledetekcji",section:"Sekcja",spreadsheet:"Arkusz kalkulacyjny",tabularDigitalData:"Tabularyczne dane cyfrowe",vectorDigitalData:"Wektorowe dane cyfrowe",video:"Wideo",view:"Wyświetl"},serinfo:{caption:"Informacje o serii",sername:"Nazwa serii",issue:"Identyfikacja wydania"},pubinfo:{caption:"Informacje o publikacji",pubplace:"Miejsce publikacji",publish:"Publikujący"},othercit:"Inne szczegóły przytoczenia",onlink:"Łącze online (URL)"},cntinfo:{caption:"Dane kontaktowe",section:{primary:"Pierwotne",phoneAndEmail:"Telefon i e-mail",hoursAndInstructions:"Godziny otwarcia i instrukcje"},cntorgp:{caption:"Według instytucji",cntorg:"Instytucja",cntper:"Użytkownik"},cntperp:{caption:"Według użytkownika",cntper:"Użytkownik",cntorg:"Instytucja"},cntpos:"Położenie",cntaddr:{caption:"Adres",addrtype:{caption:"Rodzaj adresu",mailing:"Wysyłkowy",physical:"Fizyczny",mailingAndPhysical:"Wysyłkowy i fizyczny"},address:"Adres",city:"Miasto",state:"Województwo/stan",postal:"Kod pocztowy",country:"Kraj"},cntvoice:"Poczta głosowa",cnttdd:"Telefon TDD/TTY (słabe słyszenie)",cntfax:"Faks",cntemail:"Adres e-mail",hours:"Godziny",cntinst:"Instrukcje"},dataqual:{caption:"Informacje o jakości danych",section:{attributeAccuracy:"Dokładność atrybutów",logicalConsistency:"Zgodność logiczna",completeness:"Kompletność",positionalAccuracy:"Dokładność pozycyjna",lineage:"Pochodzenie",cloudCover:"Zachmurzenie"},attracc:{caption:"Dokładność atrybutów",attraccr:"Raport dokładności atrybutów",qattracc:{caption:"Ocena dokładności atrybutów ilościowych",attraccv:"Wartość dokładności atrybutów",attracce:"Objaśnienie dokładności atrybutów"}},logic:"Raport zgodności logicznej",complete:"Raport kompletności",posacc:"Dokładność pozycyjna",horizpa:{caption:"Dokładność pozycyjna pozioma",horizpar:"Raport dokładności pozycyjnej poziomej",qhorizpa:{caption:"Ocena ilościowa dokładności pozycyjnej poziomej",horizpav:"Wartość dokładności pozycyjnej poziomej",horizpae:"Objaśnienie wartości dokładności pozycyjnej poziomej"}},vertacc:{caption:"Dokładność pozycyjna pionowa",vertaccr:"Raport dokładności pozycyjnej pionowej",qvertpa:{caption:"Ocena ilościowa dokładności pozycyjnej pionowej",vertaccv:"Wartość dokładności pozycyjnej pionowej",vertacce:"Objaśnienie dokładności pozycyjnej pionowej"}},lineage:{caption:"Pochodzenie"},srcinfo:{caption:"Informacja źródłowa",srccite:"Przytoczenie źródeł",srcscale:"Denominator skali źródłowej",typesrc:{caption:"Typ nośnika źródłowego",paper:"Papier",stableBaseMaterial:"Materiał o stabilnej bazie",microfiche:"Mikrofisza",microfilm:"Mikrofilm",audiocassette:"Kaseta audio",chart:"Wykres",filmstrip:"Taśma",transparency:"Przezroczystość",videocassette:"Kaseta wideo",videodisc:"Dysk wideo",videotape:"Taśma wideo",physicalModel:"Model fizyczny",computerProgram:"Program komputerowy",disc:"Dysk",cartridgeTape:"Taśma do kartridża",magneticTape:"Taśma magnetofonowa",online:"Online",cdrom:"CD-ROM",electronicBulletinBoard:"Biuletyn elektroniczny",electronicMailSystem:"Elektroniczny system pocztowy"},srctime:"Okres czasowy źródła zawartości",srccurr:"Odniesienie aktualności źródła",srccitea:"Skrót przytoczenia źródeł",srccontr:"Wkład źródłowy"},procstep:{caption:"Etap procesu",procdesc:"Opis procesu",srcused:"Skrót przytoczenia wykorzystywanego przed źródła",procdate:"Data procesu",proctime:"Czas procesu",srcprod:"Skrót przytoczenia utworzonego ze źródeł",proccont:"Kontakt procesu"},cloud:"Zachmurzenie"},distinfo:{caption:"Informacja dystrybucyjna",section:{distributor:"Dystrybutor",description:"Opis",orderProcess:"Proces zamawiania",prerequisites:"Wstępne wymagania",availability:"Dostępność"},distrib:"Dystrybutor",resdesc:{caption:"Opis zasobu",liveData:"Dane i mapy w czasie rzeczywistym",downloadableData:"Dane do pobrania",offlineData:"Dane offline",staticMapImages:"Statyczne obrazy mapy",sDocument:"Inne dokumenty",application:"Aplikacje",geographicService:"Usługi geograficzne",clearingHouse:"Centra informacyjne",mapFiles:"Pliki map",geographicActivies:"Aktywności geograficzne"},distliab:"Oświadczenie o odpowiedzialności dystrybucyjnej",custom:"Proces zamówień niestandardowych",techpreq:"Warunki techniczne",availabl:"Dostępność"},eainfo:{caption:"Informacja o atrybucie i obiekcie",overview:"Ogólny opis",eaover:"Ogólny opis atrybutu i obiektu",eadetcit:"Przytoczenie szczegółów określających obiekty i atrybuty"},idinfo:{caption:"Informacja identyfikacyjna",section:{timeAndStatus:"Czas i status",constraints:"Ograniczenia",contact:"Kontakt",additional:"Dodatkowe"},citeinfo:"Przytoczenie",descript:{caption:"Opis",sAbstract:"Streszczenie",purpose:"Cel",supplinf:"Informacje dodatkowe"},timeperd:{caption:"Okres czasowy zawartości",current:{caption:"Odniesienie aktualności",groundCondition:"Warunki terenowe",publicationDate:"Data publikacji"}},status:{caption:"Status",progress:{caption:"Postęp",complete:"Gotowe",inWork:"W toku",planned:"Planowane"},update:{caption:"Częstotliwość aktualizacji i konserwacji",continual:"Stale",daily:"Codziennie",weekly:"Co tydzień",monthly:"Co miesiąc",annually:"Co rok",unknown:"Nieznane",asNeeded:"Według potrzeb",irregular:"Nieregularnie",nonePlanned:"Brak zaplanowanych"}},spdom:{caption:"Zasięg",bounding:{caption:"Współrzędne graniczne",westbc:"Graniczna długość geograficzna zachodnia",eastbc:"Graniczna długość geograficzna wschodnia",northbc:"Graniczna szerokość geograficzna północna",southbc:"Graniczna szerokość geograficzna południowa"}},keywords:{caption:"Słowa kluczowe",theme:"Motyw",place:"Miejsce",stratum:"Warstwa",temporal:"Tymczasowa",thesaursus:"Powiązany słownik",delimited:"Słowa kluczowe",themektIsoTopicCategory:"Temat ISO...",themektIsoTopicDialog:"Temat ISO",placektGnis:"System informacyjny nazw geograficznych"},accconst:"Ograniczenia dostępu",useconst:"Używaj ograniczeń",ptcontac:"Punkt kontaktowy dla zasobu",browse:{caption:"Przeglądaj grafiki",browsen:"Przeglądaj adresy URL grafik",browsed:"Przeglądaj opis plików graficznych",browset:"Przeglądaj typ plików graficznych"},datacred:"Kredyt zbioru danych",secinfo:{caption:"Informacja o bezpieczeństwie",secsys:"System klasyfikacji bezpieczeństwa",secclass:{caption:"Klasyfikacja bezpieczeństwa",topSecret:"Ściśle tajne",secret:"Tajne",confidential:"Poufne",restricted:"Ograniczone",unclassified:"Niesklasyfikowane",sensitive:"Poufne"},sechandl:"Opis obsługi bezpieczeństwa"},sNative:"Środowisko natywnego zbioru danych",crossref:"Odniesienie krzyżowe"},metadata:{idinfo:"Identyfikacja",dataqual:"Jakość",spdoinfo:"Organizacja danych przestrzennych",spref:"Odniesienie przestrzenne",eainfo:"Obiekt i atrybut",distinfo:"Dystrybucja",metainfo:"Metadane"},metainfo:{caption:"Informacja o metadanych",section:{dates:"Daty metadanych",contact:"Kontakt metadanych",standard:"Standard metadanych",additional:"Dodatkowe"},metd:"Data metadanych",metrd:"Data weryfikacji metadanych",metfrd:"Przyszła data weryfikacji metadanych",metstdn:"Standardowa nazwa metadanych",metstdv:"Standardowa wersja metadanych",metac:"Ograniczenia dostępu do metadanych",metuc:"Ograniczenia użycia metadanych",metsi:{caption:"Informacja o bezpieczeństwie metadanych",metscs:"System klasyfikacji bezpieczeństwa metadanych",metsc:"Klasyfikacja bezpieczeństwa metadanych",metshd:"Opis obsługi bezpieczeństwa metadanych"}},spref:{caption:"Informacja o odniesieniu przestrzennym",horizsys:{caption:"Poziomy układ współrzędnych",geograph:{caption:"Geograficzne",latres:"Dokładność szerokości geograficznej",longres:"Dokładność długości geograficznej",geogunit:{caption:"Jednostki współrzędnych geograficznych",decimalDegrees:"Stopnie dziesiętne",decimalMinutes:"Minuty dziesiętne",decimalSeconds:"Sekundy dziesiętne",degreesAndDecimalMinutes:"Stopnie i minuty dziesiętne",degreesMinutesAndDecimalSeconds:"Stopnie, minuty i sekundy dziesiętne",radians:"Radiany",grads:"Stopnie"}},planar:{caption:"Płaskie"},local:{caption:"Lokalne",localdes:"Opis lokalny",localgeo:"Informacja o geoodniesieniu lokalnym"},geodetic:{caption:"Model geodezyjny",horizdn:{caption:"Nazwa poziomego układu odniesienia",nad83:"Północnoamerykański układ odniesienia z 1983 roku",nad27:"Północnoamerykański układ odniesienia z 1927 roku"},ellips:{caption:"Nazwa elipsoidy",grs80:"Geodezyjny system referencyjny 80",clarke1866:"Clarke 1866"},semiaxis:"Duża półoś elipsy",denflat:"Denominator współczynnika spłaszczenia"}},vertdef:{caption:"Pionowy układ współrzędnych",altsys:{caption:"Układ wysokości",altdatum:{caption:"Nazwa układu odniesienia wysokości",navd88:"Północnoamerykański układ odniesienia pionowego z 1988 roku",ngvd29:"Krajowy geodezyjny układ odniesienia pionowego z 1929 roku"},altres:"Rozdzielczość wysokości",altunits:{caption:"Jednostki odległości wysokości",meters:"Metry",feet:"Stopy"},altenc:{caption:"Metoda kodowania wysokości",explicit:"Dokładna współrzędna wysokości ujęta we współrzędnych poziomych",implicit:"Domniemane współrzędne",attribute:"Wartości atrybutu"}},depthsys:{caption:"System głębokości",depthdn:{caption:"Nazwa układu odniesienia głębokości",option1:"Powierzchnia lokalna",option2:"Układ odniesienia diagramu; układ odniesienia dla redukcji dźwięków",option3:"Najniższy pływ astronomiczny",option4:"Najwyższy pływ astronomiczny",option5:"Średnia niska woda",option6:"Średnia wysoka woda",option7:"Średni poziom morza",option8:"Dane pomiarów geodezyjnych",option9:"Średnia niska woda syzygijna",option10:"Średnia wysoka woda syzygijna",option11:"Średnia niska woda kwadraturowa",option12:"Średnia wysoka woda kwadraturowa",option13:"Średnia niższa niska woda",option14:"Średnia niższa niska woda syzygijna",option15:"Średnia wyższa wysoka woda",option16:"Średnia wyższa niska woda",option17:"Średnia niższa wysoka woda",option18:"Pływ syzygijny",option19:"Tropikalna niższa niska woda",option20:"Pływ kwadraturowy",option21:"Wysoka woda",option22:"Wyższa wysoka woda",option23:"Niska woda",option24:"Układ odniesienia niskiej wody",option25:"Najniższa niska woda",option26:"Niższa niska woda",option27:"Najniższa normalna niska woda",option28:"Średni poziom pływów",option29:"Indyjski poziom niskiej wody",option30:"Pełna wysoka woda i ładunek",option31:"Pełna niska woda i ładunek",option32:"Układ odniesienia rzeki Kolumbia",option33:"Układ odniesienia niskiej wody wybrzeża zatokowego",option34:"Równikowy poziom niskiej wody",option35:"Średni najniższy pływ astronomiczny",option36:"Bez korekcji"},depthres:"Rozdzielczość głębokości",depthdu:{caption:"Jednostki odległości głębokości",meters:"Metry",feet:"Stopy"},depthem:{caption:"Metoda kodowania głębokości",explicit:"Dokładna współrzędna głębokości ujęta we współrzędnych poziomych",implicit:"Domniemane współrzędne",attribute:"Wartości atrybutu"}}}},timeinfo:{caption:"Informacja o okresie czasu",sngdate:"Pojedyncza data",mdattim:"Daty wielokrotne",rngdates:"Zakres dat",caldate:"Data",time:"Czas",begdate:"Data rozpoczęcia",begtime:"Godzina rozpoczęcia",enddate:"Data zakończenia",endtime:"Czas zakończenia"}});