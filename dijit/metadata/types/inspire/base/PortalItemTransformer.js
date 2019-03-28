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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/query","dijit/registry","../../../types/iso/base/PortalItemTransformer","../../../../../kernel"],function(e,t,r,i,n,o,a){var s=e([o],{postCreate:function(){this.inherited(arguments)},findInputWidget:function(e,t,r){if("tags"!==e)return this.inherited(arguments);var o,a,s=i(".gxeOtherKeywords",this.gxeDocument.rootDescriptor.domNode);return s&&s.length>0&&(a=i("[data-gxe-path='"+t+"']",s[0]))&&1===a.length&&(o=n.byNode(a[0]))?o.inputWidget:null}});return r("extend-esri")&&t.setObject("dijit.metadata.types.inspire.base.PortalItemTransformer",s,a),s});