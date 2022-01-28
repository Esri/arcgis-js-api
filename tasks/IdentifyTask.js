/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../rest/identify","./Task"],(function(r,e,s,o,t,i,n,c,u){"use strict";let p=function(e){function s(r){var s;return(s=e.call(this,r)||this).gdbVersion=null,s.url=null,s}return r._inheritsLoose(s,e),s.prototype.execute=function(r,e){return this.gdbVersion&&!r.gdbVersion&&(r.gdbVersion=this.gdbVersion),c.identify(this.url,r,e)},s}(u);e.__decorate([s.property()],p.prototype,"gdbVersion",void 0),e.__decorate([s.property()],p.prototype,"url",void 0),p=e.__decorate([n.subclass("esri.tasks.IdentifyTask")],p);return p}));
