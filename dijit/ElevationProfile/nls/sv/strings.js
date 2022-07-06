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

define({display:{elevationProfileTitle:"Profil för höjdkurva",showMe:"visa mig",selectLine:"<b>Markera</b> ett geoobjekt i kartan.",popupRequirement:"Obs! Geoobjektet måste finnas i ett lager där popupfönster har aktiverats.",digitizeDistanceMeasureTool:"Använd <b>Mät</b>-verktygen.",selectFeatureHelpUrl:"http://help.arcgis.com/sv/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/sv/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Hovra över eller peka på profilen för höjdkurvetabellen om du vill visa höjder och var de ligger på kartan.",directionLabel:"Profilriktning"},buttons:{measureLabel:"Mät",helpLabel:"Hjälp",profileForward:"Framåt",profileReverse:"Omvänt",flipProfileTitle:"Klicka för att vända profilriktning",aggregationShowLabel:"Visa aggregeringsinformation",aggregationHideLabel:"Dölj aggregeringsinformation",aggregateElevationGainForward:"Aggregera höjdvinst framåt",aggregateElevationLossForward:"Aggregera höjdförlust framåt",aggregateElevationGainReverse:"Aggregera höjdvinst bakåt",aggregateElevationLossReverse:"Aggregera höjdförlust bakåt"},chart:{title:"Profil för höjdkurva",demResolution:"DEM-upplösning",elevationTitleTemplate:"Höjd i {0}",distanceTitleTemplate:"Avstånd i {0}",gainLossTemplate:"Min:{min}   Max:{max}   Start:{start}   Slut:{end}   Ändring:{gainloss}"},errors:{MissingConstructorParameters:"Konstruerarparameter saknas.",InvalidConfiguration:"Ogiltig konfiguration.",UnableToProcessResults:"Det gick inte att bearbeta analysresultaten.",UnableToNormalizeGeometry:"Det gick inte att normalisera indatapolylinjegeometrin",NullGeometry:"Indatapolylinjegeometrin är null. Det går inte att uppdatera profilen",InvalidProfileResults:"ProfileChart.update(...) saknar parametern profileResults."}});