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

define(["require","exports","tslib","../CIMCursor","../CurveHelper"],(function(e,t,i,n,r){Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(){}return e.local=function(){return null===e.instance&&(e.instance=new e),e.instance},e.prototype.execute=function(e,t,i){return new o(e,t,i)},e.instance=null,e}();t.PlacementAtExtremities=s;var o=function(e){function t(t,i,n){var s=e.call(this,t,!1,!0)||this;return s._curveHelper=new r.CurveHelper,s._angleToLine=void 0===i.angleToLine||i.angleToLine,s._offset=void 0!==i.offset?i.offset*n:0,s._type=i.extremityPlacement,s._position=void 0!==i.offsetAlongLine?i.offsetAlongLine*n:0,s._beginProcessed=!1,s}return i.__extends(t,e),t.prototype.processPath=function(e){var t;switch(this._type){case"Both":default:this._beginProcessed?(n.reversePath(e),t=this._atExtremities(e,this._position),n.reversePath(e),this._beginProcessed=!1,this.iteratePath=!1):(t=this._atExtremities(e,this._position),this._beginProcessed=!0,this.iteratePath=!0);break;case"JustBegin":t=this._atExtremities(e,this._position);break;case"JustEnd":n.reversePath(e),t=this._atExtremities(e,this._position),n.reversePath(e);break;case"None":}return t},t.prototype._atExtremities=function(e,t){for(var i,r=e.length,s=0,o=e[0],a=1;a<r;++a){i=o,o=e[a];var l=this._curveHelper.calculateLength(i,o);if(s+l>t){var c=(t-s)/l,h=this._curveHelper.getAngleCS(i,o,c),u=h[0],f=h[1],_=n.getCoord2D(i,o,c);return this.internalPlacement.setTranslate(_[0]-this._offset*f,_[1]+this._offset*u),this._angleToLine&&this.internalPlacement.setRotateCS(-u,-f),this.internalPlacement}s+=l}return null},t}(n.PathTransformationCursor)}));