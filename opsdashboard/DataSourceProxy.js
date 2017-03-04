// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/json","dojo/Deferred","../layers/Field","../tasks/FeatureSet","../renderers/jsonUtils","./core/messageHandler","./core/errorMessages","./core/MessageReceiver"],function(e,t,r,i,n,s,a,o,u,d){return e([d],{id:null,name:null,mapWidgetId:null,objectIdFieldName:null,displayFieldName:null,typeIdFieldName:null,fields:null,types:null,geometryType:null,supportsSelection:!1,isBroken:!1,_popupInfo:null,_renderer:null,advancedQueryCapabilities:null,constructor:function(){this.fields||(this.fields=[]);for(var e=0;e<this.fields.length;e++){var t=this.fields[e];"string"==typeof t&&(t=r.parse(t)),this.fields[e]=new n(t)}},executeQuery:function(e){var r={functionName:"executeQuery",args:{dataSourceId:this.id,query:e}};return o._sendMessageWithReply(r).then(t.hitch(this,function(e){this.isBroken=!1;var t=e.featureSet;return new s(t)}),t.hitch(this,function(e){throw this.isBroken=!0,e}))},getAssociatedSelectionDataSourceId:function(){return o._sendMessageWithReply({functionName:"getAssociatedSelectionDataSource",args:{dataSourceId:this.id}}).then(t.hitch(this,function(e){return e.dataSourceId}))},selectFeaturesByObjectIds:function(e){if(!Array.isArray(e))throw new Error(u.invalidObjectIdArray);if(!this.supportsSelection)throw new Error(u.selectionNotSupported);o._sendMessage({functionName:"selectFeaturesByIds",args:{dataSourceId:this.id,objectIds:e}})},selectFeatures:function(e){if(!this.supportsSelection)throw new Error(u.selectionNotSupported);o._sendMessage({functionName:"selectFeatures",args:{dataSourceId:this.id,query:e}})},clearSelection:function(){this.supportsSelection&&o._sendMessage({functionName:"clearSelection",args:{dataSourceId:this.id}})},getPopupInfo:function(){return this._popupInfo?(new i).resolve(this._popupInfo):o._sendMessageWithReply({functionName:"getPopupInfo",args:{dataSourceId:this.id}}).then(t.hitch(this,function(e){return this._popupInfo=e.popupInfo,this._popupInfo}))},getRenderer:function(){return this._renderer?(new i).resolve(this._renderer):o._sendMessageWithReply({functionName:"getRenderer",args:{dataSourceId:this.id}}).then(t.hitch(this,function(e){return e.renderer?(this._renderer=a.fromJson(e.renderer),this._renderer):null}))},getAdvancedQueryCapabilities:function(){return this.advancedQueryCapabilities?(new i).resolve(this.advancedQueryCapabilities):o.isNative?o._sendMessageWithReply({functionName:"getAdvancedQueryCapabilities",args:{dataSourceId:this.id}}).then(t.hitch(this,function(e){return e.advancedQueryCapabilities?(this.advancedQueryCapabilities=e.advancedQueryCapabilities,this.advancedQueryCapabilities):null})):(new i).resolve(null)},_findField:function(e){if(!e||!Array.isArray(this.fields))return null;for(var t=0;t<this.fields.length;t++)if(this.fields[t].name===e)return this.fields[t];return null},_findType:function(e){if(!e||!Array.isArray(this.types))return null;for(var t=0;t<this.types.length;t++)if(this.types[t].id===e)return this.types[t];return null},_getCodedValueFromCodedDomain:function(e,t){if(!t||"codedValue"!==t.type)return null;for(var r=0;r<t.codedValues.length;r++)if(t.codedValues[r].code===e)return t.codedValues[r];return null},getTypeFromFeature:function(e){return this.typeIdFieldName?this._findType(e.attributes[this.typeIdFieldName]):null},getValueFromFeature:function(e,t){var r=this._findField(t);if(!t||!r)return null;var i=e.attributes[t];if(!i&&(i=e.attributes[t.toUpperCase()],!i))return null;if(this.typeIdFieldName===t){var n=this._findType(i);if(n)return n.name}var s,a=this.getTypeFromFeature(e);if(a&&Array.isArray(a.domains)){var o=a.domains[t];if(s=this._getCodedValueFromCodedDomain(i,o))return s.name}return s=this._getCodedValueFromCodedDomain(i,r.domain),s?s.name:i}})});