/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Accessor.js";import i from"../../core/has.js";import{unwrap as s}from"../../core/maybe.js";import{property as f}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/accessorSupport/ensureType.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import{EffectView as r}from"./EffectView.js";let o=class extends t{constructor(e){super(e),this._filter=null,this.duration=i("mapview-transitions-duration"),this._excludedEffectView=new r(e),this._includedEffectView=new r(e)}get excludedEffects(){return this._excludedEffectView.effects}set featureEffect(e){this._get("featureEffect")!==e&&this._transitionTo(e)}get filter(){return this._filter||s(this.featureEffect)?.filter||null}get hasEffects(){return this._excludedEffectView.hasEffects||this._includedEffectView.hasEffects}get includedEffects(){return this._includedEffectView.effects}set scale(e){this._set("scale",e),this._excludedEffectView.scale=e,this._includedEffectView.scale=e}get transitioning(){return this._excludedEffectView.transitioning||this._includedEffectView.transitioning}transitionStep(e,t){this._set("scale",t),this.transitioning?(this._includedEffectView.transitionStep(e,t),this._excludedEffectView.transitionStep(e,t),this.transitioning||(this._filter=null)):(this._excludedEffectView.scale=t,this._includedEffectView.scale=t)}end(){this._includedEffectView.end(),this._excludedEffectView.end(),this._filter=null}_transitionTo(e){const t=this._get("featureEffect"),i=s(e),f=s(i?.includedEffect),c=s(i?.excludedEffect),r=this._includedEffectView.canTransitionTo(f)&&this._excludedEffectView.canTransitionTo(c);this._includedEffectView.effect=f,this._excludedEffectView.effect=c,this._set("featureEffect",i),this._filter=i?.filter||t?.filter||null,r||this.end()}};e([f()],o.prototype,"_filter",void 0),e([f()],o.prototype,"_excludedEffectView",void 0),e([f()],o.prototype,"_includedEffectView",void 0),e([f()],o.prototype,"duration",void 0),e([f()],o.prototype,"excludedEffects",null),e([f()],o.prototype,"featureEffect",null),e([f()],o.prototype,"filter",null),e([f()],o.prototype,"hasEffects",null),e([f()],o.prototype,"includedEffects",null),e([f({value:0})],o.prototype,"scale",null),e([f()],o.prototype,"transitioning",null),o=e([c("esri.layers.effects.FeatureEffectView")],o);const n=o;export{n as default};