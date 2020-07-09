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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators"],(function(e,t,n,r,o,a){return function(e){function t(t){var n=e.call(this,t)||this;return n.activeRange=null,n.currentRangeExtent=null,n.fullRangeExtent=null,n}var r;return n.__extends(t,e),r=t,t.prototype.clone=function(){return new r(o.clone({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))},n.__decorate([a.property({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],t.prototype,"activeRange",void 0),n.__decorate([a.property({type:[Number],json:{write:!0}})],t.prototype,"currentRangeExtent",void 0),n.__decorate([a.property({type:[Number],json:{write:!0}})],t.prototype,"fullRangeExtent",void 0),t=r=n.__decorate([a.subclass("esri.webdoc.RangeInfo")],t)}(r.JSONSupport)}));