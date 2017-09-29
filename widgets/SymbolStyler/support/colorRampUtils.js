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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojox/gfx","dojo/_base/lang"],function(e,r,o,t){function n(e){var r=e.node,n=e.width,i=e.height,a=l(e),s=o.createSurface(r,n,i),c=t.mixin(s.getDimensions(),{x:0,y:0}),f=s.createRect(c).setFill({type:"linear",x1:0,y1:0,x2:0,y2:i,colors:a});return f}function i(e){var r=e.ramp,o=r.getFill();return o.colors=l(e),r.setFill(o),r}function a(e){return Array.isArray(e)&&e[0]&&"offset"in e[0]&&"color"in e[0]}function l(e){var r=e.colors,o=e.hasStops,t=r.length,n=o?1/t:1/(t-1),i=[];if(a(r))return r;for(var l=0,s=0;t>s;s++){var c=s*n,f=r[t-1-s];i.push({offset:c,color:f}),o&&(l=(s+1)*n,i.push({offset:l,color:f}))}return i}Object.defineProperty(r,"__esModule",{value:!0}),r.createColorRamp=n,r.updateColorRamp=i});