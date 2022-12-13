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

define(["dojo/Evented","dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","dijit/_WidgetBase","dijit/a11yclick","dijit/_TemplatedMixin","dojo/on","dojo/Deferred","dojo/text!./templates/HomeButton.html","dojo/i18n!../nls/jsapi","dojo/dom-class","dojo/dom-style"],(function(t,e,i,o,s,h,n,d,m,a,r,l,c,u){var _=e("esri.dijit.HomeButton",[h,d,t],{templateString:r,options:{theme:"HomeButton",map:null,extent:null,fit:!1,visible:!0},constructor:function(t,e){var o=i.mixin({},this.options,t);this.domNode=e,this._i18n=l,this.set("map",o.map),this.set("theme",o.theme),this.set("visible",o.visible),this.set("extent",o.extent),this.set("fit",o.fit),this.watch("theme",this._updateThemeWatch),this.watch("visible",this._visible),this._css={container:"homeContainer",home:"home",loading:"loading"}},postCreate:function(){this.inherited(arguments),this.own(m(this._homeNode,n,i.hitch(this,this.home)))},startup:function(){this.inherited(arguments),this.map||(this.destroy(),console.log("HomeButton::map required")),this.map.loaded?this._init():m.once(this.map,"load",i.hitch(this,(function(){this._init()})))},destroy:function(){this.inherited(arguments)},home:function(){var t=new a,e=this.get("extent");this._showLoading();var o={extent:e};if(e)this.map.extent!==e?this.map.setExtent(e,this.get("fit")).then(i.hitch(this,(function(){this._hideLoading(),this.emit("home",o),t.resolve(o)})),i.hitch(this,(function(e){e||(e=new Error("HomeButton::Error setting map extent")),o.error=e,this.emit("home",o),t.reject(e)}))):(this._hideLoading(),this.emit("home",o),t.resolve(o));else{this._hideLoading();var s=new Error("HomeButton::home extent is undefined");o.error=s,this.emit("home",o),t.reject(s)}return t.promise},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},_init:function(){this._visible(),this.get("extent")||this.set("extent",this.map.extent),this.set("loaded",!0),this.emit("load",{})},_showLoading:function(){c.add(this._homeNode,this._css.loading)},_hideLoading:function(){c.remove(this._homeNode,this._css.loading)},_updateThemeWatch:function(t,e,i){c.remove(this.domNode,e),c.add(this.domNode,i)},_visible:function(){this.get("visible")?u.set(this.domNode,"display","block"):u.set(this.domNode,"display","none")}});return o("extend-esri")&&i.setObject("dijit.HomeButton",_,s),_}));