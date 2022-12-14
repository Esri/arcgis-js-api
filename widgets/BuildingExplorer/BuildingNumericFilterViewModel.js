/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Accessor.js";import{binaryIndexOf as s}from"../../core/arrayUtils.js";import l from"../../core/Collection.js";import{referenceSetter as a}from"../../core/collectionUtils.js";import r from"../../core/Handles.js";import{unwrapOr as o,isNone as i,isSome as n}from"../../core/maybe.js";import{isAbortError as u}from"../../core/promiseUtils.js";import{property as d}from"../../core/accessorSupport/decorators/property.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as h}from"../../core/accessorSupport/decorators/subclass.js";import{createLoadLayersFunction as p}from"./support/layerUtils.js";import{getDomainInfo as y,getValidNumber as c,getMin as v,getMax as f}from"./support/validation.js";let _=class extends t{constructor(e){super(e),this.state="disabled",this._handles=new r,this._valueBeforeReady=null,this._domainInfo=y([]),this._loadLayers=p(),this.layers=new l}initialize(){this._handles.add(this.layers.on("change",(()=>this._onLayersChange()))),this._onLayersChange()}destroy(){this._set("state","disabled"),this._handles.destroy()}get enabled(){return this.allowedValues.length>0&&this._get("enabled")}set enabled(e){e!==this.enabled&&this.allowedValues.length>0&&this._set("enabled",e)}get value(){const e="ready"===this.state?this._get("value"):this._valueBeforeReady;return o(e,0)}set value(e){if("ready"!==this.state)return void(this._valueBeforeReady=e);if(e===this.value)return;const t=c(e,this);i(t)||this._set("value",t)}get min(){return v(this.allowedValues)}get max(){return f(this.allowedValues)}get allowedValues(){return this._domainInfo.allowedValues}get hasNext(){if(!this.enabled)return!0;const e=this._valueIndex;return e>=0&&e<this.allowedValues.length-1}get hasPrevious(){return!this.enabled||this._valueIndex>0}set layers(e){const t=this._get("layers");this._set("layers",a(e,t))}get filterExpressions(){return{solid:null,xRay:null}}get _valueIndex(){return s(this.allowedValues,this.value)}select(e){if("ready"!==this.state)return void(this._valueBeforeReady=e);const t=c(e,this);n(t)&&(this.enabled=!0,this.value=e)}clear(){"ready"===this.state?this.enabled=!1:this._valueBeforeReady=null}next(){const{state:e,allowedValues:t,enabled:s,hasNext:l,_valueIndex:a}=this;if("ready"!==e&&n(this._valueBeforeReady))this._valueBeforeReady++;else if(0!==t.length)return s?void(l&&(this.value=t[a+1])):(this.enabled=!0,void(this.value=t[0]))}previous(){const{state:e,allowedValues:t,enabled:s,hasPrevious:l,_valueIndex:a}=this;if("ready"!==e&&n(this._valueBeforeReady))this._valueBeforeReady++;else if(0!==t.length)return s?void(l&&(this.value=t[a-1])):(this.enabled=!0,void(this.value=t[t.length-1]))}getValueLabel(e){return 0===this.layers.length?null:this._domainInfo.fieldValueMap.get(e)??null}async _onLayersChange(){if(this._set("state","loading"),this._domainInfo=y([]),0!==this.layers.length)try{await this._loadLayers(this.layers),this._setup()}catch(e){u(e)||this._set("state","failed")}}};e([d({value:!1,nonNullable:!0})],_.prototype,"enabled",null),e([d({nonNullable:!0})],_.prototype,"value",null),e([d({readOnly:!0})],_.prototype,"min",null),e([d({readOnly:!0})],_.prototype,"max",null),e([d({readOnly:!0})],_.prototype,"allowedValues",null),e([d({readOnly:!0})],_.prototype,"hasNext",null),e([d({readOnly:!0})],_.prototype,"hasPrevious",null),e([d({type:l,nonNullable:!0})],_.prototype,"layers",null),e([d({nonNullable:!0})],_.prototype,"state",void 0),e([d()],_.prototype,"_valueBeforeReady",void 0),e([d({readOnly:!0})],_.prototype,"_valueIndex",null),e([d()],_.prototype,"_domainInfo",void 0),_=e([h("esri.widgets.BuildingExplorer.BuildingNumericFilterViewModel")],_);const m=_;export{m as default};