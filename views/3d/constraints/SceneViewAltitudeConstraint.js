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

define(["../../../core/declare","../../../core/Accessoire","../support/earthUtils"],function(t,i,n){var e=-1/0,s=4*n.earthRadius,a=t([i],{declaredClass:"esri.views.3d.constraints.SceneViewAltitudeConstraint",classMetadata:{properties:{mode:{},min:{},max:{}}},constructor:function(){this._min=e,this._max=s},mode:"auto",autoUpdate:function(t,i){"auto"===this.mode&&(this._min!==t&&(this._min=t,this.notifyChange("min")),this._max!==i&&(this._max=i,this.notifyChange("max")))},_minSetter:function(t){this.mode="manual",this._min=t,this.max<t&&(this.max=t)},_minGetter:function(){return this._min},_maxSetter:function(t){this.mode="manual",this._max=t,this.min>t&&(this.min=t)},_maxGetter:function(){return this._max},scale:function(t){this._max*=t,this.notifyChange("max"),this._min*=t,this.notifyChange("min")}});return a.MIN_DEFAULT=e,a.MAX_DEFAULT=s,a});