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

define({toolDefine:"サンプル",outputLayerName:"${layername}_sampled",locationLayer:"位置レイヤーの選択",uniqueIDField:"一意の ID フィールドを指定",acquisitionDefinition:"位置データの取得情報を指定 (オプション)",acquisitionDimension:"ディメンションと取得情報の形式を指定 (オプション)",buffer:"バッファー距離フィールドまたは値を指定",formatOptions:"書式設定オプション",dimensionField:"ディメンション フィールドまたは値",dimensionFieldOrValue:"ディメンション フィールドまたは値",relativeDaysBefore:"前の相対値",relativeDaysAfter:"後の相対値",singleFieldOrValue:"1 つのフィールドまたは値",singleFieldWithRelativeValues:"相対値を含む 1 つのフィールドまたは値",startEndFieldsOrValues:"開始および終了のフィールドまたは値",startFieldOrValue:"フィールドまたは値の開始",endFieldOrValue:"フィールドまたは値の終了",statisticsType:"統計情報の種類を選択",percentile:"パーセンタイル",percentileValue:"パーセンタイル値",resample:"リサンプリング手法を指定",nearest:"最近隣内挿法",bilinear:"共一次内挿法",cubic:"三次たたみ込み内挿法",outputLayout:"出力レイアウトを指定",layoutRow:"サンプリングされた値は行に表示されます",layoutColumn:"サンプリングされた値は列に表示されます",outputType:"出力タイプを指定",features:"フィーチャ",table:"テーブル",removeLayer:"レイヤーの削除",dimensionError:"ディメンション情報を読み込めません。 すべての変数のディメンションは同じである必要があります",analysisLayerLabel:"サンプリングする画像レイヤーを選択",itemDescription:"サンプルから生成された分析イメージ サービス",itemTags:"ラスター分析結果、サンプル、 ${layername}",itemSnippet:"サンプルから生成された分析イメージ サービス"});