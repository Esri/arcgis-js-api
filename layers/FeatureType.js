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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../lang","../symbols/jsonUtils","./FeatureTemplate","./support/domainUtils"],(function(s,e,t,o,n,a,r,i,l){var m=s(null,{declaredClass:"esri.layers.FeatureType",constructor:function(s){if(s&&e.isObject(s)){this.id=s.id,this.name=s.name;var t=s.symbol;t&&(this.symbol=r.fromJson(t));var o,n=s.domains,a=this.domains={};for(o in n)n.hasOwnProperty(o)&&(a[o]=l.fromJson(n[o]));var m=s.templates;if(m){var d,h=this.templates=[];for(d=0;d<m.length;d++)h.push(new i(m[d]))}}},toJson:function(){var s,e={id:this.id,name:this.name,symbol:this.symbol&&this.symbol.toJson()},o=this.domains,n=this.templates,r=a.fixJson;if(o){var i=e.domains={};for(s in o)o.hasOwnProperty(s)&&(i[s]=o[s]&&o[s].toJson());r(i)}return n&&(e.templates=t.map(n,(function(s){return s.toJson()}))),r(e)}});return o("extend-esri")&&e.setObject("layers.FeatureType",m,n),m}));