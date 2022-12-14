/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../../TimeExtent.js";import s from"../../../../../core/Evented.js";import t from"../../../../../core/has.js";import{isSome as r}from"../../../../../core/maybe.js";import{createResolver as i,ignoreAbortErrors as o,eachAlwaysValues as n,eachAlways as c}from"../../../../../core/promiseUtils.js";import{diff as u,hasDiff as h,hasDiffAny as a}from"../../../../../core/accessorSupport/diffUtils.js";import d from"../../../../../rest/support/Query.js";import{DataTileSubscription as l}from"./DataTileSubscription.js";import{UpdateToken as p}from"../support/UpdateToken.js";function m(e,s){const t=new Set;return e&&e.forEach((e=>t.add(e))),s&&s.forEach((e=>t.add(e))),t.has("*")?["*"]:Array.from(t)}class f{constructor(e){this.events=new s,this._resolver=i(),this._didEdit=!1,this._subscriptions=new Map,this._outSR=e.outSR,this._serviceInfo=e.serviceInfo,this._onTileUpdateMessage=e.onMessage}destroy(){}async _onMessage(e){const s=this._subscriptions.get(e.id);if(!s)return;const t={...e,remove:e.remove??[],status:e.status??p.empty()};return o(this._onTileUpdateMessage(t,s.options))}update(s,r){const i=r.fields.length;r.outFields=m(this._schema?.outFields,r.outFields),r.outFields=r.outFields.length>=.75*i?["*"]:r.outFields,r.outFields.sort();const o=u(this._schema,r);if(!o)return;t("esri-2d-update-debug")&&console.debug("Applying Update - Source:",o);const n="orderByFields"in this._serviceInfo&&this._serviceInfo.orderByFields?this._serviceInfo.orderByFields:this._serviceInfo.objectIdField+" ASC",c={returnCentroid:t("esri-2d-query-centroid-enabled")&&"esriGeometryPolygon"===this._serviceInfo.geometryType,returnGeometry:!0,timeReferenceUnknownClient:"stream"!==this._serviceInfo.type&&this._serviceInfo.timeReferenceUnknownClient,outFields:r.outFields,outSpatialReference:this._outSR,orderByFields:[n],where:r.definitionExpression||"1=1",gdbVersion:r.gdbVersion,historicMoment:r.historicMoment,timeExtent:e.fromJSON(r.timeExtent)},d=this._schema&&h(o,"outFields");this._schema&&a(o,["timeExtent","definitionExpression","gdbVersion","historicMoment","customParameters"])&&(s.why.mesh.push("Layer filter and/or custom parameters changed"),s.why.source.push("Layer filter and/or custom parameters changed"),s.mesh=!0,s.source=!0,s.queryFilter=!0),d&&(s.why.source.push("Layer required fields changed"),s.source=!0),u(c,this._queryInfo)&&(this._queryInfo=c),this._schema=r,this._resolver.resolve()}whenInitialized(){return this._resolver.promise}async applyUpdate(e){if(e.queryFilter||e.source&&this._didEdit)return this.refresh(e.version),void(this._didEdit=!1);this._subscriptions.forEach((s=>s.applyUpdate(e))),await this.resend()}refresh(e){for(const s of this._tiles())this.unsubscribe(s),this.subscribe(s,e)}subscribe(e,s){const t=new l(e,s);this._subscriptions.set(e.id,t)}unsubscribe(e){const s=this.get(e.id);r(s)&&s.abort(),this._subscriptions.delete(e.id)}createQuery(e={}){const s=this._queryInfo.historicMoment?new Date(this._queryInfo.historicMoment):null;return new d({...this._queryInfo,historicMoment:s,...e})}get(e){return this._subscriptions.has(e)?this._subscriptions.get(e):null}async queryLastEditDate(){throw new Error("Service does not support query type")}async query(e){throw new Error("Service does not support query")}*_tiles(){const e=Array.from(this._subscriptions.values());for(const s of e)yield s.tile}async edit(e,s){const t=Array.from(this._subscriptions.values()),r=t.map((({tile:e})=>e));for(const i of t)i.removeIds(s);if(e.length){const t=r.map((s=>{const t=this.createTileQuery(s);return t.objectIds=e,{tile:s,query:t}})).map((async({tile:e,query:s})=>({tile:e,result:await this.query(s),query:s}))),i=(await n(t)).map((async({tile:t,result:r})=>{if(!r.hasFeatures&&!s.length&&!e.length)return;const i=this._subscriptions.get(t.key.id);i&&i.edit(r,e)}));await c(i)}this._didEdit=!0}}export{f as DataTileSource};