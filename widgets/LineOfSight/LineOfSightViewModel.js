/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../analysis/LineOfSightAnalysis.js";import s from"../../analysis/LineOfSightAnalysisObserver.js";import o from"../../analysis/LineOfSightAnalysisTarget.js";import i from"../../core/Collection.js";import{castForReferenceSetter as n,referenceSetter as r}from"../../core/collectionUtils.js";import a from"../../core/Handles.js";import{handlesGroup as l}from"../../core/handleUtils.js";import{destroyMaybe as d,isNone as h,isSome as c,applySome as g,unwrap as y}from"../../core/maybe.js";import{watch as p,syncAndInitial as m,sync as T}from"../../core/reactiveUtils.js";import{property as v}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as _}from"../../core/accessorSupport/decorators/subclass.js";import u from"./LineOfSightTarget.js";import{AnalysisViewModel as w}from"../support/AnalysisViewModel.js";const f=i.ofType(u);let A=class extends w{constructor(e){super(e),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="LineOfSightViewModel is only supported in 3D views.",this._handles=new a,this._vmTargetsToConnection=new Map,this._analysisTargetsToConnection=new Map}initialize(){this._handles.add([this.targets.on("after-add",(e=>this._onViewModelTargetAdded(e.item))),this.targets.on("after-remove",(e=>this._onViewModelTargetRemoved(e.item))),p((()=>this.analysis),(e=>this._onAnalysisChange(e)),m)])}destroy(){this._analysisTargetsToConnection.forEach((e=>e.remove())),this._handles=d(this._handles)}get state(){return this.disabled||!this.ready?"disabled":h(this.tool)?"ready":this.tool.state}get observer(){return c(this.analysis.observer)?this.analysis.observer.position:null}set observer(e){this.analysis.observer=new s({position:e})}get targets(){return this._get("targets")||new f}set targets(e){this._set("targets",r(e,this.targets,f))}continue(){c(this.tool)&&this.tool.continue()}stop(){c(this.tool)&&this.tool.stop()}get testInfo(){return{analysisView:this.analysisView,getAnalysisTargetFromViewModelTarget:e=>g(this._vmTargetsToConnection.get(e),(e=>e.analysisTarget))}}constructAnalysis(){return new t}async onConnectToAnalysisView(e){this._handles.add([e.on("result-changed",(e=>{const t=this._analysisTargetsToConnection.get(e.target);c(e.result)?(t.viewModelTarget.intersectedGraphic=e.result.intersectedGraphic,t.viewModelTarget.intersectedLocation=y(e.result.intersectedLocation),t.viewModelTarget.visible=e.result.visible):(t.viewModelTarget.intersectedGraphic=null,t.viewModelTarget.intersectedLocation=null,t.viewModelTarget.visible=void 0)}))],"view")}onDisconnectFromAnalysisView(){null!=this._handles&&this._handles.remove("view")}_onViewModelTargetAdded(e){if(this._vmTargetsToConnection.get(e))return;const t=new o({position:e.location});this._connectViewModelWithAnalysisTarget(e,t),this.analysis.targets.add(t)}_onViewModelTargetRemoved(e){const t=this._vmTargetsToConnection.get(e);t&&(t.remove(),this.analysis.targets.remove(t.analysisTarget))}_onAnalysisTargetAdded(e){if(this._analysisTargetsToConnection.get(e))return;const t=new u({location:g(e.position,(e=>e.clone()))});this._connectViewModelWithAnalysisTarget(t,e),this.targets.add(t)}_onAnalysisTargetRemoved(e){const t=this._analysisTargetsToConnection.get(e);t&&(t.remove(),this.targets.remove(t.viewModelTarget))}_connectViewModelWithAnalysisTarget(e,t){let s=!1;const o=l([p((()=>t.position),(t=>{s||(s=!0,e.location=g(t,(e=>e.clone())),s=!1)}),T),p((()=>e.location),(e=>{s||(s=!0,t.position=g(e,(e=>e.clone())),s=!1)}),T)]),i={analysisTarget:t,viewModelTarget:e,remove:()=>{o.remove(),this._vmTargetsToConnection.delete(e),this._analysisTargetsToConnection.delete(t)}};this._vmTargetsToConnection.set(e,i),this._analysisTargetsToConnection.set(t,i)}_onAnalysisChange(e){const t="analysis";this._handles.remove(t),this._handles.add([this.analysis.targets.on("after-add",(e=>this._onAnalysisTargetAdded(e.item))),this.analysis.targets.on("after-remove",(e=>this._onAnalysisTargetRemoved(e.item)))],t),this.targets.removeAll(),e.targets.forEach((e=>{this._onAnalysisTargetAdded(e)}))}};e([v({type:t})],A.prototype,"analysis",void 0),e([v({readOnly:!0})],A.prototype,"state",null),e([v()],A.prototype,"observer",null),e([v({type:f,cast:n,nonNullable:!0})],A.prototype,"targets",null),A=e([_("esri.widgets.lineOfSight.LineOfSightViewModel")],A);const M=A;export{M as default};