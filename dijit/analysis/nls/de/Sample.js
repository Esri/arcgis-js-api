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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define({toolDefine:"Stichprobe",outputLayerName:"${layername}_sampled",locationLayer:"Positions-Layer auswählen",uniqueIDField:"Eindeutiges ID-Feld angeben",acquisitionDefinition:"Erfassungsinformationen zu Positionsdaten angeben (optional)",acquisitionDimension:"Dimensionen und Format der Erfassungsinformationen angeben (optional)",buffer:"Feld oder Wert für Pufferabstand angeben",formatOptions:"Formatoptionen",dimensionField:"Dimensionsfeld oder -wert",dimensionFieldOrValue:"Dimensionsfeld oder -wert",relativeDaysBefore:"Relativer Wert vorher",relativeDaysAfter:"Relativer Wert danach",singleFieldOrValue:"Einzelfeld oder -wert",singleFieldWithRelativeValues:"Einzelfeld oder -wert mit relativen Werten",startEndFieldsOrValues:"Start- und Endfeld oder Werte",startFieldOrValue:"Startfeld oder -wert",endFieldOrValue:"Endfeld oder -wert",statisticsType:"Statistiktyp auswählen",percentile:"Perzentil",percentileValue:"Perzentilwert",resample:"Resampling-Methode angeben",nearest:"Nächstgelegene",bilinear:"Bilinear",cubic:"Kubisch",outputLayout:"Ausgabe-Layout angeben",layoutRow:"Stichprobenwerte werden in Zeile angezeigt",layoutColumn:"Stichprobenwerte werden in Spalte angezeigt",outputType:"Ausgabetyp angeben",features:"Features",table:"Tabelle",removeLayer:"Layer entfernen",dimensionError:"Dimensionsinformationen können nicht geladen werden. Alle Variablen müssen dieselben Dimensionen aufweisen",analysisLayerLabel:"Bilddaten-Layer für Stichprobe auswählen",itemDescription:"Aus Stichprobe generierter Analyse-Image-Service",itemTags:"Raster-Analyseergebnis, Stichprobe, ${layername}",itemSnippet:"Aus Stichprobe generierter Analyse-Image-Service"});