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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"高程剖面",showMe:"顯示",selectLine:"<b>選擇</b>地圖中的圖徵。",popupRequirement:"注意: 該圖徵必須位於已啟用快顯的圖層中。",digitizeDistanceMeasureTool:"使用<b>測量</b>工具。",selectFeatureHelpUrl:"http://help.arcgis.com/zh-cn/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"將滑鼠懸停或觸碰高程剖面圖圖表以顯示海拔和地圖上的位置。",directionLabel:"設定檔方向"},buttons:{measureLabel:"測量",helpLabel:"幫助",profileForward:"轉寄",profileReverse:"反轉",flipProfileTitle:"按一下以反向設定檔方向",aggregationShowLabel:"顯示匯聚資訊",aggregationHideLabel:"隱藏匯聚資訊",aggregateElevationGainForward:"匯聚高程正向增益",aggregateElevationLossForward:"匯聚高程正向損失",aggregateElevationGainReverse:"匯聚高程反向增益",aggregateElevationLossReverse:"匯聚高程反向損失"},chart:{title:"高程剖面",demResolution:"DEM 解析度",elevationTitleTemplate:"海拔 (以 {0} 為單位)",distanceTitleTemplate:"距離(以 {0} 為單位)",gainLossTemplate:"最小值:{min}   最大值:{max}   起始值:{start}   終止值:{end}   變化值:{gainloss}"},errors:{MissingConstructorParameters:"缺少建構函式參數。",InvalidConfiguration:"無效的設定。",UnableToProcessResults:"無法處理分析結果。",UnableToNormalizeGeometry:"無法正規化輸入折線幾何",NullGeometry:"輸入折線幾何為 null。無法更新設定檔",InvalidProfileResults:"ProfileChart.update(...) 缺少 'profileResults’ 參數。"}});