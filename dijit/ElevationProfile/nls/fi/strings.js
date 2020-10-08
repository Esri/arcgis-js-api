// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Korkeusprofiili",showMe:"näytä minut",selectLine:"<b>Valitse</b> kartan kohde.",popupRequirement:"HUOM.: kohteen on oltava karttatasossa, jossa ponnahdusikkunat ovat käytössä.",digitizeDistanceMeasureTool:"Käytä <b>Mittaus</b>-työkaluja.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Kosketa hiiren osoittimella korkeusprofiilikaaviota tai liikuta hiirtä sen päällä, niin saat esiin korkeustason ja sijainnin kartalla.",directionLabel:"Profiilin suunta"},buttons:{measureLabel:"Mittaus",helpLabel:"Ohje",profileForward:"Eteenpäin",profileReverse:"Käänteinen",flipProfileTitle:"Käännä profiilin suunta napsauttamalla",aggregationShowLabel:"Näytä koostetiedot",aggregationHideLabel:"Piilosta koostetiedot",aggregateElevationGainForward:"Koosta nousutiedot eteenpäin",aggregateElevationLossForward:"Koosta laskutiedot eteenpäin",aggregateElevationGainReverse:"Koosta nousutiedot taaksepäin",aggregateElevationLossReverse:"Koosta laskutiedot taaksepäin"},chart:{title:"Korkeusprofiili",demResolution:"DEM-tarkkuus",elevationTitleTemplate:"Korkeustaso yksiköissä {0}",distanceTitleTemplate:"Etäisyys yksiköissä {0}",gainLossTemplate:"Min.:{min}   Maks.:{max}   Alku:{start}   Loppu:{end}   Muutos:{gainloss}"},errors:{MissingConstructorParameters:"Muodostusohjelman parametri puuttuu.",InvalidConfiguration:"Virheellinen kokoonpano.",UnableToProcessResults:"Analyysin tuloksia ei voi käsitellä.",UnableToNormalizeGeometry:"Syöteaineiston taiteviivageometriaa ei voi normalisoida",NullGeometry:"Syöteaineiston taiteviivageometria on tyhjäarvoinen. Profiilia ei voi päivittää",InvalidProfileResults:"Toiminnosta ProfileChart.update(...) puuttuu profileResults-parametri."}});