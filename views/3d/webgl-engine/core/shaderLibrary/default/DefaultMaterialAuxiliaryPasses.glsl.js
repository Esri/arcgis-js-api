/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/maybe","../../../../../../chunks/mat4f64","../ForwardLinearDepth.glsl","../ShaderOutput","../Slice.glsl","../Transform.glsl","../attributes/NormalAttribute.glsl","../attributes/ObjectAndLayerIdColor.glsl","../attributes/TextureCoordinateAttribute.glsl","../attributes/VertexNormal.glsl","../output/OutputDepth.glsl","../output/OutputHighlight.glsl","../shading/VisualVariables.glsl","../util/AlphaDiscard.glsl","../util/View.glsl","../../shaderModules/interfaces","../../shaderModules/Matrix4PassUniform","../../shaderModules/Texture2DPassUniform","../../../lib/basicInterfaces"],(function(e,r,o,t,a,l,i,s,d,u,n,c,p,g,v,m,h,f,x,O){"use strict";function b(e,b){const{vertex:T,fragment:A}=e,w=b.hasModelTransformation;w&&T.uniforms.add(new f.Matrix4PassUniform("model",(e=>r.isSome(e.modelTransformation)?e.modelTransformation:o.IDENTITY)));const D=b.hasColorTexture&&b.alphaDiscardMode!==O.AlphaDiscardMode.Opaque;switch(b.output){case a.ShaderOutput.Depth:case a.ShaderOutput.Shadow:case a.ShaderOutput.ShadowHighlight:case a.ShaderOutput.ShadowExcludeHighlight:case a.ShaderOutput.ObjectAndLayerIdColor:m.addProjViewLocalOrigin(T,b),e.include(i.Transform,b),e.include(u.TextureCoordinateAttribute,b),e.include(g.VisualVariables,b),e.include(c.OutputDepth,b),e.include(l.SliceDraw,b),e.include(d.ObjectAndLayerIdColor,b),t.addNearFar(e),e.varyings.add("depth","float"),D&&A.uniforms.add(new x.Texture2DPassUniform("tex",(e=>e.texture))),T.code.add(h.glsl`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${w?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(v.DiscardOrAdjustAlphaPass,b),A.code.add(h.glsl`
          void main(void) {
            discardBySlice(vpos);
            ${D?h.glsl`
                    vec4 texColor = texture2D(tex, ${b.hasColorTextureTransform?h.glsl`colorUV`:h.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${b.output===a.ShaderOutput.ObjectAndLayerIdColor?h.glsl`outputObjectAndLayerIdColor();`:h.glsl`outputDepth(depth);`}
          }
        `);break;case a.ShaderOutput.Normal:m.addProjViewLocalOrigin(T,b),e.include(i.Transform,b),e.include(s.NormalAttribute,b),e.include(n.VertexNormal,b),e.include(u.TextureCoordinateAttribute,b),e.include(g.VisualVariables,b),D&&A.uniforms.add(new x.Texture2DPassUniform("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),T.code.add(h.glsl`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${b.normalType===s.NormalAttributeType.Attribute?h.glsl`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${w?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(l.SliceDraw,b),e.include(v.DiscardOrAdjustAlphaPass,b),A.code.add(h.glsl`
          void main() {
            discardBySlice(vpos);
            ${D?h.glsl`
                    vec4 texColor = texture2D(tex, ${b.hasColorTextureTransform?h.glsl`colorUV`:h.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${b.normalType===s.NormalAttributeType.ScreenDerivative?h.glsl`
                vec3 normal = screenDerivativeNormal(vPositionView);`:h.glsl`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case a.ShaderOutput.Highlight:m.addProjViewLocalOrigin(T,b),e.include(i.Transform,b),e.include(u.TextureCoordinateAttribute,b),e.include(g.VisualVariables,b),D&&A.uniforms.add(new x.Texture2DPassUniform("tex",(e=>e.texture))),T.code.add(h.glsl`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${w?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(l.SliceDraw,b),e.include(v.DiscardOrAdjustAlphaPass,b),e.include(p.OutputHighlight,b),A.code.add(h.glsl`
          void main() {
            discardBySlice(vpos);
            ${D?h.glsl`
                    vec4 texColor = texture2D(tex, ${b.hasColorTextureTransform?h.glsl`colorUV`:h.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}e.DefaultMaterialAuxiliaryPasses=b,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
