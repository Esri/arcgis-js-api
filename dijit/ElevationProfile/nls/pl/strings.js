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

define({display:{elevationProfileTitle:"Profil wysokościowy",showMe:"pokaż mi",selectLine:"<b>Wybierz</b> obiekt na mapie.",popupRequirement:"UWAGA: obiekt musi znajdować się w warstwie z włączonymi oknami podręcznymi.",digitizeDistanceMeasureTool:"Użyj narzędzi <b>pomiarowych</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/pl/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/pl/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Naprowadź kursor na diagram profilu wzniesienia lub dotknij go, aby wyświetlić wzniesienia i lokalizację na mapie.",directionLabel:"Kierunek profilu"},buttons:{measureLabel:"Zmierz",helpLabel:"Pomoc",profileForward:"Do przodu",profileReverse:"Odwrotnie",flipProfileTitle:"Kliknij, aby odwrócić kierunek profilu",aggregationShowLabel:"Pokaż informacje o agregowaniu",aggregationHideLabel:"Ukryj informacje o agregowaniu",aggregateElevationGainForward:"Agreguj wzrost wysokości do przodu",aggregateElevationLossForward:"Agreguj spadek wysokości do przodu",aggregateElevationGainReverse:"Agreguj wzrost wysokości odwrotnie",aggregateElevationLossReverse:"Agreguj spadek wysokości odwrotnie"},chart:{title:"Profil wysokościowy",demResolution:"Rozdzielczość DEM",elevationTitleTemplate:"Wysokość w {0}",distanceTitleTemplate:"Odległość w {0}",gainLossTemplate:"Min.:{min}   Maks.:{max}   Początek:{start}   Koniec:{end}   Zmiana:{gainloss}"},errors:{MissingConstructorParameters:"Brak parametru konstrukcyjnego.",InvalidConfiguration:"Nieprawidłowa konfiguracja",UnableToProcessResults:"Nie można przetworzyć wyników analizy.",UnableToNormalizeGeometry:"Nie można znormalizować wejściowej geometrii poliliniowej",NullGeometry:"Wejściowa geometria poliliniowa ma wartość null. Nie można zaktualizować profilu",InvalidProfileResults:'W obiekcie ProfileChart.update(...) brakuje parametru "profileResults".'}});