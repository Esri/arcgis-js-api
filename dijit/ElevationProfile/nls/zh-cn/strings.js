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

define({display:{elevationProfileTitle:"高程剖面图",showMe:"显示",selectLine:"<b>选择</b>地图中的要素。",popupRequirement:"注意：该要素必须位于启用了弹出窗口的图层中。",digitizeDistanceMeasureTool:"使用<b>测量</b>工具。",selectFeatureHelpUrl:"http://help.arcgis.com/zh-cn/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/zh-cn/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"将鼠标悬停在高程剖面图图表上或单击图表以显示高程和地图上的对应位置。",directionLabel:"剖面图方向"},buttons:{measureLabel:"测量",helpLabel:"帮助",profileForward:"前向",profileReverse:"反向",flipProfileTitle:"单击以翻转剖面图方向",aggregationShowLabel:"显示聚合信息",aggregationHideLabel:"隐藏聚合信息",aggregateElevationGainForward:"聚合高程增益前向",aggregateElevationLossForward:"聚合高程损失前向",aggregateElevationGainReverse:"聚合高程增益反向",aggregateElevationLossReverse:"聚合高程损失反向"},chart:{title:"高程剖面图",demResolution:"DEM 分辨率",elevationTitleTemplate:"高程(以 {0} 为单位)",distanceTitleTemplate:"距离(以 {0} 为单位)",gainLossTemplate:"最小值:{min}   最大值:{max}   起始值:{start}   终止值:{end}   变化值:{gainloss}"},errors:{MissingConstructorParameters:"缺少构造器参数。",InvalidConfiguration:"无效的配置。",UnableToProcessResults:"无法处理分析结果。",UnableToNormalizeGeometry:"无法归一化输入折线几何",NullGeometry:"输入折线几何为空。无法更新剖面",InvalidProfileResults:"ProfileChart.update(...) 缺少 'profileResults' 参数。"}});