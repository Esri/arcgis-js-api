// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/kebabDictionary"],function(e,i){var t=new i.KebabDictionary({preserveShape:"preserve-shape"});return e.createSubclass({declaredClass:"esri.tasks.support.LengthsParameters",properties:{calculationType:null,geodesic:null,lengthUnit:null,polylines:null},toJSON:function(){var e=this.polylines.map(function(e){return e.toJSON()}),i={};i.polylines=JSON.stringify(e);var n=this.polylines[0].spatialReference;return i.sr=n.wkid?n.wkid:JSON.stringify(n.toJSON()),this.lengthUnit&&(i.lengthUnit=this.lengthUnit),this.geodesic&&(i.geodesic=this.geodesic),this.calculationType&&(i.calculationType=t.toJSON(this.calculationType)),i}})});