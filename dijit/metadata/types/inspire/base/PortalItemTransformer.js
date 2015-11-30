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
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/query","dijit/registry","../../../types/iso/base/PortalItemTransformer","../../../../../kernel"],function(e,t,r,n,i,o,a){var s=e([o],{postCreate:function(){this.inherited(arguments)},findInputWidget:function(e,t){if("tags"!==e)return this.inherited(arguments);var r,o,a=n(".gxeOtherKeywords",this.gxeDocument.rootDescriptor.domNode);return a&&a.length>0&&(o=n("[data-gxe-path='"+t+"']",a[0]),o&&1===o.length&&(r=i.byNode(o[0])))?r.inputWidget:null}});return r("extend-esri")&&t.setObject("dijit.metadata.types.inspire.base.PortalItemTransformer",s,a),s});