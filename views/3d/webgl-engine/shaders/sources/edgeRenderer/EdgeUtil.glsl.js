/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../collections/Component/Material/shader/ComponentData.glsl","../../../core/shaderLibrary/util/DoublePrecision.glsl","../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl","../../../core/shaderLibrary/util/WebGL2Utils","../../../core/shaderModules/Float3DrawUniform","../../../core/shaderModules/Float3PassUniform","../../../core/shaderModules/FloatPassUniform","../../../core/shaderModules/interfaces","../../../core/shaderModules/Matrix3DrawUniform","../../../core/shaderModules/Matrix3PassUniform","../../../core/shaderModules/Matrix4PassUniform","../../../core/shaderModules/Texture2DDrawUniform","../../../core/shaderModules/TextureSizeUniformType","../../../lib/VertexAttribute"],(function(e,o,t,r,a,l,n,d,s,i,c,m,f,u,v){"use strict";function x(e,x){const F=e.vertex;F.include(r.RgbaFloatEncoding),F.uniforms.add(new d.FloatPassUniform("distanceFalloffFactor",(e=>e.distanceFalloffFactor))),F.code.add(s.glsl`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`),F.uniforms.add(f.createTexture2DDrawSizeUniforms("componentDataTex",(e=>e.componentDataTexture),x.hasWebGL2Context?u.TextureSizeUniformType.None:u.TextureSizeUniformType.InvSize)),e.attributes.add(v.VertexAttribute.COMPONENTINDEX,"float"),F.constants.add("componentColorFieldOffset","float",0),F.constants.add("componentOtherFieldOffset","float",1),F.constants.add("componentVerticalOffsetFieldOffset","float",2),F.constants.add("componentFieldCount","float",3),F.constants.add("lineWidthFractionFactor","float",8),F.constants.add("extensionLengthOffset","float",128),F.constants.add("verticalOffsetScale","float",2*o.MAX_ELEVATION_OFFSET),F.code.add(s.glsl`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = componentFieldCount * componentIndex + fieldOffset;

      vec2 textureSizeInverse = ${a.textureSize(x,"componentDataTex",!0)};

      float colIndex = mod(fieldIndex, 1.0 / textureSizeInverse.x);
      float rowIndex = floor(fieldIndex * textureSizeInverse.x);

      vec2 textureCoordinates = vec2(colIndex, rowIndex) + 0.5;

      return textureCoordinates;
    }

    struct ComponentData {
      vec4 color;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
      vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
      vec2 verticalOffsetIndex = _componentTextureCoords(componentIndex, componentVerticalOffsetFieldOffset);

      vec4 colorValue = ${a.texelFetch(x,"componentDataTex","colorIndex")};
      vec4 otherValue = ${a.texelFetch(x,"componentDataTex","otherIndex")};
      float verticalOffset = (rgba2float(${a.texelFetch(x,"componentDataTex","verticalOffsetIndex")}) - 0.5) * verticalOffsetScale;

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        otherValue.x * (255.0 / lineWidthFractionFactor),
        otherValue.y * 255.0 - extensionLengthOffset,
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),x.legacy?F.code.add(s.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(F.uniforms.add(new i.Matrix3DrawUniform("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel))),F.code.add(s.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),x.silhouette?(e.attributes.add(v.VertexAttribute.NORMALA,"vec3"),e.attributes.add(v.VertexAttribute.NORMALB,"vec3"),F.code.add(s.glsl`vec3 worldNormal() {
return _modelToWorldNormal(normalize(normalA + normalB));
}`)):(e.attributes.add(v.VertexAttribute.NORMAL,"vec3"),F.code.add(s.glsl`vec3 worldNormal() {
return _modelToWorldNormal(normal);
}`)),x.legacy?F.code.add(s.glsl`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(F.include(t.DoublePrecision,x),F.include(t.DoublePrecision,x),F.uniforms.add([new c.Matrix3PassUniform("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new i.Matrix3DrawUniform("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.Float3DrawUniform("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL)),new l.Float3DrawUniform("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new n.Float3PassUniform("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new n.Float3PassUniform("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH))]),F.code.add(s.glsl`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${x.spherical?s.glsl`normalize(transformWorldFromModelTL + rotatedModelPosition);`:s.glsl`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),F.uniforms.add(new m.Matrix4PassUniform("transformProjFromView",((e,o)=>o.camera.projectionMatrix))),F.code.add(s.glsl`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),F.code.add(s.glsl`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function F(o){return o.mode===e.EdgeUtilMode.SKETCH||o.mode===e.EdgeUtilMode.MIXED}function M(o){return o.mode===e.EdgeUtilMode.SOLID||o.mode===e.EdgeUtilMode.MIXED}var w;e.EdgeUtilMode=void 0,(w=e.EdgeUtilMode||(e.EdgeUtilMode={}))[w.SOLID=0]="SOLID",w[w.SKETCH=1]="SKETCH",w[w.MIXED=2]="MIXED",w[w.COUNT=3]="COUNT",e.EdgeUtil=x,e.usesSketchLogic=F,e.usesSolidLogic=M,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
