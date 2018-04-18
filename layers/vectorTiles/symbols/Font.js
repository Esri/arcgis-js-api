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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","../core/JSONSupport","../core/lang","../core/screenUtils"],function(e,t,i,o){var n={STYLE_NORMAL:"normal",STYLE_ITALIC:"italic",STYLE_OBLIQUE:"oblique",WEIGHT_NORMAL:"normal",WEIGHT_BOLD:"bold",WEIGHT_BOLDER:"bolder",WEIGHT_LIGHTER:"lighter"},r={style:"normal",weight:"normal",size:9,family:"serif",decoration:"none"},s=t.createSubclass({declaredClass:"esri.symbols.Font",properties:{decoration:{},family:{},size:{cast:o.toPt},style:{},weight:{}},getDefaults:function(){return r},normalizeCtorArgs:function(e,t,i,n){if(e&&"string"!=typeof e)return e;var r={};return null!=e&&(r.size=o.toPt(e)),null!=t&&(r.style=t),null!=i&&(r.weight=i),n&&(r.family=n),r},toJSON:function(){return i.fixJson({size:this.size,style:this.style,decoration:this.decoration,weight:this.weight,family:this.family})},clone:function(){return new s({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}});return s.defaultProps=r,e.mixin(s,n),s});