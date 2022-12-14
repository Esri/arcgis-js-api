/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../../../../chunks/tslib.es6.js";import e from"../../../../../core/Evented.js";import i from"../../../../../core/Handles.js";import{makeHandle as a}from"../../../../../core/handleUtils.js";import{rad2deg as s}from"../../../../../core/mathUtils.js";import{isSome as o,unwrapOr as r,isNone as n,unwrap as p}from"../../../../../core/maybe.js";import{createLength as l}from"../../../../../core/quantityUtils.js";import{watch as h,initial as c}from"../../../../../core/reactiveUtils.js";import{screenPointObjectToArray as d}from"../../../../../core/screenUtils.js";import{lengthUnitFromSpatialReference as u,getMetersPerUnitForSR as m}from"../../../../../core/unitUtils.js";import{property as g}from"../../../../../core/accessorSupport/decorators/property.js";import"../../../../../core/arrayUtils.js";import"../../../../../core/has.js";import"../../../../../core/accessorSupport/ensureType.js";import{subclass as y}from"../../../../../core/accessorSupport/decorators/subclass.js";import{g as v}from"../../../../../chunks/mat4.js";import{a as f,g as _,i as S}from"../../../../../chunks/vec2.js";import{a as M}from"../../../../../chunks/vec2f64.js";import{c as b,C as T,b as B,n as E,l as x,e as A}from"../../../../../chunks/vec3.js";import{c as O,a as R}from"../../../../../chunks/vec3f64.js";import{containsXY as j}from"../../../../../geometry/support/aaBoundingRect.js";import{c as G,a as D}from"../../../../../chunks/boundedPlane.js";import{intersectRay as z,create as w,normal as I}from"../../../../../geometry/support/plane.js";import{create as P}from"../../../../../geometry/support/ray.js";import{sv2d as U,sv3d as Z,sm4d as C}from"../../../../../geometry/support/vectorStacks.js";import{getGraphicEffectiveElevationInfo as k}from"../../../../../support/elevationInfoUtils.js";import{createShiftManipulator as X,OffsetMode as Y,IsShiftEdgeOnScreenFlag as L,createResizeManipulator as N,createRotateManipulator as V,resizeNormal as H,resizeOutlineOnly as F,isDiagonalResizeHandle as q,calculateDiagonalResizeHandleScale as W,createRotatePlane as J,RotationAxis as K,calculateBoundedPlaneTranslateRotate as Q,updateRotateHeadingHandle as $,updateResizeHandle as tt}from"../../../analysis/Slice/sliceToolUtils.js";import{getRotateHeadingTexture as et}from"../../../analysis/Slice/images/Factory.js";import{Manipulator3D as it}from"../../Manipulator3D.js";import{getGraphicAttachmentOrigin as at,calculateInputRotationTransform as st}from"../../manipulatorUtils.js";import{screenToZConstrained as ot,screenToRenderPlane as rt}from"../dragEventPipeline3D.js";import{ManipulatorType as nt}from"../ManipulatorType.js";import{canMoveZ as pt}from"../manipulatorUtils.js";import{createVisualElements as lt}from"../visualElementUtils.js";import{ManipulationType as ht}from"../manipulations/MoveManipulation.js";import{MoveXYGraphicManipulation as ct}from"../manipulations/MoveXYGraphicManipulation.js";import{PreserveAspectRatio as dt}from"./PreserveAspectRatio.js";import{OutlineVisualElement as ut}from"../../visualElements/OutlineVisualElement.js";import{evaluateElevationAlignmentAtPoint as mt}from"../../../layers/graphics/elevationAlignmentUtils.js";import{ElevationContext as gt}from"../../../layers/graphics/ElevationContext.js";import{GraphicState as yt}from"../../../layers/graphics/GraphicState.js";import{fromScreen as vt}from"../../../support/geometryUtils/ray.js";import{createManipulatorDragEventPipeline as ft,addMapDelta as _t,addScreenDelta as St}from"../../../../interactive/dragEventPipeline.js";import{InteractiveToolBase as Mt}from"../../../../interactive/InteractiveToolBase.js";import{EditGeometryOperations as bt}from"../../../../interactive/editGeometry/EditGeometryOperations.js";import{AccumulationBehaviour as Tt}from"../../../../interactive/editGeometry/interfaces.js";import{AccumulationType as Bt}from"../../../../interactive/editGeometry/operations/UpdateVertices.js";import{mapPlaneAutoHorizontalSizeByElevationMode as Et,calculateOrientedBounds as xt,mapPlaneToRenderPlane as At,apply as Ot,unapply as Rt}from"../../../../interactive/editGeometry/support/editPlaneUtils.js";import jt from"../../../../interactive/sketch/SketchTooltipOptions.js";import{ExtentRotateTooltipInfo as Gt,ExtentScaleTooltipInfo as Dt}from"../../../../interactive/tooltip/ExtentTooltipInfos.js";import{Tooltip as zt}from"../../../../interactive/tooltip/Tooltip.js";import{TranslateGraphicTooltipInfo as wt,TranslateZTooltipInfo as It}from"../../../../interactive/tooltip/TranslateTooltipInfos.js";import{autoHorizontalDistanceByElevationModeBetweenPoints as Pt}from"../../../../support/automaticLengthMeasurementUtils.js";import{verticalSignedDistance as Ut}from"../../../../support/euclideanLengthMeasurementUtils.js";let Zt=class extends(e.EventedMixin(Mt)){constructor(t){super(t),this.enableZ=!0,this.enableRotation=!0,this.enableScaling=!0,this.tooltipOptions=new jt,this._preserveAspectRatio=new dt,this.grabbing=!1,this.inputState=null,this.type="transform-3d",this.handles=new i,this.moveZManipulator=null,this.resizeManipulators=null,this.rotateManipulator=null,this.attachmentOrigin=null,this.outlineVisualElement=null,this.mapBounds=G(),this.mapBoundsStart=G(),this.zmax=0,this.sizeStart=null,this.displayBounds=G(),this.displayBoundsStart=G(),this.displayBoundsMarginStart=0,this.resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}],this._moveXYTooltipInfo=null,this._moveZTooltipInfo=null,this._rotateTooltipInfo=null,this._scaleTooltipInfo=null,this._startAngle=0,this._endAngle=0,this._startScale=M(),this._endScale=M()}initialize(){const{view:t,graphic:e,manipulators:i,handles:s}=this,r=this.graphicState=new yt({graphic:e}),n=e.geometry;this.editGeometryOperations=bt.fromGeometry(n,t.state.viewingMode),this.graphicMoveManipulation=new ct({tool:this,view:t,graphicState:r}),this.moveZManipulator=X(t,Y.CENTER_ON_CALLOUT),this.moveZManipulator.state|=L,s.add([this._createMoveXYGraphicDragPipeline(),h((()=>this.enableZ),(()=>this._updateManipulatorAvailability(this.moveZManipulator,nt.TRANSLATE_Z))),this._createMoveZDragPipeline()]),i.add(this.moveZManipulator),this.resizeManipulators=this.resizeHandles.map((e=>{const i=N(t,e);return s.add([h((()=>this.enableScaling),(()=>this._updateManipulatorAvailability(i,nt.SCALE))),i.events.on("grab-changed",(t=>this._onResizeGrab(t))),this._createResizeDragPipeline(i,e)]),i})),i.addMany(this.resizeManipulators),this.rotateManipulatorTexture=et(t.toolViewManager.textures),this.rotateManipulator=V(t,this.rotateManipulatorTexture.texture),s.add([h((()=>this.enableRotation),(()=>this._updateManipulatorAvailability(this.rotateManipulator,nt.ROTATE))),this.rotateManipulator.events.on("grab-changed",(t=>{this._onRotateGrab(t)})),this._createRotateDragPipeline(this.rotateManipulator)]),i.add(this.rotateManipulator),this._calculateMapBounds(),this._updateDisplayBounds();const p=lt({view:t,graphic:e,forEachManipulator:t=>this._forEachManipulator(t),onManipulatorsChanged:()=>a()});o(p)&&(this.outlineVisualElement=p.visualElement instanceof ut?p.visualElement:null),o(this.outlineVisualElement)&&s.add(this.outlineVisualElement.events.on("attachment-origin-changed",(()=>this._updateDisplayBounds()))),s.add(p),s.add([r.on("changed",(()=>this._onGeometryChanged())),h((()=>r.displaying),(()=>this._updateAllManipulatorAvailability())),h((()=>r.isDraped),(()=>this._graphicDrapedChanged()),c),t.trackGraphicState(r)]);const l=t.pointsOfInterest;l&&s.add(h((()=>l.centerOnSurfaceFrequent.location),(()=>this._updateDisplayBounds())));const d=t=>{s.add(t.events.on("grab-changed",(()=>{this.grabbing=t.grabbing,this._updateAllManipulatorAvailability()})))};this._forEachManipulator(d);const u=(t,i)=>{s.add(t.events.on("immediate-click",(t=>{i===nt.TRANSLATE_XY&&this.emit("immediate-click",{...t,graphic:e}),t.stopPropagation()})))};this._forEachManipulator(u),this._onGeometryChanged(),this._updateAllManipulatorAvailability(),this._initializeTooltip(),this.finishToolCreation()}destroy(){this.mapBounds=null,this.displayBounds=null,this.rotateManipulatorTexture.release(),this.handles.destroy(),this.graphicMoveManipulation.destroy(),this.editGeometryOperations.destroy(),this._tooltip.destroy(),this._set("view",null),this._set("graphic",null)}_initializeTooltip(){const{handles:t,view:e}=this,i=this._tooltip=new zt({view:e}),a=()=>{i.info=this._getUpdatedTooltipInfo()};t.add([this.on("graphic-translate-start",a),this.on("graphic-translate",a),this.on("graphic-translate-stop",(()=>{this._moveXYTooltipInfo=null,this._moveZTooltipInfo=null,this._tooltip.clear()})),this.on("graphic-rotate-start",(t=>{this._startAngle=t.angle,a()})),this.on("graphic-rotate",(t=>{this._endAngle=t.angle,a()})),this.on("graphic-rotate-stop",(()=>{this._startAngle=0,this._endAngle=0,a()})),this.on("graphic-scale-start",(t=>{f(this._startScale,t.xScale,t.yScale),f(this._endScale,t.xScale,t.yScale),a()})),this.on("graphic-scale",(t=>{f(this._endScale,t.xScale,t.yScale),a()})),this.on("graphic-scale-stop",(()=>{f(this._startScale,0,0),f(this._endScale,0,0),a()}))]),this._forEachManipulator((e=>{t.add([e.events.on("focus-changed",a),e.events.on("grab-changed",a),e.events.on("drag",(t=>{"cancel"===t.action?this._tooltip.clear():a()}))])}))}_getUpdatedTooltipInfo(){return this.tooltipOptions.enabled?this.graphicMoveManipulation.grabbing||this.graphicMoveManipulation.dragging?this._computeMoveXYTooltipInfo():this.moveZManipulator.focused?this._computeMoveZTooltipInfo():this.rotateManipulator.focused?this._computeRotateTooltipInfo():this.resizeManipulators.some((t=>t.focused))?this._computeScaleTooltipInfo():null:null}_computeMoveXYTooltipInfo(){return this._moveXYTooltipInfo=r(this._moveXYTooltipInfo,(()=>new wt({tooltipOptions:this.tooltipOptions})))}_computeMoveZTooltipInfo(){const t=this._moveZTooltipInfo=r(this._moveZTooltipInfo,(()=>new It({tooltipOptions:this.tooltipOptions}))),e=this._moveUnit;if(this.moveZManipulator.dragging){const e=this.mapBoundsStart.origin,i=this.mapBounds.origin,a=Ut(e,i,this.view.spatialReference);if(n(a))return null;t.distance=a}else t.distance=l(0,e);return t}_computeRotateTooltipInfo(){const t=this._rotateTooltipInfo=r(this._rotateTooltipInfo,(()=>new Gt({tooltipOptions:this.tooltipOptions})));return t.angle=this._startAngle-this._endAngle,t}_computeScaleTooltipInfo(){const t=this.graphic.geometry;if(n(t))return null;const e=this._scaleTooltipInfo=r(this._scaleTooltipInfo,(()=>new Dt({tooltipOptions:this.tooltipOptions}))),i=Et(this.mapBounds,this.zmax,t.spatialReference,this.graphicState.isDraped);return n(i)?null:(e.xSize=i[0],e.ySize=i[1],o(this.sizeStart)&&this.resizeManipulators.some((t=>t.dragging))?(e.xScale=i[0].value/this.sizeStart[0].value,e.yScale=i[1].value/this.sizeStart[1].value):(e.xScale=1,e.yScale=1),e)}_graphicDrapedChanged(){this.handles.remove(Ct),this._updateDisplayBounds(),this.graphicState.isDraped&&this.handles.add(this.view.elevationProvider.on("elevation-change",(t=>{o(this.attachmentOrigin)&&j(t.extent,this.attachmentOrigin.x,this.attachmentOrigin.y)&&this._updateDisplayBounds()})),Ct)}_updateAllManipulatorAvailability(){this._forEachManipulator(((t,e)=>this._updateManipulatorAvailability(t,e)))}_updateManipulatorAvailability(t,e){const i=this.grabbing&&!t.grabbing;if(t.interactive=!i,t instanceof it){const a=this.graphicState.displaying,s=this.enableZ&&pt(this.graphic);switch(e){case nt.ROTATE:t.available=a&&this.enableRotation;break;case nt.SCALE:t.available=a&&(this.enableScaling||this.enableRotation||s),t.interactive=!i&&this.enableScaling,t.state=this.enableScaling?H:F;break;case nt.TRANSLATE_Z:t.available=a&&s;break;default:t.available=a}}}_forEachManipulator(t){this.graphicMoveManipulation.forEachManipulator(t),this.resizeManipulators.forEach((e=>t(e,nt.SCALE))),t(this.rotateManipulator,nt.ROTATE),t(this.moveZManipulator,nt.TRANSLATE_Z)}get preserveAspectRatio(){return this._preserveAspectRatio.enabled}set preserveAspectRatio(t){this._preserveAspectRatio.enabled=t,this._set("preserveAspectRatio",t)}get _moveUnit(){return r(u(this.view.spatialReference),"meters")}reset(){}_onGeometryChanged(){this._updateDisplayBounds()}_calculateMapBounds(){const t=this.graphic.geometry,e=this.editGeometryOperations.data,i=e.components[0].edges[0],a=_(U.get(),i.leftVertex.pos,i.rightVertex.pos);S(a,a);const s=r(at(this.view,this.graphic),(()=>t.extent.center));let o=Xt*this.view.pixelSizeAt(s);const n=this.view.spatialReference,p=t.spatialReference;n.equals(p)||(o*=m(n)/m(p)),xt(a,e,o,this.mapBounds),this._calculateZMax()}_calculateZMax(){const t=this.editGeometryOperations.data;if(!t.geometry.hasZ)return void(this.zmax=0);const e=t.coordinateHelper;let i=Number.NEGATIVE_INFINITY;for(const a of t.components)for(const t of a.vertices){const a=e.getZ(t.pos);i=Math.max(a,i)}this.zmax=i}_updateDisplayBounds(){const t=this.graphic.geometry;if(n(t))return;const e=o(this.outlineVisualElement)&&!this.graphicState.isDraped&&o(this.outlineVisualElement.attachmentOrigin)?this.outlineVisualElement.attachmentOrigin:at(this.view,this.graphic);this.attachmentOrigin=r(e,t.extent.center);const i=o(e)?e.z:mt(this.mapBounds.origin,this.view.elevationProvider,gt.fromElevationInfo(k(this.graphic)),this.view.renderCoordsHelper),a=D(this.mapBounds);a.origin[2]=i,At(a,this.view.renderCoordsHelper,t.spatialReference,this.displayBoundsMargin,this.displayBounds),this._updateManipulators()}get displayBoundsMargin(){const t=this.view.pointsOfInterest,e=t?t.centerOnSurfaceFrequent.location:this.editGeometryOperations.data.geometry.extent.center;return kt*this.view.pixelSizeAt(e)}_createMoveXYGraphicDragPipeline(){return this.graphicMoveManipulation.createDragPipeline(((t,e,i)=>this._applyGraphicMoveSteps(e,i,ht.XY)))}_createMoveZDragPipeline(){const t=this.view,e=this.editGeometryOperations.data.spatialReference;return ft(this.moveZManipulator,((i,a,s)=>{const o=R(i.renderLocation),r=a.next(ot(t,o,e)).next(St());this._applyGraphicMoveSteps(r,s,ht.Z)}))}_applyGraphicMoveSteps(t,e,i){const a=t.next((t=>("start"===t.action&&(this.inputState={type:"move"},D(this.mapBounds,this.mapBoundsStart),this._calculateSizeStart(),this.emit("graphic-translate-start",{graphic:this.graphic,dxScreen:t.screenDeltaX,dyScreen:t.screenDeltaY})),t))).next(_t()).next(this._moveDragUpdateGeometry()).next((t=>{const e={graphic:this.graphic,dxScreen:t.screenDeltaX,dyScreen:t.screenDeltaY};switch(t.action){case"start":case"update":(t.mapEnd.x-t.mapStart.x||t.mapEnd.y-t.mapStart.y||t.mapEnd.z-t.mapStart.z)&&this.emit("graphic-translate",e);break;case"end":this.inputState=null,this.emit("graphic-translate-stop",e)}return t})).next((t=>this._updateMoveTooltip(t,i)));return e.next((()=>{o(this.inputState)&&this.emit("graphic-translate-stop",{graphic:this.graphic,dxScreen:0,dyScreen:0}),this._cancel()})),a}_calculateSizeStart(){n(this.graphic.geometry)?this.sizeStart=null:this.sizeStart=Et(this.mapBoundsStart,this.zmax,this.graphic.geometry.spatialReference,this.graphicState.isDraped)}_moveDragUpdateGeometry(){return t=>{if(n(this.inputState)||"move"!==this.inputState.type)return t;const e=[];for(const s of this.editGeometryOperations.data.components)e.push(...s.vertices);const i="start"===t.action?Tt.NEW_STEP:Tt.ACCUMULATE_STEPS,a=this.editGeometryOperations.moveVertices(e,t.mapDeltaX,t.mapDeltaY,t.mapDeltaZ,i);return Ot(a,this.mapBounds),this.graphic.geometry=this.editGeometryOperations.data.geometry,t}}_updateMoveTooltip(t,e){if(e===ht.XY||e===ht.XY_AXIS){const e=Pt(t.mapStart,t.mapEnd,this.graphicState.isDraped?"on-the-ground":"absolute-height");o(e)&&o(this._moveXYTooltipInfo)&&(this._moveXYTooltipInfo.distance=e)}return t}_onResizeGrab(t){if("start"!==t.action)return;const e=this._calculatePickRay(t.screenPoint);z(this.displayBounds.plane,e,Z.get())&&(D(this.displayBounds,this.displayBoundsStart),D(this.mapBounds,this.mapBoundsStart),this._calculateSizeStart(),this.displayBoundsMarginStart=this.displayBoundsMargin,this.inputState={type:"resize"})}_createResizeDragPipeline(t,e){return ft(t,((t,i,a)=>{n(this.inputState)||(i.next((t=>("start"===t.action&&this.emit("graphic-scale-start",{graphic:this.graphic,xScale:1,yScale:1}),t))).next(rt(this.view,this.displayBoundsStart.plane)).next((t=>({...t,handle:e}))).next(this._resizeDragRenderPlaneToFactors()).next(this._preserveAspectRatio.createDragEventPipelineStep(),this._preserveAspectRatio.next).next(this._resizeDragUpdateGeometry()).next((t=>{const e={graphic:this.graphic,xScale:t.factor1,yScale:t.factor2};switch(t.action){case"start":case"update":this.emit("graphic-scale",e);break;case"end":this.inputState=null,this.emit("graphic-scale-stop",e)}return t})),a.next((()=>{o(this.inputState)&&this.emit("graphic-scale-stop",{graphic:this.graphic,xScale:1,yScale:1}),this._cancel()})))}))}_resizeDragRenderPlaneToFactors(){return t=>{const e=this.displayBoundsStart,i=t.handle.direction,a=this.displayBoundsMargin,s=this.displayBoundsMarginStart,o=b(Z.get(),e.origin);T(o,o,e.basis1,-i[0]),T(o,o,e.basis2,-i[1]);const r=B(Z.get(),t.renderEnd,o),n=B(Z.get(),t.renderStart,o),p=q(t.handle),l=W(e),h=W(this.displayBounds)/l,c=(t,e)=>{if(0===t)return 1;let i=x(e),o=.5*t*A(e,r)/i;const l=o<0?-1:1;if(p){o+=(i-.5*t*A(e,n)/i)*l*h}const c=i<1.5*s?1:Yt;return i=Math.max(i-s,Yt),l>0&&(o-=a),l*Math.max(l*(o/i),c)};return{...t,factor1:c(i[0],e.basis1),factor2:c(i[1],e.basis2)}}}_resizeDragUpdateGeometry(){return t=>{const e=b(O(),this.mapBoundsStart.origin);T(e,e,this.mapBoundsStart.basis1,-t.handle.direction[0]),T(e,e,this.mapBoundsStart.basis2,-t.handle.direction[1]);const i=f(M(),this.mapBoundsStart.basis1[0],this.mapBoundsStart.basis1[1]);S(i,i);const a=[];for(const r of this.editGeometryOperations.data.components)a.push(...r.vertices);const s="start"===t.action?Tt.NEW_STEP:Tt.ACCUMULATE_STEPS,o=this.editGeometryOperations.scaleVertices(a,e,i,t.factor1,t.factor2,s,Bt.REPLACE);return D(this.mapBoundsStart,this.mapBounds),Ot(o,this.mapBounds),this.graphic.geometry=this.editGeometryOperations.data.geometry,t}}_onRotateGrab(t){if("start"!==t.action)return;const e=J(this.displayBounds,this.view.renderCoordsHelper,K.HEADING,w()),i=this._calculatePickRay(t.screenPoint);z(e,i,Z.get())&&(D(this.displayBounds,this.displayBoundsStart),D(this.mapBounds,this.mapBoundsStart),this._calculateSizeStart(),this.inputState={type:"rotate",rotatePlane:e})}_createRotateDragPipeline(t){return ft(t,((t,e,i)=>{const a=this.inputState;n(a)||(e.next((t=>("start"===t.action&&this.emit("graphic-rotate-start",{graphic:this.graphic,angle:0}),t))).next(rt(this.view,a.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(a)).next(this._rotateDragUpdateGeometry()).next((t=>{const e={graphic:this.graphic,angle:s(t.rotateAngle)};switch(t.action){case"start":case"update":this.emit("graphic-rotate",e);break;case"end":this.inputState=null,this.emit("graphic-rotate-stop",e)}return t})),i.next((()=>{o(this.inputState)&&this.emit("graphic-rotate-stop",{graphic:this.graphic,angle:0}),this._cancel()})))}))}_rotateDragRenderPlaneToRotate(t){return e=>{const i=I(t.rotatePlane),a=st(e.renderStart,e.renderEnd,this.displayBounds.origin,i);return{...e,rotateAxis:i,rotateAngle:a}}}_rotateDragUpdateGeometry(){return t=>{const e=b(O(),this.mapBoundsStart.origin),i=[];for(const o of this.editGeometryOperations.data.components)i.push(...o.vertices);const a="start"===t.action?Tt.NEW_STEP:Tt.ACCUMULATE_STEPS,s=this.editGeometryOperations.rotateVertices(i,e,t.rotateAngle,a,Bt.REPLACE);return D(this.mapBoundsStart,this.mapBounds),Ot(s,this.mapBounds),this.graphic.geometry=this.editGeometryOperations.data.geometry,t}}_calculatePickRay(t){const e=P(),i=d(t);return vt(this.view.state.camera,i,e),E(e.direction,e.direction),e}_updateManipulators(){if(!this.visible)return;const t=Q(this.displayBounds,C.get());$(this.rotateManipulator,t,this.displayBounds,this.view.renderCoordsHelper),this._updateZMoveHandle(this.moveZManipulator,t),this.resizeManipulators.forEach(((e,i)=>{tt(e,this.resizeHandles[i],t,this.displayBounds)}))}_updateZMoveHandle(t,e){const i=this.displayBounds,a={basis:i.basis1,direction:-1,position:B(Z.get(),i.origin,i.basis1),edge:2},s=C.get();v(s,e,a.edge*Math.PI/2),s[12]=0,s[13]=0,s[14]=0,t.modelTransform=s,t.renderLocation=a.position}_cancel(){const t=this.editGeometryOperations.lastOperation;n(t)||(this.editGeometryOperations.undo(),this.graphic.geometry=this.editGeometryOperations.data.geometry,Rt(t,this.mapBounds),this._updateDisplayBounds(),this.inputState=null)}get canUndo(){return this.editGeometryOperations.canUndo}undo(){if(o(this.inputState))this.view.activeTool=null;else if(this.canUndo){const t=this.editGeometryOperations.undo();this.graphic.geometry=this.editGeometryOperations.data.geometry,Rt(p(t),this.mapBounds),this._updateDisplayBounds()}}get canRedo(){return this.editGeometryOperations.canRedo}redo(){if(this.canRedo){const t=this.editGeometryOperations.redo();this.graphic.geometry=this.editGeometryOperations.data.geometry,Ot(p(t),this.mapBounds),this._updateDisplayBounds()}}get test(){return{resizeManipulators:this.resizeManipulators,rotateManipulator:this.rotateManipulator,moveZManipulator:this.moveZManipulator,tooltip:this._tooltip}}};t([g({constructOnly:!0,nonNullable:!0})],Zt.prototype,"view",void 0),t([g({constructOnly:!0,nonNullable:!0})],Zt.prototype,"graphic",void 0),t([g({constructOnly:!0,nonNullable:!0})],Zt.prototype,"enableZ",void 0),t([g()],Zt.prototype,"enableRotation",void 0),t([g()],Zt.prototype,"enableScaling",void 0),t([g({constructOnly:!0,type:jt})],Zt.prototype,"tooltipOptions",void 0),t([g()],Zt.prototype,"preserveAspectRatio",null),t([g()],Zt.prototype,"grabbing",void 0),t([g()],Zt.prototype,"inputState",void 0),t([g({readOnly:!0})],Zt.prototype,"type",void 0),t([g()],Zt.prototype,"_moveUnit",null),Zt=t([y("esri.views.3d.interactive.editingTools.graphicTransform3D.ExtentTransformTool")],Zt);const Ct="draped-elevation-changes",kt=10,Xt=80,Yt=1e-6;export{Yt as EPSILON,Zt as ExtentTransformTool};