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

define(["require","exports","dojo/has","../Logger","./get"],(function(e,t,r,o,s){Object.defineProperty(t,"__esModule",{value:!0});var n=o.getLogger("esri.core.accessorSupport.set");function a(e,t,o){if(e&&t)if("object"==typeof t)for(var i=0,f=Object.getOwnPropertyNames(t);i<f.length;i++){a(e,d=f[i],t[d])}else{if("_"===t[0])return;if(-1!==t.indexOf(".")){var c=t.split("."),d=c.splice(c.length-1,1)[0];return void a(s.default(e,c),d,o)}if(r("dojo-debug-messages")){var l=e.__accessor__;null==l||l.metadatas[t]||n.warn("setting unknown property '"+t+"' on instance of "+l.host.declaredClass)}e[t]=o}}t.set=a,t.default=a}));