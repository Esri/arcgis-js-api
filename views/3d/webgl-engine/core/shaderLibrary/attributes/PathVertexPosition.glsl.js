/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","./PositionAttribute.glsl"],(function(e,o,i){"use strict";e.PathVertexPosition=function(e,t){e.attributes.add("featureValue","vec4"),e.vertex.code.add(o.glsl`
  bool isCapVertex() {
    return featureValue.w == 1.0;
  }
  `),e.vertex.uniforms.add("size","vec3"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.code.add(o.glsl`
    vec2 getSize() {
      return size.xy*clamp(vvSizeOffset + featureValue.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
    }
    `)):e.vertex.code.add(o.glsl`
    vec2 getSize(){
      return size.xy;
    }
    `),t.vvOpacity?(e.vertex.defines.addInt("VV_OPACITY_N",8),e.vertex.code.add(o.glsl`
    uniform float vvOpacityValues[VV_OPACITY_N];
    uniform float vvOpacityOpacities[VV_OPACITY_N];

    vec4 applyOpacity(vec4 color) {
      float value = featureValue.z;
      if (value <= vvOpacityValues[0]) {
        return vec4( color.xyz, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < VV_OPACITY_N; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.xyz, vvOpacityOpacities[VV_OPACITY_N - 1]);
    }
    `)):e.vertex.code.add(o.glsl`
    vec4 applyOpacity(vec4 color){
      return color;
    }
    `),t.vvColor?(e.vertex.defines.addInt("VV_COLOR_N",8),e.vertex.code.add(o.glsl`
    uniform float vvColorValues[VV_COLOR_N];
    uniform vec4 vvColorColors[VV_COLOR_N];

    vec4 getColor() {
      float value = featureValue.y;
      if (value <= vvColorValues[0]) {
        return applyOpacity(vvColorColors[0]);
      }

      for (int i = 1; i < VV_COLOR_N; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
        }
      }

      return applyOpacity(vvColorColors[VV_COLOR_N - 1]);
    }
    `)):e.vertex.code.add(o.glsl`
    vec4 getColor(){
      return applyOpacity(vec4(1, 1, 1, 1));
    }
    `),e.include(i.PositionAttribute),e.attributes.add("profileRight","vec4"),e.attributes.add("profileUp","vec4"),e.attributes.add("profileVertexAndNormal","vec4"),e.vertex.code.add(o.glsl`
  vec3 calculateVPos() {
    vec2 size = getSize();
    vec3 origin = position;
    vec3 right = profileRight.xyz;
    vec3 up = profileUp.xyz;
    vec3 forward = cross(up, right);
    vec2 profileVertex = profileVertexAndNormal.xy * size;
    vec2 profileNormal = profileVertexAndNormal.zw;
    float positionOffsetAlongProfilePlaneNormal = 0.0;
    float normalOffsetAlongProfilePlaneNormal = 0.0;
    `),e.vertex.code.add(o.glsl`
    if(!isCapVertex()) {
      vec2 rotationRight = vec2(profileRight.w, profileUp.w);
      float maxDistance = length(rotationRight);
  `),e.vertex.code.add(o.glsl`
      rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);

      // decompose vertex into rotationRight and rotationUp
      // limit rotation right component to maxDistance
      // and reassemble profile vertex from rotationRight and rotationUp
      float rx = dot(profileVertex, rotationRight);
      if (abs(rx) > maxDistance) {
        // NB: we do the tangent by x=-y and y=x
        vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
        float ry = dot(profileVertex, rotationUp);
        profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
      }
    }else{
       positionOffsetAlongProfilePlaneNormal = profileRight.w * size[0];
       normalOffsetAlongProfilePlaneNormal = profileUp.w;
    }

    vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;

    return origin + offset; // localPosition
  }
  `),e.vertex.code.add(o.glsl`
  vec3 localNormal() {
    vec3 right = profileRight.xyz;
    vec3 up = profileUp.xyz;
    vec3 forward = cross(up, right);
    vec2 profileNormal = profileVertexAndNormal.zw;

    vec3 normal = right * profileNormal.x + up * profileNormal.y;

    if(isCapVertex()) {
      normal += forward * profileUp.w;
    }

    return normal;
  }
  `)},e.setVVUniforms=function(e,o){o.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",o.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",o.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",o.vvSizeOffset),e.setUniform3fv("vvSizeFactor",o.vvSizeFactor)),o.vvColorEnabled&&(e.setUniform1fv("vvColorValues",o.vvColorValues),e.setUniform4fv("vvColorColors",o.vvColorColors)),o.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",o.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",o.vvOpacityOpacities))},Object.defineProperty(e,"__esModule",{value:!0})}));
