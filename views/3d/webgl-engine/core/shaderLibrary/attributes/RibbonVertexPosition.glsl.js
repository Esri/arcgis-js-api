/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,t){"use strict";e.RibbonVertexPosition=function(e,i){e.vertex.uniforms.add("intrinsicWidth","float"),i.vvSize?(e.attributes.add("sizeFeatureAttribute","float"),e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.code.add(t.glsl`
    float getSize() {
      return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
    }
    `)):(e.attributes.add("size","float"),e.vertex.code.add(t.glsl`
    float getSize(){
      return intrinsicWidth * size;
    }
    `)),i.vvOpacity?(e.attributes.add("opacityFeatureAttribute","float"),e.vertex.defines.addInt("VV_OPACITY_N",8),e.vertex.code.add(t.glsl`
    uniform float vvOpacityValues[VV_OPACITY_N];
    uniform float vvOpacityOpacities[VV_OPACITY_N];

    float interpolateOpacity( float value ){
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < VV_OPACITY_N; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[VV_OPACITY_N - 1];
    }

    vec4 applyOpacity( vec4 color ){
      return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):e.vertex.code.add(t.glsl`
    vec4 applyOpacity( vec4 color ){
      return color;
    }
    `),i.vvColor?(e.attributes.add("colorFeatureAttribute","float"),e.vertex.defines.addInt("VV_COLOR_N",8),e.vertex.code.add(t.glsl`
    uniform float vvColorValues[VV_COLOR_N];
    uniform vec4 vvColorColors[VV_COLOR_N];

    vec4 interpolateColor( float value ) {
      if (value <= vvColorValues[0]) {
        return vvColorColors[0];
      }

      for (int i = 1; i < VV_COLOR_N; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return mix(vvColorColors[i-1], vvColorColors[i], f);
        }
      }

      return vvColorColors[VV_COLOR_N - 1];
    }

    vec4 getColor(){
      return applyOpacity(interpolateColor(colorFeatureAttribute));
    }
    `)):(e.attributes.add("color","vec4"),e.vertex.code.add(t.glsl`
    vec4 getColor(){
      return applyOpacity(color);
    }
    `))},Object.defineProperty(e,"__esModule",{value:!0})}));
