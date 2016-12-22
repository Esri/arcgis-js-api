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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper"],function(t,e,n,r){var i=function(){function t(t){this.type=t}return t}();e.RenderBucket=i;var o=function(t){function e(){t.call(this,2),this.triangleElementStart=0,this.triangleElementCount=0,this.joinStart=0,this.joinCount=0}return n(e,t),e.prototype.hasData=function(){return this.triangleElementCount>0||this.joinCount>0},e}(i);e.LineRenderBucket=o;var u=function(t){function e(){t.call(this,1),this.triangleElementStart=0,this.triangleElementCount=0,this.outlineElementStart=0,this.outlineElementCount=0}return n(e,t),e.prototype.hasData=function(){return this.triangleElementCount>0||this.outlineElementCount>0},e}(i);e.FillRenderBucket=u;var a=function(t){function e(){t.call(this,3),this.markerElementStart=0,this.marketElementCount=0,this.textElementStart=0,this.textElementCount=0,this.isSDF=!1}return n(e,t),e.prototype.hasData=function(){return this.marketElementCount>0||this.textElementCount>0},e}(i);e.SymbolRenderBucket=a;var l=function(t){function e(){t.call(this,0)}return n(e,t),e.prototype.hasData=function(){return!0},e}(i);e.BackgroundRenderBucket=l});