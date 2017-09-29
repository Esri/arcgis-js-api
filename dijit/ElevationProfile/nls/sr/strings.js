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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Elevacioni profil",showMe:"pokaži mi",selectLine:"<b>Selektuj</b> geoobjekat na mapi.",popupRequirement:"NAPOMENA: geoobjekat mora da bude u sloju sa omogućenim iskačućim prozorima.",digitizeDistanceMeasureTool:"Koristite alatke za <b>Merenje</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Zadržite kursor miša iznad ili dodirnite grafikon profila elevacije da prikažete elevacije i pokažete lokaciju na mapi.",directionLabel:"Smer profila"},buttons:{measureLabel:"Merenje",helpLabel:"Pomoć",profileForward:"Unapred",profileReverse:"Preokreni",flipProfileTitle:"Kliknite da okrenete Smer profila",aggregationShowLabel:"Prikaži Grupisanje informacija",aggregationHideLabel:"Sakrij Grupisanje informacija",aggregateElevationGainForward:"Grupiši porast elevacije unapred",aggregateElevationLossForward:"Grupiši smanjenje elevacije unapred",aggregateElevationGainReverse:"Grupiši porast elevacije unazad",aggregateElevationLossReverse:"Grupiši smanjenje elevacije unazad"},chart:{title:"Elevacioni profil",demResolution:"DEM rezolucija",elevationTitleTemplate:"Elevacija u {0}",distanceTitleTemplate:"Rastojanje u {0}",gainLossTemplate:"Min:{min}   Maks:{max}   Početak:{start}   Kraj:{end}   Promeni:{gainloss}"},errors:{MissingConstructorParameters:"Nedostaje parametar konstruktora.",InvalidConfiguration:"Nevažeća konfiguracija.",UnableToProcessResults:"Procesiranje rezultata analize nije moguće.",UnableToNormalizeGeometry:"Normalizovanje ulazne polilinijske geometrije nije moguće",NullGeometry:"Ulazna polilinijska geometrija je prazna. Ažuriranje profila nije moguće",InvalidProfileResults:"Nedostaje parametar 'profileResults' za ProfileChart.update(...)."}});