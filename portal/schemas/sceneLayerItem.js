// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./definitions"],(function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.json=void 0,i.json={title:"Scene Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{disablePopup:{type:"boolean",description:"disablePopups allows a client to ignore popups defined by the service item."},id:{type:"number",description:"ID of the service layer."},layerDefinition:{type:"object",description:"A layerDefinition object defining the attribute schema and drawing information for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{definitionExpression:{},drawingInfo:{},elevationInfo:{},featureReduction:{},minScale:{},maxScale:{},rangeInfos:{}},additionalProperties:!1}]},listMode:{type:"string",description:"To show or hide layers in the layer list",enum:["hide","show"]},opacity:{type:"number",description:"The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",minimum:0,maximum:1,default:1},popupInfo:{type:"object",description:"A popupInfo object defining the content of pop-up windows when you click or query a feature.",$ref:"#/definitions/popupInfo_schema.json"},screenSizePerspective:{type:"boolean",description:"Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.",default:!1},showLabels:{type:"boolean",description:"If the layer has a labelingInfo property then labels show on the scene only if the showLabels property it true.",default:!1},showLegend:{type:"boolean",description:"Boolean value indicating whether to display the layer in the legend. Default value is `true`.",default:!0},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible in the web scene",default:!0}},additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:t.schema_definitions}}));