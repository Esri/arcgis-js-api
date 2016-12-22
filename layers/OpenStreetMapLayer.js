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

define(["../config","./WebTileLayer"],function(e,r){e.request.corsEnabledServers.push("a.tile.openstreetmap.org","b.tile.openstreetmap.org","c.tile.openstreetmap.org");var t=r.createSubclass({declaredClass:"esri.layers.OpenStreetMapLayer",properties:{copyright:"Map data &copy; OpenStreetMap contributors, CC-BY-SA",subDomains:{value:["a","b","c"]},urlTemplate:"https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",operationalLayerType:"OpenStreetMap",type:{value:"open-street-map",json:{readable:!1}}}});return t});