/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/interfaces","./EdgeUtil.glsl","./UnpackAttributes.glsl"],(function(e,t,u,l){"use strict";e.LineAmplitude=function(e,d){const i=e.vertex;switch(e.include(l.UnpackAttributes,d),u.EdgeUtil.usesSketchLogic(d)&&i.uniforms.add("uStrokesAmplitude","float"),d.mode){case 0:i.code.add(t.glsl`
        float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
          return 0.0;
        }
      `);break;case 1:i.code.add(t.glsl`
        float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
          return uStrokesAmplitude;
        }
      `);break;case 2:i.code.add(t.glsl`
        float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
          float type = unpackedAttributes.type;

          if (type <= 0.0) {
            return uStrokesAmplitude;
          }
          else {
            return 0.0;
          }
        }
      `)}},Object.defineProperty(e,"__esModule",{value:!0})}));
