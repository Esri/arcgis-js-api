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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../lib/glMatrix","../support/earthUtils","../webgl-engine/lib/Util"],function(t,i,e,n,r){Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(){this.planes=new Array(6),this.points=new Array(8),this.lines=new Array(12),this.origin=e.vec3d.create(),this.direction=e.vec3d.create(),this._altitude=null;for(var t=0;6>t;t++)this.planes[t]=e.vec4d.create();for(var t=0;8>t;t++)this.points[t]=e.vec3d.create();for(var t=0;12>t;t++)this.lines[t]={origin:null,direction:e.vec3d.create(),endpoint:null}}return t.prototype.updateLine=function(t,i,n){t.origin=i,t.endpoint=n,e.vec3d.direction(n,i,t.direction)},t.prototype.update=function(t){r.matrix2frustumPlanes(t.viewMatrix,t.projectionMatrix,this.points,this.planes);for(var i=0;4>i;i++){var s=i,o=i+4;this.updateLine(this.lines[i],this.points[s],this.points[o]),this.updateLine(this.lines[i+4],this.points[s],3===i?this.points[0]:this.points[s+1]),this.updateLine(this.lines[i+8],this.points[o],3===i?this.points[4]:this.points[o+1])}e.vec3d.set(t.eye,this.origin),e.vec3d.set(t.viewForward,this.direction),this._altitude=e.vec3d.length(this.origin)-n.earthRadius},Object.defineProperty(t.prototype,"altitude",{get:function(){return this._altitude},enumerable:!0,configurable:!0}),t}();i.Frustum=s,i["default"]=s});