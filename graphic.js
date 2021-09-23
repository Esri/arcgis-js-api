// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./kernel","./domUtils","./lang","./InfoTemplate","./geometry/jsonUtils","./symbols/jsonUtils"],(function(t,e,i,s,n,r,a,o,u){var h=t(null,{declaredClass:"esri.Graphic",constructor:function(t,e,i,s){this._construct(),t&&!t.declaredClass?(this.geometry=t.geometry?o.fromJson(t.geometry):null,this.symbol=t.symbol?u.fromJson(t.symbol):null,this.attributes=t.attributes||null,this.infoTemplate=t.infoTemplate?new a(t.infoTemplate):null):(this.geometry=t,this.symbol=e,this.attributes=i,this.infoTemplate=s)},_geomVersion:0,_resolution:null,_shape:null,_bgShape:null,_dataAttrs:null,_layer:null,_sourceLayer:null,_graphicsLayer:null,_parentGraphic:null,_suspended:!1,size:null,visible:!0,_aggregationSourceLayer:null,_aggregationInfo:null,_computedAttributes:null,_computedVersion:null,_computedGeomVersion:null,_isSnapTarget:!0,getParentGraphic:function(){return this._parentGraphic},setParentGraphic:function(t){this._parentGraphic=t},setSize:function(t){return this.size=t,this},getAggregationSourceLayer:function(){return this._aggregationSourceLayer},setAggregationSourceLayer:function(t){return this._aggregationSourceLayer=t,this},isAggregate:function(){return!!this._aggregationInfo},getAggregationInfo:function(){return this._aggregationInfo},setAggregationInfo:function(t){return this._aggregationInfo=t,this},getChildGraphics:function(){var t=this.getAggregationSourceLayer();return t?t.getChildGraphics(this):[]},getDojoShape:function(){return this._shape},getShapes:function(){var t=[];return this._shape&&t.push(this._shape),this._bgShape&&t.push(this._bgShape),t},getNode:function(){var t=this._shape&&this._shape.getNode();return t&&t.nodeType?t:null},getNodes:function(){var t,e,i=this.getShapes(),s=i.length,n=[];for(e=0;e<s;e++)(t=i[e]&&i[e].getNode())&&t.nodeType&&n.push(t);return n},getLayer:function(){return this._layer},getSourceLayer:function(){return this._sourceLayer||this._layer},clone:function(){var t=new this.constructor(this.toJson());return t.visible=this.visible,t._layer=this._layer,t._sourceLayer=this._sourceLayer,t._aggregationSourceLayer=this._aggregationSourceLayer,t._aggregationInfo=this._aggregationInfo,t._resolution=this._resolution,t},draw:function(){var t=this._graphicsLayer;return t&&t._draw(this,!0),this},setGeometry:function(t){this.geometry=t,this._geomVersion++;var e=this._graphicsLayer;return e&&(e._updateExtent(this),this.draw(),t&&"polyline"===t.type&&e._updateSVGMarkers()),this},setResolution:function(t){return this._resolution=t,this},getResolution:function(){return this._resolution},setSymbol:function(t,e){var i=this._graphicsLayer,s=this._shape;return this.symbol=t,i&&(e&&s&&i._removeShape(this),this.draw()),this},setAttributes:function(t){return this.attributes=t,this.clearCache(),this},setInfoTemplate:function(t){return this.infoTemplate=t,this},getInfoTemplate:function(){return this._getEffInfoTemplate()},_getEffInfoTemplate:function(){var t=this.getLayer();return this.infoTemplate||t&&t.infoTemplate},getTitle:function(){var t=this.getInfoTemplate(),i=t&&t.title;if(e.isFunction(i))i=i.call(t,this);else if(e.isString(i)){var s=this.getLayer(),n=s&&s._getDateOpts;i=r.substitute(this.attributes,i,{first:!0,dateFormat:n&&n.call(s)})}return i},getContent:function(){var t=this.getInfoTemplate(),i=t&&t.content;if(e.isFunction(i))i=i.call(t,this);else if(e.isString(i)){var s=this.getLayer(),n=s&&s._getDateOpts;i=r.substitute(this.attributes,i,{dateFormat:n&&n.call(s)})}return i},attr:function(t,e){return null==e||this._dataAttrs||(this._dataAttrs={}),this._dataAttrs&&(this._dataAttrs[t]=e,this._setDataAttr(t,e)),this},_isSuspended:function(){return this._suspended},_suspend:function(){this._suspended=!0,this.draw()},_resume:function(){this._suspended=!1,this.draw()},show:function(){var t,e,i;if(this.visible=!0,this.attr("data-hidden"),this.getShapes().length)for(i=(t=this.getNodes()).length,e=0;e<i;e++)n.show(t[e]);else this.draw();var s=this._graphicsLayer;return s&&s._graphicVisibilityChanged(this),this},hide:function(){this.visible=!1,this.attr("data-hidden","");var t,e,i,s=this._graphicsLayer;if(s){if("canvas-2d"===s.surfaceType)s._removeShape(this);else if(i=(t=this.getNodes()).length)for(e=0;e<i;e++)n.hide(t[e]);s._graphicVisibilityChanged(this)}return this},toJson:function(){var t={};return this.geometry&&(t.geometry=this.geometry.toJson()),this.attributes&&(t.attributes=e.mixin({},this.attributes)),this.symbol&&(t.symbol=this.symbol.toJson()),this.infoTemplate&&(t.infoTemplate=this.infoTemplate.toJson()),t},_setDataAttr:function(t,e){var i,s=this.getNodes(),n=s.length;for(i=0;i<n;i++)this._setDOMDataAttr(s[i],t,e)},_setDOMDataAttr:function(t,e,i){null==i?t.removeAttribute(e):t.setAttribute(e,i)},_applyDataAttrs:function(){var t=this._dataAttrs;if(t){var e,i=this.getNodes(),s=i.length;for(e=0;e<s;e++){var n;for(n in t)this._setDOMDataAttr(i[e],n,t[n])}}},_getViewInfo:function(t){var e=(t=t||this.getLayer())&&t.getMap();return e&&e.getViewInfo()},evaluateExpression:function(t,e){return this._getDataValue(t._attributeDef,t._attributeCache,null,null,t,e)},_getDataValue:function(t,e,i,s,n,r){var a=e.id,o=this.attributes,u=t.field,h=e.isNumeric,l=null;if(a){var c=this._computedAttributes,g=this._computedVersion,_=this._computedGeomVersion,f=this._getViewInfo(s),p=!(!n||!n.async),d=r&&r.skipCache||p,m=!r||!1!==r.strictReturnType,y=e.dependsOnView||e.isJSFunc,b=e.dependsOnGeometry;c||(c=this._computedAttributes={}),y&&!g&&(g=this._computedVersion={}),b&&!_&&(_=this._computedGeomVersion={});var v=y&&g[a]!==f.version||b&&_[a]!==this._geomVersion;if(void 0===(l=c[a])||v||d){if(l=null,e.hasExpr)l=n?n.evaluate(r&&r.context):i.executeFunction(e.compiledFunc,i.createExecContext(this,f));else if(e.isJSFunc)l=u(this,t);else if(o&&(l=o[u],h&&this._isValidNumber(l))){var V=t.normalizationType||"field";if(V){var S=l;l=null;var A=t.normalizationTotal,L=o[t.normalizationField];"log"===V&&0!==S?l=Math.log(S)*Math.LOG10E:"percent-of-total"===V&&this._isValidNumber(A)&&0!==A?l=S/A*100:"field"===V&&this._isValidNumber(L)&&0!==L&&(l=S/L)}}m&&(p?h&&(this._construct(),l=l.then(this._sanitizeNumericValue)):l=this._sanitizeValue(l,h)),d||(c[a]=l,y&&(g[a]=f.version),b&&(_[a]=this._geomVersion))}}else o&&(l=this._sanitizeValue(o[u],h));return l},_sanitizeValue:function(t,e){return e&&!this._isValidNumber(t)&&(t=null),t},_sanitizeNumericValue:function(t){return this._sanitizeValue(t,!0)},_construct:function(){this._constructed||(this._sanitizeNumericValue=e.hitch(this,this._sanitizeNumericValue),this._constructed=!0)},_isValidNumber:function(t){return"number"==typeof t&&!isNaN(t)&&t!==1/0&&t!==-1/0},clearCache:function(t){if(null!=t){var e=this._computedAttributes,i=this._computedVersion,s=this._computedGeomVersion;e&&(e[t]=void 0),i&&(i[t]=void 0),s&&(s[t]=void 0)}else this._computedAttributes=this._computedVersion=this._computedGeomVersion=null}});function l(){}return h.prototype.getShape=h.prototype.getDojoShape,l.prototype=h.prototype,h.simpleConstructor=l,i("extend-esri")&&(s.Graphic=h),h}));