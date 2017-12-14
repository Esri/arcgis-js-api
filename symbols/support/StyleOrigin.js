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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../portal/Portal"],function(r,t,e,o,p,s,l){var n=function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.portal=null,t}return e(t,r),s=t,t.prototype.clone=function(){return new s({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},o([p.property({type:String})],t.prototype,"name",void 0),o([p.property({type:String})],t.prototype,"styleUrl",void 0),o([p.property({type:String})],t.prototype,"styleName",void 0),o([p.property({type:l})],t.prototype,"portal",void 0),t=s=o([p.subclass("esri.symbols.support.StyleOrigin")],t);var s}(p.declared(s));return n});