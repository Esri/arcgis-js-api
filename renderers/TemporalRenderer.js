// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","./Renderer"],function(e,r,t,n,o){var s=e(o,{declaredClass:"esri.renderer.TemporalRenderer",constructor:function(e,r,t,n){this.observationRenderer=e,this.latestObservationRenderer=r,this.trackRenderer=t,this.observationAger=n},getSymbol:function(e){var r=e.getLayer(),t=this.getObservationRenderer(e),n=t&&t.getSymbol(e),o=this.observationAger;return r.timeInfo&&r._map.timeExtent&&t===this.observationRenderer&&o&&n&&(n=o.getAgedSymbol(n,e)),n},getObservationRenderer:function(e){return 0===e.getLayer()._getKind(e)?this.observationRenderer:this.latestObservationRenderer||this.observationRenderer},toJson:function(){var e={type:"temporal"};return e.observationRenderer=this.observationRenderer.toJson(),this.latestObservationRenderer&&(e.latestObservationRenderer=this.latestObservationRenderer.toJson()),this.trackRenderer&&(e.trackRenderer=this.trackRenderer.toJson()),this.observationAger&&(e.observationAger=this.observationAger.toJson()),e}});return t("extend-esri")&&r.setObject("renderer.TemporalRenderer",s,n),s});