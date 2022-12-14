/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import r from"../../PopupTemplate.js";import t from"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/PieChartRenderer.js";import o from"../../renderers/Renderer.js";import i from"../../renderers/SimpleRenderer.js";import n from"../../renderers/UniqueValueRenderer.js";import{read as s}from"../../renderers/support/jsonUtils.js";import{webSceneRendererTypes as p}from"../../renderers/support/types.js";import{symbolTypesRenderer as a}from"../../symbols.js";import{HandleOwnerMixin as l}from"../../core/HandleOwner.js";import{IdentifiableMixin as d}from"../../core/Identifiable.js";import m from"../../core/Loadable.js";import y from"../../core/Logger.js";import{MultiOriginJSONMixin as f}from"../../core/MultiOriginJSONSupport.js";import{property as u}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{reader as c}from"../../core/accessorSupport/decorators/reader.js";import{subclass as b}from"../../core/accessorSupport/decorators/subclass.js";import{createTypeReader as g}from"../../core/accessorSupport/extensions/serializableProperty/reader.js";import{labelsVisible as j,legendEnabled as v,minScale as S,maxScale as w,opacityDrawingInfo as I,popupEnabled as h}from"./commonProperties.js";import D from"./FeatureTemplate.js";import R from"./LabelClass.js";import{reader as T}from"./labelingInfo.js";import{createPopupTemplate as P}from"../../support/popupUtils.js";const V=y.getLogger("esri.layers.FeatureLayer"),x=g({types:a}),C={key:"type",base:o,typeMap:{simple:i,"unique-value":n,"class-breaks":t},errorContext:"renderer"};let O=class extends(l(f(d(m)))){constructor(e){super(e),this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.minScale=0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){this._set("renderer",e)}readRenderer(e,r,t){const o=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(o){const e=s(o,r,t)||void 0;return e||V.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:t}),e}if(r.defaultSymbol)return r.types&&r.types.length?new n({defaultSymbol:x(r.defaultSymbol,r,t),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:x(e.symbol,e,t)})))}):new i({symbol:x(r.defaultSymbol,r,t)})}readTemplates(e,r){return e=e&&e.map((e=>D.fromJSON(e)))}readVisible(e,r){return r.layerDefinition&&null!=r.layerDefinition.defaultVisibility?!!r.layerDefinition.defaultVisibility:null!=r.visibility?!!r.visibility:void 0}createPopupTemplate(e){const r=this.parent.fields;return P({...this,fields:r},e)}};e([u({json:{read:!1}})],O.prototype,"type",void 0),e([u(j)],O.prototype,"labelsVisible",void 0),e([u({type:[R],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:T},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:T},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],O.prototype,"labelingInfo",void 0),e([u(v)],O.prototype,"legendEnabled",void 0),e([u(S)],O.prototype,"minScale",void 0),e([u(w)],O.prototype,"maxScale",void 0),e([u({readOnly:!0})],O.prototype,"effectiveScaleRange",null),e([u(I)],O.prototype,"opacity",void 0),e([u()],O.prototype,"parent",void 0),e([u(h)],O.prototype,"popupEnabled",void 0),e([u({type:r,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],O.prototype,"popupTemplate",void 0),e([u({readOnly:!0})],O.prototype,"defaultPopupTemplate",null),e([u({types:C,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:p,write:{overridePolicy:(e,r,t)=>({ignoreOrigin:t?.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,r,t)=>({ignoreOrigin:t?.writeLayerSchema})}}})],O.prototype,"renderer",null),e([c("service","renderer",["drawingInfo.renderer","defaultSymbol"]),c("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],O.prototype,"readRenderer",null),e([u({type:Number,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.subtypeCode"},write:{target:"layerDefinition.subtypeCode"}}})],O.prototype,"subtypeCode",void 0),e([u({type:[D]})],O.prototype,"templates",void 0),e([c("templates",["editFieldsInfo","creatorField","editorField","templates"])],O.prototype,"readTemplates",null),e([u()],O.prototype,"title",void 0),e([u({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],O.prototype,"visible",void 0),e([c("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],O.prototype,"readVisible",null),O=e([b("esri.layers.support.SubtypeSublayer")],O);const F=O;export{F as default};