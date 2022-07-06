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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","./support/domainUtils"],(function(e,a,s,n,o,t){var r=e(null,{declaredClass:"esri.layers.FeatureSubtype",constructor:function(e){if(e&&a.isObject(e)){this.code=e.code,this.name=e.name,this.defaultValues=e.defaultValues;var s=e.domains,n=this.domains={};for(var o in s)s.hasOwnProperty(o)&&(n[o]=t.fromJson(s[o]))}},toJson:function(){var e=o.fixJson,s={code:this.code,name:this.name,defaultValues:e(a.clone(this.defaultValues))},n=this.domains;if(n){var t=s.domains={};for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]&&n[r].toJson());e(t)}return e(s)}});return s("extend-esri")&&a.setObject("layers.FeatureSubtype",r,n),r}));