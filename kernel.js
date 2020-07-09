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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/kernel","dojo/_base/config","dojo/has"],(function(t,s,i){var n=function(){return this}(),o=n.location,e=o.pathname,r=o.protocol,a={version:"3.33",_appBaseUrl:r+"//"+o.host+e.substring(0,e.lastIndexOf(e.split("/")[e.split("/").length-1]))};s.noGlobals||(n.esri=a),t.isAsync||i.add("extend-esri",1);var l="http:"===r||"https:"===r?r:"http:";return(a.dijit=a.dijit||{})._arcgisUrl=l+"//www.arcgis.com/sharing/rest",a}));