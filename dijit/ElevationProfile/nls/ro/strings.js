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

define({display:{elevationProfileTitle:"Profil elevație",showMe:"arată",selectLine:"<b>Selectaţi</b>  un obiect spaţial în hartă.",popupRequirement:"NOTĂ: obiectul spaţial trebuie să facă parte dintr-un strat tematic pentru care sunt activate pop-upurile.",digitizeDistanceMeasureTool:"Utilizaţi instrumentele <b>Măsurare</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/ro/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/ro/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Suprapuneţi indicatorul mouse-ului peste diagrama Profil elevaţie sau atingeţi această diagramă pentru a afişa elevaţiile şi locaţia pe hartă.",directionLabel:"Direcţie profil"},buttons:{measureLabel:"Măsurătoare",helpLabel:"Ajutor",profileForward:"Înainte",profileReverse:"Inversare",flipProfileTitle:"Faceţi clic pentru a întoarce direcţia profilului",aggregationShowLabel:"Afişare informaţii agregare",aggregationHideLabel:"Ascundere informaţii agregare",aggregateElevationGainForward:"Agregare câştig elevaţie înainte",aggregateElevationLossForward:"Agregare pierdere elevaţie înainte",aggregateElevationGainReverse:"Agregare câştig elevaţie înapoi",aggregateElevationLossReverse:"Agregare pierdere elevaţie înapoi"},chart:{title:"Profil elevaţie",demResolution:"Rezoluţie DEM",elevationTitleTemplate:"Elevaţie în {0}",distanceTitleTemplate:"Distanţă în {0}",gainLossTemplate:"Min.:{min}   Max.:{max}   Pornire:{start}   Sfârşit:{end}   Modificare:{gainloss}"},errors:{MissingConstructorParameters:"Lipsesc parametrii constructorului.",InvalidConfiguration:"Configuraţie nevalidă.",UnableToProcessResults:"Nu se pot procesa rezultatele analizei.",UnableToNormalizeGeometry:"Nu s-a putut normaliza geometria de intrare a poliliniei",NullGeometry:"Geometria poliliniei este nulă. Nu s-a putut actualiza profilul",InvalidProfileResults:"Lispeşte parametrul „profileResults” din ProfileChart.update(...)."}});