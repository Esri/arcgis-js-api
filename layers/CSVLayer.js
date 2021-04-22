/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../chunks/persistableUrlUtils","../geometry/SpatialReference","../geometry","../tasks/support/Query","./FeatureLayer","./graphics/data/QueryEngineCapabilities","./graphics/sources/CSVSource"],(function(e,t,r,o,i,s,n,a,p,l,u,d,c,y,f,h,g,_){"use strict";let m=function(t){function r(...e){var r;return(r=t.call(this,...e)||this).delimiter=null,r.editingEnabled=!1,r.fields=null,r.latitudeField=null,r.locationType="coordinates",r.longitudeField=null,r.operationalLayerType="CSV",r.outFields=["*"],r.path=null,r.portalItem=null,r.spatialReference=c.WGS84,r.source=null,r.type="csv",r}e._inheritsLoose(r,t);var o=r.prototype;return o.normalizeCtorArgs=function(e,t){return"string"==typeof e?{url:e,...t}:e},o.readWebMapLabelsVisible=function(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)},o.createGraphicsSource=async function(e){const t=new _({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),t},o.queryFeatures=function(e,t){return this.load().then((()=>this.source.queryFeatures(f.from(e)||this.createQuery()))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))},o.queryObjectIds=function(e,t){return this.load().then((()=>this.source.queryObjectIds(f.from(e)||this.createQuery())))},o.queryFeatureCount=function(e,t){return this.load().then((()=>this.source.queryFeatureCount(f.from(e)||this.createQuery())))},o.queryExtent=function(e,t){return this.load().then((()=>this.source.queryExtent(f.from(e)||this.createQuery())))},o.write=function(e,r){return t.prototype.write.call(this,e,{...r,writeLayerSchema:!0})},o._verifyFields=function(){},o._verifySource=function(){},o._hasMemorySource=function(){return!1},e._createClass(r,[{key:"capabilities",get:function(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:g.queryCapabilities,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"url",set:function(e){this._set("url",e)}}]),r}(h);return t.__decorate([s.property({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],m.prototype,"capabilities",null),t.__decorate([s.property({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],m.prototype,"delimiter",void 0),t.__decorate([s.property({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],m.prototype,"editingEnabled",void 0),t.__decorate([s.property({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],m.prototype,"fields",void 0),t.__decorate([s.property({type:Boolean,readOnly:!0})],m.prototype,"isTable",null),t.__decorate([n.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],m.prototype,"readWebMapLabelsVisible",null),t.__decorate([s.property({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],m.prototype,"latitudeField",void 0),t.__decorate([s.property({type:["show","hide"]})],m.prototype,"listMode",void 0),t.__decorate([s.property({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"locationType",void 0),t.__decorate([s.property({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],m.prototype,"longitudeField",void 0),t.__decorate([s.property({type:["CSV"]})],m.prototype,"operationalLayerType",void 0),t.__decorate([s.property()],m.prototype,"outFields",void 0),t.__decorate([s.property({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],m.prototype,"path",void 0),t.__decorate([s.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",void 0),t.__decorate([s.property({json:{read:!1},cast:null,type:_,readOnly:!0})],m.prototype,"source",void 0),t.__decorate([s.property({json:{read:!1},value:"csv",readOnly:!0})],m.prototype,"type",void 0),t.__decorate([s.property({json:{read:d.read,write:{isRequired:!0,ignoreOrigin:!0,writer:d.write}}})],m.prototype,"url",null),m=t.__decorate([a.subclass("esri.layers.CSVLayer")],m),m}));
