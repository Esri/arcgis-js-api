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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./Grid/Column"],(function(t,e,r,o,n){var a="esri-feature-table__column--attachments";return function(t){function e(e){var r=t.call(this,e)||this;return r.header="",r.path="EsriFeatureTableAttachmentsColumn",r.renderFunction=function(t){var e=t.root,o=t.rowData,n=r._countFromItem(o.item).toString();e.innerHTML='<div class="'+a+'">'+n+"</div>"},r.sortable=!1,r.textAlign="center",r}return r.__extends(e,t),e.prototype._countFromItem=function(t){return t.attachments&&t.attachments.length||0},r.__decorate([o.property({constructOnly:!0})],e.prototype,"header",void 0),r.__decorate([o.property({readOnly:!0})],e.prototype,"path",void 0),r.__decorate([o.property()],e.prototype,"renderFunction",void 0),r.__decorate([o.property({readOnly:!0})],e.prototype,"sortable",void 0),r.__decorate([o.property({readOnly:!0})],e.prototype,"textAlign",void 0),e=r.__decorate([o.subclass("esri.widgets.FeatureTable.AttachmentsColumn")],e)}(n)}));