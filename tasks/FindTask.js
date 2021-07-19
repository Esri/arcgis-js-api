/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","../rest/find","./Task"],(function(r,e,o,s,t,n,c,i,u){"use strict";let p=function(e){function o(r){var o;return(o=e.call(this,r)||this).gdbVersion=null,o.url=null,o}return r._inheritsLoose(o,e),o.prototype.execute=function(r,e){return this.gdbVersion&&!r.gdbVersion&&(r.gdbVersion=this.gdbVersion),i.find(this.url,r,e)},o}(u);return e.__decorate([o.property()],p.prototype,"gdbVersion",void 0),e.__decorate([o.property()],p.prototype,"url",void 0),p=e.__decorate([c.subclass("esri.tasks.FindTask")],p),p}));
