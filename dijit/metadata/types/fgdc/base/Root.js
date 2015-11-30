// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../base/Descriptor","../../../form/Element","../../../form/Tabs","../idinfo/idinfo","../dataqual/dataqual","../spref/spref","../eainfo/eainfo","../distinfo/distinfo","../metainfo/metainfo","dojo/text!./templates/Root.html","../../../../../kernel"],function(e,t,a,o,i,n,d,f,s,r,l,m,b,j){var p=e(o,{templateString:b});return a("extend-esri")&&t.setObject("dijit.metadata.types.fgdc.base.Root",p,j),p});