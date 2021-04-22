/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../core/Error","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/accessorSupport/read","../../core/accessorSupport/write","./operationalLayers","../support/commonProperties"],(function(e,r,t,o,i,a,n,s,p,l,y,c,u,d,w,g,_){"use strict";const h=e=>{let o=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).title=null,r}r._inheritsLoose(t,e);var o=t.prototype;return o.writeListMode=function(e,r,t,o){(o&&"ground"===o.layerContainerType||e&&w.willPropertyWrite(this,t,{},o))&&(r[t]=e)},o.writeOperationalLayerType=function(e,r,t,o){!e||o&&"tables"===o.layerContainerType||(r.layerType=e)},o.writeTitle=function(e,r){r.title=e||"Layer"},o.read=function(r,t){t&&(t.layer=this),d.readLoadable(this,r,(t=>e.prototype.read.call(this,r,t)),t)},o.write=function(r,t){if(t&&t.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=g.supportedTypes[e];let o=r&&r[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(o=!1),!o)return t.messages&&t.messages.push(new l("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const o=e.prototype.write.call(this,r,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof l&&"web-document-write:property-required"===e.name)).length;return!this.url&&i?null:o},o.beforeSave=function(){},t}(e);return t.__decorate([n.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],o.prototype,"id",void 0),t.__decorate([n.property({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],o.prototype,"listMode",void 0),t.__decorate([p.writer("listMode")],o.prototype,"writeListMode",null),t.__decorate([n.property({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],o.prototype,"operationalLayerType",void 0),t.__decorate([p.writer("operationalLayerType")],o.prototype,"writeOperationalLayerType",null),t.__decorate([n.property(_.opacity)],o.prototype,"opacity",void 0),t.__decorate([n.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],o.prototype,"title",void 0),t.__decorate([p.writer("title")],o.prototype,"writeTitle",null),t.__decorate([n.property({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],o.prototype,"visible",void 0),o=t.__decorate([s.subclass("esri.layers.mixins.OperationalLayer")],o),o};function b(e){return"operationalLayerType"in e}e.OperationalLayer=h,e.isOperationalLayer=b,Object.defineProperty(e,"__esModule",{value:!0})}));
