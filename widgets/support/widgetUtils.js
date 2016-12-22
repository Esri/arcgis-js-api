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

define(["require","exports","../../core/Logger"],function(e,r,t){function n(){var e=t.getLogger("esri.widgets.support.widgetUtils");return e.warn("classes is deprecated, use join instead."),s.apply(this,arguments)}function s(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];return e.join(" ")}function i(){return"rtl"===document.head.dir}r.classes=n,r.join=s,r.isRtl=i});