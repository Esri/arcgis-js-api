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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/number","dojo/has","dojo/_base/Color","../../../../graphic","../../../../SpatialReference","../../../../geometry/Extent","../../../../symbols/SimpleFillSymbol","../../../../symbols/SimpleLineSymbol","../../../../kernel"],(function(e,n,r,t,i,l,u,o,a,c,s){var f={addGraphic:function(e,n,r){if(e&&n){var t=new c(c.STYLE_SOLID,new i([255,0,0]),2),u=new a(a.STYLE_SOLID,t,new i([0,0,0,0]));r&&e.graphics.clear(),e.graphics.add(new l(n,u))}},checkNumber:function(e){var n=typeof e;if("undefined"===n&&null===e)return null;if("string"===n){if(e=parseFloat(e),isNaN(e))return null;n=typeof e}return"number"===n&&isFinite(e)?e:null},formatCoordinate:function(e){for(var n=function(e,n){return-1!==e.indexOf(n,e.length-n.length)},t=function(e){return e.substring(0,e.length-1)},i=r.format(e,{places:4});n(i,"0");)i=t(i);return n(i,".")&&(i=t(i)),i},makeGeographicExtent:function(e,n,r,t){var i;if(e=this.checkNumber(e),n=this.checkNumber(n),r=this.checkNumber(r),t=this.checkNumber(t),null===e||null===r)return null;if(null===n||null===t)return null;n<-85&&(n=-85),t>85&&(t=85),r<e&&(i=r,r=e,e=i),t<n&&(i=t,t=n,n=i);try{return new o(e,n,r,t,new u({wkid:4326}))}catch(e){}return null}};return t("extend-esri")&&e.setObject("dijit.metadata.form.tools.geoExtentUtil",f,s),f}));