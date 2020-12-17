/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/interfaces","../../../core/shaderLibrary/util/DoublePrecision.glsl"],(function(o,e,r){"use strict";function t(o,t){const n=o.vertex;n.uniforms.add("uDistanceFalloffFactor","float"),n.code.add(e.glsl`
    float distanceBasedPerspectiveFactor(float distance) {
      return clamp(sqrt(uDistanceFalloffFactor / distance), 0.0, 1.0);
    }
  `),n.uniforms.add("uComponentDataTex","sampler2D"),n.uniforms.add("uComponentDataTexInvDim","vec2"),o.attributes.add("componentIndex","float"),n.defines.addFloat("COMPONENT_COLOR_FIELD_OFFSET",0),n.defines.addFloat("COMPONENT_OTHER_FIELDS_OFFSET",1),n.defines.addFloat("COMPONENT_FIELD_COUNT",2),n.defines.addFloat("LINE_WIDTH_FRACTION_FACTOR",8),n.defines.addFloat("EXTENSION_LENGTH_OFFSET",128),n.defines.addFloat("COMPONENT_TEX_WIDTH",4096),n.code.add(e.glsl`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = COMPONENT_FIELD_COUNT * componentIndex + fieldOffset;

      float rowIndex = floor(fieldIndex / COMPONENT_TEX_WIDTH);
      float colIndex = mod(fieldIndex, COMPONENT_TEX_WIDTH);

      vec2 linearIndex = vec2(
        (colIndex + 0.5) / COMPONENT_TEX_WIDTH,
        (rowIndex + 0.5) * uComponentDataTexInvDim.y
      );

      return linearIndex;
    }

    struct ComponentData {
      vec4 color;
      float lineWidth;
      float extensionLength;
      float type;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, COMPONENT_COLOR_FIELD_OFFSET);
      vec2 otherIndex = _componentTextureCoords(componentIndex, COMPONENT_OTHER_FIELDS_OFFSET);

      vec4 colorValue = texture2D(uComponentDataTex, colorIndex);
      vec4 otherValue = texture2D(uComponentDataTex, otherIndex);

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        otherValue.x * (255.0 / LINE_WIDTH_FRACTION_FACTOR),
        otherValue.y * 255.0 - EXTENSION_LENGTH_OFFSET,
        -(otherValue.z * 255.0) + 0.5 // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
      );
    }
  `),t.legacy?n.code.add(e.glsl`
      vec3 _modelToWorldNormal(vec3 normal) {
        return (uModel * vec4(normal, 0.0)).xyz;
      }

      vec3 _modelToViewNormal(vec3 normal) {
        return (uView * uModel * vec4(normal, 0.0)).xyz;
      }
    `):(n.uniforms.add("uTransformNormal_GlobalFromModel ","mat3"),n.code.add(e.glsl`
      vec3 _modelToWorldNormal(vec3 normal) {
        return uTransformNormal_GlobalFromModel * normal;
      }
    `)),t.silhouette?(o.attributes.add("normalA","vec3"),o.attributes.add("normalB","vec3"),n.code.add(e.glsl`
      vec3 worldNormal() {
        return _modelToWorldNormal(normalize(normalA + normalB));
      }
    `)):(o.attributes.add("normal","vec3"),n.code.add(e.glsl`
      vec3 worldNormal() {
        return _modelToWorldNormal(normal);
      }
    `)),t.legacy?n.code.add(e.glsl`
      vec3 worldFromModelPosition(vec3 position) {
        return (uModel * vec4(position, 1.0)).xyz;
      }

      vec3 viewFromModelPosition(vec3 position) {
        return (uView * vec4(worldFromModelPosition(position), 1.0)).xyz;
      }

      vec4 projFromViewPosition(vec3 position) {
        return uProj * vec4(position, 1.0);
      }
    `):(o.vertex.include(r.DoublePrecision,t),n.code.add(e.glsl`
      vec3 worldFromModelPosition(vec3 position) {
        vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * position;

        vec3 transform_CameraRelativeFromModel = dpAdd(
          uTransform_WorldFromModel_TL,
          uTransform_WorldFromModel_TH,
          -uTransform_WorldFromView_TL,
          -uTransform_WorldFromView_TH
        );

        return transform_CameraRelativeFromModel + rotatedModelPosition;
      }

      vec3 viewFromModelPosition(vec3 position) {
        return uTransform_ViewFromCameraRelative_RS * worldFromModelPosition(position);
      }

      vec4 projFromViewPosition(vec3 position) {
        return uTransform_ProjFromView * vec4(position, 1.0);
      }
    `)),n.code.add(e.glsl`
    float calculateExtensionLength(float extensionLength, float lineLength) {
      return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
    }
  `)}!function(o){o.usesSketchLogic=function(o){return 1===o.mode||2===o.mode},o.usesSolidLogic=function(o){return 0===o.mode||2===o.mode}}(t||(t={})),o.EdgeUtil=t,Object.defineProperty(o,"__esModule",{value:!0})}));
