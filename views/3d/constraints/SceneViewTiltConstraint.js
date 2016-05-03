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

define(["../../../core/declare","../../../core/Accessoire","../support/mathUtils"],function(t,e,a){var i=.5,n=179.5,s=t([e],{declaredClass:"esri.views.3d.constraints.SceneViewTiltConstraint",classMetadata:{properties:{mode:{},max:{}}},constructor:function(){this._max=i},max:i,mode:"auto",autoUpdate:function(t){"auto"===this.mode&&this._max!==t&&(this._max=t,this.notifyChange("max"))},_maxSetter:function(t){this.mode="manual",this._max=a.clamp(t,i,n)},_maxGetter:function(){return this._max},scale:function(){}});return s.MAX_DEFAULT=i,s.MIN_DEFAULT=n,s});