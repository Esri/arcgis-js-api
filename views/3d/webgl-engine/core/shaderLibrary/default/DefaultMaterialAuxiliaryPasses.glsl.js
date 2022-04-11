/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../ShaderOutputOptions","../Slice.glsl","../Transform.glsl","../attributes/NormalAttribute.glsl","../attributes/TextureCoordinateAttribute.glsl","../attributes/VertexNormal.glsl","../output/OutputDepth.glsl","../output/OutputHighlight.glsl","../shading/VisualVariables.glsl","../util/AlphaDiscard.glsl","../../shaderModules/interfaces"],(function(e,t,r,o,l,a,i,s,d,u,n,c){"use strict";function p(e,p){const v=e.vertex.code,m=e.fragment.code,g=p.hasModelTransformation;p.output!==t.ShaderOutput.Depth&&p.output!==t.ShaderOutput.Shadow||(e.include(o.Transform,{linearDepth:!0,hasModelTransformation:g}),e.include(a.TextureCoordinateAttribute,p),e.include(u.VisualVariables,p),e.include(s.OutputDepth,p),e.include(r.Slice,p),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),p.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),v.add(c.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${g?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(n.DiscardOrAdjustAlpha,p),m.add(c.glsl`
      void main(void) {
        discardBySlice(vpos);
        ${p.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),p.output===t.ShaderOutput.Normal&&(e.include(o.Transform,{linearDepth:!1,hasModelTransformation:g}),e.include(l.NormalAttribute,p),e.include(i.VertexNormal,p),e.include(a.TextureCoordinateAttribute,p),e.include(u.VisualVariables,p),p.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),v.add(c.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${p.normalType===l.NormalAttributeType.Attribute?c.glsl`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${g?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(r.Slice,p),e.include(n.DiscardOrAdjustAlpha,p),m.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${p.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${p.normalType===l.NormalAttributeType.ScreenDerivative?c.glsl`
            vec3 normal = screenDerivativeNormal(vPositionView);`:c.glsl`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),p.output===t.ShaderOutput.Highlight&&(e.include(o.Transform,{linearDepth:!1,hasModelTransformation:g}),e.include(a.TextureCoordinateAttribute,p),e.include(u.VisualVariables,p),p.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),v.add(c.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${g?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(r.Slice,p),e.include(n.DiscardOrAdjustAlpha,p),e.include(d.OutputHighlight),m.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${p.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}e.DefaultMaterialAuxiliaryPasses=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
