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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Evented","esri/dijit/geoenrichment/Deferred","dojo/dom-construct","dojo/dom-style"],function(e,o,t,r,i){return e(o,{_mapImageInfo:null,_mapImage:null,loaded:!1,updating:!1,error:!1,constructor:function(e,o){this._mapImageInfo=e,this._mapImage=r.create("img",{class:"esriGEAbsoluteStretched"},o),i.set(this._mapImage,{width:i.get(o,"width")+"px",height:i.get(o,"height")+"px"}),i.set(o,"position","relative")},load:function(){function e(e){o.error=!0,e&&console.log(e),o.destroy(),r.resolve()}var o=this,r=new t;return this._mapImageInfo.url?(this._mapImage.onload=function(){o.loaded=!0,r.resolve()},this._mapImage.onerror=e,this._mapImage.src=this._mapImageInfo.url,r.promise):(e(new Error("No URL specified.")),r.promise)},destroy:function(){r.destroy(this._mapImage)}})});