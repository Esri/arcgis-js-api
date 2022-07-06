/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getJsonType as r}from"../../../../../geometry/support/jsonUtils.js";import{convertFromGraphics as t}from"../../../../../layers/graphics/featureConversionUtils.js";import{FeatureSetReader as e}from"./FeatureSetReader.js";import{FeatureSetReaderJSON as s}from"./FeatureSetReaderJSON.js";class o extends s{constructor(r,t){super(r,t,null)}static from(s,n){const i=e.createInstance(),c=[],u=s.filter((r=>!!r.geometry));for(const e of u){const s=r(e.geometry);t(c,[e],s,!1,!1,n)}return new o(i,c)}get geometryType(){const r=this._current;return r?r.geometryType:null}get insertAfter(){return this._current.insertAfter}readGraphic(){return this._current}getCursor(){return this.copy()}copy(){const r=new o(this.instance,this._features);return this.copyInto(r),r}}export{o as GraphicsReader};
