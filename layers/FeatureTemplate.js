// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","../graphic"],function(e,o,t,r,i,O){var s=e(null,{declaredClass:"esri.layers.FeatureTemplate",constructor:function(e){if(e&&o.isObject(e)){this.name=e.name,this.description=e.description,this.drawingTool=e.drawingTool;var t=e.prototype;this.prototype=new O(t.geometry,null,t.attributes)}},toJson:function(){return i.fixJson({name:this.name,description:this.description,drawingTool:this.drawingTool,prototype:this.prototype&&this.prototype.toJson()})}});return o.mixin(s,{TOOL_AUTO_COMPLETE_POLYGON:"esriFeatureEditToolAutoCompletePolygon",TOOL_CIRCLE:"esriFeatureEditToolCircle",TOOL_ELLIPSE:"esriFeatureEditToolEllipse",TOOL_FREEHAND:"esriFeatureEditToolFreehand",TOOL_LINE:"esriFeatureEditToolLine",TOOL_NONE:"esriFeatureEditToolNone",TOOL_POINT:"esriFeatureEditToolPoint",TOOL_POLYGON:"esriFeatureEditToolPolygon",TOOL_RECTANGLE:"esriFeatureEditToolRectangle",TOOL_ARROW:"esriFeatureEditToolArrow",TOOL_TRIANGLE:"esriFeatureEditToolTriangle",TOOL_LEFT_ARROW:"esriFeatureEditToolLeftArrow",TOOL_RIGHT_ARROW:"esriFeatureEditToolRightArrow",TOOL_UP_ARROW:"esriFeatureEditToolUpArrow",TOOL_DOWN_ARROW:"esriFeatureEditToolDownArrow"}),t("extend-esri")&&o.setObject("layers.FeatureTemplate",s,r),s});