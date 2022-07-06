/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../core/maybe.js";import{LayerBlendMode as o}from"../views/3d/webgl-engine/core/shaderLibrary/output/BlendOptions.js";import{BackgroundGrid as r}from"../views/3d/webgl-engine/core/shaderLibrary/terrain/BackgroundGrid.glsl.js";import{TileComposite as a}from"../views/3d/webgl-engine/core/shaderLibrary/terrain/TileComposite.glsl.js";import{BlendModes as i}from"../views/3d/webgl-engine/core/shaderLibrary/util/BlendModes.glsl.js";import{Float3PassUniform as t}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{FloatPassUniform as n}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as l}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as d}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as s}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";var c,g;function m(m){const u=new d,p=m.output===c.GridOnly,b=m.output===c.GridComposite,f=b||p,y=m.output===c.ColorOnly,C=m.output===c.ColorComposite,O=C||y,v=b||C;if(u.include(a),O&&u.fragment.uniforms.add(new t("backgroundColor",(e=>e.backgroundColor))),m.baseOpacityMode!==g.One&&u.fragment.uniforms.add(new n("baseOpacity",(e=>e.baseOpacity))),f&&(u.extensions.add("GL_OES_standard_derivatives"),u.fragment.include(r)),p||y)return u.fragment.code.add(l`
    void main() {
      gl_FragColor = ${y?l`vec4(backgroundColor, 1.0)`:l`gridColor(uv)`};
    }
  `),u;const w=m.blendMode!==o.Normal,x=m.baseOpacityMode===g.OnBaseLayer,L=m.baseOpacityMode===g.OnBackground||m.baseOpacityMode===g.OnBaseLayer,T=m.premultipliedSource;return u.fragment.uniforms.add(new s("tex",(e=>e.texture))),u.fragment.uniforms.add(new n("opacity",(e=>e.opacity))),(w||x||T)&&(u.fragment.uniforms.add(new s("fboColor",(e=>e.fboTexture))),u.fragment.uniforms.add(new n("tileSize",(o=>e(o.fboTexture)?o.fboTexture.descriptor.width:1)))),u.fragment.include(i,m),u.fragment.code.add(l`
    void main() {
      ${v||x||T?l`
      vec4 bgColor = ${C?l`vec4(backgroundColor, 1.0)`:b?l`gridColor(uv)`:l`texture2D(fboColor, gl_FragCoord.xy / tileSize)`};
      ${L?l`bgColor *= baseOpacity;`:""}`:""}
      vec4 colorLayer = texture2D(tex, uv);
      ${w?l`
          vec4 fboTex = ${v?l`bgColor;`:l`texture2D(fboColor, gl_FragCoord.xy / tileSize) ${x?" * baseOpacity":""};`}
          vec3 Cb = fboTex.a == 0.0 ? fboTex.rgb : vec3(fboTex.rgb * fboTex.a);
          gl_FragColor = applyBlendMode(colorLayer.rgb, colorLayer.a * opacity, Cb, fboTex.a);`:l`
          vec4 pmColorLayer = vec4(colorLayer.xyz, 1.0);
          float composeAlpha = colorLayer.a * opacity;
          gl_FragColor = ${T?l`bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`:v||x?l`mix(bgColor, pmColorLayer, composeAlpha);`:l`pmColorLayer * composeAlpha;`}`}
    }
  `),u}!function(e){e[e.Composite=0]="Composite",e[e.ColorOnly=1]="ColorOnly",e[e.GridOnly=2]="GridOnly",e[e.ColorComposite=3]="ColorComposite",e[e.GridComposite=4]="GridComposite",e[e.COUNT=5]="COUNT"}(c||(c={})),function(e){e[e.One=0]="One",e[e.OnBackground=1]="OnBackground",e[e.OnBaseLayer=2]="OnBaseLayer",e[e.COUNT=3]="COUNT"}(g||(g={}));const u=Object.freeze(Object.defineProperty({__proto__:null,get BlendLayersOutput(){return c},get BaseOpacityMode(){return g},build:m},Symbol.toStringTag,{value:"Module"}));export{c as B,g as a,u as b,m as c};
