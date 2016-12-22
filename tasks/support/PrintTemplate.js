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

/**
       * Defines the layout elements. It's an object with the following properties: 
       * 
       * @property {string} titleText - The text used for the map title if the specified layout contains a title text element.
       * @property {string} authorText - The text used for the author if the specified layout contains an author text element.
       * @property {string} copyrightText - The text used for the copyright if the specified layout contains an copyright text element.
       * @property {string} scalebarUnit - The unit used for the scalebar. <br> **Knowns values:** 
       * `'Miles' | 'Kilometers' | 'Meters' | 'Feet'.` <br> **Default Value** `'Miles'`.
       * @property {module:esri/tasks/support/LegendLayer[]} legendLayers - An array of {@link module:esri/tasks/support/LegendLayer} containing the id's of the layers that 
       * will be included in the legend. If `legendLayers` is not specified, all operational layers will be present in the legend. To specify
       * that no layers will be included in the legend set `legendLayer = []`.
       * @property {Object[]} customTextElements - An array of name-value pairs. Use this property to update the text for custom text elements 
       * on the page layout. Values must be strings.
       * 
       * @example 
       * layoutOptions: {
       *   titleText: "My Print",
       *   authorText: "Sam",
       *   copyrightText: "My Company",
       *   scalebarUnit: "Miles",
       *   // the following text elements must 
       *   // exist in your print service
       *   customTextElements: [{
       *      "description": "My description",
       *      "location": "My Location"
       *   }]
       * }
       * @type {Object}
       */

define(["../../core/declare","../../core/Accessor"],function(e,t){var l=e(t,{declaredClass:"esri.tasks.support.PrintTemplate",properties:{label:{value:null,type:String},exportOptions:{value:{width:800,height:1100,dpi:96},type:Object},layoutOptions:{value:null,type:Object},format:{value:"png32",type:String},layout:{value:"map-only",type:String},outScale:{value:0,type:Number},preserveScale:{value:!0,type:Boolean},attributionVisible:{type:Boolean},showLabels:{value:!0,type:Boolean}}});return l});