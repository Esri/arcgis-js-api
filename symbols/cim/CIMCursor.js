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

define(["require","exports","../../core/lang","../../geometry/support/jsonUtils","./CIMPlacements"],(function(t,i,e,n,s){"use strict";function h(t){if(t)for(var i=t.length-1;i>0;--i)t[i][0]-=t[i-1][0],t[i][1]-=t[i-1][1]}function o(t){if(t)for(var i=0,e=t;i<e.length;i++){h(e[i])}}function r(t){if(t)for(var i=t.length,e=1;e<i;++e)t[e][0]+=t[e-1][0],t[e][1]+=t[e-1][1]}function a(t){if(t)for(var i=0,e=t;i<e.length;i++){r(e[i])}}function l(t){t&&(n.isPolygon(t)?a(t.rings):n.isPolyline(t)?a(t.paths):n.isMultipoint(t)&&r(t.points))}function u(t){t&&t.reverse()}Object.defineProperty(i,"__esModule",{value:!0}),i.PathGeometryCursor=i.PathTransformationCursor=i.setId=i.getId=i.isClosedPath=i.getCoord2D=i.reversePath=i.reverseMultipath=i.deltaEncodeGeometry=i.deltaDecodeGeometry=i.cloneAndDecodeGeometry=void 0,i.cloneAndDecodeGeometry=function(t){var i=e.clone(t);return l(i),i},i.deltaDecodeGeometry=l,i.deltaEncodeGeometry=function(t){t&&(n.isPolygon(t)?o(t.rings):n.isPolyline(t)?o(t.paths):n.isMultipoint(t)&&h(t.points))},i.reverseMultipath=function(t){if(t)for(var i=0,e=t;i<e.length;i++){u(e[i])}},i.reversePath=u,i.getCoord2D=function(t,i,e){return[t[0]+(i[0]-t[0])*e,t[1]+(i[1]-t[1])*e]},i.isClosedPath=function(t){return!(!t||0===t.length)&&(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1])},i.getId=function(t){return t[4]},i.setId=function(t,i){t[4]=i};var P=function(){function t(t,i,e,h){this.acceptPolygon=i,this.acceptPolyline=e,this.geomUnitsPerPoint=h,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1,t&&(n.isPolygon(t)?i&&(this.multiPath=t.rings,this.isClosed=!0):n.isPolyline(t)?e&&(this.multiPath=t.paths,this.isClosed=!1):n.isExtent(t)&&i&&(this.multiPath=p(t).rings,this.isClosed=!0),this.multiPath&&(this.pathCount=this.multiPath.length)),this.internalPlacement=new s.Placement}return t.prototype.next=function(){if(!this.multiPath)return null;for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;var t=this.processPath(this.multiPath[this.pathIndex]);if(t)return t}return this.pathCount=-1,this.pathIndex=-1,this.multiPath=null,null},t}();i.PathTransformationCursor=P;var c=function(){function t(t,i,e,n){this.inputGeometries=t,this.acceptPolygon=i,this.acceptPolyline=e,this.geomUnitsPerPoint=n,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1}return t.prototype.next=function(){for(;;){if(!this.multiPath){for(var t=this.inputGeometries.next();t;){if(n.isPolygon(t)?this.acceptPolygon&&(this.multiPath=t.rings,this.isClosed=!0):n.isPolyline(t)?this.acceptPolyline&&(this.multiPath=t.paths,this.isClosed=!1):n.isExtent(t)&&this.acceptPolygon&&(this.multiPath=p(t).rings,this.isClosed=!0),this.multiPath){this.pathCount=this.multiPath.length,this.pathIndex=-1;break}t=this.inputGeometries.next()}if(!this.multiPath)return null}for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;var i=this.processPath(this.multiPath[this.pathIndex]);if(i)return i}this.pathCount=-1,this.pathIndex=-1,this.multiPath=null}},t}();function p(t){return{rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}}i.PathGeometryCursor=c}));