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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"標高グラフ",showMe:"表示",selectLine:"マップ内のフィーチャを<b>選択します<b>。",popupRequirement:"注意: フィーチャはポップアップが有効になっているレイヤー内にある必要があります。",digitizeDistanceMeasureTool:"<b>計測</b>ツールを使用します。",selectFeatureHelpUrl:"http://help.arcgis.com/ja/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/ja/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"地形の断面図をマウスでポイントすると、断面図上に標高値とマップ上に位置が表示されます。",directionLabel:"断面図の方向"},buttons:{measureLabel:"計測",helpLabel:"ヘルプ",profileForward:"正方向",profileReverse:"反転",flipProfileTitle:"クリックして断面図の方向を反転します",aggregationShowLabel:"集約情報の表示",aggregationHideLabel:"集約情報の非表示",aggregateElevationGainForward:"標高の上昇量を正方向に集約",aggregateElevationLossForward:"標高の下降量を正方向に集約",aggregateElevationGainReverse:"標高の上昇量を逆方向に集約",aggregateElevationLossReverse:"標高の下降量を逆方向に集約"},chart:{title:"標高グラフ",demResolution:"DEM 解像度",elevationTitleTemplate:"標高 ({0})",distanceTitleTemplate:"距離 ({0})",gainLossTemplate:"最小: {min} 最大: {max} 始点: {start} 終点: {end} 標高差: {gainloss}"},errors:{MissingConstructorParameters:"コンストラクター パラメーターが見つかりません。",InvalidConfiguration:"無効な構成です。",UnableToProcessResults:"解析結果を処理できません。",UnableToNormalizeGeometry:"入力ポリラインのジオメトリを正規化できません",NullGeometry:"入力ポリラインのジオメトリが NULL です。断面図を更新できません",InvalidProfileResults:"ProfileChart.update(...) に 'profileResults' パラメーターがありません。"}});