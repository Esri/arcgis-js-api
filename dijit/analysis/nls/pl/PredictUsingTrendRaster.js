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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define({toolDefine:"Prognozuj na podstawie rastra trendu",outputLayerName:"${layername}_prognoza",variablesLabel:"Wybierz zmienne, których wartości mają być prognozowane",variablesListLabel:"Zmienne [Informacje o wymiarze] (Opis)",dimensionDefinitionLabel:"Wybierz metodę stosowaną do obliczania prognozowanych wartości wymiaru",dimensionValuesLabel:"Podaj wartości wymiaru na potrzeby prognozowania",dimensionIntervalLabel:"Podaj interwał wymiaru na potrzeby prognozowania",intervalValueLabel:"Podaj liczbę wartości pośrednich między wartością początkową i końcową",intervalUnitLabel:"Wybierz jednostkę, która będzie stosowana w przypadku interwału wartości czasu",startLabel:"Wartość początkowa",endLabel:"Wartość końcowa",byValueLabel:"Przez wartość",byIntervalLabel:"Według interwału",hours:"Godziny",days:"Dni",weeks:"Tygodnie",months:"Miesiące",years:"Lata",custom:"Niestandardowy",itemDescription:"Usługa rastrowa analizy wygenerowana za pomocą opcji Prognozuj na podstawie rastra trendu",itemTags:"Wynik analizy rastra, opcja Prognozuj na podstawie rastra trendu, warstwa ${layername}",itemSnippet:"Usługa rastrowa analizy wygenerowana za pomocą opcji Prognozuj na podstawie rastra trendu"});