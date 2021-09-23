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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define({toolDefine:"示例",outputLayerName:"${layername}_sampled",locationLayer:"选择位置图层",uniqueIDField:"指定唯一 ID 字段",acquisitionDefinition:"指定位置数据的获取信息(可选)",acquisitionDimension:"指定维度和获取信息格式(可选)",buffer:"指定缓冲区距离字段或值",formatOptions:"格式选项",dimensionField:"维度字段或值",dimensionFieldOrValue:"维度字段或值",relativeDaysBefore:"之前的相对值",relativeDaysAfter:"之后的相对值",singleFieldOrValue:"单个字段或值",singleFieldWithRelativeValues:"带有相对值的单个字段或值",startEndFieldsOrValues:"开始和结束字段或值",startFieldOrValue:"起始字段或值",endFieldOrValue:"结束字段或值",statisticsType:"选择统计数据类型",percentile:"百分比数",percentileValue:"百分数值",resample:"指定重采样技术",nearest:"最邻近",bilinear:"双线性",cubic:"三次卷积",outputLayout:"指定输出布局",layoutRow:"采样值以行显示",layoutColumn:"采样值以列显示",outputType:"指定输出类型",features:"要素",table:"表格",removeLayer:"移除图层",dimensionError:"无法加载维度信息。 所有变量均必须具有相同的维度",analysisLayerLabel:"选择要采样的影像图层",itemDescription:"通过样本生成的分析影像服务",itemTags:"栅格分析结果，采样， ${layername}",itemSnippet:"通过采样生成的分析影像服务"});