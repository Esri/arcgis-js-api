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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Deferred","dojo/store/util/SimpleQueryEngine","dojo/store/util/QueryResults","./DeferredStore","./KeywordFilter"],function(t,e,a,i,r,n,o,s){return t(null,{categories:null,dataCollections:null,favorites:null,idProperty:"fullName",_data:null,_variables:null,queryEngine:r,constructor:function(){this.categories=new o({syncQuery:e.hitch(this,this._queryCategories)}),this.dataCollections=new o({syncQuery:e.hitch(this,this._queryDataCollections)})},_queryCategories:function(t,e){t=this._cleanUpCountryID(t);var a;if("object"==typeof t&&t.dataCollectionID){var i=this.dataCollections.get(t.dataCollectionID);delete t.dataCollectionID,a=i?i.categories:[]}else a=this.categories.data;return this.categories.queryEngine(t,e)(a)},_queryDataCollections:function(t,e){t=this._cleanUpCountryID(t);var a;if("object"==typeof t&&t.categoryID){var i=this.categories.get(t.categoryID);delete t.categoryID,a=i?i.dataCollections:[]}else a=this.dataCollections.data;return this.dataCollections.queryEngine(t,e)(a)},_cleanUpCountryID:function(t){return"object"==typeof t&&(t=e.mixin({},t),"countryID"in t&&delete t.countryID),t},_clearAllStores:function(){this._data=[],this._variables={},this.categories.setData(),this.dataCollections.setData()},synchronize:function(t){return(new i).resolve()},get:function(t){return this._variables[t]||null},getIdentity:function(t){return t&&t[this.idProperty]||null},query:function(t,e){return this._asyncQuery(t,e)},_asyncQuery:function(t,a,i){return n(o.resolveCallback(i&&i._resolver||this.categories.resolver,t,e.hitch(this,this._syncQuery,t,a,i)))},_syncQuery:function(t,a,i){var r={},n=[i&&i.queryFilter||e.hitch(this,this.queryFilter)];if("function"==typeof t)n.push(t);else{t=t||{};var o,l;for(var u in t)switch(u){case"countryID":break;case"categoryID":case"dataCollectionID":r[u]=t[u];break;case"searchString":var c=new s(t[u]);n.push(function(t){return c.match(t)});break;case"favorites":var h=t[u];h&&(h=i&&"undefined"!=typeof i.favorites?i.favorites:this.favorites,n.push(e.hitch(this,function(t){return h&&h.contains&&h.contains(this.getIdentity(t))})));break;case"filters":var d=this._prepareFilterHash(t[u]);d&&n.push(function(t){for(var e in t.filteringTags)if(d[e]||d["*"])return!0;return!1});break;case"additionalData":l=t[u];break;default:o=o||{},o[u]=t[u]}o&&n.push(function(t){for(var e in o){var a=o[e];if(a&&a.test){if(!a.test(t[e],t))return!1}else if(a!=t[e])return!1}return!0})}t=this._composeQuery(n);var f;if(r.dataCollectionID)f=this.dataCollections.get(r.dataCollectionID),!f&&l&&(f=l.getDataCollection(r.dataCollectionID));else{if(!r.categoryID)return this._query(this._data,t,a,[l&&l.getVariables(),this._getCustomData()]);f=this.categories.get(r.categoryID),!f&&l&&(f=l.getCategory(r.categoryID))}return f&&f.query(t,a)||[]},_composeQuery:function(t){return 1==t.length?t[0]:function(e){return a.every(t,function(t){return t(e)})}},queryFilter:function(t){return!0},_query:function(t,e,a,i){var r=t.length;this._addAdditionalData(t,i);var n=this.queryEngine(e,a)(t);return t.length=r,n},_addAdditionalData:function(t,e){a.forEach(e,function(e){e instanceof Array?this._addAdditionalData(t,e):e&&t.push(e)},this)},getPopularVariables:function(t,e,a){return t&&t.getPopularVariables?t.getPopularVariables(e,a):[]},_getCustomData:function(){return null},_getCustomCategoryData:function(t){return null},_getCustomDataCollectionData:function(t){return null},getRefineFilters:function(t){var e={};if(t.dataCollectionID){var a=this.dataCollections.get(t.dataCollectionID);!a&&t.additionalData&&(a=t.additionalData.getDataCollection(t.dataCollectionID)),a&&a.filters&&this._combineFilters(a.filters,e)}else if(t.categoryID){var i=this.categories.get(t.categoryID);!i&&t.additionalData&&(i=t.additionalData.getCategory(t.categoryID)),i&&this._collectCategoryFilters(i,e)}else this._collectAllFilters(e,t.additionalData);var r=this._prepareFilterHash(t.filters);if(r&&!r["*"]){var n=e;e={};for(var o in n)r[o]&&(e[o]=n[o])}return e},_prepareFilterHash:function(t){if("string"==typeof t&&(t=t.split(",")),!t||!t.length)return null;var i={};return a.forEach(t,function(t){i[e.trim(t)]=!0}),i},_collectAllFilters:function(t,e){a.forEach(this.categories.data,function(e){this._collectCategoryFilters(e,t)},this),a.forEach(e&&e.getCategories(),function(e){this._collectCategoryFilters(e,t)},this)},_collectCategoryFilters:function(t,e){a.forEach(t.dataCollections,function(t){this._combineFilters(t.filters,e)},this)},_combineFilters:function(t,a){for(var i in t){var r=t[i],n=a[r.id];n?this._mergeFilter(n,r):(n=e.mixin({},r),a[r.id]=n)}},_mergeFilter:function(t,e){if(t.type==e.type)if("Range"==t.type){var i=t.rangeMin,r=e.rangeMin;!isNaN(i)&&!isNaN(r)&&i>r&&(t.rangeMin=r),i=t.rangeMax,r=e.rangeMax,!isNaN(i)&&!isNaN(r)&&r>i&&(t.rangeMax=r)}else i=this._arrayToObject(t.enumValues.split(",")),r=e.enumValues.split(","),a.forEach(r,function(e){i[e]||(t.enumValues+=","+e)})},getStates:function(t){return null},_processDataCollections:function(t,i){i=i||{variables:{},categories:{},dataCollections:[]},a.forEach(t,function(t){if(!this._isDataCollectionDisallowed(t)){var r=t.variables||t.data,n=t.id||t.dataCollectionID;t=e.mixin({id:n},t.metadata),a.forEach(t.filters,function(t){this._prepareFilter(t)},this),t.filters=this._arrayToObject(t.filters,"id"),t.hash={},t.data=t.variables=[];var o=this;t.query=function(t,e){return o._query(this.data,t,e,o._getCustomDataCollectionData(this))};var s=[];a.forEach(t.categories,function(e){s.push(this._prepareCategory(e,t,i))},this),t.categories=s,a.forEach(r,function(e){this._processVariable(e,t,i)},this),i.dataCollections.push(t)}},this);var r=this.categories.queryEngine({},{sort:[{attribute:"displayOrder",descending:!0}]})(this._objectToArray(i.categories));return this.categories.setData(r),this.dataCollections.setData(i.dataCollections),i},_prepareFilter:function(t){"Range"==t.type?(t.rangeMin=Number(t.rangeMin),t.rangeMin||(t.rangeMin=0),t.rangeMax=Number(t.rangeMax)):t.enumValues=this._trimArray(t.enumValues.split(",")).join(",")},_prepareCategory:function(t,e,a){var i=Number(t.displayOrder)||0,r=a.categories[t.id];if(r)r.displayOrder=Math.max(i,r.displayOrder);else{r=t,r.hash={},r.data=[],r.dataCollections=[],r.displayOrder=i,r.popularityHash={};var n=this;r.query=function(t,e){return n._query(this.data,t,e,n._getCustomCategoryData(this))},r.getPopularVariables=function(t,e){return this.popularityArray||(this.popularityArray=n._objectToArray(this.popularityHash)),n._queryPopularVariables(this.popularityArray,t,e)},a.categories[t.id]=r}return r.dataCollections.push(e),r},_queryPopularVariables:function(t,e,a){for(var i=this,r=a&&a.queryFilter||this.queryFilter,n=this.queryEngine(function(t){var e=i.get(t.id);return e?r(e):!1},e)(t),o=0;o<n.length;o++){var s=n[o];n[o]=this.get(s.id)}return n},_processVariable:function(t,i,r){var n=t.popularity;if(void 0!==n&&(delete t.popularity,n=Number(n)),!this._isVariableDisallowed(t)){this._prepareVariable(t);var o=this._createUniqueVariableId(t),s=i.id+"."+t.id,l=r.variables[o];l?(e.mixin(l.filteringTags,t.filteringTags),t.indexBase&&(l.indexBase=t.indexBase),t.hideInDataBrowser||(l.hideInDataBrowser=!1)):(l=t,l[this.idProperty]=s,r.variables[o]=l,this._data.push(l)),this._registerVariable(l,s),this._isVariableAllowedInCategories(t,i)&&(s=l[this.idProperty],i.hash[l.id]||(i.hash[l.id]=l,i.data.push(l)),a.forEach(i.categories,function(t){if(t.hash[s]||(t.hash[s]=l,t.data.push(l)),n){var e=t.popularityHash[s];e?e.popularity<n&&(e.popularity=n):(e={id:s,popularity:n},t.popularityHash[s]=e)}},this))}},_isDataCollectionDisallowed:function(t){return!t.metadata||!t.metadata.categories},_isVariableDisallowed:function(t){return t.fieldCategory?!1:!0},_createUniqueVariableId:function(t){return t.id+"."+t.description},_registerVariable:function(t,e){this._variables[e]=t},_isVariableAllowedInCategories:function(t,e){return!0},_prepareVariable:function(t){t.filteringTags=this._arrayToObject(t.filteringTags,"id"),t.description||(t.description=t.alias)},_trimArray:function(t){for(var a=0;a<t.length;a++)t[a]=e.trim(t[a]);return t},_objectToArray:function(t){var e=[];for(var a in t)e.push(t[a]);return e},_arrayToObject:function(t,e){var i={};return a.forEach(t,function(t){var a=e?t[e]:t;i[a]=t}),i}})});