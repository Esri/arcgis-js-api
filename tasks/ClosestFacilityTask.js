/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../rest/closestFacility","./Task"],(function(r,e,s,t,o,c,l,u,a){"use strict";let i=function(e){function s(r){var s;return(s=e.call(this,r)||this).url=null,s}return r._inheritsLoose(s,e),s.prototype.solve=function(r,e){return u.solve(this.url,r,e)},s}(a);e.__decorate([s.property()],i.prototype,"url",void 0),i=e.__decorate([l.subclass("esri.tasks.ClosestFacilityTask")],i);return i}));
