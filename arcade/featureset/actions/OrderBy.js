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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../../polyfill/tsSupport/awaiter","../../polyfill/tsSupport/generator","../../polyfill/tsSupport/extends","../../languageUtils","../support/errorsupport","../support/FeatureSet","../support/IdSet","../support/OrderbyClause"],(function(e,t,r,n,i,s,u,o,a,c){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r._orderbyclause=null,r.declaredClass="esri.arcade.featureset.actions.OrderBy",r._maxProcessing=100,r._orderbyclause=t.orderbyclause,r._parent=t.parentfeatureset,r}return i(t,e),t.prototype._getSet=function(e){return r(this,void 0,void 0,(function(){var t;return n(this,(function(r){switch(r.label){case 0:return null!==this._wset?[3,3]:[4,this._ensureLoaded()];case 1:return r.sent(),[4,this._getFilteredSet("",null,null,this._orderbyclause,e)];case 2:return t=r.sent(),this._checkCancelled(e),this._wset=t,[2,this._wset];case 3:return[2,this._wset]}}))}))},t.prototype.manualOrderSet=function(e,t){var i;return r(this,void 0,void 0,(function(){var r,s,u;return n(this,(function(n){switch(n.label){case 0:return[4,this.getIdColumnDictionary(e,[],-1,t)];case 1:for(r=n.sent(),null===(i=this._orderbyclause)||void 0===i||i.order(r),s=new a([],[],!0,null),u=0;u<r.length;u++)s._known.push(r[u].id);return[2,s]}}))}))},t.prototype.getIdColumnDictionary=function(e,t,i,u){return r(this,void 0,void 0,(function(){var r,o,a,c,l,h,d;return n(this,(function(n){switch(n.label){case 0:return i<e._known.length-1?(r=this._maxQueryRate(),"GETPAGES"!==e._known[i+1]?[3,2]:[4,s.tick(this._parent._expandPagedSet(e,r,0,0,u))]):[3,4];case 1:return n.sent(),[2,this.getIdColumnDictionary(e,t,i,u)];case 2:for(o=i+1,a=[];o<e._known.length&&"GETPAGES"!==e._known[o];)a.push(e._known[o]),o++;return i+=a.length,[4,s.tick(this._parent._getFeatureBatch(a,u))];case 3:for(c=n.sent(),this._checkCancelled(u),l=0,h=c;l<h.length;l++)d=h[l],t.push({id:d.attributes[this.objectIdField],feature:d});return[2,this.getIdColumnDictionary(e,t,i,u)];case 4:return e._candidates.length>0?[4,s.tick(this._refineSetBlock(e,this._maxProcessingRate(),u))]:[3,6];case 5:return n.sent(),this._checkCancelled(u),[2,this.getIdColumnDictionary(e,t,i,u)];case 6:return[2,t]}}))}))},t.prototype._isInFeatureSet=function(e){return this._parent._isInFeatureSet(e)},t.prototype._getFeatures=function(e,t,r,n){return this._parent._getFeatures(e,t,r,n)},t.prototype._featureFromCache=function(e){if(void 0===this._featureCache[e]){var t=this._parent._featureFromCache(e);if(void 0===t)return;return null===t?null:(this._featureCache[e]=t,t)}return this._featureCache[e]},t.prototype._fetchAndRefineFeatures=function(){return r(this,void 0,void 0,(function(){return n(this,(function(e){throw new u.FeatureSetError(u.FeatureSetErrorCodes.NeverReach)}))}))},t.prototype._getFilteredSet=function(e,t,i,s,u){return r(this,void 0,void 0,(function(){var r,o,c,l;return n(this,(function(n){switch(n.label){case 0:return[4,this._ensureLoaded()];case 1:return n.sent(),[4,this._parent._getFilteredSet(e,t,i,null===s?this._orderbyclause:s,u)];case 2:return r=n.sent(),this._checkCancelled(u),o=new a(r._candidates.slice(0),r._known.slice(0),r._ordered,this._clonePageDefinition(r.pagesDefinition)),c=!0,r._candidates.length>0&&(c=!1),!1!==o._ordered?[3,4]:[4,this.manualOrderSet(o,u)];case 3:return l=n.sent(),!1===c&&(null===t&&null===i||(l=new a(l._candidates.slice(0).concat(l._known.slice(0)),[],l._ordered,this._clonePageDefinition(l.pagesDefinition)))),[2,l];case 4:return[2,o]}}))}))},t.registerAction=function(){o._featuresetFunctions.orderBy=function(e){return""===e?this:new t({parentfeatureset:this,orderbyclause:new c(e)})}},t}(o)}));