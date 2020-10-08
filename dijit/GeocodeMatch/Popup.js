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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/Evented","dojo/on","dojo/uacss","dojo/text!./templates/Popup.html","dojo/i18n!../../nls/jsapi","dijit/form/Button","dijit/_WidgetBase","dijit/_TemplatedMixin","../../kernel","../../geometry/webMercatorUtils","../FeatureTable/dataUtils"],(function(t,e,i,s,o,n,a,r,d,h,c,u,l,p){var _=e([h,c,s],{addressString:null,geocodeMatch:null,graphic:null,layer:null,map:null,templateString:a,i18n:r.widgets.geocodeMatch,reverseRange:100,_matchButton:null,_discardButton:null,constructor:function(t,e){if(t.address){var i=t.address;if("object"==typeof i){var s,o="";for(s in i)i.hasOwnProperty(s)&&(o+=i[s]+" ");this.addressString=o}else this.addressString=i}t.reverseRange&&(this.reverseRange=t.reverseRange)},postCreate:function(){this.inherited(arguments),this._setUpButtons(),this._updateXY(),this._updateAddress();var t=!!this.graphic.attributes.matched;t?(this._discardButton.destroy(),this._matchButton.destroy()):this.addressString&&(this._discardButton.destroy(),this._matchButton.set("disabled",!1))},startup:function(){this.inherited(arguments),this.emit("load",{matchButtonRef:this._matchButton,discardButtonRef:this._discardButton})},destroy:function(){this.inherited(arguments),t.forEach(this._listenerHandles,(function(t){t.remove()}))},_setUpButtons:function(){var t=this.geocodeMatch,e=this.graphic;this._matchButton=new d({label:this.i18n.popup.matchButtonLabel,class:"esri_PopupButton esri_matchButton",disabled:!0},this._matchButtonNode),this._discardButton=new d({label:this.i18n.popup.discardButtonLabel,class:"esri_PopupButton esri_deleteButton"},this._discardButtonNode),this._listenerHandles=[o(this._matchButton,"click",i.hitch(this,(function(){e.attributes.type===this.i18n.customLabel?t._matchCustomFeature(e):t._matchFeature(e.attributes.id),this.map.infoWindow.hide()}))),o(this._discardButton,"click",i.hitch(this,(function(){this.map._layers[this.layer.id].remove(e),this.map.infoWindow.hide()})))]},_updateXY:function(){var t=l.webMercatorToGeographic(this.graphic.geometry);this._x.innerHTML=this.i18n.popup.xTitle+p.formatNumberForLocale(t.x),this._y.innerHTML=this.i18n.popup.yTitle+p.formatNumberForLocale(t.y)},_updateAddress:function(){var t=this._addressNode,e=this.geocodeMatch._locator;this.addressString?t.innerHTML=this.addressString:e.locationToAddress(this.graphic.geometry,this.reverseRange).then(i.hitch(this,(function(e){var i=e.address;if(this.graphic.attributes.reverseGeocodeResults=i,"object"==typeof i){var s,o="";for(s in i)i.hasOwnProperty(s)&&null!==i[s]&&"Loc_name"!==s&&(o+=i[s]+" ");t.innerHTML=o}else t.innerHTML=i;this._matchButton.set("disabled",!1)})),i.hitch(this,(function(){t.innerHTML=this.i18n.popup.noAddress,this._matchButton.set("disabled",!1)})))}});return n("extend-esri")&&i.setObject("dijit.GeocodeMatchPopup",_,u),_}));