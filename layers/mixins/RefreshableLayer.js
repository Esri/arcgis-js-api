/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,s,t,o,c,n,i){"use strict";const a=e=>{let o=function(e){function s(){var r;return(r=e.apply(this,arguments)||this).refreshInterval=0,r}return r._inheritsLoose(s,e),s.prototype.refresh=function(){this.emit("refresh")},s}(e);return s.__decorate([t.property({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0,origins:{"web-document":{write:!0}}}})],o.prototype,"refreshInterval",void 0),o=s.__decorate([i.subclass("esri.layers.mixins.RefreshableLayer")],o),o};e.RefreshableLayer=a,Object.defineProperty(e,"__esModule",{value:!0})}));
