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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../../polyfill/tsSupport/awaiter","../../polyfill/tsSupport/generator","../../polyfill/tsSupport/extends","../../languageUtils","../support/FeatureSet","../support/IdSet","../support/OrderbyClause"],(function(e,t,n,r,i,s,u,a,o){"use strict";return function(e){function t(t){var n=e.call(this,t)||this;return n._orderbyclause=null,n.declaredClass="esri.arcade.featureset.actions.OrderBy",n._maxProcessing=100,n._orderbyclause=t.orderbyclause,n._parent=t.parentfeatureset,n}return i(t,e),t.prototype._getSet=function(e){return n(this,void 0,void 0,(function(){var t;return r(this,(function(n){switch(n.label){case 0:return null!==this._wset?[3,3]:[4,this._ensureLoaded()];case 1:return n.sent(),[4,this._getFilteredSet("",null,null,this._orderbyclause,e)];case 2:return t=n.sent(),this._checkCancelled(e),this._wset=t,[2,this._wset];case 3:return[2,this._wset]}}))}))},t.prototype.manualOrderSet=function(e,t){return n(this,void 0,void 0,(function(){var n,i,s;return r(this,(function(r){switch(r.label){case 0:return[4,this.getIdColumnDictionary(e,[],-1,t)];case 1:for(n=r.sent(),this._orderbyclause.order(n),i=new a([],[],!0,null),s=0;s<n.length;s++)i._known.push(n[s].id);return[2,i]}}))}))},t.prototype.getIdColumnDictionary=function(e,t,i,u){return n(this,void 0,void 0,(function(){var n,a,o,c,l,h,d;return r(this,(function(r){switch(r.label){case 0:return i<e._known.length-1?(n=this._maxQueryRate(),"GETPAGES"!==e._known[i+1]?[3,2]:[4,s.tick(this._parent._expandPagedSet(e,n,0,0,u))]):[3,4];case 1:return r.sent(),[2,this.getIdColumnDictionary(e,t,i,u)];case 2:for(a=i+1,o=[];a<e._known.length&&"GETPAGES"!==e._known[a];)o.push(e._known[a]),a++;return i+=o.length,[4,s.tick(this._parent._getFeatureBatch(o,u))];case 3:for(c=r.sent(),this._checkCancelled(u),l=0,h=c;l<h.length;l++)d=h[l],t.push({id:d.attributes[this.objectIdField],feature:d});return[2,this.getIdColumnDictionary(e,t,i,u)];case 4:return e._candidates.length>0?[4,s.tick(this._refineSetBlock(e,this._maxProcessingRate(),u))]:[3,6];case 5:return r.sent(),this._checkCancelled(u),[2,this.getIdColumnDictionary(e,t,i,u)];case 6:return[2,t]}}))}))},t.prototype._isInFeatureSet=function(e){return this._parent._isInFeatureSet(e)},t.prototype._getFeatures=function(e,t,n,r){return this._parent._getFeatures(e,t,n,r)},t.prototype._featureFromCache=function(e){if(void 0===this._featureCache[e]){var t=this._parent._featureFromCache(e);if(void 0===t)return;return null===t?null:(this._featureCache[e]=t,t)}return this._featureCache[e]},t.prototype._fetchAndRefineFeatures=function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){throw new Error("Fetch and Refine should not be called in this featureset")}))}))},t.prototype._getFilteredSet=function(e,t,i,s,u){return n(this,void 0,void 0,(function(){var n,o,c,l;return r(this,(function(r){switch(r.label){case 0:return[4,this._ensureLoaded()];case 1:return r.sent(),[4,this._parent._getFilteredSet(e,t,i,null===s?this._orderbyclause:s,u)];case 2:return n=r.sent(),this._checkCancelled(u),o=new a(n._candidates.slice(0),n._known.slice(0),n._ordered,this._clonePageDefinition(n.pagesDefinition)),c=!0,n._candidates.length>0&&(c=!1),!1!==o._ordered?[3,4]:[4,this.manualOrderSet(o,u)];case 3:return l=r.sent(),!1===c&&(null===t&&null===i||(l=new a(l._candidates.slice(0).concat(l._known.slice(0)),[],l._ordered,this._clonePageDefinition(l.pagesDefinition)))),[2,l];case 4:return[2,o]}}))}))},t.registerAction=function(){u._featuresetFunctions.orderBy=function(e){return""===e?this:new t({parentfeatureset:this,orderbyclause:new o(e)})}},t}(u)}));