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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/accessorSupport/decorators"],(function(e,r,s,t,n){Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(){this._names=new Map}return e.prototype.begin=function(e){this._names.has(e)||(this._names.set(e,!1),function(e){return-1!==e.indexOf("Brush")}(e)&&this.record("Esri.FirstDraw"),performance.mark("Esri."+e+".Start"))},e.prototype.end=function(e){this._names.has(e)&&!this._names.get(e)&&(this._names.set(e,!0),performance.mark("Esri."+e+".End"))},e.prototype.record=function(e){this._names.has(e)||(this._names.set(e,!0),performance.mark("Esri."+e))},e=s([n.subclass("esri.views.2d.support.Timeline")],e)}();r.Timeline=i}));