/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e,isNone as t}from"../../../../core/maybe.js";import{c as i}from"../../../../chunks/vec3.js";import{c as n,a as s}from"../../../../chunks/vec3f64.js";import{create as r,fromValues as h,copy as a}from"../../../../geometry/support/lineSegment.js";import{VisualElement as l}from"./VisualElement.js";import{LaserLineRenderer as c}from"../../support/LaserLineRenderer.js";import{d}from"../../../../chunks/Laserlines.glsl.js";class _ extends l{constructor(e){super(e.view),this._angleCutoff=d,this._style={},this._heightManifoldTarget=n(),this._heightManifoldEnabled=!1,this._intersectsLine=r(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProps(e)}get testData(){return this.renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(t){e(t)?(i(this._heightManifoldTarget,t),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(t(e))return void(this.intersectsLine=null);const i=this.view.renderCoordsHelper.worldUpAtPosition(e,o);this.intersectsLine=h(e,i),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(t){e(t)?(a(t,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){this._lineVerticalPlaneSegment=e(t)?a(t):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(t){this._pointDistanceLine=e(t)?{origin:s(t.origin),target:s(t.target)}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||e(this._pointDistanceLine)||e(this._pathVerticalPlaneBuffers))?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){e(this.renderer)||(this.renderer=new c(this.view.renderCoordsHelper,void 0,{contrastControlEnabled:!0}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this.renderer.renderSlots,this.renderer))}_syncStyle(){t(this.renderer)||(this.renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this.renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){t(this.renderer)||this.renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){t(this.renderer)||(this.renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this.renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){t(this.renderer)||(this.renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this.renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){t(this.renderer)||(this.renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){t(this.renderer)||(this.renderer.pathVerticalPlaneEnabled=e(this._pathVerticalPlaneBuffers)&&this.visible,e(this._pathVerticalPlaneBuffers)&&(this.renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){t(this.renderer)||(this.renderer.lineVerticalPlaneEnabled=e(this._lineVerticalPlaneSegment)&&this.visible,e(this._lineVerticalPlaneSegment)&&(this.renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){t(this.renderer)||(this.renderer.pointDistanceEnabled=e(this._pointDistanceLine)&&this.visible,e(this._pointDistanceLine)&&(this.renderer.pointDistanceOrigin=this._pointDistanceLine.origin,this.renderer.pointDistanceTarget=this._pointDistanceLine.target))}_disposeRenderer(){e(this.renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this.renderer),this.renderer=null)}}const o=n();export{_ as LaserlineVisualElement};