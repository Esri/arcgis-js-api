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

define(["dojo/_base/lang","../core/JSONSupport","../core/lang","../core/screenUtils"],function(t,i,e,n){var r={STYLE_NORMAL:"normal",STYLE_ITALIC:"italic",STYLE_OBLIQUE:"oblique",VARIANT_NORMAL:"normal",VARIANT_SMALLCAPS:"small-caps",WEIGHT_NORMAL:"normal",WEIGHT_BOLD:"bold",WEIGHT_BOLDER:"bolder",WEIGHT_LIGHTER:"lighter"},a={style:"normal",variant:"normal",weight:"normal",size:9,family:"serif",decoration:"none"},l=i.createSubclass({declaredClass:"esri.symbols.Font",properties:{decoration:{},family:{},size:{cast:n.toPt},style:{},variant:{},weight:{}},getDefaults:function(){return a},normalizeCtorArgs:function(t,i,e,r,a){if(t&&"string"!=typeof t)return t;var l={};return null!=t&&(l.size=n.toPt(t)),null!=i&&(l.style=i),null!=e&&(l.variant=e),null!=r&&(l.weight=r),a&&(l.family=a),l},toJSON:function(){return e.fixJson({size:this.size,style:this.style,variant:this.variant,decoration:this.decoration,weight:this.weight,family:this.family})},clone:function(){return new l({decoration:this.decoration,family:this.family,size:this.size,style:this.style,variant:this.variant,weight:this.weight})}});return l.defaultProps=a,t.mixin(l,r),l});