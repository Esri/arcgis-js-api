/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../Transform.glsl","../Slice.glsl","../output/OutputHighlight.glsl","../shading/VisualVariables.glsl","../util/AlphaDiscard.glsl","../output/OutputDepth.glsl","../attributes/TextureCoordinateAttribute.glsl","../attributes/NormalAttribute.glsl","../attributes/VertexNormal.glsl"],(function(e,r,t,l,o,a,i,s,d,u,n){"use strict";function c(e,c){const v=e.vertex.code,p=e.fragment.code;1!==c.output&&3!==c.output||(e.include(t.Transform,{linearDepth:!0}),e.include(d.TextureCoordinateAttribute,c),e.include(a.VisualVariables,c),e.include(s.OutputDepth,c),e.include(l.Slice,c),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),c.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),v.add(r.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(i.DiscardOrAdjustAlpha,c),p.add(r.glsl`
      void main(void) {
        discardBySlice(vpos);
        ${c.hasColorTexture?r.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===c.output&&(e.include(t.Transform,{linearDepth:!1}),e.include(u.NormalAttribute,c),e.include(n.VertexNormal,c),e.include(d.TextureCoordinateAttribute,c),e.include(a.VisualVariables,c),c.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),v.add(r.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===c.normalType?r.glsl`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(l.Slice,c),e.include(i.DiscardOrAdjustAlpha,c),p.add(r.glsl`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?r.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===c.normalType?r.glsl`
            vec3 normal = screenDerivativeNormal(vPositionView);`:r.glsl`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===c.output&&(e.include(t.Transform,{linearDepth:!1}),e.include(d.TextureCoordinateAttribute,c),e.include(a.VisualVariables,c),c.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),v.add(r.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(l.Slice,c),e.include(i.DiscardOrAdjustAlpha,c),e.include(o.OutputHighlight),p.add(r.glsl`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?r.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}e.DefaultMaterialAuxiliaryPasses=c,Object.defineProperty(e,"__esModule",{value:!0})}));
