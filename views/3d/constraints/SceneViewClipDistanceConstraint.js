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

define(["../../../core/Accessor"],function(t){var e=t.createSubclass([],{declaredClass:"esri.views.3d.constraints.SceneViewClipDistanceConstraint",properties:{near:{value:0,cast:function(t){return Math.max(1e-8,t)},set:function(t){this._set("near",t),t>=this._get("far")&&(this.far=t+1e-9),this.mode="manual"}},far:{value:0,cast:function(t){return Math.max(1e-8,t)},set:function(t){this._set("far",t),t<=this._near&&(this.near=t-1e-9),this.mode="manual"}},mode:{value:"auto"}},autoUpdate:function(t,e){"auto"===this.mode&&(this._get("near")!==t&&this._set("near",t),this._get("far")!==e&&this._set("far",e))},scale:function(t){this._set("near",this._get("near")*t),this._set("far",this._get("far")*t)}});return e});