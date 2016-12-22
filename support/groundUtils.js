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

define(["require","exports","../core/accessorSupport/ensureType","../core/Logger","../Ground","../layers/ElevationLayer"],function(e,r,o,n,i,a){function l(e){var n;if("string"==typeof e)if(e in r.groundElevationLayers){var l=r.groundElevationLayers[e],s=new a({id:l.id,url:l.url});n=new i({layers:[s]})}else t.warn("Unable to find ground definition for: "+e+'. Try "world-elevation"');else n=o["default"](i,e);return n}var t=n.getLogger("esri.support.groundUtils");r.groundElevationLayers={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"}},r.ensureType=l});