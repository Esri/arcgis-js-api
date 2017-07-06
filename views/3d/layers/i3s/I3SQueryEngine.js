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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/promise/all","../../../../core/promiseUtils","../../../../core/Error","../../../../tasks/support/FeatureSet"],function(t,e,r,n,u,o){var i=function(){function t(t,e){this._support=t,this._options=e}return t.prototype.queryExtent=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var r=0,n=e._support.createExtentBuilder();return e._forAllQueried(t,function(t){r++,n.add(t)}),{count:r,extent:0===r?null:n.getExtent()}})},t.prototype.queryFeatureCount=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var r=0;return e._forAllQueried(t,function(){return r++}),r})},t.prototype.queryFeatures=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var u=[],o=t&&t.outFields,i=[];return e._forAllQueried(t,function(t){return i.push(e._support.createGraphic(t))},function(t){o&&(u.push(e._support.requestFields(t,i,o)),i=[])}),o||u.push(n.resolve(i)),r(u)}).then(function(t){var e=t.reduce(function(t,e){return t.concat(e)},[]),r=new o;return r.features=e,r})},t.prototype.queryObjectIds=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var r=[];return e._forAllQueried(t,function(t){return r.push(t.id)}),r})},t.defaultExtentBuilder=function(t){var e=null;return{add:function(r){var n=t(r);n&&(e=null!=e?e.union(n):n.clone())},getExtent:function(){return e}}},t.prototype._forAllQueried=function(t,e,r){var n=[];if(t&&t.objectIds){var u=t.objectIds;n.push(function(t){return u.indexOf(t.id)>=0})}this._support.forAll(function(t){for(var r=0,u=n;r<u.length;r++){var o=u[r];if(!o(t))return}e(t)},r)},t.prototype._rejectUnsupported=function(t){if(null==t)return n.resolve();var e=function(t){return n.reject(new u("Unsupported Query","Unsupported property '"+t+"'"))};return null!=t.distance?e("distance"):null!=t.geometryPrecision?e("geometryPrecision"):t.groupByFieldsForStatistics&&t.groupByFieldsForStatistics.length?e("groupByFieldsForStatistics"):null!=t.maxAllowableOffset?e("maxAllowableOffset"):t.multipatchOption?e("multipatchOption"):null!=t.num?e("num"):t.orderByFields&&t.orderByFields.length?e("orderByFields"):t.outSpatialReference?e("outSpatialReference"):t.outStatistics&&t.outStatistics.length?e("outStatistics"):t.pixelSize?e("pixelSize"):t.quantizationParameters?e("quantizationParameters"):t.relationParam?e("relationParam"):t.returnDistinctValues?e("returnDistinctValues"):null!=t.start?e("start"):t.text?e("text"):t.timeExtent?e("timeExtent"):t.where?e("where"):t.geometry?e("geometry"):!this._options.enableOutFields&&t.outFields&&t.outFields.length?e("outFields"):!this._options.enableObjectId&&t.objectIds&&t.objectIds.length?e("objectIds"):n.resolve()},t}();return i});