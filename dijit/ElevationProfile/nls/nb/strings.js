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

define({display:{elevationProfileTitle:"Høydeprofil",showMe:"vis meg",selectLine:"<b>Velg</b> et geoobjekt i kartet.",popupRequirement:"MERK: Geoobjektet må være i et lag som har oppsprettvinduer aktivert.",digitizeDistanceMeasureTool:"Bruk <b>Mål-</b>verktøyene.",selectFeatureHelpUrl:"http://help.arcgis.com/no/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/no/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Hold pekeren over eller pek på høydeprofildiagrammet for å vise høyder og lokasjon på kartet.",directionLabel:"Profilretning"},buttons:{measureLabel:"Mål",helpLabel:"Hjelp",profileForward:"Fremover",profileReverse:"Motsatt retning",flipProfileTitle:"Klikk for å vende profilretning",aggregationShowLabel:"Vis aggregeringsinformasjon",aggregationHideLabel:"Skjul aggregeringsinformasjon",aggregateElevationGainForward:"Aggreger høydestigning fremover",aggregateElevationLossForward:"Aggreger høydetap fremover",aggregateElevationGainReverse:"Aggreger høydestigning bakover",aggregateElevationLossReverse:"Aggreger høydetap bakover"},chart:{title:"Høydeprofil",demResolution:"DEM-oppløsning",elevationTitleTemplate:"Høyde i {0}",distanceTitleTemplate:"Avstand i {0}",gainLossTemplate:"Min:{min}   Maks:{max}   Start:{start}   Slutt:{end}   Endring:{gainloss}"},errors:{MissingConstructorParameters:"Mangler konstruksjonsparameter.",InvalidConfiguration:"Ugyldig konfigurasjon.",UnableToProcessResults:"Kan ikke behandle analyseresultatene.",UnableToNormalizeGeometry:"Kan ikke normalisere inndata-polylinjegeometri",NullGeometry:"Inndata-polylinjegeometerien er null. Kan ikke oppdatere profilen",InvalidProfileResults:'ProfileChart.update(...) mangler paramenteren "profileResults".'}});