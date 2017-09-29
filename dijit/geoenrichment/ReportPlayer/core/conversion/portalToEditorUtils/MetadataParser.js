// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter"],function(t){var a={};return a.parseMetadataXML=function(a,e,r){function s(){var a=t.queryJson(u,"Maps");a.forEach(function(a){var r=t.queryJson(a,"Map");r.forEach(function(r){var s,i,u=t.queryJson(r,"Layer").filter(function(t){return!!t.attributes.PortalItemId});u.length>1&&(s=u.shift()),i=u.shift(),e.metadata.mapImageInfosHash[a.attributes.Name+"."+r.attributes.Name]={defaultBasemapId:s&&s.attributes.PortalItemId,webMapId:i&&i.attributes.PortalItemId,mapScale:Number(r.attributes.Scale)||null}})})}function i(){var a=t.queryJson(u,"DataCollections");a.forEach(function(a){var r=t.queryJson(a,"ComparisonLevel");if(r.length){var s=t.queryJson(a,"Fields")[0],i=t.queryJson(s,"Field"),u=[],n=[];i.forEach(function(t){u.push(t.attributes.MapTo),n.push({id:t.attributes.MapTo.substr(t.attributes.MapTo.lastIndexOf(".")+1),fullName:t.attributes.MapTo,alias:t.attributes.Alias,fieldName:t.attributes.Name})});var o=r.map(function(t){return t.attributes.Name}),l=o.pop();e.metadata.infographicCalculatorsHash[a.attributes.Name]={variables:u,levels:o,highestLevel:l,variableObjects:n}}})}r.log&&r.log(a.data);var u=t.parseXml(a.data);u&&u.attributes&&(s(),i())},a});