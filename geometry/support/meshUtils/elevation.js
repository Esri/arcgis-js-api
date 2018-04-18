// COPYRIGHT © 2018 Esri
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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../geometry","../../../Ground","../../../core/promiseUtils","../scaleUtils","../../../layers/ElevationLayer","../../../layers/support/types"],function(e,t,r,n,a,i,o,s,u,c){function l(e,t,a){return n(this,void 0,void 0,function(){var n,o;return r(this,function(r){switch(r.label){case 0:return e instanceof u||e instanceof i?[4,p(e)]:[3,3];case 1:return o=r.sent(),[4,o.createElevationSampler(t,{demResolution:a&&a.demResolution||"finest-contiguous"})];case 2:return n=r.sent(),[3,4];case 3:n=e,r.label=4;case 4:return[2,f(n,t,a)]}})})}function f(e,t,r){var n=s.getMetersPerUnitForSR(t.spatialReference),i=e.demResolution.min/n,o=Math.round(t.width/i),u=Math.round(t.height/i),c=o+1,l=u+1,f=new Float64Array(c*l*3),p=new Float32Array(c*l*2),d=0,v=0,m=new Uint32Array(o*u*2*3),y=0,w=0;h.spatialReference=t.spatialReference;for(var R=0;R<l;R++)for(var g=t.ymin+t.height*(R/u),A=0;A<c;A++){var b=t.xmin+t.width*(A/o);h.x=b,h.y=g,f[d++]=b,f[d++]=g,f[d++]=e.elevationAt(h)||0;var M=A/o,x=R/u;p[v++]=M,p[v++]=x,R!==u&&A!==o&&(m[w++]=y+1,m[w++]=y+c+1,m[w++]=y+c,m[w++]=y,m[w++]=y+1,m[w++]=y+c),y++}return new a.Mesh({vertexAttributes:{position:f,uv:p},components:[{faces:m,shading:"smooth",material:r&&r.material||null}],spatialReference:t.spatialReference})}function p(e){return n(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return d(e)?[4,e.load()]:[3,2];case 1:return[2,t.sent()];case 2:return[4,e.load()];case 3:return t.sent(),[4,o.eachAlways(e.layers.map(function(e){return e.load()}))];case 4:return t.sent(),[2,e]}})})}function d(e){return c.isOfType(e,"elevation")}Object.defineProperty(t,"__esModule",{value:!0}),t.create=l;var h=new a.Point});