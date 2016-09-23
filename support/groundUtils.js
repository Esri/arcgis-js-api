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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../core/accessorSupport/ensureType","../Ground","../layers/ElevationLayer"],function(e,r,n,o,i){function a(e){var a;if("string"==typeof e)if(e in r.groundElevationLayers){var l=r.groundElevationLayers[e],t=new i({id:l.id,url:l.url});a=new o({layers:[t]})}else console.warn("Unable to find ground definition for: "+e+'. Try "world-elevation"');else a=n["default"](o,e);return a}r.groundElevationLayers={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"}},r.ensureType=a});