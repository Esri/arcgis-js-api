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

define(["require","exports","tslib","../CIMCursor","../GeometryWalker"],(function(t,e,i,n,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PlacementAtRatioPositions=void 0;var r=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,i){return new a(t,e,i)},t.instance=null,t}();e.PlacementAtRatioPositions=r;var a=function(t){function e(e,i,n){var r=t.call(this,e,!0,!0)||this;return r._walker=new s.GeometryWalker,r._walker.updateTolerance(n),r._angleToLine=void 0===i.angleToLine||i.angleToLine,r._offset=void 0!==i.offset?i.offset*n:0,r._beginGap=void 0!==i.beginPosition?i.beginPosition*n:0,r._endGap=void 0!==i.endPosition?i.endPosition*n:0,r._flipFirst=void 0===i.flipFirst||i.flipFirst,r._pattern=new s.DashPattern,r._pattern.init(i.positionArray,!1,!1),r._subPathLen=0,r._posCount=r._pattern.size(),r._isFirst=!0,r._prevPos=0,r}return i.__extends(e,t),e.prototype.processPath=function(t){if(this._pattern.isEmpty())return null;var e;if(this.iteratePath){n=this._pattern.nextValue()*this._subPathLen;e=(i=this._beginGap+n)-this._prevPos,this._prevPos=i}else{if(this._posCount=this._pattern.size(),this._isFirst=!0,this._prevPos=0,this._subPathLen=this._walker.calculatePathLength(t)-this._beginGap-this._endGap,this._subPathLen<0)return this.iteratePath=!1,null;if(!this._walker.init(t,this._pattern,!1))return null;this._pattern.reset();var i,n=this._pattern.nextValue()*this._subPathLen;e=(i=this._beginGap+n)-this._prevPos,this._prevPos=i,this.iteratePath=!0}var s={};if(!this._walker.nextPointAndAngle(e,s,1))return this.iteratePath=!1,null;this.internalPlacement.setTranslate(s.pt[0]+this._offset*s.sa,s.pt[1]-this._offset*s.ca);var r,a,o=this._isFirst&&this._flipFirst;return this._angleToLine?(r=s.ca,a=s.sa):(r=1,a=0),o&&(r=-r,a=-a),this.internalPlacement.setRotateCS(r,a),this._isFirst=!1,this._posCount--,0===this._posCount&&(this.iteratePath=!1),this.internalPlacement},e}(n.PathTransformationCursor)}));