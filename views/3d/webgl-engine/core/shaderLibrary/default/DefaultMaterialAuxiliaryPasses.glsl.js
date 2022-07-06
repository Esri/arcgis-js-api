/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ShaderOutput as o}from"../ShaderOutputOptions.js";import{SliceDraw as r}from"../Slice.glsl.js";import{Transform as e}from"../Transform.glsl.js";import{NormalAttribute as t,NormalAttributeType as i}from"../attributes/NormalAttribute.glsl.js";import{TextureCoordinateAttribute as a}from"../attributes/TextureCoordinateAttribute.glsl.js";import{VertexNormal as l}from"../attributes/VertexNormal.glsl.js";import{OutputDepth as s}from"../output/OutputDepth.glsl.js";import{OutputHighlight as d}from"../output/OutputHighlight.glsl.js";import{VisualVariables as n}from"../shading/VisualVariables.glsl.js";import{DiscardOrAdjustAlphaPass as u}from"../util/AlphaDiscard.glsl.js";import{addProjViewLocalOrigin as m}from"../util/View.glsl.js";import{Float2PassUniform as p}from"../../shaderModules/Float2PassUniform.js";import{glsl as c}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as v}from"../../shaderModules/Texture2DPassUniform.js";function f(f,h){const g=f.vertex.code,x=f.fragment.code,j=h.hasModelTransformation;h.output!==o.Depth&&h.output!==o.Shadow||(m(f,h),f.include(e,{linearDepth:!0,hasModelTransformation:j}),f.include(a,h),f.include(n,h),f.include(s,h),f.include(r,h),f.vertex.uniforms.add(new p("nearFar",((o,r)=>r.camera.nearFar))),f.varyings.add("depth","float"),h.hasColorTexture&&f.fragment.uniforms.add(new v("tex",(o=>o.texture))),g.add(c`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${j?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),f.include(u,h),x.add(c`
      void main(void) {
        discardBySlice(vpos);
        ${h.hasColorTexture?c`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),h.output===o.Normal&&(m(f,h),f.include(e,{linearDepth:!1,hasModelTransformation:j}),f.include(t,h),f.include(l,h),f.include(a,h),f.include(n,h),h.hasColorTexture&&f.fragment.uniforms.add(new v("tex",(o=>o.texture))),f.varyings.add("vPositionView","vec3"),g.add(c`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${h.normalType===i.Attribute?c`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${j?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),f.include(r,h),f.include(u,h),x.add(c`
      void main() {
        discardBySlice(vpos);
        ${h.hasColorTexture?c`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${h.normalType===i.ScreenDerivative?c`
            vec3 normal = screenDerivativeNormal(vPositionView);`:c`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),h.output===o.Highlight&&(m(f,h),f.include(e,{linearDepth:!1,hasModelTransformation:j}),f.include(a,h),f.include(n,h),h.hasColorTexture&&f.fragment.uniforms.add(new v("tex",(o=>o.texture))),g.add(c`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${j?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),f.include(r,h),f.include(u,h),f.include(d),x.add(c`
      void main() {
        discardBySlice(vpos);
        ${h.hasColorTexture?c`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}export{f as DefaultMaterialAuxiliaryPasses};
