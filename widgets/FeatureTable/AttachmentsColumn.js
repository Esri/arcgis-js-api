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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!../FeatureTable/nls/FeatureTable","../../core/accessorSupport/decorators","./Grid/Column"],(function(e,t,r,o,n,a,p,i){var d="esri-feature-table__column--attachments",l="esri-icon-locked";return function(e){function t(t){var r=e.call(this,t)||this;return r.editable=!1,r.nullable=!1,r.header=a.attachments,r.path="esri-feature-table__attachments",r.headerRenderFunction=function(e){e.root.innerHTML='<div class="'+l+'"></div>'+r.header},r.renderFunction=function(e){var t=e.root,o=e.rowData,n=r._countFromItem(o.item).toString();t.innerHTML='<div class="'+d+'">'+n+"</div>"},r.sortable=!1,r.textAlign="center",r}return o(t,e),t.prototype._countFromItem=function(e){return e.attachments&&e.attachments.length||0},n([p.property({readOnly:!0})],t.prototype,"editable",void 0),n([p.property({readOnly:!0})],t.prototype,"nullable",void 0),n([p.property({readOnly:!0})],t.prototype,"header",void 0),n([p.property({readOnly:!0})],t.prototype,"path",void 0),n([p.property()],t.prototype,"headerRenderFunction",void 0),n([p.property()],t.prototype,"renderFunction",void 0),n([p.property()],t.prototype,"sortable",void 0),n([p.property({readOnly:!0})],t.prototype,"textAlign",void 0),t=n([p.subclass("esri.widgets.FeatureTable.AttachmentsColumn")],t)}(p.declared(i))}));