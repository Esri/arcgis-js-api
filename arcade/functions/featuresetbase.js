// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../polyfill/tsSupport/awaiter","../polyfill/tsSupport/generator","../ArcadeDate","../ArcadePortal","../Dictionary","../executionError","../Feature","../featureSetCollection","../featureSetUtils","../ImmutableArray","../languageUtils","../portalUtils","../featureset/actions/Adapted","../featureset/actions/AttributeFilter","../featureset/actions/OrderBy","../featureset/actions/Top","../featureset/sources/Empty","../featureset/sources/FeatureLayerMemory","../featureset/support/OrderbyClause","../featureset/support/shared","../featureset/support/sqlUtils","./fieldStats","../polyfill/promiseUtils","../polyfill/sql/WhereClause","../../layers/FeatureLayer","../../layers/Field"],(function(e,r,t,n,i,a,o,l,s,u,d,c,f,m,p,E,h,g,y,F,x,A,S,v,w,I,b,C){"use strict";function D(e,r,t,n){if(1===n.length){if(f.isArray(n[0]))return v.calculateStat(e,n[0],-1);if(f.isImmutableArray(n[0]))return v.calculateStat(e,n[0].toArray(),-1)}return v.calculateStat(e,n,-1)}function N(e,r,i){return t(this,void 0,void 0,(function(){var t,a,o,l,s,u,d,c;return n(this,(function(n){switch(n.label){case 0:if(!((t=e.getVariables()).length>0))return[3,5];a=[],o=0,n.label=1;case 1:return o<t.length?(l={name:t[o]},u=(s=a).push,[4,r.evaluateIdentifier(i,l)]):[3,4];case 2:u.apply(s,[n.sent()]),n.label=3;case 3:return o++,[3,1];case 4:for(d={},c=0;c<t.length;c++)d[t[c]]=a[c];return e.parameters=d,[2,e];case 5:return[2,e]}}))}))}function T(e,r,t){for(var n in void 0===t&&(t=null),e)if(n.toLowerCase()===r.toLowerCase())return e[n];return t}function L(e){if(null===e)return null;var r={type:T(e,"type",""),name:T(e,"name","")};if("range"===r.type)r.range=T(e,"range",[]);else{r.codedValues=[];for(var t=0,n=T(e,"codedValues",[]);t<n.length;t++){var i=n[t];r.codedValues.push({name:T(i,"name",""),code:T(i,"code",null)})}}return r}function P(e){if(null===e)return null;var r={},t=T(e,"wkt",null);null!==t&&(r.wkt=t);var n=T(e,"wkid",null);return null!==n&&(r.wkid=n),r}function R(e){if(null===e)return null;var r={hasZ:T(e,"hasz",!1),hasM:T(e,"hasm",!1)},t=T(e,"spatialreference",null);t&&(r.spatialReference=P(t));var n=T(e,"x",null);if(null!==n)return r.x=n,r.y=T(e,"y",null),r;var i=T(e,"rings",null);if(null!==i)return r.rings=i,r;var a=T(e,"paths",null);if(null!==a)return r.paths=a,r;var o=T(e,"points",null);if(null!==o)return r.points=o,r;for(var l=0,s=["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"];l<s.length;l++){var u=s[l],d=T(e,u,null);null!==d&&(r[u]=d)}return r}Object.defineProperty(r,"__esModule",{value:!0}),r.registerFunctions=void 0,r.registerFunctions=function(e){"async"===e.mode&&(e.functions.timezone=function(r,a){var s=this;return e.standardFunctionAsync(r,a,(function(e,u,d){return t(s,void 0,void 0,(function(){var e,t,s;return n(this,(function(n){switch(n.label){case 0:return f.pcCheck(d,1,2,r,a),f.isFeatureSet(d[0])?[4,d[0].load()]:[3,2];case 1:if(n.sent(),1===d.length||null===d[1])return[2,d[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone];if(!(d[1]instanceof o)||!1===d[1].hasField("type"))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,a);if(e=d[1].field("type"),!1===f.isString(e))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,a);switch(f.toString(e).toLowerCase()){case"preferredtimezone":return[2,d[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone];case"editfieldsinfo":return[2,d[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone];case"timeinfo":return[2,d[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone];case"field":if(d[1].hasField("fieldname")&&f.isString(d[1].field("fieldname")))return[2,d[0].dateTimeReferenceFieldIndex.fieldTimeZone(f.toString(d[1].field("fieldname")))]}throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,a);case 2:return null===(t=f.toDate(d[0],f.defaultTimeZone(r)))?[2,null]:"system"===(s=t.timeZone)?[2,i.ArcadeDate.systemTimeZoneCanonicalName]:[2,s]}}))}))}))},e.functions.sqltimestamp=function(r,i){var a=this;return e.standardFunctionAsync(r,i,(function(e,o,s){return t(a,void 0,void 0,(function(){var e,t,a;return n(this,(function(n){switch(n.label){case 0:if(f.pcCheck(s,1,3,r,i),e=s[0],f.isDate(e)){if(1===s.length)return[2,e.toSQLString()];if(2===s.length)return[2,e.changeTimeZone(f.toString(s[1])).toSQLString()];throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i)}if(!f.isFeatureSet(e))return[3,2];if(3!==s.length)throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);return[4,e.load()];case 1:if(n.sent(),t=f.toString(s[1]),!1===f.isDate(s[2]))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);return null===(a=e.fieldTimeZone(t))?[2,s[2].toSQLString()]:[2,s[2].changeTimeZone(a).toSQLString()];case 2:throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i)}}))}))}))},e.signatures.push({name:"sqltimestamp",min:2,max:4}),e.functions.featuresetbyid=function(r,t){return e.standardFunctionAsync(r,t,(function(e,n,i){if(f.pcCheck(i,2,4,r,t),i[0]instanceof u){var a=f.toString(i[1]),o=f.defaultUndefined(i[2],null),s=f.toBoolean(f.defaultUndefined(i[3],!0));if(null===o&&(o=["*"]),!1===f.isArray(o))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,t);return i[0].featureSetById(a,s,o)}throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,t)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(r,t){return e.standardFunctionAsync(r,t,(function(e,n,i){if(f.pcCheck(i,1,2,r,t),f.isFeature(i[0])){var a=f.defaultUndefined(i[1],"datasource");return null===a&&(a="datasource"),a=f.toString(a).toLowerCase(),d.convertToFeatureSet(i[0].fullSchema(),a,r.lrucache,r.interceptor,r.spatialReference)}throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,t)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(r,t){return e.standardFunctionAsync(r,t,(function(e,n,i){if(f.pcCheck(i,2,5,r,t),null===i[0])throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.PortalRequired,t);if(i[0]instanceof a){var o=f.toString(i[1]),s=f.toString(i[2]),u=f.defaultUndefined(i[3],null),c=f.toBoolean(f.defaultUndefined(i[4],!0));if(null===u&&(u=["*"]),!1===f.isArray(u))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,t);var p=null;return r.services&&r.services.portal&&(p=r.services.portal),p=m.getPortal(i[0],p),d.constructFeatureSetFromPortalItem(o,s,r.spatialReference,u,c,p,r.lrucache,r.interceptor)}if(!1===f.isString(i[0]))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.PortalRequired,t);var E=f.toString(i[0]),h=f.toString(i[1]),g=f.defaultUndefined(i[2],null),y=f.toBoolean(f.defaultUndefined(i[3],!0));if(null===g&&(g=["*"]),!1===f.isArray(g))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,t);if(r.services&&r.services.portal)return d.constructFeatureSetFromPortalItem(E,h,r.spatialReference,g,y,r.services.portal,r.lrucache,r.interceptor);throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.PortalRequired,t)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(r,t){return e.standardFunctionAsync(r,t,(function(e,n,i){if(f.pcCheck(i,2,4,r,t),i[0]instanceof u){var a=f.toString(i[1]),o=f.defaultUndefined(i[2],null),s=f.toBoolean(f.defaultUndefined(i[3],!0));if(null===o&&(o=["*"]),!1===f.isArray(o))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,t);return i[0].featureSetByName(a,s,o)}throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,t)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(r,t){return e.standardFunction(r,t,(function(e,n,i){var a;f.pcCheck(i,1,1,r,t);var s,u=i[0],d={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(f.isString(u))void 0!==(u=JSON.parse(u)).layerDefinition?(d.layerDefinition=u.layerDefinition,d.featureSet=u.featureSet,u.layerDefinition.spatialReference&&(d.layerDefinition.spatialReference=u.layerDefinition.spatialReference)):(d.featureSet.features=u.features,d.featureSet.geometryType=u.geometryType,d.layerDefinition.geometryType=d.featureSet.geometryType,d.layerDefinition.objectIdField=u.objectIdFieldName,d.layerDefinition.typeIdField=u.typeIdFieldName,d.layerDefinition.globalIdField=u.globalIdFieldName,d.layerDefinition.fields=u.fields,u.spatialReference&&(d.layerDefinition.spatialReference=u.spatialReference));else{if(!(i[0]instanceof o))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,t);var c=T(u=JSON.parse(i[0].castToText(!0)),"layerdefinition");if(null!==c){d.layerDefinition.geometryType=T(c,"geometrytype",""),d.featureSet.geometryType=d.layerDefinition.geometryType,d.layerDefinition.globalIdField=T(c,"globalidfield",""),d.layerDefinition.objectIdField=T(c,"objectidfield",""),d.layerDefinition.typeIdField=T(c,"typeidfield",""),(b=T(c,"spatialreference",null))&&(d.layerDefinition.spatialReference=P(b));for(var m=0,p=T(c,"fields",[]);m<p.length;m++){var E={name:T(N=p[m],"name",""),alias:T(N,"alias",""),type:T(N,"type",""),nullable:T(N,"nullable",!0),editable:T(N,"editable",!0),length:T(N,"length",null),domain:L(T(N,"domain"))};d.layerDefinition.fields.push(E)}var h=T(u,"featureset",null);if(h){for(var g={},y=0,x=d.layerDefinition.fields;y<x.length;y++){g[(I=x[y]).name.toLowerCase()]=I.name}for(var A=0,S=T(h,"features",[]);A<S.length;A++){var v={},w=T(U=S[A],"attributes",{});for(var I in w)v[g[I.toLowerCase()]]=w[I];d.featureSet.features.push({attributes:v,geometry:R(T(U,"geometry",null))})}}}else{var b;d.layerDefinition.geometryType=T(u,"geometrytype",""),d.featureSet.geometryType=d.layerDefinition.geometryType,d.layerDefinition.objectIdField=T(u,"objectidfieldname",""),d.layerDefinition.typeIdField=T(u,"typeidfieldname",""),(b=T(u,"spatialreference",null))&&(d.layerDefinition.spatialReference=P(b));for(var C=0,D=T(u,"fields",[]);C<D.length;C++){var N;E={name:T(N=D[C],"name",""),alias:T(N,"alias",""),type:T(N,"type",""),nullable:T(N,"nullable",!0),editable:T(N,"editable",!0),length:T(N,"length",null),domain:L(T(N,"domain"))};d.layerDefinition.fields.push(E)}g={};for(var k=0,O=d.layerDefinition.fields;k<O.length;k++){g[(I=O[k]).name.toLowerCase()]=I.name}for(var W=0,M=T(u,"features",[]);W<M.length;W++){var U;v={},w=T(U=M[W],"attributes",{});for(var I in w)v[g[I.toLowerCase()]]=w[I];d.featureSet.features.push({attributes:v,geometry:R(T(U,"geometry",null))})}}}if(!1==(!!(s=d).layerDefinition&&!!s.featureSet&&!1!==function(e,r){for(var t=0,n=r;t<n.length;t++)if(n[t]===e)return!0;return!1}(s.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&null!==s.layerDefinition.objectIdField&&""!==s.layerDefinition.objectIdField&&!1!==f.isArray(s.layerDefinition.fields)&&!1!==f.isArray(s.featureSet.features)))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,t);return""===((null===(a=null==d?void 0:d.layerDefinition)||void 0===a?void 0:a.geometryType)||"")&&(d.layerDefinition.geometryType="esriGeometryNull"),F.create(d,r.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(r,i){var a=this;return e.standardFunctionAsync(r,i,(function(o,s,u){return t(a,void 0,void 0,(function(){var t,a,o,s,d,m,p,h,g,y,F,x,A,S,v,b,C;return n(this,(function(n){switch(n.label){case 0:if(f.pcCheck(u,2,2,r,i),!f.isArray(u[0])&&!f.isImmutableArray(u[0]))return[3,6];if(t=[],(a=u[0])instanceof c&&(a=a.toArray()),o=null,!f.isFunctionParameter(u[1]))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);o=u[1].createFunction(r),s=0,d=a,n.label=1;case 1:return s<d.length?(m=d[s],p=o(m),w.isPromiseLike(p)?[4,p]:[3,3]):[3,5];case 2:return!0===n.sent()&&t.push(m),[3,4];case 3:!0===p&&t.push(m),n.label=4;case 4:return s++,[3,1];case 5:return[2,t];case 6:return f.isFeatureSet(u[0])?[4,u[0].load()]:[3,13];case 7:if(h=n.sent(),g=I.WhereClause.create(u[1],h.getFieldsIndex()),!((y=g.getVariables()).length>0))return[3,12];F=[],x=0,n.label=8;case 8:return x<y.length?(A={name:y[x]},v=(S=F).push,[4,e.evaluateIdentifier(r,A)]):[3,11];case 9:v.apply(S,[n.sent()]),n.label=10;case 10:return x++,[3,8];case 11:for(b={},C=0;C<y.length;C++)b[y[C]]=F[C];return g.parameters=b,[2,new E({parentfeatureset:u[0],whereclause:g})];case 12:return[2,new E({parentfeatureset:u[0],whereclause:g})];case 13:throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i)}}))}))}))},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(r,i){var a=this;return e.standardFunctionAsync(r,i,(function(e,o,s){return t(a,void 0,void 0,(function(){var e;return n(this,(function(t){if(f.pcCheck(s,2,2,r,i),f.isFeatureSet(s[0]))return e=new x(s[1]),[2,new h({parentfeatureset:s[0],orderbyclause:e})];throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i)}))}))}))},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(r,i){var a=this;return e.standardFunctionAsync(r,i,(function(e,o,s){return t(a,void 0,void 0,(function(){return n(this,(function(e){if(f.pcCheck(s,2,2,r,i),f.isFeatureSet(s[0]))return[2,new g({parentfeatureset:s[0],topnum:s[1]})];if(f.isArray(s[0]))return f.toNumber(s[1])>=s[0].length?[2,s[0].slice(0)]:[2,s[0].slice(0,f.toNumber(s[1]))];if(f.isImmutableArray(s[0]))return f.toNumber(s[1])>=s[0].length()?[2,s[0].slice(0)]:[2,s[0].slice(0,f.toNumber(s[1]))];throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i)}))}))}))},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(r,i){var a=this;return e.standardFunctionAsync(r,i,(function(e,o,l){return t(a,void 0,void 0,(function(){var t,a;return n(this,(function(n){switch(n.label){case 0:return f.pcCheck(l,1,1,r,i),f.isFeatureSet(l[0])?[4,l[0].first(e.abortSignal)]:[3,2];case 1:return null!==(t=n.sent())?((a=s.createFromGraphicLikeObject(t.geometry,t.attributes,l[0],r.timeReference))._underlyingGraphic=t,[2,a]):[2,t];case 2:return f.isArray(l[0])?0===l[0].length?[2,null]:[2,l[0][0]]:f.isImmutableArray(l[0])?0===l[0].length()?[2,null]:[2,l[0].get(0)]:[2,null]}}))}))}))},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(r,i){var a=this;return e.standardFunctionAsync(r,i,(function(e,s,u){return t(a,void 0,void 0,(function(){var e,t,a;return n(this,(function(n){switch(n.label){case 0:if(f.pcCheck(u,1,2,r,i),e={minsize:-1,maxsize:-1,types:null,returnMetadata:!1},u.length>1)if(u[1]instanceof o)u[1].hasField("minsize")&&(e.minsize=f.toNumber(u[1].field("minsize"))),u[1].hasField("metadata")&&(e.returnMetadata=f.toBoolean(u[1].field("metadata"))),u[1].hasField("maxsize")&&(e.maxsize=f.toNumber(u[1].field("maxsize"))),u[1].hasField("types")&&(t=f.toStringArray(u[1].field("types"),!1)).length>0&&(e.types=t);else if(null!==u[1])throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);return f.isFeature(u[0])?((a=u[0]._layer)instanceof b&&(a=d.constructFeatureSet(a,r.spatialReference,["*"],!0,r.lrucache,r.interceptor)),null===a?[2,[]]:!1===f.isFeatureSet(a)?[2,[]]:[4,a.load()]):[3,2];case 1:return n.sent(),[2,a.queryAttachments(u[0].field(a.objectIdField),e.minsize,e.maxsize,e.types,e.returnMetadata)];case 2:if(null===u[0])return[2,[]];throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i)}}))}))}))},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(r,i){var a=this;return e.standardFunctionAsync(r,i,(function(e,o,s){return t(a,void 0,void 0,(function(){var e,t,a,o,u,c,m,p,E,h,g,F,x;return n(this,(function(n){switch(n.label){case 0:if(f.pcCheck(s,2,4,r,i),e=s[0],t=f.toString(s[1]),a=f.defaultUndefined(s[2],null),o=f.toBoolean(f.defaultUndefined(s[3],!0)),null===a&&(a=["*"]),!1===f.isArray(a))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);if(null===s[0])return[2,null];if(!f.isFeature(s[0]))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);return(u=e._layer)instanceof b&&(u=d.constructFeatureSet(u,r.spatialReference,["*"],!0,r.lrucache,r.interceptor)),null===u?[2,null]:!1===f.isFeatureSet(u)?[2,null]:[4,u.load()];case 1:return u=n.sent(),c=u.relationshipMetaData(),0===(m=c.filter((function(e){return e.name===t}))).length?[2,null]:void 0!==m[0].relationshipTableId&&null!==m[0].relationshipTableId&&m[0].relationshipTableId>-1?[2,d.constructFeatureSetFromRelationship(u,m[0],e.field(u.objectIdField),u.spatialReference,a,o,r.lrucache,r.interceptor)]:(p=u.serviceUrl())?(p="/"===p.charAt(p.length-1)?p+m[0].relatedTableId.toString():p+"/"+m[0].relatedTableId.toString(),[4,d.constructFeatureSetFromUrl(p,u.spatialReference,a,o,r.lrucache,r.interceptor)]):[2,null];case 2:return[4,(E=n.sent()).load()];case 3:return n.sent(),h=(h=E.relationshipMetaData()).filter((function(e){return e.id===m[0].id})),!1!==e.hasField(m[0].keyField)&&null!==e.field(m[0].keyField)?[3,5]:[4,u.getFeatureByObjectId(e.field(u.objectIdField),[m[0].keyField])];case 4:return(g=n.sent())?((F=I.WhereClause.create(h[0].keyField+"= @id",E.getFieldsIndex())).parameters={id:g.attributes[m[0].keyField]},[2,E.filter(F)]):[2,new y({parentfeatureset:E})];case 5:return(x=I.WhereClause.create(h[0].keyField+"= @id",E.getFieldsIndex())).parameters={id:e.field(m[0].keyField)},[2,E.filter(x)]}}))}))}))},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(r,i){var a=this;return e.standardFunctionAsync(r,i,(function(e,o,s){return t(a,void 0,void 0,(function(){var e,t,a,o,u,c,m,E,h,g,y,F,x,S,v,w,D,N,T,L,P,R,k,O,W,M,U,j,q,z,B,H,G,Z,_,V,Q;return n(this,(function(n){switch(n.label){case 0:if(f.pcCheck(s,2,3,r,i),e=s[0],t=f.toString(f.defaultUndefined(s[1],"")).toLowerCase(),a=f.isString(s[2])?f.toString(s[2]):null,null===s[0])return[2,null];if(!f.isFeature(s[0]))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);return(o=e._layer)instanceof b&&(o=d.constructFeatureSet(o,r.spatialReference,["*"],!0,r.lrucache,r.interceptor)),null===o?[2,null]:!1===f.isFeatureSet(o)?[2,null]:[4,o.load()];case 1:return n.sent(),u=o.serviceUrl(),[4,d.constructAssociationMetaDataFeatureSetFromUrl(u,r.spatialReference)];case 2:if(c=n.sent(),m=null,E=null,h=!1,null!==a&&""!==a&&void 0!==a){for(g=0,y=c.terminals;g<y.length;g++)(F=y[g]).terminalName===a&&(E=F.terminalId);null===E&&(h=!0)}for(x=c.associations.getFieldsIndex(),S=x.get("TOGLOBALID").name,v=x.get("FROMGLOBALID").name,w=x.get("TOTERMINALID").name,D=x.get("FROMTERMINALID").name,N=x.get("FROMNETWORKSOURCEID").name,T=x.get("TONETWORKSOURCEID").name,L=x.get("ASSOCIATIONTYPE").name,P=x.get("ISCONTENTVISIBLE").name,R=x.get("OBJECTID").name,k=0,O=o.fields;k<O.length;k++)if("esriFieldTypeGlobalID"===(W=O[k]).type){m=e.field(W.name);break}for(z in M=null,U=new p.SqlExpressionAdapted(new C({name:"percentalong",alias:"percentalong",type:"esrFieldTypeDouble"}),I.WhereClause.create("0",c.associations.getFieldsIndex())),j=new p.SqlExpressionAdapted(new C({name:"side",alias:"side",type:"esrFieldTypeString"}),I.WhereClause.create("''",c.associations.getFieldsIndex())),"globalid","globalId",q={},c.lkp)q[z]=c.lkp[z].sourceId;switch(B=new p.StringToCodeAdapted(new C({name:"classname",alias:"classname",type:"esriFieldTypeString"}),null,q),H="",t){case"midspan":H="(("+S+"='"+m+"') OR ( "+v+"='"+m+"')) AND ("+L+" IN (5))",B.codefield=I.WhereClause.create("CASE WHEN ("+S+"='"+m+"') THEN "+N+" ELSE "+T+" END",c.associations.getFieldsIndex()),(G=A.cloneField(p.AdaptedFeatureSet.findField(c.associations.fields,v))).name="globalid",G.alias="globalid",M=new p.SqlExpressionAdapted(G,I.WhereClause.create("CASE WHEN ("+v+"='"+m+"') THEN "+S+" ELSE "+v+" END",c.associations.getFieldsIndex())),U=c.unVersion>=4?new p.OriginalField(p.AdaptedFeatureSet.findField(c.associations.fields,x.get("PERCENTALONG").name)):new p.SqlExpressionAdapted(new C({name:"percentalong",alias:"percentalong",type:"esrFieldTypeDouble"}),I.WhereClause.create("0",c.associations.getFieldsIndex()));break;case"junctionedge":H="(("+S+"='"+m+"') OR ( "+v+"='"+m+"')) AND ("+L+" IN (4,6))",B.codefield=I.WhereClause.create("CASE WHEN ("+S+"='"+m+"') THEN "+N+" ELSE "+T+" END",c.associations.getFieldsIndex()),(Z=A.cloneField(p.AdaptedFeatureSet.findField(c.associations.fields,v))).name="globalid",Z.alias="globalid",M=new p.SqlExpressionAdapted(Z,I.WhereClause.create("CASE WHEN ("+v+"='"+m+"') THEN "+S+" ELSE "+v+" END",c.associations.getFieldsIndex())),j=new p.SqlExpressionAdapted(new C({name:"side",alias:"side",type:"esrFieldTypeString"}),I.WhereClause.create("CASE WHEN ("+L+"=4) THEN 'from' ELSE 'to' END",c.associations.getFieldsIndex()));break;case"connected":_=S+"='@T'",V=v+"='@T'",null!==E&&(_+=" AND "+w+"=@A",V+=" AND "+D+"=@A"),H="(("+_+") OR ("+V+"))",H=f.multiReplace(H,"@T",null!=m?m:""),_=f.multiReplace(_,"@T",null!=m?m:""),null!==E&&(_=f.multiReplace(_,"@A",E.toString()),H=f.multiReplace(H,"@A",E.toString())),B.codefield=I.WhereClause.create("CASE WHEN "+_+" THEN "+N+" ELSE "+T+" END",c.associations.getFieldsIndex()),(Q=A.cloneField(p.AdaptedFeatureSet.findField(c.associations.fields,v))).name="globalid",Q.alias="globalid",M=new p.SqlExpressionAdapted(Q,I.WhereClause.create("CASE WHEN "+_+" THEN "+v+" ELSE "+S+" END",c.associations.getFieldsIndex()));break;case"container":H=S+"='"+m+"' AND "+L+" = 2",null!==E&&(H+=" AND "+w+" = "+E.toString()),B.codefield=N,H="( "+H+" )",M=new p.FieldRename(p.AdaptedFeatureSet.findField(c.associations.fields,v),"globalid","globalid");break;case"content":H="("+v+"='"+m+"' AND "+L+" = 2)",null!==E&&(H+=" AND "+D+" = "+E.toString()),B.codefield=T,H="( "+H+" )",M=new p.FieldRename(p.AdaptedFeatureSet.findField(c.associations.fields,S),"globalid","globalid");break;case"structure":H="("+S+"='"+m+"' AND "+L+" = 3)",null!==E&&(H+=" AND "+w+" = "+E.toString()),B.codefield=N,H="( "+H+" )",M=new p.FieldRename(p.AdaptedFeatureSet.findField(c.associations.fields,v),"globalid","globalId");break;case"attached":H="("+v+"='"+m+"' AND "+L+" = 3)",null!==E&&(H+=" AND "+D+" = "+E.toString()),B.codefield=T,H="( "+H+" )",M=new p.FieldRename(p.AdaptedFeatureSet.findField(c.associations.fields,S),"globalid","globalId");break;default:throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i)}return h&&(H="1 <> 1"),[2,new p.AdaptedFeatureSet({parentfeatureset:c.associations,adaptedFields:[new p.OriginalField(p.AdaptedFeatureSet.findField(c.associations.fields,R)),new p.OriginalField(p.AdaptedFeatureSet.findField(c.associations.fields,P)),M,j,B,U],extraFilter:H?I.WhereClause.create(H,c.associations.getFieldsIndex()):null})]}}))}))}))},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(r,i){var a=this;return e.standardFunctionAsync(r,i,(function(s,u,d){return t(a,void 0,void 0,(function(){var t,a,s,u,c,m,p,E,h,g,y,F,x,A,v,w,b,C,D,T,L,P,R,k,O,W,M,U,j,q;return n(this,(function(n){switch(n.label){case 0:if(f.pcCheck(d,3,3,r,i),!f.isFeatureSet(d[0]))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);return[4,d[0].load()];case 1:if(t=n.sent(),a=[],s=[],u=!1,c=[],f.isString(d[1]))c.push(d[1]);else if(d[1]instanceof o)c.push(d[1]);else if(f.isArray(d[1]))c=d[1];else{if(!f.isImmutableArray(d[1]))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);c=d[1].toArray()}for(m=0,p=c;m<p.length;m++)if(F=p[m],f.isString(F))v=I.WhereClause.create(f.toString(F),t.getFieldsIndex()),E=!0===S.isSingleField(v)?f.toString(F):"%%%%FIELDNAME",a.push({name:E,expression:v}),"%%%%FIELDNAME"===E&&(u=!0);else{if(!(F instanceof o))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);if(h=F.hasField("name")?F.field("name"):"%%%%FIELDNAME",v=F.hasField("expression")?F.field("expression"):"","%%%%FIELDNAME"===h&&(u=!0),!h)throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);a.push({name:h,expression:I.WhereClause.create(v||h,t.getFieldsIndex())})}if(c=[],f.isString(d[2]))c.push(d[2]);else if(f.isArray(d[2]))c=d[2];else if(f.isImmutableArray(d[2]))c=d[2].toArray();else{if(!(d[2]instanceof o))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);c.push(d[2])}for(g=0,y=c;g<y.length;g++){if(!((F=y[g])instanceof o))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);if(x=F.hasField("name")?F.field("name"):"",A=F.hasField("statistic")?F.field("statistic"):"",v=F.hasField("expression")?F.field("expression"):"",!x||!A||!v)throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);s.push({name:x,statistic:A.toLowerCase(),expression:I.WhereClause.create(v,t.getFieldsIndex())})}if(u){for(w={},b=0,C=t.fields;b<C.length;b++)W=C[b],w[W.name.toLowerCase()]=1;for(D=0,T=a;D<T.length;D++)"%%%%FIELDNAME"!==(W=T[D]).name&&(w[W.name.toLowerCase()]=1);for(L=0,P=s;L<P.length;L++)"%%%%FIELDNAME"!==(W=P[L]).name&&(w[W.name.toLowerCase()]=1);for(R=0,k=0,O=a;k<O.length;k++)if("%%%%FIELDNAME"===(W=O[k]).name){for(;1===w["field_"+R.toString()];)R++;w["field_"+R.toString()]=1,W.name="FIELD_"+R.toString()}}M=0,U=a,n.label=2;case 2:return M<U.length?[4,N(U[M].expression,e,r)]:[3,5];case 3:n.sent(),n.label=4;case 4:return M++,[3,2];case 5:j=0,q=s,n.label=6;case 6:return j<q.length?[4,N(q[j].expression,e,r)]:[3,9];case 7:n.sent(),n.label=8;case 8:return j++,[3,6];case 9:return[2,d[0].groupby(a,s)]}}))}))}))},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(r,i){var a=this;return e.standardFunctionAsync(r,i,(function(s,u,d){return t(a,void 0,void 0,(function(){var t,a,s,u,c,m,p,E,h,g,y,F,x,A,v,w,b,C,T,L,P;return n(this,(function(n){switch(n.label){case 0:return f.isFeatureSet(d[0])?(f.pcCheck(d,2,2,r,i),[4,d[0].load()]):[3,6];case 1:if(t=n.sent(),a=[],s=[],f.isString(d[1]))s.push(d[1]);else if(d[1]instanceof o)s.push(d[1]);else if(f.isArray(d[1]))s=d[1];else{if(!f.isImmutableArray(d[1]))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);s=d[1].toArray()}for(u=!1,c=0,m=s;c<m.length;c++)if(p=m[c],f.isString(p))g=I.WhereClause.create(f.toString(p),t.getFieldsIndex()),E=!0===S.isSingleField(g)?f.toString(p):"%%%%FIELDNAME",a.push({name:E,expression:g}),"%%%%FIELDNAME"===E&&(u=!0);else{if(!(p instanceof o))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);if(h=p.hasField("name")?p.field("name"):"%%%%FIELDNAME",g=p.hasField("expression")?p.field("expression"):"","%%%%FIELDNAME"===h&&(u=!0),!h)throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.InvalidParameter,i);a.push({name:h,expression:I.WhereClause.create(g||h,t.getFieldsIndex())})}if(u){for(y={},F=0,x=t.fields;F<x.length;F++)T=x[F],y[T.name.toLowerCase()]=1;for(A=0,v=a;A<v.length;A++)"%%%%FIELDNAME"!==(T=v[A]).name&&(y[T.name.toLowerCase()]=1);for(w=0,b=0,C=a;b<C.length;b++)if("%%%%FIELDNAME"===(T=C[b]).name){for(;1===y["field_"+w.toString()];)w++;y["field_"+w.toString()]=1,T.name="FIELD_"+w.toString()}}L=0,P=a,n.label=2;case 2:return L<P.length?[4,N(P[L].expression,e,r)]:[3,5];case 3:n.sent(),n.label=4;case 4:return L++,[3,2];case 5:return[2,d[0].groupby(a,[])];case 6:return[2,D("distinct",0,0,d)]}}))}))}))})}}));