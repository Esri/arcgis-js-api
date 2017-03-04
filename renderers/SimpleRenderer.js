// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer"],function(e,s,r,i,n,o,t){var l=e(t,{declaredClass:"esri.renderer.SimpleRenderer",constructor:function(e){if(e&&!e.declaredClass){var s=e;e=s.symbol,this.symbol=e&&(e.declaredClass?e:o.fromJson(e)),this.label=s.label,this.description=s.description}else this.symbol=e},getSymbol:function(e){return this.symbol},toJson:function(){var e=s.mixin(this.inherited(arguments),{type:"simple",label:this.label,description:this.description,symbol:this.symbol&&this.symbol.toJson()});return n.fixJson(e)}});return r("extend-esri")&&s.setObject("renderer.SimpleRenderer",l,i),l});