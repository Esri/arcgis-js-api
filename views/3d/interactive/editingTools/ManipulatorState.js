// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../Manipulator3D"],(function(t,e,i,a){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.grabbingState=0,this.zManipulator=null,this.firstSelected=null,this.numSelected=0,this.firstGrabbedXY=null}return t.prototype.update=function(t){var e=this;this.grabbingState=0,this.zManipulator=null,this.numSelected=0,this.firstSelected=null,this.firstGrabbedXY=null,t.forEachManipulator((function(t,n){if(0===n&&(e.zManipulator=t),t instanceof a.Manipulator3D&&(t.selected&&(0===e.numSelected&&(e.firstSelected=t),e.numSelected++),i.isNone(e.firstGrabbedXY)&&t.grabbing&&1===n&&(e.firstGrabbedXY=t)),t.grabbing)switch(e.grabbingState|=1,n){case 0:e.grabbingState|=2;break;case 1:e.grabbingState|=4}}))},t}();e.ManipulatorState=n}));