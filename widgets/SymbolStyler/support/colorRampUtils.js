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

define(["require","exports","dojox/gfx","dojo/_base/lang"],function(r,e,o,t){function n(r){var e=r.node,n=r.width,i=r.height,a=l(r),s=o.createSurface(e,n,i),c=t.mixin(s.getDimensions(),{x:0,y:0}),f=s.createRect(c).setFill({type:"linear",x1:0,y1:0,x2:0,y2:i,colors:a});return f}function i(r){var e=r.ramp,o=e.getFill();return o.colors=l(r),e.setFill(o),e}function a(r){return Array.isArray(r)&&r[0]&&"offset"in r[0]&&"color"in r[0]}function l(r){var e=r.colors,o=r.hasStops,t=e.length,n=o?1/t:1/(t-1),i=[];if(a(e))return e;for(var l=0,s=0;t>s;s++){var c=s*n,f=e[t-1-s];i.push({offset:c,color:f}),o&&(l=(s+1)*n,i.push({offset:l,color:f}))}return i}e.createColorRamp=n,e.updateColorRamp=i});