/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/interfaces","../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl","./EdgeUtil.glsl","./UnpackAttributes.glsl"],(function(e,t,a,l,r){"use strict";e.LineOffset=function(e,u){const s=e.vertex;e.include(r.UnpackAttributes,u);const c=e.fragment;switch(l.EdgeUtil.usesSketchLogic(u)&&(s.uniforms.add("uStrokesTextureScale","vec2"),s.uniforms.add("uStrokesLog2Resolution","float"),s.uniforms.add("uStrokeVariants","float"),e.varyings.add("vStrokeUV","vec2"),c.uniforms.add("uStrokesTexture","sampler2D"),c.uniforms.add("uStrokesNormalizationScale","float"),s.code.add(t.glsl`
      void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
        vec2 sidenessNorm = unpackedAttributes.sidenessNorm;

        float lineIndex = clamp(ceil(log2(lineLength)), 0.0, uStrokesLog2Resolution);

        vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * uStrokeVariants + variantStroke + 0.5) * uStrokesTextureScale;
        vStrokeUV.x += variantOffset;
      }
    `),e.fragment.include(a.RgbaFloatEncoding),c.code.add(t.glsl`
      float calculateLineOffsetSketch() {
        float offsetNorm = rgba2float(texture2D(uStrokesTexture, vStrokeUV));
        return (offsetNorm - 0.5) * uStrokesNormalizationScale;
      }

      float calculateLinePressureSketch() {
        return rgba2float(texture2D(uStrokesTexture, vStrokeUV + vec2(0.0, 0.5)));
      }
    `)),u.mode){case 0:s.code.add(t.glsl`
        void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}
      `),c.code.add(t.glsl`
        float calculateLineOffset() {
          return 0.0;
        }

        float calculateLinePressure() {
          return 1.0;
        }
      `);break;case 1:s.code.add(t.glsl`
        void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
        {
          calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
        }
      `),c.code.add(t.glsl`
        float calculateLineOffset() {
          return calculateLineOffsetSketch();
        }

        float calculateLinePressure() {
          return calculateLinePressureSketch();
        }
      `);break;case 2:e.varyings.add("vType","float"),s.code.add(t.glsl`
        void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
        {
          vType = unpackedAttributes.type;

          if (unpackedAttributes.type <= 0.0) {
            calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
          }
        }
      `),c.code.add(t.glsl`
        float calculateLineOffset() {
          if (vType <= 0.0) {
            return calculateLineOffsetSketch();
          }
          else {
            return 0.0;
          }
        }

        float calculateLinePressure() {
          if (vType <= 0.0) {
            return calculateLinePressureSketch();
          }
          else {
            return 1.0;
          }
        }
      `)}},Object.defineProperty(e,"__esModule",{value:!0})}));
