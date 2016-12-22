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

define(["dojo/has","dojo/_base/lang","./declare","./Accessoire","./accessoireSupport/introspect"],function(e,r,t,n,a){var o=e("dojo-debug-messages"),i=function(e,r){return"[JSONSupporter] property '"+e+"' in module '"+r+"' cannot be both read and excluded from JSON."},c=function(e,r){return"[JSONSupporter] property '"+e+"' in module '"+r+"' cannot be excluded from JSON and have a _"+e+"Reader function."},s=function(e,r){return"[JSONSupporter] property '"+e+"' in module '"+r+"' won't be read from JSON, reader function _"+e+"Reader is missing."},d=Function.prototype.bind.call(console.error,console),u="esri.core.JSONSupporter",l=t(n,{declaredClass:u,read:function(e){var r,t,n,o=a(this).classMetadata,i=this._accessorProps,c=o.properties,s=o.reader,d=s&&s.add,u=s&&s.exclude,l=Object.getOwnPropertyNames(e);u&&(l=l.filter(function(e){return-1===u.indexOf(e)})),d&&(l=l.concat(d));for(var f=0;r=l[f];f++)t=e[r],n=c[r]&&c[r].reader,i.setDefault(r,n?n.call(this,t,e):t);return this}}),f=function(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");var r=this,t=new r;return t.read(e),t};return t.after(function(e){if(t.hasMixin(e,u)){e.fromJSON=f.bind(e);var n=r.getObject("_esriMeta.classMetadata",!1,e),a=n.properties,l=r.getObject("reader.add",!1,n),p=r.getObject("reader.exclude",!1,n);o&&(l&&p&&l.slice().filter(function(e){return-1!==p.indexOf(e)}).forEach(function(e){d(i(e,this.declaredClass))},this),p&&a&&p.slice().filter(function(e){return!!a[e]&&a.reader}).forEach(function(e){d(c(e,this.declaredClass))},this),l&&!a&&l.forEach(function(e){d(s(e,this.declaredClass))},this)),l&&a&&l.slice().filter(function(e){return!a[e]||!a[e].reader}).forEach(function(e){l.splice(l.indexOf(e),1),o&&d(s(e,this.declaredClass))},this)}}),l});