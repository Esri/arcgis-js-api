// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/lang","dojo/_base/array","../../core/lang","../../renderers/support/jsonUtils","./LabelClass"],function(n,e,r,s,a,i){var o=n(null,{declaredClass:"esri.layers.support.LayerDrawingOptions",constructor:function(n){if(n&&(e.mixin(this,n),n.renderer&&(this.renderer=a.fromJSON(n.renderer)),n.transparency&&(this.opacity=1-n.transparency/100),n.labelingInfo&&n.labelingInfo.length>0)){this.labelingInfo=[];var s;r.forEach(n.labelingInfo,function(n){s=i.fromJSON(n),this.labelingInfo.push(s)},this)}},toJSON:function(){var n={renderer:this.renderer&&this.renderer.toJSON(),scaleSymbols:this.scaleSymbols,showLabels:this.showLabels};return null!=this.opacity&&(n.transparency=100*(1-this.opacity)),this.labelingInfo&&this.labelingInfo.length>0&&(n.labelingInfo=[],r.forEach(this.labelingInfo,function(e){n.labelingInfo.push(e.toJSON())})),s.fixJson(n)}});return o});