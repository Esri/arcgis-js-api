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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define({toolDefine:"生成多维异常",outputLayerName:"${layername}_anomaly",variablesLabel:"选择将为其生成异常的变量",variablesListLabel:"变量 [维度信息] (描述)",methodLabel:"选择要生成异常的方法",calculationIntervalLabel:"选择用于计算平均值的时间间隔",differenceFromMean:"与平均值的差值",percentDifferenceFromMean:"与平均值的百分比差值",percentOfMean:"平均值百分比",zScore:"Z 得分",differenceFromMedian:"与中值的差值",percentDifferenceFromMedian:"与中值的百分比差值",percentOfMedian:"中值的百分比",all:"所有",yearly:"每年",recurringMonthly:"每月循环",recurringWeekly:"每周循环",recurringDaily:"每天循环",hourly:"每小时",externalRaster:"外部栅格",meanRaster:"选择平均值影像图层作为参考",ignoreNodataLabel:"忽略计算中的缺失值",ignore:"忽略",analysisLayerLabel:"选择要生成异常的多维影像图层",itemDescription:"通过“生成多维异常”生成的分析影像服务",itemTags:"栅格分析结果、生成多维异常、${layername}",itemSnippet:"通过“生成多维异常”生成的分析影像服务"});