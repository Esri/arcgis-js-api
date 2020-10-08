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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/Accessor"],(function(e,o,r){"use strict";function t(e){for(var o=[],r=1;r<arguments.length;r++)o[r-1]=arguments[r];if(s(e)&&e.destroyed)try{throw new Error("instance is already destroyed")}catch(e){console.warn(e.stack)}else for(var t=0,n=o;t<n.length;t++){var i=n[t];if(!(i in e))throw new Error("Property '"+i+"' does not exist and cannot be disposed");var d=e[i];d&&("function"==typeof d.destroy?d.destroy():"function"==typeof d.dispose?d.dispose():"function"==typeof d.remove&&d.remove()),s(e)&&i in e.__accessor__.metadatas?e._set(i,null):e[i]=null}}function s(e){return e instanceof r}Object.defineProperty(o,"__esModule",{value:!0}),o.disposeMembers=void 0,o.disposeMembers=t,o.default=t}));