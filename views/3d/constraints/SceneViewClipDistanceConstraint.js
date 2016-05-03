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

define(["../../../core/declare","../../../core/Accessoire"],function(t,e){var a=t([e],{declaredClass:"esri.views.3d.constraints.SceneViewClipDistanceConstraint",classMetadata:{properties:{near:{},far:{},mode:{}}},constructor:function(){this._near=0,this._far=0},near:0,far:0,mode:"auto",autoUpdate:function(t,e){"auto"===this.mode&&(this._near!==t&&(this._near=t,this.notifyChange("near")),this._far!==e&&(this._far=e,this.notifyChange("far")))},_nearGetter:function(){return this._near},_nearSetter:function(t){this.mode="manual",this._near=Math.max(1e-8,t),this._near>=this._far&&(this.far=this._near+1e-9)},_farGetter:function(){return this._far},_farSetter:function(t){this.mode="manual",this._far=Math.max(1e-8,t),this._far<=this._near&&(this.near=this._far-1e-9)},scale:function(t){this._near*=t,this.notifyChange("near"),this._far*=t,this.notifyChange("far")}});return a});