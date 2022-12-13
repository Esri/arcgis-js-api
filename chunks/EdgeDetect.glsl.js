/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/shaders/SMAAPassParameters"],(function(e,t,o,a,l,r){"use strict";const d={threshold:.05,localConstrastAdaption:2};function s(){const e=new o.ShaderBuilder,{attributes:s,varyings:c,vertex:x,fragment:i}=e;return s.add(l.VertexAttribute.POSITION,"vec2"),r.addResolutionUniform(x),c.add("fTexCoord","vec2"),c.add("fOffset[3]","vec4"),x.code.add(t.glsl`void EdgeDetectEdgeDetectionVS( vec2 texcoord ) {
fOffset[0] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 );
fOffset[1] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 );
fOffset[2] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 );
}
void main() {
fTexCoord = (position + 1.0) * 0.5;
gl_Position = vec4(position, 0, 1);
EdgeDetectEdgeDetectionVS(fTexCoord);
}`),i.uniforms.add(new a.Texture2DPassUniform("tColor",(e=>e.colorTexture))),i.code.add(t.glsl`
    vec4 EdgeDetectColorEdgeDetectionPS(vec2 texcoord, vec4 offset[3], sampler2D colorTex) {
      vec2 threshold = vec2( ${t.glsl.float(d.threshold)} );

      // Calculate color deltas:
      vec4 delta;
      vec3 C = texture2D( colorTex, texcoord ).rgb;

      vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
      vec3 t = abs( C - Cleft );
      delta.x = max( max( t.r, t.g ), t.b );

      vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
      t = abs( C - Ctop );
      delta.y = max( max( t.r, t.g ), t.b );

      // We do the usual threshold:
      vec2 edges = step( threshold, delta.xy );

      // Then discard if there is no edge:
      if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
          discard;

      // Calculate right and bottom deltas:
      vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
      t = abs( C - Cright );
      delta.z = max( max( t.r, t.g ), t.b );

      vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
      t = abs( C - Cbottom );
      delta.w = max( max( t.r, t.g ), t.b );

      // Calculate the maximum delta in the direct neighborhood:
      float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

      // Calculate left-left and top-top deltas:
      vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
      t = abs( C - Cleftleft );
      delta.z = max( max( t.r, t.g ), t.b );

      vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
      t = abs( C - Ctoptop );
      delta.w = max( max( t.r, t.g ), t.b );

      // Calculate the final maximum delta:
      maxDelta = max( max( maxDelta, delta.z ), delta.w );

      // Local contrast adaptation in action:
      edges.xy *= step( maxDelta, float(${t.glsl.float(d.localConstrastAdaption)}) * delta.xy );

      return vec4( edges, 0.0, 0.0 );
    }

    void main() {
      gl_FragColor = EdgeDetectColorEdgeDetectionPS(fTexCoord, fOffset, tColor);
    }
  `),e}const c=Object.freeze(Object.defineProperty({__proto__:null,build:s},Symbol.toStringTag,{value:"Module"}));e.EdgeDetect=c,e.build=s}));
