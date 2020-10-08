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

define(["require","exports","../../geometry","../../core/libs/gl-matrix-2/vec2","./coordsUtils"],(function(e,n,t,i,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.nearestCoordinate=void 0,n.nearestCoordinate=function(e,n){for(var o=n.spatialReference,a=[n.x,n.y],c=Number.POSITIVE_INFINITY,s=0,x=0,m=[0,0],d=0,y="extent"===e.type?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:e.rings;d<y.length;d++)for(var l=y[d],f=0;f<l.length-1;f++){r.projectPointOnLine(m,a,l,f);var u=i.vec2.distance(a,m);u<c&&(c=u,s=m[0],x=m[1])}return{coordinate:new t.Point({x:s,y:x,spatialReference:o}),distance:c}}}));