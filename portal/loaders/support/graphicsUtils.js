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

define(["require","exports","./setUtils","./jsonUtils","dojo/has","../../../core/Collection","../../../renderers/support/layerTemplates"],function(e,n,r,i,o,a,f){function t(e,n,i,o){if(i&&Array.isArray(i.layers)){var f=new a(i.layers),t=f.find(function(e){return e.id===o});return r.setAsDefaultIfDefined(n,"legendEnabled",i.showLegend,!!i.showLegend),r.setAsDefaultIfDefined(n,"visible",i.visibility,!!i.visibility),d(e,n,t)}}function d(e,n,r){return r?(i.readIfDefined(n,"legendEnabled",r.showLegend,r),i.readIfDefined(n,"labelsVisible",r.showLabels,r),u(n,r),l(e,n,r.layerDefinition)):void 0}function l(e,n,r){return r?(i.readIfDefined(n,"minScale",r.minScale,r),i.readIfDefined(n,"maxScale",r.maxScale,r),i.readIfDefined(n,"elevationInfo",r.elevationInfo,r),i.readIfDefined(n,"definitionExpression",r.definitionExpression,r),p(n,r),s(n,r),I(e,n,r.drawingInfo)):void 0}function s(e,n){i.readIfDefined(e,"labelingInfo",n.drawingInfo&&n.drawingInfo.labelingInfo,n)}function p(e,n){var i=e._accessorProps;return i&&i.properties.elevationInfo.mode&&i.properties.elevationInfo.reader?void r.setAsDefaultIfDefined(e,"elevationInfo",i.properties.elevationInfo.reader.call(e,n.elevationInfo)):void(n&&n.elevationInfo&&console.warn("Data has elevation info but no reader for elevationInfo property is defined..."))}function u(e,n){var r=i.readIfDefined(e,"popupTemplate",n.popupInfo,n);if(r&&r===e.popupTemplate){var o=e;o._popupSource&&(o._popupSource.popupTemplate="portal")}}function I(e,n,r){return r?(i.readIfDefined(n,"opacity",r.transparency,{drawingInfo:r}),c(e,n,r)):void 0}function c(e,n,o){var a=o.renderer;if(a)return f.hasContentByReference(a)?f.createRenderer(a,e.portal).then(function(e){r.setAsDefaultIfDefined(n,"legendEnabled",!1),r.setAsDefaultIfDefined(n,"renderer",e)}).otherwise(function(e){v&&console.warn("Failed to create by reference renderer:",e.toString?e.toString():e),i.readIfDefined(n,"renderer",o.renderer,{drawingInfo:o})}):void i.readIfDefined(n,"renderer",o.renderer,{drawingInfo:o})}var v=o("dojo-debug-messages");n.readItemOverrides=t});