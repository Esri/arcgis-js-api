/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderTechnique/ShaderTechniqueConfiguration"],(function(a,i,e,t){"use strict";var o;a.ShadowCastVisualization=void 0,(o=a.ShadowCastVisualization||(a.ShadowCastVisualization={}))[o.Gradient=0]="Gradient",o[o.Threshold=1]="Threshold",o[o.COUNT=2]="COUNT";let n=function(e){function t(){var i;return(i=e.apply(this,arguments)||this).visualization=a.ShadowCastVisualization.Gradient,i.bandsEnabled=!1,i}return i._inheritsLoose(t,e),t}(t.ShaderTechniqueConfiguration);e.__decorate([t.parameter({count:a.ShadowCastVisualization.COUNT})],n.prototype,"visualization",void 0),e.__decorate([t.parameter()],n.prototype,"bandsEnabled",void 0),a.ShadowCastVisualizeTechniqueConfiguration=n,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})}));
