// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Magasságprofil",showMe:"megjelenítés",selectLine:"<b>Jelöljön ki</b> egy vektoros elemet a térképen.",popupRequirement:"MEGJEGYZÉS: A vektoros elemnek olyan rétegben kell lennie, amelyen engedélyezve vannak felugró ablakok.",digitizeDistanceMeasureTool:"Használja a <b>Mérés</b> eszközöket.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"A magasságok megjelenítéséhez és a hely térképen való megmutatásához vigye a kurzort a Magasságprofil diagram fölé (vagy érintse meg).",directionLabel:"Szelvény iránya"},buttons:{measureLabel:"Mérés",helpLabel:"Súgó",profileForward:"Előre",profileReverse:"Megfordít",flipProfileTitle:"Kattintson a profil átfordításához",aggregationShowLabel:"Összesítési információk mutatása",aggregationHideLabel:"Összesítési információk elrejtése",aggregateElevationGainForward:"Összesített magasságnövekedés előrefelé",aggregateElevationLossForward:"Összesített magasságcsökkenés előrefelé",aggregateElevationGainReverse:"Összesített magasságnövekedés hátrafelé",aggregateElevationLossReverse:"Összesített magasságcsökkenés hátrafelé"},chart:{title:"Magasságprofil",demResolution:"DMM felbontás",elevationTitleTemplate:"Magasság {0} egységben",distanceTitleTemplate:"Távolság {0} egységben",gainLossTemplate:"Min.:{min}   Max.:{max}   Kezdés:{start}   Vége:{end}   Változás:{gainloss}"},errors:{MissingConstructorParameters:"Hiányzó konstruktor paraméter.",InvalidConfiguration:"Érvénytelen konfiguráció.",UnableToProcessResults:"Az elemzési eredmények feldolgozása nem sikerült.",UnableToNormalizeGeometry:"Nem sikerült normalizálni a bemeneti polyline-geometriát",NullGeometry:"A bemeneti polyline-geometria null értékű. A profilt nem lehet frissíteni",InvalidProfileResults:"A ProfileChart.update(...) eljárásban nincs megadva a „profileResults” paraméter."}});