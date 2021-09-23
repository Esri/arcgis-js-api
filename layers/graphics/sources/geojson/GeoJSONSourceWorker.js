/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../request","../../../../core/Error","../../../../core/maybe","../../../../geometry/support/jsonUtils","../../../../geometry/support/spatialReferenceUtils","../../featureConversionUtils","../../data/FeatureStore","../../data/projectionSupport","../../data/QueryEngine","./geojson","../support/clientSideDefaults","../support/sourceUtils","../../../support/FieldsIndex","../../../support/fieldType","../../../support/fieldUtils"],(function(e,t,i,n,s,r,o,a,u,l,d,p,c,y,f,m){"use strict";const h={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};let g=function(){function g(){this._queryEngine=null}var F=g.prototype;return F.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null},F.load=function(){var s=e._asyncToGenerator((function*(e){const s=[];yield this._checkProjection(e.spatialReference);let c=null;if(e.url){c=(yield t(e.url,{responseType:"json"})).data,yield d.validateGeoJSON(c)}const g=d.inferLayerProperties(c,{geometryType:e.geometryType}),F=e.fields||g.fields||[],b=null!=e.hasZ?e.hasZ:g.hasZ,I=g.geometryType,E=e.objectIdField||("number"===g.objectIdFieldType?g.objectIdFieldName:"OBJECTID")||"OBJECTID",_=e.spatialReference||r.WGS84;let T=e.timeInfo;if("string"===g.objectIdFieldType&&s.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),F===g.fields&&g.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:g.unknownFields}}),E){let e=null;F.some((t=>t.name===E&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):F.unshift({alias:E,name:E,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const t of F){if(null==t.name&&(t.name=t.alias),null==t.alias&&(t.alias=t.name),!t.name)throw new i("geojson-layer:invalid-field-name","field name is missing",{field:t});if(t.name===E&&(t.type="esriFieldTypeOID"),-1===f.kebabDict.jsonValues.indexOf(t.type))throw new i("geojson-layer:invalid-field-type",`invalid type for field "${t.name}"`,{field:t})}const j={};this._requiredFields=[];for(const t of F)if("esriFieldTypeOID"!==t.type&&"esriFieldTypeGlobalID"!==t.type){t.editable=null==t.editable||!!t.editable,t.nullable=null==t.nullable||!!t.nullable;const e=m.getFieldDefaultValue(t);t.nullable||void 0!==e?j[t.name]=e:this._requiredFields.push(t)}if(this._fieldsIndex=new y(F),T){if(T.startTimeField){const e=this._fieldsIndex.get(T.startTimeField);e?(T.startTimeField=e.name,e.type="esriFieldTypeDate"):T.startTimeField=null}if(T.endTimeField){const e=this._fieldsIndex.get(T.endTimeField);e?(T.endTimeField=e.name,e.type="esriFieldTypeDate"):T.endTimeField=null}if(T.trackIdField){const e=this._fieldsIndex.get(T.trackIdField);e?T.trackIdField=e.name:(T.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))}T.startTimeField||T.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:T}}),T=null)}const q=I?p.createDrawingInfo(I):null,x={warnings:s,featureErrors:[],layerDefinition:{...h,drawingInfo:q,templates:p.createDefaultTemplate(j),extent:null,geometryType:I,objectIdField:E,fields:F,hasZ:!!b,timeInfo:T}};this._queryEngine=new l.default({fields:F,geometryType:I,hasM:!1,hasZ:b,objectIdField:E,spatialReference:_,timeInfo:T,featureStore:new a({geometryType:I,hasM:!1,hasZ:b}),cacheSpatialQueries:!0}),this._createDefaultAttributes=p.createDefaultAttributesFunction(j,E),this._nextObjectId=g.maxObjectId+1;const S=d.createOptimizedFeatures(c,{geometryType:I,hasZ:b,objectIdField:"number"===g.objectIdFieldType?E:null});if(!r.equals(_,r.WGS84))for(const t of S)n.isSome(t.geometry)&&(t.geometry=o.convertFromGeometry(u.project(o.convertToGeometry(t.geometry,I,b,!1),r.WGS84,_)));return this._loadInitialFeatures(x,S),x}));function c(e){return s.apply(this,arguments)}return c}(),F.applyEdits=function(){var t=e._asyncToGenerator((function*(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return yield Promise.all([c.loadGeometryEngineForSimplify(t,i),u.checkProjectionSupport(e.adds,t),u.checkProjectionSupport(e.updates,t)]),this._applyEdits(e)}));function i(e){return t.apply(this,arguments)}return i}(),F.queryFeatures=function(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)},F.queryFeatureCount=function(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)},F.queryObjectIds=function(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)},F.queryExtent=function(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)},F.querySnapping=function(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)},F._loadInitialFeatures=function(e,t){const{featureStore:i,objectIdField:n}=this._queryEngine,s=[];for(const r of t){const t=this._createDefaultAttributes(),i=c.mixAttributes(this._fieldsIndex,t,r.attributes,this._requiredFields,!0,e.warnings);i?e.featureErrors.push(i):(this._assignObjectId(t,r.attributes,!0),r.attributes=t,r.objectId=t[n],s.push(r))}if(i.addMany(s),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e},F._applyEdits=function(e){const{adds:t,updates:i,deletes:n}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),i&&i.length&&this._applyUpdateEdits(s,i),n&&n.length){for(const e of n)s.deleteResults.push(c.createFeatureEditSuccessResult(e));this._queryEngine.featureStore.removeManyById(n)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:s}},F._applyAddEdits=function(e,t){const{addResults:i}=e,{geometryType:r,hasM:a,hasZ:l,objectIdField:d,spatialReference:p,featureStore:y}=this._queryEngine,f=[];for(const o of t){if(o.geometry&&r!==s.getJsonType(o.geometry)){i.push(c.createFeatureEditErrorResult("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=c.mixAttributes(this._fieldsIndex,t,o.attributes,this._requiredFields);if(a)i.push(a);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[d];e.uidToObjectId[o.uid]=t}n.isSome(o.geometry)&&(o.geometry=u.project(c.simplify(o.geometry,p),o.geometry.spatialReference,p)),f.push(o),i.push(c.createFeatureEditSuccessResult(o.attributes[d]))}}y.addMany(o.convertFromFeatures([],f,r,l,a,d))},F._applyUpdateEdits=function({updateResults:e},t){const{geometryType:i,hasM:r,hasZ:a,objectIdField:l,spatialReference:d,featureStore:p}=this._queryEngine;for(const y of t){const{attributes:t,geometry:f}=y,m=t&&t[l];if(null==m){e.push(c.createFeatureEditErrorResult(`Identifier field ${l} missing`));continue}if(!p.has(m)){e.push(c.createFeatureEditErrorResult(`Feature with object id ${m} missing`));continue}const h=o.convertToFeature(p.getFeature(m),i,a,r);if(n.isSome(f)){if(i!==s.getJsonType(f)){e.push(c.createFeatureEditErrorResult("Incorrect geometry type."));continue}h.geometry=u.project(c.simplify(f,d),f.spatialReference,d)}if(t){const i=c.mixAttributes(this._fieldsIndex,h.attributes,t,this._requiredFields);if(i){e.push(i);continue}}p.add(o.convertFromFeature(h,i,a,r,l)),e.push(c.createFeatureEditSuccessResult(m))}},F._assignObjectId=function(e,t,i=!1){const n=this._queryEngine.objectIdField;i&&isFinite(t[n])?e[n]=t[n]:e[n]=this._nextObjectId++},F._checkProjection=function(){var t=e._asyncToGenerator((function*(e){try{yield u.checkProjectionSupport(r.WGS84,e)}catch{throw new i("geojson-layer","Projection not supported")}}));function n(e){return t.apply(this,arguments)}return n}(),g}();return g}));
