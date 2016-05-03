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

/**
    * Defines the layout elements. It's an object with the following properties: 
    * 
    * @property {string} titleText - The text used for the map title if the specified layout contains a title text element.
    * @property {string} authorText - The text used for the author if the specified layout contains an author text element.
    * @property {string} copyrightText - The text used for the copyright if the specified layout contains an copyright text element.
    * @property {string} scalebarUnit - The units used for the scalebar. **Valid values:** 
    * `'Miles' | 'Kilometers' | 'Meters' | 'Feet'.` **Default** is `'Miles'`.
    * @property {module:esri/tasks/support/LegendLayer[]} legendLayers - An array of LegendLayer containing the id's of the layers that 
    * will be included in the legend. If `legendLayers` is not specified, all operational layers will be present in the legend. To specify
    * that no layers will be included in the legend set `legendLayer = []`.
    * @property {Object[]} customTextElements - Updated the text for a TextElement, that is not DynamicText, on the page layout. 
    * Values must be strings.
    * 
    * @type {Object}
    */

define(["../../core/declare","../../core/Accessoire"],function(e,l){var t=e(l,{declaredClass:"esri.tasks.support.PrintTemplate",label:null,exportOptions:{width:800,height:1100,dpi:96},layoutOptions:null,format:"PNG32",layout:"MAP_ONLY",outScale:0,preserveScale:!0,attributionVisible:null,showLabels:!0});return t});