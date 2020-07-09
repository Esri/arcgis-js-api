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

define(["require","exports","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../CIMPlacements"],(function(e,t,n,o,i){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.local=function(){return null===e.instance&&(e.instance=new e),e.instance},e.prototype.execute=function(e,t,n){return new s(e,t,n)},e.instance=null,e}();t.PlacementPolygonCenter=r;var s=function(){function e(e,t,n){this._geometry=e,this._offsetX=void 0!==t.offsetX?t.offsetX*n:0,this._offsetY=void 0!==t.offsetY?t.offsetY*n:0,this._method=t.method,this._clipping=t.clipAtBoundary,this._internalPlacement=new i.Placement,this._clipping}return e.prototype.next=function(){var e=this._geometry;return this._geometry=null,e&&void 0!==e.rings?this._polygonCenter(e):null},e.prototype._polygonCenter=function(e){var t=!1;switch(this._method){case"OnPolygon":default:case"CenterOfMass":case"BoundingBoxCenter":var i=n.create();o.getBoundsXY(i,e),this._internalPlacement.setTranslate((i[2]+i[0])/2+this._offsetX,(i[3]+i[1])/2-this._offsetY),t=!0}return t?this._internalPlacement:null},e}()}));