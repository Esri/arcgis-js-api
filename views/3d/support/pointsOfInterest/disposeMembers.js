// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/Accessor"],function(e,o,r){function t(e){for(var o=[],r=1;r<arguments.length;r++)o[r-1]=arguments[r];if(n(e)&&e.destroyed)try{throw new Error("instance is already destroyed")}catch(e){console.warn(e.stack)}else for(var t=0,s=o;t<s.length;t++){var i=s[t];if(!(i in e))throw new Error("Property '"+i+"' does not exist and cannot be disposed");var a=e[i];a&&("function"==typeof a.destroy?a.destroy():"function"==typeof a.dispose?a.dispose():"function"==typeof a.remove&&a.remove()),n(e)&&i in e.__accessor__.metadatas?e._set(i,null):e[i]=null}}function n(e){return e instanceof r}Object.defineProperty(o,"__esModule",{value:!0}),o.disposeMembers=t,o.default=t});