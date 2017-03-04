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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Deferred","dojo/dom-construct","dojo/has","dijit/registry","./kernel","./lang","./geometry/ScreenPoint"],function(t,e,n,i,s,o,r,_,c,h,a){var d=t(null,{declaredClass:"esri.InfoWindowBase",constructor:function(){var t=e.hitch;this.__set_title=t(this,this.__set_title),this.__err_title=t(this,this.__err_title),this.__set_content=t(this,this.__set_content),this.__err_content=t(this,this.__err_content)},setMap:function(t){this.map=t},unsetMap:function(t){delete this.map},setTitle:function(){},setContent:function(){},show:function(){},hide:function(){},resize:function(){},onShow:function(){},onHide:function(){},place:function(t,n){h.isDefined(t)?e.isObject(t)?o.place(t,n,"only"):n.innerHTML=t:n.innerHTML=""},startupDijits:function(t){this._processDijits(t)},destroyDijits:function(t){this._processDijits(t,!0)},_processDijits:function(t,e){if(t&&1===t.children.length){var i=t.children[0];if(i){var s=_.byNode(i),o=s?[s]:_.findWidgets(i);n.forEach(o,function(t){if(e){if(t._started&&!t._destroyed)try{t.destroyRecursive?t.destroyRecursive():t.destroy&&t.destroy()}catch(n){console.debug("An error occurred when destroying a widget embedded within InfoWindow: "+n.message)}}else if(!t._started)try{t.startup()}catch(i){console.debug("An error occurred when starting a widget embedded within InfoWindow: "+i.message)}})}}},__registerMapListeners:function(){this.__unregisterMapListeners();var t=this.map;this.__handles=[i.connect(t,"onPan",this,this.__onMapPan),i.connect(t,"onZoomStart",this,this.__onMapZmStart),i.connect(t,"onExtentChange",this,this.__onMapExtChg)]},__unregisterMapListeners:function(){var t=this.__handles;t&&(n.forEach(t,i.disconnect,i),this.__handles=null)},__onMapPan:function(t,e){this.move(e,!0)},__onMapZmStart:function(){this.__mcoords=this.mapCoords||this.map.toMap(new a(this.coords)),this.hide(null,!0)},__onMapExtChg:function(t,e,n){var i=this.map,s=this.mapCoords;if(s)this.show(s,null,!0);else{var o;o=n?i.toScreen(this.__mcoords):this.coords.offset(e&&e.x||0,e&&e.y||0),this.show(o,null,!0)}},__setValue:function(t,e){this[t].innerHTML="";var n="_dfd"+t,i=this[n];i&&-1===i.fired&&(i.cancel(),this[n]=null),h.isDefined(e)&&(e instanceof s?(this[n]=e,e.addCallbacks(this["__set"+t],this["__err"+t])):this.__render(t,e))},__set_title:function(t){this._dfd_title=null,this.__render("_title",t)},__err_title:function(t){this._dfd_title=null},__set_content:function(t){this._dfd_content=null,this.__render("_content",t)},__err_content:function(t){this._dfd_content=null},__render:function(t,e){var n=this[t];this.place(e,n),this.isShowing&&(this.startupDijits(n),"_title"===t&&this._adjustContentArea&&this._adjustContentArea())}});return r("extend-esri")&&(c.InfoWindowBase=d),d});