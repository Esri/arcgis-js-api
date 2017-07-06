// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/Logger","../../core/accessorSupport/ensureType","./Callout3D","./LineCallout3D"],function(e,t,r,l,o,u){function n(e){if(!e)return!1;var t=e.verticalOffset;return t?t.screenLength<=0||t.maxWorldLength<=0?!1:!0:!1}function s(e){if(!e)return!1;if(!e.supportsCallout||!e.supportsCallout())return!1;var t=e.callout;return t&&t.visible&&n(e)?!0:!1}function i(e){return"point-symbol-3d"===e.type||"label-symbol-3d"===e.type}function a(e,t){if(void 0===t&&(t=null),!l.requiresType(o,e))return e;switch(e.type){case"line":case null:case void 0:return l.ensureType(u,e)}return p.error("calloutUtils#cast","Trying to assign invalid value type to property of type esri/symbols/callouts/Callout3D"),t}function c(e,t,r){if(!e)return e;switch(e.type){case"line":var l=new u;return l.read(e,r),l}}Object.defineProperty(t,"__esModule",{value:!0});var p=r.getLogger("esri.symbols.Callout3D");t.hasVisibleVerticalOffset=n,t.hasVisibleCallout=s,t.isCalloutSupport=i,t.cast=a,t.read=c,t.calloutProperty={type:o,cast:function(e){return a(e,this.callout)},json:{read:c,write:!0}}});