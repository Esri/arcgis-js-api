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

define(["require","exports","tslib","../CIMCursor","../CurveHelper"],(function(t,e,n,s,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,n){return new a(t,e,n)},t.instance=null,t}();e.PlacementOnVertices=r;var a=function(t){function e(e,n,s){var r=t.call(this,e,!0,!0)||this;return r._curveHelper=new i.CurveHelper,r._angleToLine=void 0===n.angleToLine||n.angleToLine,r._offset=void 0!==n.offset?n.offset*s:0,r._endPoints=void 0===n.placeOnEndPoints||n.placeOnEndPoints,r._controlPoints=void 0===n.placeOnControlPoints||n.placeOnControlPoints,r._regularVertices=void 0===n.placeOnRegularVertices||n.placeOnRegularVertices,r._tags=[],r._tagIterator=0,r}return n.__extends(e,t),e.prototype.processPath=function(t){if(this.iteratePath||(this._preparePath(t),this.iteratePath=!0),this._tagIterator>=this._tags.length)return this._tags.length=0,this._tagIterator=0,this.iteratePath=!1,null;var e=this._tags[this._tagIterator];this._angleToLine&&this.internalPlacement.setRotate(e[2]);var n=e[0],s=e[1];if(0!==this._offset){var i=Math.cos(e[2]),r=Math.sin(e[2]);n-=this._offset*r,s+=this._offset*i}return this.internalPlacement.setTranslate(n,s),this._tagIterator++,this.internalPlacement},e.prototype._preparePath=function(t){this._tags.length=0,this._tagIterator=0;for(var e,n,i=s.isClosedPath(t),r=t.length-1,a=0,h=0,l=0,_=0,u=0;a<r;){e=t[++a-1],n=t[a];var c=s.getId(e),g=s.getId(n);(this._angleToLine||0!==this._offset)&&(_=this._curveHelper.getAngle(e,n,0)),1===a?i?(h=_,l=c):this._endPoints&&this._tags.push([e[0],e[1],_]):1===c?this._controlPoints&&this._tags.push([e[0],e[1],o(u,_)]):this._regularVertices&&this._tags.push([e[0],e[1],o(u,_)]),(this._angleToLine||0!==this._offset)&&(u=this._curveHelper.getAngle(e,n,1)),a===r&&(i?1===g||1===l?this._controlPoints&&this._tags.push([n[0],n[1],o(u,h)]):this._regularVertices&&this._tags.push([n[0],n[1],o(u,h)]):this._endPoints&&this._tags.push([n[0],n[1],u]))}this._tagIterator=0},e}(s.PathTransformationCursor);function o(t,e){for(var n=Math.PI;Math.abs(e-t)>n+2e-15;)e-t>n?e-=2*n:e+=2*n;return(t+e)/2}}));