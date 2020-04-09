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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/jsonMap","../core/screenUtils","../core/accessorSupport/decorators","./Symbol"],(function(e,t,r,o,s,p,n,i){var u=new s.default({esriSMS:"simple-marker",esriPMS:"picture-marker"});return function(e){function t(t){var r=e.call(this,t)||this;return r.angle=0,r.type=null,r.xoffset=0,r.yoffset=0,r.size=9,r}return r(t,e),t.prototype.hash=function(){return this.type+"."+this.angle+"."+this.size+"."+this.xoffset+"."+this.yoffset},o([n.property({type:Number,json:{read:function(e){return e&&-1*e},write:function(e,t){return t.angle=e&&-1*e}}})],t.prototype,"angle",void 0),o([n.property({type:u.apiValues,readOnly:!0,json:{type:u.jsonValues}})],t.prototype,"type",void 0),o([n.property({type:Number,cast:p.toPt,json:{write:!0}})],t.prototype,"xoffset",void 0),o([n.property({type:Number,cast:p.toPt,json:{write:!0}})],t.prototype,"yoffset",void 0),o([n.property({type:Number,cast:function(e){return"auto"===e?e:p.toPt(e)},json:{write:!0}})],t.prototype,"size",void 0),t=o([n.subclass("esri.symbols.MarkerSymbol")],t)}(n.declared(i))}));