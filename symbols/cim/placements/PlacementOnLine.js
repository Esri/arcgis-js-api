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

define(["require","exports","tslib","../CIMCursor","../CurveHelper"],(function(e,t,n,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PlacementOnLine=void 0;var s=function(){function e(){}return e.local=function(){return null===e.instance&&(e.instance=new e),e.instance},e.prototype.execute=function(e,t,n){return new a(e,t,n)},e.instance=null,e}();t.PlacementOnLine=s;var a=function(e){function t(t,n,i){var s=e.call(this,t,!0,!0)||this;return s._curveHelper=new r.CurveHelper,s._angleToLine=void 0===n.angleToLine||n.angleToLine,s._offset=void 0!==n.offset?n.offset*i:0,s._relativeTo=n.relativeTo,s._position=void 0!==n.startPointOffset?n.startPointOffset*i:0,s._epsilon=.001*i,s}return n.__extends(t,e),t.prototype.processPath=function(e){var t=this._position;if("SegmentMidpoint"===this._relativeTo){for(this.iteratePath||(this._segmentCount=e.length,this._curSegment=1,this.iteratePath=!0);this._curSegment<this._segmentCount;){var n=this._curSegment;this._curSegment++;var r=e[n-1],s=e[n],a=this._curveHelper.calculateLength(r,s);if(!(a<this._epsilon)){var o=.5+this._position/a,l=this._curveHelper.getAngleCS(r,s,o),h=l[0],c=l[1],u=i.getCoord2D(r,s,o);return this.internalPlacement.setTranslate(u[0]-this._offset*c,u[1]+this._offset*h),this._angleToLine&&this.internalPlacement.setRotateCS(h,c),this.internalPlacement}}return this.iteratePath=!1,null}"LineEnd"===this._relativeTo&&i.reversePath(e);var f=this.onLine(e,t);return"LineEnd"===this._relativeTo&&i.reversePath(e),f},t.prototype.onLine=function(e,t){var n,r=!1;switch(this._relativeTo){case"LineMiddle":default:n=this._curveHelper.calculatePathLength(e)/2+t;break;case"LineBeginning":n=t;break;case"LineEnd":n=t,r=!0}for(var s,a=e.length,o=0,l=e[0],h=1;h<a;++h){s=l,l=e[h];var c=this._curveHelper.calculateLength(s,l);if(o+c>n){var u=(n-o)/c,f=this._curveHelper.getAngleCS(s,l,u),_=f[0],v=f[1],g=i.getCoord2D(s,l,u),p=r?this._offset:-this._offset;return this.internalPlacement.setTranslate(g[0]-p*v,g[1]+p*_),this._angleToLine&&(r?this.internalPlacement.setRotateCS(-_,-v):this.internalPlacement.setRotateCS(_,v)),this.internalPlacement}o+=c}return null},t}(i.PathTransformationCursor)}));