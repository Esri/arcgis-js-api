// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/promise/all","../../../../core/promiseUtils","../../../../core/Error","../../../../tasks/support/FeatureSet"],function(t,e,r,n,i,o){var u=function(){function t(t,e){this._support=t,this._options=e}return t.prototype.queryExtent=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var r=0,n=e._support.createExtentBuilder();return e._forAllQueried(t,function(t){r++,n.add(t)}),{count:r,extent:0===r?null:n.getExtent()}})},t.prototype.queryFeatureCount=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var r=0;return e._forAllQueried(t,function(){return r++}),r})},t.prototype.queryFeatures=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var n=[],i=t&&t.outFields;return e._forAllQueried(t,function(t){n.push(e._support.createGraphic(t,i))}),r(n)}).then(function(t){var e=new o;return e.features=t,e})},t.prototype.queryObjectIds=function(t){var e=this;return this._rejectUnsupported(t).then(function(){var r=[];return e._forAllQueried(t,function(t){return r.push(t.id)}),r})},t.prototype._forAllQueried=function(t,e){var r=[];if(t&&t.objectIds){var n=t.objectIds;r.push(function(t){return n.indexOf(t.id)>=0})}this._options.addVisibilityFilter&&r.push(this._support.createVisibilityFilter()),this._support.forAll(function(t){for(var n=0;n<r.length;n++)if(!r[n](t))return;e(t)})},t.prototype._rejectUnsupported=function(t){if(null==t)return n.resolve();var e=function(t){return n.reject(new i("Unsupported Query","Unsupported property '"+t+"'"))};return null!=t.distance?e("distance"):null!=t.geometryPrecision?e("geometryPrecision"):t.groupByFieldsForStatistics&&t.groupByFieldsForStatistics.length?e("groupByFieldsForStatistics"):null!=t.maxAllowableOffset?e("maxAllowableOffset"):t.multipatchOption?e("multipatchOption"):null!=t.num?e("num"):t.orderByFields&&t.orderByFields.length?e("orderByFields"):t.outSpatialReference?e("outSpatialReference"):t.outStatistics&&t.outStatistics.length?e("outStatistics"):t.pixelSize?e("pixelSize"):t.quantizationParameters?e("quantizationParameters"):t.relationParam?e("relationParam"):t.returnDistinctValues?e("returnDistinctValues"):null!=t.start?e("start"):t.text?e("text"):t.timeExtent?e("timeExtent"):t.where?e("where"):t.geometry?e("geometry"):!this._options.enableOutFields&&t.outFields&&t.outFields.length?e("outFields"):!this._options.enableObjectId&&t.objectIds&&t.objectIds.length?e("objectIds"):n.resolve()},t}();return u});