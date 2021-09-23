/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Error","../../../../core/maybe","../../../../geometry/support/jsonUtils","../../../../geometry/support/spatialReferenceUtils","../../featureConversionUtils","../../objectIdUtils","../../data/FeatureStore","../../data/projectionSupport","../../data/QueryEngine","./clientSideDefaults","./sourceUtils","../../../support/FieldsIndex","../../../support/fieldType","../../../support/fieldUtils"],(function(e,t,i,n,r,s,a,u,l,o,d,c,p,f,y){"use strict";const m=r.WGS84,h={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r.WGS84},g={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function F(e){return n.isPoint(e)?null!=e.z:!!e.hasZ}function b(e){return n.isPoint(e)?null!=e.m:!!e.hasM}let I=function(){function r(){this._queryEngine=null,this._nextObjectId=null}var I=r.prototype;return I.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null},I.load=function(){var i=e._asyncToGenerator((function*(e){const i=[],{features:n}=e,r=this._inferLayerProperties(n,e.fields),s=e.fields||[],c=null!=e.hasM?e.hasM:r.hasM,F=null!=e.hasZ?e.hasZ:r.hasZ,b=!e.spatialReference&&!r.spatialReference,I=b?m:e.spatialReference||r.spatialReference,_=b?h:null,E=e.geometryType||r.geometryType,j=!E;let T=e.objectIdField||r.objectIdField,x=e.timeInfo;if(!j&&(b&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!E))throw new t("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!T)throw new t("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&T!==r.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${T}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),T=r.objectIdField),T&&!r.objectIdField){let e=null;s.some((t=>t.name===T&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):s.unshift({alias:T,name:T,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const a of s){if(null==a.name&&(a.name=a.alias),null==a.alias&&(a.alias=a.name),!a.name)throw new t("feature-layer:invalid-field-name","field name is missing",{field:a});if(a.name===T&&(a.type="esriFieldTypeOID"),-1===f.kebabDict.jsonValues.indexOf(a.type))throw new t("feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}const R={};this._requiredFields=[];for(const t of s)if("esriFieldTypeOID"!==t.type&&"esriFieldTypeGlobalID"!==t.type){t.editable=null==t.editable||!!t.editable,t.nullable=null==t.nullable||!!t.nullable;const e=y.getFieldDefaultValue(t);t.nullable||void 0!==e?R[t.name]=e:this._requiredFields.push(t)}if(this._fieldsIndex=new p(s),this._createDefaultAttributes=d.createDefaultAttributesFunction(R,T),x){if(x.startTimeField){const e=this._fieldsIndex.get(x.startTimeField);e?(x.startTimeField=e.name,e.type="esriFieldTypeDate"):x.startTimeField=null}if(x.endTimeField){const e=this._fieldsIndex.get(x.endTimeField);e?(x.endTimeField=e.name,e.type="esriFieldTypeDate"):x.endTimeField=null}if(x.trackIdField){const e=this._fieldsIndex.get(x.trackIdField);e?x.trackIdField=e.name:(x.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:x}}))}x.startTimeField||x.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:x}}),x=null)}const q={warnings:i,featureErrors:[],layerDefinition:{...g,drawingInfo:d.createDrawingInfo(E),templates:d.createDefaultTemplate(R),extent:_,geometryType:E,objectIdField:T,fields:s,hasZ:!!F,hasM:!!c,timeInfo:x},assignedObjectIds:{}};if(this._queryEngine=new o.default({fields:s,geometryType:E,hasM:c,hasZ:F,objectIdField:T,spatialReference:I,featureStore:new u({geometryType:E,hasM:c,hasZ:F}),timeInfo:x,cacheSpatialQueries:!0}),!n||!n.length)return this._nextObjectId=a.initialObjectId,q;const S=a.findLastObjectIdFromFeatures(T,n);return this._nextObjectId=S+1,yield l.checkProjectionSupport(n,I),this._loadInitialFeatures(q,n)}));function n(e){return i.apply(this,arguments)}return n}(),I.applyEdits=function(){var t=e._asyncToGenerator((function*(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return yield Promise.all([c.loadGeometryEngineForSimplify(t,i),l.checkProjectionSupport(e.adds,t),l.checkProjectionSupport(e.updates,t)]),this._applyEdits(e)}));function i(e){return t.apply(this,arguments)}return i}(),I.queryFeatures=function(e,t={}){return this._queryEngine.executeQuery(e,t.signal)},I.queryFeatureCount=function(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)},I.queryObjectIds=function(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)},I.queryExtent=function(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)},I.querySnapping=function(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)},I._inferLayerProperties=function(e,t){let r,s,a=null,u=null,l=null;for(const o of e){const e=o.geometry;if(!i.isNone(e)&&(a||(a=n.getJsonType(e)),u||(u=e.spatialReference),null==r&&(r=F(e)),null==s&&(s=b(e)),a&&u&&null!=r&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,n=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||n}))&&(l=e.name)}return{geometryType:a,spatialReference:u,objectIdField:l,hasM:s,hasZ:r}},I._loadInitialFeatures=function(e,t){const{geometryType:r,hasM:a,hasZ:u,objectIdField:o,spatialReference:d,featureStore:p}=this._queryEngine,f=[];for(const s of t){if(null!=s.uid&&(e.assignedObjectIds[s.uid]=-1),s.geometry&&r!==n.getJsonType(s.geometry)){e.featureErrors.push(c.createFeatureEditErrorResult("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=c.mixAttributes(this._fieldsIndex,t,s.attributes,this._requiredFields,!0,e.warnings);a?e.featureErrors.push(a):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,null!=s.uid&&(e.assignedObjectIds[s.uid]=s.attributes[o]),i.isSome(s.geometry)&&(s.geometry=l.project(s.geometry,s.geometry.spatialReference,d)),f.push(s))}if(p.addMany(s.convertFromFeatures([],f,r,u,a,o)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e},I._applyEdits=function(e){const{adds:t,updates:i,deletes:n}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),n&&n.length){for(const e of n)r.deleteResults.push(c.createFeatureEditSuccessResult(e));this._queryEngine.featureStore.removeManyById(n)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}},I._applyAddEdits=function(e,t){const{addResults:r}=e,{geometryType:a,hasM:u,hasZ:o,objectIdField:d,spatialReference:p,featureStore:f}=this._queryEngine,y=[];for(const s of t){if(s.geometry&&a!==n.getJsonType(s.geometry)){r.push(c.createFeatureEditErrorResult("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),u=c.mixAttributes(this._fieldsIndex,t,s.attributes,this._requiredFields);if(u)r.push(u);else{if(this._assignObjectId(t,s.attributes),s.attributes=t,null!=s.uid){const t=s.attributes[d];e.uidToObjectId[s.uid]=t}i.isSome(s.geometry)&&(s.geometry=l.project(c.simplify(s.geometry,p),s.geometry.spatialReference,p)),y.push(s),r.push(c.createFeatureEditSuccessResult(s.attributes[d]))}}f.addMany(s.convertFromFeatures([],y,a,o,u,d))},I._applyUpdateEdits=function({updateResults:e},t){const{geometryType:r,hasM:a,hasZ:u,objectIdField:o,spatialReference:d,featureStore:p}=this._queryEngine;for(const f of t){const{attributes:t,geometry:y}=f,m=t&&t[o];if(null==m){e.push(c.createFeatureEditErrorResult(`Identifier field ${o} missing`));continue}if(!p.has(m)){e.push(c.createFeatureEditErrorResult(`Feature with object id ${m} missing`));continue}const h=s.convertToFeature(p.getFeature(m),r,u,a);if(i.isSome(y)){if(r!==n.getJsonType(y)){e.push(c.createFeatureEditErrorResult("Incorrect geometry type."));continue}h.geometry=l.project(c.simplify(y,d),y.spatialReference,d)}if(t){const i=c.mixAttributes(this._fieldsIndex,h.attributes,t,this._requiredFields);if(i){e.push(i);continue}}p.add(s.convertFromFeature(h,r,u,a,o)),e.push(c.createFeatureEditSuccessResult(m))}},I._assignObjectId=function(e,t,i=!1){const n=this._queryEngine.objectIdField;i&&t&&isFinite(t[n])?e[n]=t[n]:e[n]=this._nextObjectId++},r}();return I}));
