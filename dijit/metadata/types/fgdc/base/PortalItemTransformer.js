// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../arcgis/portal/PortalItemTransformer","../../../../../kernel"],(function(t,a,e,i,n){var o=t([i],{postCreate:function(){this.inherited(arguments)},populateTransformationInfo:function(t,a,e){this.inherited(arguments);var i=e;i.id.path="/metadata/idinfo/citation/citeinfo/edition",i.title.path="/metadata/idinfo/citation/citeinfo/title",i.snippet.path="/metadata/idinfo/descript/purpose",i.description.path="/metadata/idinfo/descript/abstract",i.accessInformation.path="/metadata/idinfo/datacred",i.licenseInfo.path="/metadata/idinfo/useconst",i.tags.path="/metadata/idinfo/keywords/theme/themekey",i.url.path="/metadata/idinfo/citation/citeinfo/onlink",i.extent.xmin.path="/metadata/idinfo/spdom/bounding/westbc",i.extent.ymin.path="/metadata/idinfo/spdom/bounding/southbc",i.extent.xmax.path="/metadata/idinfo/spdom/bounding/eastbc",i.extent.ymax.path="/metadata/idinfo/spdom/bounding/northbc"}});return e("extend-esri")&&a.setObject("dijit.metadata.types.fgdc.base.PortalItemTransformer",o,n),o}));