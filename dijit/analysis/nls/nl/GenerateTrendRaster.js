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

define({toolDefine:"Trendraster genereren",outputLayerName:"${layername}_trend",dimensionLabel:"Kies de afmeting waarmee de variabeletrend wordt geanalyseerd",variablesLabel:"Variabele(n) kiezen om de trend te analyseren",variablesListLabel:"Variabelen [Dimension Info] (Beschrijving)",trendLineTypeLabel:"Kies het type lijn om variabele waarden te plaatsen langs een afmeting",linear:"Lineair",harmonic:"Harmonisch",polynomial:"Polynomiaal",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"Specificeer de tijdseenheid voor de lengte van een seizoensperiode",cycleLength:"Specificeer de lengte van de harmonische cyclus",cycleUnit:"Kies de tijdeenheid van de harmonische cycluslengte",years:"Jaren",days:"Dagen",months:"Maanden",frequencyLabel:"Specificeer het frequentienummer voor de harmonische trendplaatsing",polynomialOrderLabel:"Specificeer het polynomiale ordernummer voor de trendplaatsing",modelStatistics:"Kies de modelstatistieken om op te nemen in het trendraster",rmse:"RMSE",r2:"R-kwadraat",slopePValue:"P-waarde van hellingcoëfficiënt",ignoreNodataLabel:"Ontbrekende waarden in berekening negeren",ignore:"Negeren",analysisLayerLabel:"Kies de multidimensionale satellietbeeldlaag om trend te analyseren",itemDescription:"Analysis Image Service gegenereerd van Trendraster genereren",itemTags:"Resultaat rasteranalyse, trendraster genereren, ${layername}",itemSnippet:"Analyse Imageservice gegenereerd van Trendraster genereren"});