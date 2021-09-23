/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./Grid/Column"],(function(t,e,r,o,n,a,c,s){"use strict";const p={attachmentsColumn:"esri-feature-table__column--attachments"};let u=function(e){function r(t){var r;return(r=e.call(this,t)||this).header="",r.path="EsriFeatureTableAttachmentsColumn",r.renderFunction=({root:t,rowData:e})=>{const o=r._countFromItem(e.item).toString();t.innerHTML=`<div class="${p.attachmentsColumn}">${o}</div>`},r.sortable=!1,r.textAlign="center",r}return t._inheritsLoose(r,e),r.prototype._countFromItem=function(t){return t.attachments&&t.attachments.length||0},r}(s);return e.__decorate([r.property({constructOnly:!0})],u.prototype,"header",void 0),e.__decorate([r.property({readOnly:!0})],u.prototype,"path",void 0),e.__decorate([r.property()],u.prototype,"renderFunction",void 0),e.__decorate([r.property({readOnly:!0})],u.prototype,"sortable",void 0),e.__decorate([r.property({readOnly:!0})],u.prototype,"textAlign",void 0),u=e.__decorate([c.subclass("esri.widgets.FeatureTable.AttachmentsColumn")],u),u}));
