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

define(["esri/declare","esri/tasks/geoenrichment/GeoenrichmentTask","./InfographicsOptions","./Geoenrichment","./config"],(function(t,n,e,i,s){return t("esri.dijit.geoenrichment.InfographicsFactory",null,{_task:null,_options:null,getTask:function(){return this._task||(this._task=new n(s.server),this._task.token=s.token),this._task},createGeoenrichment:function(){return new i},getCountry:function(t){return this.getTask().getCountries(t.geometry).then((function(t){return t[0]}))},getOptions:function(){return this._options||(this._options=new e),this._options}})}));