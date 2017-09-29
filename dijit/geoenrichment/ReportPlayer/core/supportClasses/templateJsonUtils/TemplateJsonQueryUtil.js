// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["./_SectionJsonCollector"],function(n){var o={};return o.processTemplateFieldInfos=function(n,e,t){o.collectSectionJsons(n).forEach(function(n){o.processSectionFieldInfos(n,e,t)})},o.processSectionFieldInfos=function(n,e,t){n.stack.forEach(function(n){"table"==n.id&&o.processTableFieldInfos(n,e,t)})},o.processSectionElements=function(n,e){o.collectSectionJsons(n).forEach(function(n){n.stack.forEach(e)})},o.processTableFieldInfos=function(n,e,t){n.data.data.forEach(function(n){o._processTableDataObj(n,e,t)})},o._processTableDataObj=function(n,e,t){function i(n){if(n&&(e(n),(s||c.infographic)&&n.isInfographic&&n.infographicJson.variableTables&&n.infographicJson.variableTables.forEach(function(n){n.variable&&i(n.variable.fieldInfo)}),(s||c.richText)&&n.isRichText&&(n.richTextJson.fieldInfos.forEach(i),n.richTextJson.specialFieldInfos.forEach(i)),(s||c.trigger)&&n.triggerJson&&i(n.triggerJson.fieldInfo),(s||c.chartAnnotations)&&n.isChart)){var r=n.chartJson.visualProperties;r.floatingIcons&&r.floatingIcons.forEach(function(n){o.processTableFieldInfos(n,e,t)}),r.floatingTexts&&r.floatingTexts.forEach(function(n){o.processTableFieldInfos(n,e,t)})}}if(n.fieldInfos){var c=t&&t.innerFields||{},s="all"==c;for(var r in n.fieldInfos)i(n.fieldInfos[r])}},o.hasDynamicColumns=function(n){return o._checkTableAttributes(n,function(n){return n.dynamicColumns>0})},o.hasDynamicRows=function(n){return o._checkTableAttributes(n,function(n){return n.dynamicRows>0})},o._checkTableAttributes=function(n,e){return o.collectSectionJsons(n).some(function(n){return n.stack.some(function(n){return"table"==n.id&&n.attributes&&e(n.attributes)?!0:void 0})})},o.hasMultiFeatureChart=function(n){var e=!1;return o.processSectionFieldInfos(n,function(n){e=e||n.isChart&&n.chartJson&&!!n.chartJson.isMultiFeatureChart}),e},o.isGraphicReport=function(n){return!!n.sectionsTables},o.collectSectionJsons=n.collectSectionJsons,o.getParentBox=n.getParentBox,o.getParentStyle=n.getParentStyle,o});