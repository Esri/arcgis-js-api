/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,i,t){"use strict";function o(e){const o=new t.ShaderBuilder,r=o.vertex.code,l=o.fragment.code;return o.attributes.add("position","vec2"),2===e.highlightStage&&(r.add(i.glsl`
    void main() {
      gl_Position = vec4(vec2(1.0) - position * 2.0, 0.0, 1.0);
    }`),o.fragment.uniforms.add("tex","sampler2D"),o.fragment.uniforms.add("invFramebufferDim","vec2"),l.add(i.glsl`
      void main() {
        vec2 coord = gl_FragCoord.xy * invFramebufferDim;
        vec4 value = texture2D(tex, coord);
        float mx = floor(max(value.g, value.b));
        gl_FragColor = vec4(ceil(value.r), mx, mx, 1.0);
      }`)),0===e.highlightStage&&(o.attributes.add("uv0","vec2"),e.gridOptimization?(o.vertex.uniforms.add("coverageTex","sampler2D"),o.fragment.uniforms.add("blurSize","vec2"),o.varyings.add("blurCoordinate","vec3")):(o.vertex.uniforms.add("blurSize","vec2"),o.varyings.add("blurCoordinates[5]","vec2")),r.add(i.glsl`
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e.gridOptimization?i.glsl`
      vec4 cov = texture2D(coverageTex, uv0);
      if (cov.r == 0.0) {
        gl_Position = vec4(0.0);
      }
      blurCoordinate = vec3(gl_Position.xy * 0.5 + vec2(0.5), max(cov.g, cov.b));
      `:i.glsl`
      vec2 uv = position.xy * 0.5 + vec2(0.5);
      blurCoordinates[0] = uv;
      blurCoordinates[1] = uv + blurSize * 1.407333;
      blurCoordinates[2] = uv - blurSize * 1.407333;
      blurCoordinates[3] = uv + blurSize * 3.294215;
      blurCoordinates[4] = uv - blurSize * 3.294215;
          `}
    }`),o.fragment.uniforms.add("tex","sampler2D"),l.add(i.glsl`
    void main() {
      ${e.gridOptimization?i.glsl`
          vec2 uv = blurCoordinate.xy;
          vec4 center = texture2D(tex, uv);

          // do not blur if no pixel or all pixels in neighborhood are set
          if (blurCoordinate.z == 1.0) {
            gl_FragColor = center;
          } else {
            vec4 sum = vec4(0.0);
            sum += center * 0.204164;
            sum += texture2D(tex, uv + blurSize * 1.407333) * 0.304005;
            sum += texture2D(tex, uv - blurSize * 1.407333) * 0.304005;
            sum += texture2D(tex, uv + blurSize * 3.294215) * 0.093913;
            sum += texture2D(tex, uv - blurSize * 3.294215) * 0.093913;
            gl_FragColor = sum;
          }`:i.glsl`
          vec4 sum = vec4(0.0);
          sum += texture2D(tex, blurCoordinates[0]) * 0.204164;
          sum += texture2D(tex, blurCoordinates[1]) * 0.304005;
          sum += texture2D(tex, blurCoordinates[2]) * 0.304005;
          sum += texture2D(tex, blurCoordinates[3]) * 0.093913;
          sum += texture2D(tex, blurCoordinates[4]) * 0.093913;
          gl_FragColor = sum;`}
    }`)),1===e.highlightStage&&(o.varyings.add("uv","vec2"),e.gridOptimization&&(o.attributes.add("uv0","vec2"),o.vertex.uniforms.add("coverageTex","sampler2D")),r.add(i.glsl`
      void main() {
        ${e.gridOptimization?i.glsl`
            vec4 cov = texture2D(coverageTex, uv0);
            // if no highlight pixel set in this block, hide block
            if (cov.r == 0.0) {
              gl_Position = vec4(0.0);
              return;
            }`:""}
        gl_Position = vec4(position, 0.0, 1.0);
        uv = position.xy * 0.5 + vec2(0.5);
      }`),o.fragment.uniforms.add("tex","sampler2D"),o.fragment.uniforms.add("origin","sampler2D"),o.fragment.uniforms.add("color","vec4"),o.fragment.uniforms.add("haloColor","vec4"),o.fragment.uniforms.add("outlineSize","float"),o.fragment.uniforms.add("blurSize","float"),o.fragment.uniforms.add("opacities","vec4"),l.add(i.glsl`
      void main() {
        // Read the highlight intensity from the blurred highlight image
        vec4 blurredHighlightValue = texture2D(tex, uv);
        float highlightIntensity = blurredHighlightValue.a;

        // Discard all pixels which are not affected by highlight
        if (highlightIntensity == 0.0) {
          discard;
        }

        vec4 origin_color = texture2D(origin, uv);

        float outlineIntensity;
        float fillIntensity;

        // if occluded
        if (blurredHighlightValue.g > blurredHighlightValue.b) {
          outlineIntensity = haloColor.w * opacities[1];
          fillIntensity = color.w * opacities[3];
        }
        // if unoccluded
        else {
          outlineIntensity = haloColor.w * opacities[0];
          fillIntensity = color.w * opacities[2];
        }

        float inner = 1.0 - outlineSize / 9.0;
        float outer = 1.0 - (outlineSize + blurSize) / 9.0;

        float outlineFactor = smoothstep(outer, inner, highlightIntensity);
        //float fillFactor = smoothstep(0.6, 0.72, highlightIntensity);
        float fillFactor = any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;
        float intensity = outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;

        // Blending equation: gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        // I.e., color should not be premultiplied with alpha
        gl_FragColor = vec4(mix(haloColor.rgb, color.rgb, fillFactor), intensity);
      }`)),o}var r=Object.freeze({__proto__:null,build:o});e.HighlightCompositionShader=r,e.build=o}));
