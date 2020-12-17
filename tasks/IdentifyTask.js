/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./Task","../rest/identify"],(function(r,e,o,s,t,i,n,c,u,p,l,a){"use strict";let d=function(e){function o(r){var o;return(o=e.call(this,r)||this).gdbVersion=null,o.url=null,o}return r._inheritsLoose(o,e),o.prototype.execute=function(r,e){return this.gdbVersion&&!r.gdbVersion&&(r.gdbVersion=this.gdbVersion),a.identify(this.url,r,e)},o}(l);return e.__decorate([i.property()],d.prototype,"gdbVersion",void 0),e.__decorate([i.property()],d.prototype,"url",void 0),d=e.__decorate([n.subclass("esri.tasks.IdentifyTask")],d),d}));
