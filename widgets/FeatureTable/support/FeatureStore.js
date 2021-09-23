/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Accessor","../../../core/arrayUtils","../../../core/Collection","../../../core/Error","../../../core/lang","../../../core/Logger","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../rest/support/AttachmentQuery"],(function(e,t,r,n,o,i,s,a,u,c,h,y,l,d){"use strict";const p="esri.widgets.FeatureTable.support.FeatureStore",_=u.getLogger(p);function f(e,t,r){_.error(new s(e,t,r))}let g=function(t){function n(e){var r;return(r=t.call(this,e)||this)._loaded=!1,r._loadError=!1,r._loading=!1,r._editOperationQueue=[],r._queryOperationQueue=[],r._objectIds=new i,r._hasStaleCache=!1,r.count=0,r.failures=new i,r.itemCache=new i,r.relatedRecordsEnabled=!1,r}e._inheritsLoose(n,t);var u=n.prototype;return u.destroy=function(){this.layer=null,this.itemCache&&this.itemCache.destroy(),this.failures&&this.failures.destroy(),this._set("itemCache",null)},u.load=function(){var t=e._asyncToGenerator((function*(){this._reset();const{layer:e}=this;if(!e)return Promise.resolve();this._loading=!0,this.notifyChange("state");try{yield e.when(),yield this._syncLayerInfo(),this._loading=!1,this._loaded=!0,this.notifyChange("state")}catch(t){throw this._reset(),this._loadError=!0,this.notifyChange("state"),f("store:load-error","An error ocurred.",{error:t}),t}}));function r(){return t.apply(this,arguments)}return r}(),u.addItems=function(){var t=e._asyncToGenerator((function*(e){}));function r(e){return t.apply(this,arguments)}return r}(),u.fetchItems=function(){var t=e._asyncToGenerator((function*(e){const{page:t,pageSize:r}=e,n=t*r,o=n+r,{layer:i,state:s}=this;if(!i||"loaded"!==s)return Promise.resolve([]);this.notifyChange("querying");const a=yield this._query({start:n,num:o,page:t,pageSize:r});return this.notifyChange("state"),a}));function r(e){return t.apply(this,arguments)}return r}(),u.query=function(){var t=e._asyncToGenerator((function*(e){const{layer:t,state:r}=this;if(!t||"loaded"!==r)return[];this.notifyChange("querying");const n=yield this._query(e);return this.notifyChange("state"),n}));function r(e){return t.apply(this,arguments)}return r}(),u.removeItemAt=function(){var t=e._asyncToGenerator((function*(e){}));function r(e){return t.apply(this,arguments)}return r}(),u.reset=function(){var t=e._asyncToGenerator((function*(){this._reset()}));function r(){return t.apply(this,arguments)}return r}(),u.updateItem=function(){var t=e._asyncToGenerator((function*(e){return this._update(e)}));function r(e){return t.apply(this,arguments)}return r}(),u.getItemByObjectId=function(e){const{itemCache:t,layer:{objectIdField:r}}=this;return t.find((t=>t.feature.attributes[r]===e))},u.getLocalItemAt=function(e){return this.itemCache.getItemAt(e)},u.getItemAt=function(e){return Promise.resolve(this.itemCache.getItemAt(e))},u.getObjectIdIndex=function(e){const{itemCache:t,layer:{objectIdField:r}}=this;return t.findIndex((t=>t.feature.attributes[r]===e))},u._reset=function(){this.itemCache.removeAll(),this.failures.removeAll(),this._editOperationQueue=[],this._queryOperationQueue=[],this._hasStaleCache=!1,this._loading=!1,this._loaded=!1,this._loadError=!1,this._set("count",0),this._objectIds.removeAll(),this.notifyChange("querying"),this.notifyChange("syncing"),this.notifyChange("state")},u._getIdsFromFeatures=function(e){return e.map((e=>e.attributes[this.layer.objectIdField]))},u._toFeatureData=function(e,t){const{layer:{objectIdField:r}}=this;return e.map((e=>{const{attributes:n}=e,o=n[r];return{objectId:o,feature:e,attachments:t?t[o]:null,relatedRecords:null}}))},u._update=function(){var t=e._asyncToGenerator((function*(e){const{layer:t}=this,{operations:n}=t.capabilities;if(!n.supportsUpdate||"wfs"===t.type||"imagery"===t.type)throw new s("store:update-error","Update is not supported.");const{index:o,name:i,value:u}=e,c=yield this.getItemAt(o);if(!c||!c.feature)throw new s("store:update-error","Feature with provided 'objectId' not found.");const{feature:h}=c,y=a.clone(h.attributes);y[i]=u;const l=new r({attributes:y}),d=t.applyEdits({updateFeatures:[l]}).then((e=>{const{updateFeatureResults:t}=e,r=t.find((e=>!!e.error));if(r)throw r.error;return this._editOperationQueue.indexOf((()=>d))>-1&&t&&t.length&&(h.attributes=y),e}));return this._queueEditOperation((()=>d))}));function n(e){return t.apply(this,arguments)}return n}(),u._query=function(){var t=e._asyncToGenerator((function*(e){const{refresh:t}=e;return!0===t?(this.itemCache.removeAll(),this._syncLayerInfo().then((()=>this._queryFeatureData(e)))):(this._hasStaleCache&&(yield this._updateIds(),this._hasStaleCache=!1),this._queryFeatureData(e))}));function r(e){return t.apply(this,arguments)}return r}(),u._queryFeatureData=function(){var t=e._asyncToGenerator((function*(t){var r=this;return this._queueQueryOperation(e._asyncToGenerator((function*(){const{features:e}=yield r._queryFeatures(t),n=r._getIdsFromFeatures(e),o=yield r._queryAttachments(n);return r._toFeatureData(e,o)||[]})))}));function r(e){return t.apply(this,arguments)}return r}(),u._syncLayerInfo=function(){var t=e._asyncToGenerator((function*(){yield this._updateCount(),yield this._updateIds()}));function r(){return t.apply(this,arguments)}return r}(),u._updateCount=function(){var t=e._asyncToGenerator((function*(){yield this._queryCount().then((e=>this._set("count",e)))}));function r(){return t.apply(this,arguments)}return r}(),u._updateIds=function(){var t=e._asyncToGenerator((function*(){var e,t,r;null!=(e=this.layer)&&null!=(t=e.capabilities)&&null!=(r=t.query)&&r.supportsPagination||(this._objectIds.removeAll(),yield this._queryObjectIds().then((e=>this._objectIds.addMany(e))))}));function r(){return t.apply(this,arguments)}return r}(),u._queryCount=function(){const{filterGeometry:e,layer:t,returnGeometry:r}=this,n=t.createQuery();return n.geometry=e,n.returnGeometry=r,n.where=this._getWhere(),t.queryFeatureCount(n)},u._queryObjectIds=function(){const{filterGeometry:e,layer:t,orderByFields:r,returnGeometry:n}=this,{capabilities:{query:{supportsCacheHint:o,supportsOrderBy:i}}}=t;if("geojson"===t.type||"wfs"===t.type||"imagery"===t.type)return Promise.resolve([]);const s=t.createQuery();return s.geometry=e,s.outFields=[t.objectIdField],s.returnGeometry=n,s.where=this._getWhere(),i&&(s.orderByFields=r),o&&(s.cacheHint=!0),t.queryObjectIds(s)},u._queryFeatures=function(){var t=e._asyncToGenerator((function*(e){const{layer:t}=this;if(!t.capabilities.operations.supportsQuery)return Promise.reject(new s("store:query-error","Layer does not support query operation."));const{filterGeometry:r,layer:{capabilities:{query:{supportsCacheHint:n,supportsOrderBy:o,supportsPagination:i}}},orderByFields:a,returnGeometry:u}=this,{start:c,pageSize:h}=e,y=t.createQuery();return y.returnGeometry=u,i?(y.start=c,y.num=h,y.where=this._getWhere()):y.objectIds=this._getObjectIdsForPage(c,h),o&&(y.orderByFields=a),r&&(y.geometry=r),n&&(y.cacheHint=!0),t.queryFeatures(y)}));function r(e){return t.apply(this,arguments)}return r}(),u._getObjectIdsForPage=function(e,t){const r=this._objectIds.toArray();return r.length>=e+t?r.slice(e,e+t):r.slice(e)},u._queryAttachments=function(e){const{attachmentsEnabled:t,layer:r}=this,{capabilities:{data:{supportsAttachment:n},operations:{supportsQueryAttachments:o}}}=r;return t&&n&&o&&"geojson"!==r.type&&"wfs"!==r.type&&"imagery"!==r.type?r.queryAttachments(new d({objectIds:e,where:this._getWhere()})):Promise.resolve(null)},u._queueQueryOperation=function(e){return this._queryOperationQueue.push(e),this.notifyChange("querying"),e().then((t=>this._queryOperationQueue.indexOf(e)>-1?(this.itemCache.addMany(t),t):[])).catch((t=>{f("store:query-error","An error ocurred.",{error:t});const r={error:t,retry:()=>{this.failures.remove(r),this._queueQueryOperation(e)},cancel:()=>this.failures.remove(r)};return this.failures.add(r),[]})).then((t=>(o.remove(this._queryOperationQueue,e),this.notifyChange("querying"),t)))},u._queueEditOperation=function(e){return this._editOperationQueue.push(e),this.notifyChange("syncing"),e().then((()=>{o.remove(this._editOperationQueue,e),this.notifyChange("syncing")})).catch((t=>{f("store:edit-error","An error ocurred.",{error:t});const r={error:t,retry:()=>{this.failures.remove(r),this._queueEditOperation(e)},cancel:()=>this.failures.remove(r)};throw this.failures.add(r),o.remove(this._editOperationQueue,e),this.notifyChange("syncing"),t}))},u._getWhere=function(){return this.where||this.layer.definitionExpression||"1=1"},e._createClass(n,[{key:"attachmentsEnabled",set:function(e){this._reset(),this._set("attachmentsEnabled",e),this.notifyChange("state")}},{key:"filterGeometry",set:function(e){this._reset(),this._set("filterGeometry",e),this.notifyChange("state")}},{key:"layer",set:function(e){this._reset(),this._set("layer",e),this.notifyChange("state")}},{key:"orderByFields",get:function(){return this._get("orderByFields")||[]},set:function(e){const t=this.orderByFields;o.equals(e,t)||(this.itemCache.removeAll(),this._hasStaleCache=!0,this._set("orderByFields",e))}},{key:"querying",get:function(){return this._queryOperationQueue.length>0}},{key:"returnGeometry",set:function(e){this._reset(),this._set("returnGeometry",e),this.notifyChange("state")}},{key:"state",get:function(){const{layer:e,_loaded:t,_loadError:r,_loading:n}=this;return r?"error":!e||this.get("layer.loadError")?"disabled":n?"loading":"loaded"===this.get("layer.loadStatus")&&t?"loaded":"ready"}},{key:"syncing",get:function(){return this._editOperationQueue.length>0}},{key:"where",get:function(){return this._get("where")||null},set:function(e){this._reset(),this._set("where",e),this.notifyChange("state")}}]),n}(n);return t.__decorate([c.property()],g.prototype,"attachmentsEnabled",null),t.__decorate([c.property({readOnly:!0})],g.prototype,"count",void 0),t.__decorate([c.property({readOnly:!0})],g.prototype,"failures",void 0),t.__decorate([c.property()],g.prototype,"filterGeometry",null),t.__decorate([c.property({readOnly:!0})],g.prototype,"itemCache",void 0),t.__decorate([c.property({value:null})],g.prototype,"layer",null),t.__decorate([c.property()],g.prototype,"orderByFields",null),t.__decorate([c.property({readOnly:!0})],g.prototype,"querying",null),t.__decorate([c.property()],g.prototype,"relatedRecordsEnabled",void 0),t.__decorate([c.property({value:!1})],g.prototype,"returnGeometry",null),t.__decorate([c.property({readOnly:!0})],g.prototype,"state",null),t.__decorate([c.property({readOnly:!0})],g.prototype,"syncing",null),t.__decorate([c.property()],g.prototype,"where",null),g=t.__decorate([l.subclass(p)],g),g}));
