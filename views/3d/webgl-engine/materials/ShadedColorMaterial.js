/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{n as e,s as t,g as r,a as i}from"../../../../chunks/vec3.js";import{c as s}from"../../../../chunks/vec3f64.js";import{f as a}from"../../../../chunks/vec4f64.js";import{center as n,scale as o}from"../../../../geometry/support/aaBoundingBox.js";import{BufferViewVec3f as c}from"../../../../geometry/support/buffer/BufferView.js";import{newLayout as h}from"../../support/buffer/InterleavedLayout.js";import{ShaderOutput as u}from"../core/shaderLibrary/ShaderOutputOptions.js";import{CullFaceOptions as l}from"../lib/basicInterfaces.js";import p from"../lib/GLMaterial.js";import{outputFromPass as f}from"../lib/GLMaterials.js";import{Material as m,MaterialParameters as d}from"../lib/Material.js";import{RenderSlot as S}from"../lib/RenderSlot.js";import{assert as b}from"../lib/Util.js";import{VertexAttribute as E}from"../lib/VertexAttribute.js";import{writeDefaultAttributes as g,writePosition as T}from"./internal/bufferWriterUtils.js";import{intersectTriangleGeometry as A}from"./internal/MaterialUtil.js";import{ShadedColorMaterialTechniqueConfiguration as v,ShadedColorMaterialVertexAttrLocations as F,ShadedColorMaterialTechnique as j}from"../shaders/ShadedColorMaterialTechnique.js";class q extends m{constructor(e){super(e,new C),this.supportsEdges=!0,this.techniqueConfig=new v,this._vertexAttributeLocations=F}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.screenSizeEnabled=this.parameters.screenSizeEnabled,this.techniqueConfig.shadingEnabled=this.parameters.shadingEnabled,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,s,a,c,h,u,l){if(this.parameters.screenSizeEnabled){const a=e.vertexAttributes.get(E.OFFSET),p={applyToVertex:(e,s,n,o)=>{const h=t(L,a.data[3*o+0],a.data[3*o+1],a.data[3*o+2]),u=t(w,e,s,n);return r(h,h,this.parameters.screenSizeScale*c.camera.computeRenderPixelSizeAt(h)),i(u,u,h),[u[0],u[1],u[2]]},applyToAabb:e=>{const t=n(e,L);return o(e,this.parameters.screenSizeScale*c.camera.computeRenderPixelSizeAt(t))}};A(e,s,c,h,u,p,l)}else A(e,s,c,h,u,void 0,l)}requiresSlot(e,t){if(f(t)===u.Highlight)return e===S.OPAQUE_MATERIAL;let r=S.OPAQUE_MATERIAL;return this.parameters.transparent&&(r=this.parameters.writeDepth?S.TRANSPARENT_MATERIAL:S.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===r||e===S.DRAPED_MATERIAL}createGLMaterial(e){return e.output===u.Color||e.output===u.Alpha||e.output===u.Highlight?new x(e):null}createBufferWriter(){return new O(this.parameters.screenSizeEnabled)}}class x extends p{beginSlot(e){return this.ensureTechnique(j,e)}}class C extends d{constructor(){super(...arguments),this.color=a(1,1,1,1),this.shadingTint=a(0,0,0,.25),this.shadingDirection=e(s(),[.5,-.5,-.5]),this.screenSizeScale=14,this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=l.None,this.screenSizeEnabled=!1,this.shadingEnabled=!0}}class O{constructor(e){this.screenSizeEnabled=e;const t=h().vec3f(E.POSITION).vec3f(E.NORMAL);this.screenSizeEnabled&&t.vec3f(E.OFFSET),this.vertexBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(E.POSITION).length}write(e,t,r,i){if(g(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i),this.screenSizeEnabled){if(!t.vertexAttributes.has(E.OFFSET))throw new Error(`${E.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);{const s=t.vertexAttributes.get(E.OFFSET),a=t.indices.get(E.OFFSET);b(3===s.size);const n=r.getField(E.OFFSET,c);if(!n)throw new Error("unable to acquire view for "+E.OFFSET);T(a,s.data,e.invTranspTransformation,n,i)}}}}const L=s(),w=s();export{q as ShadedColorMaterial,C as ShadedColorMaterialParameters};