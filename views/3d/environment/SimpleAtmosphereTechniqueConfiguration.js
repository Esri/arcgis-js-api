/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/materials/DefaultTechniqueConfiguration"],(function(e,r,o,n,t){"use strict";var i;e.SimpleAtmosphereGeometry=void 0,(i=e.SimpleAtmosphereGeometry||(e.SimpleAtmosphereGeometry={}))[i.Cone=0]="Cone",i[i.Cylinder=1]="Cylinder",i[i.Underground=2]="Underground",i[i.COUNT=3]="COUNT";let u=function(o){function n(){var r;return(r=o.apply(this,arguments)||this).geometry=e.SimpleAtmosphereGeometry.Cone,r}return r._inheritsLoose(n,o),n}(t.DefaultTechniqueConfiguration);o.__decorate([n.parameter({count:e.SimpleAtmosphereGeometry.COUNT})],u.prototype,"geometry",void 0),e.SimpleAtmosphereTechniqueConfiguration=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
