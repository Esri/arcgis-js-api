/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../Graphic","../../../request","../../../TimeExtent","../../../core/Error","../../../core/has","../../../core/jsonMap","../../../core/Loadable","../../../core/maybe","../../../core/object","../../../core/promiseUtils","../../../core/urlUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../geometry/Extent","../../../geometry/support/jsonUtils","./support/clientSideDefaults","../../../rest/query/operations/queryAttachments","../../../rest/query/operations/zscale","../../../tasks/QueryTask","../../../geometry/SpatialReference"],(function(e,t,r,n,s,a,u,i,o,l,c,d,y,p,h,f,m,_,g,R,F,b,q,I,v){"use strict";const T=new o.JSONMap({originalAndCurrentFeatures:"original-and-current-features",none:"none"});function O(e){return S.apply(this,arguments)}function S(){return(S=e._asyncToGenerator((function*(e){if("string"==typeof e){const t=p.dataComponents(e);return t||{data:e}}return new Promise(((t,r)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>t(p.dataComponents(n.result)),n.onerror=e=>r(e)}))}))).apply(this,arguments)}const E=new Set(["Feature Layer","Table"]);let A=function(t){function r(){var r;return(r=t.apply(this,arguments)||this).type="feature-layer",r.refresh=y.debounce(e._asyncToGenerator((function*(){var e,t;yield r.load();const n=null==(e=r.sourceJSON.editingInfo)?void 0:e.lastEditDate;if(null==n)return{hasUpdates:!0,updates:{}};try{yield r._fetchService(null)}catch{return{hasUpdates:!0,updates:{}}}const s=n!==(null==(t=r.sourceJSON.editingInfo)?void 0:t.lastEditDate);return{hasUpdates:s,updates:s?{editingInfo:r.sourceJSON.editingInfo,extent:r.sourceJSON.extent}:null}}))),r}e._inheritsLoose(r,t);var o=r.prototype;return o.load=function(e){const t=c.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)},o.addAttachment=function(){var t=e._asyncToGenerator((function*(e,t){yield this.load();const r=e.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+r+"/addAttachment",a=this._getLayerRequestOptions(),u=this._getFormDataForAttachment(t,a.query);try{const e=yield s(n,{body:u});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(i){throw this._createAttachmentErrorResult(r,i)}}));function r(e,r){return t.apply(this,arguments)}return r}(),o.updateAttachment=function(){var t=e._asyncToGenerator((function*(e,t,r){yield this.load();const n=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+n+"/updateAttachment",u=this._getLayerRequestOptions({query:{attachmentId:t}}),i=this._getFormDataForAttachment(r,u.query);try{const e=yield s(a,{body:i});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(n,o)}}));function r(e,r,n){return t.apply(this,arguments)}return r}(),o.applyEdits=function(){var t=e._asyncToGenerator((function*(e,t){yield this.load();const r=e.addFeatures.map(this._serializeFeature,this),n=e.updateFeatures.map(this._serializeFeature,this),a=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed);q.unapplyEditsZUnitScaling(r,n,this.layer.spatialReference);const u=[],i=[],o=[...e.deleteAttachments];for(const s of e.addAttachments)u.push(yield this._serializeAttachment(s));for(const s of e.updateAttachments)i.push(yield this._serializeAttachment(s));const l=u.length||i.length||o.length?{adds:u,updates:i,deletes:o}:null,c={gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,returnEditMoment:null==t?void 0:t.returnEditMoment,usePreviousEditMoment:null==t?void 0:t.usePreviousEditMoment,sessionId:null==t?void 0:t.sessionId};null!=t&&t.returnServiceEditsOption?(c.edits=JSON.stringify([{id:this.layer.layerId,adds:r,updates:n,deletes:a,attachments:l}]),c.returnServiceEditsOption=T.toJSON(null==t?void 0:t.returnServiceEditsOption),c.returnServiceEditsInSourceSR=null==t?void 0:t.returnServiceEditsInSourceSR):(c.adds=r.length?JSON.stringify(r):null,c.updates=n.length?JSON.stringify(n):null,c.deletes=a.length?null!=t&&t.globalIdUsed?JSON.stringify(a):a.join(","):null,c.attachments=l&&JSON.stringify(l));const d=this._getLayerRequestOptions({method:"post",query:c}),y=null!=t&&t.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,p=yield s(y+"/applyEdits",d);return this._createEditsResult(p)}));function r(e,r){return t.apply(this,arguments)}return r}(),o.deleteAttachments=function(){var t=e._asyncToGenerator((function*(e,t){yield this.load();const r=e.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(yield s(n,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(a){throw this._createAttachmentErrorResult(r,a)}}));function r(e,r){return t.apply(this,arguments)}return r}(),o.fetchRecomputedExtents=function(t={}){var r=this;const n=t.signal;return this.load({signal:n}).then(e._asyncToGenerator((function*(){const e=r._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:n,url:u}=r.layer,{data:i}=yield s(`${u}/${n}`,e),{id:o,extent:l,fullExtent:c,timeExtent:d}=i,y=l||c;return{id:o,fullExtent:y&&g.fromJSON(y),timeExtent:d&&a.fromJSON({start:d[0],end:d[1]})}})))},o.queryAttachments=function(){var t=e._asyncToGenerator((function*(e,t={}){const{parsedUrl:r}=this.layer,n=r.path;yield this.load();const a=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,r=[];for(const e of t){const t=n+"/"+e+"/attachments";r.push(s(t,a))}return Promise.all(r).then((e=>t.map(((t,r)=>({parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}))))).then((e=>b.processAttachmentQueryResult(e,n)))}return this.queryTask.executeAttachmentQuery(e,a)}));function r(e){return t.apply(this,arguments)}return r}(),o.queryFeatures=function(){var t=e._asyncToGenerator((function*(e,t){return yield this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}));function r(e,r){return t.apply(this,arguments)}return r}(),o.queryFeaturesJSON=function(){var t=e._asyncToGenerator((function*(e,t){return yield this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}));function r(e,r){return t.apply(this,arguments)}return r}(),o.queryObjectIds=function(){var t=e._asyncToGenerator((function*(e,t){return yield this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}));function r(e,r){return t.apply(this,arguments)}return r}(),o.queryFeatureCount=function(){var t=e._asyncToGenerator((function*(e,t){return yield this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}));function r(e,r){return t.apply(this,arguments)}return r}(),o.queryExtent=function(){var t=e._asyncToGenerator((function*(e,t){return yield this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}));function r(e,r){return t.apply(this,arguments)}return r}(),o.queryRelatedFeatures=function(){var t=e._asyncToGenerator((function*(e,t){return yield this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}));function r(e,r){return t.apply(this,arguments)}return r}(),o.queryRelatedFeaturesCount=function(){var t=e._asyncToGenerator((function*(e,t){return yield this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}));function r(e,r){return t.apply(this,arguments)}return r}(),o.queryTopFeatures=function(){var t=e._asyncToGenerator((function*(e,t){return yield this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}));function r(e,r){return t.apply(this,arguments)}return r}(),o.queryTopObjectIds=function(){var t=e._asyncToGenerator((function*(e,t){return yield this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}));function r(e,r){return t.apply(this,arguments)}return r}(),o.queryTopExtents=function(){var t=e._asyncToGenerator((function*(e,t){return yield this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}));function r(e,r){return t.apply(this,arguments)}return r}(),o.queryTopCount=function(){var t=e._asyncToGenerator((function*(e,t){return yield this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}));function r(e,r){return t.apply(this,arguments)}return r}(),o._createRequestQueryOptions=function(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...null==e?void 0:e.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t},o._fetchService=function(){var t=e._asyncToGenerator((function*(e,t){if(!e){const{data:r}=yield s(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:i("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=r}this.sourceJSON=this._patchServiceJSON(e);const r=e.type;if(!E.has(r))throw new u("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}));function r(e,r){return t.apply(this,arguments)}return r}(),o._patchServiceJSON=function(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=F.createDrawingInfo(e.geometryType).renderer;d.setDeepValue("drawingInfo.renderer",t,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e},o._serializeFeature=function(e){const{geometry:t,attributes:r}=e;return c.isNone(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}},o._serializeAttachment=function(){var t=e._asyncToGenerator((function*(e){const{feature:t,attachment:r}=e,{globalId:n,name:s,contentType:a,data:u,uploadId:i}=r,o={globalId:n,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(o.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),i)o.uploadId=i;else if(u){const e=yield O(u);o.contentType=e.mediaType,o.data=e.data,u instanceof File&&(o.name=u.name)}return s&&(o.name=s),a&&(o.contentType=a),o}));function r(e){return t.apply(this,arguments)}return r}(),o._getFeatureIds=function(e,t){const r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]},o._getIdsFromFeatures=function(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))},o._canUseGlobalIds=function(e,t){return e&&"globalId"in t[0]},o._getObjectIdsFromFeatureIdentifier=function(e){return e.map((e=>e.objectId))},o._getGlobalIdsFromFeatureIdentifier=function(e){return e.map((e=>e.globalId))},o._createEditsResult=function(e){var t;const r=e.data,{layerId:n}=this.layer,s=[];let a=null;if(Array.isArray(r))for(const o of r)s.push({id:o.id,editedFeatures:o.editedFeatures}),o.id===n&&(a={addResults:o.addResults,updateResults:o.updateResults,deleteResults:o.deleteResults,attachments:o.attachments,editMoment:o.editMoment});else a=r;const u=null==(t=a)?void 0:t.attachments,i={addFeatureResults:a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:u&&u.addResults?u.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:u&&u.updateResults?u.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:u&&u.deleteResults?u.deleteResults.map(this._createFeatureEditResult,this):[]};if(a.editMoment&&(i.editMoment=a.editMoment),s.length>0){i.editedFeatureResults=[];for(const e of s){const{adds:t,updates:r,deletes:n,spatialReference:s}=e.editedFeatures,a=s?new v(s):null;i.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==t?void 0:t.map((e=>this._createEditedFeature(e,a))))||[],updates:(null==r?void 0:r.map((e=>({original:this._createEditedFeature(e[0],a),current:this._createEditedFeature(e[1],a)}))))||[],deletes:(null==n?void 0:n.map((e=>this._createEditedFeature(e,a))))||[],spatialReference:a}})}}return i},o._createEditedFeature=function(e,t){return new n({attributes:e.attributes,geometry:R.fromJSON({...e.geometry,spatialReference:t})})},o._createFeatureEditResult=function(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new u("feature-layer-source:edit-failure",t.description,{code:t.code}):null}},o._createAttachmentErrorResult=function(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,n=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new u("feature-layer-source:attachment-failure",r,{code:n})}},o._getFormDataForAttachment=function(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const n in t){const e=t[n];null!=e&&(r.set?r.set(n,e):r.append(n,e))}return r},o._getLayerRequestOptions=function(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:n}=this.layer;return{...e,query:{gdbVersion:r,layer:n?JSON.stringify({source:n}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}},e._createClass(r,[{key:"queryTask",get:function(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:r,infoFor3D:n,gdbVersion:s,spatialReference:a,fieldsIndex:u}=this.layer,o=i("featurelayer-pbf")&&e&&c.isNone(n)?"pbf":"json";return new I({url:t.path,format:o,fieldsIndex:u,infoFor3D:n,dynamicDataSource:r,gdbVersion:s,sourceSpatialReference:a})}}]),r}(l);return t.__decorate([h.property()],A.prototype,"type",void 0),t.__decorate([h.property({constructOnly:!0})],A.prototype,"layer",void 0),t.__decorate([h.property({readOnly:!0})],A.prototype,"queryTask",null),A=t.__decorate([_.subclass("esri.layers.graphics.sources.FeatureLayerSource")],A),A}));
