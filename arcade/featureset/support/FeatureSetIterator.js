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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","../../polyfill/tsSupport/awaiter","../../polyfill/tsSupport/generator"],(function(t,e,n,r){"use strict";return function(){function t(t,e){this._lastId=-1,this._progress=e,this._parent=t}return t.prototype.reset=function(){this._lastId=-1},t.prototype.nextBatch=function(t){var e=this;if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then((function(n){return e.nextBatch(t)}),(function(n){return e.nextBatch(t)}));var n={returnpromise:null,hasset:!1},r=[];return n.returnpromise=new Promise((function(s,a){e._parent._getSet(e._progress).then((function(i){var _=i._known,u=_.length-1;if("GETPAGES"===_[_.length-1]&&(u-=1),e._lastId+t>u&&_.length>0&&"GETPAGES"===_[_.length-1])e._parent._expandPagedSet(i,e._parent._maxQueryRate(),0,0,e._progress).then((function(r){n.hasset=!0,e._parent._mainSetInUse=null,e.nextBatch(t).then(s,a)}),(function(t){n.hasset=!0,e._parent._mainSetInUse=null,a(t)}));else{var o=i._candidates;if(u>=e._lastId+t||0===o.length){for(var h=0;h<t;h++){var l=h+e._lastId+1;if(l>=_.length)break;r[h]=_[l]}return e._lastId+=r.length,0===r.length&&(n.hasset=!0,e._parent._mainSetInUse=null,s([])),void e._parent._getFeatureBatch(r,e._progress).then((function(t){n.hasset=!0,e._parent._mainSetInUse=null,s(t)}),(function(t){n.hasset=!0,e._parent._mainSetInUse=null,a(t)}))}e._parent._refineSetBlock(i,e._parent._maxProcessingRate(),e._progress).then((function(){n.hasset=!0,e._parent._mainSetInUse=null,e.nextBatch(t).then(s,a)}),(function(t){n.hasset=!0,e._parent._mainSetInUse=null,a(t)}))}}),(function(t){n.hasset=!0,e._parent._mainSetInUse=null,a(t)}))})),!1===n.hasset&&(this._parent._mainSetInUse=n.returnpromise,n.hasset=!0),n.returnpromise},t.prototype.next=function(){var t=this;if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then((function(e){return t.next()}),(function(e){return t.next()}));var e={returnpromise:null,hasset:!1};return e.returnpromise=new Promise((function(n,r){t._parent._getSet(t._progress).then((function(s){var a=s._known;t._lastId<a.length-1?"GETPAGES"===a[t._lastId+1]?t._parent._expandPagedSet(s,t._parent._maxQueryRate(),0,0,t._progress).then((function(n){return e.hasset=!0,t._parent._mainSetInUse=null,t.next()})).then(n,r):(t._lastId+=1,t._parent._getFeature(s,a[t._lastId],t._progress).then((function(r){e.hasset=!0,t._parent._mainSetInUse=null,n(r)}),(function(n){e.hasset=!0,t._parent._mainSetInUse=null,r(n)}))):s._candidates.length>0?t._parent._refineSetBlock(s,t._parent._maxProcessingRate(),t._progress).then((function(){e.hasset=!0,t._parent._mainSetInUse=null,t.next().then(n,r)}),(function(n){e.hasset=!0,t._parent._mainSetInUse=null,r(n)})):(e.hasset=!0,t._parent._mainSetInUse=null,n(null))}),(function(n){e.hasset=!0,t._parent._mainSetInUse=null,r(n)}))})),!1===e.hasset&&(this._parent._mainSetInUse=e.returnpromise,e.hasset=!0),e.returnpromise},t.prototype.count=function(){return n(this,void 0,void 0,(function(){var t,e;return r(this,(function(n){switch(n.label){case 0:return-1!==this._parent._totalCount?[2,this._parent._totalCount]:[4,this._parent._getSet(this._progress)];case 1:return t=n.sent(),[4,this._refineAllSets(t)];case 2:return e=n.sent(),this._parent._totalCount=e._known.length,[2,this._parent._totalCount]}}))}))},t.prototype._refineAllSets=function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return t._known.length>0?"GETPAGES"!==t._known[t._known.length-1]?[3,2]:[4,this._parent._expandPagedSet(t,this._parent._maxQueryRate(),0,1,this._progress)]:[3,2];case 1:return n.sent(),[2,this._refineAllSets(t)];case 2:return t._candidates.length>0?"GETPAGES"!==t._known[t._candidates.length-1]?[3,4]:[4,this._parent._expandPagedSet(t,this._parent._maxQueryRate(),0,2,this._progress)]:[3,6];case 3:return n.sent(),[2,this._refineAllSets(t)];case 4:return[4,this._parent._refineSetBlock(t,this._parent._maxProcessingRate(),this._progress)];case 5:return(e=n.sent())._candidates.length>0?[2,this._refineAllSets(e)]:[2,e];case 6:return[2,t]}}))}))},t}()}));