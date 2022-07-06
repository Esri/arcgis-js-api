/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import e from"../../layers/support/FeatureFilter.js";const s=s=>{let c=class extends s{constructor(...r){super(...r),this.connectionError=null,this.connectionStatus="disconnected",this.filter=null}};return r([o({readOnly:!0})],c.prototype,"connectionError",void 0),r([o({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],c.prototype,"connectionStatus",void 0),r([o({type:e})],c.prototype,"filter",void 0),c=r([t("esri.layers.mixins.StreamLayerView")],c),c};export{s as default};
