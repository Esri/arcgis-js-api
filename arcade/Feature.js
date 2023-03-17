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

define(["require","exports","./polyfill/tsSupport/awaiter","./polyfill/tsSupport/generator","./polyfill/tsSupport/assign","./polyfill/tsSupport/spreadarray","./Dictionary","./ImmutableArray","./languageUtils","../geometry/Geometry","../geometry/Point","../geometry/jsonUtils","./polyfill/maybe","./ArcadeDate","./executionError"],(function(e,t,r,i,n,a,o,s,l,u,f,d,c,h,y){"use strict";return function(){function e(){this.arcadeDeclaredClass="esri.arcade.Feature",this._geometry=null,this.attributes=null,this._layer=null,this._datesfixed=!0,this.dateTimeReferenceFieldIndex=null,this.contextTimeReference=null,this.immutable=!0,this._datefields=null,this.immutable=!0}return e.createFromGraphic=function(t,r){var i=new e;return i.contextTimeReference=null!=r?r:null,i._geometry=c.isSome(t.geometry)?t.geometry:null,void 0===t.attributes?i.attributes={}:null===t.attributes?i.attributes={}:i.attributes=t.attributes,t._sourceLayer?(i._layer=t._sourceLayer,i._datesfixed=!1):t._layer?(i._layer=t._layer,i._datesfixed=!1):t.layer&&"fields"in t.layer?(i._layer=t.layer,i._datesfixed=!1):t.sourceLayer&&"fields"in t.sourceLayer&&(i._layer=t.sourceLayer,i._datesfixed=!1),i},e.createFromArcadeFeature=function(t){var r=new e;return r._datesfixed=t._datesfixed,r.attributes=t.attributes,r._geometry=t._geometry,t._layer&&(r._layer=t._layer),r.dateTimeReferenceFieldIndex=t.dateTimeReferenceFieldIndex,r.contextTimeReference=t.contextTimeReference,r},e.createFromArcadeDictionary=function(t){var r=new e;return r.attributes=t.field("attributes"),null!==r.attributes&&r.attributes instanceof o?(r.attributes=r.attributes.attributes,null===r.attributes&&(r.attributes={})):r.attributes={},r._geometry=t.field("geometry"),null!==r._geometry&&(r._geometry instanceof o?r._geometry=e.parseGeometryFromDictionary(r._geometry):r._geometry instanceof u||(r._geometry=null)),r},e.createFromGraphicLikeObject=function(t,r,i,n){void 0===i&&(i=null);var a=new e;return a.contextTimeReference=null!=n?n:null,null===r&&(r={}),a.attributes=r,a._geometry=t||null,a._layer=i,a._layer&&(a._datesfixed=!1),a},e.prototype.repurposeFromGraphicLikeObject=function(e,t,r){void 0===r&&(r=null),null===t&&(t={}),this.attributes=t,this._geometry=e||null,this._layer=r,this._layer?this._datesfixed=!1:this._datesfixed=!0},Object.defineProperty(e.prototype,"layerPreferredTimeZone",{get:function(){var e,t;return null!==(t=null===(e=this.dateTimeReferenceFieldIndex)||void 0===e?void 0:e.layerPreferredTimeZone)&&void 0!==t?t:""},enumerable:!1,configurable:!0}),e.prototype.fieldSourceTimeZone=function(e){var t,r;return null!==(r=null===(t=this.dateTimeReferenceFieldIndex)||void 0===t?void 0:t.fieldTimeZone(e))&&void 0!==r?r:""},e.prototype.castToText=function(e){void 0===e&&(e=!1);var t="";for(var r in!1===this._datesfixed&&this._fixDates(),this.attributes){""!==t&&(t+=",");var i=this.attributes[r];null==i?t+=JSON.stringify(r)+":null":l.isBoolean(i)||l.isNumber(i)||l.isString(i)?t+=JSON.stringify(r)+":"+JSON.stringify(i):i instanceof u?t+=JSON.stringify(r)+":"+l.toStringExplicit(i):i instanceof s?t+=JSON.stringify(r)+":"+l.toStringExplicit(i,null,e):i instanceof Array?t+=JSON.stringify(r)+":"+l.toStringExplicit(i,null,e):i instanceof h.ArcadeDate?t+=e?JSON.stringify(r)+":"+JSON.stringify(i.getTime()):JSON.stringify(r)+":"+i.stringify():null!==i&&"object"==typeof i&&void 0!==i.castToText&&(t+=JSON.stringify(r)+":"+i.castToText(e))}return'{"geometry":'+(null===this.geometry()?"null":l.toStringExplicit(this.geometry()))+',"attributes":{'+t+"}}"},e.prototype._fixDates=function(){if(null!==this._datefields)return this._datefields.length>0&&this._fixDateFields(this._datefields),void(this._datesfixed=!0);for(var e=[],t=this._layer.fields,r=0;r<t.length;r++){var i=t[r],n=i.type;"date"!==n&&"esriFieldTypeDate"!==n||e.push(i.name)}this._datefields=e,e.length>0&&this._fixDateFields(e),this._datesfixed=!0},e.prototype.isUnknownDateTimeField=function(e){var t;return"unknown"===(null===(t=this.dateTimeReferenceFieldIndex)||void 0===t?void 0:t.fieldTimeZone(e))},e.prototype._fixDateFields=function(e){var t,r;this.attributes=n({},this.attributes);for(var i=null!==(r=null===(t=this.contextTimeReference)||void 0===t?void 0:t.timeZone)&&void 0!==r?r:"system",a=0;a<e.length;a++){var o=this.attributes[e[a]];if(null===o);else if(void 0===o){for(var s in this.attributes)if(s.toLowerCase()===e[a].toLowerCase()){if(null!==(o=this.attributes[s])){var u=this.isUnknownDateTimeField(s);l.isDate(o)?this.attributes[s]=o:o instanceof Date?this.attributes[s]=u?h.ArcadeDate.unknownDateJSToArcadeDate(o):h.ArcadeDate.dateJSAndZoneToArcadeDate(o,i):this.attributes[s]=u?h.ArcadeDate.unknownEpochToArcadeDate(o):h.ArcadeDate.epochToArcadeDate(o,i)}break}}else{u=this.isUnknownDateTimeField(e[a]);l.isDate(o)?this.attributes[e[a]]=o:o instanceof Date?this.attributes[e[a]]=u?h.ArcadeDate.unknownDateJSToArcadeDate(o):h.ArcadeDate.dateJSAndZoneToArcadeDate(o,i):this.attributes[e[a]]=u?h.ArcadeDate.unknownEpochToArcadeDate(o):h.ArcadeDate.epochToArcadeDate(o,i)}}},e.prototype.geometry=function(){return null===this._geometry?this._geometry:this._geometry instanceof u?this._geometry:(this._geometry=d.fromJson(this._geometry),this._geometry)},e.prototype.field=function(e){!1===this._datesfixed&&this._fixDates();var t=this.attributes[e];if(void 0!==t)return t;var r=e.toLowerCase();for(var i in this.attributes)if(i.toLowerCase()===r)return this.attributes[i];if(this._hasFieldDefinition(r))return null;throw new y.ArcadeExecutionError(null,y.ExecutionErrorCodes.FieldNotFound,null,{key:e})},e.prototype._hasFieldDefinition=function(e){if(null===this._layer)return!1;for(var t=0;t<this._layer.fields.length;t++){if(this._layer.fields[t].name.toLowerCase()===e)return!0}return!1},e.prototype.setField=function(e,t){if(this.immutable)throw new y.ArcadeExecutionError(null,y.ExecutionErrorCodes.Immutable,null);if(t instanceof Date&&(t=this.isUnknownDateTimeField(e)?h.ArcadeDate.unknownDateJSToArcadeDate(t):h.ArcadeDate.dateJSToArcadeDate(t)),!1===l.isSimpleType(t))throw new y.ArcadeExecutionError(null,y.ExecutionErrorCodes.TypeNotAllowedInFeature,null);var r=e.toLowerCase();if(void 0===this.attributes[e]){for(var i in this.attributes)if(i.toLowerCase()===r)return void(this.attributes[i]=t);this.attributes[e]=t}else this.attributes[e]=t},e.prototype.hasField=function(e){var t=e.toLowerCase();if(void 0!==this.attributes[e])return!0;for(var r in this.attributes)if(r.toLowerCase()===t)return!0;return!!this._hasFieldDefinition(t)},e.prototype.keys=function(){var e=[],t={};for(var r in this.attributes)e.push(r),t[r.toLowerCase()]=1;if(null!==this._layer)for(var i=0;i<this._layer.fields.length;i++){var n=this._layer.fields[i];1!==t[n.name.toLowerCase()]&&e.push(n.name)}return e=e.sort()},e.parseGeometryFromDictionary=function(t){var r=e._convertDictionaryToJson(t,!0);return void 0!==r.hasm&&(r.hasM=r.hasm,delete r.hasm),void 0!==r.hasz&&(r.hasZ=r.hasz,delete r.hasz),void 0!==r.spatialreference&&(r.spatialReference=r.spatialreference,delete r.spatialreference),void 0!==r.rings&&(r.rings=this._fixPathArrays(r.rings,!0===r.hasZ,!0===r.hasZ)),void 0!==r.paths&&(r.paths=this._fixPathArrays(r.paths,!0===r.hasZ,!0===r.hasM)),void 0!==r.points&&(r.points=this._fixPointArrays(r.points,!0===r.hasZ,!0===r.hasM)),d.fromJson(r)},e._fixPathArrays=function(e,t,r){var i=[];if(e instanceof Array)for(var n=0;n<e.length;n++)i.push(this._fixPointArrays(e[n],t,r));else if(e instanceof s)for(n=0;n<e.length();n++)i.push(this._fixPointArrays(e.get(n),t,r));return i},e._fixPointArrays=function(e,t,r){var i=[];if(e instanceof Array)for(var n=0;n<e.length;n++){(a=e[n])instanceof f?t&&r?i.push([a.x,a.y,a.z,a.m]):t?i.push([a.x,a.y,a.z]):r?i.push([a.x,a.y,a.m]):i.push([a.x,a.y]):a instanceof s?i.push(a.toArray()):i.push(a)}else if(e instanceof s)for(n=0;n<e.length();n++){var a;(a=e.get(n))instanceof f?t&&r?i.push([a.x,a.y,a.z,a.m]):t?i.push([a.x,a.y,a.z]):r?i.push([a.x,a.y,a.m]):i.push([a.x,a.y]):a instanceof s?i.push(a.toArray()):i.push(a)}return i},e._convertDictionaryToJson=function(t,r){void 0===r&&(r=!1);var i={};for(var n in t.attributes){var a=t.attributes[n];a instanceof o&&(a=e._convertDictionaryToJson(a)),r?i[n.toLowerCase()]=a:i[n]=a}return i},e.parseAttributesFromDictionary=function(e){var t={};for(var r in e.attributes){var i=e.attributes[r];if(!l.isSimpleType(i))throw new y.ArcadeExecutionError(null,y.ExecutionErrorCodes.InvalidParameter,null);t[r]=i}return t},e.fromJson=function(t,r){var i=null;null!==t.geometry&&void 0!==t.geometry&&(i=d.fromJson(t.geometry));var n={};if(null!==t.attributes&&void 0!==t.attributes)for(var a in t.attributes){var o=t.attributes[a];if(null===o)n[a]=o;else{if(!(l.isString(o)||l.isNumber(o)||l.isBoolean(o)||l.isDate(o)))throw new y.ArcadeExecutionError(null,y.ExecutionErrorCodes.InvalidParameter,null);n[a]=o}}return e.createFromGraphicLikeObject(i,n,null,null!=r?r:null)},e.prototype.fullSchema=function(){return this._layer},e.prototype.gdbVersion=function(){if(null===this._layer)return"";var e=this._layer.gdbVersion;return void 0===e?"":""===e&&this._layer.capabilities&&this._layer.capabilities.isVersioned?"SDE.DEFAULT":e},e.prototype.castAsJson=function(e){var t,r,i={attributes:{},geometry:!0===(null==e?void 0:e.keepGeometryType)?this.geometry():null!==(r=null===(t=this.geometry())||void 0===t?void 0:t.toJson())&&void 0!==r?r:null};for(var n in this.attributes){var a=this.attributes[n];void 0!==a&&(i.attributes[n]=l.castAsJson(a,e))}return i},e.prototype.castAsJsonAsync=function(e,t){return void 0===e&&(e=null),r(this,void 0,void 0,(function(){return i(this,(function(e){return[2,this.castAsJson(t)]}))}))},e}()}));