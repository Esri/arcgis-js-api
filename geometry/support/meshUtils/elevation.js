// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../geometry","../../../Ground","../../../core/promiseUtils","../../../core/unitUtils","../../Mesh"],(function(e,t,n,r,a,i,o,s){function u(e,t,n){var r=o.getMetersPerUnitForSR(t.spatialReference),a=e.demResolution.min/r,i=Math.round(t.width/a),u=Math.round(t.height/a),c=i+1,l=u+1,d=new Float64Array(c*l*3),h=new Float32Array(c*l*2),v=0,p=0,m=new Uint32Array(i*u*2*3),w=0,y=0;f.spatialReference=t.spatialReference;for(var _=0;_<l;_++)for(var R=t.ymin+t.height*(_/u),g=0;g<c;g++){var b=t.xmin+t.width*(g/i);f.x=b,f.y=R,d[v++]=b,d[v++]=R,d[v++]=e.elevationAt(f)||0;var A=g/i,M=_/u;h[p++]=A,h[p++]=M,_!==u&&g!==i&&(m[y++]=w+1,m[y++]=w+c+1,m[y++]=w+c,m[y++]=w,m[y++]=w+1,m[y++]=w+c),w++}return new s({vertexAttributes:{position:d,uv:h},components:[{faces:m,shading:"smooth",material:n&&n.material||null}],spatialReference:t.spatialReference})}function c(e){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(t){switch(t.label){case 0:return l(e)?[2,e.load()]:[4,e.load()];case 1:return t.sent(),[4,i.eachAlways(e.layers.map((function(e){return e.load()})))];case 2:return t.sent(),[2,e]}}))}))}function l(e){return"type"in e&&("elevation"===e.type||"base-elevation"===e.type)}Object.defineProperty(t,"__esModule",{value:!0}),t.create=function(e,t,r){return n.__awaiter(this,void 0,void 0,(function(){var i;return n.__generator(this,(function(n){switch(n.label){case 0:return l(e)||e instanceof a?[4,c(e)]:[3,3];case 1:return[4,n.sent().createElevationSampler(t,{demResolution:r&&r.demResolution||"finest-contiguous"})];case 2:return i=n.sent(),[3,4];case 3:i=e,n.label=4;case 4:return[2,u(i,t,r)]}}))}))};var f=new r.Point}));