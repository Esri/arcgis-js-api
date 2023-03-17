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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Profil nadmorskej výšky",showMe:"Ukáž mi",selectLine:"<b>Vybrať</b> prvok na mape.",popupRequirement:"POZNÁMKA: prvok musí byť vo vrstve s povolenými kontextovými oknami.",digitizeDistanceMeasureTool:"Použiť nástroje <b>merania</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Prejdite po alebo kliknite na graf profilu nadmorskej výšky pre zobrazenie nadmorských výšok a umiestnenia na mape.",directionLabel:"Smer profilu"},buttons:{measureLabel:"Zmerať",helpLabel:"Pomocník",profileForward:"Vpred",profileReverse:"Obrátiť",flipProfileTitle:"Kliknite pre obrátenie smeru profilu",aggregationShowLabel:"Zobraziť informácie o agregácii",aggregationHideLabel:"Skryť informácie o agregácii",aggregateElevationGainForward:"Agregovaný prírastok nadmorskej výšky od začiatku",aggregateElevationLossForward:"Agregovaný úbytok nadmorskej výšky od začiatku",aggregateElevationGainReverse:"Agregovaný prírastok nadmorskej výšky od konca",aggregateElevationLossReverse:"Agregovaný úbytok nadmorskej výšky od konca"},chart:{title:"Profil nadmorskej výšky",demResolution:"Rozlíšenie digitálneho výškového modelu (DEM)",elevationTitleTemplate:"Nadmorská výška v {0}",distanceTitleTemplate:"Vzdialenosť v {0}",gainLossTemplate:"Min:{min} Max:{max} Začiatok:{start} Koniec:{end} Zmena:{gainloss}"},errors:{MissingConstructorParameters:"Chýbajúci konštrukčný parameter",InvalidConfiguration:"Neplatná konfigurácia.",UnableToProcessResults:"Nie je možné spracovať výsledky analýzy.",UnableToNormalizeGeometry:"Nie je možné normalizovať vstupnú čiarovú geometriu",NullGeometry:"Vstupná čiarová geometria je prázdna. Nie je možné aktualizovať profil",InvalidProfileResults:"ProfileChart.update(...) chýba parameter 'profileResults'."}});