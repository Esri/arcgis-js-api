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

define({display:{elevationProfileTitle:"Kõrgusprofiil",showMe:"näita",selectLine:"<b>Valige</b> objekt kaardilt.",popupRequirement:"MÄRKUS: objekt peab olema kihil, millel on hüpikaknad aktiveeritud.",digitizeDistanceMeasureTool:"Kasutage <b>mõõtmise</b> töövahendeid.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/et/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Liikuge üle või puudutage kõrgusprofiili graafikut, et kuvada kõrguseid ja näidata asukohta kaardil.",directionLabel:"Profiili suund"},buttons:{measureLabel:"Mõõda",helpLabel:"Abi",profileForward:"Edasi",profileReverse:"Pööra ümber",flipProfileTitle:"Klõpsake profiilisuuna pööramiseks",aggregationShowLabel:"Kuva agregeerimise teave",aggregationHideLabel:"Peida agregeerimise teave",aggregateElevationGainForward:"Agregeeri kõrguse suurenemise suunas",aggregateElevationLossForward:"Agregeeri kõrguse vähenemise suunas",aggregateElevationGainReverse:"Agregeeri kõrguse suurenemise pöördsuunas",aggregateElevationLossReverse:"Agregeeri kõrguse vähenemise pöördsuunas"},chart:{title:"Kõrgusprofiil",demResolution:"DEM resolutsioon",elevationTitleTemplate:"Kõrgus {0}",distanceTitleTemplate:"Vahemaa {0}",gainLossTemplate:"Min:{min}   Max:{max}   Algus:{start}   Lõpp:{end}   Muutus:{gainloss}"},errors:{MissingConstructorParameters:"Puuduv konstruktori parameeter.",InvalidConfiguration:"Sobimatu konfiguratsioon",UnableToProcessResults:"Analüüsi tulemuste töötlemine ebaõnnestus.",UnableToNormalizeGeometry:"Sisendi murdjoone geomeetriat ei saa normaliseerida",NullGeometry:"Sisendi murdjoone geomeetria on nullväärtusega. Profiili ei saa uuendada",InvalidProfileResults:"Meetodil ProfileChart.update(...) puudub parameeter 'profileResults'."}});