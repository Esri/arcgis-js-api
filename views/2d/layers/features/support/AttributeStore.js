/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../../../../../core/has","../../../../../core/Logger","../../../../../core/mathUtils","../../../../../core/maybe","../../../../../core/promiseUtils","../../../../../core/accessorSupport/diffUtils","../../../../../layers/support/FieldsIndex","../../../engine/webgl/definitions","../../../engine/webgl/Utils","../../../engine/webgl/util/debug","../tileRenderers/support/visualVariablesUtils"],(function(t,e,i,s,r,n,a,o,l,u,h,c,d,p,f){"use strict";function _(t){return Object.freeze({__proto__:null,default:t})}const g=n.getLogger("esri.views.layers.2d.features.support.AttributeStore"),y=p.createDebugLogger(p.DEBUG_ATTR_UPDATES,g),m=2147483647,b=2147483648,x=254,T=255,A=0,S=1,z=t=>(t&b)>>>31,E=t=>t&m,D=t=>z(t)===S?x:T;function k(t){return z(t)===S}const w={sharedArrayBuffer:r("esri-shared-array-buffer"),atomics:r("esri-atomics")};function R(t,e){return i=>e(t(i))}let U=function(){function t(t,e,i,s){this.size=0,this.texelSize=4;const{pixelType:r,layout:n,textureOnly:a}=s;this.textureOnly=a||!1,this.pixelType=r,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=i,a||(this.data=this._initData(r,i,t,e))}var e=t.prototype;return e.unsetComponentAllTexels=function(t,e){const i=o.unwrap(this.data);for(let s=0;s<this.size*this.size;s++)i[s*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1},e.setComponentAllTexels=function(t,e){const i=o.unwrap(this.data);for(let s=0;s<this.size*this.size;s++)i[s*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1},e.setComponent=function(t,e,i){const s=o.unwrap(this.data);for(const r of i)s[r*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)},e.setComponentTexel=function(t,e,i){o.unwrap(this.data)[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)},e.unsetComponentTexel=function(t,e,i){o.unwrap(this.data)[i*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)},e.getData=function(t,e){const i=E(t);return o.unwrap(this.data)[i*this.texelSize+e]},e.setData=function(t,e,i){const s=E(t),r=1<<e;0!=(this.layout&r)?(this.data[s*this.texelSize+e]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)):g.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")},e.lock=function(){5121===this.pixelType&&this._shared&&w.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)},e.unlock=function(){5121===this.pixelType&&this._shared&&w.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)},e.expand=function(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),i=o.unwrap(this.data);e.set(i),this.data=e}},e.toMessage=function(){const t=this.dirtyStart,e=this.dirtyEnd,i=this.texelSize;if(t>e)return null;this._resetRange();const s=!(this._shared||"local"===this._ctype),r=this.pixelType,n=this.layout,a=o.unwrap(this.data);return{start:t,end:e,data:s&&a.slice(t*i,(e+1)*i)||null,pixelType:r,layout:n}},e._initData=function(t,e,i,s){const r=i&&"local"!==s?SharedArrayBuffer:ArrayBuffer,n=d.getPixelArrayCtor(t),a=new n(new r(e*e*4*n.BYTES_PER_ELEMENT));for(let o=0;o<a.length;o+=4)a[o+1]=255;return a},e._resetRange=function(){this.dirtyStart=2147483647,this.dirtyEnd=0},i._createClass(t,[{key:"buffer",get:function(){return o.andThen(this.data,(t=>t.buffer))}}]),t}(),I=function(){function e(t,e){this._client=t,this.config=e,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(c.MAX_FILTERS),this._targetType=0,this._abortController=l.createAbortController(),this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const i=e.supportsTextureFloat?5126:5121;y(`Creating AttributeStore ${w.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:5121,layout:1},{pixelType:5121,layout:15,textureOnly:!0},{pixelType:i,layout:15},{pixelType:i,layout:15}],this._blocks=this._blockDescriptors.map((()=>null))}var n=e.prototype;return n.destroy=function(){this._abortController.abort()},n.update=function(t,e){this.config=e;const i=e.schema.processors[0].storage,s=u.diff(this._schema,i);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),s&&(r("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",s),t.storage.data=!0,this._schema=i,this._attributeComputeMap.clear(),!o.isNone(i))){switch(i.target){case"feature":this._targetType=A;break;case"aggregate":this._targetType=S}if("subtype"===i.type)for(const t in i.mapping){const e=i.mapping[t];if(o.isSome(e))for(const t of e.mapping)this._bindAttribute(t)}else for(const t of i.mapping)this._bindAttribute(t)}},n.onTileData=function(t,e){if(o.isNone(e.addOrUpdate))return;const i=e.addOrUpdate.getCursor();for(;i.next();){const t=i.getDisplayId();this.setAttributeData(t,i)}},n.invalidateResources=function(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=l.createAbortController()},n.setHighlight=function(){var t=i._asyncToGenerator((function*(t,e){const i=1,s=this._getBlock(0),r=e.map((t=>E(t)));s.lock(),s.unsetComponentAllTexels(0,i),s.setComponent(0,i,r),s.unlock(),this._idsToHighlight.clear();for(const n of t)this._idsToHighlight.add(n);yield this.sendUpdates()}));function e(e,i){return t.apply(this,arguments)}return e}(),n.updateFilters=function(){var t=i._asyncToGenerator((function*(t,e){const{config:i,service:s,spatialReference:n}=e,{filters:a}=i,o=a.map(((t,e)=>this._updateFilter(t,e,s,n)));(yield Promise.all(o)).some((t=>t))&&(t.storage.filters=!0,r("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}));function e(e,i){return t.apply(this,arguments)}return e}(),n.setData=function(t,e,i,s){const r=E(t);this._ensureSizeForTexel(r),this._getBlock(e).setData(t,i,s)},n.getData=function(t,e,i){return this._getBlock(e).getData(t,i)},n.getHighlightFlag=function(t){return this._idsToHighlight.has(t)?c.HIGHLIGHT_FLAG:0},n.unsetAttributeData=function(t){const e=E(t);this._getBlock(0).setData(e,0,0)},n.setAttributeData=function(t,e){const i=E(t);if(this._ensureSizeForTexel(i),this._getBlock(0).setData(i,0,this.getFilterFlags(e)),this._targetType!==z(t))return;const s=this._attributeComputeMap,r=this.config.supportsTextureFloat?1:2,n=4;s.size&&s.forEach(((t,s)=>{const o=s*r%n,l=Math.floor(s*r/n),u=this._getBlock(l+c.ATTRIBUTE_DATA_VV),h=t(e);if(this.config.supportsTextureFloat)u.setData(i,o,h);else if(h===c.NAN_MAGIC_NUMBER)u.setData(i,o,255),u.setData(i,o+1,255);else{const t=a.clamp(Math.round(h),-32767,32766)+32768,e=255&t,s=(65280&t)>>8;u.setData(i,o,e),u.setData(i,o+1,s)}}))},n.sendUpdates=function(){if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=l.createResolver(),this._nextUpdate.promise;const t={blocks:this._blocks.map((t=>o.isSome(t)?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()))}},i=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),i})).catch((t=>l.isAbortError(t)?(this._createResourcesPromise=null,this._createResources()):(g.error(new s("mapview-attribute-store","Encountered an error during client update",t)),Promise.resolve()))),this._currUpdate},n._ensureSizeForTexel=function(t){for(;t>=this._size*this._size;)if(this._expand())return},n._bindAttribute=function(t){function e(){return t.normalizationField?e=>{const i=e.readAttribute(t.normalizationField);if(!i)return null;return e.readAttribute(t.field)/i}:e=>e.readAttribute(t.field)}function i(){return t.normalizationField&&g.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),e=>e.getComputedNumericAtIndex(t.fieldIndex)}let s;if(null!=t.fieldIndex)s=i();else{if(!t.field)return;s=e()}if(t.valueRepresentation){s=R(s,(e=>f.getVisualVariableSizeValueRepresentationRatio(e,t.valueRepresentation)))}const r=t=>null===t||isNaN(t)||t===1/0?c.NAN_MAGIC_NUMBER:t;this._attributeComputeMap.set(t.binding,R(s,r))},n._createResources=function(){if(o.isSome(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(c.ATTRIBUTE_DATA_ANIMATION),y("Initializing AttributeStore");const t={shared:w.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:o.mapMany(this._blocks,(t=>({textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType})))},e=this._client.initialize(t,this._signal).catch((t=>{l.isAbortError(t)?this._createResourcesPromise=null:g.error(new s("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=e,e.then((()=>o.isNone(this._createResourcesPromise)?this._createResources():void 0)),e},n._getBlock=function(t){const e=this._blocks[t];if(o.isSome(e))return e;y(`Initializing AttributeBlock at index ${t}`);const i=w.sharedArrayBuffer,s=this._client.type,r=new U(i,s,this._size,this._blockDescriptors[t]);return this._blocks[t]=r,this._createResourcesPromise=null,r},n._expand=function(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return y("Expanding block size to",t,this._blocks),o.forEachSome(this._blocks,(e=>e.expand(t))),this._createResourcesPromise=null,this._size=t,0}return g.error(new s("mapview-limitations","Maximum number of onscreen features exceeded.")),-1},n._updateFilter=function(){var t=i._asyncToGenerator((function*(t,e,i,s){const r=this._filters[e],n=o.isSome(r)&&r.hash;if(!r&&!t)return!1;if(n===JSON.stringify(t))return!1;if(o.isNone(t)){if(!r)return!1;const t=1<<e+1,i=this._getBlock(0);return this._filters[e]=null,i.setComponentAllTexels(0,t),this.sendUpdates(),!0}const a=yield this._getFilter(e,i);return yield a.update(t,s),!0}));function e(e,i,s,r){return t.apply(this,arguments)}return e}(),n._getFilter=function(){var e=i._asyncToGenerator((function*(e,i){const s=this._filters[e];if(o.isSome(s))return s;const{default:r}=yield new Promise((function(e,i){t(["../../../../../layers/graphics/data/FeatureFilter"],(function(t){e(_(t))}),i)})),n=new r({geometryType:i.geometryType,hasM:!1,hasZ:!1,timeInfo:i.timeInfo,fieldsIndex:new h(i.fields)});return this._filters[e]=n,n}));function s(t,i){return e.apply(this,arguments)}return s}(),n.isVisible=function(t){return!!(2&this._getBlock(0).getData(t,0))},n.getFilterFlags=function(t){let e=0;const i=D(t.getDisplayId());for(let r=0;r<this._filters.length;r++){const s=!!(i&1<<r),n=this._filters[r];e|=(!s||o.isNone(n)||n.check(t)?1:0)<<r}let s=0;if(this._idsToHighlight.size){const e=t.getObjectId();s=this.getHighlightFlag(e)}return e<<1|s},i._createClass(e,[{key:"hasScaleExpr",get:function(){return this._hasScaleExpr}},{key:"_signal",get:function(){return this._abortController.signal}}]),e}();e.DISPLAY_ID_TYPE_AGGREGATE=S,e.DISPLAY_ID_TYPE_FEATURE=A,e.default=I,e.getDisplayIdFilterMask=D,e.getDisplayIdTexel=E,e.getDisplayIdType=z,e.isAggregateId=k,Object.defineProperty(e,"__esModule",{value:!0})}));
