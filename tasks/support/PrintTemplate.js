// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

/**
       * Defines the layout elements. It's an object with the following properties:
       *
       * @property {string} [titleText] - The text used for the map title if the specified layout contains a title text element.
       * @property {string} [authorText] - The text used for the author if the specified layout contains an author text element.
       * @property {string} [copyrightText] - The text used for the copyright if the specified layout contains a copyright text element.
       * @property {"Miles" | "Kilometers" | "Meters" | "Feet"} [scalebarUnit=Miles] - The unit used for the scalebar.
       * @property {module:esri/tasks/support/LegendLayer[]} [legendLayers] - An array of {@link module:esri/tasks/support/LegendLayer}
       * containing the ids of the layers that will be included in the legend. Tiled layers and GraphicsLayer will not appear in the
       * legend. If `legendLayers` is not specified, all operational layers (non-tiled layers) except {@link module:esri/layers/GraphicsLayer}
       * will be present in the legend. To specify that no layers will be included in the legend, set `legendLayer = []`.
       * @property {Object[]} [customTextElements] - An array of name-value pair objects. Use this property to update the text for custom text elements
       * on the page layout. Values must be strings. The custom text elements must exist in the print service. All out-of-the-box print service layout
       * templates contain a text element named `date` that gets populated by default with the system date-time, but can be overwritten.
       *
       * @example
       * layoutOptions: {
       *   titleText: "My Print",
       *   authorText: "Sam",
       *   copyrightText: "My Company",
       *   scalebarUnit: "Miles",
       *   // the following text elements must
       *   // exist in the print service to appear
       *   customTextElements: [
       *     {"description": "My description"},
       *     {"location": "My Location"},
       *     {"date": "11/11/2020, 11:11:20 AM"}
       *   ]
       * }
       * @type {Object}
       */

define(["../../core/Accessor"],function(e){return e.createSubclass({declaredClass:"esri.tasks.support.PrintTemplate",properties:{attributionVisible:{value:!0,type:Boolean},exportOptions:{value:{width:800,height:1100,dpi:96},type:Object},forceFeatureAttributes:{value:!1,type:Boolean},format:{value:"png32",type:String},label:{value:null,type:String},layout:{value:"map-only",type:String},layoutOptions:{value:null,type:Object},outScale:{value:0,type:Number},preserveScale:{value:!0,type:Boolean},showLabels:{value:!0,type:Boolean}}})});