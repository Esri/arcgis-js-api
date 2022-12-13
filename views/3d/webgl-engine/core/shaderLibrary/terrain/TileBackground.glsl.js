/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/vec3f64","../output/BlendOptions","./BackgroundGrid.glsl","../util/BlendModes.glsl","../util/WebGL2Utils","../../shaderModules/Float3PassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType"],(function(e,o,r,l,t,a,s,i,u,d,n,p){"use strict";var c,g,m;e.BlendLayersOutput=void 0,(c=e.BlendLayersOutput||(e.BlendLayersOutput={}))[c.Composite=0]="Composite",c[c.ColorComposite=1]="ColorComposite",c[c.GridComposite=2]="GridComposite",c[c.GroupBackgroundComposite=3]="GroupBackgroundComposite",c[c.COUNT=4]="COUNT",e.BaseOpacityMode=void 0,(g=e.BaseOpacityMode||(e.BaseOpacityMode={}))[g.NotRequired=0]="NotRequired",g[g.Required=1]="Required",g[g.COUNT=2]="COUNT",e.PremultipliedAlphaSource=void 0,(m=e.PremultipliedAlphaSource||(e.PremultipliedAlphaSource={}))[m.Off=0]="Off",m[m.On=1]="On",m[m.COUNT=2]="COUNT";let C=function(e){function l(){var o;return(o=e.apply(this,arguments)||this).baseOpacity=1,o.backgroundColor=r.ZEROS,o.fboTexture=null,o}return o._inheritsLoose(l,e),l}(d.NoParameters);function y(o,r){const c=r.output===e.BlendLayersOutput.GridComposite,g=r.output===e.BlendLayersOutput.ColorComposite,m=r.output===e.BlendLayersOutput.GroupBackgroundComposite,C=r.output===e.BlendLayersOutput.Composite;c&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.include(t.BackgroundGrid)),g&&o.fragment.uniforms.add(new i.Float3PassUniform("backgroundColor",(e=>e.backgroundColor)));const y=r.baseOpacityMode===e.BaseOpacityMode.Required;if(y&&o.fragment.uniforms.add(new u.FloatPassUniform("baseOpacity",(e=>e.baseOpacity))),C){const e=r.hasWebGL2Context?p.TextureSizeUniformType.None:p.TextureSizeUniformType.InvSize;o.fragment.uniforms.add(n.createTexture2DPassSizeUniforms("fboColor",(e=>e.fboTexture),e))}const f=r.blendMode!==l.LayerBlendMode.Normal,b=r.premultipliedSource===e.PremultipliedAlphaSource.On;o.fragment.include(a.BlendModes,r),o.fragment.code.add(d.glsl`
    vec4 getBackground(vec2 uv) {
      return ${y?d.glsl`baseOpacity *`:""} ${m?d.glsl`vec4(0.0, 0.0, 0.0, 0.0)`:g?d.glsl`vec4(backgroundColor, 1.0)`:c?d.glsl`gridColor(uv)`:d.glsl`${s.texelFetch(r,"fboColor","gl_FragCoord.xy")}`};
    }

    vec4 blendLayers(vec4 bgColor, vec4 colorLayer, float opacity) {
      ${f?d.glsl`
          vec3 Cb = bgColor.a == 0.0 ? bgColor.rgb : vec3(bgColor.rgb * bgColor.a);
          return applyBlendMode(colorLayer.rgb, colorLayer.a * opacity, Cb, bgColor.a);`:d.glsl`
          vec4 pmColorLayer = vec4(colorLayer.xyz, 1.0);
          float composeAlpha = colorLayer.a * opacity;
          return ${b?d.glsl`bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`:C&&!y||m?d.glsl`pmColorLayer * composeAlpha;`:d.glsl`mix(bgColor, pmColorLayer, composeAlpha);`}`}
    }`)}e.TileBackground=y,e.TileBackgroundPassParameters=C,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
