// COPYRIGHT © 2017 Esri
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

define(["../../core/Accessor","../../core/kebabDictionary","dojo/_base/array"],function(e,t,i){var s=t({preserveShape:"preserve-shape"}),n=e.createSubclass({declaredClass:"esri.tasks.support.LengthsParameters",properties:{calculationType:null,geodesic:null,lengthUnit:null,polylines:null},toJSON:function(){var e=i.map(this.polylines,function(e){return e.toJSON()}),t={};t.polylines=JSON.stringify(e);var n=this.polylines[0].spatialReference;return t.sr=n.wkid?n.wkid:JSON.stringify(n.toJSON()),this.lengthUnit&&(t.lengthUnit=this.lengthUnit),this.geodesic&&(t.geodesic=this.geodesic),this.calculationType&&(t.calculationType=s.toJSON(this.calculationType)),t}});return n});