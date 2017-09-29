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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/Evented","dojo/on","dojo/uacss","dojo/text!./templates/Popup.html","dojo/i18n!../../nls/jsapi","dijit/form/Button","dijit/_WidgetBase","dijit/_TemplatedMixin","../../kernel","../../geometry/webMercatorUtils"],function(t,e,s,i,a,o,d,r,h,n,c,u,g){var p=e([n,c,i],{templateString:d,i18n:r,reverseRange:100,constructor:function(t,e){if(t.rowData&&(this._graphicID=t.graphic.attributes.id,t.rowData.address))if("object"==typeof t.rowData.address){var s,i="";for(s in t.rowData.address)t.rowData.address.hasOwnProperty(s)&&(i+=t.rowData.address[s]+" ");this._address=i}else this._address=t.rowData.address;t.reverseRange&&(this.reverseRange=t.reverseRange)},postCreate:function(){this.inherited(arguments);var t;this._address&&this._addressTag?this._addressTag.innerHTML=this._address:this.geocodeMatch._locator.locationToAddress(this.graphic.geometry,this.reverseRange).then(s.hitch(this,function(t){var e,s=t.address,i="";if(this.graphic.attributes.reverseGeocodeResults=s,"object"==typeof s){for(e in s)s.hasOwnProperty(e)&&null!==s[e]&&"Loc_name"!==e&&(i+=s[e]+" ");this._addressTag&&(this._addressTag.innerHTML=i)}else this._addressTag&&(this._addressTag.innerHTML=s);this._matchButtonRef.set("disabled",!1)}),s.hitch(this,function(){this._addressTag&&(this._addressTag.innerHTML=r.widgets.geocodeMatch.popup.noAddress),this._matchButtonRef.set("disabled",!1)})),t=g.webMercatorToGeographic(this.graphic.geometry),this._Xtag.innerHTML=this.i18n.widgets.geocodeMatch.popup.xTitle+t.x.toFixed(6),this._Ytag.innerHTML=this.i18n.widgets.geocodeMatch.popup.yTitle+t.y.toFixed(6),this._matchButtonRef=new h({label:this.i18n.widgets.geocodeMatch.popup.matchButtonLabel,"class":"esri_PopupButton esri_matchButton",disabled:!0},this._matchButton),this._discardButtonRef=new h({label:this.i18n.widgets.geocodeMatch.popup.discardButtonLabel,"class":"esri_PopupButton esri_deleteButton"},this._discardButton),this._listenerHandles=[a(this._matchButtonRef,"click",s.hitch(this,function(){this.graphic.attributes.type===this.i18n.widgets.geocodeMatch.customLabel?this.geocodeMatch._matchCustomFeature(this.graphic):this.geocodeMatch._matchFeature(this.graphic.attributes.id),this.map.infoWindow.hide()})),a(this._discardButtonRef,"click",s.hitch(this,function(){this.map._layers[this.graphicsLayer.id].remove(this.graphic),this.map.infoWindow.hide()}))],this.graphic.attributes.matched===!0?(this._discardButtonRef.destroy(),this._matchButtonRef.destroy()):this.graphic.attributes.matched===!1&&this._address&&(this._discardButtonRef.destroy(),this._matchButtonRef.set("disabled",!1)),this.emit("load",{matchButtonRef:this._matchButtonRef,discardButtonRef:this._discardButtonRef})},startup:function(){this.inherited(arguments),this.emit("load",{matchButtonRef:this._matchButtonRef,discardButtonRef:this._discardButtonRef})},destroy:function(){this.inherited(arguments),t.forEach(this._listenerHandles,function(t){t.remove()})}});return o("extend-esri")&&s.setObject("dijit.GeocodeMatchPopup",p,u),p});