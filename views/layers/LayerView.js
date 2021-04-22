/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/Accessor","../../core/Evented","../../core/Identifiable","../../core/Promise","../../core/HandleOwner"],(function(e,t,r,i,n,o,s,l,a,p,d,u,c,y,h){"use strict";let g=function(t){function r(e){var r;return(r=t.call(this,e)||this).layer=null,r.parent=null,r}e._inheritsLoose(r,t);var n=r.prototype;return n.initialize=function(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer&&this.layer.title||"no title";throw i.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e),e}}))},n.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},n.getSuspendInfo=function(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},n.isUpdating=function(){return!1},e._createClass(r,[{key:"fullOpacity",get:function(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}}]),r}(h.HandleOwnerMixin(c.IdentifiableMixin(y.EsriPromiseMixin(u.EventedMixin(d)))));return t.__decorate([o.property()],g.prototype,"fullOpacity",null),t.__decorate([o.property()],g.prototype,"layer",void 0),t.__decorate([o.property()],g.prototype,"parent",void 0),t.__decorate([o.property({readOnly:!0})],g.prototype,"suspended",null),t.__decorate([o.property({readOnly:!0})],g.prototype,"suspendInfo",null),t.__decorate([o.property({readOnly:!0})],g.prototype,"legendEnabled",null),t.__decorate([o.property({type:Boolean,readOnly:!0})],g.prototype,"updating",null),t.__decorate([o.property()],g.prototype,"visible",null),g=t.__decorate([s.subclass("esri.views.layers.LayerView")],g),g}));
