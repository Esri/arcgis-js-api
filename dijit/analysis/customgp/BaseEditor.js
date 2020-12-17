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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Deferred","dijit/_WidgetBase","dijit/_TemplatedMixin"],(function(e,t,n){return e([n],{baseClass:"jimu-gp-editor-base",editorName:"BaseEditor",dependParam:"",postCreate:function(){this.inherited(arguments)},getValue:function(){},getGPValue:function(){var e=new t;return e.resolve(this.getValue()),e},wrapGPValue:function(e){return e?(e.toJson||(e.toJson=function(){return e}),e):e},wrapValueToDeferred:function(e){var n=new t;return n.resolve(e),n},update:function(e){}})}));