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

define(["../../core/declare","./LayerView"],function(e,r){var i=e(r,{declaredClass:"esri.views.layers.GraphicsLayerView",constructor:function(){},getRenderer:function(e){if(!e||e.symbol)return null;var r=this._rndForScale||this.layer.get("renderer");return e&&r&&r.getObservationRenderer&&(r=r.getObservationRenderer(e)),r},getSymbol:function(e){if(e.symbol)return e.symbol;var r=this.getRenderer(e);return r&&r.getSymbol(e)},getRenderingInfo:function(e){var r,i,t=this.getRenderer(e),a=this.getSymbol(e);if(!a)return null;if(r={renderer:t,symbol:a},t&&(t.colorInfo&&(r.color=t.getColor(e)),t.sizeInfo&&(i=t.getSize(e),r.size=[i,i,i]),t.visualVariables)){var n=t.getVisualVariableValues(e);i=["proportional","proportional","proportional"];for(var o=0;o<n.length;o++){var l=n[o];if("outline"!==l.variable.target){var s=l.variable.type;if("color"===s)r.color=l.value;else if("size"===s){var u=l.variable.axis,v=l.variable.useSymbolValue?"symbolValue":l.value;"width"===u?i[0]=v:"depth"===u?i[1]=v:"height"===u?i[2]=v:i[0]=i[1]="width-and-depth"===u?v:i[2]=v}else"opacity"===s?r.opacity=l.value:"rotation"===s&&(r.rotationAngle=l.value)}}(isFinite(i[0])||isFinite(i[1])||isFinite(i[2]))&&(r.size=i)}return r},_evalSDRenderer:function(){}});return i});