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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define({toolDefine:"使用深度学习定义对象",outputLayerName:"${layername}_detected",modelLabel:"选择用于检测对象的深度学习模型",modelArgsLabel:"指定深度学习模型参数",nameLabel:"名称",valueLabel:"值",removeDuplicatesLable:"从输出中移除重复的要素(可选)",queryModelArgsMsg:"查询模型参数...",queryModelArgsErrMsg:"查询模型参数失败。",nonMaxSuppressionLabel:"非极大值抑制",options:"选项",confidenceLabel:"置信度得分字段",classValueLabel:"类值字段",maxOverlapLabel:"最大重叠比",numberOnlyMsg:"只允许数值。",processingModeLabel:"处理模式",processAsMosaicLabel:"作为镶嵌图像处理",processAsItemsLabel:"单独处理所有栅格项目",analysisLayerLabel:"选择用于检测对象的图像",itemDescription:"使用深度学习通过检测对象生成的分析图像服务",itemTags:"栅格分析结果、使用深度学习检测对象，${layername}",itemSnippet:"使用深度学习通过检测对象生成的分析图像服务"});