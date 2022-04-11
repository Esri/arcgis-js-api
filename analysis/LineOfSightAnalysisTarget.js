/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Clonable","../core/maybe","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../geometry/Point"],(function(e,o,r,t,s,i,n,c,a,p){"use strict";let l=function(o){function r(e){var r;return(r=o.call(this,e)||this).position=null,r}return e._inheritsLoose(r,o),r.prototype.equals=function(e){return t.equalsMaybe(this.position,e.position)&&t.equalsMaybe(this.intersection,e.intersection)},r}(r.Clonable);o.__decorate([s.property({type:p})],l.prototype,"position",void 0),o.__decorate([s.property()],l.prototype,"intersection",void 0),l=o.__decorate([a.subclass("esri.analysis.LineOfSightAnalysisTarget")],l);return l}));
