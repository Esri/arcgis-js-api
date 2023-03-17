// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/Deferred","dojo/_base/url","../config","../urlUtils"],(function(o,r,e,s){var n=e.defaults.io;function i(o){return(o=new r(o)).scheme+"://"+o.authority}return{registerNoCorsDomains:function(o){n.crossOriginNoCorsDomains||(n.crossOriginNoCorsDomains={});for(var r=n.crossOriginNoCorsDomains,e=0;e<o.length;e++){var s=o[e];s=s.toLowerCase(),/^https?:\/\//.test(s)?r[i(s)]=0:(r[i("http://"+s)]=0,r[i("https://"+s)]=0)}},isNoCorsRequestRequired:function(o){var r=n.crossOriginNoCorsDomains;if(r){var e=i(o);return e=e.toLowerCase(),!s.hasSameOrigin(e,window.location.origin)&&r[e]<Date.now()-36e5}return!1},sendNoCorsRequest:function(r,e){var t=new o,a=n.crossOriginNoCorsDomains;a&&(a[i(r).toLowerCase()]=Date.now());var u=s.urlToObject(r);return r=u.path,(u.query&&"json"===u.query.f||e&&"json"===e.f)&&(r+="?f=json"),fetch(r,{mode:"no-cors",credentials:"include"}).then(t.resolve,t.resolve),t}}}));