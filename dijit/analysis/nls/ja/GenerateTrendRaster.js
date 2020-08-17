// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define({toolDefine:"トレンド ラスターの生成",outputLayerName:"${layername}_trend",dimensionLabel:"変数トレンドを解析する際に使用するディメンションを選択",variablesLabel:"トレンドを解析する変数を選択",variablesListLabel:"変数 [ディメンション情報] (説明)",trendLineTypeLabel:"ディメンションに沿った変数値をフィッティングするラインのタイプを選択",linear:"線形",harmonic:"調和",polynomial:"多項式",cycleLength:"調和サイクルの長さを指定",cycleUnit:"調和サイクルの長さの時間単位を指定",years:"年",days:"日",frequencyLabel:"調和トレンド フィッティングの頻度を指定",polynomialOrderLabel:"トレンド フィッティングの多項式の次数を指定",modelStatistics:"トレンド ラスターに含めるモデル統計情報を選択",rmse:"RMSE",r2:"相関係数の二乗",slopePValue:"傾斜係数の P 値",ignoreNodataLabel:"計算時に欠損値を無視",ignore:"無視",analysisLayerLabel:"トレンドを解析する多次元画像レイヤーの選択",itemDescription:"[トレンド ラスターの生成] から生成された分析イメージ サービス",itemTags:"ラスター解析結果、トレンド ラスターの生成、${layername}",itemSnippet:"[トレンド ラスターの生成] から生成された分析イメージ サービス"});
