/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/vec3f64","../util/RgbaFloatEncoding.glsl","../util/WebGL2Utils","../../shaderModules/Float4PassUniform","../../shaderModules/IntegerPassUniform","../../shaderModules/interfaces","../../shaderModules/Matrix4sDrawUniform","../../shaderModules/Matrix4sPassUniform","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType"],(function(e,a,t,s,o,i,r,d,l,n,c,p){"use strict";let h=function(e){function s(){var a;return(a=e.apply(this,arguments)||this).origin=t.create(),a}return a._inheritsLoose(s,e),s}(d.NoParameters);function u(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new n.Matrix4sPassUniform("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e,a))}function v(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new l.Matrix4sDrawUniform("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e,a))}function f(e,a){const t=e.fragment;t.include(s.RgbaFloatEncoding),t.uniforms.add([...c.createTexture2DPassSizeUniforms("shadowMapTex",((e,a)=>a.shadowMap.depthTexture),a.hasWebGL2Context?p.TextureSizeUniformType.None:p.TextureSizeUniformType.Size),new r.IntegerPassUniform("numCascades",((e,a)=>a.shadowMap.numCascades)),new i.Float4PassUniform("cascadeDistances",((e,a)=>a.shadowMap.cascadeDistances))]),t.code.add(d.glsl`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${o.textureSize(a,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}e.ReadShadowMapBindParameters=h,e.ReadShadowMapDraw=v,e.ReadShadowMapPass=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
