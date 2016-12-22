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

define(["require","exports"],function(e,t){var o=function(){function e(){this.segments=[]}return Object.defineProperty(e.prototype,"time",{get:function(){return this.segments.reduce(function(e,t){return e+t.time},0)},enumerable:!0,configurable:!0}),e.prototype.interpolateComponentsAt=function(e,t){e=Math.min(Math.max(e,0),1),e*=this.time;for(var o=0,n=0,r=this.definition,a=0;a<this.segments.length;a++){var i=this.segments[a],m=i.definition;if(e<=i.time||a===this.segments.length-1){t=this.segmentInterpolateComponentsAt(i,e/i.time,t),r.hasPan?t.pan=(o+m.compared.pan*t.pan)/r.compared.pan:t.pan=1,r.hasRotate?t.rotate=(n+m.compared.rotate*t.rotate)/r.compared.rotate:t.rotate=1;var s=t.zoom*(m.compared.targetZoom-m.compared.sourceZoom)+m.compared.sourceZoom,p=this.segments[0].definition.compared.sourceZoom,c=this.segments[this.segments.length-1].definition.compared.targetZoom;return r.hasZoom?t.zoom=(s-p)/(c-p):t.zoom=1,t}e-=i.time,o+=m.compared.pan,n+=m.compared.rotate}},e.prototype.segmentInterpolateComponentsAt=function(e,t,o){return e.interpolateComponentsAt(t,o)},e}();t.Path=o,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o});