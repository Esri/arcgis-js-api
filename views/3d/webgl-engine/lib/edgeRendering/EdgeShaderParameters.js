/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/mat3f64","../../../../../chunks/vec3f64","../../core/shaderLibrary/attributes/VertexPosition.glsl"],(function(e,r,t,a,o){"use strict";let s=function(e){function a(r,a){var o;return(o=e.call(this)||this).distanceFalloffFactor=r,o.transparency=a,o.transformNormalViewFromGlobal=t.create(),o}return r._inheritsLoose(a,e),a}(o.VertexPositionPassParameters),n=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).transformNormalViewFromGlobal=t.create(),r.slicePlaneLocalOrigin=a.create(),r.transformNormalGlobalFromModel=t.create(),r}return r._inheritsLoose(o,e),o}(o.VertexPositionDrawParameters);e.EdgeDrawParameters=n,e.EdgePassParameters=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
