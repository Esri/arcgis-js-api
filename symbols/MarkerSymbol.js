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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/jsonMap","../core/screenUtils","../core/accessorSupport/decorators","./Symbol"],function(e,r,t,o,p,s,n,i){var u=new p.default({esriSMS:"simple-marker",esriPMS:"picture-marker"});return function(e){function r(r){var t=e.call(this,r)||this;return t.angle=0,t.type=null,t.xoffset=0,t.yoffset=0,t.size=9,t}return t(r,e),o([n.property({type:Number,json:{read:function(e){return e&&-1*e},write:function(e,r){return r.angle=e&&-1*e}}})],r.prototype,"angle",void 0),o([n.property({type:u.apiValues,readOnly:!0,json:{type:u.jsonValues}})],r.prototype,"type",void 0),o([n.property({type:Number,cast:s.toPt,json:{write:!0}})],r.prototype,"xoffset",void 0),o([n.property({type:Number,cast:s.toPt,json:{write:!0}})],r.prototype,"yoffset",void 0),o([n.property({type:Number,cast:function(e){return"auto"===e?e:s.toPt(e)},json:{write:!0}})],r.prototype,"size",void 0),r=o([n.subclass("esri.symbols.MarkerSymbol")],r)}(n.declared(i))});