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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define({toolDefine:"Generuj raster trendu",outputLayerName:"${layername}_trend",dimensionLabel:"Wybierz wymiar, wzdłuż którego będzie analizowany trend zmiennych",variablesLabel:"Wybierz zmienne na potrzeby analizy trendu",variablesListLabel:"Zmienne [Informacje o wymiarze] (Opis)",trendLineTypeLabel:"Wybierz typ linii dopasowywanej do wartości zmiennych wzdłuż wymiaru",linear:"Liniowy",harmonic:"Harmoniczne",polynomial:"Wielomianowa",mannKendall:"Mann-Kendall",seasonalKendall:"Kendall (sezonowy)",seasonalPeriod:"Podaj jednostkę czasu długości okresu sezonowego",cycleLength:"Podaj długość cyklu harmonicznego",cycleUnit:"Wybierz jednostkę czasu długości cyklu harmonicznego",years:"Lata",days:"Dni",months:"Miesiące",frequencyLabel:"Podaj częstotliwość na potrzeby harmonicznego dopasowywania trendu",polynomialOrderLabel:"Podaj stopień wielomianu na potrzeby dopasowywania trendu",modelStatistics:"Wybierz statystyki modelu do uwzględnienia w rastrze trendu",rmse:"RMSE",r2:"R kwadrat",slopePValue:"Wartość p współczynnika spadków",ignoreNodataLabel:"W obliczeniach ignoruj brakujące wartości",ignore:"Ignoruj",analysisLayerLabel:"Wybierz wielowymiarową warstwę zobrazowań na potrzeby analizy trendu",itemDescription:"Usługa rastrowa analizy wygenerowana za pomocą opcji Generuj raster trendu",itemTags:"Wynik analizy rastra, opcja Generuj raster trendu, warstwa ${layername}",itemSnippet:"Usługa rastrowa analizy wygenerowana za pomocą opcji Generuj raster trendu"});