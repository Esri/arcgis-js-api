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

define(["../core/declare","../core/lang","./Symbol3D","dojo/_base/lang"],function(e,o,l,t){var n=e(l,{declaredClass:"esri.symbol.PolygonSymbol3D",type:"polygon-symbol-3d",_allowedLayerTypes:["Extrude","Fill","Line","Icon","Object","Text"],toJSON:function(){var e=[];return this.symbolLayers.forEach(function(l){var t=l.toJSON();if(e.push(t),"Fill"===l.type&&l.outline&&l.outline.size>0&&l.outline.color){var n=l.outline.size,r=l.outline.color;e.push({type:"Line",enable:l.enable,material:{color:[r.r,r.g,r.b],transparency:100*(1-r.a)},elevationInfo:o.clone(t.elevationInfo),size:n})}}),o.fixJson(t.mixin(this.inherited(arguments),{symbolLayers:e}))},clone:function(){return new n({symbolLayers:o.clone(this.symbolLayers)})}});return n.fromJSON=function(e){var o=new n;if(o.read(e),2===o.symbolLayers.length&&"Fill"===o.symbolLayers.getItemAt(0).type&&"Line"===o.symbolLayers.getItemAt(1).type){var l=o.symbolLayers.getItemAt(0),t=o.symbolLayers.getItemAt(1);l.outline={size:t.size,color:t.material.color},o.symbolLayers.removeAt(1)}return o},n});