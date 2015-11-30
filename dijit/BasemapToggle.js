// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["require","dojo/Evented","dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","dijit/_WidgetBase","dijit/a11yclick","dijit/_TemplatedMixin","dojo/on","dojo/text!./templates/BasemapToggle.html","dojo/i18n!../nls/jsapi","dojo/dom-class","dojo/dom-style","dojo/dom-construct","../basemaps"],function(e,t,s,a,i,o,m,h,n,d,p,l,g,r,b,c){var u=s("esri.dijit.BasemapToggle",[m,n,t],{templateString:p,options:{theme:"BasemapToggle",map:null,visible:!0,basemap:"hybrid",defaultBasemap:"streets",basemaps:c},constructor:function(e,t){var s=a.mixin({},this.options,e);this.domNode=t,this._i18n=l,this.set("map",s.map),this.set("theme",s.theme),this.set("visible",s.visible),this.set("basemaps",s.basemaps),this.set("basemap",s.basemap),this.set("defaultBasemap",s.defaultBasemap),this.watch("theme",this._updateThemeWatch),this.watch("visible",this._visible),this._css={container:"basemapContainer",toggleButton:"toggleButton",basemapImage:"basemapImage",basemapImageContainer:"basemapImageContainer",basemapImageBG:"basemapBG",basemapTitle:"basemapTitle"}},postCreate:function(){this.inherited(arguments),this.own(d(this._toggleNode,h,a.hitch(this,this.toggle)))},startup:function(){this.inherited(arguments),this.map||(this.destroy(),console.log("BasemapToggle::map required")),this.map.loaded?this._init():d.once(this.map,"load",a.hitch(this,function(){this._init()}))},destroy:function(){this.inherited(arguments)},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},toggle:function(){var e=this.map.getBasemap();e&&this.set("defaultBasemap",e);var t=this.get("defaultBasemap"),s=this.get("basemap"),a={previousBasemap:t,currentBasemap:s};t!==s?(this.map.setBasemap(s),this.set("basemap",t),this._basemapChange()):a.error=new Error("BasemapToggle::Current basemap is same as new basemap"),this.emit("toggle",a)},_init:function(){this._visible(),this._basemapChange(),this.own(d(this.map,"basemap-change",a.hitch(this,function(){this._basemapChange()}))),this.set("loaded",!0),this.emit("load",{})},_getBasemapInfo:function(e){var t=this.get("basemaps");return t&&t.hasOwnProperty(e)?t[e]:void 0},_updateImage:function(){var e=this.get("basemap"),t=this._getBasemapInfo(e),s=t.thumbnailUrl,a="";a+='<div class="'+this._css.basemapImageContainer+'">',a+='<div class="'+this._css.basemapImage+'"><div class="'+this._css.basemapImageBG+'" style="background-image:url('+s+')" title="'+t.title+'"></div></div>',a+='<div title="'+t.title+'" class="'+this._css.basemapTitle+'">'+t.title+"</div>",a+="<div>",b.empty(this._toggleNode),b.place(a,this._toggleNode,"only")},_basemapChange:function(){var e=this.map.getBasemap();e&&this.set("defaultBasemap",e);var t=this.get("defaultBasemap"),s=this.get("basemap");this._updateImage(),g.remove(this._toggleNode,t),g.add(this._toggleNode,s)},_updateThemeWatch:function(e,t,s){this.get("loaded")&&(g.remove(this.domNode,t),g.add(this.domNode,s))},_visible:function(){this.get("visible")?r.set(this.domNode,"display","block"):r.set(this.domNode,"display","none")}});return i("extend-esri")&&a.setObject("dijit.BasemapToggle",u,o),u});