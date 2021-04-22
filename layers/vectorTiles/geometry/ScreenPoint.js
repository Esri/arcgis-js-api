// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/accessorSupport/decorators"],(function(r,t,e,o,p,n){return function(r){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var o=r.apply(this,t)||this;return o.x=0,o.y=0,o.z=void 0,o}return e(t,r),p=t,t.prototype.normalizeCtorArgs=function(r,t){return"number"==typeof r?{x:r,y:t}:Array.isArray(r)?{x:r[0],y:r[1]}:r},t.prototype.clone=function(){return new p({x:this.x,y:this.y,z:this.z})},t.prototype.toArray=function(){return null==this.z?[this.x,this.y]:[this.x,this.y,this.z]},o([n.property({type:Number})],t.prototype,"x",void 0),o([n.property({type:Number})],t.prototype,"y",void 0),o([n.property({type:Number})],t.prototype,"z",void 0),t=p=o([n.subclass("esri.geometry.ScreenPoint")],t);var p}(n.declared(p))}));