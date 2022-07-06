/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as e}from"../../../../../../chunks/vec4f64.js";import{area as o,width as r,height as t}from"../../../../../../geometry/support/aaBoundingRect.js";import{OverlayIndex as a,RenderTargetType as n}from"../../../../terrain/interfaces.js";import{RenderPassIdentifier as i,MaterialSubPass as s}from"../../renderPasses/AllRenderPasses.js";import{PBRMode as l}from"../shading/PhysicallyBasedRenderingParameters.glsl.js";import{Water as d}from"../shading/Water.glsl.js";import{Float3PassUniform as c}from"../../shaderModules/Float3PassUniform.js";import{Float4DrawUniform as v}from"../../shaderModules/Float4DrawUniform.js";import{Float4Uniform as u}from"../../shaderModules/Float4Uniform.js";import{FloatPassUniform as f}from"../../shaderModules/FloatPassUniform.js";import{NoParameters as y,glsl as m}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as x}from"../../shaderModules/Texture2DPassUniform.js";var p;!function(e){e[e.Disabled=0]="Disabled",e[e.Enabled=1]="Enabled",e[e.EnabledWithWater=2]="EnabledWithWater",e[e.COUNT=3]="COUNT"}(p||(p={}));class g extends y{constructor(){super(...arguments),this.overlayOpacity=1}}function h(e,o){e.vertex.uniforms.add([new u("overlayTexOffset"),new u("overlayTexScale")]),e.fragment.uniforms.add([new f("overlayOpacity",(e=>e.overlayOpacity)),new x("ovColorTex",((e,o)=>0===o.overlays.length?null:o.overlays[a.INNER].getColorTexture(e.overlaySource)))]),M(e,o)}function C(e,o){const{vertex:r,fragment:t}=e;r.uniforms.add([new v("overlayTexOffset",((e,o)=>b(e,o))),new v("overlayTexScale",((e,o)=>T(e,o)))]),t.constants.add("overlayOpacity","float",1),t.uniforms.add(new x("ovColorTex",((e,o)=>O(e,o)))),M(e,o)}function M(e,o){e.extensions.add("GL_OES_standard_derivatives"),o.pbrMode!==l.Water&&o.pbrMode!==l.WaterOnIntegratedMesh||e.include(d,o);const{vertex:r,fragment:t}=e;e.varyings.add("vtcOverlay","vec4"),r.code.add(m`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),t.code.add(m`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture2D(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture2D(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),t.code.add(m`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),o.pbrMode!==l.Water&&o.pbrMode!==l.WaterOnIntegratedMesh||(t.uniforms.add([new c("lightingMainDirection",((e,o)=>o.lighting.lightingMainDirection)),new c("lightingMainIntensity",((e,o)=>o.lighting.mainLight.intensity))]),t.code.add(m`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, lightingMainDirection, colorInput.rgb, lightingMainIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function O(e,o){return 0===o.overlays.length?null:e.identifier===i.Material&&e.subPass===s.Color?o.overlays[a.INNER].getColorTextureNoRasterImage():e.identifier===i.Highlight?o.overlays[a.INNER].getValidTexture(n.Highlight):null}function b(e,a){for(const n of a.overlays){const{index:a,extent:i}=n;o(i)>0&&(w[2*a]=e.toMapSpace[0]/r(i)-i[0]/r(i),w[2*a+1]=e.toMapSpace[1]/t(i)-i[1]/t(i))}return w}function T(e,a){for(const n of a.overlays){const{index:a,extent:i}=n;o(i)>0&&(w[2*a]=e.toMapSpace[2]/r(i),w[2*a+1]=e.toMapSpace[3]/t(i))}return w}const w=e();export{C as OverlayIM,p as OverlayMode,h as OverlayTerrain,g as OverlayTerrainPassParameters,O as getColorTexture,M as overlay};
