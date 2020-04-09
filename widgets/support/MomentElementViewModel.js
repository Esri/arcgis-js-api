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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../moment","../../core/Accessor","../../core/accessorSupport/decorators"],(function(e,t,r,o,p,s,u){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.value=p(),t}return o(t,e),t.prototype.castValue=function(e){return p(e)},r([u.property()],t.prototype,"state",void 0),r([u.property()],t.prototype,"value",void 0),r([u.cast("value")],t.prototype,"castValue",null),t=r([u.subclass("esri.widgets.support.MomentElementViewModel")],t)}(u.declared(s))}));