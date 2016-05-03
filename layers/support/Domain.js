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

define(["../../core/jsonDictionary","../../core/JSONSupport","../../core/lang"],function(e,r,n){var o=e({codedValue:"coded-value"}),a=r.createSubclass({declaredClass:"esri.layers.support.Domain",properties:{name:{value:null},type:{json:{read:o.fromJSON},value:null}},toJSON:function(){return n.fixJson({name:this.name,type:o.toJSON(this.type)})}});return a});