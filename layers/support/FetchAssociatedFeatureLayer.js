/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{id as t}from"../../kernel.js";import r from"../../request.js";import{isNone as e,isSome as a}from"../../core/maybe.js";import{throwIfAbortError as s}from"../../core/promiseUtils.js";import i from"../FeatureLayer.js";import o from"../../portal/Portal.js";import n from"../../portal/PortalItem.js";class l{constructor(t,r,e,a){this.parsedUrl=t,this.portalItem=r,this.apiKey=e,this.signal=a,this.rootDocument=null;const s=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);s&&(this.urlParts={root:s[1],layerId:parseInt(s[2],10)})}async fetch(){if(!this.urlParts)return null;const t=this.portalItem??await this._portalItemFromServiceItemId();if(e(t))return this._loadFromUrl();const r=await this._findAndLoadRelatedPortalItem(t);return e(r)?null:this._loadFeatureLayerFromPortalItem(r)}async fetchPortalItem(){if(!this.urlParts)return null;const t=this.portalItem??await this._portalItemFromServiceItemId();return e(t)?null:this._findAndLoadRelatedPortalItem(t)}async _fetchRootDocument(){if(a(this.rootDocument))return this.rootDocument;if(e(this.urlParts))return this.rootDocument={},{};const t={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},s=`${this.urlParts.root}/SceneServer`;try{const e=await r(s,t);this.rootDocument=e.data}catch{this.rootDocument={}}return this.rootDocument}async _fetchServiceOwningPortalUrl(){const e=t?.findServerInfo(this.parsedUrl.path);if(e?.owningSystemUrl)return e.owningSystemUrl;const a=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await r(a,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(i){s(i)}return null}async _findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(r){return s(r),null}}async _loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this._findMatchingAssociatedSublayerUrl(t.url);return new i({url:r,portalItem:t}).load({signal:this.signal})}async _loadFromUrl(){const t=await this._findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new i({url:t}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(t){const e=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),a={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},s=this.urlParts.layerId,i=this._fetchRootDocument(),o=r(e,a),[n,l]=await Promise.all([o,i]),c=l&&l.layers,h=n.data&&n.data.layers;if(!Array.isArray(h))throw new Error("expected layers array");if(Array.isArray(c))for(let r=0;r<Math.min(c.length,h.length);r++){if(c[r].id===s)return`${e}/${h[r].id}`}else if(s<h.length)return`${e}/${h[s].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const t=(await this._fetchRootDocument()).serviceItemId;if(!t)return null;const r=new n({id:t,apiKey:this.apiKey}),e=await this._fetchServiceOwningPortalUrl();a(e)&&(r.portal=new o({url:e}));try{return r.load({signal:this.signal})}catch(i){return s(i),null}}}export{l as FetchAssociatedFeatureLayer};