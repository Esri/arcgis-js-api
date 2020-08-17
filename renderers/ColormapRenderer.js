// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer","./arcadeUtils"],(function(o,r,e,n,l,a,s,t,c){var i=o(t,{declaredClass:"esri.renderer.ColormapRenderer",constructor:function(o){this.colormapInfos=o&&o.colormapInfos},toJson:function(){var o,n=a.fixJson,l={type:"rasterColormap",colormapInfos:r.map(this.colormapInfos||[],(function(o,r){var e={};return o.color&&null!==o.color&&o.color.length>=3&&(e.color=o.color,e.value=o.value||r,e.label=(o.label||r)+""),n(e)}))};return o=e.mixin(this.inherited(arguments),l),n(o)}});return n("extend-esri")&&e.setObject("renderer.ColormapRenderer",i,l),i}));
