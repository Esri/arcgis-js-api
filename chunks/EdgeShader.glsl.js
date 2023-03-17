/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./vec2","./vec2f64","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Uniform","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/shaders/sources/edgeRenderer/AdjustProjectedPosition.glsl","../views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardByCoverage.glsl","../views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardNonSilhouetteEdges.glsl","../views/3d/webgl-engine/shaders/sources/edgeRenderer/EdgeUtil.glsl","../views/3d/webgl-engine/shaders/sources/edgeRenderer/LineAmplitude.glsl","../views/3d/webgl-engine/shaders/sources/edgeRenderer/LineOffset.glsl","../views/3d/webgl-engine/shaders/sources/edgeRenderer/UnpackAttributes.glsl"],(function(e,i,o,s,n,t,d,l,a,r,c,P,u,p,g,v,f,x,w,h){"use strict";function m(e){const i=new c.ShaderBuilder,{vertex:s,fragment:P}=i;return e.legacy&&s.uniforms.add([new L("model"),new L("localView")]),i.include(p.AdjustProjectedPosition,e),i.include(f.EdgeUtil,e),i.include(x.LineAmplitude,e),i.include(h.UnpackAttributes,e),i.include(w.LineOffset,e),i.include(n.SliceDraw,e),i.include(v.DiscardNonSilhouetteEdges,e),i.include(g.DiscardByCoverage,e),i.include(t.multipassTerrainTest,e),i.varyings.add("vColor","vec4"),i.varyings.add("vRadius","float"),i.varyings.add("vPosition","vec3"),i.varyings.add("vWorldPosition","vec3"),i.varyings.add("vViewPos","vec3"),i.varyings.add("vLineLengthPixels","float"),i.varyings.add("vSizeFalloffFactor","float"),s.uniforms.add([new d.Float2PassUniform("pixelToNDC",((e,i)=>o.set(A,2/i.camera.fullViewport[2],2/i.camera.fullViewport[3]))),new l.Float4PassUniform("viewport",((e,i)=>i.camera.fullViewport)),new a.FloatPassUniform("pixelRatio",((e,i)=>i.camera.pixelRatio))]),i.attributes.add(u.VertexAttribute.POSITION0,"vec3"),i.attributes.add(u.VertexAttribute.POSITION1,"vec3"),i.attributes.add(u.VertexAttribute.VARIANTOFFSET,"float"),i.attributes.add(u.VertexAttribute.VARIANTSTROKE,"float"),i.attributes.add(u.VertexAttribute.VARIANTEXTENSION,"float"),s.code.add(r.glsl`
    const float opaqueCutoff = 1.0 / 255.0;

    void calculateGeometricOutputs(vec3 viewPosV0, vec3 viewPosV1, vec3 worldPosV0, vec3 worldPosV1, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
      vec2 sideness = unpackedAttributes.sideness;
      vec2 sidenessNorm = unpackedAttributes.sidenessNorm;

      vWorldPosition = mix(worldPosV0, worldPosV1, sidenessNorm.y).xyz;

      vec3 viewPos = mix(viewPosV0, viewPosV1, sidenessNorm.y);
      vViewPos = viewPos;

      vec4 projPosV0 = projFromViewPosition(viewPosV0);
      vec4 projPosV1 = projFromViewPosition(viewPosV1);
      vec4 projPos = projFromViewPosition(viewPos);

      vec3 screenSpaceLineNDC = (projPosV1.xyz / projPosV1.w - projPosV0.xyz / projPosV0.w);
      vec2 ndcToPixel = viewport.zw * 0.5;
      vec2 screenSpaceLinePixels = screenSpaceLineNDC.xy * ndcToPixel;
      float lineLengthPixels = length(screenSpaceLinePixels);

      float dzPerPixel = screenSpaceLineNDC.z / lineLengthPixels;
      vec2 screenSpaceDirection = screenSpaceLinePixels / lineLengthPixels;
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x) * sideness.x;

      float falloffFactor = distanceBasedPerspectiveFactor(-viewPos.z) * pixelRatio;
      float lineWidthPixels = unpackedAttributes.lineWidthPixels * falloffFactor;

      float extensionLengthPixels = calculateExtensionLength(unpackedAttributes.extensionLengthPixels, lineLengthPixels) * falloffFactor;
      float lineAmplitudePixels = calculateLineAmplitude(unpackedAttributes) * pixelRatio;

      vSizeFalloffFactor = falloffFactor;

      float lineWidthAndAmplitudePixels = lineWidthPixels + lineAmplitudePixels + lineAmplitudePixels;
      float extendedLineLengthPixels = lineLengthPixels + extensionLengthPixels + extensionLengthPixels;

      ${e.antialiasing?r.glsl`
        const float aaPaddingPixels = 1.0;

        // Line size with padding
        float halfAAPaddedLineWidthAndAmplitudePixels = lineWidthAndAmplitudePixels * 0.5 + aaPaddingPixels;
        float aaPaddedRoundedCapSizePixels = lineWidthPixels * 0.5 + aaPaddingPixels;`:r.glsl`
        float halfAAPaddedLineWidthAndAmplitudePixels = max(lineWidthAndAmplitudePixels, 1.0) * 0.5;
        float aaPaddedRoundedCapSizePixels = max(lineWidthPixels, 1.0) * 0.5;`}

      // Half line width in NDC including padding for anti aliasing
      vec2 halfAAPaddedLineWidthAndAmplitudeNDC = halfAAPaddedLineWidthAndAmplitudePixels * pixelToNDC;
      vec2 aaPaddedRoundedCapSizeNDC = aaPaddedRoundedCapSizePixels * pixelToNDC;
      vec2 extensionLengthNDC = extensionLengthPixels * pixelToNDC;

      // Compute screen space position of vertex, offsetting for line size and end caps
      vec2 ndcOffset = (
          screenSpaceDirection * sideness.y * (aaPaddedRoundedCapSizeNDC + extensionLengthNDC)
        + perpendicularScreenSpaceDirection * halfAAPaddedLineWidthAndAmplitudeNDC
      );

      projPos.xy += ndcOffset * projPos.w;
      projPos.z += (dzPerPixel * (aaPaddedRoundedCapSizePixels + extensionLengthPixels)) * sideness.y * projPos.w;

      projPos = adjustProjectedPosition(projPos, worldNormal, 1.0 + max((lineWidthAndAmplitudePixels - 1.0) * 0.5, 0.0));

      // Line length with end caps
      float aaPaddedLineWithCapsLengthPixels = extendedLineLengthPixels + aaPaddedRoundedCapSizePixels + aaPaddedRoundedCapSizePixels;

      float pixelPositionAlongLine = aaPaddedLineWithCapsLengthPixels * sidenessNorm.y - aaPaddedRoundedCapSizePixels;

      // Position in pixels with origin at first vertex of line segment
      vPosition = vec3(
        halfAAPaddedLineWidthAndAmplitudePixels * sideness.x,
        pixelPositionAlongLine,
        pixelPositionAlongLine / extendedLineLengthPixels
      );

      // The line width radius in pixels
      vRadius = lineWidthPixels * 0.5;
      vLineLengthPixels = extendedLineLengthPixels;

      // discard short edges below a certain length threshold
      ${e.mode===f.EdgeUtilMode.SKETCH?r.glsl`
        if (lineLengthPixels <= 3.0) {
          gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
          return;
        }`:e.mode===f.EdgeUtilMode.MIXED?r.glsl`
        if (lineLengthPixels <= 3.0 && unpackedAttributes.type <= 0.0) {
           gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
           return;
        }`:""}
      gl_Position = projPos;
    }

    void main() {
      ComponentData component = readComponentData();
      UnpackedAttributes unpackedAttributes = unpackAttributes(component);

      vec3 worldPosV0, worldPosV1, viewPosV0, viewPosV1;
      worldAndViewFromModelPosition(position0, component.verticalOffset, worldPosV0, viewPosV0);
      worldAndViewFromModelPosition(position1, component.verticalOffset, worldPosV1, viewPosV1);

      // Component color
      vColor = component.color;

      // Discard fully transparent edges
      if (vColor.a < opaqueCutoff) {
        gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
        return;
      }

      if (discardNonSilhouetteEdges(viewPosV0, worldPosV0)) {
        return;
      }

      // General geometric computation for all types of edges
      calculateGeometricOutputs(viewPosV0, viewPosV1, worldPosV0, worldPosV1, worldNormal(), unpackedAttributes);

      // Specific computation for different edge styles
      calculateStyleOutputs(unpackedAttributes);
    }
  `),P.code.add(r.glsl`
    vec2 lineWithCapsDistance(float radius, vec2 position, float lineLength) {
      float positionX = position.x - calculateLineOffset();

      if (radius < 1.0) {
        float coverageX = clamp(min(radius, positionX + 0.5) - max(-radius, positionX - 0.5), 0.0, 1.0);
        float coverageY = clamp(min(lineLength, position.y + 0.5) - max(0.0, position.y - 0.5), 0.0, 1.0);
        return vec2(0.5 - min(coverageX, coverageY), 0.0);
      }
      else {
        // Between -radius -> 0 for start cap, 0 for line, 0 -> radius
        float positionOnCap = position.y - clamp(position.y, 0.0, lineLength);

        vec2 lineToPosition = vec2(positionX, positionOnCap);
        return vec2(length(lineToPosition) - radius, positionOnCap / radius);
      }
    }

    void main() {
      ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, vViewPos.z);":""}
      float radius = vRadius * calculateLinePressure();

      vec2 distance = lineWithCapsDistance(radius, vPosition.xy, vLineLengthPixels);
      float coverage = clamp(0.5 - distance.x, 0.0, 1.0);

      discardByCoverage(radius, coverage);
      discardBySlice(vWorldPosition);

      gl_FragColor = vec4(vColor.rgb, vColor.a * coverage);
    }
  `),i}const A=s.create();let L=function(e){function o(i){return e.call(this,i,"mat4")||this}return i._inheritsLoose(o,e),o}(P.Uniform);const b=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}));e.EdgeShader=b,e.build=m}));
