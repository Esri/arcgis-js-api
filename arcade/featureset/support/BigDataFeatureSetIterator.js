// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();define(["require","exports","../../../graphic","./FeatureSetIterator","../../polyfill/promiseUtils","../../../geometry/jsonUtils"],function(e,t,r,n,i,o){"use strict";return function(e){function t(t,r){var n=e.call(this,t,r)||this;return n._currentPage=null,n._iteratorStarted=!1,n._indexInCurrentPage=0,n._noMorePages=!1,n._script=null,n._featuresetMoniker="",n}return __extends(t,e),t.prototype.reset=function(){this._currentPage=null,this._iteratorStarted=!1,this._indexInCurrentPage=0,this._featuresetMoniker=""},t.prototype.next=function(){var e=this;return!1===this._iteratorStarted&&this.requestFirstPage().then(function(){return e.handleFeatureFromPage()}),this.handleFeatureFromPage()},t.prototype.handleFeatureFromPage=function(){var e=this;if(null===this._currentPage)return i.resolve(null);if(this._indexInCurrentPage<this._currentPage.length){this._indexInCurrentPage++;var t=this._currentPage[this._indexInCurrentPage-1];if(null!==t)if(t instanceof r);else{var n=null;if(null!==t.geometry){var s=this._script.spatialReference;s.toJson?s=s.toJson():s.toJson&&(s=s.toJson()),t.geometry.spatialReference=s,n=o.fromJson(t.geometry)}t=new r({geometry:n,attributes:t.attributes}),this._currentPage[this._indexInCurrentPage-1]=t}return i.resolve(t)}return 0===this._currentPage.length?(this._noMorePages=!0,this._currentPage=null,this._indexInCurrentPage=0,i.resolve(null)):this.requestNextPage().then(function(){return e.handleFeatureFromPage()})},t.prototype.requestFirstPage=function(){var e=this;return this._indexInCurrentPage=0,this._currentPage=[],this._parent.top(1e3).expressAsArcadeScript().then(function(t){t.script+="\n return "+t.featuresetIdentifier+";\n",e._script=t;var r=e._parent.sourceGeoAnalyticsProvider();return null===r?i.reject(new Error("No Big Data Provider")):r.executeFeatureSetPageRequest(e._script.script,e._script.globals,e._script.spatialReference,"").then(function(t){return e._featuresetMoniker=t.moniker,e._currentPage=t.records,e._iteratorStarted=!0,!0})})},t.prototype.requestNextPage=function(){var e=this;this._indexInCurrentPage=0,this._currentPage=[];var t=this._parent.sourceGeoAnalyticsProvider();return null===t?i.reject(new Error("No Big Data Provider")):t.executeFeatureSetPageRequest(this._script.script,this._script.globals,this._script.spatialReference,this._featuresetMoniker).then(function(t){return e._currentPage=t.records,!0})},t.prototype.count=function(){var e=this;return-1!==this._parent._totalCount?i.resolve(this._parent._totalCount):this._parent.count().then(function(t){return e._parent._totalCount=t,e._parent._totalCount})},t}(n)});