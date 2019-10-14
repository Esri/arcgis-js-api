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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators"],function(e,t,r,n,o,a,c){return function(e){function t(t){var r=e.call(this,t)||this;return r.activeRange=null,r.currentRangeExtent=null,r.fullRangeExtent=null,r}r(t,e),o=t,t.prototype.clone=function(){return new o(a.clone({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))};var o;return n([c.property({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],t.prototype,"activeRange",void 0),n([c.property({type:[Number],json:{write:!0}})],t.prototype,"currentRangeExtent",void 0),n([c.property({type:[Number],json:{write:!0}})],t.prototype,"fullRangeExtent",void 0),t=o=n([c.subclass("esri.webdoc.RangeInfo")],t)}(c.declared(o.JSONSupport))});