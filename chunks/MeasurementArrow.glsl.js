/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,t,r,o,i,n,s){"use strict";function a(e){const a=new n.ShaderBuilder,{vertex:d,fragment:l}=a;t.addProjViewLocalOrigin(d,e),d.uniforms.add(new o.FloatPassUniform("width",(e=>e.width))),a.attributes.add(s.VertexAttribute.POSITION,"vec3"),a.attributes.add(s.VertexAttribute.NORMAL,"vec3"),a.attributes.add(s.VertexAttribute.UV0,"vec2"),a.attributes.add(s.VertexAttribute.AUXPOS1,"float"),a.varyings.add("vtc","vec2"),a.varyings.add("vlength","float"),a.varyings.add("vradius","float"),d.code.add(i.glsl`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),l.uniforms.add([new o.FloatPassUniform("outlineSize",(e=>e.outlineSize)),new r.Float4PassUniform("outlineColor",(e=>e.outlineColor)),new o.FloatPassUniform("stripeLength",(e=>e.stripeLength)),new r.Float4PassUniform("stripeEvenColor",(e=>e.stripeEvenColor)),new r.Float4PassUniform("stripeOddColor",(e=>e.stripeOddColor))]);const c=1/Math.sqrt(2);return l.code.add(i.glsl`
    const float INV_SQRT2 = ${i.glsl.float(c)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      gl_FragColor = color;
    }
  `),a}const d=Object.freeze(Object.defineProperty({__proto__:null,build:a},Symbol.toStringTag,{value:"Module"}));e.MeasurementArrow=d,e.build=a}));
