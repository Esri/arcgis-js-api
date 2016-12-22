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

define(["../../../../core/declare"],function(i){var n=i([],{declaredClass:"esri.views.3d.navigation.mixins.PanMixin",type:"pan",begin:function(i){this.navigation.begin(this),this.active=!0,this.emit("begin")},update:function(i){this.emit("update")},end:function(i){this.active=!1,this.emit("end"),this.navigation.end(this)},beginContinuous:function(i){},updateContinuous:function(i){},endContinuous:function(i){}});return n});