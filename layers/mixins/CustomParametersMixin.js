/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension"],(function(e,r,s,o,t,c,u,i,n,a,p){"use strict";e.CustomParametersMixin=e=>{let o=function(e){function s(){var r;return(r=e.apply(this,arguments)||this).customParameters=null,r}return r._inheritsLoose(s,e),s}(e);return s.__decorate([u.property({json:{write:!0,origins:{"web-scene":{write:!1}}}})],o.prototype,"customParameters",void 0),o=s.__decorate([i.subclass("esri.layers.mixins.CustomParametersMixin")],o),o},Object.defineProperty(e,"__esModule",{value:!0})}));
