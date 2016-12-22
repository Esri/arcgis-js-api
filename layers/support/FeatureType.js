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

define(["../../core/declare","dojo/_base/lang","dojo/_base/array","../../core/lang","../../symbols/support/jsonUtils","./RangeDomain","./CodedValueDomain","./InheritedDomain","./FeatureTemplate"],function(e,a,s,t,n,i,o,r,m){var l=e(null,{declaredClass:"esri.layers.support.FeatureType",constructor:function(e){if(e&&a.isObject(e)){this.id=e.id,this.name=e.name;var s=e.symbol;s&&(this.symbol=n.fromJSON(s));var t,l,d=e.domains,h=this.domains={};for(t in d)if(d.hasOwnProperty(t)){var c=d[t];switch(c.type){case"range":h[t]=new i(c);break;case"codedValue":h[t]=new o(c);break;case"inherited":h[t]=new r(c)}}var u=e.templates;if(u){var p=this.templates=[];for(l=0;l<u.length;l++)p.push(new m(u[l]))}}},toJSON:function(){var e,a={id:this.id,name:this.name,symbol:this.symbol&&this.symbol.toJSON()},n=this.domains,i=this.templates,o=t.fixJson;if(n){var r=a.domains={};for(e in n)n.hasOwnProperty(e)&&(r[e]=n[e]&&n[e].toJSON());o(r)}return i&&(a.templates=s.map(i,function(e){return e.toJSON()})),o(a)}});return l});