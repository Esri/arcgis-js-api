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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../base/Descriptor","../../../form/Element","../../../form/Tabs","../gmd/dataQuality/Quality","../gmd/distribution/Distribution","../gmd/identification/DataIdentification","../gmd/metadataEntity/MetadataSection","../gmi/acquisitionInformation/Acquisition","dojo/text!./templates/GmiRoot.html","../../../../../kernel"],function(t,i,e,a,o,n,d,m,s,r,c,l,b){var u=t(a,{templateString:l});return e("extend-esri")&&i.setObject("dijit.metadata.types.iso.base.GmiRoot",u,b),u});