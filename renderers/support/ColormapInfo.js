// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/paramHelper","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(r,e,o,t,p,l,u,n){return function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.value=null,e.label=null,e.color=null,e}return o(e,r),t([n.property({type:Number,json:{write:!0}})],e.prototype,"value",void 0),t([n.property({type:String,json:{write:!0}})],e.prototype,"label",void 0),t([n.property({type:l,json:{write:!0}})],e.prototype,"color",void 0),e=t([n.subclass("esri.renderers.support.ColormapInfo")],e)}(n.declared(u.JSONSupport))});