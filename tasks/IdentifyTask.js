/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","../rest/identify","./Task"],(function(e,r,o,s,t,i,n,c,u){"use strict";let p=function(r){function o(e){var o;return(o=r.call(this,e)||this).gdbVersion=null,o.url=null,o}return e._inheritsLoose(o,r),o.prototype.execute=function(e,r){return this.gdbVersion&&!e.gdbVersion&&(e.gdbVersion=this.gdbVersion),c.identify(this.url,e,r)},o}(u);return r.__decorate([o.property()],p.prototype,"gdbVersion",void 0),r.__decorate([o.property()],p.prototype,"url",void 0),p=r.__decorate([n.subclass("esri.tasks.IdentifyTask")],p),p}));
