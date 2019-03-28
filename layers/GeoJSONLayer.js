// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

/**
         * @constructor
         * @alias module:esri/layers/GeoJSONLayer
         * @extends module:esri/layers/Layer
         *
         * @mixes module:esri/layers/mixins/ScaleRangeLayer
         * @mixes module:esri/layers/mixins/TemporalLayer
         *
         * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
         *                            that may be passed into the constructor.
         * @example
         * const geoJSONLayer = new GeoJSONLayer({
         *    url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
         *    copyright: "USGS Earthquakes",
         * });
         * map.add(geoJSONLayer);  // adds the layer to the map
         */

//  copyright

/**
             * Copyright information for the layer.
             *
             * @name copyright
             * @instance
             * @memberof module:esri/layers/GeoJSONLayer
             * @type {string}
             */

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/tsSupport/paramHelper","../geometry","../PopupTemplate","../renderers","../core/asyncUtils","../core/kebabDictionary","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","./Layer","./graphics/editingSupport","./graphics/sources/GeoJSONSource","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/FeatureReduction","./support/FeatureReductionSelection","./support/FeatureTemplate","./support/FeatureType","./support/Field","./support/fieldUtils","./support/LabelClass","../support/popupUtils","../symbols/support/ElevationInfo","../tasks/support/Query"],function(e,t,r,o,p,n,i,l,a,u,s,y,d,c,f,h,b,g,v,m,F,O,S,E,I,T,j,x,P,w,L){var q=new s.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});return function(t){function p(e){var r=t.call(this)||this;return r.copyright=null,r.definitionExpression=null,r.displayField=null,r.editingEnabled=!0,r.elevationInfo=null,r.featureReduction=null,r.fields=null,r.fullExtent=null,r.geometryType=null,r.hasZ=void 0,r.labelsVisible=!0,r.labelingInfo=null,r.legendEnabled=!0,r.objectIdField=null,r.popupEnabled=!0,r.popupTemplate=null,r.screenSizePerspectiveEnabled=!0,r.source=null,r.spatialReference=i.SpatialReference.WGS84,r.templates=null,r.title="GeoJSON",r.type="geojson",r.typeIdField=null,r.types=null,r.url=null,r}return r(p,t),p.prototype.load=function(){var e=this,t=new g.default({layer:this});return this._set("source",t),this.addResolvingPromise(t.load().then(function(){e.read(t.layerDefinition,{origin:"service",url:e.parsedUrl}),e.revert(["objectIdField","fields","timeInfo"],"service"),j.fixRendererFields(e.renderer,e.fields),j.fixTimeInfoFields(e.timeInfo,e.fields)})),this.when()},Object.defineProperty(p.prototype,"capabilities",{get:function(){return this.source?this.source.capabilities:null},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"fieldsMap",{get:function(){var e=this.fields,t=new Map;if(!e)return t;for(var r=0,o=e;r<o.length;r++){var p=o[r],n=p&&p.name&&p.name.trim();n&&(t.set(n,p),t.set(n.toLowerCase(),p))}return t},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"isTable",{get:function(){return this.loaded&&null==this.geometryType},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"parsedUrl",{get:function(){return this.url?c.urlToObject(this.url):null},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"renderer",{set:function(e){j.fixRendererFields(e,this.fields),this._set("renderer",e)},enumerable:!0,configurable:!0}),p.prototype.applyEdits=function(e){return u.safeCast(b.applyEdits(this,e))},p.prototype.createPopupTemplate=function(e){return P.createPopupTemplate(this,e)},p.prototype.createQuery=function(){var e=new L,t=this.get("capabilities.data");return e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1",e},p.prototype.getFieldDomain=function(e,t){var r,o=this,p=!1,n=t&&t.feature,i=n&&n.attributes,l=this.typeIdField&&i&&i[this.typeIdField];return null!=l&&this.types&&(p=this.types.some(function(t){return t.id==l&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=o._getLayerDomain(e)),!0)})),p||r||(r=this._getLayerDomain(e)),r},p.prototype.getField=function(e,t){return t?j.getField(t,e):this.fieldsMap.get(e)||this.fieldsMap.get(e.toLowerCase())},p.prototype.queryFeatures=function(e,t){var r=this;return this.load().then(function(){return r.source.queryFeatures(e||r.createQuery(),t)}).then(function(e){if(e&&e.features)for(var t=0,o=e.features;t<o.length;t++){var p=o[t];p.layer=p.sourceLayer=r}return e})},p.prototype.queryObjectIds=function(e,t){var r=this;return this.load().then(function(){return r.source.queryObjectIds(e||r.createQuery(),t)})},p.prototype.queryFeatureCount=function(e,t){var r=this;return this.load().then(function(){return r.source.queryFeatureCount(e||r.createQuery(),t)})},p.prototype.queryExtent=function(e,t){var r=this;return this.load().then(function(){return r.source.queryExtent(e||r.createQuery(),t)})},p.prototype.importLayerViewModule=function(t){switch(t.type){case"2d":return d.create(function(t){return e(["../views/2d/layers/FeatureLayerView2D"],t)});case"3d":return d.create(function(t){return e(["../views/3d/layers/FeatureLayerView3D"],t)})}},p.prototype._getLayerDomain=function(e){if(!this.fields)return null;var t=null;return this.fields.some(function(r){return r.name===e&&(t=r.domain),!!t}),t},o([f.property({readOnly:!0,dependsOn:["source.capabilities"],json:{read:!1,write:!1}})],p.prototype,"capabilities",null),o([f.property({type:String})],p.prototype,"copyright",void 0),o([f.property({readOnly:!0,dependsOn:["fields","title"]})],p.prototype,"defaultPopupTemplate",null),o([f.property({type:String})],p.prototype,"definitionExpression",void 0),o([f.property({type:String})],p.prototype,"displayField",void 0),o([f.property({type:Boolean})],p.prototype,"editingEnabled",void 0),o([f.property({type:w})],p.prototype,"elevationInfo",void 0),o([f.property({types:{key:"type",base:O.default,typeMap:{selection:S.default}}})],p.prototype,"featureReduction",void 0),o([f.property({type:[T]})],p.prototype,"fields",void 0),o([f.property({readOnly:!0,dependsOn:["fields"]})],p.prototype,"fieldsMap",null),o([f.property({type:i.Extent,aliasOf:"source.fullExtent"})],p.prototype,"fullExtent",void 0),o([f.property({type:["point","polygon","polyline","multipoint"],json:{read:{reader:q.read}}})],p.prototype,"geometryType",void 0),o([f.property({type:Boolean})],p.prototype,"hasZ",void 0),o([f.property({type:String})],p.prototype,"id",void 0),o([f.property({type:Boolean,readOnly:!0,dependsOn:["loaded"]})],p.prototype,"isTable",null),o([f.property({type:Boolean})],p.prototype,"labelsVisible",void 0),o([f.property({type:[x]})],p.prototype,"labelingInfo",void 0),o([f.property({type:Boolean})],p.prototype,"legendEnabled",void 0),o([f.property({type:["show","hide"]})],p.prototype,"listMode",void 0),o([f.property({type:String})],p.prototype,"objectIdField",void 0),o([f.property({readOnly:!0,dependsOn:["url"]})],p.prototype,"parsedUrl",null),o([f.property({type:Boolean})],p.prototype,"popupEnabled",void 0),o([f.property({type:l})],p.prototype,"popupTemplate",void 0),o([f.property({types:a.rendererTypes,json:{read:{source:"drawingInfo.renderer",reader:a.read}}})],p.prototype,"renderer",null),o([f.property({type:Boolean})],p.prototype,"screenSizePerspectiveEnabled",void 0),o([f.property({readOnly:!0})],p.prototype,"source",void 0),o([f.property({type:i.SpatialReference})],p.prototype,"spatialReference",void 0),o([f.property({type:[E]})],p.prototype,"templates",void 0),o([f.property()],p.prototype,"title",void 0),o([f.property({json:{read:!1},readOnly:!0})],p.prototype,"type",void 0),o([f.property({type:String,readOnly:!0})],p.prototype,"typeIdField",void 0),o([f.property({type:[I]})],p.prototype,"types",void 0),o([f.property({type:String})],p.prototype,"url",void 0),o([n(0,f.cast(L))],p.prototype,"queryFeatures",null),o([n(0,f.cast(L))],p.prototype,"queryObjectIds",null),o([n(0,f.cast(L))],p.prototype,"queryFeatureCount",null),o([n(0,f.cast(L))],p.prototype,"queryExtent",null),p=o([f.subclass("esri.layers.GeoJSONLayer")],p)}(f.declared(h,m,v,y,F))});