/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/shaders/SMAAPassParameters"],(function(e,t,o,s,r,i){"use strict";function a(){const e=new o.ShaderBuilder,{attributes:a,varyings:u,vertex:f,fragment:n}=e;return a.add(r.VertexAttribute.POSITION,"vec2"),u.add("uv","vec2"),u.add("offsets[2]","vec4"),i.addResolutionUniform(f),f.code.add(t.glsl`void main() {
uv = position * 0.5 + vec2(0.5);
gl_Position = vec4(position, 0, 1);
offsets[0] = uv.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 );
offsets[1] = uv.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 );
}`),n.uniforms.add(new s.Texture2DPassUniform("blendWeightsTexture",(e=>e.blend.colorTexture))),n.uniforms.add(new s.Texture2DPassUniform("colorTexture",(e=>e.colorTexture))),i.addResolutionUniform(n),n.code.add(t.glsl`void main() {
vec4 a;
a.rb = texture2D(blendWeightsTexture, uv).rb;
a.g = texture2D(blendWeightsTexture, offsets[1].zw).g;
a.a = texture2D(blendWeightsTexture, offsets[1].xy).a;
if ( dot(a, vec4(1.0)) < 1e-5 ) {
gl_FragColor = texture2D( colorTexture, uv, 0.0 );
} else {
vec2 offset;
offset.x = a.a > a.b ? a.a : -a.b;
offset.y = a.g > a.r ? -a.g : a.r;
if ( abs( offset.x ) > abs( offset.y )) {
offset.y = 0.0;
} else {
offset.x = 0.0;
}
vec4 C = texture2D( colorTexture, uv, 0.0 );
vec4 Cop = texture2D( colorTexture, uv + sign( offset ) * resolution.xy, 0.0 );
float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );
gl_FragColor = mix(C, Cop, s);
}
}`),e}const u=Object.freeze(Object.defineProperty({__proto__:null,build:a},Symbol.toStringTag,{value:"Module"}));e.Blur=u,e.build=a}));
