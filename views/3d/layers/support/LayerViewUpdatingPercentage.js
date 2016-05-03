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

define(["../../../../core/declare"],function(e){var t=e([],{classMetadata:{properties:{updatingPercentage:{dependsOn:["updating"]}}},constructor:function(){this._updatingPercentage=0},_updatingPercentageGetter:function(){return this.updating?this._updatingPercentage:0},_updatingPercentageSetter:function(e){this._updatingPercentage=e}});return t});