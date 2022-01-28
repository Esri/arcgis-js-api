/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,s,t,o,c,a,i){"use strict";const n=e=>{let o=function(e){function s(){var r;return(r=e.apply(this,arguments)||this).customParameters=null,r}return r._inheritsLoose(s,e),s}(e);return s.__decorate([t.property({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],o.prototype,"customParameters",void 0),o=s.__decorate([i.subclass("esri.layers.mixins.CustomParametersMixin")],o),o};e.CustomParametersMixin=n,Object.defineProperty(e,"__esModule",{value:!0})}));
