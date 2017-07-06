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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Profil terena",showMe:"pokaži mi",selectLine:"<b>Odaberite</b> geoobjekt na karti.",popupRequirement:"NAPOMENA: geoobjekt mora biti u sloju s omogućenim skočnim prozorima.",digitizeDistanceMeasureTool:"Upotrijebite alate <b>Izmjeri</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Prijeđite iznad ili dodirnite grafikon profila terena za prikaz visina terena i lokacija na karti.",directionLabel:"Smjer profila"},buttons:{measureLabel:"Izmjeri",helpLabel:"Pomoć",profileForward:"Naprijed",profileReverse:"Obratno",flipProfileTitle:"Kliknite za promjenu smjera profila",aggregationShowLabel:"Prikaži agregirane informacije",aggregationHideLabel:"Sakrij agregirane informacije",aggregateElevationGainForward:"Agregiraj povećanje visine terena prema naprijed",aggregateElevationLossForward:"Agregiraj pad visine terena prema naprijed",aggregateElevationGainReverse:"Agregiraj povećanje visine terena prema natrag",aggregateElevationLossReverse:"Agregiraj pad visine terena prema natrag"},chart:{title:"Profil terena",demResolution:"Rezolucija DEM-a",elevationTitleTemplate:"Visina terena u {0}",distanceTitleTemplate:"Udaljenost u {0}",gainLossTemplate:"Min.:{min}   Maks.:{max}   Početak:{start}   Kraj:{end}   Promjena:{gainloss}"},errors:{MissingConstructorParameters:"Nedostaje parametar konstruktora.",InvalidConfiguration:"Nevaljana konfiguracija.",UnableToProcessResults:"Nije moguće obraditi rezultate analize.",UnableToNormalizeGeometry:"Nije moguće normalizirati ulaznu geometriju polilinija",NullGeometry:"Ulazna geometrija polilinija je prazna. Nije moguće ažurirati profil",InvalidProfileResults:"Za ProfileChart.update(...) nedostaje parametar 'profileResults'."}});