/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/vec3f64","../output/BlendOptions","./BackgroundGrid.glsl","../util/BlendModes.glsl","../util/WebGL2Utils","../../shaderModules/Float3PassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType"],(function(e,o,r,l,t,a,s,i,u,d,n,c){"use strict";var p,g,m;e.BlendLayersOutput=void 0,(p=e.BlendLayersOutput||(e.BlendLayersOutput={}))[p.Composite=0]="Composite",p[p.ColorComposite=1]="ColorComposite",p[p.GridComposite=2]="GridComposite",p[p.GroupBackgroundComposite=3]="GroupBackgroundComposite",p[p.COUNT=4]="COUNT",e.BaseOpacityMode=void 0,(g=e.BaseOpacityMode||(e.BaseOpacityMode={}))[g.NotRequired=0]="NotRequired",g[g.Required=1]="Required",g[g.COUNT=2]="COUNT",e.PremultipliedAlphaSource=void 0,(m=e.PremultipliedAlphaSource||(e.PremultipliedAlphaSource={}))[m.Off=0]="Off",m[m.On=1]="On",m[m.COUNT=2]="COUNT";let y=function(e){function l(){var o;return(o=e.apply(this,arguments)||this).baseOpacity=1,o.backgroundColor=r.ZEROS,o.fboTexture=null,o}return o._inheritsLoose(l,e),l}(d.NoParameters);function f(o,r){const p=r.output===e.BlendLayersOutput.GridComposite,g=r.output===e.BlendLayersOutput.ColorComposite,m=r.output===e.BlendLayersOutput.GroupBackgroundComposite,y=r.output===e.BlendLayersOutput.Composite;p&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.include(t.BackgroundGrid)),g&&o.fragment.uniforms.add(new i.Float3PassUniform("backgroundColor",(e=>e.backgroundColor)));const f=r.baseOpacityMode===e.BaseOpacityMode.Required;if(f&&o.fragment.uniforms.add(new u.FloatPassUniform("baseOpacity",(e=>e.baseOpacity))),y){const e=r.hasWebGL2Context?c.TextureSizeUniformType.None:c.TextureSizeUniformType.InvSize;o.fragment.uniforms.add(n.createTexture2DPassSizeUniforms("fboColor",(e=>e.fboTexture),e))}const C=r.blendMode!==l.LayerBlendMode.Normal,b=r.premultipliedSource===e.PremultipliedAlphaSource.On;o.fragment.include(a.BlendModes,r),o.fragment.code.add(d.glsl`
    vec4 getBackground(vec2 uv) {
      return ${f?d.glsl`baseOpacity *`:""} ${m?d.glsl`vec4(0.0, 0.0, 0.0, 0.0)`:g?d.glsl`vec4(backgroundColor, 1.0)`:p?d.glsl`vec4(gridColor(uv), 1.0)`:d.glsl`${s.texelFetch(r,"fboColor","gl_FragCoord.xy")}`};
    }

    vec4 blendLayers(vec4 bgColor, vec4 colorLayer, float opacity) {
      ${C?d.glsl`
          vec3 cl = colorLayer.a == 0.0 ? colorLayer.rgb : colorLayer.rgb / colorLayer.a;
          vec3 cb = bgColor.a == 0.0 ? bgColor.rgb : bgColor.rgb / bgColor.a;
          return applyBlendMode(clamp(cl, vec3(0.0), vec3(1.0)), colorLayer.a * opacity, cb, bgColor.a);`:d.glsl`
          float composeAlpha = colorLayer.a * opacity;
          return ${!b&&(y&&!f||m)?d.glsl`colorLayer * opacity;`:d.glsl`bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`}`}
    }`)}e.TileBackground=f,e.TileBackgroundPassParameters=y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
