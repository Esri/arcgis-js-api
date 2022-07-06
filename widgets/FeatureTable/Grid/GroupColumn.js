/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import t from"./Column.js";let e=class extends t{constructor(o){super(o),this.columns=null,this.path=null,this.sortable=!1}};o([r()],e.prototype,"columns",void 0),o([r({aliasOf:"header"})],e.prototype,"path",void 0),o([r({readOnly:!0})],e.prototype,"sortable",void 0),e=o([s("esri.widgets.FeatureTable.Grid.GroupColumn")],e);const p=e;export{p as default};
