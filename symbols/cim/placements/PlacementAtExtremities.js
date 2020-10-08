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

define(["require","exports","tslib","../CIMCursor","../CurveHelper"],(function(e,t,i,n,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PlacementAtExtremities=void 0;var r=function(){function e(){}return e.local=function(){return null===e.instance&&(e.instance=new e),e.instance},e.prototype.execute=function(e,t,i){return new o(e,t,i)},e.instance=null,e}();t.PlacementAtExtremities=r;var o=function(e){function t(t,i,n){var r=e.call(this,t,!1,!0)||this;return r._curveHelper=new s.CurveHelper,r._angleToLine=void 0===i.angleToLine||i.angleToLine,r._offset=void 0!==i.offset?i.offset*n:0,r._type=i.extremityPlacement,r._position=void 0!==i.offsetAlongLine?i.offsetAlongLine*n:0,r._beginProcessed=!1,r}return i.__extends(t,e),t.prototype.processPath=function(e){var t;switch(this._type){case"Both":default:this._beginProcessed?(t=this._atExtremities(e,this._position,!1),this._beginProcessed=!1,this.iteratePath=!1):(t=this._atExtremities(e,this._position,!0),this._beginProcessed=!0,this.iteratePath=!0);break;case"JustBegin":t=this._atExtremities(e,this._position,!0);break;case"JustEnd":t=this._atExtremities(e,this._position,!1);break;case"None":}return t},t.prototype._atExtremities=function(e,t,i){var s=e.length;if(s<2)return null;for(var r,o=i?1:s-2,a=i?s:-1,l=i?1:-1,c=0,u=i?e[0]:e[s-1],h=o;h!==a;h+=l){r=u,u=e[h];var f=this._curveHelper.calculateLength(r,u);if(c+f>t){var _=(t-c)/f,p=this._curveHelper.getAngleCS(r,u,_),v=p[0],g=p[1],d=n.getCoord2D(r,u,_);return this.internalPlacement.setTranslate(d[0]-this._offset*g,d[1]+this._offset*v),this._angleToLine&&this.internalPlacement.setRotateCS(-v,-g),this.internalPlacement}c+=f}return null},t}(n.PathTransformationCursor)}));