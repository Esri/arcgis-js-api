/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{addProjViewLocalOrigin as e}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float4PassUniform as o}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as t}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as r}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as i}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{VertexAttribute as d}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function n(n){const s=new i;e(s,n),s.vertex.uniforms.add(new t("width",(e=>e.width))),s.attributes.add(d.POSITION,"vec3"),s.attributes.add(d.NORMAL,"vec3"),s.attributes.add(d.UV0,"vec2"),s.attributes.add(d.AUXPOS1,"float"),s.varyings.add("vtc","vec2"),s.varyings.add("vlength","float"),s.varyings.add("vradius","float"),s.vertex.code.add(r`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),s.fragment.uniforms.add([new t("outlineSize",(e=>e.outlineSize)),new o("outlineColor",(e=>e.outlineColor)),new t("stripeLength",(e=>e.stripeLength)),new o("stripeEvenColor",(e=>e.stripeEvenColor)),new o("stripeOddColor",(e=>e.stripeOddColor))]);const a=1/Math.sqrt(2);return s.fragment.code.add(r`
    const float INV_SQRT2 = ${r.float(a)};

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
  `),s}const s=Object.freeze(Object.defineProperty({__proto__:null,build:n},Symbol.toStringTag,{value:"Module"}));export{s as M,n as b};
