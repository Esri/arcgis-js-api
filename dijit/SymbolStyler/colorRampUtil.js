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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["../../symbols/utils","dojo/_base/array","dojox/gfx"],(function(r,e,o){var s={create:function(r){var e=r.colors,o=r.node,t=r.numClasses,a=r.height||70,n=r.width||20,c=r.size||40;return"grid"===(r.style||"ramp")?s._create2DColorRamp({node:o,size:c,colors:e,numClasses:t}):s._createColorRamp({node:o,height:a,width:n,colors:e,numClasses:t})},_createColorRamp:function(r){var e=r.node,t=r.width,a=r.height,n=s._stopsFromColors(r),c=o.createSurface(e,t,a);return c=c.createRect(c.getDimensions()).setFill({type:"linear",x1:0,y1:0,x2:0,y2:a,colors:n})},_create2DColorRamp:function(e){var t=e.node,a=e.size,n=e.colors,c=e.numClasses,l=o.createSurface(t,a,a);return l=r.create2DColorRamp({surface:l,colors:s._to2DArray(n,c),numClasses:c,size:a})},_to2DArray:function(r,e){for(var o=[],s=0;s<e;s++){for(var t=[],a=0;a<e;a++)t.push(r[s*e+a]);o.push(t.reverse())}return o},_stopsFromColors:function(r){var e,o,s,t=r.colors,a=r.numClasses>0,n=t.length,c=a?1/n:1/(n-1),l=[],u=t[0];if("object"==typeof u&&u.hasOwnProperty("offset")&&u.hasOwnProperty("color"))return t;for(var i=0;i<n;i++)e=i*c,o=t[n-1-i],l.push({offset:e,color:o}),a&&(s=(i+1)*c,l.push({offset:s,color:o}));return l}};return s}));