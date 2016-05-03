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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","dojo/io-query","../graphics/TextureCollection","../../support/ResourceController","../../../../core/urlUtils"],function(t,e,r,n,i,s){var o=function(){function t(){this.textures=null,this.streamDataSupplier=null,this.canUseXhr=null}return t.prototype.initialize=function(t,e,r){var s=this;this.canUseXhr=null,this.streamDataSupplier=e.registerClient(this,i.ClientType.SYMBOLOGY,function(t){return s.addUrlToken(t,r)}),this.textures=new n(this.streamDataSupplier,t,{wrapClamp:!0})},t.prototype.destroy=function(){this.textures=null,this.streamDataSupplier=null},t.prototype.addUrlToken=function(t,e){if(-1!==t.indexOf("?token=")||0===t.indexOf("data:"))return t;var n={};e&&(n.token=e.token);var i=r.objectToQuery(n);return t+=i?"?"+i:"",null==this.canUseXhr&&(this.canUseXhr=s.canUseXhr(t)),this.canUseXhr?t:s.addProxy(t)},t}();return o});