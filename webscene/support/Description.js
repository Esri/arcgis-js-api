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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,t,r,o,p,n){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.text="",t}r(t,e),p=t,t.prototype.clone=function(){return new p({text:this.text})};var p;return o([n.property({type:String,json:{write:!0}})],t.prototype,"text",void 0),t=p=o([n.subclass("esri.webscene.support.Description")],t)}(n.declared(p.JSONSupport));t.default=c});