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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../core/arrayUtils","../../../../../core/maybe"],(function(e,r,n,t){"use strict";function i(e){return e.size*e.color[3]*e.opacity>0}Object.defineProperty(r,"__esModule",{value:!0}),r.fillComponenBufferIndices=r.computeEdgeCount=r.estimateLengthAtDistance=r.determineObjectTransparency=r.determineEdgeTransparency=r.determineRendererType=void 0,r.determineRendererType=function(e){for(var r=null,n=0,a=e;n<a.length;n++){var o=a[n],c=o.type;if(i(o))if(t.isNone(r))r=c;else if(r!==c)return"uber"}return t.isSome(r)?r:"solid"},r.determineEdgeTransparency=function(e){for(var r=0,n=0,t=e;n<t.length;n++){var a=t[n].material;if(i(a)){if(a.color[3]*a.opacity<1)return 1;r=2}}return r},r.determineObjectTransparency=function(e){for(var r=0,n=0,t=e;n<t.length;n++){var a=t[n].material;if(i(a)){switch(a.objectTransparency){case 1:case 0:return 1;case 2:if(a.opacity<1)return 1}r=2}}return r},r.estimateLengthAtDistance=function(e,r,n,t){return n*(t/e)*2*Math.tan(.5*r)},r.computeEdgeCount=function(e,r,t){var i,a,o,c=e.length,f=r*t.minimumEdgeLength;return c-(i=e,a=f,-1===(o=n.binaryIndexOf(i,a,!0))?a<i[0]?0:i.length:o)},r.fillComponenBufferIndices=function(e,r,n,t){for(var i=0;i<e.length;i++){var a=e[i].index,o=r[i],c=r[i+1];if(t)for(var f=o;f<c;f++){var u=t[f];n.set(u,a)}else for(f=o;f<c;f++)n.set(f,a)}}}));