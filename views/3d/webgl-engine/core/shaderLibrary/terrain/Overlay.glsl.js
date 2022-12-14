/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec4f64","../../../../../../geometry/support/aaBoundingRect","../../../../terrain/interfaces","../../renderPasses/AllRenderPasses","../shading/MainLighting.glsl","../shading/PhysicallyBasedRenderingParameters.glsl","../shading/Water.glsl","../../shaderModules/Float4DrawUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,o,r,t,a,n,d,l,i,s,v){"use strict";var c;function u(e,o){const{vertex:r,fragment:t}=e;r.uniforms.add([new i.Float4DrawUniform("overlayTexOffset",((e,o)=>g(e,o))),new i.Float4DrawUniform("overlayTexScale",((e,o)=>f(e,o)))]),t.constants.add("overlayOpacity","float",1),t.uniforms.add(new v.Texture2DPassUniform("ovColorTex",((e,o)=>x(e,o)))),y(e,o)}function y(e,o){e.extensions.add("GL_OES_standard_derivatives"),o.pbrMode!==d.PBRMode.Water&&o.pbrMode!==d.PBRMode.WaterOnIntegratedMesh||e.include(l.Water,o);const{vertex:r,fragment:t}=e;e.varyings.add("vtcOverlay","vec4"),r.code.add(s.glsl`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),t.code.add(s.glsl`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture2D(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture2D(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),t.code.add(s.glsl`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),o.pbrMode!==d.PBRMode.Water&&o.pbrMode!==d.PBRMode.WaterOnIntegratedMesh||(n.addMainLightDirection(t),n.addMainLightIntensity(t),t.code.add(s.glsl`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function x(e,o){return 0===o.overlays.length?null:e.identifier===a.RenderPassIdentifier.Material&&e.subPass===a.MaterialSubPass.Color?o.overlays[t.OverlayIndex.INNER].getColorTextureNoRasterImage():e.identifier===a.RenderPassIdentifier.Highlight?o.overlays[t.OverlayIndex.INNER].getValidTexture(t.RenderTargetType.Highlight):null}function g(e,o){for(const t of o.overlays){const{index:o,extent:a}=t;r.area(a)>0&&(h[2*o]=e.toMapSpace[0]/r.width(a)-a[0]/r.width(a),h[2*o+1]=e.toMapSpace[1]/r.height(a)-a[1]/r.height(a))}return h}function f(e,o){for(const t of o.overlays){const{index:o,extent:a}=t;r.area(a)>0&&(h[2*o]=e.toMapSpace[2]/r.width(a),h[2*o+1]=e.toMapSpace[3]/r.height(a))}return h}e.OverlayMode=void 0,(c=e.OverlayMode||(e.OverlayMode={}))[c.Disabled=0]="Disabled",c[c.Enabled=1]="Enabled",c[c.EnabledWithWater=2]="EnabledWithWater",c[c.COUNT=3]="COUNT";const h=o.create();e.OverlayIM=u,e.getColorTexture=x,e.overlay=y,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
