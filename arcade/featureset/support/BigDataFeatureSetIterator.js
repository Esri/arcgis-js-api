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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","dojo/Deferred","../../../Graphic","../support/shared","./FeatureSetIterator","../../../geometry/support/jsonUtils"],function(e,t,r,n,i,a,s,o){return function(e){function t(t,r){var n=e.call(this,t,r)||this;return n._currentPage=null,n._iteratorStarted=!1,n._indexInCurrentPage=0,n._noMorePages=!1,n._script=null,n._featuresetMoniker="",n}return r(t,e),t.prototype.reset=function(){this._currentPage=null,this._iteratorStarted=!1,this._indexInCurrentPage=0,this._featuresetMoniker=""},t.prototype.next=function(){var e=this,t=new n;return!1===this._iteratorStarted?this.requestFirstPage().then(a.callback(function(){e.handleFeatureFromPage(t)},t),function(e){t.reject(e)}):this.handleFeatureFromPage(t),t.promise},t.prototype.handleFeatureFromPage=function(e){var t=this;if(null===this._currentPage&&e.resolve(null),this._indexInCurrentPage<this._currentPage.length){this._indexInCurrentPage++;var r=this._currentPage[this._indexInCurrentPage-1];if(null!==r)if(r instanceof i);else{var n=null;if(null!==r.geometry){var s=this._script.spatialReference;s.toJSON?s=s.toJSON():s.toJson&&(s=s.toJson()),r.geometry.spatialReference=s,n=o.fromJSON(r.geometry)}r=new i({geometry:n,attributes:r.attributes}),this._currentPage[this._indexInCurrentPage-1]=r}e.resolve(r)}else 0===this._currentPage.length?(this._noMorePages=!0,this._currentPage=null,this._indexInCurrentPage=0,e.resolve(null)):this.requestNextPage().then(a.callback(function(){t.handleFeatureFromPage(e)},e),function(t){e.reject(t)})},t.prototype.requestFirstPage=function(){var e=this,t=new n;return this._indexInCurrentPage=0,this._currentPage=[],this._parent.top(1e3).expressAsArcadeScript().then(a.callback(function(r){r.script+="\n return "+r.featuresetIdentifier+";\n",e._script=r;var n=e._parent.sourceGeoAnalyticsProvider();null===n?t.reject(new Error("No Big Data Provider")):n.executeFeatureSetPageRequest(e._script.script,e._script.globals,e._script.spatialReference,"").then(function(r){e._featuresetMoniker=r.moniker,e._currentPage=r.records,e._iteratorStarted=!0,t.resolve(!0)},function(e){t.reject(e)})},t),function(e){t.reject(e)}),t.promise},t.prototype.requestNextPage=function(){var e=this,t=new n;this._indexInCurrentPage=0,this._currentPage=[];var r=this._parent.sourceGeoAnalyticsProvider();return null===r?t.reject(new Error("No Big Data Provider")):r.executeFeatureSetPageRequest(this._script.script,this._script.globals,this._script.spatialReference,this._featuresetMoniker).then(function(r){e._currentPage=r.records,t.resolve(!0)},function(e){t.reject(e)}),t.promise},t.prototype.count=function(){var e=this,t=new n;return-1!==this._parent._totalCount?t.resolve(this._parent._totalCount):this._parent.count().then(a.callback(function(r){e._parent._totalCount=r,t.resolve(e._parent._totalCount)},t),a.errback(t)),t.promise},t}(s)});