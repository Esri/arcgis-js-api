self.webpackChunkRemoteClient([30],{239:function(e,t,r){"use strict";var i=r(0),n=r(92),o=r(372);class a{constructor(e,t,r=null){this._context=null,this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(0,this),this._context=e,this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){if(this._context&&this._context.gl){if(this._glName){const e=this._context.gl;this._context.unbindTextureAllUnits(this),e.deleteTexture(this._glName),this._glName=null}this._context.instanceCounter.decrement(0,this),this._context=null}}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,this.setData(null))}setData(e){if(!this._context||!this._context.gl)return;const t=this._context.gl;this._glName||(this._glName=t.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const r=this._context.getBoundTexture(0);this._context.bindTexture(this,0);const n=this._descriptor;a._validateTexture(this._context,n),t.pixelStorei(t.UNPACK_ALIGNMENT,n.unpackAlignment),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,n.flipped?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.preMultiplyAlpha?1:0);const o=n.pixelFormat;let s=n.internalFormat?n.internalFormat:o;if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let r=e.width,i=e.height;e instanceof HTMLVideoElement&&(r=e.videoWidth,i=e.videoHeight),n.width&&n.height&&console.assert(r===n.width&&i===n.height),t.texImage2D(t.TEXTURE_2D,0,s,o,n.dataType,e),n.hasMipmap&&this.generateMipmap(),void 0===n.width&&(n.width=r),void 0===n.height&&(n.height=i)}else{null!=n.width&&null!=n.height||console.error("Width and height must be specified!"),t.DEPTH24_STENCIL8&&s===t.DEPTH_STENCIL&&(s=t.DEPTH24_STENCIL8);let r=n.width,a=n.height;if(function(e){return Object(i.h)(e)&&"type"in e&&"compressed"===e.type}(e)){const i=Math.round(Math.log(Math.max(r,a))/Math.LN2)+1;n.hasMipmap=n.hasMipmap&&i===e.levels.length;for(let i=0;;++i){const o=e.levels[Math.min(i,e.levels.length-1)];if(t.compressedTexImage2D(t.TEXTURE_2D,i,s,r,a,0,o),1===r&&1===a||!n.hasMipmap)break;r=Math.max(1,r>>1),a=Math.max(1,a>>1)}}else if(Object(i.h)(e))t.texImage2D(t.TEXTURE_2D,0,s,r,a,0,o,n.dataType,e),n.hasMipmap&&this.generateMipmap();else for(let e=0;t.texImage2D(t.TEXTURE_2D,e,s,r,a,0,o,n.dataType,null),(1!==r||1!==a)&&n.hasMipmap;++e)r=Math.max(1,r>>1),a=Math.max(1,a>>1)}a._applySamplingMode(t,this._descriptor),a._applyWrapMode(t,this._descriptor),a._applyAnisotropicFilteringParameters(this._context,this._descriptor),r&&this._context.bindTexture(r,0)}updateData(e,t,r,i,n,o){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const a=this._context.gl,s=this._descriptor,c=this._context.getBoundTexture(0);this._context.bindTexture(this,0),(t<0||r<0||i>s.width||n>s.height||t+i>s.width||r+n>s.height)&&console.error("An attempt to update out of bounds of the texture!"),a.pixelStorei(a.UNPACK_ALIGNMENT,s.unpackAlignment),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,s.flipped?1:0),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.preMultiplyAlpha?1:0),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?a.texSubImage2D(a.TEXTURE_2D,e,t,r,s.pixelFormat,s.dataType,o):a.texSubImage2D(a.TEXTURE_2D,e,t,r,i,n,s.pixelFormat,s.dataType,o),this._context.bindTexture(c,0)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,a._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.getBoundTexture(0);this._context.bindTexture(this,0);const r=this._context.gl;r.generateMipmap(r.TEXTURE_2D),this._context.bindTexture(t,0)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,a._validateTexture(this._context,this._descriptor),this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,a._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(a._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(a._applyWrapMode(e,t),this._wrapModeDirty=!1)}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=Object(n.f)(t.width)&&Object(n.f)(t.height);Object(o.a)(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(i=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(i=9728)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){if(null==t.maxAnisotropy)return;const r=e.capabilities.textureFilterAnisotropic;if(!r)return;const i=e.gl;i.texParameterf(i.TEXTURE_2D,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy)}}t.a=a},244:function(e,t,r){"use strict";function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t){return new Float64Array(e,t,16)}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return o}));const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:i,clone:n,fromValues:function(e,t,r,i,n,o,a,s,c,l,u,d,h,f,m,p){return[e,t,r,i,n,o,a,s,c,l,u,d,h,f,m,p]},createView:o,IDENTITY:a})},262:function(e,t,r){"use strict";function i(){return[1,0,0,0,1,0,0,0,1]}function n(e,t){return new Float64Array(e,t,9)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,r,i,n,o,a,s,c){return[e,t,r,i,n,o,a,s,c]},createView:n})},272:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s}));r(92),r(93),r(210),r(521);var i=r(312);r(211),r(250);Object(i.a)();class n{constructor(e){this.message=e}toString(){return"AssertException: "+this.message}}function o(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new n(t)}}function a(e,t,r,i){e[12]=t,e[13]=r,e[14]=i}function s(e,t=0){let r=0;for(let i=0;i<4;i++)r+=e[t+i]*c[i];return r}const c=[1/256,1/65536,1/16777216,1/4294967296];s(new Uint8ClampedArray([255,255,255,255]))},300:function(e,t,r){"use strict";function i(){return[0,0,0,1]}function n(e,t){return new Float64Array(e,t,4)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const o=[0,0,0,1];Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:function(e,t,r,i){return[e,t,r,i]},createView:n,IDENTITY:o})},312:function(e,t,r){"use strict";function i(){return[0,0,0,0]}function n(e,t,r,i){return[e,t,r,i]}function o(e,t){return new Float64Array(e,t,4)}function a(){return[0,0,0,0]}function s(){return n(1,1,1,1)}function c(){return n(1,0,0,0)}function l(){return n(0,1,0,0)}function u(){return n(0,0,1,0)}function d(){return n(0,0,0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o}));const h=[0,0,0,0],f=s(),m=c(),p=l(),g=u(),b=d();Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:n,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let i=0;i<r;++i)t[i]=e[i];return t},createView:o,zeros:a,ones:s,unitX:c,unitY:l,unitZ:u,unitW:d,ZEROS:h,ONES:f,UNIT_X:m,UNIT_Y:p,UNIT_Z:g,UNIT_W:b})},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o}));var i=r(78);const n=.1,o=.001;function a(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.a.float(o)}) { discard; } }
      `);break;case 1:r.code.add(i.a`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}},314:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i,n=r(0),o=r(93),a=r(116),s=r(78);function c(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=s.a`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,i=s.a`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,n=t.sliceHighlightDisabled?s.a`#define highlightSlice(_color_, _pos_) (_color_)`:s.a`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(n)}else{const r=s.a`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}(i=c||(c={})).bindUniformsWithOrigin=function(e,t,r){i.bindUniforms(e,t,r.slicePlane,r.origin)},i.bindUniforms=function(e,t,r,i){t.slicePlaneEnabled&&(Object(n.h)(r)?(i?(Object(a.g)(l,r.origin,i),e.setUniform3fv("slicePlaneOrigin",l)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",o.b),e.setUniform3fv("slicePlaneBasis2",o.b),e.setUniform3fv("slicePlaneOrigin",o.b)))};const l=Object(o.e)()},315:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(78);function n(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.a`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(i.a`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?i.a`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(i.a`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(i.a`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?i.a`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(i.a`
      vec4 vvColor() { return vec4(1.0); }
    `)}!function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,r){t(e,r),r.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",r.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",r.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,r){t(e,r),r.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",r.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",r.vvSymbolRotationMatrix))}}(n||(n={}))},316:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i,n=r(78),o=r(479);function a(e){e.fragment.include(o.a),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(n.a`
    int chooseCascade(float _linearDepth, out mat4 mat) {
      vec4 distance = uShadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];

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

    float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= uShadowMapNum) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
    }
  `)}(i=a||(a={})).bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},i.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},i.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}},317:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(78);function n(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(i.a`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(i.a`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(i.a`
      void forwardTextureCoordinates() {}
    `)}},322:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(78);function n(e){const t=i.a`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function o(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(i.a`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(n),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i.a`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));var i=r(78);function n(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(i.a`
    //Compare the linearized depths of the fragment and the terrain. If fragment is on the wrong side of the terrain, discard it.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function o(e,t,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&(e.setUniform1i("terrainDepthTexture",10),t.bindTexture(r.terrainLinearDepthTexture,10))}},348:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i,n=r(93),o=r(78),a=r(478),s=r(423);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(s.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[o.a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,o.a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?o.a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,o.a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,o.a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?o.a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:o.a``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}(i=c||(c={})).Uniforms=class{},i.bindCustomOrigin=function(e,t){Object(a.b)(t,l,u,3),e.setUniform3fv("viewOriginHi",l),e.setUniform3fv("viewOriginLo",u)};const l=Object(n.e)(),u=Object(n.e)()},349:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(78),n=r(375),o=r(538);Object(n.b)(0,.6,.2);function a(e,t){const r=e.fragment,n=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&n&&e.include(o.a,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(i.a`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(i.a`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(i.a`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(i.a`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(i.a`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(i.a`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(i.a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${n?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(i.a`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}(a||(a={})).bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},350:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(78);function n(e,t){t.linearDepth?e.vertex.code.add(i.a`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(i.a`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}},351:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(78);function n(e){e.attributes.add("position","vec3"),e.vertex.code.add(i.a`
    vec3 positionModel() { return position; }
  `)}},352:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(78);function n(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i.a`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(i.a`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}},357:function(e,t,r){"use strict";r(3);var i=r(2),n=r(239);var o=class{constructor(e,t){this._context=e,this._desc=t,this._context.instanceCounter.increment(5,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this),r.renderbufferStorage(r.RENDERBUFFER,t.internalFormat,t.width,t.height)}get descriptor(){return this._desc}resize(e,t){const r=this._desc;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const i=this._context.gl;this._context.bindRenderbuffer(this),i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(5,this),this._context=null)}};const a=i.a.getLogger("esri.views.webgl.FrameBufferObject");class s{constructor(e,t,r,i){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...t},e.instanceCounter.increment(4,this),r){let t;var a;if(Array.isArray(r))for(const i of r){const{attachmentPoint:r,texture:o}=i,a=o instanceof n.a?o:new n.a(e,o);t=a.descriptor,this._colorAttachments.set(r,a),this._validateColorAttachmentPoint(r),this._validateTextureDimensions(t,this._desc)}else r instanceof n.a?(t=r.descriptor,this._colorAttachments.set(36064,r)):(t=r,this._colorAttachments.set(36064,new n.a(e,r))),0!==(null==(a=this._desc)?void 0:a.colorTarget)&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateTextureDimensions(t,this._desc)}if(i instanceof o){var c;const e=null!=(c=this._desc.depthStencilTarget)?c:3;2===e?this._stencilAttachment=i:1===e||3===e?this._depthAttachment=i:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),s._validateBufferDimensions(i.descriptor,this._desc)}else if(i){let e;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),i instanceof n.a?(this._depthStencilTexture=i,e=this._depthStencilTexture.descriptor):(e=i,this._depthStencilTexture=new n.a(this._context,e)),this._validateTextureDimensions(e,this._desc)}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(4,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(36064);return e&&e instanceof n.a?e:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}getColorTexture(e){const t=this._colorAttachments.get(e);return t&&t instanceof n.a?t:null}attachColorTexture(e,t=36064){if(!e)return;this._validateColorAttachmentPoint(t);const r=e.descriptor;if(this._validateTextureDimensions(r,this._desc),this._disposeColorAttachments(),this._initialized){this._context.bindFramebuffer(this);const r=this._context.gl;r.framebufferTexture2D(r.FRAMEBUFFER,t,r.TEXTURE_2D,e.glName,0)}this._colorAttachments.set(t,e)}detachColorTexture(e=36064){const t=this._colorAttachments.get(e);if(t instanceof n.a){const r=t;if(this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;t.framebufferTexture2D(t.FRAMEBUFFER,e,t.TEXTURE_2D,null,0)}return this._colorAttachments.delete(e),r}}attachDepthStencilTexture(e){if(!e)return;const t=e.descriptor;if(34041!==t.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==t.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(t,this._desc),this._desc.depthStencilTarget&&4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,e.glName,0)}this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;if(e&&this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;this._context.gl.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,null,0)}return this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if(!e)return;const t=e.descriptor;if(34041!==t.internalFormat&&33189!==t.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),s._validateBufferDimensions(t,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===t.internalFormat?3:1,this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,r=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,r,t.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,t=this._depthAttachment;if(t&&this._initialized){this._context.bindFramebuffer(this);const t=1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,t,e.RENDERBUFFER,null)}return this._depthAttachment=null,t}copyToTexture(e,t,r,i,n,o,a){(e<0||t<0||n<0||o<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");const s=this._desc,c=a.descriptor;3553!==a.descriptor.target&&console.error("Texture target must be TEXTURE_2D!"),(e+r>s.width||t+i>s.height||n+r>c.width||o+i>c.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context;l.bindTexture(a,0),l.bindFramebuffer(this),l.gl.copyTexSubImage2D(3553,0,n,o,e,t,r,i)}readPixels(e,t,r,i,n,o,a){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),a||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,r,i,n,o,a)}resize(e,t){const r=this._desc;if(r.width!==e||r.height!==t){if(!this._initialized)return r.width=e,r.height=t,this._colorAttachments.forEach(r=>{r&&r.resize(e,t)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,t));r.width=e,r.height=t,this._colorAttachments.forEach(r=>{r&&r.resize(e,t)}),null!=this._depthStencilTexture?this._depthStencilTexture.resize(e,t):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,t),this._stencilAttachment&&this._stencilAttachment.resize(e,t)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(){var e,t,r,i;const a=this._context.gl;if(this._initialized)return void a.bindFramebuffer(a.FRAMEBUFFER,this.glName);this._glName&&a.deleteFramebuffer(this._glName);const s=this._context,l=a.createFramebuffer(),u=this._desc,d=null!=(e=u.colorTarget)?e:1,h=null!=(t=u.width)?t:1,f=null!=(r=u.height)?r:1;if(a.bindFramebuffer(a.FRAMEBUFFER,l),0===this._colorAttachments.size)if(0===d)this._colorAttachments.set(36064,c(s,u));else{const e=new o(s,{internalFormat:32854,width:h,height:f});this._colorAttachments.set(36064,e)}this._colorAttachments.forEach((e,t)=>{e&&(e instanceof n.a?a.framebufferTexture2D(a.FRAMEBUFFER,t,a.TEXTURE_2D,e.glName,0):a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,e.glName))});const m=null!=(i=u.depthStencilTarget)?i:0;switch(m){case 1:case 3:{this._depthAttachment||(this._depthAttachment=new o(s,{internalFormat:1===u.depthStencilTarget?33189:34041,width:h,height:f}));const e=1===m?a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT;a.framebufferRenderbuffer(a.FRAMEBUFFER,e,a.RENDERBUFFER,this._depthAttachment.glName);break}case 2:this._stencilAttachment||(this._stencilAttachment=new o(s,{internalFormat:36168,width:h,height:f})),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.STENCIL_ATTACHMENT,a.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:if(!this._depthStencilTexture){s.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const e={target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:h,height:f};this._depthStencilTexture=new n.a(s,e)}a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,this._depthStencilTexture.glName,0)}this._glName=l,this._initialized=!0}_disposeColorAttachments(){this._colorAttachments.forEach((e,t)=>{if(e instanceof n.a){if(this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,t,e.TEXTURE_2D,null,0)}e.dispose()}else if(e instanceof WebGLRenderbuffer){const r=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),r.framebufferRenderbuffer(r.FRAMEBUFFER,t,r.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(e)}}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const t=1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,null,0)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}static _validateBufferDimensions(e,t){console.assert(e.width>=0&&e.height>=0),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}_validateTextureDimensions(e,t){console.assert(e.width>=0&&e.height>=0),3553!==e.target&&console.error("Texture type must be TEXTURE_2D!"),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}_validateColorAttachmentPoint(e){if(-1===s._MAX_COLOR_ATTACHMENTS){const e=this._context.capabilities.drawBuffers;if(e){const t=this._context.gl;s._MAX_COLOR_ATTACHMENTS=t.getParameter(e.MAX_COLOR_ATTACHMENTS)}else s._MAX_COLOR_ATTACHMENTS=1}const t=e-36064;t+1>s._MAX_COLOR_ATTACHMENTS&&a.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${t+1}. Implementation supports up to ${s._MAX_COLOR_ATTACHMENTS} color attachments`)}}s._MAX_COLOR_ATTACHMENTS=-1;const c=(e,t)=>new n.a(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:t.width,height:t.height});t.a=s},361:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(78),n=r(431);function o(e){e.vertex.code.add(i.a`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),e.vertex.code.add(i.a`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(i.a`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(i.a`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(i.a`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(i.a`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(i.a`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}function a(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(o),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(i.a`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?i.a`vec3 worldNormal = normalize(worldPos + localOrigin);`:i.a`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?i.a`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:i.a`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(i.a`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}(o||(o={})).bindUniforms=function(e,t){if(t.screenSizePerspective){Object(n.a)(t.screenSizePerspective,e,"screenSizePerspective");const r=t.screenSizePerspectiveAlignment||t.screenSizePerspective;Object(n.a)(r,e,"screenSizePerspectiveAlignment")}},function(e){e.bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const i=function(e,t,r,i=s){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*n,i.perDistance,i.minWorldLength,i.maxWorldLength)}}(a||(a={}));const s={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},362:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(78),n=r(524);function o(e){const t=e.fragment.code;t.add(i.a`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(i.a`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(i.a`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function a(e,t){const r=e.fragment.code;e.include(n.a),3===t.pbrMode||4===t.pbrMode?(r.add(i.a`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.a`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(i.a`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(i.a`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(i.a`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(o),r.add(i.a`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(i.a`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(i.a`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(i.a`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(i.a`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(i.a`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}},372:function(e,t,r){"use strict";t.a=function(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}},374:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return u}));var i=r(93),n=r(203),o=r(116),a=r(262),s=r(300),c=r(250);function l(e,t,r){r*=.5;const i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e}function u(e,t){const r=2*Math.acos(t[3]),i=Math.sin(r/2);return i>n.a?(e[0]=t[0]/i,e[1]=t[1]/i,e[2]=t[2]/i):(e[0]=1,e[1]=0,e[2]=0),r}function d(e,t,r){const i=t[0],n=t[1],o=t[2],a=t[3],s=r[0],c=r[1],l=r[2],u=r[3];return e[0]=i*u+a*s+n*l-o*c,e[1]=n*u+a*c+o*s-i*l,e[2]=o*u+a*l+i*c-n*s,e[3]=a*u-i*s-n*c-o*l,e}function h(e,t,r,i){const o=t[0],a=t[1],s=t[2],c=t[3];let l,u,d,h,f,m=r[0],p=r[1],g=r[2],b=r[3];return u=o*m+a*p+s*g+c*b,u<0&&(u=-u,m=-m,p=-p,g=-g,b=-b),1-u>n.a?(l=Math.acos(u),d=Math.sin(l),h=Math.sin((1-i)*l)/d,f=Math.sin(i*l)/d):(h=1-i,f=i),e[0]=h*o+f*m,e[1]=h*a+f*p,e[2]=h*s+f*g,e[3]=h*c+f*b,e}function f(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function m(e,t){const r=t[0]+t[4]+t[8];let i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const n=(r+1)%3,o=(r+2)%3;i=Math.sqrt(t[3*r+r]-t[3*n+n]-t[3*o+o]+1),e[r]=.5*i,i=.5/i,e[3]=(t[3*n+o]-t[3*o+n])*i,e[n]=(t[3*n+r]+t[3*r+n])*i,e[o]=(t[3*o+r]+t[3*r+o])*i}return e}const p=c.c,g=c.k,b=c.a,v=d,x=c.b,_=c.d,y=c.i,O=c.e,T=O,w=c.f,M=w,S=c.j,A=c.g,j=c.h;const C=Object(i.e)(),P=Object(i.g)(1,0,0),E=Object(i.g)(0,1,0);const F=Object(s.a)(),R=Object(s.a)();const D=Object(a.a)();Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:l,getAxisAngle:u,multiply:d,rotateX:function(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c+a*s,e[1]=n*c+o*s,e[2]=o*c-n*s,e[3]=a*c-i*s,e},rotateY:function(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c-o*s,e[1]=n*c+a*s,e[2]=o*c+i*s,e[3]=a*c-n*s,e},rotateZ:function(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c+n*s,e[1]=n*c-i*s,e[2]=o*c+a*s,e[3]=a*c-o*s,e},calculateW:function(e,t){const r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e},slerp:h,random:function(e){const t=Object(n.b)(),r=Object(n.b)(),i=Object(n.b)(),o=Math.sqrt(1-t),a=Math.sqrt(t);return e[0]=o*Math.sin(2*Math.PI*r),e[1]=o*Math.cos(2*Math.PI*r),e[2]=a*Math.sin(2*Math.PI*i),e[3]=a*Math.cos(2*Math.PI*i),e},invert:function(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=r*r+i*i+n*n+o*o,s=a?1/a:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=o*s,e},conjugate:f,fromMat3:m,fromEuler:function(e,t,r,i){const n=.5*Math.PI/180;t*=n,r*=n,i*=n;const o=Math.sin(t),a=Math.cos(t),s=Math.sin(r),c=Math.cos(r),l=Math.sin(i),u=Math.cos(i);return e[0]=o*c*u-a*s*l,e[1]=a*s*u+o*c*l,e[2]=a*c*l-o*s*u,e[3]=a*c*u+o*s*l,e},str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:p,set:g,add:b,mul:v,scale:x,dot:_,lerp:y,length:O,len:T,squaredLength:w,sqrLen:M,normalize:S,exactEquals:A,equals:j,rotationTo:function(e,t,r){const i=Object(o.e)(t,r);return i<-.999999?(Object(o.d)(C,P,t),Object(o.k)(C)<1e-6&&Object(o.d)(C,E,t),Object(o.o)(C,C),l(e,C,Math.PI),e):i>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(Object(o.d)(C,t,r),e[0]=C[0],e[1]=C[1],e[2]=C[2],e[3]=1+i,S(e,e))},sqlerp:function(e,t,r,i,n,o){return h(F,t,n,o),h(R,r,i,o),h(e,F,R,2*o*(1-o)),e},setAxes:function(e,t,r,i){const n=D;return n[0]=r[0],n[3]=r[1],n[6]=r[2],n[1]=i[0],n[4]=i[1],n[7]=i[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],S(e,m(e,n))}})},375:function(e,t,r){"use strict";function i(){return new Float32Array(3)}function n(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function o(){return i()}function a(){return n(1,1,1)}function s(){return n(1,0,0)}function c(){return n(0,1,0)}function l(){return n(0,0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const u=o(),d=a(),h=s(),f=c(),m=l();Object.freeze({__proto__:null,create:i,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:n,createView:function(e,t){return new Float32Array(e,t,3)},zeros:o,ones:a,unitX:s,unitY:c,unitZ:l,ZEROS:u,ONES:d,UNIT_X:h,UNIT_Y:f,UNIT_Z:m})},390:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(16);class n{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new i.a(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new n(this.major,this.minor,this._context)}static parse(e,t=""){const[r,o]=e.split("."),a=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(a))throw new i.a((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!o||!o.match||!o.match(a))throw new i.a((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const s=parseInt(r,10),c=parseInt(o,10);return new n(s,c,t)}}},402:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const i=r(2).a.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class n{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&i.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class o extends n{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new l,this.varyings=new u,this.extensions=new d,this.constants=new h}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?m:f,c=this.constants.generateSource().concat(n.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}}class a{constructor(){this._entries=new Array,this._set=new Set}add(e,t,r){const i=`${e}_${t}_${r}`;return this._set.has(i)||(this._entries.push([e,t,r]),this._set.add(i)),this}generateSource(){return this._entries.map(e=>`uniform ${e[1]} ${e[0]}${(e=>e?`[${e}]`:"")(e[2])};`)}}class s{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends n{constructor(){super(...arguments),this.uniforms=new a,this.code=new s,this.constants=new h}get builder(){return this}}class l{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map(e=>`attribute ${e[1]} ${e[0]};`)}}class u{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class d{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?d.ALLOWLIST_VERTEX:d.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(e=>t.includes(e)).map(e=>`#extension ${e} : enable`)}}d.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d.ALLOWLIST_VERTEX=[];class h{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=h.numberToFloatStr(r);break;case"int":i=h.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])},                            ${h.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])},                             ${h.numberToIntStr(r[3])})`;break;case"bvec2":i=`bvec2(${r[0].toString()},                             ${r[1].toString()})`;break;case"bvec3":i=`bvec3(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()})`;break;case"bvec4":i=`bvec4(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()},                             ${r[3].toString()})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,e=>h.numberToFloatStr(e)).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const f="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",m="precision highp float;\nprecision highp sampler2D;"},403:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(78),n=r(479);function o(e){e.include(n.a),e.code.add(i.a`
    float linearDepthFromFloat(float depth, vec2 nearFar) {
      return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
    }

    float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
      return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
    }
  `)}},404:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(78);function n(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.a`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(i.a`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)):e.vertex.code.add(i.a`
      void forwardLinearDepth() {}
    `)}},405:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(78);function n(e){e.vertex.code.add(i.a`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}},406:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(78);function n(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.a`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(i.a`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(i.a`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}},422:function(e,t,r){"use strict";r(3);var i=r(0),n=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],o=r(449),a=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function s(){var e,t,r,i=0,n=0,s=999,c=[],l=[],u=1,d=0,h=0,f=!1,m=!1,p="";return function(e){return l=[],null!==e?b(e.replace?e.replace(/\r\n/g,"\n"):e):(c.length&&g(c.join("")),s=10,g("(eof)"),l)};function g(e){e.length&&l.push({type:a[s],data:e,position:h,line:u,column:d})}function b(o){var a;for(i=0,r=(p+=o).length;e=p[i],i<r;){switch(a=i,s){case 0:i="/"===e&&"*"===t?(c.push(e),g(c.join("")),s=999,i+1):(c.push(e),t=e,i+1);break;case 1:case 2:i=v();break;case 3:i=x();break;case 4:i="."===e||/[eE]/.test(e)?(c.push(e),s=5,t=e,i+1):"x"===e&&1===c.length&&"0"===c[0]?(s=11,c.push(e),t=e,i+1):/[^\d]/.test(e)?(g(c.join("")),s=999,i):(c.push(e),t=e,i+1);break;case 11:i=/[^a-fA-F0-9]/.test(e)?(g(c.join("")),s=999,i):(c.push(e),t=e,i+1);break;case 5:"f"===e&&(c.push(e),t=e,i+=1),i=/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(c.push(e),t=e,i+1):/[^\d]/.test(e)?(g(c.join("")),s=999,i):(c.push(e),t=e,i+1);break;case 9999:i=y();break;case 9:i=/[^\s]/g.test(e)?(g(c.join("")),s=999,i):(c.push(e),t=e,i+1);break;case 999:c=c.length?[]:c,i="/"===t&&"*"===e?(h=n+i-1,s=0,t=e,i+1):"/"===t&&"/"===e?(h=n+i-1,s=1,t=e,i+1):"#"===e?(s=2,h=n+i,i):/\s/.test(e)?(s=9,h=n+i,i):(f=/\d/.test(e),m=/[^\w_]/.test(e),h=n+i,s=f?4:m?3:9999,i)}if(a!==i)switch(p[a]){case"\n":d=0,++u;break;default:++d}}return n+=i,p=p.slice(i),l}function v(){return"\r"!==e&&"\n"!==e||"\\"===t?(c.push(e),t=e,i+1):(g(c.join("")),s=999,i)}function x(){if("."===t&&/\d/.test(e))return s=5,i;if("/"===t&&"*"===e)return s=0,i;if("/"===t&&"/"===e)return s=1,i;if("."===e&&c.length){for(;_(c););return s=5,i}if(";"===e||")"===e||"("===e){if(c.length)for(;_(c););return g(e),s=999,i+1}var r=2===c.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;_(c););return s=999,i}return c.push(e),t=e,i+1}function _(e){for(var t,r,i=0;;){if(t=o.c.indexOf(e.slice(0,e.length+i).join("")),r=o.c[t],-1===t){if(i--+e.length>0)continue;r=e.slice(0,1).join("")}return g(r),h+=r.length,(c=c.slice(r.length)).length}}function y(){if(/[^\d\w_]/.test(e)){var r=c.join("");return s=o.b.indexOf(r)>-1?8:o.a.indexOf(r)>-1?7:6,g(c.join("")),s=999,i}return c.push(e),t=e,i+1}}function c(e){return function(e){var t=s(),r=[];return(r=r.concat(t(e))).concat(t(null))}(e)}const l=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function u(e,t){for(let r=t-1;r>=0;r--){const t=e[r];if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break;if("attribute"===t.data||"in"===t.data)return!0}}return!1}function d(e,t,r,i){i=i||r;for(const n of e)if("ident"===n.type&&n.data===r)return i in t?t[i]++:t[i]=0,d(e,t,i+"_"+t[i],i);return r}function h(e,t,r="afterVersion"){function i(e,t){for(let r=t;r<e.length;r++){const t=e[r];if("operator"===t.type&&";"===t.data)return r}return null}const n={data:"\n",type:"whitespace"},o=t=>t<e.length&&/[^\r\n]$/.test(e[t].data);let a=function(e){let t=-1,n=0,o=-1;for(let a=0;a<e.length;a++){const s=e[a];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:s.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(o=Math.max(o,a)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){const t=i(e,a);if(null===t)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,t)}t<o&&0===n&&(t=a)}return t+1}(e);o(a-1)&&e.splice(a++,0,n);for(const r of t)e.splice(a++,0,r);o(a-1)&&o(a)&&e.splice(a,0,n)}function f(e,t,r,i="lowp"){h(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function m(e,t,r,i,n="lowp"){h(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:i.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function p(e,t){let r,i,n=-1;for(let o=t;o<e.length;o++){const t=e[o];if("operator"===t.type&&("["===t.data&&(r=o),"]"===t.data)){i=o;break}"integer"===t.type&&(n=parseInt(t.data,10))}return r&&i&&e.splice(r,i-r+1),n}function g(e,t){const r=c(e);if("300 es"===function(e,t="100",r="300 es"){const i=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of e)if("preprocessor"===n.type){const e=i.exec(n.data);if(e){const i=e[1].replace(/\s\s+/g," ");if(i===r)return i;if(i===t)return n.data="#version "+r,t;throw new Error("unknown glsl version: "+i)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(r,"100","300 es"))throw new Error("shader is already glsl 300 es");let i=null,o=null;const a={},s={};for(let e=0;e<r.length;++e){const c=r[e];switch(c.type){case"keyword":"vertex"===t&&"attribute"===c.data?c.data="in":"varying"===c.data&&(c.data="vertex"===t?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(c.data.trim())&&(c.data=c.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===t&&"gl_FragColor"===c.data&&(i||(i=d(r,a,"fragColor"),f(r,i,"vec4")),c.data=i),"fragment"===t&&"gl_FragData"===c.data){const t=p(r,e+1),i=d(r,a,"fragData");m(r,i,"vec4",t,"mediump"),c.data=i}else"fragment"===t&&"gl_FragDepthEXT"===c.data&&(o||(o=d(r,a,"gl_FragDepth")),c.data=o);break;case"ident":if(n.indexOf(c.data)>=0){if("vertex"===t&&u(r,e))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");c.data in s||(s[c.data]=d(r,a,c.data)),c.data=s[c.data]}}}for(let e=r.length-1;e>=0;--e){const t=r[e];if("preprocessor"===t.type){const i=t.data.match(/\#extension\s+(.*)\:/);if(i&&i[1]&&l.indexOf(i[1].trim())>=0){const t=r[e+1];r.splice(e,t&&"whitespace"===t.type?2:1)}const n=t.data.match(/\#ifdef\s+(.*)/);n&&n[1]&&l.indexOf(n[1].trim())>=0&&(t.data="#if 1");const o=t.data.match(/\#ifndef\s+(.*)/);o&&o[1]&&l.indexOf(o[1].trim())>=0&&(t.data="#if 0")}}return r.map(e=>"eof"!==e.type?e.data:"").join("")}class b{constructor(e,t,r,i,n={}){if(this._context=null,this._glName=null,this._locations={},this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},e||console.error("RenderingContext isn't initialized!"),0===t.length&&console.error("Shaders source should not be empty!"),e.instanceCounter.increment(3,this),this._context=e,this._vertexShaderSource=t,this._fragmentShaderSource=r,Array.isArray(n))for(const e of n)this._defines[e]="1";else this._defines=n;this._locations=i}get glName(){return this._glName}get locations(){return this._locations}getDefine(e){return this._defines[e]}dispose(){if(!this._context)return;const e=this._context.gl;if(this._vShader){const t=this._vShader;e.deleteShader(t),this._vShader=null}if(this._fShader){const t=this._fShader;e.deleteShader(t),this._fShader=null}this._glName&&(e.deleteProgram(this._glName),this._glName=null),this._context.instanceCounter.decrement(3,this),this._context=null}initialize(){if(this._initialized)return;this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");const e=this._context.gl,t=e.createProgram();e.attachShader(t,this._vShader),e.attachShader(t,this._fShader);for(const r in this._locations){const i=this._locations[r];e.bindAttribLocation(t,i,r)}e.linkProgram(t),this._glName=t,this._initialized=!0}getUniformLocation(e){return this.initialize(),void 0===this._nameToUniformLocation[e]&&(this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this._glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return null!==this.getUniformLocation(e)}getAttribLocation(e){return this.initialize(),void 0===this._nameToAttribLocation[e]&&(this._nameToAttribLocation[e]=this._context.gl.getAttribLocation(this._glName,e)),this._nameToAttribLocation[e]}setUniform1i(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1iv(e,t){const r=this._nameToUniform1v[e];v(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform1iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=b._arrayCopy(t):b._arrayAssign(t,r))}setUniform2iv(e,t){const r=this._nameToUniform2[e];v(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform2iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=b._arrayCopy(t):b._arrayAssign(t,r))}setUniform3iv(e,t){const r=this._nameToUniform3[e];v(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform3iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=b._arrayCopy(t):b._arrayAssign(t,r))}setUniform4iv(e,t){const r=this._nameToUniform4[e];v(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform4iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=b._arrayCopy(t):b._arrayAssign(t,r))}setUniform1f(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1fv(e,t){const r=this._nameToUniform1v[e];v(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=b._arrayCopy(t):b._arrayAssign(t,r))}setUniform2f(e,t,r){const i=this._nameToUniform2[e];void 0!==i&&t===i[0]&&r===i[1]||(this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(e),t,r),void 0===i?this._nameToUniform2[e]=[t,r]:(i[0]=t,i[1]=r))}setUniform2fv(e,t){const r=this._nameToUniform2[e];v(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=b._arrayCopy(t):b._arrayAssign(t,r))}setUniform3f(e,t,r,i){const n=this._nameToUniform3[e];void 0!==n&&t===n[0]&&r===n[1]&&i===n[2]||(this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(e),t,r,i),void 0===n?this._nameToUniform3[e]=[t,r,i]:(n[0]=t,n[1]=r,n[2]=i))}setUniform3fv(e,t){const r=this._nameToUniform3[e];v(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=b._arrayCopy(t):b._arrayAssign(t,r))}setUniform4f(e,t,r,i,n){const o=this._nameToUniform4[e];void 0!==o&&t===o[0]&&r===o[1]&&i===o[2]&&n===o[3]||(this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(e),t,r,i,n),void 0===o?this._nameToUniform4[e]=[t,r,i,n]:(o[0]=t,o[1]=r,o[2]=i,o[3]=n))}setUniform4fv(e,t){const r=this._nameToUniform4[e];v(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=b._arrayCopy(t):b._arrayAssign(t,r))}setUniformMatrix3fv(e,t,r=!1){const n=this._nameToUniformMatrix3[e];(function(e,t){return!!Object(i.g)(e)||(9!==e.length?v(e,t):9!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8])})(n,t)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(e),r,t),void 0===n?this._nameToUniformMatrix3[e]=b._arrayCopy(t):b._arrayAssign(t,n))}setUniformMatrix4fv(e,t,r=!1){const n=this._nameToUniformMatrix4[e];(function(e,t){return!!Object(i.g)(e)||(16!==e.length?v(e,t):16!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8]||e[9]!==t[9]||e[10]!==t[10]||e[11]!==t[11]||e[12]!==t[12]||e[13]!==t[13]||e[14]!==t[14]||e[15]!==t[15])})(n,t)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(e),r,t),void 0===n?this._nameToUniformMatrix4[e]=b._arrayCopy(t):b._arrayAssign(t,n))}assertCompatibleVertexAttributeLocations(e){const t=e.locations===this.locations;return t||console.error("VertexAttributeLocations are incompatible"),t}static _padToThree(e){let t=e.toString();return e<1e3&&(t=("  "+e).slice(-3)),t}_addLineNumbers(e){let t=2;return e.replace(/\n/g,()=>"\n"+b._padToThree(t++)+":")}_loadShader(e){const t=35633===e;let r=t?this._vertexShaderSource:this._fragmentShaderSource,i="";for(const e in this._defines)i+=`#define ${e} ${this._defines[e]}\n`;r=i+r,"webgl2"===this._context.contextVersion&&(r=g(r,t?"vertex":"fragment"));const n=this._context.gl,o=n.createShader(e);return n.shaderSource(o,r),n.compileShader(o),o}static _arrayCopy(e){const t=[];for(let r=0;r<e.length;++r)t.push(e[r]);return t}static _arrayAssign(e,t){for(let r=0;r<e.length;++r)t[r]=e[r]}}function v(e,t){if(Object(i.g)(e)||e.length!==t.length)return!0;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!0;return!1}t.a=b},423:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return v}));var i=r(3),n=r(78),o=r(0),a=(r(92),r(93)),s=r(422),c=r(272),l=r(480),u=r(481),d=r(478),h=r(357),f=r(239);class m{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,async function(e){const t=new Image;if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0;const r=new h.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),i=l.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),n=new u.a(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:i}),o=new s.a(e,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",{a_pos:0});e.bindProgram(o);const a=new f.a(e,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},t);e.bindTexture(a,0),o.setUniform1i("u_texture",0);const c=e.getBoundFramebufferObject(),{x:d,y:m,width:p,height:g}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(n),e.drawArrays(5,0,4);const b=new Uint8Array(4);return r.readPixels(0,0,1,1,6408,5121,b),o.dispose(),n.dispose(!1),i.dispose(),r.dispose(),a.dispose(),e.setViewport(d,m,p,g),e.bindFramebuffer(c),t.src="",255===b[0]}(e).then(e=>{this.svgAlwaysPremultipliesAlpha=!e})}get doublePrecisionRequiresObfuscation(){if(Object(o.g)(this._doublePrecisionRequiresObfuscation)){const e=g(this.context,!1),t=g(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let p=null;function g(e,t){const r=new h.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const i=l.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),n=new u.a(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:i}),o=Object(a.g)(5633261.287538229,2626832.878767164,1434988.0495278358),f=Object(a.g)(5633271.46742708,2626873.6381334523,1434963.231608387),m=function(r,i){const n=new s.a(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),o=new Float32Array(6);Object(d.a)(r,o,3);const a=new Float32Array(6);return Object(d.a)(i,a,3),e.bindProgram(n),n.setUniform3f("u_highA",o[0],o[2],o[4]),n.setUniform3f("u_lowA",o[1],o[3],o[5]),n.setUniform3f("u_highB",a[0],a[2],a[4]),n.setUniform3f("u_lowB",a[1],a[3],a[5]),n}(o,f),p=e.getBoundFramebufferObject(),{x:g,y:b,width:v,height:x}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(n),e.drawArrays(5,0,4);const _=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,_),m.dispose(),n.dispose(!1),i.dispose(),r.dispose(),e.setViewport(g,b,v,x),e.bindFramebuffer(p);const y=(o[2]-f[2])/25,O=Object(c.c)(_);return Math.abs(y-O)}function b({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.a`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(n.a`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function v(e){return!!Object(i.a)("force-double-precision-obfuscation")||(t=e,(Object(o.g)(p)||p.context!==t)&&(p=new m(t)),p).doublePrecisionRequiresObfuscation;var t}},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var i=r(78),n=r(524),o=r(316),a=r(362),s=r(352);function c(e,t){const r=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(i.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===n?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(i.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===n&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(i.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(i.a`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function l(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(i.a`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function u(e,t){const r=e.fragment;e.include(l),e.include(s.a,t),0!==t.pbrMode&&e.include(a.a,t),e.include(c,t),t.receiveShadows&&e.include(o.a,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(n.a),r.code.add(i.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(i.a`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?r.code.add(i.a`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):r.code.add(i.a`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(i.a`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(i.a`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(i.a`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(i.a`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(i.a`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(i.a`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(i.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?i.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}},431:function(e,t,r){"use strict";r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return A})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return M})),r.d(t,"f",(function(){return O}));var i=r(0),n=r(92),o=r(93),a=r(116),s=r(194),c=r(272),l=r(522);function u(e,t,r){const i=r.parameters,n=r.paddingPixelsOverride;return f.scale=Math.min(i.divisor/(t-i.offset),1),f.factor=function(e){return Math.abs(e*e*e)}(e),f.minPixelSize=i.minPixelSize,f.paddingPixels=n,f}function d(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function h(e,t){return Math.max(Object(n.g)(e*t.scale,e,t.factor),d(e,t))}Object(n.d)(10),Object(n.d)(12),Object(n.d)(70),Object(n.d)(40);const f={scale:0,factor:0,minPixelSize:0,paddingPixels:0},m=Object(s.b)();function p(e,t,r,n,o,u,d){const h=Object(l.b)(t),f=r.tolerance;if(!h)if(e.boundingInfo)Object(c.a)(0===e.primitiveType),function e(t,r,n,o,c,l){if(Object(i.g)(t))return;const u=function(e,t,r){return Object(a.r)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(r,n,g);if(Object(s.l)(m,t.getBBMin()),Object(s.k)(m,t.getBBMax()),Object(i.h)(c)&&c.applyToAabb(m),function(e,t,r,i){return function(e,t,r,i,n){const o=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(o,a),c=Math.max(o,a);const l=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0)return!1;if(s=Math.max(s,Math.min(l,u)),s>c)return!1;const d=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(d,h)),!(c<0)&&(s=Math.max(s,Math.min(d,h)),!(s>c)&&s<n)}(e,t,r,i,1/0)}(m,r,u,o)){const{primitiveIndices:i,indices:a,position:s}=t,u=i?i.length:a.length/3;if(u>j){const i=t.getChildren();if(void 0!==i){for(let t=0;t<8;++t)void 0!==i[t]&&e(i[t],r,n,o,c,l);return}}v(r,n,0,u,a,s,i,c,l)}}(e.boundingInfo,n,o,f,u,d);else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");v(n,o,0,t.length/3,t,r,void 0,u,d)}}const g=Object(o.e)();const b=Object(o.e)();function v(e,t,r,n,o,a,s,c,l){if(s)return function(e,t,r,n,o,a,s,c,l){const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,g=t[1]-f,v=t[2]-m;for(let e=r;e<n;++e){const t=s[e];let r=3*t,n=d*o[r++],a=u[n++],x=u[n++],_=u[n];n=d*o[r++];let O=u[n++],T=u[n++],w=u[n];n=d*o[r];let M=u[n++],S=u[n++],A=u[n];Object(i.h)(c)&&([a,x,_]=c.applyToVertex(a,x,_,e),[O,T,w]=c.applyToVertex(O,T,w,e),[M,S,A]=c.applyToVertex(M,S,A,e));const j=O-a,C=T-x,P=w-_,E=M-a,F=S-x,R=A-_,D=g*R-F*v,I=v*E-R*p,L=p*F-E*g,N=j*D+C*I+P*L;if(Math.abs(N)<=Number.EPSILON)continue;const z=h-a,B=f-x,U=m-_,V=z*D+B*I+U*L;if(N>0){if(V<0||V>N)continue}else if(V>0||V<N)continue;const H=B*P-C*U,k=U*j-P*z,G=z*C-j*B,q=p*H+g*k+v*G;if(N>0){if(q<0||V+q>N)continue}else if(q>0||V+q<N)continue;const $=(E*H+F*k+R*G)/N;$>=0&&l($,y(j,C,P,E,F,R,b),t)}}(e,t,r,n,o,a,s,c,l);const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,g=t[1]-f,v=t[2]-m;for(let e=r,t=3*r;e<n;++e){let r=d*o[t++],n=u[r++],a=u[r++],s=u[r];r=d*o[t++];let x=u[r++],_=u[r++],O=u[r];r=d*o[t++];let T=u[r++],w=u[r++],M=u[r];Object(i.h)(c)&&([n,a,s]=c.applyToVertex(n,a,s,e),[x,_,O]=c.applyToVertex(x,_,O,e),[T,w,M]=c.applyToVertex(T,w,M,e));const S=x-n,A=_-a,j=O-s,C=T-n,P=w-a,E=M-s,F=g*E-P*v,R=v*C-E*p,D=p*P-C*g,I=S*F+A*R+j*D;if(Math.abs(I)<=Number.EPSILON)continue;const L=h-n,N=f-a,z=m-s,B=L*F+N*R+z*D;if(I>0){if(B<0||B>I)continue}else if(B>0||B<I)continue;const U=N*j-A*z,V=z*S-j*L,H=L*A-S*N,k=p*U+g*V+v*H;if(I>0){if(k<0||B+k>I)continue}else if(k>0||B+k<I)continue;const G=(C*U+P*V+E*H)/I;G>=0&&l(G,y(S,A,j,C,P,E,b),e)}}const x=Object(o.e)(),_=Object(o.e)();function y(e,t,r,i,n,o,s){return Object(a.r)(x,e,t,r),Object(a.r)(_,i,n,o),Object(a.d)(s,x,_),Object(a.o)(s,s),s}function O(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;o&&(a=function(e,t,r,i){return h(e,u(t,r,i))}(a,i,t,o));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(n.e)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function T(e,t,r){if(!e)return;const i=e.parameters,n=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,n)}function w(e,t){const r=t?w(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=S(i)),null==i&&t in r||(r[t]=i)}return r}function M(e,t){let r=!1;for(const i in t){const n=t[i];void 0!==n&&(r=!0,Array.isArray(n)?e[i]=n.slice():e[i]=n)}return r}function S(e){const t=[];return e.forEach(e=>t.push(e)),t}const A={multiply:1,ignore:2,replace:3,tint:4},j=1e3},432:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(78);function n(e){e.vertex.code.add(i.a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.a.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.a.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.a.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.a.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function o(e,t){t.symbolColor?(e.include(n),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(i.a`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(i.a`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}},433:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var i=r(78),n=r(350),o=r(314),a=r(523),s=r(315),c=r(313),l=r(479);function u(e,t){e.fragment.include(l.a),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(i.a`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}var d=r(317),h=r(322),f=r(489);function m(e,t){const r=e.vertex.code,l=e.fragment.code;1!==t.output&&3!==t.output||(e.include(n.a,{linearDepth:!0}),e.include(d.a,t),e.include(s.a,t),e.include(u,t),e.include(o.a,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(i.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(c.a,t),l.add(i.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(n.a,{linearDepth:!1}),e.include(h.a,t),e.include(f.a,t),e.include(d.a,t),e.include(s.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(i.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?i.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.a,t),e.include(c.a,t),l.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?i.a`
            vec3 normal = screenDerivativeNormal(vPositionView);`:i.a`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(n.a,{linearDepth:!1}),e.include(d.a,t),e.include(s.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(i.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.a,t),e.include(c.a,t),e.include(a.a),l.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},434:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(78);function n(e){e.code.add(i.a`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}function o(e){e.include(n),e.code.add(i.a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.a.int(1)}) {
        return allMixed;
      }
      else if (mode == ${i.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.a.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.a.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},449:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o}));var i=r(138),n=Object(i.b)((function(e){var t;void 0!==(t=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(e.exports=t)})),o=Object(i.b)((function(e){var t;void 0!==(t=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(e.exports=t)})),a=Object(i.b)((function(e){var t;void 0!==(t=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"])&&(e.exports=t)}))},450:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(3);var i=r(2);r(16);function n(e){}i.a.getLogger("esri/views/webgl")},478:function(e,t,r){"use strict";function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t,r,n){for(let s=0;s<n;++s)o[0]=e[s],i(o,a,1),t[s]=a[0],r[s]=a[1]}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const o=new Float64Array(1),a=new Float32Array(2)},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(78);function n(e){e.code.add(i.a`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}},480:function(e,t,r){"use strict";var i=r(12),n=r(450);class o{constructor(e,t,r,i,o){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(1,this),this._glName=this._context.gl.createBuffer(),Object(n.a)(this._context.gl),i&&this.setData(i,o)}static createIndex(e,t,r,i){return new o(e,34963,t,r,i)}static createVertex(e,t,r){return new o(e,34962,t,r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return 34962===this.bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}dispose(){this._context&&(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(1,this),this._context=null)}setData(e,t){if(!e)return;if("number"==typeof e){if(e<0&&console.error("Buffer size cannot be negative!"),34963===this.bufferType&&t)switch(this._indexType=t,this._size=e,t){case 5123:e*=2;break;case 5125:e*=4}}else{let t=e.byteLength;Object(i.i)(e)&&(t/=2,this._indexType=5123),Object(i.j)(e)&&(t/=4,this._indexType=5125),this._size=t}const r=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this),this._context.gl.bufferData(this.bufferType,e,this.usage),this._context.bindVAO(r)}setSubData(e,t=0,r=0,n=e.byteLength){if(!e)return;(t<0||t>=this._size)&&console.error("offset is out of range!");let o=t,a=r,s=n,c=e.byteLength;Object(i.i)(e)&&(c/=2,o*=2,a*=2,s*=2),Object(i.j)(e)&&(c/=4,o*=4,a*=4,s*=4),void 0===n&&(n=c-1),r>=n&&console.error("end must be bigger than start!"),t+r-n>this._size&&console.error("An attempt to write beyond the end of the buffer!");const l=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const u=this._context.gl,d=ArrayBuffer.isView(e)?e.buffer:e,h=0===a&&s===e.byteLength?d:d.slice(a,s);u.bufferSubData(this.bufferType,o,h),this._context.bindVAO(l)}}t.a=o},481:function(e,t,r){"use strict";var i=r(0),n=r(482);t.a=class{constructor(e,t,r,i,n){this._context=e,this._locations=t,this._layout=r,this._buffers=i,this._indexBuffer=n,this._glName=null,this._initialized=!1,e.instanceCounter.increment(2,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((e,t)=>e+this._buffers[t].size,this._indexBuffer?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(!this._context)return;const t=this._context.capabilities.vao;if(t&&this._glName&&(t.deleteVertexArray(this._glName),this._glName=null),this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const e in this._buffers)this._buffers[e].dispose(),delete this._buffers[e];this._indexBuffer=Object(i.d)(this._indexBuffer)}this._context.instanceCounter.decrement(2,this),this._context=null}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const e=this._buffers,t=!!this._context.capabilities.vao,r=this._layout,i=this._indexBuffer;e||console.error("Vertex buffer dictionary is empty!");const o=this._context.gl;for(const t in e){const i=e[t];i||console.error("Vertex buffer is uninitialized!");const o=r[t];o||console.error("Vertex element descriptor is empty!"),Object(n.a)(this._context,this._locations,i,o)}i&&(t?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const e=this._buffers,t=this._layout;e||console.error("Vertex buffer dictionary is empty!");for(const r in e){const i=e[r];i||console.error("Vertex buffer is uninitialized!");const o=t[r];Object(n.c)(this._context,this._locations,i,o)}this._indexBuffer&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}},482:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return i}));r(3),r(0);function i(e,t){return e.vertexBuffers[t].size/function(e){return e[0].stride}(e.layout[t])}function n(e,t,r,i,n){const o=e.gl,a=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t[e.name],i=(n||(0+e.baseInstance?e.baseInstance:0))*e.stride;if(void 0===r&&console.error(`There is no location for vertex attribute '${e.name}' defined.`),e.baseInstance&&!e.divisor&&console.error(`Vertex attribute '${e.name}' uses baseInstanceOffset without divisor.`),e.count<=4)o.vertexAttribPointer(r,e.count,e.type,e.normalized,e.stride,e.offset+i),o.enableVertexAttribArray(r),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r,e.divisor);else if(9===e.count)for(let t=0;t<3;t++)o.vertexAttribPointer(r+t,3,e.type,e.normalized,e.stride,e.offset+12*t+i),o.enableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else if(16===e.count)for(let t=0;t<4;t++)o.vertexAttribPointer(r+t,4,e.type,e.normalized,e.stride,e.offset+16*t+i),o.enableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else console.error("Unsupported vertex attribute element count: "+e.count)}}function o(e,t,r,i){const n=e.gl,o=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t[e.name];if(e.count<=4)n.disableVertexAttribArray(r),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(r,0);else if(9===e.count)for(let t=0;t<3;t++)n.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(r+t,0);else if(16===e.count)for(let t=0;t<4;t++)n.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(r+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}e.unbindBuffer(34962)}function a(e){switch(e){case 6406:case 6409:case 36168:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34836:return 16;case 33776:case 33777:return.5;case 33778:case 33779:return 1;case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return.5;case 37490:case 37491:case 37496:case 37497:return 1}return 0}},483:function(e,t,r){"use strict";r.d(t,"a",(function(){return F})),r.d(t,"b",(function(){return E}));var i=r(78),n=r(350),o=r(402),a=r(314),s=r(403),c=r(315),l=r(313),u=r(361),d=r(347),h=r(316),f=r(404),m=r(362),p=r(348),g=r(317),b=r(349),v=r(405),x=r(322),_=r(351),y=r(432),O=r(406),T=r(489),w=r(433),M=r(525),S=r(352),A=r(424),j=r(526),C=r(527),P=r(434);function E(e){const t=new o.a,r=t.vertex.code,E=t.fragment.code;return t.include(C.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(_.a),t.varyings.add("vpos","vec3"),t.include(c.a,e),t.include(p.a,e),t.include(u.a,e),0!==e.output&&7!==e.output||(t.include(x.a,e),t.include(n.a,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(v.a),t.include(M.a,e),t.include(T.a,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(g.a,e),t.include(f.a,e),t.include(y.a,e),t.include(O.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(i.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${i.a.float(l.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?i.a`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(a.a,e),t.include(l.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(d.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(P.a),E.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.a,e),t.include(A.a,e),t.include(S.a,e),t.include(l.a,e),e.receiveShadows&&t.include(h.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(d.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(b.a,e),t.include(m.a,e),t.fragment.include(P.a),t.include(j.a,e),E.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?i.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:i.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?i.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?i.a`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?i.a`vec3 normalGround = normalize(vpos + localOrigin);`:i.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:i.a``}
        ${1===e.pbrMode||2===e.pbrMode?i.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(w.a,e),t}var F=Object.freeze({__proto__:null,build:E})},484:function(e,t,r){"use strict";r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return A}));var i=r(78),n=r(350),o=r(402),a=r(314),s=r(403),c=r(315),l=r(313),u=r(361),d=r(347),h=r(316),f=r(404),m=r(362),p=r(348),g=r(317),b=r(349),v=r(405),x=r(322),_=r(351),y=r(432),O=r(406),T=r(433),w=r(352),M=r(424),S=r(434);function A(e){const t=new o.a,r=t.vertex.code,A=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(_.a),t.varyings.add("vpos","vec3"),t.include(c.a,e),t.include(p.a,e),t.include(u.a,e),0!==e.output&&7!==e.output||(t.include(x.a,e),t.include(n.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(v.a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(g.a,e),t.include(f.a,e),t.include(y.a,e),t.include(O.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(i.a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${i.a.float(l.c)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?i.a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(a.a,e),t.include(l.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(d.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(S.a),A.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?i.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.a,e),t.include(M.a,e),t.include(w.a,e),t.include(l.a,e),e.receiveShadows&&t.include(h.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(d.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(b.a,e),t.include(m.a,e),t.fragment.include(S.a),A.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?i.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?i.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${i.a`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?i.a`vec3 normalGround = normalize(vpos + localOrigin);`:i.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:i.a``}
        ${1===e.pbrMode||2===e.pbrMode?i.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(T.a,e),t}var j=Object.freeze({__proto__:null,build:A})},489:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var i=r(78),n=r(322),o=r(93),a=r(262),s=r(244),c=r(423),l=r(351);function u(e,t){e.include(l.a),e.vertex.include(c.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(i.a`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(i.a`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function d(e,t){0===t.normalType||1===t.normalType?(e.include(n.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(i.a`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(i.a`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?i.a`normalize(vPositionWorldCameraRelative);`:i.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(i.a`
      void forwardNormal() {}
    `)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=Object(a.a)(),this.worldFromModel_TH=Object(o.e)(),this.worldFromModel_TL=Object(o.e)()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(o.e)(),this.worldFromView_TL=Object(o.e)(),this.viewFromCameraRelative_RS=Object(a.a)(),this.projFromView=Object(s.b)()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(u||(u={})),(d||(d={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},521:function(e,t,r){"use strict";function i(){return[0,0]}function n(e,t){return[e,t]}function o(e,t){return new Float64Array(e,t,2)}function a(){return[0,0]}function s(){return n(1,1)}function c(){return n(1,0)}function l(){return n(0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o}));const u=[0,0],d=s(),h=c(),f=l();Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1]]},fromValues:n,fromArray:function(e){const t=[0,0],r=Math.min(2,e.length);for(let i=0;i<r;++i)t[i]=e[i];return t},createView:o,zeros:a,ones:s,unitX:c,unitY:l,ZEROS:u,ONES:d,UNIT_X:h,UNIT_Y:f})},522:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a}));var i=r(0),n=(r(210),r(244));r(272),r(478);function o(e,t){return Object(i.g)(e)&&(e=[]),e.push(t),e}function a(e,t){if(Object(i.g)(e))return e;const r=e.filter(e=>e!==t);return 0===r.length?null:r}function s(e){return!!Object(i.h)(e)&&!e.visible}new Float64Array(3),new Float32Array(6),Object(n.b)()},523:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(312),n=r(78);const o=Object(i.b)(1,1,0,1),a=Object(i.b)(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",o).add("unoccludedHighlightFlag","vec4",a),e.fragment.code.add(n.a`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}(s||(s={})).bindOutputHighlight=function(e,t,r){e.bindTexture(r.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,r.inverseViewport[0],r.inverseViewport[1])}},524:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(78);function n(e){e.vertex.code.add(i.a`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(i.a`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}},525:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(78),n=r(538);function o(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(i.a`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):r.code.add(i.a`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(i.a`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(n.a,t),r.code.add(i.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},526:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(78);function n(e,t){const r=e.fragment;r.code.add(i.a`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?r.code.add(i.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?r.code.add(i.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):r.code.add(i.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}},527:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(3);var i=r(78);function n(e,t){i.a`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}},538:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(78),n=r(317);function o(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      // clamp the derivatives to avoid discoloring when zooming out.
      float maxdUV = 0.125; // Emprirically tuned compromise between discoloring and aliasing noise.
      vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
      vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function a(e,t){e.include(n.a,t),e.fragment.code.add(i.a`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(i.a`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(o),e.fragment.code.add(i.a`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}},628:function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",(function(){return Eo})),r.d(t,"gltfToEngineResources",(function(){return Ro})),r.d(t,"parseUrl",(function(){return Fo}));var i=r(0),n=r(93),o=r(116),a=r(210),s=r(382),c=r(262),l=r(244),u=r(203);function d(e,t,r){const i=t[0],n=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],h=r[0],f=r[1],m=r[2],p=r[3],g=r[4],b=r[5],v=r[6],x=r[7],_=r[8];return e[0]=h*i+f*a+m*l,e[1]=h*n+f*s+m*u,e[2]=h*o+f*c+m*d,e[3]=p*i+g*a+b*l,e[4]=p*n+g*s+b*u,e[5]=p*o+g*c+b*d,e[6]=v*i+x*a+_*l,e[7]=v*n+x*s+_*u,e[8]=v*o+x*c+_*d,e}function h(e,t){const r=t[0],i=t[1],n=t[2],o=t[4],a=t[5],s=t[6],c=t[8],l=t[9],u=t[10],d=u*a-s*l,h=-u*o+s*c,f=l*o-a*c,m=r*d+i*h+n*f;if(!m)return null;const p=1/m;return e[0]=d*p,e[1]=(-u*i+n*l)*p,e[2]=(s*i-n*a)*p,e[3]=h*p,e[4]=(u*r-n*c)*p,e[5]=(-s*r+n*o)*p,e[6]=f*p,e[7]=(-l*r+i*c)*p,e[8]=(a*r-i*o)*p,e}function f(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],m=t[12],p=t[13],g=t[14],b=t[15],v=r*s-i*a,x=r*c-n*a,_=r*l-o*a,y=i*c-n*s,O=i*l-o*s,T=n*l-o*c,w=u*p-d*m,M=u*g-h*m,S=u*b-f*m,A=d*g-h*p,j=d*b-f*p,C=h*b-f*g;let P=v*C-x*j+_*A+y*S-O*M+T*w;return P?(P=1/P,e[0]=(s*C-c*j+l*A)*P,e[1]=(c*S-a*C-l*M)*P,e[2]=(a*j-s*S+l*w)*P,e[3]=(n*j-i*C-o*A)*P,e[4]=(r*C-n*S+o*M)*P,e[5]=(i*S-r*j-o*w)*P,e[6]=(p*T-g*O+b*y)*P,e[7]=(g*_-m*T-b*x)*P,e[8]=(m*O-p*_+b*v)*P,e):null}function m(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e}const p=d,g=m;Object.freeze({__proto__:null,fromMat4:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e},copy:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},set:function(e,t,r,i,n,o,a,s,c,l){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e[4]=o,e[5]=a,e[6]=s,e[7]=c,e[8]=l,e},identity:function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},transpose:function(e,t){if(e===t){const r=t[1],i=t[2],n=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=n}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e},invert:function(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=u*a-s*l,h=-u*o+s*c,f=l*o-a*c;let m=r*d+i*h+n*f;return m?(m=1/m,e[0]=d*m,e[1]=(-u*i+n*l)*m,e[2]=(s*i-n*a)*m,e[3]=h*m,e[4]=(u*r-n*c)*m,e[5]=(-s*r+n*o)*m,e[6]=f*m,e[7]=(-l*r+i*c)*m,e[8]=(a*r-i*o)*m,e):null},adjoint:function(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8];return e[0]=a*u-s*l,e[1]=n*l-i*u,e[2]=i*s-n*a,e[3]=s*c-o*u,e[4]=r*u-n*c,e[5]=n*o-r*s,e[6]=o*l-a*c,e[7]=i*c-r*l,e[8]=r*a-i*o,e},determinant:function(e){const t=e[0],r=e[1],i=e[2],n=e[3],o=e[4],a=e[5],s=e[6],c=e[7],l=e[8];return t*(l*o-a*c)+r*(-l*n+a*s)+i*(c*n-o*s)},multiply:d,translate:function(e,t,r){const i=t[0],n=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],h=r[0],f=r[1];return e[0]=i,e[1]=n,e[2]=o,e[3]=a,e[4]=s,e[5]=c,e[6]=h*i+f*a+l,e[7]=h*n+f*s+u,e[8]=h*o+f*c+d,e},rotate:function(e,t,r){const i=t[0],n=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],h=Math.sin(r),f=Math.cos(r);return e[0]=f*i+h*a,e[1]=f*n+h*s,e[2]=f*o+h*c,e[3]=f*a-h*i,e[4]=f*s-h*n,e[5]=f*c-h*o,e[6]=l,e[7]=u,e[8]=d,e},scale:function(e,t,r){const i=r[0],n=r[1],o=r[2];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=o*t[6],e[7]=o*t[7],e[8]=o*t[8],e},scaleByVec2:function(e,t,r){const i=r[0],n=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e},fromTranslation:function(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=t[0],e[7]=t[1],e[8]=1,e},fromRotation:function(e,t){const r=Math.sin(t),i=Math.cos(t);return e[0]=i,e[1]=r,e[2]=0,e[3]=-r,e[4]=i,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},fromScaling:function(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=t[1],e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},fromMat2d:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e},fromQuat:function(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=r+r,s=i+i,c=n+n,l=r*a,u=i*a,d=i*s,h=n*a,f=n*s,m=n*c,p=o*a,g=o*s,b=o*c;return e[0]=1-d-m,e[3]=u-b,e[6]=h+g,e[1]=u+b,e[4]=1-l-m,e[7]=f-p,e[2]=h-g,e[5]=f+p,e[8]=1-l-d,e},normalFromMat4Legacy:h,normalFromMat4:f,projection:function(e,t,r){return e[0]=2/t,e[1]=0,e[2]=0,e[3]=0,e[4]=-2/r,e[5]=0,e[6]=-1,e[7]=1,e[8]=1,e},str:function(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"},frob:function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+e[6]**2+e[7]**2+e[8]**2)},add:function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e},subtract:m,multiplyScalar:function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e},multiplyScalarAndAdd:function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e[4]=t[4]+r[4]*i,e[5]=t[5]+r[5]*i,e[6]=t[6]+r[6]*i,e[7]=t[7]+r[7]*i,e[8]=t[8]+r[8]*i,e},exactEquals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]},equals:function(e,t){const r=e[0],i=e[1],n=e[2],o=e[3],a=e[4],s=e[5],c=e[6],l=e[7],d=e[8],h=t[0],f=t[1],m=t[2],p=t[3],g=t[4],b=t[5],v=t[6],x=t[7],_=t[8];return Math.abs(r-h)<=u.a*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(i-f)<=u.a*Math.max(1,Math.abs(i),Math.abs(f))&&Math.abs(n-m)<=u.a*Math.max(1,Math.abs(n),Math.abs(m))&&Math.abs(o-p)<=u.a*Math.max(1,Math.abs(o),Math.abs(p))&&Math.abs(a-g)<=u.a*Math.max(1,Math.abs(a),Math.abs(g))&&Math.abs(s-b)<=u.a*Math.max(1,Math.abs(s),Math.abs(b))&&Math.abs(c-v)<=u.a*Math.max(1,Math.abs(c),Math.abs(v))&&Math.abs(l-x)<=u.a*Math.max(1,Math.abs(l),Math.abs(x))&&Math.abs(d-_)<=u.a*Math.max(1,Math.abs(d),Math.abs(_))},mul:p,sub:g});var b=r(353),v=r(2);const x=v.a.getLogger("esri.views.3d.support.buffer.math");function _(e,t,r){if(e.count!==t.count)return void x.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[4],c=r[5],l=r[6],u=r[8],d=r[9],h=r[10],f=r[12],m=r[13],p=r[14],g=e.typedBuffer,b=e.typedBufferStride,v=t.typedBuffer,_=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*b,r=e*_,i=v[r],x=v[r+1],y=v[r+2];g[t]=n*i+s*x+u*y+f,g[t+1]=o*i+c*x+d*y+m,g[t+2]=a*i+l*x+h*y+p}}function y(e,t,r){if(e.count!==t.count)return void x.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],h=r[8],f=e.typedBuffer,m=e.typedBufferStride,p=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*m,r=e*g,i=p[r],b=p[r+1],v=p[r+2];f[t]=n*i+s*b+u*v,f[t+1]=o*i+c*b+d*v,f[t+2]=a*i+l*b+h*v}}function O(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*o,i=e*s;n[t]=r*a[i],n[t+1]=r*a[i+1],n[t+2]=r*a[i+2]}}Object.freeze({__proto__:null,transformMat4:_,transformMat3:y,scale:O,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*o,i=e*s;n[t]=a[i]>>r,n[t+1]=a[i+1]>>r,n[t+2]=a[i+2]>>r}}});var T=r(194),w=r(272),M=r(20);class S{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=Object(n.e)(),Object(w.a)(e.length>=1),Object(w.a)(r.length%this._numIndexPerPrimitive==0),Object(w.a)(r.length>=e.length*this._numIndexPerPrimitive),Object(w.a)(3===i.size||4===i.size);const{data:a,size:s}=i,c=e.length;let l=s*r[this._numIndexPerPrimitive*e[0]];A.clear(),A.push(l),this.bbMin=Object(n.g)(a[l],a[l+1],a[l+2]),this.bbMax=Object(n.d)(this.bbMin);for(let t=0;t<c;++t){const i=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){l=s*r[i+e],A.push(l);let t=a[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=a[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=a[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}Object(o.f)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let u=this.radius*this.radius;for(let e=0;e<A.length;++e){l=A.getItemAt(e);const t=a[l]-this.center[0],r=a[l+1]-this.center[1],i=a[l+2]-this.center[2],n=t*t+r*r+i*i;if(n<=u)continue;const o=Math.sqrt(n),s=.5*(o-this.radius);this.radius=this.radius+s,u=this.radius*this.radius;const c=s/o;this.center[0]+=t*c,this.center[1]+=r*c,this.center[2]+=i*c}A.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(o.i)(this.bbMin,this.bbMax)>1){const e=Object(o.f)(Object(n.e)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:a,size:s}=this.position;for(let n=0;n<t;++n){let t=0;const o=this._numIndexPerPrimitive*this.primitiveIndices[n];let c=s*this.indices[o],l=a[c],u=a[c+1],d=a[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=s*this.indices[o+e];const t=a[c],r=a[c+1],i=a[c+2];t<l&&(l=t),r<u&&(u=r),i<d&&(d=i)}l<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[n]=t,++i[t]}let c=0;for(let e=0;e<8;++e)i[e]>0&&++c;if(c<2)return;const l=new Array(8);for(let e=0;e<8;++e)l[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];l[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==l[e]&&(this._children[e]=new S(l[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){A.prune()}}const A=new M.a({deallocator:null});var j=r(212);class C{constructor(){this.id=Object(j.a)()}unload(){}}var P=r(35);class E{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=P.a.before(()=>this.reset()),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(i.l)(this.tickHandle)),this.items=Object(i.l)(this.items)}get(){return 0===this.itemsPtr&&Object(P.a)(()=>{}),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*F);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,F));e++)this.items.push(this.allocator())}}const F=1024;var R=r(211),D=r(300),I=r(521),L=r(312);class N{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=P.a.before(()=>this.reset())}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(i.l)(this.tickHandle)),this.itemsPtr=0,this.items=Object(i.l)(this.items),this.buffers=Object(i.l)(this.buffers)}get(){0===this.itemsPtr&&Object(P.a)(()=>{});const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=z){return new N(16,I.b,e)}static createVec3f64(e=z){return new N(24,n.c,e)}static createVec4f64(e=z){return new N(32,L.c,e)}static createMat3f64(e=z){return new N(72,c.b,e)}static createMat4f64(e=z){return new N(128,l.d,e)}static createQuatf64(e=z){return new N(32,D.b,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const z=4096,B=(N.createVec2f64(),N.createVec3f64()),U=N.createVec4f64(),V=(N.createMat3f64(),N.createMat4f64());N.createQuatf64();var H=r(92);function k(e){return e?{origin:Object(n.d)(e.origin),vector:Object(n.d)(e.vector)}:{origin:Object(n.e)(),vector:Object(n.e)()}}function G(e,t){const r=K.get();return r.origin=e,r.vector=t,r}function q(e,t,r=k()){return Object(o.h)(r.origin,e),Object(o.h)(r.vector,t),r}function $(e,t){const r=Object(o.g)(B.get(),t,e.origin),i=Object(o.e)(e.vector,r),n=Object(o.e)(e.vector,e.vector),a=Object(H.c)(i/n,0,1),s=Object(o.g)(B.get(),Object(o.b)(B.get(),e.vector,a),r);return Object(o.e)(s,s)}function W(e,t,r,i,n){const{vector:a,origin:s}=e,c=Object(o.g)(B.get(),t,s),l=Object(o.e)(a,c)/Object(o.p)(a);return Object(o.b)(n,a,Object(H.c)(l,r,i)),Object(o.c)(n,n,e.origin)}function X(e,t,r,i){const n=1e-6,a=e.origin,s=Object(o.c)(B.get(),a,e.vector),c=t.origin,l=Object(o.c)(B.get(),c,t.vector),u=B.get(),d=B.get();if(u[0]=a[0]-c[0],u[1]=a[1]-c[1],u[2]=a[2]-c[2],d[0]=l[0]-c[0],d[1]=l[1]-c[1],d[2]=l[2]-c[2],Math.abs(d[0])<n&&Math.abs(d[1])<n&&Math.abs(d[2])<n)return!1;const h=B.get();if(h[0]=s[0]-a[0],h[1]=s[1]-a[1],h[2]=s[2]-a[2],Math.abs(h[0])<n&&Math.abs(h[1])<n&&Math.abs(h[2])<n)return!1;const f=u[0]*d[0]+u[1]*d[1]+u[2]*d[2],m=d[0]*h[0]+d[1]*h[1]+d[2]*h[2],p=u[0]*h[0]+u[1]*h[1]+u[2]*h[2],g=d[0]*d[0]+d[1]*d[1]+d[2]*d[2],b=(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*g-m*m;if(Math.abs(b)<n)return!1;let v=(f*m-p*g)/b,x=(f+m*v)/g;r&&(v=Object(H.c)(v,0,1),x=Object(H.c)(x,0,1));const _=B.get(),y=B.get();return _[0]=a[0]+v*h[0],_[1]=a[1]+v*h[1],_[2]=a[2]+v*h[2],y[0]=c[0]+x*d[0],y[1]=c[1]+x*d[1],y[2]=c[2]+x*d[2],i.tA=v,i.tB=x,i.pA=_,i.pB=y,i.distance2=Object(o.i)(_,y),!0}const Y={tA:0,tB:0,pA:Object(n.e)(),pB:Object(n.e)(),distance2:0},K=new E(()=>({origin:null,vector:null}));Object.freeze({__proto__:null,create:k,wrap:G,copy:function(e,t=k()){return q(e.origin,e.vector,t)},fromValues:q,fromPoints:function(e,t,r=k()){return Object(o.h)(r.origin,e),Object(o.g)(r.vector,t,e),r},distance2:$,distance:function(e,t){return Math.sqrt($(e,t))},projectPoint:function(e,t,r){return W(e,t,0,1,r)},pointAt:function(e,t,r){return Object(o.c)(r,e.origin,Object(o.b)(r,e.vector,t))},projectPointClamp:W,closestRayDistance2:function(e,t){if(X(e,G(t.origin,t.direction),!1,Y)){const{tA:t,pB:r,distance2:i}=Y;if(t>=0&&t<=1)return i;if(t<0)return Object(o.i)(e.origin,r);if(t>1)return Object(o.i)(Object(o.c)(B.get(),e.origin,e.vector),r)}return null},closestLineSegmentPoint:function(e,t,r){return!!X(e,t,!0,Y)&&(Object(o.h)(r,Y.pA),!0)},closestLineSegmentDistance2:function(e,t){return X(e,t,!0,Y)?Y.distance2:null}});function J(e){return e?{p0:Object(n.d)(e.p0),p1:Object(n.d)(e.p1),p2:Object(n.d)(e.p2)}:{p0:Object(n.e)(),p1:Object(n.e)(),p2:Object(n.e)()}}function Q(e,t,r,i=J()){return Object(o.h)(i.p0,e),Object(o.h)(i.p1,t),Object(o.h)(i.p2,r),i}function Z(e,t,r){const i=Object(R.e)(e,t),n=Object(R.e)(t,r),o=Object(R.e)(r,e),a=(i+n+o)/2,s=a*(a-i)*(a-n)*(a-o);return s<=0?0:Math.sqrt(s)}function ee(e,t,r){return Object(o.g)(ie,t,e),Object(o.g)(ne,r,e),Object(o.m)(Object(o.d)(ie,ie,ne))/2}const te=new E(k),re=new E(()=>({p0:null,p1:null,p2:null})),ie=Object(n.e)(),ne=Object(n.e)();Object.freeze({__proto__:null,create:J,wrap:function(e,t,r){const i=re.get();return i.p0=e,i.p1=t,i.p2=r,i},copy:function(e,t=J()){return Q(e.p0,e.p1,e.p2,t)},fromValues:Q,distance2:function(e,t){const r=e.p0,i=e.p1,n=e.p2,a=Object(o.g)(B.get(),i,r),s=Object(o.g)(B.get(),n,i),c=Object(o.g)(B.get(),r,n),l=Object(o.g)(B.get(),t,r),u=Object(o.g)(B.get(),t,i),d=Object(o.g)(B.get(),t,n),h=Object(o.d)(a,a,c),f=Object(o.e)(Object(o.d)(B.get(),a,h),l),m=Object(o.e)(Object(o.d)(B.get(),s,h),u),p=Object(o.e)(Object(o.d)(B.get(),c,h),d);if(f>0&&m>0&&p>0){const e=Object(o.e)(h,l);return e*e/Object(o.e)(h,h)}const g=$(q(r,a,te.get()),t),b=$(q(i,s,te.get()),t),v=$(q(n,c,te.get()),t);return Math.min(g,b,v)},intersectRay:function(e,t,r){const i=1e-5,{direction:n,origin:a}=t,{p0:s,p1:c,p2:l}=e,u=c[0]-s[0],d=c[1]-s[1],h=c[2]-s[2],f=l[0]-s[0],m=l[1]-s[1],p=l[2]-s[2],g=n[1]*p-m*n[2],b=n[2]*f-p*n[0],v=n[0]*m-f*n[1],x=u*g+d*b+h*v;if(x>-i&&x<i)return!1;const _=1/x,y=a[0]-s[0],O=a[1]-s[1],T=a[2]-s[2],w=_*(y*g+O*b+T*v);if(w<0||w>1)return!1;const M=O*h-d*T,S=T*u-h*y,A=y*d-u*O,j=_*(n[0]*M+n[1]*S+n[2]*A);return!(j<0||w+j>1)&&(r&&(Object(o.b)(r,n,_*(f*M+m*S+p*A)),Object(o.c)(r,a,r)),!0)},areaPoints2d:Z,area2d:function(e){return Z(e.p0,e.p1,e.p2)},areaPoints3d:ee});let oe=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const ae=new Uint16Array([0]),se=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function ce(e){if(1===e)return ae;if(e<se.length)return new Uint16Array(se.buffer,0,e);if(e>oe.length){const t=Math.max(2*oe.length,e);oe=new Uint32Array(t);for(let e=0;e<oe.length;e++)oe[e]=e}return new Uint32Array(oe.buffer,0,e)}const le=Object(n.e)(),ue=Object(n.e)(),de=Object(n.e)(),he=Object(n.e)();class fe extends C{constructor(e,t=[],r=0,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,r]of e)r&&this._vertexAttributes.set(t,{...r});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=ce(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,r]of t)r&&(this._indices.set(e,me(r)),"position"===e&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(i.g)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position");return function(e,t,r){if(!e)return!1;const{size:i,data:n}=e;Object(o.r)(r,0,0,0),Object(o.r)(he,0,0,0);let a=0,s=0;for(let e=0;e<t.length-2;e+=3){const c=t[e+0]*i,l=t[e+1]*i,u=t[e+2]*i;Object(o.r)(le,n[c+0],n[c+1],n[c+2]),Object(o.r)(ue,n[l+0],n[l+1],n[l+2]),Object(o.r)(de,n[u+0],n[u+1],n[u+2]);const d=ee(le,ue,de);d?(Object(o.c)(le,le,ue),Object(o.c)(le,le,de),Object(o.b)(le,le,1/3*d),Object(o.c)(r,r,le),a+=d):(Object(o.c)(he,he,le),Object(o.c)(he,he,ue),Object(o.c)(he,he,de),s+=3)}return!(0===s&&0===a||(0!==a?(Object(o.b)(r,r,1/a),0):0===s||(Object(o.b)(r,he,1/s),0)))}(this.vertexAttributes.get("position"),t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position");return function(e,t,r){if(!e||!t)return!1;const{size:i,data:n}=e;Object(o.r)(r,0,0,0);let a=-1,s=0;for(let e=0;e<t.length;e++){const o=t[e]*i;a!==o&&(r[0]+=n[o+0],r[1]+=n[o+1],r[2]+=n[o+2],s++),a=o}return s>1&&Object(o.b)(r,r,1/s),s>0}(this.vertexAttributes.get("position"),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;Object(w.a)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=ce(e.length/t),i=this.vertexAttributes.get("position");return new S(r,t,e,i)}}function me(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var pe=r(439),ge=r(250),be=r(374),ve=r(375),xe=(r(3),r(370));function _e(e,t){return Object(o.e)(e,t)/Object(o.m)(e)}function ye(e,t){const r=Object(o.e)(e,t)/(Object(o.m)(e)*Object(o.m)(t));return-Object(H.a)(r)}const Oe=Object(n.e)(),Te=Object(n.e)();Object.freeze({__proto__:null,projectPoint:function(e,t,r){const i=Object(o.e)(e,t)/Object(o.e)(e,e);return Object(o.b)(r,e,i)},projectPointSignedLength:_e,angle:ye,angleAroundAxis:function(e,t,r){Object(o.o)(Oe,e),Object(o.o)(Te,t);const i=Object(o.e)(Oe,Te),n=Object(H.a)(i),a=Object(o.d)(Oe,Oe,Te);return Object(o.e)(a,r)<0?2*Math.PI-n:n}});var we=r(65);function Me(e){return e?{origin:Object(n.d)(e.origin),direction:Object(n.d)(e.direction)}:{origin:Object(n.e)(),direction:Object(n.e)()}}function Se(e,t=Me()){return Ae(e.origin,e.direction,t)}function Ae(e,t,r=Me()){return Object(o.h)(r.origin,e),Object(o.h)(r.direction,t),r}function je(e,t,r=Me()){const n=Object(we.a)(Object(R.b)(B.get(),t));if(n[2]=0,!e.unprojectFromRenderScreen(n,r.origin))return null;const a=Object(we.a)(Object(R.b)(B.get(),t));a[2]=1;const s=e.unprojectFromRenderScreen(a,B.get());return Object(i.g)(s)?null:(Object(o.g)(r.direction,s,r.origin),r)}function Ce(e,t,r=Me()){return Pe(e,e.screenToRender(t,Object(we.a)(B.get())),r)}function Pe(e,t,r=Me()){Object(o.h)(r.origin,e.eye);const n=Object(o.r)(B.get(),t[0],t[1],1),a=e.unprojectFromRenderScreen(n,B.get());return Object(i.g)(a)?null:(Object(o.g)(r.direction,a,r.origin),r)}function Ee(e,t){const r=Object(o.d)(B.get(),Object(o.o)(B.get(),e.direction),Object(o.g)(B.get(),t,e.origin));return Object(o.e)(r,r)}function Fe(e,t,r){const i=Object(o.e)(e.direction,Object(o.g)(r,t,e.origin));return Object(o.c)(r,e.origin,Object(o.b)(r,e.direction,i)),r}function Re(){return{origin:null,direction:null}}const De=new E(Re);Object.freeze({__proto__:null,create:Me,wrap:function(e,t){const r=De.get();return r.origin=e,r.direction=t,r},copy:Se,fromPoints:function(e,t,r=Me()){return Object(o.h)(r.origin,e),Object(o.g)(r.direction,t,e),r},fromValues:Ae,fromScreen:function(e,t,r=Me()){return je(e,e.screenToRender(t,Object(we.a)(B.get())),r)},fromRender:je,fromScreenAtEye:Ce,fromRenderAtEye:Pe,distance2:Ee,distance:function(e,t){return Math.sqrt(Ee(e,t))},closestPoint:Fe,createWrapper:Re});const Ie=v.a.getLogger("esri.views.3d.support.geometryUtils.sphere");function Le(){return Object(L.a)()}function Ne(e,t=Le()){return Object(ge.c)(t,e)}function ze(e){e[0]=e[1]=e[2]=e[3]=0}function Be(e){return Array.isArray(e)?e[3]:e}function Ue(e){return Array.isArray(e)?e:Ye}function Ve(e,t,r){if(Object(i.g)(t))return!1;const n=Object(o.g)(B.get(),t.origin,Ue(e)),a=Object(o.e)(t.direction,t.direction),s=2*Object(o.e)(t.direction,n),c=s*s-4*a*(Object(o.e)(n,n)-e[3]*e[3]);if(c<0)return!1;const l=Math.sqrt(c);let u=(-s-l)/(2*a);const d=(-s+l)/(2*a);return(u<0||d<u&&d>0)&&(u=d),!(u<0||(r&&Object(o.c)(r,t.origin,Object(o.b)(B.get(),t.direction,u)),0))}function He(e,t,r){const i=B.get(),n=V.get();Object(o.d)(i,t.origin,t.direction);const s=Be(e);Object(o.d)(r,i,t.origin),Object(o.b)(r,r,1/Object(o.m)(r)*s);const c=Ge(e,t.origin),l=ye(t.origin,r);return Object(a.d)(n),Object(a.g)(n,n,l+c,i),Object(o.j)(r,r,n),r}function ke(e,t,r){const i=Object(o.g)(B.get(),t,Ue(e)),n=Object(o.b)(B.get(),i,e[3]/Object(o.m)(i));return Object(o.c)(r,n,Ue(e))}function Ge(e,t){const r=Object(o.g)(B.get(),t,Ue(e)),i=Object(o.m)(r),n=Be(e),a=n+Math.abs(n-i);return Object(H.a)(n/a)}const qe=Object(n.e)();function $e(e,t,r,i){const n=Object(o.g)(qe,t,Ue(e));switch(r){case 0:{const e=Object(xe.a)(n,qe)[2];return Object(o.r)(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=Object(xe.a)(n,qe),t=e[1],r=e[2],a=Math.sin(t);return Object(o.r)(i,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case 2:return Object(o.o)(i,n);default:return}}function We(e,t){const r=Object(o.g)(Ke,t,Ue(e));return Object(o.m)(r)-e[3]}const Xe=Me(),Ye=Object(n.e)(),Ke=Object(n.e)();Object.freeze(Ye);Object.freeze({__proto__:null,create:Le,copy:Ne,fromCenterAndRadius:function(e,t){return Object(L.b)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:ze,fromRadius:function(e){return e},getRadius:Be,getCenter:Ue,fromValues:function(e,t,r,i){return Object(L.b)(e,t,r,i)},elevate:function(e,t,r){return e!==r&&Object(o.h)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return Ie.error("sphere.setExtent is not yet supported"),e===r?r:Ne(e,r)},intersectRay:Ve,intersectScreen:function(e,t,r,i){return Ve(e,Ce(t,r,Xe),i)},intersectsRay:function(e,t){return Ve(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(Ve(e,t,r))return r;const i=He(e,t,B.get());return Object(o.c)(r,t.origin,Object(o.b)(B.get(),t.direction,Object(o.l)(t.origin,i)/Object(o.m)(t.direction))),r},closestPointOnSilhouette:He,closestPoint:function(e,t,r){return Ve(e,t,r)?r:(Fe(t,Ue(e),r),ke(e,r,r))},projectPoint:ke,distanceToSilhouette:function(e,t){const r=Object(o.g)(B.get(),t,Ue(e)),i=Object(o.p)(r),n=e[3]*e[3];return Math.sqrt(Math.abs(i-n))},angleToSilhouette:Ge,axisAt:$e,altitudeAt:We,setAltitudeAt:function(e,t,r,i){const n=We(e,t),a=$e(e,t,2,Ke),s=Object(o.b)(Ke,a,r-n);return Object(o.c)(i,t,s),i}});function Je(e=Mt){return[e[0],e[1],e[2],e[3]]}function Qe(e,t,r,i){return et(e,t,r,i,U.get())}function Ze(e,t=Je()){return et(e[0],e[1],e[2],e[3],t)}function et(e,t,r,i,n=Je()){return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n}function tt(e,t,r=Je()){Object(o.h)(r,t);const i=Object(o.e)(t,t);return Math.abs(i-1)>1e-5&&i>1e-12&&Object(o.b)(r,r,1/Math.sqrt(i)),ut(r,e,r),r}function rt(e,t,r,i=Je()){return dt(Object(o.g)(B.get(),e,t),Object(o.g)(B.get(),r,t),e,i)}function it(e,t,r,i,n){if(e.count<3)return!1;e.getVec(r,ot);let a=i,s=!1;for(;a<e.count-1&&!s;)e.getVec(a,at),a++,s=!Object(o.n)(ot,at);if(!s)return!1;for(a=Math.max(a,n),s=!1;a<e.count&&!s;)e.getVec(a,st),a++,Object(o.g)(ct,ot,at),Object(o.o)(ct,ct),Object(o.g)(lt,at,st),Object(o.o)(lt,lt),s=!Object(o.n)(ot,st)&&!Object(o.n)(at,st)&&Math.abs(Object(o.e)(ct,lt))<nt;return s?(rt(ot,at,st,t),!0):(0!==r||1!==i||2!==n)&&it(e,t,0,1,2)}const nt=.99619469809,ot=Object(n.e)(),at=Object(n.e)(),st=Object(n.e)(),ct=Object(n.e)(),lt=Object(n.e)();function ut(e,t,r){return e!==r&&Ze(e,r),r[3]=-Object(o.e)(r,t),r}function dt(e,t,r,i=Je()){return tt(r,Object(o.d)(B.get(),t,e),i)}function ht(e,t,r){return!!Object(i.h)(t)&&Tt(e,t.origin,t.direction,!0,!1,r)}function ft(e,t,r){return Tt(e,t.origin,t.vector,!1,!1,r)}function mt(e,t,r){return Tt(e,t.origin,t.vector,!1,!0,r)}function pt(e,t){return Ot(e,Ue(t))-t[3]>=0}function gt(e,t){return Ot(e,t)>=0}function bt(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=t[4],s=t[5];return e[0]*(e[0]>0?r:o)+e[1]*(e[1]>0?i:a)+e[2]*(e[2]>0?n:s)+e[3]>=0}function vt(e,t){const r=Object(o.e)(e,t.ray.direction),i=-Ot(e,t.ray.origin);if(i<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return i>0;if((i<0||r<0)&&!(i<0&&r<0))return!0;const n=i/r;return r>0?n<t.c1&&(t.c1=n):n>t.c0&&(t.c0=n),t.c0<=t.c1}function xt(e,t){const r=Object(o.e)(e,t.ray.direction),i=-Ot(e,t.ray.origin);if(r>-1e-6&&r<1e-6)return i>0;const n=i/r;return r>0?n<t.c1&&(t.c1=n):n>t.c0&&(t.c0=n),t.c0<=t.c1}function _t(e,t,r){const i=Object(o.b)(B.get(),e,-e[3]),n=yt(e,Object(o.g)(B.get(),t,i),B.get());return Object(o.c)(r,n,i),r}function yt(e,t,r){const i=Object(o.b)(B.get(),e,Object(o.e)(e,t));return Object(o.g)(r,t,i),r}function Ot(e,t){return Object(o.e)(e,t)+e[3]}function Tt(e,t,r,i,n,a){const s=Object(o.e)(e,r);if(0===s)return!1;let c=-(Object(o.e)(e,t)+e[3])/s;return n&&(c=i?Math.max(0,c):Object(H.c)(c,0,1)),!(c<0||!i&&c>1||(Object(o.c)(a,t,Object(o.b)(a,r,c)),0))}function wt(e){return e}const Mt=[0,0,1,0];Object.freeze({__proto__:null,create:Je,wrap:Qe,copy:Ze,fromValues:et,fromNormalAndOffset:function(e,t,r=Je()){return Object(o.h)(r,e),r[3]=t,r},fromPositionAndNormal:tt,fromPoints:rt,fromManyPoints:function(e,t){return it(e,t,0,1,2)},fromManyPointsSampleAt:it,setOffsetFromPoint:ut,negate:function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},fromVectorsAndPoint:dt,intersectRay:ht,intersectLineSegment:ft,intersectLineSegmentClamp:mt,isSphereFullyInside:pt,isSphereFullyOutside:function(e,t){return Ot(e,Ue(t))+t[3]<0},isPointInside:gt,isPointOutside:function(e,t){return Ot(e,t)<0},isAABBFullyInside:bt,clip:vt,clipInfinite:xt,projectPoint:_t,projectVector:yt,distance:function(e,t){return Math.abs(Ot(e,t))},signedDistance:Ot,normal:wt,UP:Mt});const St=v.a.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function At(e=$t){return{plane:Je(e.plane),origin:Object(n.d)(e.origin),basis1:Object(n.d)(e.basis1),basis2:Object(n.d)(e.basis2)}}function jt(e,t=At()){return Ct(e.origin,e.basis1,e.basis2,t)}function Ct(e,t,r,i=At()){return Object(o.h)(i.origin,e),Object(o.h)(i.basis1,t),Object(o.h)(i.basis2,r),Pt(i),function(e,t){Math.abs(Object(o.e)(e.basis1,e.basis2)/(Object(o.m)(e.basis1)*Object(o.m)(e.basis2)))>1e-6&&St.warn(t,"Provided basis vectors are not perpendicular"),Math.abs(Object(o.e)(e.basis1,Vt(e)))>1e-6&&St.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-Object(o.e)(Vt(e),e.origin)-e.plane[3])>1e-6&&St.warn(t,"Plane offset is not consistent with plane origin")}(i,"fromValues()"),i}function Pt(e){dt(e.basis2,e.basis1,e.origin,e.plane)}function Et(e,t,r){e!==r&&jt(e,r);const i=Object(o.b)(B.get(),Vt(e),t);return Object(o.c)(r.origin,r.origin,i),r.plane[3]-=t,r}function Ft(e,t=At()){const r=(e[2]-e[0])/2,i=(e[3]-e[1])/2;return Object(o.r)(t.origin,e[0]+r,e[1]+i,0),Object(o.r)(t.basis1,r,0,0),Object(o.r)(t.basis2,0,i,0),et(0,0,1,0,t.plane),t}function Rt(e,t,r){return!!ht(e.plane,t,r)&&Ht(e,r)}function Dt(e,t,r){const i=Wt.get();qt(e,t,i,Wt.get());let n=Number.POSITIVE_INFINITY;for(const a of Jt){const s=Gt(e,a,Xt.get()),c=B.get();if(ft(i,s,c)){const e=Object(xe.b)(B.get(),t.origin,c),i=Math.abs(Object(H.a)(Object(o.e)(t.direction,e)));i<n&&(n=i,Object(o.h)(r,c))}}return n===Number.POSITIVE_INFINITY?It(e,t,r):r}function It(e,t,r){if(Rt(e,t,r))return r;const i=Wt.get(),n=Wt.get();qt(e,t,i,n);let a=Number.POSITIVE_INFINITY;for(const s of Jt){const c=Gt(e,s,Xt.get()),l=B.get();if(mt(i,c,l)){const e=Ee(t,l);if(!gt(n,l))continue;e<a&&(a=e,Object(o.h)(r,l))}}return zt(e,t.origin)<a&&Lt(e,t.origin,r),r}function Lt(e,t,r){const i=_t(e.plane,t,B.get()),n=W(kt(e,e.basis1),i,-1,1,B.get()),a=W(kt(e,e.basis2),i,-1,1,B.get());return Object(o.g)(r,Object(o.c)(B.get(),n,a),e.origin),r}function Nt(e,t,r){const{origin:i,basis1:n,basis2:a}=e,s=Object(o.g)(B.get(),t,i),c=_e(n,s),l=_e(a,s),u=_e(Vt(e),s);return Object(o.r)(r,c,l,u)}function zt(e,t){const r=Nt(e,t,B.get()),{basis1:i,basis2:n}=e,a=Object(o.m)(i),s=Object(o.m)(n),c=Math.max(Math.abs(r[0])-a,0),l=Math.max(Math.abs(r[1])-s,0),u=r[2];return c*c+l*l+u*u}function Bt(e,t){return gt(e.plane,t)&&Ht(e,t)}function Ut(e,t){const r=-e.plane[3];return _e(Vt(e),t)-r}function Vt(e){return e.plane}function Ht(e,t){const r=Object(o.g)(B.get(),t,e.origin),i=Object(o.p)(e.basis1),n=Object(o.p)(e.basis2),a=Object(o.e)(e.basis1,r),s=Object(o.e)(e.basis2,r);return-a-i<0&&a-i<0&&-s-n<0&&s-n<0}function kt(e,t){const r=Xt.get();return Object(o.h)(r.origin,e.origin),Object(o.h)(r.vector,t),r}function Gt(e,t,r){const{basis1:i,basis2:n,origin:a}=e,s=Object(o.b)(B.get(),i,t.origin[0]),c=Object(o.b)(B.get(),n,t.origin[1]);Object(o.c)(r.origin,s,c),Object(o.c)(r.origin,r.origin,a);const l=Object(o.b)(B.get(),i,t.direction[0]),u=Object(o.b)(B.get(),n,t.direction[1]);return Object(o.b)(r.vector,Object(o.c)(l,l,u),2),r}function qt(e,t,r,i){const n=Vt(e);dt(n,t.direction,t.origin,r),dt(r,n,t.origin,i)}const $t={plane:Je(),origin:Object(n.g)(0,0,0),basis1:Object(n.g)(1,0,0),basis2:Object(n.g)(0,1,0)},Wt=new E(Je),Xt=new E(k),Yt=Object(n.e)(),Kt=new E(()=>({origin:null,basis1:null,basis2:null,plane:null})),Jt=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],Qt=Object(l.b)(),Zt=Object(l.b)();Object.freeze({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=Je(),this.origin=Object(n.e)(),this.basis1=Object(n.e)(),this.basis2=Object(n.e)()}},create:At,wrap:function(e,t,r){const i=Kt.get();return i.origin=e,i.basis1=t,i.basis2=r,i.plane=Qe(0,0,0,0),Pt(i),i},copy:jt,copyWithoutVerify:function(e,t){Object(o.h)(t.origin,e.origin),Object(o.h)(t.basis1,e.basis1),Object(o.h)(t.basis2,e.basis2),Ze(e.plane,t.plane)},fromValues:Ct,updateUnboundedPlane:Pt,elevate:Et,setExtent:function(e,t,r){return Ft(t,r),Et(r,Ut(e,e.origin),r),r},fromAABoundingRect:Ft,intersectRay:Rt,intersectRayClosestSilhouette:function(e,t,r){if(Rt(e,t,r))return r;const i=Dt(e,t,B.get());return Object(o.c)(r,t.origin,Object(o.b)(B.get(),t.direction,Object(o.l)(t.origin,i)/Object(o.m)(t.direction))),r},closestPointOnSilhouette:Dt,closestPoint:It,projectPoint:Lt,projectPointLocal:Nt,distance2:zt,distance:function(e,t){return Math.sqrt(zt(e,t))},distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const i of Jt){const n=$(Gt(e,i,Xt.get()),t);n>r&&(r=n)}return Math.sqrt(r)},extrusionContainsPoint:Bt,axisAt:function(e,t,r,i){return function(e,t,r){switch(t){case 0:Object(o.h)(r,e.basis1),Object(o.o)(r,r);break;case 1:Object(o.h)(r,e.basis2),Object(o.o)(r,r);break;case 2:Object(o.h)(r,Vt(e))}return r}(e,r,i)},altitudeAt:Ut,setAltitudeAt:function(e,t,r,i){const n=Ut(e,t),a=Object(o.b)(Yt,Vt(e),r-n);return Object(o.c)(i,t,a),i},equals:function(e,t){return Object(o.n)(e.basis1,t.basis1)&&Object(o.n)(e.basis2,t.basis2)&&Object(o.n)(e.origin,t.origin)},transform:function(e,t,r){return e!==r&&jt(e,r),Object(a.a)(Qt,t),Object(a.b)(Qt,Qt),Object(o.j)(r.basis1,e.basis1,Qt),Object(o.j)(r.basis2,e.basis2,Qt),Object(o.j)(r.plane,e.plane,Qt),Object(o.j)(r.origin,e.origin,t),ut(r.plane,r.origin,r.plane),r},rotate:function(e,t,r,i){return e!==i&&jt(e,i),Object(a.g)(Zt,Object(a.d)(Zt),t,r),Object(o.j)(i.basis1,e.basis1,Zt),Object(o.j)(i.basis2,e.basis2,Zt),Pt(i),i},normal:Vt,UP:$t});function er(e=rr){return[e[0],e[1],e[2],e[3]]}function tr(e,t,r,i,n=er()){return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n}const rr=[0,0,1,0];Object.freeze({__proto__:null,create:er,wrap:function(e,t,r,i){return tr(e,t,r,i,U.get())},wrapAxisAngle:function(e,t){return tr(e[0],e[1],e[2],t,U.get())},copy:function(e,t=er()){return tr(e[0],e[1],e[2],e[3],t)},fromValues:tr,fromAxisAndAngle:function(e,t,r=er()){return Object(o.h)(r,e),r[3]=t,r},fromPoints:function(e,t,r=er()){return Object(o.d)(r,e,t),Object(o.o)(r,r),r[3]=ye(e,t),r},axis:function(e){return e},UP:rr});function ir(e){return e?{ray:Me(e.ray),c0:e.c0,c1:e.c1}:{ray:Me(),c0:0,c1:Number.MAX_VALUE}}function nr(e,t,r,i=ir()){return Se(e,i.ray),i.c0=t,i.c1=r,i}function or(e,t=ir()){return Se(e,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function ar(e,t,r=ir()){const i=Object(o.m)(e.vector);return Ae(e.origin,t,r.ray),r.c0=0,r.c1=i,r}function sr(e,t,r){return Object(o.c)(r,e.ray.origin,Object(o.b)(r,e.ray.direction,t))}const cr=new E(()=>({c0:0,c1:0,ray:null}));Object.freeze({__proto__:null,create:ir,wrap:function(e,t,r){const i=cr.get();return i.ray=e,i.c0=t,i.c1=r,i},copy:function(e,t=ir()){return nr(e.ray,e.c0,e.c1,t)},fromValues:nr,fromRay:or,fromLineSegment:function(e,t=ir()){return ar(e,Object(o.o)(B.get(),e.vector),t)},fromLineSegmentAndDirection:ar,getStart:function(e,t){return sr(e,e.c0,t)},getEnd:function(e,t){return sr(e,e.c1,t)},getAt:sr});function lr(e){return e?[Je(e[0]),Je(e[1]),Je(e[2]),Je(e[3]),Je(e[4]),Je(e[5])]:[Je(),Je(),Je(),Je(),Je(),Je()]}function ur(){return[Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)()]}function dr(e,t){rt(t[4],t[0],t[3],e[0]),rt(t[1],t[5],t[6],e[1]),rt(t[4],t[5],t[1],e[2]),rt(t[3],t[2],t[6],e[3]),rt(t[0],t[1],t[2],e[4]),rt(t[5],t[4],t[7],e[5])}function hr(e,t){for(let r=0;r<6;r++)if(!vt(e[r],t))return!1;return!0}const fr=[Object(L.b)(-1,-1,-1,1),Object(L.b)(1,-1,-1,1),Object(L.b)(1,1,-1,1),Object(L.b)(-1,1,-1,1),Object(L.b)(-1,-1,1,1),Object(L.b)(1,-1,1,1),Object(L.b)(1,1,1,1),Object(L.b)(-1,1,1,1)],mr=new E(ir),pr=ur();Object.freeze({__proto__:null,create:lr,createPoints:ur,copy:function(e,t=lr()){for(let r=0;r<6;r++)Ze(e[r],t[r])},fromMatrix:function(e,t,r,i=pr){const n=Object(a.f)(V.get(),t,e);Object(a.a)(n,n);for(let e=0;e<8;++e){const t=Object(ge.l)(U.get(),fr[e],n);Object(o.r)(i[e],t[0]/t[3],t[1]/t[3],t[2]/t[3])}dr(r,i)},computePlanes:dr,intersectsSphere:function(e,t){for(let r=0;r<6;r++)if(pt(e[r],t))return!1;return!0},intersectsRay:function(e,t){return hr(e,or(t,mr.get()))},intersectClipRay:function(e,t){for(let r=0;r<6;r++){if(!xt(e[r],t))return!1}return!0},intersectsLineSegment:function(e,t,r){return hr(e,ar(t,r,mr.get()))},intersectsPoint:function(e,t){for(let r=0;r<6;r++)if(Ot(e[r],t)>0)return!1;return!0},intersectsAABB:function(e,t){for(let r=0;r<6;r++)if(bt(e[r],t))return!1;return!0},planePointIndices:{bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]}});var gr=r(22);class br{constructor(){this._disposed=!1}get disposed(){return this._disposed}get shaderTransformation(){return this._shaderTransformation}acquire(e,t,r,i,n,o){this.id=Object(j.a)(),this.geometry=e,this.material=t,this.transformation=r,this.instanceParameters=i,this.origin=n,this._shaderTransformation=o,this._disposed=!1}release(){this._disposed=!1}dispose(){this._disposed=!0}getStaticTransformation(){return this.transformation}getShaderTransformation(){return Object(i.h)(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(e){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,e):this.geometry.computeAttachmentOrigin(e))&&(Object(o.j)(e,e,this.getStaticTransformation()),!0)}}br.pool=new gr.a(br);r(522);const vr=new class{constructor(e=0){this.offset=e,this.sphere=Le(),this.tmpVertex=Object(n.e)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let n=i[0]*e+i[4]*t+i[8]*r+i[12],o=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(n*n+o*o+a*a);n+=n*s,o+=o*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*n+c[4]*o+c[8]*a+c[12],this.tmpVertex[1]=c[1]*n+c[5]*o+c[9]*a+c[13],this.tmpVertex[2]=c[2]*n+c[6]*o+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(n.e)(),this.mbs=Object(L.a)(),this.obb={center:Object(n.e)(),halfSize:Object(ve.a)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,n=t,o=r+this.componentLocalOriginLength,a=this.offset/Math.sqrt(i*i+n*n+o*o);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,n=e[3],o=e[4],a=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+o*o+a*a);return e[3]+=n*c,e[4]+=o*c,e[5]+=a*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,Object(o.q)(this.obb.halfSize,e.halfSize,e.quaternion),Object(o.c)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,Object(o.g)(this.obb.halfSize,this.obb.halfSize,e.center),Object(be.a)(xr,e.quaternion),Object(o.q)(this.obb.halfSize,this.obb.halfSize,xr),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=Object(n.e)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],n=t+this.localOrigin[1],o=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+n*n+o*o);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],n=e[3]+this.localOrigin[0],o=e[4]+this.localOrigin[1],a=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+o*o+a*a);return e[3]+=n*c,e[4]+=o*c,e[5]+=a*c,e}};Object(n.e)(),Object(n.e)(),Object(L.a)();const xr=Object(D.a)(),_r=0,yr=1,Or=2,Tr=3,wr=4,Mr=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class Sr extends(Mr(class{})){}var Ar=class extends Sr{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}};var jr=class extends Ar{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach(e=>this._textureRepository.release(e)),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(e,t){Object(i.h)(this._texture)&&(t.setUniform1i("tex",_r),e.bindTexture(this._texture.glTexture,_r)),Object(i.h)(this._textureNormal)&&(t.setUniform1i("normalTexture",yr),e.bindTexture(this._textureNormal.glTexture,yr)),Object(i.h)(this._textureEmissive)&&(t.setUniform1i("texEmission",Or),e.bindTexture(this._textureEmissive.glTexture,Or)),Object(i.h)(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",Tr),e.bindTexture(this._textureOcclusion.glTexture,Tr)),Object(i.h)(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",wr),e.bindTexture(this._textureMetallicRoughness.glTexture,wr))}bindTextureScale(e,t){const r=Object(i.h)(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!Object(i.g)(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){Object(i.g)(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}},Cr=r(431);const Pr={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};class Er extends C{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Pr,this._params=Object(Cr.c)(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){Object(Cr.e)(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(i.h)(this.materialRepository)&&this.materialRepository.materialChanged(this)}}function Fr(e,t,r,i){const n=r.typedBuffer,o=r.typedBufferStride,a=e.length;i*=o;for(let r=0;r<a;++r){const a=2*e[r];n[i]=t[a],n[i+1]=t[a+1],i+=o}}function Rr(e,t,r,i,n){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==n||1===n)for(let r=0;r<s;++r){const n=3*e[r];o[i]=t[n],o[i+1]=t[n+1],o[i+2]=t[n+2],i+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<n;++e)o[i]=t[s],o[i+1]=t[s+1],o[i+2]=t[s+2],i+=a}}function Dr(e,t,r,i,n=1){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===n)for(let r=0;r<s;++r){const n=4*e[r];o[i]=t[n],o[i+1]=t[n+1],o[i+2]=t[n+2],o[i+3]=t[n+3],i+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<n;++e)o[i]=t[s],o[i+1]=t[s+1],o[i+2]=t[s+2],o[i+3]=t[s+3],i+=a}}function Ir(e,t,r,i,n,o=1){if(r){const a=i.typedBuffer,s=i.typedBufferStride,c=e.length,l=r[0],u=r[1],d=r[2],h=r[4],f=r[5],m=r[6],p=r[8],g=r[9],b=r[10],v=r[12],x=r[13],_=r[14];if(n*=s,1===o)for(let r=0;r<c;++r){const i=3*e[r],o=t[i],c=t[i+1],y=t[i+2];a[n]=l*o+h*c+p*y+v,a[n+1]=u*o+f*c+g*y+x,a[n+2]=d*o+m*c+b*y+_,n+=s}else for(let r=0;r<c;++r){const i=3*e[r],c=t[i],y=t[i+1],O=t[i+2],T=l*c+h*y+p*O+v,w=u*c+f*y+g*O+x,M=d*c+m*y+b*O+_;for(let e=0;e<o;++e)a[n]=T,a[n+1]=w,a[n+2]=M,n+=s}}else Rr(e,t,i,n,o)}function Lr(e,t,r,i,n,o){if(r){const a=r,s=i.typedBuffer,c=i.typedBufferStride,l=e.length,u=a[0],d=a[1],h=a[2],f=a[4],m=a[5],p=a[6],g=a[8],b=a[9],v=a[10],x=Math.abs(1-u*u+f*f+g*g)>1e-5||Math.abs(1-d*d+m*m+b*b)>1e-5||Math.abs(1-h*h+p*p+v*v)>1e-5,_=1e-6,y=1-_;if(n*=c,1===o)for(let r=0;r<l;++r){const i=3*e[r],o=t[i],a=t[i+1],l=t[i+2];let O=u*o+f*a+g*l,T=d*o+m*a+b*l,w=h*o+p*a+v*l;if(x){const e=O*O+T*T+w*w;if(e<y&&e>_){const t=Math.sqrt(e);O/=t,T/=t,w/=t}}s[n+0]=O,s[n+1]=T,s[n+2]=w,n+=c}else for(let r=0;r<l;++r){const i=3*e[r],a=t[i],l=t[i+1],O=t[i+2];let T=u*a+f*l+g*O,w=d*a+m*l+b*O,M=h*a+p*l+v*O;if(x){const e=T*T+w*w+M*M;if(e<y&&e>_){const t=Math.sqrt(e);T/=t,w/=t,M/=t}}for(let e=0;e<o;++e)s[n+0]=T,s[n+1]=w,s[n+2]=M,n+=c}}else Rr(e,t,i,n,o)}function Nr(e,t,r,i,n,o=1){const a=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(n*=s,1===o){if(4===r)for(let r=0;r<c;++r){const i=4*e[r];a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=t[i+3],n+=s}else if(3===r)for(let r=0;r<c;++r){const i=3*e[r];a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=255,n+=s}}else if(4===r)for(let r=0;r<c;++r){const i=4*e[r];for(let e=0;e<o;++e)a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=t[i+3],n+=s}else if(3===r)for(let r=0;r<c;++r){const i=3*e[r];for(let e=0;e<o;++e)a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=255,n+=s}}var zr=r(313);function Br(e,t,r=32774,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}const Ur={zNear:0,zFar:1},Vr={r:!0,g:!0,b:!0,a:!0};function Hr(e){return Qr.intern(e)}function kr(e){return ei.intern(e)}function Gr(e){return ri.intern(e)}function qr(e){return ni.intern(e)}function $r(e){return ai.intern(e)}function Wr(e){return ci.intern(e)}function Xr(e){return ui.intern(e)}function Yr(e){return hi.intern(e)}class Kr{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),r=this.interns;return r.has(t)||r.set(t,this.makeRef(e)),r.get(t)}}function Jr(e){return"["+e.join(",")+"]"}const Qr=new Kr(Zr,e=>({__tag:"Blending",...e}));function Zr(e){return e?Jr([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const ei=new Kr(ti,e=>({__tag:"Culling",...e}));function ti(e){return e?Jr([e.face,e.mode]):null}const ri=new Kr(ii,e=>({__tag:"PolygonOffset",...e}));function ii(e){return e?Jr([e.factor,e.units]):null}const ni=new Kr(oi,e=>({__tag:"DepthTest",...e}));function oi(e){return e?Jr([e.func]):null}const ai=new Kr(si,e=>({__tag:"StencilTest",...e}));function si(e){return e?Jr([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const ci=new Kr(li,e=>({__tag:"DepthWrite",...e}));function li(e){return e?Jr([e.zNear,e.zFar]):null}const ui=new Kr(di,e=>({__tag:"ColorWrite",...e}));function di(e){return e?Jr([e.r,e.g,e.b,e.a]):null}const hi=new Kr(fi,e=>({__tag:"StencilWrite",...e}));function fi(e){return e?Jr([e.mask]):null}const mi=new Kr((function(e){return e?Jr([Zr(e.blending),ti(e.culling),ii(e.polygonOffset),oi(e.depthTest),si(e.stencilTest),li(e.depthWrite),di(e.colorWrite),fi(e.stencilWrite)]):null}),e=>({blending:Hr(e.blending),culling:kr(e.culling),polygonOffset:Gr(e.polygonOffset),depthTest:qr(e.depthTest),stencilTest:$r(e.stencilTest),depthWrite:Wr(e.depthWrite),colorWrite:Xr(e.colorWrite),stencilWrite:Yr(e.stencilWrite)}));const pi=function(e,t,r,i,n=32774,o=32774,a=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:o,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}(770,1,771,771),gi=Br(1,1),bi=Br(0,771);const vi={factor:-1,units:-2};function xi(e){return e?vi:null}function _i(e){return 3===e||2===e?513:515}var yi=r(13);class Oi{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function Ti(e={}){return(t,r)=>{var i,n;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const o=t._parameterNames.length-1,a=e.count||2,s=Math.ceil(Object(H.h)(a)),c=null!=(n=t._parameterBits)?n:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const u=c[l],d=(1<<s)-1<<u;c[l]+=s,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~d|+e<<u&d,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}var wi=r(422);function Mi(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}const Si=Mi();var Ai;Object.freeze({__proto__:null,create:Mi,clone:function(e){const t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},fromValues:function(e,t,r,i,n,o,a,s,c,l,u,d,h,f,m,p){const g=new Float32Array(16);return g[0]=e,g[1]=t,g[2]=r,g[3]=i,g[4]=n,g[5]=o,g[6]=a,g[7]=s,g[8]=c,g[9]=l,g[10]=u,g[11]=d,g[12]=h,g[13]=f,g[14]=m,g[15]=p,g},createView:function(e,t){return new Float32Array(e,t,16)},IDENTITY:Si});!function(e){function t(e,t,r){Object(a.i)(ji,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",ji)}e.bindCamPosition=function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])},e.bindProjectionMatrix=function(e,t){e.setUniformMatrix4fv("proj",t)},e.bindNearFar=function(e,t){e.setUniform2fv("nearFar",t)},e.bindViewCustomOrigin=t,e.bindView=function(e,r){t(e,r.origin,r.camera.viewMatrix)},e.bindViewport=function(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}}(Ai||(Ai={}));const ji=Mi();var Ci=r(314),Pi=r(523),Ei=r(315),Fi=r(361),Ri=r(347);const Di={mask:255},Ii={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Li={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var Ni=r(316),zi=r(423),Bi=r(348),Ui=r(349),Vi=r(483);class Hi extends class{constructor(e,t){t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),e.commonUniformStore&&(this._commonUniformStore=e.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(e)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(e){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(e),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t,r){}bindMaterial(e,t,r){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=Hi.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(zi.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new wi.a(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),Pr)}bindPass(e,t,r){Ai.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const i=this.configuration.output;(1===this.configuration.output||r.multipassTerrainEnabled||3===i)&&this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),Object(Ri.a)(this.program,e,r)),7===i&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Cr.b[t.colorMixMode])),0===i?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Cr.b[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&Ui.a.bindUniforms(this.program,t,this.configuration.isSchematic)):4===i&&Pi.a.bindOutputHighlight(e,this.program,r),Ei.a.bindUniformsForSymbols(this.program,t),Fi.a.bindUniforms(this.program,t,r),Object(Cr.a)(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(n.g)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Ai.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Ai.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Bi.a.bindCustomOrigin(this.program,t),Ci.a.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Ni.a.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,n=2===e;return function(e){return mi.intern(e)}({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?pi:(o=e,2===o?null:1===o?bi:gi),culling:ki(r),depthTest:{func:_i(e)},depthWrite:i||n?r.writeDepth&&Ur:null,colorWrite:Vr,stencilWrite:r.sceneHasOcludees?Di:null,stencilTest:r.sceneHasOcludees?t?Li:Ii:null,polygonOffset:i||n?null:xi(r.enableOffset)});var o}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}Hi.shader=new Oi(Vi.a,()=>r.e(168).then(r.bind(null,624)));const ki=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class Gi extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map(()=>0)}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}Object(yi.a)([Ti({count:8})],Gi.prototype,"output",void 0),Object(yi.a)([Ti({count:4})],Gi.prototype,"alphaDiscardMode",void 0),Object(yi.a)([Ti({count:3})],Gi.prototype,"doubleSidedMode",void 0),Object(yi.a)([Ti()],Gi.prototype,"isSchematic",void 0),Object(yi.a)([Ti()],Gi.prototype,"vertexColors",void 0),Object(yi.a)([Ti()],Gi.prototype,"offsetBackfaces",void 0),Object(yi.a)([Ti()],Gi.prototype,"symbolColors",void 0),Object(yi.a)([Ti()],Gi.prototype,"vvSize",void 0),Object(yi.a)([Ti()],Gi.prototype,"vvColor",void 0),Object(yi.a)([Ti()],Gi.prototype,"verticalOffset",void 0),Object(yi.a)([Ti()],Gi.prototype,"receiveShadows",void 0),Object(yi.a)([Ti()],Gi.prototype,"slicePlaneEnabled",void 0),Object(yi.a)([Ti()],Gi.prototype,"sliceHighlightDisabled",void 0),Object(yi.a)([Ti()],Gi.prototype,"receiveAmbientOcclusion",void 0),Object(yi.a)([Ti()],Gi.prototype,"screenSizePerspective",void 0),Object(yi.a)([Ti()],Gi.prototype,"textureAlphaPremultiplied",void 0),Object(yi.a)([Ti()],Gi.prototype,"hasColorTexture",void 0),Object(yi.a)([Ti()],Gi.prototype,"usePBR",void 0),Object(yi.a)([Ti()],Gi.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(yi.a)([Ti()],Gi.prototype,"hasEmissionTexture",void 0),Object(yi.a)([Ti()],Gi.prototype,"hasOcclusionTexture",void 0),Object(yi.a)([Ti()],Gi.prototype,"hasNormalTexture",void 0),Object(yi.a)([Ti()],Gi.prototype,"instanced",void 0),Object(yi.a)([Ti()],Gi.prototype,"instancedColor",void 0),Object(yi.a)([Ti()],Gi.prototype,"instancedDoublePrecision",void 0),Object(yi.a)([Ti()],Gi.prototype,"vertexTangents",void 0),Object(yi.a)([Ti()],Gi.prototype,"normalsTypeDerivate",void 0),Object(yi.a)([Ti()],Gi.prototype,"writeDepth",void 0),Object(yi.a)([Ti()],Gi.prototype,"sceneHasOcludees",void 0),Object(yi.a)([Ti()],Gi.prototype,"transparent",void 0),Object(yi.a)([Ti()],Gi.prototype,"enableOffset",void 0),Object(yi.a)([Ti({count:3})],Gi.prototype,"cullFace",void 0),Object(yi.a)([Ti({count:4})],Gi.prototype,"transparencyPassType",void 0),Object(yi.a)([Ti()],Gi.prototype,"multipassTerrainEnabled",void 0),Object(yi.a)([Ti()],Gi.prototype,"cullAboveGround",void 0);var qi=r(484);class $i extends Hi{initializeProgram(e){const t=$i.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(zi.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new wi.a(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),Pr)}}$i.shader=new Oi(qi.a,()=>r.e(167).then(r.bind(null,625)));class Wi extends Er{constructor(e){super(e,Yi),this.supportsEdges=!0,this.techniqueConfig=new Gi,this.vertexBufferLayout=Wi.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?Wi.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,n=!!t&&t.indexOf("color")>-1,o=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(n||o||i)?!!a||s:r?a?c:s:n||o||i?!!a||s:a?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,n,a,s,c){if(null!==this.params.verticalOffset){const e=n.camera;Object(o.r)(rn,r[12],r[13],r[14]);let t=null;switch(n.viewingMode){case 1:t=Object(o.o)(en,rn);break;case 2:t=Object(o.h)(en,Zi)}let i=0;if(null!==this.params.verticalOffset){const r=Object(o.g)(nn,rn,e.eye),n=Object(o.m)(r),a=Object(o.b)(r,r,1/n);let s=null;this.params.screenSizePerspective&&(s=Object(o.e)(t,a)),i+=Object(Cr.f)(e,n,this.params.verticalOffset,s,this.params.screenSizePerspective)}Object(o.b)(t,t,i),Object(o.s)(tn,t,n.transform.inverseRotation),a=Object(o.g)(Ji,a,tn),s=Object(o.g)(Qi,s,tn)}Object(Cr.d)(e,t,n,a,s,function(e){return Object(i.h)(e)?(vr.offset=e,vr):null}(n.verticalOffset),c)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new Xi(e)}createBufferWriter(){return new Ki(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(pe.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=Object(pe.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class Xi extends jr{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting($i,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(Hi,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const Yi={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(c.a)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:zr.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class Ki{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,i){!function(e,t,r,i,n,o){for(const a of t.fieldNames){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case"position":{Object(w.a)(3===t.size);const e=n.getField(a,b.u);e&&Ir(s,t.data,r,e,o);break}case"normal":{Object(w.a)(3===t.size);const e=n.getField(a,b.u);e&&Lr(s,t.data,i,e,o,1);break}case"uv0":{Object(w.a)(2===t.size);const e=n.getField(a,b.m);e&&Fr(s,t.data,e,o);break}case"color":{Object(w.a)(3===t.size||4===t.size);const e=n.getField(a,b.J);e&&Nr(s,t.data,t.size,e,o);break}case"symbolColor":{Object(w.a)(3===t.size||4===t.size);const e=n.getField(a,b.J);e&&Nr(s,t.data,t.size,e,o);break}case"tangent":{Object(w.a)(4===t.size);const e=n.getField(a,b.C);e&&Dr(s,t.data,e,o);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const Ji=Object(n.e)(),Qi=Object(n.e)(),Zi=Object(n.g)(0,0,1),en=Object(n.e)(),tn=Object(n.e)(),rn=Object(n.e)(),nn=Object(n.e)();var on=r(88),an=r(12),sn=r(16),cn=r(21),ln=r(4),un=r(111),dn=r(290),hn=r(54);async function fn(e,t){const{data:r}=await Object(hn.default)(e,{responseType:"image",...t});return r}var mn=r(372),pn=r(239),gn=r(482),bn=r(480),vn=r(481);const xn=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],_n=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var yn=r(357),On=r(109);let Tn,wn=null,Mn=null;async function Sn(){return Object(i.g)(Mn)&&(Mn=function(){if(Object(i.g)(Tn)){const e=e=>Object(On.a)("esri/libs/basisu/"+e);Tn=r.e(69).then(r.bind(null,626)).then((function(e){return e.b})).then(({default:t})=>t({locateFile:e}).then(e=>(e.initializeBasis(),delete e.then,e)))}return Tn}(),wn=await Mn),Mn}const An=v.a.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function jn(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Cn=jn("DXT1"),Pn=jn("DXT3"),En=jn("DXT5");function Fn(e,t,r,i){const{textureData:n,internalFormat:o,width:a,height:s}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return An.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return An.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let n,o;switch(i){case Cn:n=8,o=33776;break;case Pn:n=16,o=33778;break;case En:n=16,o=33779;break;default:return An.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],c=r[3];0==(3&s)&&0==(3&c)||(An.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,u=c;let d,h;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7])),1===a||Object(H.f)(s)&&Object(H.f)(c)||(An.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let f=r[1]+4;const m=[];for(let t=0;t<a;++t)h=(s+3>>2)*(c+3>>2)*n,d=new Uint8Array(e,f,h),m.push(d),f+=h,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:m},internalFormat:o,width:l,height:u}}(r,i);t.samplingMode=n.levels.length>1?9987:9729,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=a,t.height=s;const c=new pn.a(e,t,n);return e.bindTexture(c,0),c}class Rn extends C{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new un.a,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Rn.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;Object(i.g)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Object(cn.t)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){Object(cn.u)(e.src)||Object(cn.t)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(Object(i.g)(e))return 0;if(Object(an.c)(e)||Object(an.k)(e))return t.encoding===Rn.BASIS_ENCODING?function(e){if(Object(i.g)(wn))return e.byteLength;const t=new wn.BasisFile(new Uint8Array(e));if(t.getNumImages()<1)return 0;const r=t.getNumLevels(0),n=t.getHasAlpha(),o=t.getImageWidth(0,0),a=t.getImageHeight(0,0);t.close(),t.delete();const s=Object(gn.b)(n?37496:37492),c=(4**r-1)/(3*4**(r-1));return Math.ceil(o*a*s*c)}(e):e.byteLength;const{width:r,height:n}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Rn.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*n*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,t){if(Object(i.h)(this.glTexture))return this.glTexture;if(Object(i.h)(this.loadingPromise))return this.loadingPromise;const r=this.data;return Object(i.g)(r)?(this.glTexture=new pn.a(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(Object(an.c)(r)||Object(an.k)(r))&&this.params.encoding===Rn.DDS_ENCODING?this.loadFromDDSData(e,r):(Object(an.c)(r)||Object(an.k)(r))&&this.params.encoding===Rn.BASIS_ENCODING?this.loadFromBasis(e,r):Object(an.k)(r)?this.loadFromPixelData(e,r):Object(an.c)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||Object(i.g)(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(Object(i.h)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:n}=this.powerOfTwoStretchInfo;n.setData(this.data),this.drawStretchedTexture(e,t,r,i,n,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=Fn(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromBasis(e,t){return this.loadAsync(()=>async function(e,t,r){Object(i.g)(wn)&&(wn=await Sn());const n=new wn.BasisFile(new Uint8Array(r));if(n.getNumImages()<1)return null;const o=n.getNumLevels(0),a=n.getHasAlpha(),s=n.getImageWidth(0,0),c=n.getImageHeight(0,0),{compressedTextureETC:l,compressedTextureS3TC:u}=e.capabilities,[d,h]=l?a?[1,37496]:[0,37492]:u?a?[3,33779]:[2,33776]:[13,6408];n.startTranscoding();const f=[];for(let e=0;e<o;e++)f.push(new Uint8Array(n.getImageTranscodedSizeInBytes(0,e,d))),n.transcodeImage(f[e],0,e,d,0,0);n.close(),n.delete();const m={...t,samplingMode:o>1?9987:9729,hasMipmap:o>1,internalFormat:h,width:s,height:c};return new pn.a(e,m,{type:"compressed",levels:f})}(e,this.createDescriptor(e),t).then(e=>(this.glTexture=e,e)))}loadFromPixelData(e,t){Object(w.a)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new pn.a(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=Object(ln.d)();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync(async i=>{const n=await fn(r,{signal:i});return this.loadFromImage(e,n,t)})}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync(async i=>{const n=await Object(dn.a)(r,r.src,!1,i);return this.loadFromImage(e,n,t)})}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync(n=>new Promise((o,a)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),Object(i.h)(u)&&u.remove()},c=()=>{r.readyState>=2&&(s(),o(this.loadFromImage(e,r,t)))},l=e=>{s(),a(e||new sn.a("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const u=Object(ln.o)(n,()=>l(Object(ln.e)()))}))}loadFromImage(e,t,r){const i=Rn.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const n=this.createDescriptor(e);return n.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,n)||Object(H.f)(i.width)&&Object(H.f)(i.height)?(n.width=i.width,n.height=i.height,this.glTexture=new pn.a(e,n,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,n,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Object(mn.a)(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,n){const{width:o,height:a}=r,s=Object(H.i)(o),c=Object(H.i)(a);let l;switch(i.width=s,i.height=c,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[o/s,a/c],l=new pn.a(e,i),l.updateData(0,0,0,o,a,t);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(e,t,i,n);break;default:Object(on.a)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(e,t,r,i){const n=new pn.a(e,r),o=new yn.a(e,{colorTarget:0,depthStencilTarget:0},n),a=new pn.a(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=xn,r=Pr,i=-1,n=1){let o=null;switch(t){case _n:o=new Float32Array([i,i,0,0,n,i,1,0,i,n,0,1,n,n,1,1]);break;case xn:default:o=new Float32Array([i,i,n,i,i,n,n,n])}return new vn.a(e,r,{geometry:t},{geometry:bn.a.createVertex(e,35044,o)})}(e);return this.drawStretchedTexture(e,i,o,s,a,n),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:o}:(s.dispose(!0),a.dispose(),o.detachColorTexture(),e.bindFramebuffer(null),o.dispose()),n}drawStretchedTexture(e,t,r,i,n,o){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=t.program;e.bindProgram(s),s.setUniform4f("color",1,1,1,1),s.setUniform1i("tex",0),e.bindTexture(n,0),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,Object(gn.d)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if(Object(i.h)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(Object(i.h)(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),Object(i.h)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Rn.DDS_ENCODING="image/vnd-ms.dds",Rn.BASIS_ENCODING="image/x.basis";var Dn=r(117);class In{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return Object(cn.u)(e)?(Object(ln.t)(t),Object(cn.j)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(Object(i.g)(this.streamDataRequester))return(await Object(hn.default)(t,{responseType:Ln[e]})).data;const n=await Object(Dn.c)(this.streamDataRequester.request(t,e,r));if(!0===n.ok)return n.value;throw Object(ln.s)(n.error),new sn.a("","Request for resource failed: "+n.error)}}const Ln={image:"image",binary:"array-buffer",json:"json"};var Nn=r(440);function zn(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=o[l],i[c+1]=o[l+1],c+=n,l+=a}function Bn(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;if(Object(Nn.b)(t.elementType)){const e=Object(Nn.d)(t.elementType);if(Object(Nn.c)(t.elementType))for(let t=0;t<s;++t)i[c]=Math.max(o[l]/e,-1),i[c+1]=Math.max(o[l+1]/e,-1),c+=n,l+=a;else for(let t=0;t<s;++t)i[c]=o[l]/e,i[c+1]=o[l+1]/e,c+=n,l+=a}else zn(e,t,r);return e}Object.freeze({__proto__:null,copy:zn,normalizeIntegerBuffer:Bn});function Un(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=o[l],i[c+1]=o[l+1],i[c+2]=o[l+2],c+=n,l+=a}Object.freeze({__proto__:null,copy:Un});function Vn(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=o[l],i[c+1]=o[l+1],i[c+2]=o[l+2],i[c+3]=o[l+3],c+=n,l+=a}function Hn(e,t,r,i,n,o){const a=e.typedBuffer,s=e.typedBufferStride,c=o?o.count:e.count;let l=(o&&o.dstIndex?o.dstIndex:0)*s;for(let e=0;e<c;++e)a[l]=t,a[l+1]=r,a[l+2]=i,a[l+3]=n,l+=s}Object.freeze({__proto__:null,copy:Vn,fill:Hn});Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<9;++e)i[c+e]=o[l+e];c+=n,l+=a}}});Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<16;++e)i[c+e]=o[l+e];c+=n,l+=a}}});function kn(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let i=0;i<r;i++)t[i]=e.get(i);return t}Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=o[l],c+=n,l+=a},makeDense:kn});function Gn(e,t){return new e(new ArrayBuffer(t*e.ElementCount*Object(Nn.a)(e.ElementType)))}const qn=v.a.getLogger("esri.views.3d.glTF");var $n=r(390);class Wn{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const Xn={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Yn={pbrMetallicRoughness:Xn,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Kn={ESRI_externalColorMixMode:"tint"},Jn=(e={})=>{const t={...Xn,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(on.a)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...Kn,...e.extras});return{...Yn,...e,pbrMetallicRoughness:t,extras:r}};const Qn={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const Zn=1179937895,eo=1313821514,to=5130562;class ro{constructor(e,t,r,i,n){this.context=e,this.errorContext=t,this.uri=r,this.json=i,this.glbBuffer=n,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,(e,i,n)=>(t=i||"",r=n||"","")),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==i.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==i.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==i.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,i){if(Object(cn.u)(r)){const i=Object(cn.i)(r);if("model/gltf-binary"!==i.mediaType)try{const n=JSON.parse(i.isBase64?atob(i.data):i.data);return new ro(e,t,r,n)}catch{}const n=Object(cn.j)(r);if(ro.isGLBData(n))return this.fromGLBData(e,t,r,n)}if(r.endsWith(".gltf")){const n=await e.loadJSON(r,i);return new ro(e,t,r,n)}const n=await e.loadBinary(r,i);if(ro.isGLBData(n))return this.fromGLBData(e,t,r,n);const o=await e.loadJSON(r,i);return new ro(e,t,r,o)}static isGLBData(e){const t=new Wn(e);return t.remainingBytes()>=4&&t.readUint32()===Zn}static async fromGLBData(e,t,r,i){const n=await ro.parseGLBData(t,i);return new ro(e,t,r,n.json,n.binaryData)}static async parseGLBData(e,t){const r=new Wn(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const i=r.readUint32(),n=r.readUint32(),o=r.readUint32();e.assert(i===Zn,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==n,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),i=r.readUint32();0===c?(e.assert(i===eo,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await co(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(i!==to,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],i=this.errorContext;if(null==r.uri)return i.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let n=this.bufferCache.get(e);if(!n){const o=await this.context.loadBinary(this.resolveUri(r.uri),t);n=new Uint8Array(o),this.bufferCache.set(e,n),i.assert(n.byteLength===r.byteLength,"Buffer byte lengths should match.")}return n}async getAccessor(e,t){const r=this.json.accessors[e],i=this.errorContext;i.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),i.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const n=this.json.bufferViews[r.bufferView],o=await this.getBuffer(n.buffer,t),a=ao[r.type],s=so[r.componentType],c=a*s,l=n.byteStride||c;return{raw:o.buffer,byteStride:l,byteOffset:o.byteOffset+(n.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===c,componentCount:a,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return kn(this.wrapAccessor(b.l,r));case 5123:return kn(this.wrapAccessor(b.j,r));case 5125:return kn(this.wrapAccessor(b.k,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const i=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+lo[i.componentType]),r.errorUnsupportedIf(3!==i.componentCount,"POSITION vertex attribute must have 3 components, but found "+i.componentCount.toFixed()),this.wrapAccessor(b.u,i)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const i=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+lo[i.componentType]),r.errorUnsupportedIf(3!==i.componentCount,"NORMAL vertex attribute must have 3 components, but found "+i.componentCount.toFixed()),this.wrapAccessor(b.u,i)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const i=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+lo[i.componentType]),r.errorUnsupportedIf(4!==i.componentCount,"TANGENT vertex attribute must have 4 components, but found "+i.componentCount.toFixed()),new b.C(i.raw,i.byteOffset,i.byteStride,i.byteOffset+i.byteStride*i.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const i=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==i.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+i.componentCount.toFixed()),5126===i.componentType?this.wrapAccessor(b.m,i):(r.errorUnsupportedIf(!i.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new b.q(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new b.t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new b.o(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new b.r(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new b.s(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new b.m(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void Object(on.a)(e.componentType)}}(i))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const i=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==i.componentCount&&3!==i.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+i.componentCount.toFixed()),4===i.componentCount){if(5126===i.componentType)return this.wrapAccessor(b.C,i);if(5121===i.componentType)return this.wrapAccessor(b.J,i);if(5123===i.componentType)return this.wrapAccessor(b.H,i)}else if(3===i.componentCount){if(5126===i.componentType)return this.wrapAccessor(b.u,i);if(5121===i.componentType)return this.wrapAccessor(b.B,i);if(5123===i.componentType)return this.wrapAccessor(b.z,i)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+lo[i.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const i=this.errorContext;let n=this.materialCache.get(e.material);if(!n){const o=null!=e.material?Jn(this.json.materials[e.material]):Jn(),a=o.pbrMetallicRoughness,s=this.hasVertexColors(e);let c,l,u,d,h;a.baseColorTexture&&(i.errorUnsupportedIf(0!==(a.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),c=await this.getTexture(a.baseColorTexture.index,t)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):l=await this.getTexture(o.normalTexture.index,t)),o.occlusionTexture&&r&&(0!==(o.occlusionTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):u=await this.getTexture(o.occlusionTexture.index,t)),o.emissiveTexture&&r&&(0!==(o.emissiveTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(o.emissiveTexture.index,t)),a.metallicRoughnessTexture&&r&&(0!==(a.metallicRoughnessTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):h=await this.getTexture(a.metallicRoughnessTexture.index,t));const f=null!=e.material?e.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:a.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:c,normalTexture:l,name:o.name,id:f,occlusionTexture:u,emissiveTexture:d,emissiveFactor:o.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:h,vertexColors:s,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return n}async getTexture(e,t){const r=this.errorContext,i=this.json.textures[e],n=(e=>({...Qn,...e}))(null!=i.sampler?this.json.samplers[i.sampler]:{});r.errorUnsupportedIf(null==i.source,"Source is expected to be defined for a texture.");const o=this.json.images[i.source];let a=this.textureCache.get(e);if(!a){let i;if(o.uri)i=await this.context.loadImage(this.resolveUri(o.uri),t);else{r.errorUnsupportedIf(null==o.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==o.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[o.bufferView],n=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),i=await async function(e,t){return new Promise((r,i)=>{const n=new Blob([e],{type:t}),o=URL.createObjectURL(n),a=new Image;a.addEventListener("load",()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then(()=>r(a),()=>r(a)):r(a)}),a.addEventListener("error",e=>{URL.revokeObjectURL(o),i(e)}),a.src=o})}(new Uint8Array(n.buffer,n.byteOffset+(e.byteOffset||0),e.byteLength),o.mimeType)}a={data:i,wrapS:n.wrapS,wrapT:n.wrapT,minFilter:n.minFilter,name:o.name,id:e},this.textureCache.set(e,a)}return a}getNodeTransform(e){if(void 0===e)return no;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),i=this.json.nodes[e];i.matrix?t=Object(a.f)(Object(l.b)(),r,i.matrix):i.translation||i.rotation||i.scale?(t=Object(l.c)(r),i.translation&&Object(a.i)(t,t,i.translation),i.rotation&&(oo[3]=Object(be.b)(oo,i.rotation),Object(a.g)(t,t,oo[3],oo)),i.scale&&Object(a.h)(t,t,i.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Object(cn.y)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=$n.a.parse(this.json.asset.version,"glTF");io.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(e=>{this.nodeParentMap.set(e,t)})})}}const io=new $n.a(2,0,"glTF"),no=Object(a.e)(Object(l.b)(),Math.PI/2),oo=Object(D.a)(),ao={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},so={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function co(e){return new Promise((t,r)=>{const i=new Blob([e]),n=new FileReader;n.onload=()=>{const e=n.result;t(JSON.parse(e))},n.onerror=e=>{r(e)},n.readAsText(i)})}const lo={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let uo=0;async function ho(e,t,r={},n=!0){const o=await ro.load(e,bo,t,r),a="gltf_"+uo++,s={lods:[],materials:new Map,textures:new Map,meta:fo(o)},c=!(!o.json.asset.extras||"symbolResource"!==o.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,i=r.scenes[r.scene||0].nodes,n=i.length>1;for(const e of i){const t=r.nodes[e],i=[o(e,0)];if(mo(t)&&!n){const e=t.extensions.MSFT_lod.ids;i.push(...e.map((e,t)=>o(e,t+1)))}await Promise.all(i)}async function o(i,n){const a=r.nodes[i],s=e.getNodeTransform(i);if(bo.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)await t(r,s,n,e.name)}for(const e of a.children||[])await o(e,n)}}(o,async(e,t,c,u)=>{const d=void 0!==e.mode?e.mode:4,h=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(d);if(Object(i.g)(h))return void bo.warnUnsupported("Unsupported primitive mode ("+xo[d]+"). Skipping primitive.");if(!o.hasPositions(e))return void bo.warn("Skipping primitive without POSITION vertex attribute.");const f=await o.getMaterial(e,r,n),m={transform:Object(l.c)(t),attributes:{position:await o.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await o.getIndexData(e,r),primitiveType:h,material:po(s,f,a)};o.hasNormals(e)&&(m.attributes.normal=await o.getNormalData(e,r)),o.hasTangents(e)&&(m.attributes.tangent=await o.getTangentData(e,r)),o.hasTextureCoordinates(e)&&(m.attributes.texCoord0=await o.getTextureCoordinates(e,r)),o.hasVertexColors(e)&&(m.attributes.color=await o.getVertexColors(e,r));let p=null;Object(i.h)(s.meta)&&Object(i.h)(s.meta.ESRI_lod)&&"screenSpaceRadius"===s.meta.ESRI_lod.metric&&(p=s.meta.ESRI_lod.thresholds[c]),s.lods[c]=s.lods[c]||{parts:[],name:u,lodThreshold:p},s.lods[c].parts.push(m)}),{model:s,meta:{isEsriSymbolResource:c,uri:o.uri},customMeta:{}}}function fo(e){const t=e.json;let r=null;return t.nodes.forEach(e=>{const t=e.extras;Object(i.h)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)}),r}function mo(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function po(e,t,r){const i=t=>{const i=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(i)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:go(t.wrapS),t:go(t.wrapT)},mipmap:vo.some(e=>e===t.minFilter),noUnpackFlip:!0});e.textures.set(i,r)}return i},n=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(n)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?i(t.colorTexture):void 0,textureNormal:t.normalTexture?i(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?i(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?i(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?i(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(n,r)}return n}function go(e){if(33071===e||33648===e||10497===e)return e;bo.error("Unexpected TextureSampler WrapMode: "+e)}const bo=new class{error(e){throw new sn.a("gltf-loader-error",e)}errorUnsupported(e){throw new sn.a("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){qn.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},vo=[9987,9985],xo=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];const _o=v.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function yo(e,t){const r=await async function(e,t){const r=Object(i.h)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await Object(Dn.c)(t.request(e,"json",r));if(!0===i.ok)return i.value;Object(ln.s)(i.error),Oo(i.error.details.url)}(e,r,t);const n=await Object(Dn.c)(Object(hn.default)(e,Object(i.n)(t)));if(!0===n.ok)return n.value.data;Object(ln.s)(n.error),Oo(n.error)}(e,t);return{resource:r,textures:await Mo(r.textureDefinitions,t)}}function Oo(e){throw new sn.a("","Request for object resource failed: "+e)}function To(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(_o.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(_o.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(_o.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(_o.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else _o.warn("Indexed geometries must specify faces"),i=!1;break}default:_o.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(_o.warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const e in n)n[e].values||(_o.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function wo(e){const t=Object(T.c)();return e.forEach(e=>{const r=e.boundingInfo;Object(i.h)(r)&&(Object(T.g)(t,r.getBBMin()),Object(T.g)(t,r.getBBMax()))}),t}async function Mo(e,t){const r=[];for(const n in e){const o=e[n],a=o.images[0].data;if(!a){_o.warn("Externally referenced texture data is not yet supported");continue}const s=o.encoding+";base64,"+a,c="/textureDefinitions/"+n,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},u=Object(i.h)(t)&&t.disableTextures?Promise.resolve(null):fn(s,t);r.push(u.then(e=>({refId:c,image:e,params:l,alphaChannelUsage:"rgba"===o.channels?o.alphaChannelUsage||"transparency":"none"})))}const n=await Promise.all(r),o={};for(const e of n)o[e.refId]=e;return o}function So(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function Ao(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const jo=new $n.a(1,2,"wosr");function Co(e,t,r){if(e.count!==t.count)return void x.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],h=r[8],f=e.typedBuffer,m=e.typedBufferStride,p=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*m,r=e*g,i=p[r],b=p[r+1],v=p[r+2],x=p[r+3];f[t]=n*i+s*b+u*v,f[t+1]=o*i+c*b+d*v,f[t+2]=a*i+l*b+h*v,f[t+3]=x}}function Po(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*o,i=e*s;n[t]=r*a[i],n[t+1]=r*a[i+1],n[t+2]=r*a[i+2],n[t+3]=r*a[i+3]}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void x.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],h=r[8],f=r[9],m=r[10],p=r[11],g=r[12],b=r[13],v=r[14],_=r[15],y=e.typedBuffer,O=e.typedBufferStride,T=t.typedBuffer,w=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*O,r=e*w,i=T[r],x=T[r+1],M=T[r+2],S=T[r+3];y[t]=n*i+c*x+h*M+g*S,y[t+1]=o*i+l*x+f*M+b*S,y[t+2]=a*i+u*x+m*M+v*S,y[t+3]=s*i+d*x+p*M+_*S}},transformMat3:Co,scale:Po,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*o,i=e*s;n[t]=a[i]>>r,n[t+1]=a[i+1]>>r,n[t+2]=a[i+2]>>r,n[t+3]=a[i+3]>>r}}});async function Eo(e,t){const r=Fo(Object(s.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):yo(r.url,t)),o=function(e,t){const r=[],o=[],a=[],s=[],c=e.resource,l=$n.a.parse(c.version||"1.0","wosr");jo.validate(l);const u=c.model.name,d=c.model.geometries,h=c.materialDefinitions,f=e.textures;let m=0;const p=new Map;for(let e=0;e<d.length;e++){const c=d[e];if(!To(c))continue;const l=Ao(c),u=c.params.vertexAttributes,g=[];for(const e in u){const t=u[e],r=t.values;g.push([e,{data:r,size:t.valuesPerElement,exclusive:!0}])}const b=[];if("PerAttributeArray"!==c.params.topology){const e=c.params.faces;for(const t in e)b.push([t,new Uint32Array(e[t].values)])}const v=f&&f[l.texture];if(v&&!p.has(l.texture)){const{image:e,params:t}=v,r=new Rn(e,t);s.push(r),p.set(l.texture,r)}const x=p.get(l.texture),_=x?x.id:void 0;let y=a[l.material]?a[l.material][l.texture]:null;if(!y){const e=h[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=v&&v.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s={ambient:Object(n.f)(e.diffuse),diffuse:Object(n.f)(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:v?So(v.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:_,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};Object(i.h)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),y=new Wi(s),a[l.material]||(a[l.material]={}),a[l.material][l.texture]=y}o.push(y);const O=new fe(g,b);m+=b.position?b.position.length:0,r.push(O)}return{name:u,stageResources:{textures:s,materials:o,geometries:r},pivotOffset:c.model.pivotOffset,boundingBox:wo(r),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[o],referenceBoundingBox:o.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const c=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):ho(new In(t.streamDataRequester),r.url,t,t.usePBR)),u=Object(i.f)(c.model.meta,"ESRI_proxyEllipsoid");c.meta.isEsriSymbolResource&&Object(i.h)(u)&&-1!==c.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const s=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const c of s.parts){const s=c.attributes.normal;if(Object(i.g)(s))return;const u=c.attributes.position,d=u.count,h=Object(n.e)(),f=Object(n.e)(),m=Object(n.e)(),p=Gn(b.J,d),g=Gn(b.u,d),v=Object(a.a)(Object(l.b)(),c.transform);for(let i=0;i<d;i++){u.getVec(i,f),s.getVec(i,h),Object(o.j)(f,f,c.transform),Object(o.g)(m,f,t.center),Object(o.a)(m,m,t.radius);const n=m[2],a=Object(o.m)(m),l=Math.min(.45+.55*a*a,1);Object(o.a)(m,m,t.radius),Object(o.j)(m,m,v),Object(o.o)(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(o.f)(m,m,h,n>-1?.2:Math.min(-4*n-3.8,1)),g.setVec(i,m),p.set(i,0,255*l),p.set(i,1,255*l),p.set(i,2,255*l),p.set(i,3,255)}c.attributes.normal=g,c.attributes.color=p}}}(c,u);const d=c.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:c.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},h={...t.materialParamsMixin,treeRendering:c.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=Ro(c,d,h,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=Ro(c,d,h,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}const f=Ro(c,d,h);return{lods:f,referenceBoundingBox:f[0].boundingBox,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}function Fo(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Ro(e,t,r,n){const o=e.model,a=Object(c.a)(),s=new Array,l=new Map,u=new Map;return o.lods.forEach((e,c)=>{if(void 0!==n&&c!==n)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(i.h)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(T.c)()};s.push(d),e.parts.forEach(e=>{const n=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=o.materials.get(e.material),c=Object(i.h)(e.attributes.texCoord0),h=Object(i.h)(e.attributes.normal);if(!l.has(n)){if(c){if(Object(i.h)(s.textureColor)&&!u.has(s.textureColor)){const e=o.textures.get(s.textureColor),t={...e.parameters,preMultiplyAlpha:!0};u.set(s.textureColor,new Rn(e.data,t))}if(Object(i.h)(s.textureNormal)&&!u.has(s.textureNormal)){const e=o.textures.get(s.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};u.set(s.textureNormal,new Rn(e.data,t))}if(Object(i.h)(s.textureOcclusion)&&!u.has(s.textureOcclusion)){const e=o.textures.get(s.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};u.set(s.textureOcclusion,new Rn(e.data,t))}if(Object(i.h)(s.textureEmissive)&&!u.has(s.textureEmissive)){const e=o.textures.get(s.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};u.set(s.textureEmissive,new Rn(e.data,t))}if(Object(i.h)(s.textureMetallicRoughness)&&!u.has(s.textureMetallicRoughness)){const e=o.textures.get(s.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};u.set(s.textureMetallicRoughness,new Rn(e.data,t))}}const a=s.color[0]**(1/2.1),d=s.color[1]**(1/2.1),f=s.color[2]**(1/2.1),m=s.emissiveFactor[0]**(1/2.1),p=s.emissiveFactor[1]**(1/2.1),g=s.emissiveFactor[2]**(1/2.1);l.set(n,new Wi({...t,transparent:"BLEND"===s.alphaMode,textureAlphaMode:Do(s.alphaMode),textureAlphaCutoff:s.alphaCutoff,diffuse:[a,d,f],ambient:[a,d,f],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:h?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(i.h)(s.textureColor)&&c?u.get(s.textureColor).id:void 0,colorMixMode:s.colorMixMode,normalTextureId:Object(i.h)(s.textureNormal)&&c?u.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:Object(i.h)(s.textureOcclusion)&&c?u.get(s.textureOcclusion).id:void 0,emissiveTextureId:Object(i.h)(s.textureEmissive)&&c?u.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(i.h)(s.textureMetallicRoughness)&&c?u.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[m,p,g],mrrFactors:[s.metallicFactor,s.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const m=function(e,t){switch(t){case 4:return function(e){return"number"==typeof e?ce(e):Object(an.i)(e)||Object(an.k)(e)?new Uint32Array(e):e}(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,i=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(i[e++]=t,i[e++]=t+1,i[e++]=t+2):(i[e++]=t+1,i[e++]=t,i[e++]=t+2)}else{let t=0;for(let n=0;n<r;n+=1)if(n%2==0){const r=e[n],o=e[n+1],a=e[n+2];i[t++]=r,i[t++]=o,i[t++]=a}else{const r=e[n+1],o=e[n],a=e[n+2];i[t++]=r,i[t++]=o,i[t++]=a}}return i}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,i=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)i[e++]=0,i[e++]=t+1,i[e++]=t+2;return i}{const t=e[0];let n=e[1],o=0;for(let a=0;a<r;++a){const r=e[a+2];i[o++]=t,i[o++]=n,i[o++]=r,n=r}return i}}(e)}}(e.indices||e.attributes.position.count,e.primitiveType),p=e.attributes.position.count,g=Gn(b.u,p);_(g,e.attributes.position,e.transform);const v=[["position",{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]],x=[["position",m]];if(Object(i.h)(e.attributes.normal)){const t=Gn(b.u,p);f(a,e.transform),y(t,e.attributes.normal,a),v.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["normal",m])}if(Object(i.h)(e.attributes.tangent)){const t=Gn(b.C,p);f(a,e.transform),Co(t,e.attributes.tangent,a),v.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["tangent",m])}if(Object(i.h)(e.attributes.texCoord0)){const t=Gn(b.m,p);Bn(t,e.attributes.texCoord0),v.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["uv0",m])}if(Object(i.h)(e.attributes.color)){const t=Gn(b.J,p);if(4===e.attributes.color.elementCount)e.attributes.color instanceof b.C?Po(t,e.attributes.color,255):e.attributes.color instanceof b.J?Vn(t,e.attributes.color):e.attributes.color instanceof b.H&&Po(t,e.attributes.color,1/256);else{Hn(t,255,255,255,255);const r=new b.B(t.buffer,0,4);e.attributes.color instanceof b.u?O(r,e.attributes.color,255):e.attributes.color instanceof b.B?Un(r,e.attributes.color):e.attributes.color instanceof b.z&&O(r,e.attributes.color,1/256)}v.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["color",m])}const w=new fe(v,x);d.stageResources.geometries.push(w),d.stageResources.materials.push(l.get(n)),c&&(Object(i.h)(s.textureColor)&&d.stageResources.textures.push(u.get(s.textureColor)),Object(i.h)(s.textureNormal)&&d.stageResources.textures.push(u.get(s.textureNormal)),Object(i.h)(s.textureOcclusion)&&d.stageResources.textures.push(u.get(s.textureOcclusion)),Object(i.h)(s.textureEmissive)&&d.stageResources.textures.push(u.get(s.textureEmissive)),Object(i.h)(s.textureMetallicRoughness)&&d.stageResources.textures.push(u.get(s.textureMetallicRoughness))),d.numberOfVertices+=p;const M=w.boundingInfo;Object(i.h)(M)&&(Object(T.g)(d.boundingBox,M.getBBMin()),Object(T.g)(d.boundingBox,M.getBBMax()))})}),s}function Do(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}},78:function(e,t,r){"use strict";function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,"a",(function(){return i})),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(i||(i={}))}});