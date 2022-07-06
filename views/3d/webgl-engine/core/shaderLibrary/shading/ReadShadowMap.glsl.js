/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as e}from"../../../../../../chunks/vec3f64.js";import{RgbaFloatEncoding as a}from"../util/RgbaFloatEncoding.glsl.js";import{Float4PassUniform as s}from"../../shaderModules/Float4PassUniform.js";import{FloatPassUniform as o}from"../../shaderModules/FloatPassUniform.js";import{IntegerPassUniform as t}from"../../shaderModules/IntegerPassUniform.js";import{NoParameters as i,glsl as r}from"../../shaderModules/interfaces.js";import{Matrix4sUniform as d}from"../../shaderModules/Matrix4sUniform.js";import{Texture2DPassUniform as l}from"../../shaderModules/Texture2DPassUniform.js";import{BindType as p}from"../../shaderTechnique/BindType.js";class n extends i{constructor(){super(...arguments),this.origin=e()}}function h(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",p.Pass,((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e))}function c(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",p.Draw,((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e))}function v(e){const i=e.fragment;i.include(a),i.uniforms.add([new l("shadowMapTex",((e,a)=>a.shadowMap.depthTexture)),new t("numCascades",((e,a)=>a.shadowMap.numCascades)),new s("cascadeDistances",((e,a)=>a.shadowMap.cascadeDistances)),new o("depthHalfPixelSz",((e,a)=>.5/a.shadowMap.textureSize))]),i.code.add(r`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}export{n as ReadShadowMapBindParameters,c as ReadShadowMapDraw,h as ReadShadowMapPass};
