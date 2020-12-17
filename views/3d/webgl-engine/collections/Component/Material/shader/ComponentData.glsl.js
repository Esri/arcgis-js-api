/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/shaderModules/interfaces","./DecodeSymbolColor.glsl"],(function(o,e,r){"use strict";o.ComponentData=function(o,l){1===l.componentData&&(o.vertex.uniforms.add("uComponentColorTex","sampler2D"),o.vertex.uniforms.add("uComponentColorTexInvDim","vec2"),o.attributes.add("componentIndex","float"),o.varyings.add("vExternalColorMixMode","mediump float"),o.varyings.add("vExternalColor","vec4"),o.include(r.DecodeSymbolColor),o.vertex.code.add(e.glsl`
      vec4 _readComponentColor() {
        float normalizedIndex = (componentIndex + 0.5) * uComponentColorTexInvDim.x;
        vec2 indexCoord = vec2(
          mod(normalizedIndex, 1.0),
          (floor(normalizedIndex) + 0.5) * uComponentColorTexInvDim.y
        );
        return texture2D(uComponentColorTex, indexCoord);
       }

      vec4 forwardExternalColor(out bool castShadows) {
        vec4 componentColor = _readComponentColor() * 255.0;

        float shadowFlag = mod(componentColor.b * 255.0, 2.0);
        componentColor.b -= shadowFlag;
        castShadows = shadowFlag >= 1.0;

        int decodedColorMixMode;
        vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
        vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

        return vExternalColor;
      }
    `),o.fragment.code.add(e.glsl`
      void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
        externalColor = vExternalColor;
        externalColorMixMode = int(vExternalColorMixMode);
      }
    `)),0===l.componentData&&(o.vertex.uniforms.add("uExternalColor","vec4"),o.fragment.uniforms.add("uExternalColorMixMode","int"),o.varyings.add("vExternalColor","vec4"),o.vertex.code.add(e.glsl`
      vec4 forwardExternalColor(out bool castShadows) {
        vExternalColor = uExternalColor;
        castShadows = true;
        return uExternalColor;
      }
    `),o.fragment.code.add(e.glsl`
      void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
        externalColor = vExternalColor;
        externalColorMixMode = uExternalColorMixMode;
      }
    `))},Object.defineProperty(o,"__esModule",{value:!0})}));
