/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","../rest/closestFacility","./Task"],(function(r,e,s,o,t,c,u,l,i){"use strict";let n=function(e){function s(r){var s;return(s=e.call(this,r)||this).url=null,s}return r._inheritsLoose(s,e),s.prototype.solve=function(r,e){return l.solve(this.url,r,e)},s}(i);return e.__decorate([s.property()],n.prototype,"url",void 0),n=e.__decorate([u.subclass("esri.tasks.ClosestFacilityTask")],n),n}));
