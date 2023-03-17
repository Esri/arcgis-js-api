/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration"],(function(e,i,n,t){"use strict";var o;e.PrecipitationType=void 0,(o=e.PrecipitationType||(e.PrecipitationType={}))[o.Rain=0]="Rain",o[o.Snow=1]="Snow",o[o.COUNT=2]="COUNT";let r=function(n){function t(){var i;return(i=n.apply(this,arguments)||this).type=e.PrecipitationType.Rain,i}return i._inheritsLoose(t,n),t}(t.ShaderTechniqueConfiguration);n.__decorate([t.parameter({count:e.PrecipitationType.COUNT})],r.prototype,"type",void 0),e.PrecipitationTechniqueConfiguration=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
