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

define({toolDefine:"產生趨勢點陣",outputLayerName:"${layername}_trend",dimensionLabel:"選擇將沿其分析變數趨勢的維度",variablesLabel:"選擇要分析趨勢的變數",variablesListLabel:"變數 [維度資訊] (描述)",trendLineTypeLabel:"選擇線條類型以符合維度沿線的變數值",linear:"線性函數",harmonic:"諧波",polynomial:"多項式",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"指定用於季期性期間長度的時間單位。",cycleLength:"指定諧波週期的長度",cycleUnit:"選擇諧波週期長度的時間單位",years:"年",days:"天",months:"月",frequencyLabel:"指定諧波趨勢擬合的頻率編號",polynomialOrderLabel:"指定趨勢擬合的多項式次方",modelStatistics:"選擇趨勢點陣要包含的模型統計資料",rmse:"RMSE",r2:"R 平方",slopePValue:"坡度係數的 P 值",ignoreNodataLabel:"忽略計算中缺少的值",ignore:"忽略",analysisLayerLabel:"選擇要分析趨勢的多維影像圖層",itemDescription:"從產生趨勢點陣所產生的分析圖片服務",itemTags:"點陣分析結果，產生趨勢點陣，${layername}",itemSnippet:"從產生趨勢點陣所產生的分析圖片服務"});