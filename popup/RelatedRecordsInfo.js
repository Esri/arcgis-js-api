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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","./support/RelatedRecordsInfoFieldOrder"],(function(e,r,o,t,s,d,l){"use strict";return function(e){function r(r){var o=e.call(this,r)||this;return o.showRelatedRecords=null,o.orderByFields=null,o}var t;return o.__extends(r,e),t=r,r.prototype.clone=function(){return new t({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?s.clone(this.orderByFields):null})},o.__decorate([d.property({type:Boolean,json:{write:!0}})],r.prototype,"showRelatedRecords",void 0),o.__decorate([d.property({type:[l],json:{write:!0}})],r.prototype,"orderByFields",void 0),r=t=o.__decorate([d.subclass("esri.popup.RelatedRecordsInfo")],r)}(t.JSONSupport)}));