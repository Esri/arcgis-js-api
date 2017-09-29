// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","./materialUtils"],function(e,r,t,o,n,p,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.screenLength=0,r.minWorldLength=0,r}return t(r,e),n=r,r.prototype.writeMinWorldLength=function(e,r,t){e&&(r[t]=e)},r.prototype.clone=function(){return new n({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})},o([p.property(i.screenSizeProperty)],r.prototype,"screenLength",void 0),o([p.property({type:Number,json:{write:!0}})],r.prototype,"minWorldLength",void 0),o([p.writer("minWorldLength")],r.prototype,"writeMinWorldLength",null),o([p.property({type:Number,json:{write:!0}})],r.prototype,"maxWorldLength",void 0),r=n=o([p.subclass("esri.symbols.support.Symbol3DVerticalOffset")],r);var n}(p.declared(n));r.Symbol3DVerticalOffset=l,r["default"]=l});