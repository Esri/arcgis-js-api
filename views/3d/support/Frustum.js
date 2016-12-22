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

define(["../../../core/declare","../lib/glMatrix","../support/earthUtils","../webgl-engine/lib/Util"],function(i,t,e,n){var s=t.vec3d,r=t.vec4d,h=i([],{constructor:function(){this.planes=new Array(6),this.points=new Array(8),this.lines=new Array(12),this.origin=s.create(),this.direction=s.create(),this.dirty=!1,this._altitude=null;for(var i=0;6>i;i++)this.planes[i]=r.create();for(i=0;8>i;i++)this.points[i]=s.create();for(i=0;12>i;i++)this.lines[i]={origin:null,direction:s.create(),endpoint:null}},_makeLine:function(i,t,e){i.origin=t,i.endpoint=e,s.direction(e,t,i.direction)},update:function(i){if(this.dirty){n.matrix2frustumPlanes(i.viewMatrix,i.projectionMatrix,this.points,this.planes);for(var t=0;4>t;t++){var e=t,r=t+4;this._makeLine(this.lines[t],this.points[e],this.points[r]),this._makeLine(this.lines[t+4],this.points[e],3===t?this.points[0]:this.points[e+1]),this._makeLine(this.lines[t+8],this.points[r],3===t?this.points[4]:this.points[r+1])}s.set(i.eye,this.origin),s.set(i.viewForward,this.direction),this._altitude=null,this.dirty=!1}},altitude:function(){return null!=this._altitude?this._altitude:(this._altitude=s.length(this.origin)-e.earthRadius,this._altitude)}});return h});