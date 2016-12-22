// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,t,r,o,p,n){var s=function(e){function t(){e.apply(this,arguments),this.text=""}return r(t,e),t.prototype.clone=function(){return new t({text:this.text})},o([n.property({type:String,json:{writable:!0}})],t.prototype,"text",void 0),t=o([n.subclass("esri.webscene.support.Title")],t)}(n.declared(p));Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=s});