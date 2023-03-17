/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/shaders/SMAAPassParameters"],(function(e,t,a,o,l,r){"use strict";const s={threshold:.05,localConstrastAdaption:2};function d(){const e=new a.ShaderBuilder,{attributes:d,varyings:i,vertex:x,fragment:c}=e;return d.add(l.VertexAttribute.POSITION,"vec2"),r.addResolutionUniform(x),i.add("uv","vec2"),i.add("offsets[3]","vec4"),x.code.add(t.glsl`void main() {
uv = position * 0.5 + vec2(0.5);
gl_Position = vec4(position, 0, 1);
offsets[0] = uv.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 );
offsets[1] = uv.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 );
offsets[2] = uv.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 );
}`),c.uniforms.add(new o.Texture2DPassUniform("colorTexture",(e=>e.colorTexture))),c.code.add(t.glsl`
    float absMax3(vec3 v) {
      vec3 t = abs(v);
      return max(max(t.r, t.g), t.b);
    }

    void main() {
      // Calculate color deltas:
      vec4 delta;
      vec3 C = texture2D(colorTexture, uv).rgb;

      vec3 Cleft = texture2D(colorTexture, offsets[0].xy).rgb;
      delta.x = absMax3(C - Cleft);

      vec3 Ctop = texture2D(colorTexture, offsets[0].zw).rgb;
      delta.y = absMax3(C - Ctop);

      vec2 edges = step(vec2(${t.glsl.float(s.threshold)}), delta.xy);

      // discard if there is no edge:
      if (dot(edges, vec2(1.0)) == 0.0) {
        discard;
      }

      // Calculate right and bottom deltas:
      vec3 Cright = texture2D(colorTexture, offsets[1].xy).rgb;
      delta.z = absMax3(C - Cright);

      vec3 Cbottom  = texture2D(colorTexture, offsets[1].zw).rgb;
      delta.w = absMax3(C - Cbottom);

      // Calculate the maximum delta in the direct neighborhood:
      float maxDelta = max(max(max(delta.x, delta.y), delta.z), delta.w);

      // Calculate left-left and top-top deltas:
      vec3 Cleftleft  = texture2D(colorTexture, offsets[2].xy).rgb;
      delta.z = absMax3(C - Cleftleft);

      vec3 Ctoptop = texture2D(colorTexture, offsets[2].zw).rgb;
      delta.w = absMax3(C - Ctoptop);

      // Calculate the final maximum delta:
      maxDelta = max(max(maxDelta, delta.z), delta.w);

      // Local contrast adaptation in action:
      edges.xy *= step(maxDelta, float(${t.glsl.float(s.localConstrastAdaption)}) * delta.xy);

      gl_FragColor = vec4(edges, 0.0, 0.0);
    }
  `),e}const i=Object.freeze(Object.defineProperty({__proto__:null,build:d},Symbol.toStringTag,{value:"Module"}));e.EdgeDetect=i,e.build=d}));
