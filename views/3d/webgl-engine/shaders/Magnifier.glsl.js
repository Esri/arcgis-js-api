/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],(function(e,r,o){"use strict";e.build=function(){const e=new o.ShaderBuilder;return e.attributes.add("position","vec2"),e.vertex.uniforms.add("proj","mat4"),e.vertex.uniforms.add("drawPosition","vec4"),e.varyings.add("vUV","vec2"),e.vertex.code.add(r.glsl`
    void main(void) {
      vUV = position;
      gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);
    }
  `),e.fragment.uniforms.add("textureInput","sampler2D"),e.fragment.uniforms.add("textureMask","sampler2D"),e.fragment.uniforms.add("textureOverlay","sampler2D"),e.fragment.uniforms.add("maskEnabled","bool"),e.fragment.uniforms.add("overlayEnabled","bool"),e.fragment.code.add(r.glsl`
    const float barrelFactor = 1.1;

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

      // Premultiply
      overlayColor.rgb *= overlayColor.a;

      gl_FragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;
    }
  `),e},Object.defineProperty(e,"__esModule",{value:!0})}));
