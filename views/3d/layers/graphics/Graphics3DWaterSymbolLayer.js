/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../Color.js";import{isSome as t,isNone as r,unwrap as o}from"../../../../core/maybe.js";import{getMetersPerUnitForSR as i}from"../../../../core/unitUtils.js";import{e as a}from"../../../../chunks/earcut.js";import{I as n}from"../../../../chunks/mat4f64.js";import{a as s}from"../../../../chunks/vec2.js";import{f as l,a as u}from"../../../../chunks/vec2f64.js";import{b as c,s as m}from"../../../../chunks/vec4.js";import{t as h}from"../../../../chunks/common.js";import{create as d,empty as p,expandWithBuffer as g,intersectsClippingArea as y,expandWithAABB as f}from"../../../../geometry/support/aaBoundingBox.js";import{create as _,empty as v,expandPointInPlace as x}from"../../../../geometry/support/aaBoundingRect.js";import{perVertexElevationAligner as D}from"./ElevationAligners.js";import{SymbolUpdateType as C,elevationModeChangeUpdateType as b,needsElevationUpdates2D as E}from"./elevationAlignmentUtils.js";import{ElevationContext as S}from"./ElevationContext.js";import w from"./Graphics3DDrapedGraphicLayer.js";import{Graphics3DObject3DGraphicLayer as G}from"./Graphics3DObject3DGraphicLayer.js";import{Graphics3DSymbolLayer as j}from"./Graphics3DSymbolLayer.js";import{geometryAsPolygon as T,geometryToRenderInfo as A,createWaterGeometry as U,geometryToRenderInfoDraped as P}from"./polygonUtils.js";import{Object3D as M}from"../../webgl-engine/lib/Object3D.js";import{RenderGeometry as B}from"../../webgl-engine/lib/RenderGeometry.js";import{WaterMaterialParameters as R,WaterMaterial as O}from"../../webgl-engine/materials/WaterMaterial.js";import{wavePresets as L}from"../../webgl-engine/materials/internal/waterMaterialUtils.js";const N=["polyline","polygon","extent"];class V extends j{constructor(e,t,r,o){super(e,t,r,o)}async doLoad(){}destroy(){super.destroy(),this._context.stage.remove(this._material),this._material=null}createGraphics3DGraphic(e){const t=e.graphic;if(!this._validateGeometry(t.geometry,N,this.symbolLayer.type))return null;const r=this.setGraphicElevationContext(t,new S);return this.ensureDrapedStatus("on-the-ground"===r.mode),this.ensureMaterial(),this.draped?this._createAsOverlay(t):this._createAs3DShape(t,r,t.uid)}ensureMaterial(){if(t(this._material))return;const r=new R,o=this.symbolLayer.color;t(o)&&(r.color=e.toUnitRGBA(o));const i=this._getCombinedOpacity(o,{hasIntrinsicColor:!0});r.color=[r.color[0],r.color[1],r.color[2],i],r.transparent=i<1||this.needsDrivenTransparentPass,r.waveDirection=t(this.symbolLayer.waveDirection)?V.headingVectorFromAngle(this.symbolLayer.waveDirection):l(0,0);const a=this.symbolLayer.waveStrength+"-"+this.symbolLayer.waterbodySize,n=L[a];r.waveStrength=n.waveStrength,r.waveTextureRepeat=n.textureRepeat,r.waveVelocity=n.waveVelocity,r.flowStrength=n.perturbationStrength,r.hasSlicePlane=this._context.slicePlaneEnabled,r.isDraped=this.draped,this._material=new O(r),this._context.stage.add(this._material)}layerOpacityChanged(){if(r(this._material))return!0;const e=this._material.parameters.color,t=this._getCombinedOpacity(this.symbolLayer.color,{hasIntrinsicColor:!0}),o=t<1||this.needsDrivenTransparentPass;return this._material.setParameters({color:[e[0],e[1],e[2],t],transparent:o}),!0}layerElevationInfoChanged(e,t,r){const o=this._elevationContext.mode,i=b(V.elevationModeChangeTypes,r,o);if(i!==C.UPDATE)return i;const a=E(o);return this.updateGraphics3DGraphicElevationInfo(e,t,(()=>a))}slicePlaneEnabledChanged(){return t(this._material)&&this._material.setParameters({hasSlicePlane:this._context.slicePlaneEnabled}),!0}physicalBasedRenderingChanged(){return!0}pixelRatioChanged(){return!0}_createAs3DShape(e,t,o){const i=T(e.geometry);if(r(i))return null;z.renderData=A(i,this._context.elevationProvider,this._context.renderCoordsHelper,t);const a=z.renderData.position.length/3;if(z.uvCoords=new Float64Array(2*a),z.outNum=0,z.outGeometries=[],z.outTransforms=[],z.outMaterials=[],this._create3DShapeGeometries(z),this._logGeometryCreationWarnings(z.renderData,i.rings,"rings","WaterSymbol3DLayer"),0===z.outNum)return null;this._createUVCoordsFromVertices(z.uvCoords,z.renderData.mapPosition,a,this._context.elevationProvider.spatialReference);const n=new M({geometries:z.outGeometries,materials:z.outMaterials,transformations:z.outTransforms,castShadow:!1,metadata:{layerUid:this._context.layer.uid,graphicUid:o}}),s=new G(this,n,z.outGeometries,null,null,D,t);return s.alignedSampledElevation=z.renderData.sampledElevation,s.needsElevationUpdates=E(t.mode),s}_createUVCoordsFromVertices(e,t,r,o){const a=i(o);v(I);for(let i=0;i<r;i++)s(W,t[3*i+0],t[3*i+1]),x(I,W);c(I,I,a);const n=I[0]%V.unitSizeOfTexture,l=I[1]%V.unitSizeOfTexture;F[0]=I[0]-n,F[1]=I[1]-l;for(let i=0;i<r;i++)e[2*i+0]=(t[3*i+0]*a-F[0])/V.unitSizeOfTexture,e[2*i+1]=(t[3*i+1]*a-F[1])/V.unitSizeOfTexture}_create3DShapeGeometries(e){const r=e.renderData.polygons,i=e.uvCoords;for(const{count:s,index:l,position:u,mapPosition:c,holeIndices:m}of r){if(t(this._context.clippingExtent)&&(p(k),g(k,c),!y(k,this._context.clippingExtent)))continue;const r=a(c,m,3);if(0===r.length)continue;const h=new Uint32Array(r),d=new Float64Array(i.buffer,2*l*i.BYTES_PER_ELEMENT,2*s),f=U({indices:h,attributeData:{position:u,uv0:d,mapPosition:c}});e.outGeometries.push(f),e.outMaterials.push(o(this._material)),e.outTransforms.push(n),e.outNum++}}_createAsOverlay(e){const t=T(e.geometry);if(r(t))return null;o(this._material).renderPriority=this._renderPriority,Y.renderData=P(t,this._context.overlaySR);const i=Y.renderData.position.length/3;return Y.uvCoords=new Float64Array(2*i),Y.outNum=0,Y.outGeometries=[],Y.outBoundingBox=p(),Y.layerUid=this._context.layer.uid,Y.graphicsUid=e.uid,this._createAsOverlayWater(Y),this._logGeometryCreationWarnings(Y.renderData,t.rings,"rings","WaterSymbol3DLayer"),0===Y.outNum?null:(this._createUVCoordsFromVertices(Y.uvCoords,Y.renderData.position,i,this._context.overlaySR),Y.outNum>0?new w(this,Y.outGeometries,Y.outBoundingBox,this._context.drapeSourceRenderer):null)}_createAsOverlayWater(e){const t=e.uvCoords,r=e.renderData.polygons;for(const{position:i,holeIndices:n,index:s,count:l}of r){if(p(k),g(k,i),!y(k,this._context.clippingExtent))continue;f(e.outBoundingBox,k);const r=a(i,n,3);if(0===r.length)continue;const u=new Uint32Array(r),c=new Float64Array(t.buffer,2*s*t.BYTES_PER_ELEMENT,2*l),h=U({indices:u,attributeData:{position:i,uv0:c}}),d=new B(h,o(this._material),{layerUid:e.layerUid,graphicUid:e.graphicsUid}),_=k;m(d.boundingSphere,.5*(_[0]+_[3]),.5*(_[1]+_[4]),0,.5*Math.sqrt((_[3]-_[0])*(_[3]-_[0])+(_[4]-_[1])*(_[4]-_[1]))),e.outGeometries.push(d),e.outNum++}}static headingVectorFromAngle(e){const t=u(),r=h(e);return t[0]=Math.sin(r),t[1]=Math.cos(r),t}test(){return{...super.test(),create3DShape:e=>this._createAs3DShape(e.graphic,e.elevationContext,e.graphicUid),ensureMaterial:()=>this.ensureMaterial()}}}V.unitSizeOfTexture=100,V.elevationModeChangeTypes={definedChanged:C.RECREATE,staysOnTheGround:C.NONE,onTheGroundChanged:C.RECREATE};const F=u(),I=_(),W=u(),k=d(),z={renderData:null,uvCoords:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null},Y={renderData:null,uvCoords:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null};export{V as Graphics3DWaterSymbolLayer};