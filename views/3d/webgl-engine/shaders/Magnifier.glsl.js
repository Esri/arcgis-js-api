/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{BooleanPassUniform as e}from"../core/shaderModules/BooleanPassUniform.js";import{Float4Uniform as r}from"../core/shaderModules/Float4Uniform.js";import{NoParameters as o,glsl as t}from"../core/shaderModules/interfaces.js";import{ShaderBuilder as a}from"../core/shaderModules/ShaderBuilder.js";import{Texture2DUniform as n}from"../core/shaderModules/Texture2DUniform.js";import{VertexAttribute as s}from"../lib/VertexAttribute.js";class d extends o{constructor(){super(...arguments),this.maskEnabled=!1,this.overlayEnabled=!1}}function i(){const o=new a;return o.attributes.add(s.POSITION,"vec2"),o.vertex.uniforms.add(new r("drawPosition")),o.varyings.add("vUV","vec2"),o.vertex.code.add(t`void main(void) {
vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);
}`),o.fragment.uniforms.add(new n("textureInput")),o.fragment.uniforms.add(new n("textureMask")),o.fragment.uniforms.add(new n("textureOverlay")),o.fragment.uniforms.add(new e("maskEnabled",(e=>e.maskEnabled))),o.fragment.uniforms.add(new e("overlayEnabled",(e=>e.overlayEnabled))),o.fragment.code.add(t`const float barrelFactor = 1.1;
vec2 barrel(vec2 uv) {
vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
float theta = atan(uvn.y, uvn.x);
float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}
void main() {
float mask = maskEnabled ? texture2D(textureMask, vUV).a : 1.0;
vec4 inputColor = texture2D(textureInput, barrel(vUV)) * mask;
vec4 overlayColor = overlayEnabled ? texture2D(textureOverlay, vUV) : vec4(0);
gl_FragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;
}`),o}export{d as MagnifierPassParameters,i as build};
