// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../base/Descriptor","../../../form/Element","../../../form/Tabs","../../iso/gmd/dataQuality/Quality","../../iso/gmd/distribution/Distribution","../gmd/metadataEntity/MetadataSection","../srv/ServiceIdentification","dojo/text!./templates/ServiceRoot.html","../../../../../kernel"],(function(e,t,i,a,o,r,d,s,n,m,c,l){var b=e(a,{templateString:c});return i("extend-esri")&&t.setObject("dijit.metadata.types.inspire.base.ServiceRoot",b,l),b}));