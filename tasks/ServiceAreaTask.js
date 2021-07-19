/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","../rest/serviceArea","./Task"],(function(r,e,s,o,t,c,u,n,a){"use strict";let l=function(e){function s(r){var s;return(s=e.call(this,r)||this).url=null,s}return r._inheritsLoose(s,e),s.prototype.solve=function(r,e){return n.solve(this.url,r,e)},s}(a);return e.__decorate([s.property()],l.prototype,"url",void 0),l=e.__decorate([u.subclass("esri.tasks.ServiceAreaTask")],l),l}));
