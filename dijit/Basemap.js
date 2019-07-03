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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../request","./BasemapLayer"],function(e,a,r,s,t,i,l){var n=e(null,{declaredClass:"esri.dijit.Basemap",id:null,title:"",thumbnailUrl:null,layers:null,itemId:null,basemapGallery:null,constructor:function(e,a){e=e||{},e.layers||e.itemId||console.error("esri.dijit.Basemap: unable to find the 'layers' property in parameters"),this.id=e.id,this.itemId=e.itemId,this.layers=e.layers,this.title=e.title||"",this.thumbnailUrl=e.thumbnailUrl,this.basemapGallery=a},getLayers:function(e){if(this.layers)return this.layers;if(this.itemId){var s=(e||t.dijit._arcgisUrl)+"/content/items/"+this.itemId+"/data",n={};n.f="json";var o=i({url:s,content:n,callbackParamName:"callback",error:r.hitch(this,function(e,a){var r="esri.dijit.Basemap: could not access basemap item.";this.basemapGallery?this.basemapGallery.onError(r):console.error(r)})});return o.addCallback(r.hitch(this,function(e,r){if(e.baseMap)return this.layers=[],a.forEach(e.baseMap.baseMapLayers,function(e){this.layers.push(new l(e))},this),this.layers;var s="esri.dijit.Basemap: could not access basemap item.";return this.basemapGallery?this.basemapGallery.onError(s):console.error(s),[]})),o}}});return s("extend-esri")&&r.setObject("dijit.Basemap",n,t),n});