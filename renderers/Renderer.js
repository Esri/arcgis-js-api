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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","@dojo/framework/shim/array","@dojo/framework/shim/Set","../core/JSONSupport","../core/kebabDictionary","../core/accessorSupport/decorators","./support/AuthoringInfo"],function(e,r,t,o,n,i,s,a,p,u,c,l){var d=new u.default({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",rasterStretch:"raster-stretch"},{ignoreUnknown:!0});return function(e){function r(r){var t=e.call(this,r)||this;return t.authoringInfo=null,t.type=null,t}return t(r,e),r.prototype.getRequiredFields=function(e){return i(this,void 0,void 0,function(){var r;return n(this,function(t){switch(t.label){case 0:return this.collectRequiredFields?(r=new a.default,[4,this.collectRequiredFields(r,e)]):[2,[]];case 1:return t.sent(),[2,s.from(r).sort()]}})})},r.prototype.getSymbol=function(e,r){},r.prototype.getSymbols=function(){return[]},o([c.property({type:l,json:{write:!0}})],r.prototype,"authoringInfo",void 0),o([c.property({type:d.apiValues,readOnly:!0,json:{type:d.jsonValues,read:!1,write:{writer:d.write,ignoreOrigin:!0}}})],r.prototype,"type",void 0),r=o([c.subclass("esri.renderers.Renderer")],r)}(c.declared(p))});