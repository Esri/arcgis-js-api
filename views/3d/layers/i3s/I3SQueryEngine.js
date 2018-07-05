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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/promise/all","../../../../core/Error","../../../../core/promiseUtils","../../../../layers/graphics/dehydratedFeatures","../../../../tasks/support/FeatureSet"],function(t,e,r,n,u,o,i){return function(){function t(t,e,r){this._layer=t,this._support=e,this._options=r}return t.prototype.queryExtent=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var r=0,n=e._support.createExtentBuilder();return e._forAllQueried(t,function(t){r++,n.add(t)}),{count:r,extent:0===r?null:n.getExtent()}})},t.prototype.queryFeatureCount=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var r=0;return e._forAllQueried(t,function(){return r++}),r})},t.prototype.queryFeatures=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var o=[],i=t&&t.outFields,s=[];return e._forAllQueried(t,function(t){return s.push(e._support.createGraphic(t))},function(t){i&&(o.push(e._support.requestFields(t,s,i)),s=[])})>0&&!t.num?u.reject(new n("Unsupported Query","Large feature query, use Query.num and Query.start to batch")):(i||o.push(u.resolve(s)),r(o))}).then(function(t){for(var r=[],n=0;n<t.length;++n)for(var u=t[n],s=0;s<u.length;++s)r.push(o.hydrateGraphic(u[s],e._layer));var a=new i;return a.features=r,a})},t.prototype.queryObjectIds=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var r=[];return e._forAllQueried(t,function(t){return r.push(t.id)}),r})},t.defaultExtentBuilder=function(t){var e=null;return{add:function(r){var n=t(r);n&&(e=null!=e?e.union(n):n.clone())},getExtent:function(){return e}}},t.prototype._forAllQueried=function(t,e,r){var n=[];if(t&&t.objectIds){var u=t.objectIds;n.push(function(t){return u.indexOf(t.id)>=0})}var o=t&&t.start||0,i=t&&t.num||1e4;return n.push(function(){return i<=0?(--i,!1):o>0?(--o,!1):(--i,!0)}),this._support.forAll(function(t){for(var r=0,u=n;r<u.length;r++){if(!(0,u[r])(t))return}e(t)},r),Math.max(0,-i)},t.prototype._rejectUnsupported=function(t){if(null==t)return u.resolve();var e=function(t){return u.reject(new n("Unsupported Query","Unsupported property '"+t+"'"))};return null!=t.distance?e("distance"):null!=t.geometryPrecision?e("geometryPrecision"):t.groupByFieldsForStatistics&&t.groupByFieldsForStatistics.length?e("groupByFieldsForStatistics"):null!=t.maxAllowableOffset?e("maxAllowableOffset"):t.multipatchOption?e("multipatchOption"):t.orderByFields&&t.orderByFields.length?e("orderByFields"):t.outSpatialReference?e("outSpatialReference"):t.outStatistics&&t.outStatistics.length?e("outStatistics"):t.pixelSize?e("pixelSize"):t.quantizationParameters?e("quantizationParameters"):t.relationParameter?e("relationParameter"):t.returnDistinctValues?e("returnDistinctValues"):t.text?e("text"):t.timeExtent?e("timeExtent"):t.where?e("where"):t.geometry?e("geometry"):!this._options.enableOutFields&&t.outFields&&t.outFields.length?e("outFields"):!this._options.enableObjectId&&t.objectIds&&t.objectIds.length?e("objectIds"):u.resolve()},t}()});