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

define(["require","exports","../../core/lang","../../geometry/support/jsonUtils","./CIMPlacements"],(function(t,i,n,e,h){function s(t){if(t)for(var i=t.length-1;i>0;--i)t[i][0]-=t[i-1][0],t[i][1]-=t[i-1][1]}function o(t){if(t)for(var i=0,n=t;i<n.length;i++){s(n[i])}}function r(t){if(t)for(var i=t.length,n=1;n<i;++n)t[n][0]+=t[n-1][0],t[n][1]+=t[n-1][1]}function a(t){if(t)for(var i=0,n=t;i<n.length;i++){r(n[i])}}function l(t){t&&(e.isPolygon(t)?a(t.rings):e.isPolyline(t)?a(t.paths):e.isMultipoint(t)&&r(t.points))}function u(t){t&&t.reverse()}Object.defineProperty(i,"__esModule",{value:!0}),i.cloneAndDecodeGeometry=function(t){var i=n.clone(t);return l(i),i},i.deltaDecodeGeometry=l,i.deltaEncodeGeometry=function(t){t&&(e.isPolygon(t)?o(t.rings):e.isPolyline(t)?o(t.paths):e.isMultipoint(t)&&s(t.points))},i.reverseMultipath=function(t){if(t)for(var i=0,n=t;i<n.length;i++){u(n[i])}},i.reversePath=u,i.getCoord2D=function(t,i,n){return[t[0]+(i[0]-t[0])*n,t[1]+(i[1]-t[1])*n]},i.isClosedPath=function(t){return!(!t||0===t.length)&&(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1])},i.getId=function(t){return t[4]},i.setId=function(t,i){t[4]=i};var P=function(){function t(t,i,n,s){this.acceptPolygon=i,this.acceptPolyline=n,this.geomUnitsPerPoint=s,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1,t&&(e.isPolygon(t)?i&&(this.multiPath=t.rings,this.isClosed=!0):e.isPolyline(t)?n&&(this.multiPath=t.paths,this.isClosed=!1):e.isExtent(t)&&i&&(this.multiPath=c(t).rings,this.isClosed=!0),this.multiPath&&(this.pathCount=this.multiPath.length)),this.internalPlacement=new h.Placement}return t.prototype.next=function(){if(!this.multiPath)return null;for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;var t=this.processPath(this.multiPath[this.pathIndex]);if(t)return t}return this.pathCount=-1,this.pathIndex=-1,this.multiPath=null,null},t}();i.PathTransformationCursor=P;var p=function(){function t(t,i,n,e){this.inputGeometries=t,this.acceptPolygon=i,this.acceptPolyline=n,this.geomUnitsPerPoint=e,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1}return t.prototype.next=function(){for(;;){if(!this.multiPath){for(var t=this.inputGeometries.next();t;){if(e.isPolygon(t)?this.acceptPolygon&&(this.multiPath=t.rings,this.isClosed=!0):e.isPolyline(t)?this.acceptPolyline&&(this.multiPath=t.paths,this.isClosed=!1):e.isExtent(t)&&this.acceptPolygon&&(this.multiPath=c(t).rings,this.isClosed=!0),this.multiPath){this.pathCount=this.multiPath.length,this.pathIndex=-1;break}t=this.inputGeometries.next()}if(!this.multiPath)return null}for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;var i=this.processPath(this.multiPath[this.pathIndex]);if(i)return i}this.pathCount=-1,this.pathIndex=-1,this.multiPath=null}},t}();function c(t){return{rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}}i.PathGeometryCursor=p}));