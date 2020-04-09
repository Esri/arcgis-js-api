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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Višinski profil",showMe:"pokaži mi",selectLine:"Na karti <b>izberite</b> geoobjekt.",popupRequirement:"OPOMBA: geoobjekt mora biti v sloju, kjer so omogočena pojavna okna.",digitizeDistanceMeasureTool:"Izberite orodja <b>Merjenja</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Pomaknite se čez ali kliknite na grafikon višinskega profila, da prikažete višine in lokacijo na karti.",directionLabel:"Smer profila"},buttons:{measureLabel:"Merjenje",helpLabel:"Pomoč",profileForward:"Naprej",profileReverse:"Nazaj",flipProfileTitle:"Klikni, da obrneš smer profila",aggregationShowLabel:"Prikaži informacije agregacije",aggregationHideLabel:"Skrij informacije agregacije",aggregateElevationGainForward:"Agregacija podatkov višin pri vzpenjanju",aggregateElevationLossForward:"Agregacija podatkov višin pri spustu",aggregateElevationGainReverse:"Agregacija obratnih podatkov višin pri vzpenjanju",aggregateElevationLossReverse:"Agregacija obratnih podatkov višin pri spustu"},chart:{title:"Višinski profil",demResolution:"Ločljivost DMV",elevationTitleTemplate:"Višina v {0}",distanceTitleTemplate:"Razdalja v {0}",gainLossTemplate:"Minimum:{min}   Maksimum:{max}   Začetek:{start}   Konec:{end}   Sprememba:{gainloss}"},errors:{MissingConstructorParameters:"Manjka parameter konstruktorja.",InvalidConfiguration:"Neveljavna konfiguracija.",UnableToProcessResults:"Rezultatov analize ni mogoče obdelati.",UnableToNormalizeGeometry:"Vhodne polilinijske geometrije ni mogoče normalizirati",NullGeometry:"Vhodna vrednost polilinijske geometrije je prazna. Profila ni mogoče posodobiti",InvalidProfileResults:"ProfilChart.update(...) manjkajoči parameter »profileResults«."}});