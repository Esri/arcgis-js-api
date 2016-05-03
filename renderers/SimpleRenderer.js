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

define(["../core/declare","../core/lang","dojo/_base/lang","../symbols/support/jsonUtils","./Renderer"],function(e,i,s,l,t){var n=e(t,{declaredClass:"esri.renderer.SimpleRenderer",type:"simple",getDefaults:function(){return s.mixin(this.inherited(arguments),{description:null,label:null,symbol:null})},_symbolReader:l.fromJSON,getSymbol:function(){return this.symbol},toJSON:function(){var e=s.mixin(this.inherited(arguments),{type:this.type,label:this.label,description:this.description,symbol:this.symbol&&this.symbol.toJSON()});return i.fixJson(e)},clone:function(){return new n({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:i.clone(this.visualVariables)})}});return n});