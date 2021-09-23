/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/Error","../../../core/Loadable","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../ogc/ogcFeatureUtils","../../../geometry/SpatialReference","../../../geometry/support/typeUtils"],(function(e,t,r,o,s,n,i,p,u,a,c,l,d,y,f){"use strict";const m="http://www.opengis.net/def/crs/OGC/1.3/CRS84";e.OGCFeatureSource=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).featureDefinition=null,t.type="ogc-feature",t}t._inheritsLoose(r,e);var o=r.prototype;return o.load=function(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()},o.getFeatureDefinition=function(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:r,supportedCrs:o},layer:{apiKey:s,capabilities:n,customParameters:i}}=this;return{capabilities:n,collection:e,layerDefinition:t,queryParameters:{apiKey:s,customParameters:i},spatialReference:r,supportedCrs:o}},o.queryExtent=function(e,t={}){return null},o.queryFeatureCount=function(e,t={}){return null},o.queryFeatures=function(e,t={}){const r=this.getFeatureDefinition();return this.load(t).then((()=>d.queryFeatureSet(r,e,t)))},o.queryFeaturesJSON=function(e,t={}){const r=this.getFeatureDefinition();return this.load(t).then((()=>d.queryFeatureSetJSON(r,e,t)))},o.queryObjectIds=function(e,t={}){return null},o.supportsSpatialReference=function(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]},o._conformsToType=function(e,t){var r;const o=new RegExp(`^${t}$`,"i");return null!=(r=e.conformsTo.some((e=>o.test(e))))&&r},o._getCapabilities=function(e,t){var r,o,s,n,p,u,a;const c=i.isSome(t)?null==(r=t.components)?void 0:r.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(o=null!=(s=null==c||null==(n=c.limit)||null==(p=n.schema)?void 0:p.maximum)?s:null==c||null==(u=c.limitFeatures)||null==(a=u.schema)?void 0:a.maximum)?o:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}},o._getExtent=function(e){var t;const r=null==(t=e.extent)?void 0:t.spatial;if(!r)return null;const o=r.bbox[0],s=4===o.length,n=o[0],i=o[1],p=s?void 0:o[2];return{xmin:n,ymin:i,xmax:s?o[2]:o[3],ymax:s?o[3]:o[4],zmin:p,zmax:s?void 0:o[5],spatialReference:y.WGS84.toJSON()}},o._getStorageSpatialReference=function(e){var t;const r=null!=(t=e.storageCrs)?t:m,o=d.getSpatialReferenceWkid(r);return i.isNone(o)?y.WGS84:new y({wkid:o})},o._getSupportedSpatialReferences=function(e,t){var r;const o="#/crs",s=null!=(r=e.crs)?r:[m],n=s.includes(o)?s.filter((e=>e!==o)).concat(t.crs):s,i=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter((e=>!i.test(e)))},o._loadOGCServices=function(){var e=t._asyncToGenerator((function*(e,t){const r=i.isSome(t)?t.signal:null,{apiKey:o,collectionId:n,customParameters:p,fields:u,geometryType:a,hasZ:c,objectIdField:l,timeInfo:y,url:m}=e,g={fields:null==u?void 0:u.map((e=>e.toJSON())),geometryType:f.typeKebabDictionary.toJSON(a),hasZ:c,objectIdField:l,timeInfo:null==y?void 0:y.toJSON()},S={apiKey:o,customParameters:p,signal:r},h=yield d.getServerLandingPage(m,S),[v,C]=yield Promise.all([d.getServerConformance(h,S),d.getServerCollections(h,S)]);if(!this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new s("ogc-feature-layer:no-geojson-support","Server does not support geojson");const O=C.collections.find((e=>e.id===n));if(!O)throw new s("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const F=this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?yield d.getServerOpenApi(h,S):null,R=yield d.getCollectionDefinition(O,g,S),_=this._getCapabilities(R.hasZ,F),x=this._getExtent(O),b=this._getStorageSpatialReference(O).toJSON(),w=this._getSupportedSpatialReferences(O,C),D={};for(const s of w){const e=d.getSpatialReferenceWkid(s);i.isSome(e)&&(D[e]=s)}R.extent=x,this.featureDefinition={capabilities:_,collection:O,layerDefinition:R,queryParameters:{},spatialReference:b,supportedCrs:D}}));function r(t,r){return e.apply(this,arguments)}return r}(),r}(n),r.__decorate([p.property()],e.OGCFeatureSource.prototype,"featureDefinition",void 0),r.__decorate([p.property({constructOnly:!0})],e.OGCFeatureSource.prototype,"layer",void 0),r.__decorate([p.property()],e.OGCFeatureSource.prototype,"type",void 0),e.OGCFeatureSource=r.__decorate([l.subclass("esri.layers.graphics.sources.OGCFeatureSource")],e.OGCFeatureSource);var g=e.OGCFeatureSource;e.default=g,Object.defineProperty(e,"__esModule",{value:!0})}));
