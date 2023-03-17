/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderTechnique/ShaderTechniqueConfiguration"],(function(e,o,a,t){"use strict";var i;e.AlphaMode=void 0,(i=e.AlphaMode||(e.AlphaMode={}))[i.None=0]="None",i[i.Alpha=1]="Alpha",i[i.PremultipliedAlpha=2]="PremultipliedAlpha",i[i.COUNT=3]="COUNT";let r=function(a){function t(){var o;return(o=a.apply(this,arguments)||this).alphaMode=e.AlphaMode.None,o.hasOpacityFactor=!1,o}return o._inheritsLoose(t,a),t}(t.ShaderTechniqueConfiguration);a.__decorate([t.parameter({count:e.AlphaMode.COUNT})],r.prototype,"alphaMode",void 0),a.__decorate([t.parameter()],r.prototype,"hasOpacityFactor",void 0),e.CompositingTechniqueConfiguration=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
