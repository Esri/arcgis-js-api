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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../lang","../renderers/jsonUtils","./LabelClass"],function(e,n,r,s,o,a,l,i){var t=e(null,{declaredClass:"esri.layers.LayerDrawingOptions",constructor:function(e){if(e&&(n.mixin(this,e),e.renderer&&(this.renderer=l.fromJson(e.renderer)),e.labelingInfo&&e.labelingInfo.length>0)){this.labelingInfo=[];var s;r.forEach(e.labelingInfo,function(e){s=new i(e),this.labelingInfo.push(s)},this)}},toJson:function(){var e={renderer:this.renderer&&this.renderer.toJson(),transparency:this.transparency,scaleSymbols:this.scaleSymbols,showLabels:this.showLabels};return this.labelingInfo&&this.labelingInfo.length>0&&(e.labelingInfo=[],r.forEach(this.labelingInfo,function(n){e.labelingInfo.push(n.toJson())})),a.fixJson(e)}});return s("extend-esri")&&n.setObject("layers.LayerDrawingOptions",t,o),t});