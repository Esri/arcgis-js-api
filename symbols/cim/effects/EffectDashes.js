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

define(["require","exports","tslib","../CIMCursor","../CurveHelper","../GeometryWalker"],(function(t,e,s,a,i,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EffectDashes=void 0;var n=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,s){return new h(t,e,s)},t.instance=null,t}();e.EffectDashes=n;var h=function(t){function e(e,s,a){var i=t.call(this,e,!0,!0)||this;return i._walker=new r.GeometryWalker,i._walker.updateTolerance(a),i._endings=s.lineDashEnding,i._customDashPos=void 0!==s.offsetAlongLine?s.offsetAlongLine*a:0,i._offsetAtEnd=void 0!==s.customEndingOffset?s.customEndingOffset*a:0,i._pattern=new r.DashPattern,i._pattern.init(s.dashTemplate,!0),i._pattern.scale(a),i}return s.__extends(e,t),e.prototype.processPath=function(t){if(0===this._pattern.length())return this.iteratePath=!1,{paths:[t]};if(!this.iteratePath){var e=!0;switch(this._endings){case"HalfPattern":case"HalfGap":default:this._pattern.extPtGap=0;break;case"FullPattern":this.isClosed||(this._pattern.extPtGap=.5*this._pattern.firstValue());break;case"FullGap":this.isClosed||(this._pattern.extPtGap=.5*this._pattern.lastValue());break;case"NoConstraint":this.isClosed||(e=!1);break;case"Custom":this.isClosed||(this._pattern.extPtGap=.5*this._offsetAtEnd)}var s=this._walker.calculatePathLength(t);if(this._pattern.isEmpty()||s<.1*this._pattern.length())return{paths:[t]};if(!this._walker.init(t,this._pattern,e))return{paths:[t]}}var a;if(this.iteratePath)a=this._pattern.nextValue();else{var r=void 0;switch(this._endings){case"HalfPattern":default:r=.5*this._pattern.firstValue();break;case"HalfGap":r=.5*-this._pattern.lastValue();break;case"FullGap":r=-this._pattern.lastValue();break;case"FullPattern":r=0;break;case"NoConstraint":case"Custom":r=-this._customDashPos}var n=r/this._pattern.length();r=(n-=Math.floor(n))*this._pattern.length(),this._pattern.reset(),a=this._pattern.nextValue();for(var h=!1;r>=a;)r-=a,a=this._pattern.nextValue(),h=!h;a-=r,h?(this._walker.nextPosition(a),a=this._pattern.nextValue()):this.isClosed&&(this._firstCurve=this._walker.nextCurve(a),a=this._pattern.nextValue(),this._walker.nextPosition(a),a=this._pattern.nextValue())}var l=this._walker.nextCurve(a);return l?this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(this._firstCurve.splice(0,1),i.PathHelper.mergePath(l,this._firstCurve),this._firstCurve=null)):(a=this._pattern.nextValue(),!this._walker.nextPosition(a)||this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(l=this._firstCurve,this._firstCurve=null)):this.iteratePath=!0):(this.iteratePath=!1,l=this._firstCurve,this._firstCurve=null),{paths:[l]}},e}(a.PathGeometryCursor)}));