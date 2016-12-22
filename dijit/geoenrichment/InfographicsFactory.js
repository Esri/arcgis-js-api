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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["../../declare","./InfographicsOptions","./Geoenrichment","../../tasks/geoenrichment/GeoenrichmentTask","./config"],function(t,n,e,i,o){return t("esri.dijit.geoenrichment.InfographicsFactory",null,{_task:null,_options:null,getTask:function(){return this._task||(this._task=new i(o.server),this._task.token=o.token),this._task},createGeoenrichment:function(){return new e},getCountry:function(t){return this.getTask().getCountries(t.geometry).then(function(t){return t[0]})},getOptions:function(){return this._options||(this._options=new n),this._options}})});