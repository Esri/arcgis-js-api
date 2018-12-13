// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/JSONSupport","../../../core/accessorSupport/decorators"],function(e,t,r,o,p,i){return function(e){function t(t){var r=e.call(this)||this;return r.caption="",r.title="",r.type=null,r}return r(t,e),o([i.property({type:String,json:{write:!0}})],t.prototype,"caption",void 0),o([i.property({type:String,json:{write:!0}})],t.prototype,"title",void 0),o([i.property({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=o([i.subclass("esri.support.ContentElement.Media.Media")],t)}(i.declared(p))});