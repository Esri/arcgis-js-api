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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper"],(function(t,e,n,r){Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){this.type=t};e.RenderBucket=a;var i=function(t){function e(){var e=t.call(this,2)||this;return e.triangleElementStart=0,e.triangleElementCount=0,e}return n(e,t),e.prototype.hasData=function(){return this.triangleElementCount>0},e}(a);e.LineRenderBucket=i;var u=function(t){function e(){var e=t.call(this,1)||this;return e.triangleElementStart=0,e.triangleElementCount=0,e.outlineElementStart=0,e.outlineElementCount=0,e}return n(e,t),e.prototype.hasData=function(){return this.triangleElementCount>0||this.outlineElementCount>0},e}(a);e.FillRenderBucket=u;var l=function(t){function e(){var e=t.call(this,3)||this;return e.markerPerPageElementsMap=new Map,e.glyphPerPageElementsMap=new Map,e.isSDF=!1,e}return n(e,t),e.prototype.hasData=function(){return this.markerPerPageElementsMap.size>0||this.glyphPerPageElementsMap.size>0},e}(a);e.SymbolRenderBucket=l;var o=function(t){function e(){var e=t.call(this,4)||this;return e.triangleElementStart=0,e.triangleElementCount=0,e}return n(e,t),e.prototype.hasData=function(){return this.triangleElementCount>0},e}(a);e.CircleRenderBucket=o;var c=function(t){function e(){return t.call(this,0)||this}return n(e,t),e.prototype.hasData=function(){return!0},e}(a);e.BackgroundRenderBucket=c}));