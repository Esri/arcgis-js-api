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

define(["require","exports","tslib","../CIMCursor","../enums","../GeometryWalker"],(function(t,e,n,i,s,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PlacementAlongLineSameSize=void 0;var r=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,n){return new l(t,e,n)},t.instance=null,t}();e.PlacementAlongLineSameSize=r;var l=function(t){function e(e,n,i){var s=t.call(this,e,!0,!0)||this;return s._grometryWalker=new a.GeometryWalker,s._grometryWalker.updateTolerance(i),s._angleToLine=void 0===n.angleToLine||n.angleToLine,s._offset=void 0!==n.offset?n.offset*i:0,s._originalEndings=n.endings,s._offsetAtEnd=void 0!==n.customEndingOffset?n.customEndingOffset*i:0,s._position=void 0!==n.offsetAlongLine?n.offsetAlongLine*i:0,s._pattern=new a.DashPattern,s._pattern.init(n.placementTemplate,!1),s._pattern.scale(i),s._endings=s._originalEndings,s}return n.__extends(e,t),e.prototype.processPath=function(t){if(this._pattern.isEmpty())return null;var e;if(this.iteratePath)e=this._pattern.nextValue();else{this._originalEndings===s.PlacementEndings.WithFullGap&&this.isClosed?this._endings=s.PlacementEndings.WithMarkers:this._endings=this._originalEndings,this._pattern.extPtGap=0;var n=!0,i=void 0;switch(this._endings){case s.PlacementEndings.NoConstraint:i=-this._position,i=this._adjustPosition(i),n=!1;break;case s.PlacementEndings.WithHalfGap:default:i=-this._pattern.lastValue()/2;break;case s.PlacementEndings.WithFullGap:i=-this._pattern.lastValue(),this._pattern.extPtGap=this._pattern.lastValue();break;case s.PlacementEndings.WithMarkers:i=0;break;case s.PlacementEndings.Custom:i=-this._position,i=this._adjustPosition(i),this._pattern.extPtGap=.5*this._offsetAtEnd}if(!this._grometryWalker.init(t,this._pattern,n))return null;this._pattern.reset();for(var a=0;i>a;)i-=a,a=this._pattern.nextValue();e=a-=i,this.iteratePath=!0}var r={};return this._grometryWalker.nextPointAndAngle(e,r)?this._endings===s.PlacementEndings.WithFullGap&&this._grometryWalker.isPathEnd()?(this.iteratePath=!1,null):this._endings===s.PlacementEndings.WithMarkers&&this._grometryWalker.isPathEnd()&&(this.iteratePath=!1,this.isClosed)?null:(this.internalPlacement.setTranslate(r.pt[0]+this._offset*r.sa,r.pt[1]-this._offset*r.ca),this._angleToLine&&this.internalPlacement.setRotateCS(r.ca,r.sa),this.internalPlacement):(this.iteratePath=!1,null)},e.prototype._adjustPosition=function(t){var e=t/this._pattern.length();return(e-=Math.floor(e))*this._pattern.length()},e}(i.PathTransformationCursor)}));