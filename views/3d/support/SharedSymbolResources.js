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

define(["require","exports","dojo/io-query","./TextureCollection","./ResourceController","../../../identity/IdentityManager"],function(t,e,r,n,i,o){var s=function(){function t(t,e){var r=this;this.textures=null,this.streamDataSupplier=null,this.tokens={};var o=i.ClientType.SYMBOLOGY;this.resourceController=e,this.streamDataSupplier=e.registerClient(this,o,{addUrlToken:function(t){return r.addUrlToken(t)}}),this.textures=new n(this.streamDataSupplier,t,{wrapClamp:!0})}return t.prototype.destroy=function(){this.resourceController.deregisterClient(this),this.textures=null,this.streamDataSupplier=null},t.prototype.addUrlToken=function(t){if(0===t.indexOf("data:"))return t;var e=t.match(/^(((?:https?:)?\/\/[^\/]+).*?)(?:\?(.*))?$/);if(!e)return t;var n=e[1],i=e[2],s=e[3],u=r.queryToObject(s||"");if(!("token"in u)){if(null==this.tokens[i]){var a=o.findCredential(t);this.tokens[i]=a&&a.token||""}this.tokens[i]&&(u.token=this.tokens[i])}var l=r.objectToQuery(u);return t=l?n+"?"+l:n},t}();return s});