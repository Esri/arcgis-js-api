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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/declare"],function(e,r){var i=r([e],{declaredClass:"esri.views.layers.GraphicsView",graphics:null,renderer:null,view:null,getRenderer:function(e){if(!e||e.symbol)return null;var r=this._rndForScale||this.renderer;return e&&r&&r.getObservationRenderer&&(r=r.getObservationRenderer(e)),r},getSymbol:function(e){if(e.symbol)return e.symbol;var r=this.getRenderer(e);return r&&r.getSymbol(e)},getRenderingInfo:function(e){var r,i,l=this.getRenderer(e),t=this.getSymbol(e);if(!t)return null;if(r={renderer:l,symbol:t},l&&l.visualVariables){var a=this.view.view.state,n={resolution:a.resolution,scale:a.scale},o=l.getVisualVariableValues(e,n);i=["proportional","proportional","proportional"];for(var s=0;s<o.length;s++){var u=o[s],v=u.variable.type;if("color"===v)r.color=u.value;else if("size"===v)if(u.variable.target)r.outlineSize=u.value;else{var c=u.variable.axis,d=u.variable.useSymbolValue?"symbolValue":u.value;"width"===c?i[0]=d:"depth"===c?i[1]=d:"height"===c?i[2]=d:"width-and-depth"===c?i[0]=i[1]=d:i[0]=i[1]=i[2]=d}else"opacity"===v?r.opacity=u.value:"rotation"===v&&(r.rotationAngle=u.value)}(isFinite(i[0])||isFinite(i[1])||isFinite(i[2]))&&(r.size=i)}return r},_evalSDRenderer:function(e){}});return i});