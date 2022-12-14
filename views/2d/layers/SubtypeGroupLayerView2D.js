/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{isSome as r}from"../../../core/maybe.js";import{watch as s,initial as t}from"../../../core/reactiveUtils.js";import"../../../core/Logger.js";import"../../../core/accessorSupport/ensureType.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/set.js";import{subclass as i}from"../../../core/accessorSupport/decorators/subclass.js";import a from"../../../layers/support/FeatureFilter.js";import o from"./FeatureLayerView2D.js";function l(e,r){return!e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let n=class extends o{initialize(){this.handles.add([s((()=>this.view?.viewpoint),(()=>this._update()),t)])}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,i=this.layer.sublayers.filter((e=>l(e,t))).map((e=>e.subtypeCode));if(!i.length)return s;s=r(s)?s:(new a).toJSON();const o=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;return s.where=s.where?`(${s.where}) AND (${o})`:o,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};n=e([i("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const y=n;export{y as default};