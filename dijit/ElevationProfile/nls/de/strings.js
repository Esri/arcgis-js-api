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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Höhenprofil",showMe:"anzeigen",selectLine:"<b>Wählen</b> Sie ein Feature in der Karte aus.",popupRequirement:"HINWEIS: Das Feature muss in einem Layer enthalten sein, für den Pop-ups aktiviert sind.",digitizeDistanceMeasureTool:"Verwenden Sie die <b>Messwerkzeuge</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/de/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/de/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Zeigen Sie auf das Höhenprofildiagramm bzw. berühren Sie es, um Höhen anzuzeigen und die Position auf der Karte zu zeigen.",directionLabel:"Profilrichtung"},buttons:{measureLabel:"Messen",helpLabel:"Hilfe",profileForward:"Vorwärts",profileReverse:"Rückwärts",flipProfileTitle:"Zum Umdrehen der Profilrichtung klicken",aggregationShowLabel:"Aggregationsinformationen anzeigen",aggregationHideLabel:"Aggregationsinformationen ausblenden",aggregateElevationGainForward:"Höhenunterschied vorwärts aggregieren",aggregateElevationLossForward:"Höhenverlust vorwärts aggregieren",aggregateElevationGainReverse:"Höhenunterschied rückwärts aggregieren",aggregateElevationLossReverse:"Höhenverlust rückwärts aggregieren"},chart:{title:"Höhenprofil",demResolution:"DEM-Auflösung",elevationTitleTemplate:"Höhe in {0}",distanceTitleTemplate:"Entfernung in {0}",gainLossTemplate:"Min.:{min}   Max.:{max}   Start:{start}   Ende:{end}   Veränderung:{gainloss}"},errors:{MissingConstructorParameters:"Fehlender Konstruktorparameter.",InvalidConfiguration:"Ungültige Konfiguration.",UnableToProcessResults:"Analyseergebnisse können nicht verarbeitet werden.",UnableToNormalizeGeometry:"Eingabe-Polyliniengeometrie konnte nicht normalisiert werden",NullGeometry:"Eingabe-Polyliniengeometrie ist Null. Profil kann nicht aktualisiert werden",InvalidProfileResults:"ProfileChart.update(...) weist keinen 'profileResults'-Parameter auf."}});