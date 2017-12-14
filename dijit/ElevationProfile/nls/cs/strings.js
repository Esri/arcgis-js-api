// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Výškový profil",showMe:"ukaž mi",selectLine:"<b>Vyberte</b> prvek v mapě.",popupRequirement:"POZNÁMKA: prvek se musí nacházet ve vrstvě s povolenými vyskakovacími okny.",digitizeDistanceMeasureTool:"Použijte nástroje <b>Měření</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Přesuňte ukazatel myši nad graf výškového profilu nebo se jej dotkněte pro zobrazení nadmořských výšek a umístění v mapě.",directionLabel:"Směr profilu"},buttons:{measureLabel:"Měření",helpLabel:"Nápověda",profileForward:"Dopředu",profileReverse:"Obrácený",flipProfileTitle:"Klikněte pro převrácení směru profilu",aggregationShowLabel:"Zobrazit informace seskupení",aggregationHideLabel:"Skrýt informace seskupení",aggregateElevationGainForward:"Seskupit zvýšení nadmořské výšky vpřed",aggregateElevationLossForward:"Seskupit snížení nadmořské výšky vpřed",aggregateElevationGainReverse:"Seskupit zvýšení nadmořské výšky zpět",aggregateElevationLossReverse:"Seskupit snížení nadmořské výšky zpět"},chart:{title:"Výškový profil",demResolution:"Rozlišení DEM",elevationTitleTemplate:"Nadmořská výška v {0}",distanceTitleTemplate:"Vzdálenost v {0}",gainLossTemplate:"Min:{min}   Max:{max}   Začátek:{start}   Konec:{end}   Změna:{gainloss}"},errors:{MissingConstructorParameters:"Chybí parametry konstruktoru.",InvalidConfiguration:"Neplatná konfigurace.",UnableToProcessResults:"Nelze zpracovat výsledky analýzy.",UnableToNormalizeGeometry:"Nelze normalizovat vstupní polyliniovou geometrii.",NullGeometry:"Vstupní polyliniová geometrie je prázdná. Nelze aktualizovat profil.",InvalidProfileResults:"V ProfileChart.update(…) chybí parametr 'profileResults'."}});