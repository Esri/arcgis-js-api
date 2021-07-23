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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define({toolDefine:"Trend-Raster generieren",outputLayerName:"${layername}_trend",dimensionLabel:"Dimension auswählen, für die der Variablentrend analysiert wird",variablesLabel:"Variable(n) für die Trendanalyse auswählen",variablesListLabel:"Variablen [Dimensionsinfo] (Beschreibung)",trendLineTypeLabel:"Linientyp für die Anpassung von Variablenwerten in einer Dimension angeben",linear:"Linear",harmonic:"Harmonisch",polynomial:"Polynomial",mannKendall:"Mann-Kendall-Test",seasonalKendall:"Saisonaler Kendall-Test",seasonalPeriod:"Geben Sie die Zeiteinheit für die Länge eines saisonalen Zeitraums an.",cycleLength:"Länge des harmonischen Zyklus angeben",cycleUnit:"Zeiteinheit für die Länge eines harmonischen Zyklus auswählen",years:"Jahre",days:"Tage",months:"Monate",frequencyLabel:"Die für die harmonische Trendanpassung verwendete Frequenz angeben",polynomialOrderLabel:"Die für die Trendanpassung verwendete Polynom-Ordnung angeben",modelStatistics:"In das Trend-Raster einzubeziehende Modellstatistiken auswählen",rmse:"RMSE",r2:"R-Squared",slopePValue:"P-Wert des Neigungskoeffizienten",ignoreNodataLabel:"Fehlende Werte in Berechnung ignorieren",ignore:"Ignorieren",analysisLayerLabel:"Multidimensionalen Bilddaten-Layer für die Trendanalyse auswählen",itemDescription:'Über "Trend-Raster generieren" erstellter Analyse-Image-Service',itemTags:"Raster-Analyseergebnis, Trend-Raster generieren, ${layername}",itemSnippet:'Über "Trend-Raster generieren" erstellter Analyse-Image-Service'});