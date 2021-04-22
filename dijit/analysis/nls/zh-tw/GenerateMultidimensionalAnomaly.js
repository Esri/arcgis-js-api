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

define({toolDefine:"產生多維異常",outputLayerName:"${layername}_anomaly",variablesLabel:"選擇將產生異常的變數",variablesListLabel:"變數 [維度資訊] (描述)",methodLabel:"選擇方法以產生異常",calculationIntervalLabel:"選擇要計算平均值的時態間隔",differenceFromMean:"與平均值之間的差",percentDifferenceFromMean:"與平均值之間的百分比差",percentOfMean:"平均值的百分比",zScore:"Z 分數",differenceFromMedian:"與中位數之間的差",percentDifferenceFromMedian:"與中位數之間的百分比差",percentOfMedian:"中位數的百分比",all:"全部",yearly:"每年",recurringMonthly:"每月循環",recurringWeekly:"每週循環",recurringDaily:"每日循環",hourly:"每小時",externalRaster:"外部點陣",meanRaster:"選擇作為參考之平均值的影像圖層",ignoreNodataLabel:"忽略計算中缺少的值",ignore:"忽略",analysisLayerLabel:"選擇多維影像圖層以產生異常",itemDescription:"從產生多維異常產生的分析圖片服務",itemTags:"點陣分析結果，產生多維異常，${layername}",itemSnippet:"從產生多維異常產生的分析圖片服務"});