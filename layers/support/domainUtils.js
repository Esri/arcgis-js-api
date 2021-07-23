// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../../kernel","../RangeDomain","../CodedValueDomain","../InheritedDomain"],(function(e,n,a,r,o,i){var t={fromJson:function(e){var n;if(e)switch(e.type){case"range":n=new r(e);break;case"codedValue":n=new o(e);break;case"inherited":n=new i(e)}return n}};return n("extend-esri")&&e.setObject("layers.support.domainUtils",t,a),t}));