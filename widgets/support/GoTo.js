/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,o,r,t,s,c,i,p){"use strict";const n=e=>{let s=function(e){function r(...o){var r;return(r=e.call(this,...o)||this).goToOverride=null,r.view=null,r}return o._inheritsLoose(r,e),r.prototype.callGoTo=function(e){const{view:o}=this;return this.goToOverride?this.goToOverride(o,e):o.goTo(e.target,e.options)},r}(e);return r.__decorate([t.property()],s.prototype,"goToOverride",void 0),r.__decorate([t.property()],s.prototype,"view",void 0),s=r.__decorate([p.subclass("esri.widgets.support.GoTo")],s),s};e.GoToMixin=n,Object.defineProperty(e,"__esModule",{value:!0})}));
