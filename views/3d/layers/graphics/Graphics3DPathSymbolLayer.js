/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Error","../../../../core/mathUtils","../../../../core/maybe","../../../../chunks/mat2","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f32","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../geometry/support/aaBoundingBox","../../../../layers/graphics/dehydratedFeatures","./elevationAlignmentUtils","./ElevationContext","./Graphics3DObject3DGraphicLayer","./Graphics3DSymbolLayer","./graphicUtils","../support/FastSymbolUpdates","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/PathGeometry","../../webgl-engine/lib/pathGeometryUtils","../../webgl-engine/materials/DefaultMaterial","../../webgl-engine/materials/PathMaterial"],(function(e,t,i,a,r,s,n,o,l,c,h,p,d,u,m,f,y,g,_,b,v,S,x,w,P){"use strict";const D=["polyline"];let C=function(e){function a(t,i,a,r){var s;return(s=e.call(this,t,i,a,r)||this)._intrinsicSize=o.fromValues(1,1),s.upVectorAlignment="path",s.stencilWidth=.1,s.ensureDrapedStatus(!1),s}t._inheritsLoose(a,e);var s=a.prototype;return s.doLoad=function(){var e=t._asyncToGenerator((function*(){const e=r.isSome(this.symbolLayer.width)?this.symbolLayer.width:this.symbolLayer.height,t=r.isSome(this.symbolLayer.height)?this.symbolLayer.height:e;this._vvConvertOptions={modelSize:[1,1,1],symbolSize:[e,1,t],unitInMeters:this._context.renderCoordsHelper.unitInMeters,transformation:{anchor:[0,0,0],scale:[1,1,1],rotation:[0,0,0]},supportedTypes:{size:!0,color:!0,opacity:!0,rotation:!1}},this._context.renderer&&this._context.renderer.visualVariables&&this._context.renderer.visualVariables.length>0?this._fastUpdates=b.initFastSymbolUpdatesState(this._context.renderer,this._vvConvertOptions):this._fastUpdates={enabled:!1};const a=this.symbolLayer.anchor||"center";this.upVectorAlignment="path","heading"===this.symbolLayer.profileRotation&&(this.upVectorAlignment="world");const s=this.symbolLayer.profile||"circle";if("quad"===s)this._profile=x.Profile.rect();else this._profile=x.Profile.circle(M);let o=[0,0];"center"!==a&&(o={left:[.5,0],right:[-.5,0],top:[0,-.5],bottom:[0,.5]}[a],this._profile.translate(o[0],o[1]));switch(this.symbolLayer.join||"simple"){case"round":this._extruder=new x.MiterExtruder(0,B);break;case"bevel":this._extruder=new x.MiterExtruder(0,1);break;case"miter":this._extruder=new x.MiterExtruder(.8*Math.PI,1);break;default:this._extruder=new x.SimpleExtruder}const l=this.symbolLayer.cap||"butt";switch(l){case"none":this._startCap=new x.NoCapBuilder,this._endCap=new x.NoCapBuilder;break;default:this._startCap=new x.TriangulationCapBuilder(this._profile,0),this._endCap=new x.TriangulationCapBuilder(this._profile,0,!0);break;case"square":this._startCap=new x.TriangulationCapBuilder(this._profile,-.5),this._endCap=new x.TriangulationCapBuilder(this._profile,.5,!0);break;case"round":{const e="quad"===s;this._startCap=new x.RoundCapBuilder({profile:this._profile,flip:!1,breakNormals:e,subdivisions:F}),this._endCap=new x.RoundCapBuilder({profile:this._profile,flip:!0,breakNormals:e,subdivisions:F});break}}const c=r.get(this.symbolLayer,"material","color"),p=this._getCombinedOpacityAndColor(c),d=h.fromArray(p),u=p[3],m=u<1||this.needsDrivenTransparentPass,f={diffuse:d,ambient:d,opacity:u,transparent:m,vertexColors:!1,slicePlaneEnabled:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows,cullFace:m||"none"===l?0:2,offsetTransparentBackfaces:!0};if(!this._drivenProperties.size&&(n.set(this._intrinsicSize,e,t),!_.isValidSize(this._intrinsicSize[0])||!_.isValidSize(this._intrinsicSize[1])))throw new i("graphics3dpathsymbollayer:invalid-size","Symbol sizes may not be negative values");this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size||n.scale(this._intrinsicSize,this._intrinsicSize,1/this._context.renderCoordsHelper.unitInMeters),this._fastUpdates.enabled?(Object.assign(f,this._fastUpdates.materialParameters,{size:[this._intrinsicSize[0],this._intrinsicSize[1],0]}),this._material=new P.PathMaterial(f)):(f.vertexColors=this._drivenProperties.color||this._drivenProperties.opacity,this._material=new w.DefaultMaterial(f)),this._material.setParameterValues({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0}),this._context.stage.add(this._material)}));function a(){return e.apply(this,arguments)}return a}(),s.destroy=function(){e.prototype.destroy.call(this),this._context.stage.remove(this._material),this._material=null},s.createGraphics3DGraphic=function(e){const t=e.graphic;if(!this._validateGeometry(t.geometry,D,this.symbolLayer.type))return null;const i=this.setGraphicElevationContext(t,new f.ElevationContext),a=e.renderingInfo;return this._createAs3DShape(t,a,i,t.uid)},s.layerOpacityChanged=function(){const e=r.get(this.symbolLayer,"material","color"),t=this._getCombinedOpacity(e),i=t<1||this.needsDrivenTransparentPass;return this._material.setParameterValues({opacity:t,transparent:i}),!0},s.layerElevationInfoChanged=function(e,t){return this.updateGraphics3DGraphicElevationInfo(e,t,m.needsElevationUpdates3D)},s.slicePlaneEnabledChanged=function(){return this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled}),!0},s.physicalBasedRenderingChanged=function(){return this._material.setParameterValues({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0}),!0},s.pixelRatioChanged=function(){return!0},s.applyRendererDiff=function(e,t){for(const i in e.diff){if("visualVariables"!==i)return!1;if(!b.updateFastSymbolUpdatesState(this._fastUpdates,t,this._vvConvertOptions))return!1;this._material.setParameterValues(this._fastUpdates.materialParameters)}return!0},s.getVertexData=function(e){let t=0;const i=e.paths,a=[],r=e.spatialReference,s=this._context.elevationProvider.spatialReference,n=this._context.renderCoordsHelper.spatialReference;for(const p of i)t+=p.length;const o=new Float64Array(3*t),l=new Float64Array(3*t),c=new Float64Array(3*t);let h=0;for(const p of i){a.push({index:h,numVertices:p.length});for(const t of p)o[h++]=t[0],o[h++]=t[1],o[h++]=e.hasZ?t[2]:0}let d=!0;return r.equals(s)?this._copyVertices(o,0,l,0,t):d=p.projectBuffer(o,r,0,l,s,0,t),s.equals(n)?this._copyVertices(l,0,c,0,t):p.projectBuffer(l,s,0,c,n,0,t),{pathVertexDataInfos:a,vertexDataGS:o,vertexDataES:l,vertexDataRS:c,projectionSuccess:d,terrainElevation:0}},s._copyVertices=function(e,t,i,a,r){t*=3,a*=3;for(let s=0;s<r;++s)i[a++]=e[t++],i[a++]=e[t++],i[a++]=e[t++]},s._createAs3DShape=function(e,t,i,a){const s=e.geometry,n=new Array,o=new Array,c=new Array,h=s.spatialReference,p=d.create(),u=this._context.renderCoordsHelper;L.spatialReference=h;const f=this.getVertexData(s);if(!f.projectionSuccess)return this.logger.warn("PathSymbol3DLayer geometry failed to be created (failed to project geometry to view spatial reference)"),null;if(f.pathVertexDataInfos.length>0){for(let a=0;a<f.pathVertexDataInfos.length;++a){const s=f.pathVertexDataInfos[a],y=s.index,_=s.numVertices;if(_<2)continue;if(r.isSome(this._context.clippingExtent)&&(d.empty(p),d.expandWithBuffer(p,f.vertexDataES,3*y,_),!d.intersectsClippingArea(p,this._context.clippingExtent)))continue;const b=[];for(let e=y;e<y+3*_;){const t=e++,a=e++,r=e++,s=new x.PathVertex;l.set(s.posGS,f.vertexDataGS[t],f.vertexDataGS[a],f.vertexDataGS[r]),l.set(s.posES,f.vertexDataES[t],f.vertexDataES[a],f.vertexDataES[r]);const n=m.evaluateElevationAlignmentAtPoint(s.posES,this._context.elevationProvider,i,u,null);l.set(z,f.vertexDataRS[t],f.vertexDataRS[a],f.vertexDataRS[r]),u.setAltitude(z,n),l.set(s.pos,z[0],z[1],z[2]),b.push(s)}const v=new x.Path(b);R(v,this.upVectorAlignment,this._context.renderCoordsHelper);const w=new x.Builder(v,this._profile,this._extruder,this._startCap,this._endCap);let P=null;if(this._fastUpdates.enabled){const t=this._fastUpdates.visualVariables,i=t.size?g.getAttributeValue(t.size.field,e):0,a=t.color?g.getAttributeValue(t.color.field,e):0,r=t.opacity?g.getAttributeValue(t.opacity.field,e):0;P=new x.FastUpdatePathGeometry(w,i,a,r)}else{const e=[this._intrinsicSize[0],this._intrinsicSize[1]];this._drivenProperties.size&&(e[0]*=V(t.size[0],"symbol-value"===t.size[2]?this.symbolLayer.height||0:t.size[2],this.symbolLayer.width||0),e[1]*=V(t.size[2],"symbol-value"===t.size[0]?this.symbolLayer.width||0:t.size[0],this.symbolLayer.height||0));let i=null;this._drivenProperties.color&&(i=t.color),this._drivenProperties.opacity&&null!=t.opacity&&(i=i?[i[0],i[1],i[2],t.opacity]:[1,1,1,t.opacity]);const a=new x.StaticPathGeometry(w);a.bake(e),i&&a.bakeVertexColors(i),P=a}const{vertexAttributes:D,indices:C}=P.createGeometryData(),A=new S.PathGeometry(D,C,P,h,this.upVectorAlignment,this.stencilWidth);n.push(A),o.push(this._material),c.push(P.xform)}if(n.length>0){const e={layerUid:this._context.layer.uid,graphicUid:a},t=new v.Object3D({geometries:n,materials:o,transformations:c,metadata:e}),r=E,s=new y.Graphics3DObject3DGraphicLayer(this,t,n,null,null,r,i);return s.alignedSampledElevation=f.terrainElevation,s.needsElevationUpdates=m.needsElevationUpdates3D(i.mode),s}}else 0!==s.paths.length&&s.paths.some((e=>e.length>0))||this.logger.warn("PathSymbol3DLayer geometry failed to be created (no paths were defined)");return null},a}(g.Graphics3DSymbolLayer);function R(e,t,i){switch(t){case"world":for(const t of e.vertices)l.add(I,t.pos,e.offset),i.worldUpAtPosition(I,z),t.setFrameFromUpVector(z),t.computeRotationAxisAndAngleFromUpVector();break;case"path":l.add(I,e.vertices[0].pos,e.offset),i.worldUpAtPosition(I,z),x.computeMinimumRotationTangentFrame(e,z);for(const t of e.vertices){const e=a.sign(l.dot(t.frame.right,t.vRight));l.cross(t.rotationFrame.up,t.vRight,t.vLeft),l.scale(t.rotationFrame.up,t.rotationFrame.up,e),l.normalize(t.rotationFrame.up,t.rotationFrame.up);const i=l.dot(t.rotationFrame.up,t.frame.up),r=l.dot(t.rotationFrame.up,t.frame.right);if(l.scale(I,t.frame.up,-r),l.scale(G,t.frame.right,i),l.add(I,I,G),l.normalize(t.rotationFrame.right,I),x.vertexSpaceToProfileSpace(t.rotationRight,t.frame,t.rotationFrame.right),l.negate(I,t.vLeft),t.rotationAngle=-e*(Math.PI-a.acosClamped(l.dot(I,t.vRight))),Math.abs(t.rotationAngle)>0){const e=a.reciprocalClamped(Math.cos(.5*t.rotationAngle));s.set(t.miterStretch,1+(e-1)*t.rotationRight[0]*t.rotationRight[0],(e-1)*t.rotationRight[0]*t.rotationRight[1],(e-1)*t.rotationRight[0]*t.rotationRight[1],1+(e-1)*t.rotationRight[1]*t.rotationRight[1])}const n=Math.PI-t.rotationAngle;t.maxStretchDistance=Math.abs(Math.min(t.vLeftLength,t.vRightLength)*a.reciprocalClamped(Math.cos(.5*n)))}}}function V(e,t,i){switch(e){case"symbol-value":return i;case"proportional":return t;default:return e}}function A(e,t,i,a){let r=0;for(const s of e.vertices){const n=m.evaluateElevationAlignmentAtPoint(s.posES,i,t,a,k);r+=k.sampledElevation,l.add(z,s.pos,e.offset),a.setAltitude(z,n),l.subtract(s.pos,z,e.offset)}return e.updatePathVertexInformation(),r/e.vertices.length}function E(e,t,i,a){const r=e.stageObject,s=r.geometryRecords,n=s.length;let o=0;U.spatialReference=a.spatialReference;for(let l=0;l<n;l++){const e=s[l].geometry;if(!S.isPathGeometry(e))continue;const n=e.path,c=n.builder.path,h=e.geometrySR;L.spatialReference=h,o+=A(c,t,i,a),"world"!==e.upVectorAlignment&&R(c,e.upVectorAlignment,a),n.onPathChanged(),e.invalidateBoundingInfo(),r.geometryVertexAttrsUpdated(l)}return o/n}const U=u.makeDehydratedPoint(0,0,0,null),L=u.makeDehydratedPoint(0,0,0,null),z=h.create(),I=c.create(),G=c.create(),B=3,F=3,M=10,k={verticalDistanceToGround:0,sampledElevation:0};e.Graphics3DPathSymbolLayer=C,e.NUM_CIRCLE_PROFILE_SUBDIVISIONS=M,e.NUM_ROUND_CAP_EXTRUSION_SUBDIVISIONS=F,e.NUM_ROUND_JOIN_SUBDIVISIONS=B,e.default=C,Object.defineProperty(e,"__esModule",{value:!0})}));
