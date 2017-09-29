// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./Domain"],function(e,r,t,n,a,o){var u=function(e){function r(r){var t=e.call(this,r)||this;return t.maxValue=null,t.minValue=null,t.type="range",t}return t(r,e),n([a.property({json:{read:{source:"range",reader:function(e,r){return r.range&&r.range[1]}},write:{target:"range",writer:function(e,r,t){r[t]=[this.minValue,e]}}}})],r.prototype,"maxValue",void 0),n([a.property({json:{read:{source:"range",reader:function(e,r){return r.range&&r.range[0]}},write:{target:"range",writer:function(e,r,t){r[t]=[e,this.maxValue]}}}})],r.prototype,"minValue",void 0),n([a.property()],r.prototype,"type",void 0),r=n([a.subclass("esri.layers.support.RangeDomain")],r)}(a.declared(o));return u});