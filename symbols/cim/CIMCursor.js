/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/lang","../../geometry/support/jsonUtils","./CIMPlacements"],(function(t,i,n,e){"use strict";function s(t){const n=i.clone(t);return r(n),n}function h(t){if(t){for(let i=t.length-1;i>0;--i)t[i][0]-=t[i-1][0],t[i][1]-=t[i-1][1]}}function o(t){if(t)for(const i of t)h(i)}function l(t){if(t){const i=t.length;for(let n=1;n<i;++n)t[n][0]+=t[n-1][0],t[n][1]+=t[n-1][1]}}function a(t){if(t)for(const i of t)l(i)}function r(t){t&&(n.isPolygon(t)?a(t.rings):n.isPolyline(t)?a(t.paths):n.isMultipoint(t)&&l(t.points))}function u(t){t&&(n.isPolygon(t)?o(t.rings):n.isPolyline(t)?o(t.paths):n.isMultipoint(t)&&h(t.points))}function c(t){if(t)for(const i of t)P(i)}function P(t){t&&t.reverse()}function p(t,i,n){return[t[0]+(i[0]-t[0])*n,t[1]+(i[1]-t[1])*n]}function f(t){return!(!t||0===t.length)&&(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1])}function m(t){return t[4]}function d(t,i){t[4]=i}let g=function(){function t(t,i,s,h){this.acceptPolygon=i,this.acceptPolyline=s,this.geomUnitsPerPoint=h,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1,t&&(n.isPolygon(t)?i&&(this.multiPath=t.rings,this.isClosed=!0):n.isPolyline(t)?s&&(this.multiPath=t.paths,this.isClosed=!1):n.isExtent(t)&&i&&(this.multiPath=x(t).rings,this.isClosed=!0),this.multiPath&&(this.pathCount=this.multiPath.length)),this.internalPlacement=new e.Placement}return t.prototype.next=function(){if(!this.multiPath)return null;for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;const t=this.processPath(this.multiPath[this.pathIndex]);if(t)return t}return this.pathCount=-1,this.pathIndex=-1,this.multiPath=null,null},t}(),y=function(){function t(t,i,n,e){this.inputGeometries=t,this.acceptPolygon=i,this.acceptPolyline=n,this.geomUnitsPerPoint=e,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1}return t.prototype.next=function(){for(;;){if(!this.multiPath){let t=this.inputGeometries.next();for(;t;){if(n.isPolygon(t)?this.acceptPolygon&&(this.multiPath=t.rings,this.isClosed=!0):n.isPolyline(t)?this.acceptPolyline&&(this.multiPath=t.paths,this.isClosed=!1):n.isExtent(t)&&this.acceptPolygon&&(this.multiPath=x(t).rings,this.isClosed=!0),this.multiPath){this.pathCount=this.multiPath.length,this.pathIndex=-1;break}t=this.inputGeometries.next()}if(!this.multiPath)return null}for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;const t=this.processPath(this.multiPath[this.pathIndex]);if(t)return t}this.pathCount=-1,this.pathIndex=-1,this.multiPath=null}},t}();function x(t){return{rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}}t.PathGeometryCursor=y,t.PathTransformationCursor=g,t.cloneAndDecodeGeometry=s,t.deltaDecodeGeometry=r,t.deltaEncodeGeometry=u,t.getCoord2D=p,t.getId=m,t.isClosedPath=f,t.reverseMultipath=c,t.reversePath=P,t.setId=d,Object.defineProperty(t,"__esModule",{value:!0})}));
