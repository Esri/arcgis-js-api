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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define({toolDefine:"多次元異常の生成",outputLayerName:"${layername}_anomaly",variablesLabel:"異常値が生成される変数の選択",variablesListLabel:"変数 [ディメンション情報] (説明)",methodLabel:"異常値を生成する方法の選択",calculationIntervalLabel:"平均値を算出する時間間隔の選択",differenceFromMean:"平均からの差異",percentDifferenceFromMean:"平均からのパーセント差",percentOfMean:"平均値の割合",zScore:"Z スコア",differenceFromMedian:"中央値からの差異",percentDifferenceFromMedian:"中央値からのパーセント差",percentOfMedian:"中央値の割合",all:"All",yearly:"毎年",recurringMonthly:"毎月繰り返し",recurringWeekly:"毎週繰り返し",recurringDaily:"毎日繰り返し",hourly:"毎時間",ignoreNodataLabel:"計算時に失われた値を無視する",ignore:"無視 (I)",analysisLayerLabel:"異常値を生成する多次元イメージ レイヤーの選択",itemDescription:"[多次元異常の生成] から生成された分析イメージ サービス",itemTags:"ラスター解析結果、多次元異常の生成、${layername}",itemSnippet:"[多次元異常の生成] から生成された分析イメージ サービス"});