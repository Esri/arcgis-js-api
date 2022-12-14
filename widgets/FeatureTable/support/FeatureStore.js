/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import t from"../../../Graphic.js";import r from"../../../core/Accessor.js";import{equals as s,remove as i}from"../../../core/arrayUtils.js";import a from"../../../core/Collection.js";import o from"../../../core/Error.js";import{clone as n}from"../../../core/lang.js";import h from"../../../core/Logger.js";import{property as u}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as y}from"../../../core/accessorSupport/decorators/subclass.js";import c from"../../../rest/support/AttachmentQuery.js";const d="esri.widgets.FeatureTable.support.FeatureStore",l=h.getLogger(d);function p(e,t,r){l.error(new o(e,t,r))}let _=class extends r{constructor(e){super(e),this._loaded=!1,this._loadError=!1,this._loading=!1,this._editOperationQueue=[],this._queryOperationQueue=[],this._objectIdCache=new a,this._hasStaleCache=!1,this.count=0,this.failures=new a,this.itemCache=new a,this.relatedRecordsEnabled=!1}destroy(){this.layer=null,this.itemCache&&this.itemCache.destroy(),this.failures&&this.failures.destroy(),this._set("itemCache",null)}set attachmentsEnabled(e){this._reset(),this._set("attachmentsEnabled",e),this.notifyChange("state")}set filterGeometry(e){this._reset(),this._set("filterGeometry",e),this.notifyChange("state")}set layer(e){this._reset(),this._set("layer",e),this.notifyChange("state")}set objectIds(e){this._reset(),this._set("objectIds",e||null),this.notifyChange("state")}get orderByFields(){return this._get("orderByFields")||[]}set orderByFields(e){const t=this.orderByFields;s(e,t)||(this.itemCache.removeAll(),this._hasStaleCache=!0,this._set("orderByFields",e))}get querying(){return this._queryOperationQueue.length>0}set returnGeometry(e){this._reset(),this._set("returnGeometry",e),this.notifyChange("state")}get state(){const{layer:e,_loaded:t,_loadError:r,_loading:s}=this;return r?"error":!e||this.get("layer.loadError")?"disabled":s?"loading":"loaded"===this.get("layer.loadStatus")&&t?"loaded":"ready"}get syncing(){return this._editOperationQueue.length>0}get where(){return this._get("where")||null}set where(e){this._reset(),this._set("where",e),this.notifyChange("state")}async load(){this._reset();const{layer:e}=this;if(e){this._loading=!0,this.notifyChange("state");try{await e.when(),await this._syncLayerInfo(),this._loading=!1,this._loaded=!0,this.notifyChange("state")}catch(t){throw this._reset(),this._loadError=!0,this.notifyChange("state"),p("store:load-error","An error ocurred.",{error:t}),t}}}async refreshLayerInfo(){return this._syncLayerInfo()}async addItems(e){}async fetchItems(e){const{page:t,pageSize:r}=e,s=t*r,i=s+r,{layer:a,state:o}=this;if(!a||"loaded"!==o)return[];this.notifyChange("querying");const n=await this._query({start:s,num:i,page:t,pageSize:r});return this.notifyChange("state"),n}async verifyFeaturesByObjectId(e){const{layer:t,state:r}=this;if(!t||"loaded"!==r)return[];const{features:s}=await this._verifyFeaturesByObjectId(e);return e.map((e=>s.some((t=>t?.getObjectId()===e))))}async query(e){const{layer:t,state:r}=this;if(!t||"loaded"!==r)return[];this.notifyChange("querying");const s=await this._query(e);return this.notifyChange("state"),s}async removeItemAt(e){}async reset(){this._reset()}async updateItem(e){return this._update(e)}getItemByObjectId(e){const{itemCache:t,layer:{objectIdField:r}}=this;return t.find((t=>t.feature.attributes[r]===e))}getLocalItemAt(e){return this.itemCache.getItemAt(e)}getItemAt(e){return Promise.resolve(this.itemCache.getItemAt(e))}getObjectIdIndex(e){const{itemCache:t,layer:{objectIdField:r}}=this;return t.findIndex((t=>t.feature.attributes[r]===e))}_reset(){this.itemCache.removeAll(),this.failures.removeAll(),this._editOperationQueue=[],this._queryOperationQueue=[],this._hasStaleCache=!1,this._loading=!1,this._loaded=!1,this._loadError=!1,this._set("count",0),this._objectIdCache.removeAll(),this.notifyChange("querying"),this.notifyChange("syncing"),this.notifyChange("state")}_getIdsFromFeatures(e){return e.map((e=>e.attributes[this.layer.objectIdField]))}_toFeatureData(e,t){const{layer:{objectIdField:r}}=this;return e.map((e=>{const{attributes:s}=e,i=s[r];return{objectId:i,feature:e,attachments:t?t[i]:null,relatedRecords:null}}))}async _update(e){const{layer:r}=this,{operations:s}=r.capabilities;if(!s.supportsUpdate||!("applyEdits"in r))throw new o("store:update-error","Update is not supported.");const{index:i,name:a,value:h}=e,u=await this.getItemAt(i);if(!u||!u.feature)throw new o("store:update-error","Feature with provided 'objectId' not found.");const{feature:y}=u,c=n(y.attributes);c[a]=h;const d=new t({attributes:c}),l=r.applyEdits({updateFeatures:[d]}).then((e=>{const{updateFeatureResults:t}=e,r=t.find((e=>!!e.error));if(r)throw r.error;return t.length&&(y.attributes=c),e}));return this._queueEditOperation((()=>l))}async _query(e){const{refresh:t}=e;return!0===t?(this.itemCache.removeAll(),this._syncLayerInfo().then((()=>this._queryFeatureData(e)))):(this._hasStaleCache&&(await this._updateIds(),this._hasStaleCache=!1),this._queryFeatureData(e))}async _queryFeatureData(e){return this._queueQueryOperation((async()=>{const{features:t}=await this._queryFeatures(e),r=this._getIdsFromFeatures(t),s=await this._queryAttachments(r);return this._toFeatureData(t,s)||[]}))}async _syncLayerInfo(){await this._updateCount(),await this._updateIds()}async _updateCount(){await this._queryCount().then((e=>this._set("count",e)))}async _updateIds(){this.layer?.capabilities?.query?.supportsPagination||(this._objectIdCache.removeAll(),await this._queryForObjectIds().then((e=>this._objectIdCache.addMany(e))))}_queryCount(){const{filterGeometry:e,layer:t}=this,{capabilities:{query:{supportsCacheHint:r}}}=t,s=t.createQuery();return s.geometry=e,s.returnGeometry=!1,s.where=this._getWhere(),s.objectIds=this.objectIds,r&&(s.cacheHint=!0),t.queryFeatureCount(s)}_queryForObjectIds(){const{filterGeometry:e,layer:t,orderByFields:r}=this,{capabilities:{query:{supportsCacheHint:s,supportsOrderBy:i}}}=t,a=t.createQuery();return a.geometry=e,a.outFields=[t.objectIdField],a.returnGeometry=!1,a.where=this._getWhere(),a.objectIds=this.objectIds,i&&(a.orderByFields=r),s&&(a.cacheHint=!0),t.queryObjectIds(a)}async _queryFeatures(e){const{layer:t}=this;if(!t.capabilities.operations.supportsQuery)throw new o("store:query-error","Layer does not support query operation.");const{filterGeometry:r,layer:{capabilities:{query:{supportsCacheHint:s,supportsOrderBy:i,supportsPagination:a}}},orderByFields:n,returnGeometry:h}=this,{start:u,pageSize:y}=e,c=t.createQuery();return c.returnGeometry=h,a?(c.start=u,c.num=y,c.where=this._getWhere(),c.objectIds=this.objectIds):c.objectIds=this.objectIds||this._getObjectIdsForPage(u,y),i&&(c.orderByFields=n),r&&(c.geometry=r),s&&(c.cacheHint=!0),t.queryFeatures(c)}async _verifyFeaturesByObjectId(e){const{layer:t}=this;if(!t.capabilities.operations.supportsQuery)throw new o("store:query-error","Layer does not support query operation.");const{filterGeometry:r,layer:{capabilities:{query:{supportsCacheHint:s,supportsOrderBy:i}}},orderByFields:a}=this,n=t.createQuery();return n.where=this._getWhere(),n.returnGeometry=!1,n.objectIds=e,n.outFields=[t.objectIdField],i&&(n.orderByFields=a),r&&(n.geometry=r),s&&(n.cacheHint=!0),t.queryFeatures(n)}_getObjectIdsForPage(e,t){const r=this._objectIdCache.toArray();return r.length>=e+t?r.slice(e,e+t):r.slice(e)}_queryAttachments(e){const{attachmentsEnabled:t,layer:r}=this,{capabilities:{data:{supportsAttachment:s},operations:{supportsQueryAttachments:i}}}=r;return t&&s&&i&&"queryAttachments"in r?r.queryAttachments(new c({objectIds:e,where:this._getWhere()})):Promise.resolve(null)}_queueQueryOperation(e){return this._queryOperationQueue.push(e),this.notifyChange("querying"),e().then((t=>this._queryOperationQueue.includes(e)?(this.itemCache.addMany(t),t):[])).catch((t=>{p("store:query-error","An error ocurred.",{error:t});const r={error:t,retry:()=>{this.failures.remove(r),this._queueQueryOperation(e)},cancel:()=>this.failures.remove(r)};return this.failures.add(r),[]})).then((t=>(i(this._queryOperationQueue,e),this.notifyChange("querying"),t)))}_queueEditOperation(e){return this._editOperationQueue.push(e),this.notifyChange("syncing"),e().then((()=>{i(this._editOperationQueue,e),this.notifyChange("syncing")})).catch((t=>{p("store:edit-error","An error ocurred.",{error:t});const r={error:t,retry:()=>{this.failures.remove(r),this._queueEditOperation(e)},cancel:()=>this.failures.remove(r)};throw this.failures.add(r),i(this._editOperationQueue,e),this.notifyChange("syncing"),t}))}_getWhere(){return this.where||this.layer.definitionExpression||"1=1"}};e([u()],_.prototype,"attachmentsEnabled",null),e([u({readOnly:!0})],_.prototype,"count",void 0),e([u({readOnly:!0})],_.prototype,"failures",void 0),e([u()],_.prototype,"filterGeometry",null),e([u({readOnly:!0})],_.prototype,"itemCache",void 0),e([u({value:null})],_.prototype,"layer",null),e([u({value:null})],_.prototype,"objectIds",null),e([u()],_.prototype,"orderByFields",null),e([u({readOnly:!0})],_.prototype,"querying",null),e([u()],_.prototype,"relatedRecordsEnabled",void 0),e([u({value:!1})],_.prototype,"returnGeometry",null),e([u({readOnly:!0})],_.prototype,"state",null),e([u({readOnly:!0})],_.prototype,"syncing",null),e([u()],_.prototype,"where",null),_=e([y(d)],_);const m=_;export{m as default};