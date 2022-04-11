/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,i,t,o){"use strict";var r;function l(r){const l=new t.ShaderBuilder,n=l.vertex.code,a=l.fragment.code;return l.attributes.add(o.VertexAttribute.POSITION,"vec2"),r.highlightStage===e.HighlightCompositionPass.Downsample&&(n.add(i.glsl`void main() {
gl_Position = vec4(vec2(1.0) - position * 2.0, 0.0, 1.0);
}`),l.fragment.uniforms.add("tex","sampler2D"),l.fragment.uniforms.add("invFramebufferDim","vec2"),a.add(i.glsl`void main() {
vec2 coord = gl_FragCoord.xy * invFramebufferDim;
vec4 value = texture2D(tex, coord);
float mx = floor(max(value.g, value.b));
gl_FragColor = vec4(ceil(value.r), mx, mx, 1.0);
}`)),r.highlightStage===e.HighlightCompositionPass.Blur&&(l.attributes.add(o.VertexAttribute.UV0,"vec2"),r.gridOptimization?(l.vertex.uniforms.add("coverageTex","sampler2D"),l.fragment.uniforms.add("blurSize","vec2"),l.varyings.add("blurCoordinate","vec3")):(l.vertex.uniforms.add("blurSize","vec2"),l.varyings.add("blurCoordinates[5]","vec2")),n.add(i.glsl`
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
      ${r.gridOptimization?i.glsl`
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
    }`),l.fragment.uniforms.add("tex","sampler2D"),a.add(i.glsl`
    void main() {
      ${r.gridOptimization?i.glsl`
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
    }`)),r.highlightStage===e.HighlightCompositionPass.Apply&&(l.varyings.add("uv","vec2"),r.gridOptimization&&(l.attributes.add(o.VertexAttribute.UV0,"vec2"),l.vertex.uniforms.add("coverageTex","sampler2D")),n.add(i.glsl`
      void main() {
        ${r.gridOptimization?i.glsl`
            vec4 cov = texture2D(coverageTex, uv0);
            // if no highlight pixel set in this block, hide block
            if (cov.r == 0.0) {
              gl_Position = vec4(0.0);
              return;
            }`:""}
        gl_Position = vec4(position, 0.0, 1.0);
        uv = position.xy * 0.5 + vec2(0.5);
      }`),l.fragment.uniforms.add("tex","sampler2D"),l.fragment.uniforms.add("origin","sampler2D"),l.fragment.uniforms.add("uColor","vec4"),l.fragment.uniforms.add("haloColor","vec4"),l.fragment.uniforms.add("outlineSize","float"),l.fragment.uniforms.add("blurSize","float"),l.fragment.uniforms.add("opacities","vec4"),a.add(i.glsl`void main() {
vec4 blurredHighlightValue = texture2D(tex, uv);
float highlightIntensity = blurredHighlightValue.a;
if (highlightIntensity == 0.0) {
discard;
}
vec4 origin_color = texture2D(origin, uv);
float outlineIntensity;
float fillIntensity;
if (blurredHighlightValue.g > blurredHighlightValue.b) {
outlineIntensity = haloColor.w * opacities[1];
fillIntensity = uColor.w * opacities[3];
}
else {
outlineIntensity = haloColor.w * opacities[0];
fillIntensity = uColor.w * opacities[2];
}
float inner = 1.0 - outlineSize / 9.0;
float outer = 1.0 - (outlineSize + blurSize) / 9.0;
float outlineFactor = smoothstep(outer, inner, highlightIntensity);
float fillFactor = any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;
float intensity = outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;
gl_FragColor = vec4(mix(haloColor.rgb, uColor.rgb, fillFactor), intensity);
}`)),l}e.HighlightCompositionPass=void 0,(r=e.HighlightCompositionPass||(e.HighlightCompositionPass={}))[r.Blur=0]="Blur",r[r.Apply=1]="Apply",r[r.Downsample=2]="Downsample",r[r.COUNT=3]="COUNT";const n=Object.freeze(Object.defineProperty({__proto__:null,get HighlightCompositionPass(){return e.HighlightCompositionPass},build:l},Symbol.toStringTag,{value:"Module"}));e.HighlightCompositionShader=n,e.build=l}));
