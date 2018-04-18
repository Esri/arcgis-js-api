// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

//  copyright

define(["../config","./WebTileLayer"],function(e,r){return e.request.corsEnabledServers.push("a.tile.openstreetmap.org","b.tile.openstreetmap.org","c.tile.openstreetmap.org"),r.createSubclass({declaredClass:"esri.layers.OpenStreetMapLayer",properties:{subDomains:{value:["a","b","c"],json:{read:!1,write:!1}},fullExtent:{json:{read:!1,write:!1}},urlTemplate:{value:"https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",json:{read:!1,write:!1}},operationalLayerType:"OpenStreetMap",type:{value:"open-street-map",json:{read:!1}},copyright:{value:"Map data &copy; OpenStreetMap contributors, CC-BY-SA",json:{origins:{"web-document":{read:!1,write:!1}}}},wmtsInfo:{json:{read:!1,write:!1}}}})});