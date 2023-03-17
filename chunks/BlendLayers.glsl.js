/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/terrain/BackgroundGrid.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/TileBackground.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/TileComposite.glsl","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,o,n,d,a,i,l,s){"use strict";var g;function t(g){const t=new l.ShaderBuilder;if(t.include(n.TileComposite),g.background===e.BackgroundMode.Only){const e=g.output===o.BlendLayersOutput.ColorComposite;return e?t.fragment.uniforms.add(new d.Float3PassUniform("backgroundColor",(e=>e.backgroundColor))):(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.include(r.BackgroundGrid)),t.fragment.code.add(i.glsl`
    void main() {
      gl_FragColor = vec4(${e?i.glsl`backgroundColor`:i.glsl`gridColor(uv)`}, 1.0);
    }
  `),t}return t.include(o.TileBackground,g),t.fragment.uniforms.add(new s.Texture2DPassUniform("tex",(e=>e.texture))),t.fragment.uniforms.add(new a.FloatPassUniform("opacity",(e=>e.opacity))),t.fragment.code.add(i.glsl`void main() {
vec4 bgColor = getBackground(uv);
gl_FragColor = blendLayers(bgColor, texture2D(tex, uv), opacity);
}`),t}e.BackgroundMode=void 0,(g=e.BackgroundMode||(e.BackgroundMode={}))[g.BelowLayer=0]="BelowLayer",g[g.Only=1]="Only",g[g.COUNT=2]="COUNT";const u=Object.freeze(Object.defineProperty({__proto__:null,get BackgroundMode(){return e.BackgroundMode},build:t},Symbol.toStringTag,{value:"Module"}));e.BlendLayers=u,e.build=t}));
