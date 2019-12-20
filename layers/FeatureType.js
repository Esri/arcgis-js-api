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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../lang","../symbols/jsonUtils","./RangeDomain","./CodedValueDomain","./InheritedDomain","./FeatureTemplate"],function(e,s,a,n,t,o,i,r,l,m,d){var h=e(null,{declaredClass:"esri.layers.FeatureType",constructor:function(e){if(e&&s.isObject(e)){this.id=e.id,this.name=e.name;var a=e.symbol;a&&(this.symbol=i.fromJson(a));var n,t,o=e.domains,h=this.domains={};for(n in o)if(o.hasOwnProperty(n)){var c=o[n];switch(c.type){case"range":h[n]=new r(c);break;case"codedValue":h[n]=new l(c);break;case"inherited":h[n]=new m(c)}}var u=e.templates;if(u){var f=this.templates=[];for(t=0;t<u.length;t++)f.push(new d(u[t]))}}},toJson:function(){var e,s={id:this.id,name:this.name,symbol:this.symbol&&this.symbol.toJson()},n=this.domains,t=this.templates,i=o.fixJson;if(n){var r=s.domains={};for(e in n)n.hasOwnProperty(e)&&(r[e]=n[e]&&n[e].toJson());i(r)}return t&&(s.templates=a.map(t,function(e){return e.toJson()})),i(s)}});return n("extend-esri")&&s.setObject("layers.FeatureType",h,t),h});