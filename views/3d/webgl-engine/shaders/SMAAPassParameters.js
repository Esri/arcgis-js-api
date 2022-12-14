/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec4","../../../../chunks/vec4f64","../core/shaderModules/Float4PassUniform","../core/shaderModules/interfaces"],(function(e,r,t,o,s,i){"use strict";let n=function(e){function t(){return e.apply(this,arguments)||this}return r._inheritsLoose(t,e),t}(i.NoParameters),u=function(e){function t(){return e.apply(this,arguments)||this}return r._inheritsLoose(t,e),t}(n);function c(e){e.uniforms.add(new s.Float4PassUniform("resolution",(e=>t.set(a,1/e.colorTexture.descriptor.width,1/e.colorTexture.descriptor.height,e.colorTexture.descriptor.width,e.colorTexture.descriptor.height))))}const a=o.create();e.SMAAPassParameters=n,e.ValidSMAAPassParameters=u,e.addResolutionUniform=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
