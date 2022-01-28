/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../Slice.glsl","../Transform.glsl","../attributes/NormalAttribute.glsl","../attributes/TextureCoordinateAttribute.glsl","../attributes/VertexNormal.glsl","../output/OutputDepth.glsl","../output/OutputHighlight.glsl","../shading/VisualVariables.glsl","../util/AlphaDiscard.glsl","../../shaderModules/interfaces"],(function(e,r,t,l,o,a,i,s,d,u,n){"use strict";function c(e,c){const v=e.vertex.code,p=e.fragment.code;1!==c.output&&3!==c.output||(e.include(t.Transform,{linearDepth:!0}),e.include(o.TextureCoordinateAttribute,c),e.include(d.VisualVariables,c),e.include(i.OutputDepth,c),e.include(r.Slice,c),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),c.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),v.add(n.glsl`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(u.DiscardOrAdjustAlpha,c),p.add(n.glsl`
      void main(void) {
        discardBySlice(vpos);
        ${c.hasColorTexture?n.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===c.output&&(e.include(t.Transform,{linearDepth:!1}),e.include(l.NormalAttribute,c),e.include(a.VertexNormal,c),e.include(o.TextureCoordinateAttribute,c),e.include(d.VisualVariables,c),c.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),v.add(n.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===c.normalType?n.glsl`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(r.Slice,c),e.include(u.DiscardOrAdjustAlpha,c),p.add(n.glsl`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?n.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===c.normalType?n.glsl`
            vec3 normal = screenDerivativeNormal(vPositionView);`:n.glsl`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===c.output&&(e.include(t.Transform,{linearDepth:!1}),e.include(o.TextureCoordinateAttribute,c),e.include(d.VisualVariables,c),c.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),v.add(n.glsl`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(r.Slice,c),e.include(u.DiscardOrAdjustAlpha,c),e.include(s.OutputHighlight),p.add(n.glsl`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?n.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}e.DefaultMaterialAuxiliaryPasses=c,Object.defineProperty(e,"__esModule",{value:!0})}));
