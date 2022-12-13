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

define({general:{cancel:"Zrušiť",close:"Zatvoriť",none:"Žiadne",ok:"OK",other:"Iné",stamp:"Pečiatka",now:"Teraz",choose:"Vyberte jeden:"},editor:{noMetadata:"Pre túto položku nie sú žiadne metaúdaje.",xmlViewOnly:"Editor nepodporuje typ metúdajov priradených k tejto položke. Metaúdaje musia byť vo formáte ArcGIS.",editorDialog:{caption:"Metaúdaje",captionPattern:"Metaúdaje pre {title}"},primaryToolbar:{view:"Zobrazenie",viewXml:"Zobrazenie XML",edit:"Editovať",initializing:"Načítava sa...",startingEditor:"Spúšťa sa editor...",loadingDocument:"Načítava sa dokument...",updatingDocument:"Akutalizuje sa dokument...",generatingView:"Generuje sa zobrazenie...",errors:{errorGeneratingView:"Pri generovaní zobrazenia sa vyskytla chyba.",errorLoadingDocument:"Pri načítavaní dokumentu sa vyskytla chyba."}},changesNotSaved:{prompt:"Váš dokument obsahuje zmeny, ktoré neboli uložené.",dialogTitle:"Zatvoriť editor metaúdajov",closeButton:"Zatvoriť"},download:{caption:"Stiahnuť",dialogTitle:"Stiahnuť",prompt:"Pre stiahnutie vášho súboru kliknite sem."},load:{caption:"Otvoriť",dialogTitle:"Otvoriť",typeTab:"Nový dokument",fileTab:"Otvoriť súbor",templateTab:"Šablóna",itemTab:"Vaša položka",filePrompt:"Vyberte lokálny súbor ArcGIS Metadata XML. Metaúdaje musia byť vo formáte ArcGIS.",templatePrompt:"Vytvoriť metaúdaje",pullItem:"Vyplniť metaúdaje s podrobnosťami položky.",importWarning:"Vybraný súbor sa nezobrazuje vo formáte ArcGIS. Aktualizované metaúdaje musia byť vo formáte ArcGIS.",loading:"Načítava sa...",noMetadata:"Metaúdaje môžu byť pre túto položku vytvorené vybratím jednej z nasledujúcich možností.",unrecognizedMetadata:"Editor nepodporuje typ metaúdajov priradených k tejto položke. Podporované metaúdaje môžu byť vytvorené vybratím jednej z nasledujúcich možností.",errorLoading:"Pri načítavaní sa vyskytla chyba.",warnings:{badFile:"Vybraný súbor nemohol byť načítaný.",notAnXml:"Vybraný súbor nie je XML súbor.",notSupported:"Tento typ súboru nie je podporovaný."},portalCaption:"Prepísať"},save:{caption:"Uložiť",dialogTitle:"Uložiť metaúdaje",working:"Ukladajú sa metaúdaje...",errorSaving:"Vyskytla sa chyba, vaše metaúdaje neboli uložené.",saveDialog:{pushCaption:"Aplikovať zmeny na vašu položku"}},saveAndClose:{caption:"Uložiť a zatvoriť"},saveDraft:{caption:"Stiahnuť",dialogTitle:"Stiahnuť"},validate:{caption:"Overiť",dialogTitle:"Overenie",docIsValid:"Váš dokument je platný."},viewHtml:{caption:"Zobrazenie",dialogTitle:"Zobraziť metaúdaje",savePrompt:"Váš dokument má neuložené zmeny. Ak chcete vidieť zmeny pri zobrazovaní metaúdajov, musíte ich uložiť.",saveButton:"Uložiť a zobraziť",portalNone:"Metaúdaje založené na štandardoch neboli vytvorené. Najprv musíte uložiť zmeny, aby ste mohli zobraziť metaúdaje."},del:{caption:"Odstrániť",dialogTitle:"Odstrániť metaúdaje",prompt:"Ste si istí, že chcete odstrániť tieto metaúdaje?",working:"Metaúdaje sa odstraňujú...",errorDeleting:"Vyskytla sa chyba, vaše metaúdaje neboli odstránené.",portalNone:"Nie je dostupný žiadny dokument metaúdajov na odstránenie. Metaúdaje založené na štandardoch neboli vytvorené.",portalPrompt:"Toto odstráni dokument metaúdajov a obnoví metaúdaje tejto položky na informácie položky ako Názov, Popis, atď.",portalPrompt2:"Toto odstráni metaúdaje založené na štandardoch. Ste si istí, že chcete odstrániť tieto metaúdaje?",portalButton:"Odstrániť a zatvoriť"},transform:{caption:"Transformovať",dialogTitle:"Transformovať do",prompt:"",working:"Transformuje sa...",errorTransforming:"Pri transformácii vášho dokumentu sa vyskytla chyba."},errorDialog:{dialogTitle:"Vyskytla sa chyba"}},arcgis:{portal:{metadataButton:{caption:"Metaúdaje"}}},calendar:{button:"Kalendár...",title:"Kalendár"},geoExtent:{button:"Nastaviť geografický rozsah...",title:"Geografický rozsah",navigate:"Navigovať",draw:"Nakresliť obdĺžnik",drawHint:"Stlačte pre štart a pustite pre dokončenie."},hints:{date:"(rrrr alebo rrrr-mm alebo rrrr-mm-dd)",dateTime:"(rrrr-mm-ddThh:mm:ss.ss[+-]hh:mm)",dateOrDateTime:"(rrrr alebo rrrr-mm alebo rrrr-mm-dd alebo rrrr-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(pre oddelenie použite čiarku alebo prejdite na nový riadok)",fgdcDate:"(rrrr alebo rrrr-mm alebo rrrr-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(zadajte celé číslo)",latitude:"(desatinné stupne)",longitude:"(desatinné stupne)",number:"(zadajte číslo)",numberGreaterThanZero:"(zadajte číslo > 0)"},isoTopicCategoryCode:{caption:"Kategória témy",boundaries:"Administratívne a politické hranice",farming:"Poľnohospodárstvo a pestovateľstvo",climatologyMeteorologyAtmosphere:"Atmosféra a klíma",biota:"Biológia a ekológia",economy:"Obchod a ekonomika",planningCadastre:"Kataster",society:"Kultúra, spoločnosť a demografia",elevation:"Nadmorská výška a odvodené produkty",environment:"Ochrana prírody a životného prostredia",structure:"Verejné zariadenia a stavby",geoscientificInformation:"Geológia a geofyzika",health:"Ľudské zdravie a choroby",imageryBaseMapsEarthCover:"Mapy s digitálnymi obrazovými snímkami a základné mapy",inlandWaters:"Vnútrozemské vodné zdroje",location:"Umiestnenia a geodetické siete",intelligenceMilitary:"Armáda",oceans:"Oceány a ústia",transportation:"Dopravné siete",utilitiesCommunication:"Úžitkové zariadenia a komunikácia"},multiplicity:{moveElementDown:"Presunúť časť dolu",moveElementUp:"Presunúť časť hore",removeElement:"Odstrániť časť",repeatElement:"Zopakovať časť"},optionalNode:{switchTip:"Zahrnúť alebo vylúčiť túto časť."},serviceTypes:{featureService:"Prvková služba",mapService:"Mapová služba",imageService:"Obrazová služba",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"OK",empty:"Vyžaduje sa hodnota.",date:"Hodnota musí byť dátum.",integer:"Hodnota musí byť celé číslo.",number:"Hodnota musí byť číslo.",other:"Neplatná hodnota."},validationPane:{clearMessages:"Vyčistiť správy",prompt:"(kliknite na každú správu nižšie a zadajte požadované informácie do určeného poľa)"}});