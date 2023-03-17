/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec4f64","../../../../../../geometry/support/aaBoundingRect","../../../../terrain/interfaces","../../../../terrain/Overlay","../../renderPasses/AllRenderPasses","../ShaderOutput","../shading/MainLighting.glsl","../shading/PhysicallyBasedRenderingParameters.glsl","../shading/Water.glsl","../util/WebGL2Utils","../../shaderModules/Float4DrawUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,o,r,t,a,d,l,i,n,s,v,c,x,u){"use strict";var y;function g(e,o){const{vertex:r,fragment:t}=e;r.uniforms.add([new c.Float4DrawUniform("overlayTexOffset",((e,o)=>p(e,o))),new c.Float4DrawUniform("overlayTexScale",((e,o)=>C(e,o)))]),t.constants.add("overlayOpacity","float",1),t.uniforms.add(new u.Texture2DPassUniform("ovColorTex",((e,o)=>h(e,o)))),f(e,o)}function f(e,o){e.extensions.add("GL_OES_standard_derivatives"),o.pbrMode!==n.PBRMode.Water&&o.pbrMode!==n.PBRMode.WaterOnIntegratedMesh&&o.pbrMode!==n.PBRMode.TerrainWithWater||e.include(s.Water,o);const{vertex:r,fragment:t}=e;e.varyings.add("vtcOverlay","vec4"),r.code.add(x.glsl`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),t.code.add(x.glsl`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture2D(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture2D(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),t.code.add(x.glsl`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),t.code.add(x.glsl`
    vec4 getOverlayColorTexel(vec4 texCoords) {
          vec2 texDim =  ${v.textureSize(o,"ovColorTex")};

          vec4 color0 = ${v.texelFetch(o,"ovColorTex","vec2(texCoords.x * 0.5, texCoords.y)*texDim")};
          vec4 color1 = ${v.texelFetch(o,"ovColorTex","vec2(texCoords.z * 0.5 + 0.5, texCoords.w)*texDim")};

          bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
          bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));

          return mix(color1 * float(isValid1), color0, float(isValid0));
    }
  `),o.pbrMode!==n.PBRMode.Water&&o.pbrMode!==n.PBRMode.WaterOnIntegratedMesh&&o.pbrMode!==n.PBRMode.TerrainWithWater||(i.addMainLightDirection(t),i.addMainLightIntensity(t),t.code.add(x.glsl`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function h(e,o){return 0===o.overlays.length?null:e.identifier===d.RenderPassIdentifier.Material&&e.output===l.ShaderOutput.Color?o.overlays[t.OverlayIndex.INNER].getColorTextureNoRasterImage():e.identifier===d.RenderPassIdentifier.Material&&e.output===l.ShaderOutput.ObjectAndLayerIdColor?o.overlays[t.OverlayIndex.INNER].getColorTexture(a.OverlaySource.ObjectAndLayerIdColor):e.identifier===d.RenderPassIdentifier.Highlight?o.overlays[t.OverlayIndex.INNER].getValidTexture(t.RenderTargetType.Highlight):null}function p(e,o){for(const t of o.overlays){const{index:o,extent:a}=t;r.area(a)>0&&(O[2*o]=e.toMapSpace[0]/r.width(a)-a[0]/r.width(a),O[2*o+1]=e.toMapSpace[1]/r.height(a)-a[1]/r.height(a))}return O}function C(e,o){for(const t of o.overlays){const{index:o,extent:a}=t;r.area(a)>0&&(O[2*o]=e.toMapSpace[2]/r.width(a),O[2*o+1]=e.toMapSpace[3]/r.height(a))}return O}e.OverlayMode=void 0,(y=e.OverlayMode||(e.OverlayMode={}))[y.Disabled=0]="Disabled",y[y.Enabled=1]="Enabled",y[y.EnabledWithWater=2]="EnabledWithWater",y[y.COUNT=3]="COUNT";const O=o.create();e.OverlayIM=g,e.getColorTexture=h,e.overlay=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
