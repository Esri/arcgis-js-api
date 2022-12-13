/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/shaders/SMAAPassParameters"],(function(e,o,t,r,s,d){"use strict";function i(){const e=new t.ShaderBuilder,{attributes:i,varyings:f,vertex:n,fragment:x}=e;return i.add(s.VertexAttribute.POSITION,"vec2"),f.add("fTexCoord","vec2"),f.add("fOffset[2]","vec4"),d.addResolutionUniform(n),n.code.add(o.glsl`void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
fOffset[0] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 );
fOffset[1] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 );
}
void main() {
fTexCoord = (position + 1.0 ) * 0.5;
gl_Position = vec4(position, 0, 1);
SMAANeighborhoodBlendingVS(fTexCoord);
}`),x.uniforms.add(new r.Texture2DPassUniform("tBlendWeights",(e=>e.blend.colorTexture))),x.uniforms.add(new r.Texture2DPassUniform("tColor",(e=>e.colorTexture))),d.addResolutionUniform(x),x.code.add(o.glsl`vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
vec4 a;
a.xz = texture2D( blendTex, texcoord ).xz;
a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
a.w = texture2D( blendTex, offset[ 1 ].xy ).a;
if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
return texture2D( colorTex, texcoord, 0.0 );
} else {
vec2 offset;
offset.x = a.a > a.b ? a.a : -a.b;
offset.y = a.g > a.r ? -a.g : a.r;
if ( abs( offset.x ) > abs( offset.y )) {
offset.y = 0.0;
} else {
offset.x = 0.0;
}
vec4 C = texture2D( colorTex, texcoord, 0.0 );
texcoord += sign( offset ) * resolution.xy;
vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );
vec4 mixed = mix(C, Cop, s);
return mixed;
}
}
void main() {
gl_FragColor = SMAANeighborhoodBlendingPS( fTexCoord, fOffset, tColor, tBlendWeights );
}`),e}const f=Object.freeze(Object.defineProperty({__proto__:null,build:i},Symbol.toStringTag,{value:"Module"}));e.Blur=f,e.build=i}));
