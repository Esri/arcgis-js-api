/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/screenUtils","../../../../chunks/vec4","../../../../chunks/vec4f64","../core/shaderModules/BooleanPassUniform","../core/shaderModules/Float4PassUniform","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder","../core/shaderModules/Texture2DPassUniform","../lib/VertexAttribute"],(function(e,r,t,a,n,o,s,i,u,l,c){"use strict";let d=function(){},f=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).textures=new d,r}return r._inheritsLoose(t,e),t}(i.NoParameters);function v(){const e=new u.ShaderBuilder;return e.attributes.add(c.VertexAttribute.POSITION,"vec2"),e.vertex.uniforms.add(new s.Float4PassUniform("drawPosition",((e,r)=>m(e,r)))),e.varyings.add("vUV","vec2"),e.vertex.code.add(i.glsl`void main(void) {
vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);
}`),e.fragment.uniforms.add(new l.Texture2DPassUniform("textureInput",(e=>e.textures.input))),e.fragment.uniforms.add(new l.Texture2DPassUniform("textureMask",(e=>e.textures.mask))),e.fragment.uniforms.add(new l.Texture2DPassUniform("textureOverlay",(e=>e.textures.overlay))),e.fragment.uniforms.add(new o.BooleanPassUniform("maskEnabled",(e=>e.magnifier.maskEnabled))),e.fragment.uniforms.add(new o.BooleanPassUniform("overlayEnabled",(e=>e.magnifier.overlayEnabled))),e.fragment.code.add(i.glsl`const float barrelFactor = 1.1;
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
}`),e}function m(e,r){const n=r.camera.pixelRatio,o=e.magnifier.offset.x*n,s=e.magnifier.offset.y*n;t.screenPointObjectToArray(e.magnifier.position,x);const i=r.camera.screenToRender(x,g),u=Math.ceil(n*e.magnifier.size),l=r.camera.fullWidth,c=r.camera.fullHeight;return a.set(P,(i[0]+o)/l*2-1,(i[1]-s)/c*2-1,u/l*2,u/c*2)}const x=t.createScreenPointArray(),g=t.createRenderScreenPointArray(),P=n.create();e.MagnifierPassParameters=f,e.TextureResources=d,e.build=v,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
