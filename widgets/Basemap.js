// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../request","./BasemapLayer"],function(e,a,r,s,t,i,l){var n=e(null,{declaredClass:"esri.widgets.Basemap",id:null,title:"",thumbnailUrl:null,layers:null,itemId:null,basemapGallery:null,constructor:function(e,a){e=e||{},e.layers||e.itemId||console.error("esri.widgets.Basemap: unable to find the 'layers' property in parameters"),this.id=e.id,this.itemId=e.itemId,this.layers=e.layers,this.title=e.title||"",this.thumbnailUrl=e.thumbnailUrl,this.basemapGallery=a},getLayers:function(e){if(this.layers)return this.layers;if(this.itemId){var r=(e||t.dijit._arcgisUrl)+"/content/items/"+this.itemId+"/data",s={};s.f="json";var n=i(r,{query:s,callbackParamName:"callback",error:function(e,a){var r="esri.widgets.Basemap: could not access basemap item.";this.basemapGallery?this.basemapGallery.emitError(r):console.error(r)}.bind(this)});return n.then(function(e){var r=e.data;if(r.baseMap)return this.layers=[],a.forEach(r.baseMap.baseMapLayers,function(e){this.layers.push(new l(e))},this),this.layers;var s="esri.widgets.Basemap: could not access basemap item.";return this.basemapGallery?this.basemapGallery.emitError(s):console.error(s),[]}.bind(this)),n}}});return n});