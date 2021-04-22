/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/subclass","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../core/promiseUtils","../../../../core/Promise","../../../../core/workers/workers"],(function(e,t,r,o,n,s,i,a,c,u,l,p,h){"use strict";function _(e){return Array.isArray(e)}let y=function(t){function r(e){var r;return(r=t.call(this,e)||this)._startupResolver=l.createResolver(),r.isReady=!1,r}e._inheritsLoose(r,t);var o=r.prototype;return o.initialize=function(){this._controller=l.createAbortController(),this.addResolvingPromise(this._startWorker(this._controller.signal))},o.destroy=function(){this._controller.abort(),this._connection&&this._connection.close()},o.startup=async function(e,t,r,o){await this.when();const n=this._controller.signal,s=_(r.source)?{transferList:r.source,signal:n}:void 0,i={service:r,config:t,tileInfo:e.tileInfo.toJSON(),tiles:o};await this._connection.invoke("startup",i,s),this._startupResolver.resolve(),this._set("isReady",!0)},o.updateTiles=async function(e){return await this._startupResolver.promise,l.ignoreAbortErrors(this._connection.invoke("updateTiles",e))},o.update=async function(e){const t={config:e};return await this._startupResolver.promise,this._connection.invoke("update",t)},o.applyUpdate=async function(e){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",e)},o.setHighlight=async function(e){return await this._startupResolver.promise,l.ignoreAbortErrors(this._connection.invoke("controller.setHighlight",e))},o.refresh=async function(){return await this._startupResolver.promise,l.ignoreAbortErrors(this._connection.invoke("controller.refresh"))},o.queryFeatures=async function(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",e.toJSON(),t)},o.queryObjectIds=async function(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",e.toJSON(),t)},o.queryFeatureCount=async function(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",e.toJSON(),t)},o.queryExtent=async function(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)},o.queryLatestObservations=async function(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)},o.queryStatistics=async function(e){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",e)},o.getObjectId=async function(e){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",e)},o.getDisplayId=async function(e){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",e)},o.getFeature=async function(e){return await this._startupResolver.promise,this._connection.invoke("controller.getFeature",e)},o.getAggregate=async function(e){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregate",e)},o.getAggregateValueRanges=async function(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")},o.mapValidDisplayIds=async function(e){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",e)},o.onEdits=async function(e){await this._startupResolver.promise;const{addedFeatures:t,deletedFeatures:r,updatedFeatures:o}=e;return l.ignoreAbortErrors(this._connection.invoke("controller.onEdits",{addedFeatures:t,deletedFeatures:r,updatedFeatures:o}))},o.enableEvent=async function(e,t){return await this._startupResolver.promise,l.ignoreAbortErrors(this._connection.invoke("controller.enableEvent",{name:e,value:t}))},o._startWorker=async function(e){try{this._connection=await h.open("Pipeline",{client:this.client,strategy:"dedicated",signal:e})}catch(t){l.throwIfNotAbortError(t)}},e._createClass(r,[{key:"tileRenderer",set:function(e){this.client.tileRenderer=e}},{key:"closed",get:function(){return this._connection.closed}}]),r}(p.EsriPromise);return t.__decorate([s.property()],y.prototype,"isReady",void 0),t.__decorate([s.property()],y.prototype,"client",void 0),t.__decorate([s.property()],y.prototype,"tileRenderer",null),y=t.__decorate([i.subclass("esri.views.2d.layers.support.FeatureLayerProxy")],y),y}));
