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

define({toolDefine:"生成趋势栅格",outputLayerName:"${layername}_trend",dimensionLabel:"选择将沿其分析变量趋势的维度",variablesLabel:"选择要分析趋势的变量",variablesListLabel:"变量 [维度信息]（描述）",trendLineTypeLabel:"选择沿维度拟合变量值的线类型",linear:"线性函数",harmonic:"谐波",polynomial:"多项式",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"指定季节性期间的长度的时间单位",cycleLength:"指定谐波周期长度",cycleUnit:"选择谐波周期长度的时间单位",years:"年",days:"天",months:"月",frequencyLabel:"指定用于谐波趋势拟合的频率",polynomialOrderLabel:"指定用于趋势拟合的多项式阶数",modelStatistics:"选择要包含在趋势栅格中的模型统计数据",rmse:"RMSE",r2:"R 平方",slopePValue:"斜率系数的 p 值",ignoreNodataLabel:"忽略计算中的缺失值",ignore:"忽略",analysisLayerLabel:"选择要分析趋势的多维影像图层",itemDescription:"通过生成趋势栅格生成的分析影像服务",itemTags:"栅格分析结果，生成趋势栅格，${layername}",itemSnippet:"通过生成趋势栅格生成的分析影像服务"});