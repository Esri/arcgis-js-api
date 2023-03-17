/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/TransparencyPassType"],(function(e,a,i,o,r,l,s,n,d,t,c,g,u,h,p,v,m,w,b,y,f,S){"use strict";function P(e){const P=new f.ShaderBuilder,{vertex:L,fragment:O}=P;switch(m.addProjViewLocalOrigin(L,e),P.varyings.add("vpos","vec3"),P.include(l.PathVertexPosition,e),e.output!==i.ShaderOutput.Color&&e.output!==i.ShaderOutput.Alpha||(P.include(r.Transform,e),P.include(p.ReadShadowMapDraw,e),P.include(a.ForwardLinearDepth,e),P.varyings.add("vnormal","vec3"),P.varyings.add("vcolor","vec4"),e.hasMultipassTerrain&&P.varyings.add("depth","float"),L.code.add(y.glsl`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${e.output===i.ShaderOutput.Color?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `)),P.include(g.multipassTerrainTest,e),e.output){case i.ShaderOutput.Alpha:P.include(o.SliceDraw,e),O.uniforms.add(new b.FloatPassUniform("opacity",(e=>e.opacity))),O.code.add(y.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        float combinedOpacity = vcolor.a * opacity;
        gl_FragColor = vec4(combinedOpacity);
      }
    `);break;case i.ShaderOutput.Color:P.include(o.SliceDraw,e),P.include(t.EvaluateSceneLighting,e),P.include(d.EvaluateAmbientOcclusion,e),P.include(p.ReadShadowMapDraw,e),P.include(u.Normals,e),m.addCameraPosition(O,e),t.addAmbientBoostFactor(O),t.addLightingGlobalFactor(O),O.uniforms.add([L.uniforms.get("localOrigin"),new w.Float3PassUniform("ambient",(e=>e.ambient)),new w.Float3PassUniform("diffuse",(e=>e.diffuse)),new w.Float3PassUniform("specular",(e=>e.specular)),new b.FloatPassUniform("opacity",(e=>e.opacity))]),O.include(v.ColorConversion),c.addMainLightIntensity(O),O.code.add(y.glsl`
        void main() {
          discardBySlice(vpos);
          ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          shadingParams.viewDirection = normalize(vpos - cameraPosition);
          shadingParams.normalView = vnormal;
          vec3 normal = shadingNormal(shadingParams);
          float ssao = evaluateAmbientOcclusionInverse();

          float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
          ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
          vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
          float combinedOpacity = vcolor.a * opacity;
          albedo += 0.25 * specular; // don't completely ignore specular for now

          vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
          gl_FragColor = vec4(shadedColor, combinedOpacity);
          gl_FragColor = highlightSlice(gl_FragColor, vpos);
          ${e.transparencyPassType===S.TransparencyPassType.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
        }
      `);break;case i.ShaderOutput.Depth:case i.ShaderOutput.Shadow:case i.ShaderOutput.ShadowHighlight:case i.ShaderOutput.ShadowExcludeHighlight:P.include(r.Transform,e),a.addNearFar(P),P.varyings.add("depth","float"),L.code.add(y.glsl`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`),P.include(o.SliceDraw,e),P.include(s.OutputDepth,e),O.code.add(y.glsl`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`);break;case i.ShaderOutput.Normal:P.include(r.Transform,e),P.include(h.NormalUtils,e),m.addViewNormal(L),P.varyings.add("vnormal","vec3"),L.code.add(y.glsl`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`),P.include(o.SliceDraw,e),O.code.add(y.glsl`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`);break;case i.ShaderOutput.Highlight:P.include(r.Transform,e),P.include(h.NormalUtils,e),P.varyings.add("vnormal","vec3"),L.code.add(y.glsl`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),P.include(o.SliceDraw,e),P.include(n.OutputHighlight,e),O.code.add(y.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`)}return P}const L=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:"Module"}));e.Path=L,e.build=P}));
