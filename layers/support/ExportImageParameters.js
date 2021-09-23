/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/HandleOwner","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./commonProperties","./sublayerUtils","../../views/support/floorFilterUtils"],(function(e,r,t,s,a,o,i,n,l,y,c,p,m,u){"use strict";const h={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};e.ExportImageParameters=function(e){function t(r){var t;return(t=e.call(this,r)||this).floors=null,t.scale=0,t}r._inheritsLoose(t,e);var s=t.prototype;return s.destroy=function(){this.layer=null},s.toJSON=function(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r},r._createClass(t,[{key:"dynamicLayers",get:function(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=u.getLayerFloorFilterClause(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}},{key:"hasDynamicLayers",get:function(){return this.layer&&m.isExportDynamic(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}},{key:"layer",set:function(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(h[e.propertyName])))],"layer"))}},{key:"layers",get:function(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}},{key:"layerDefs",get:function(){var e;const r=!(null==(e=this.floors)||!e.length),t=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return t.length?JSON.stringify(t.reduce(((e,r)=>{const t=u.getLayerFloorFilterClause(this.floors,r),s=o.isSome(t)?u.combineFloorsDefinitionExpression(t,r):r.definitionExpression;return e[r.id]=s,e}),{})):null}},{key:"version",get:function(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,t=r=>{const s=this.scale,a=0===s,o=0===r.minScale||s<=r.minScale,i=0===r.maxScale||s>=r.maxScale;r.visible&&(a||o&&i)&&(r.sublayers?r.sublayers.forEach(t):e.unshift(r))};r&&r.forEach(t);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((r,t)=>e[t]!==r))?e:s}}]),t}(a.HandleOwnerMixin(s)),t.__decorate([i.property({readOnly:!0})],e.ExportImageParameters.prototype,"dynamicLayers",null),t.__decorate([i.property()],e.ExportImageParameters.prototype,"floors",void 0),t.__decorate([i.property({readOnly:!0})],e.ExportImageParameters.prototype,"hasDynamicLayers",null),t.__decorate([i.property()],e.ExportImageParameters.prototype,"layer",null),t.__decorate([i.property({readOnly:!0})],e.ExportImageParameters.prototype,"layers",null),t.__decorate([i.property({readOnly:!0})],e.ExportImageParameters.prototype,"layerDefs",null),t.__decorate([i.property({type:Number})],e.ExportImageParameters.prototype,"scale",void 0),t.__decorate([i.property(p.combinedViewLayerTimeExtentProperty)],e.ExportImageParameters.prototype,"timeExtent",void 0),t.__decorate([i.property({readOnly:!0})],e.ExportImageParameters.prototype,"version",null),t.__decorate([i.property({readOnly:!0})],e.ExportImageParameters.prototype,"visibleSublayers",null),e.ExportImageParameters=t.__decorate([c.subclass("esri.layers.mixins.ExportImageParameters")],e.ExportImageParameters),Object.defineProperty(e,"__esModule",{value:!0})}));
