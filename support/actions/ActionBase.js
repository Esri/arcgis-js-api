/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Identifiable","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,t,o,r,i,s,c,p,a){"use strict";var d;let l=d=function(t){function o(e){var o;return(o=t.call(this,e)||this).active=!1,o.className=null,o.disabled=!1,o.id=null,o.indicator=!1,o.title=null,o.type=null,o.visible=!0,o}return e._inheritsLoose(o,t),o.prototype.clone=function(){return new d({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})},o}(r.IdentifiableMixin(o));return t.__decorate([i.property()],l.prototype,"active",void 0),t.__decorate([i.property()],l.prototype,"className",void 0),t.__decorate([i.property()],l.prototype,"disabled",void 0),t.__decorate([i.property()],l.prototype,"id",void 0),t.__decorate([i.property()],l.prototype,"indicator",void 0),t.__decorate([i.property()],l.prototype,"title",void 0),t.__decorate([i.property()],l.prototype,"type",void 0),t.__decorate([i.property()],l.prototype,"visible",void 0),l=d=t.__decorate([a.subclass("esri.support.actions.ActionBase")],l),l}));
