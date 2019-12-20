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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/JSONSupport","../../../core/accessorSupport/decorators"],function(t,e,r,o,p,i){return function(t){function e(e){var r=t.call(this,e)||this;return r.caption="",r.title="",r.type=null,r}return r(e,t),o([i.property({type:String,json:{write:!0}})],e.prototype,"caption",void 0),o([i.property({type:String,json:{write:!0}})],e.prototype,"title",void 0),o([i.property({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=o([i.subclass("esri.popup.content.mixins.MediaInfo")],e)}(i.declared(p.JSONSupport))});