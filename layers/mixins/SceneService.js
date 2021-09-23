/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../request","../../core/Error","../../core/has","../../core/Logger","../../core/maybe","../../core/promiseUtils","../../core/urlUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../core/accessorSupport/originUtils","../../geometry/Extent","../../geometry/HeightModelInfo","../../geometry/SpatialReference","../support/arcgisLayerUrl","../support/commonProperties","../support/I3SIndexInfo","../../portal/Portal","../../portal/PortalItem","../../webdoc/support/saveUtils"],(function(e,t,r,o,i,n,a,s,l,p,c,u,d,y,h,f,m,v,_,S,g,I,x,b,w,T){"use strict";const R=s.getLogger("esri.layers.mixins.SceneService"),N=t=>{let a=function(t){function o(){var e;return(e=t.apply(this,arguments)||this).spatialReference=null,e.fullExtent=null,e.heightModelInfo=null,e.minScale=0,e.maxScale=0,e.version={major:Number.NaN,minor:Number.NaN,versionString:""},e.copyright=null,e.sublayerTitleMode="item-title",e.title=null,e.layerId=null,e.indexInfo=null,e._debouncedSaveOperations=p.debounce(function(){var t=r._asyncToGenerator((function*(t,r,o){switch(t){case 0:return e._save(r);case 1:return e._saveAs(o,r)}}));return function(e,r,o){return t.apply(this,arguments)}}()),e}r._inheritsLoose(o,t);var a=o.prototype;return a.readSpatialReference=function(e,t){return this._readSpatialReference(t)},a._readSpatialReference=function(e){if(null!=e.spatialReference)return S.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new S(o):null}},a.readFullExtent=function(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return v.fromJSON(o,r)}const o=t.store,i=this._readSpatialReference(t);return null==i||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<O))?null:new v({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})},a.readVersion=function(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",i={major:Number.NaN,minor:Number.NaN,versionString:o},n=o.split(".");return n.length>=2&&(i.major=parseInt(n[0],10),i.minor=parseInt(n[1],10)),i},a.readTitlePortalItem=function(e){return"item-title"!==this.sublayerTitleMode?void 0:e},a.readTitleService=function(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return g.titleFromUrlAndName(this.url,t.name);let o=t.name;if(!o&&this.url){const e=g.parse(this.url);l.isSome(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),g.cleanTitle(o)},a.writeUrl=function(e,t,r,o){g.writeUrlWithLayerId(this,e,"layers",t,o)},a._fetchIndexAndUpdateExtent=function(){var e=r._asyncToGenerator((function*(e,t){this.indexInfo=x.fetchIndexInfo(this.parsedUrl.path,this.rootNode,e,this.apiKey,R,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(yield this.indexInfo)}));function t(t,r){return e.apply(this,arguments)}return t}(),a._updateExtent=function(e){if("page"===(null==e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,i=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[o];if(null==i||null==i.obb||null==i.obb.center||null==i.obb.halfSize)throw new n("sceneservice:invalid-node-page","Invalid node page.");if(i.obb.center[0]<O||null==this.fullExtent||this.fullExtent.hasZ)return;const a=i.obb.halfSize,s=i.obb.center[2],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);this.fullExtent.zmin=s-l,this.fullExtent.zmax=s+l}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<O)return;const r=t[2],i=t[3];this.fullExtent.zmin=r-i,this.fullExtent.zmax=r+i}},a._fetchService=function(){var e=r._asyncToGenerator((function*(e){if(null==this.url)throw new n("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=yield this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}));function t(t){return e.apply(this,arguments)}return t}(),a._fetchFirstLayerId=function(){var e=r._asyncToGenerator((function*(e){const t=yield i(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}));function t(t){return e.apply(this,arguments)}return t}(),a._fetchServiceLayer=function(){var e=r._asyncToGenerator((function*(e){const t=yield i(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}));function t(t){return e.apply(this,arguments)}return t}(),a._ensureLoadBeforeSave=function(){var e=r._asyncToGenerator((function*(){yield this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&(yield this.beforeSave())}));function t(){return e.apply(this,arguments)}return t}(),a.validateLayer=function(e){},a._updateTypeKeywords=function(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))},a._saveAs=function(){var e=r._asyncToGenerator((function*(e,t){const r={...j,...t};let o=w.from(e);o||(R.error("_saveAs(): requires a portal item parameter"),yield Promise.reject(new n("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const i=o.portal||b.getDefault();yield this._ensureLoadBeforeSave(),o.type=U,o.portal=i;const a={origin:"portal-item",url:null,messages:[],portal:i,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},s={layers:[this.write(null,a)]};return yield Promise.all(a.resources.pendingOperations),yield this._validateAgainstJSONSchema(s,a,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),yield i._signIn(),yield i.user.addItem({item:o,folder:r&&r.folder,data:s}),yield T.saveResources(this.resourceReferences,a,null),this.portalItem=o,m.updateOrigins(a),a.portalItem=o,o}));function t(t,r){return e.apply(this,arguments)}return t}(),a._save=function(){var e=r._asyncToGenerator((function*(e){const t={...j,...e};this.portalItem||(R.error("_save(): requires the .portalItem property to be set"),yield Promise.reject(new n("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==U&&(R.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+U),yield Promise.reject(new n("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${U}"`))),yield this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&c.urlToObject(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||b.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,r)]};return yield Promise.all(r.resources.pendingOperations),yield this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),yield this.portalItem.update({data:o}),yield T.saveResources(this.resourceReferences,r,null),m.updateOrigins(r),this.portalItem}));function t(t){return e.apply(this,arguments)}return t}(),a._validateAgainstJSONSchema=function(){var t=r._asyncToGenerator((function*(t,r,o){let i=r.messages.filter((e=>"error"===e.type)).map((e=>new n(e.name,e.message,e.details)));if(o&&o.validationOptions.ignoreUnsupported&&(i=i.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),o.validationOptions.enabled||E){const r=(yield new Promise((function(t,r){e(["../support/schemaValidator"],t,r)}))).validate(t,o.portalItemLayerType);if(r.length>0){const e=`Layer item did not validate:\n${r.join("\n")}`;if(R.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===o.validationOptions.failPolicy){const e=r.map((e=>new n("sceneservice:schema-validation",e))).concat(i);throw new n("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(i.length>0)throw new n("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}));function o(e,r,o){return t.apply(this,arguments)}return o}(),r._createClass(o,[{key:"url",set:function(e){const t=g.sanitizeUrlWithLayerId({layer:this,url:e,nonStandardUrlAllowed:!1,logger:R});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}},{key:"parsedUrl",get:function(){const e=this._get("url");if(!e)return null;const t=c.urlToObject(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}}]),o}(t);return o.__decorate([u.property(I.id)],a.prototype,"id",void 0),o.__decorate([u.property({type:S})],a.prototype,"spatialReference",void 0),o.__decorate([y.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readSpatialReference",null),o.__decorate([u.property({type:v})],a.prototype,"fullExtent",void 0),o.__decorate([y.reader("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readFullExtent",null),o.__decorate([u.property({readOnly:!0,type:_})],a.prototype,"heightModelInfo",void 0),o.__decorate([u.property({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],a.prototype,"minScale",void 0),o.__decorate([u.property({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],a.prototype,"maxScale",void 0),o.__decorate([u.property({readOnly:!0})],a.prototype,"version",void 0),o.__decorate([y.reader("version",["store.version"])],a.prototype,"readVersion",null),o.__decorate([u.property({type:String,json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),o.__decorate([u.property({type:String,json:{read:!1}})],a.prototype,"sublayerTitleMode",void 0),o.__decorate([u.property({type:String})],a.prototype,"title",void 0),o.__decorate([y.reader("portal-item","title")],a.prototype,"readTitlePortalItem",null),o.__decorate([y.reader("service","title",["name"])],a.prototype,"readTitleService",null),o.__decorate([u.property({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],a.prototype,"layerId",void 0),o.__decorate([u.property(I.url)],a.prototype,"url",null),o.__decorate([f.writer("url")],a.prototype,"writeUrl",null),o.__decorate([u.property()],a.prototype,"parsedUrl",null),o.__decorate([u.property({readOnly:!0})],a.prototype,"store",void 0),o.__decorate([u.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),a=o.__decorate([h.subclass("esri.layers.mixins.SceneService")],a),a},O=-1e38,E=!1,U="Scene Service",j={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};t.SCENE_SERVICE_ITEM_TYPE=U,t.SceneService=N,Object.defineProperty(t,"__esModule",{value:!0})}));
