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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();define(["require","exports","dojo/Deferred","../../../graphic","../support/shared","./FeatureSetIterator","../../../geometry/jsonUtils"],function(e,t,r,n,i,o,s){"use strict";return function(e){function t(t,r){var n=e.call(this,t,r)||this;return n._currentPage=null,n._iteratorStarted=!1,n._indexInCurrentPage=0,n._noMorePages=!1,n._script=null,n._featuresetMoniker="",n}return __extends(t,e),t.prototype.reset=function(){this._currentPage=null,this._iteratorStarted=!1,this._indexInCurrentPage=0,this._featuresetMoniker=""},t.prototype.next=function(){var e=this,t=new r;return!1===this._iteratorStarted?this.requestFirstPage().then(i.callback(function(){e.handleFeatureFromPage(t)},t),function(e){t.reject(e)}):this.handleFeatureFromPage(t),t.promise},t.prototype.handleFeatureFromPage=function(e){var t=this;if(null===this._currentPage&&e.resolve(null),this._indexInCurrentPage<this._currentPage.length){this._indexInCurrentPage++;var r=this._currentPage[this._indexInCurrentPage-1];if(null!==r)if(r instanceof n);else{var o=null;if(null!==r.geometry){var a=this._script.spatialReference;a.toJson?a=a.toJson():a.toJson&&(a=a.toJson()),r.geometry.spatialReference=a,o=s.fromJson(r.geometry)}r=new n({geometry:o,attributes:r.attributes}),this._currentPage[this._indexInCurrentPage-1]=r}e.resolve(r)}else 0===this._currentPage.length?(this._noMorePages=!0,this._currentPage=null,this._indexInCurrentPage=0,e.resolve(null)):this.requestNextPage().then(i.callback(function(){t.handleFeatureFromPage(e)},e),function(t){e.reject(t)})},t.prototype.requestFirstPage=function(){var e=this,t=new r;return this._indexInCurrentPage=0,this._currentPage=[],this._parent.top(1e3).expressAsArcadeScript().then(i.callback(function(r){r.script+="\n return "+r.featuresetIdentifier+";\n",e._script=r;var n=e._parent.sourceGeoAnalyticsProvider();null===n?t.reject(new Error("No Big Data Provider")):n.executeFeatureSetPageRequest(e._script.script,e._script.globals,e._script.spatialReference,"").then(function(r){e._featuresetMoniker=r.moniker,e._currentPage=r.records,e._iteratorStarted=!0,t.resolve(!0)},function(e){t.reject(e)})},t),function(e){t.reject(e)}),t.promise},t.prototype.requestNextPage=function(){var e=this,t=new r;this._indexInCurrentPage=0,this._currentPage=[];var n=this._parent.sourceGeoAnalyticsProvider();return null===n?t.reject(new Error("No Big Data Provider")):n.executeFeatureSetPageRequest(this._script.script,this._script.globals,this._script.spatialReference,this._featuresetMoniker).then(function(r){e._currentPage=r.records,t.resolve(!0)},function(e){t.reject(e)}),t.promise},t.prototype.count=function(){var e=this,t=new r;return-1!==this._parent._totalCount?t.resolve(this._parent._totalCount):this._parent.count().then(i.callback(function(r){e._parent._totalCount=r,t.resolve(e._parent._totalCount)},t),i.errback(t)),t.promise},t}(o)});