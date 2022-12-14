/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{f as e}from"../../../../chunks/vec4f64.js";import{BufferViewMat3f as t,BufferViewVec4f as r,BufferViewVec4u8 as i,BufferViewVec3f as s}from"../../../../geometry/support/buffer/BufferView.js";import{newLayout as a}from"../../support/buffer/InterleavedLayout.js";import{ShaderOutput as n}from"../core/shaderLibrary/ShaderOutputOptions.js";import{CullFaceOptions as o}from"../lib/basicInterfaces.js";import h from"../lib/GLMaterial.js";import{outputFromPass as u}from"../lib/GLMaterials.js";import{Material as l,MaterialParameters as c}from"../lib/Material.js";import{OITPolygonOffsetLimit as p}from"../lib/OrderIndependentTransparency.js";import{RenderSlot as f}from"../lib/RenderSlot.js";import{assert as m}from"../lib/Util.js";import{VertexAttribute as d}from"../lib/VertexAttribute.js";import{Style as g}from"./PatternStyle.js";import{writeBufferVec4 as C,writeColor as A,writePosition as b}from"./internal/bufferWriterUtils.js";import{DefaultBufferWriter as O}from"./internal/DefaultBufferWriter.js";import{intersectTriangleGeometry as T}from"./internal/MaterialUtil.js";import{patternVertexAttributeLocations as P,PatternTechniqueConfiguration as S,PatternTechnique as q}from"../shaders/PatternTechnique.js";class y extends l{constructor(e){super(e,new R),this.supportsEdges=!0,this._vertexAttributeLocations=P,this.techniqueConfig=new S}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.hasVertexColors=this.parameters.hasVertexColors,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.polygonOffset=this.parameters.polygonOffset,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.style=this.parameters.style,this.techniqueConfig.patternSpacing=this.parameters.patternSpacing,this.techniqueConfig.lineWidth=this.parameters.lineWidth,this.techniqueConfig.draped=this.parameters.draped,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<p,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,t,r,i,s,a,n){T(e,t,i,s,a,void 0,n)}requiresSlot(e,t){if(e===f.DRAPED_MATERIAL)return!0;if(u(t)===n.Highlight)return e===f.OPAQUE_MATERIAL;return e===(this.parameters.writeDepth?f.TRANSPARENT_MATERIAL:f.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL)}createGLMaterial(e){return e.output===n.Color||e.output===n.Alpha||e.output===n.Highlight||e.output===n.Depth&&this.parameters.writeLinearDepth?new j(e):null}createBufferWriter(){const e=a().vec3f(d.POSITION).vec4u8(d.COLOR).vec4f(d.UVMAPSPACE);return this.parameters.draped||e.mat3f(d.BOUNDINGRECT),new E(e)}}class j extends h{_updateParameters(e){return this.ensureTechnique(q,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==n.Color&&this._output!==n.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class E extends O{write(e,a,n,o){for(const h of this.vertexBufferLayout.fieldNames){const u=a.vertexAttributes.get(h),l=a.indices.get(h);if(u&&l)switch(h){case d.POSITION:{m(3===u.size);const t=n.getField(h,s);t&&b(l,u.data,e.transformation,t,o);break}case d.COLOR:{m(3===u.size||4===u.size);const e=n.getField(h,i);e&&A(l,u.data,u.size,e,o);break}case d.UVMAPSPACE:{m(4===u.size);const e=n.getField(h,r);e&&C(l,u.data,e,o);break}case d.BOUNDINGRECT:{m(9===u.size);const r=n.getField(h,t);r&&this.writeBoundingRect(l,u.data,e.transformation,r,o);break}}}}writeBoundingRect(e,t,r,i,s){const a=r,n=i.typedBuffer,o=i.typedBufferStride,h=e.length;s*=o;for(let u=0;u<h;++u){const r=9*e[u],i=t[r],h=t[r+1],l=t[r+2];n[s]=a[0]*i+a[4]*h+a[8]*l+a[12],n[s+1]=a[1]*i+a[5]*h+a[9]*l+a[13],n[s+2]=a[2]*i+a[6]*h+a[10]*l+a[14];for(let e=3;e<9;++e)n[s+e]=t[r+e];s+=o}}}class R extends c{constructor(){super(...arguments),this.color=e(1,1,1,1),this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=o.None,this.hasOccludees=!1,this.style=g.Cross,this.patternSpacing=10,this.lineWidth=1,this.draped=!0}}export{R as Parameters,y as PatternMaterial};