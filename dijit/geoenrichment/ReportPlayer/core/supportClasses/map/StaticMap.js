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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Evented","esri/dijit/geoenrichment/Deferred","dojo/dom-construct","dojo/dom-style"],(function(e,o,a,t,n){return e(o,{_mapImageInfo:null,_mapImage:null,loaded:!1,updating:!1,error:!1,constructor:function(e,o){this._mapImageInfo=e,this._mapImage=t.create("img",{class:"esriGEAbsoluteStretched"},o),n.set(this._mapImage,{width:n.get(o,"width")+"px",height:n.get(o,"height")+"px"}),n.set(o,"position","relative")},load:function(){var e=this,o=new a;function t(a){e.error=!0,a&&console.log(a),e.destroy(),o.resolve()}return this._mapImageInfo.url?this._mapImageInfo.isWebMapJson?(this._mapImage._webMapJsonInfo=this._mapImageInfo,this.loaded=!0,o.resolve(),o.promise):(this._mapImage.onload=function(){e.loaded=!0,e._mapImage.onload=e._mapImage.onerror=null,o.resolve()},this._mapImage.onerror=function(a){if(e._mapImage.onload=e._mapImage.onerror=null,0===e._mapImageInfo.url.indexOf("data:application/json"))return e.loaded=!0,void o.resolve();t(a)},this._mapImage.src=this._mapImageInfo.url,o.promise):(t(new Error("No URL specified.")),o.promise)},destroy:function(){t.destroy(this._mapImage)}})}));