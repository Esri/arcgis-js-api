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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../portal/Portal","./Symbol"],function(t,r,e,o,p,a,l){return function(t){function r(r){var e=t.call(this,r)||this;return e.data=null,e.portal=null,e.styleName="",e.styleUrl="",e.type="cim",e}e(r,t),l=r,r.prototype.readData=function(t,r){return r.data?r.data:r},r.prototype.clone=function(){return new l({color:this.color,data:this.data,portal:this.portal,styleName:this.styleName,styleUrl:this.styleUrl})};var l;return o([p.property({json:{write:!1}})],r.prototype,"color",void 0),o([p.property({json:{write:!0}})],r.prototype,"data",void 0),o([p.reader("data",["data","symbol"])],r.prototype,"readData",null),o([p.property({type:a,json:{write:!1}})],r.prototype,"portal",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"styleName",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"styleUrl",void 0),o([p.property({type:String,readOnly:!0})],r.prototype,"type",void 0),r=l=o([p.subclass("esri.symbols.CIMSymbol")],r)}(p.declared(l))});