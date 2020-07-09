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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../webscene/definitions"],(function(e,i,t){Object.defineProperty(i,"__esModule",{value:!0}),i.json={title:"Integrated Mesh Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{id:{type:"number",description:"ID of the service layer."},layerDefinition:{type:"object",description:"A layerDefinition object defining the attribute schema and drawing information for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{elevationInfo:{},minScale:{},maxScale:{}},additionalProperties:!1}]},listMode:{type:"string",enum:["hide","show"]},modifications:{type:"string",description:"URL to modifications json file, typically stored in `ITEM/resources`. Content of the file follows the $ref:[Modifications schema](modifications_schema.json)."},opacity:{type:"number",description:"The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",minimum:0,maximum:1,default:1},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible in the web scene.",default:!0}},additionalProperties:!1}}},additionalProperties:!1,definitions:t.schema_definitions}}));