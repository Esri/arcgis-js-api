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

define(["../../core/Accessoire","../../core/declare","../../core/kebabDictionary","dojo/_base/array"],function(e,i,t,n){var s=t({preserveShape:"preserve-shape"}),l=i(e,{declaredClass:"esri.tasks.support.LengthsParameters",calculationType:null,geodesic:null,lengthUnit:null,polylines:null,toJSON:function(){var e=n.map(this.polylines,function(e){return e.toJSON()}),i={};i.polylines=JSON.stringify(e);var t=this.polylines[0].spatialReference;return i.sr=t.wkid?t.wkid:JSON.stringify(t.toJSON()),this.lengthUnit&&(i.lengthUnit=this.lengthUnit),this.geodesic&&(i.geodesic=this.geodesic),this.calculationType&&(i.calculationType=s.toJSON(this.calculationType)),i}});return l});