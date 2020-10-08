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

define(["require","exports","../has","../Logger","./get"],(function(e,t,r,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.set=void 0;var n=s.getLogger("esri.core.accessorSupport.set");function a(e,t,s){if(e&&t)if("object"==typeof t)for(var i=0,c=Object.getOwnPropertyNames(t);i<c.length;i++){a(e,l=c[i],t[l])}else{if(-1!==t.indexOf(".")){var f=t.split("."),l=f.splice(f.length-1,1)[0];return void a(o.default(e,f),l,s)}if(r("esri-debug-messages")){var u=e.__accessor__;null==u||u.metadatas[t]||n.warn("setting unknown property '"+t+"' on instance of "+u.host.declaredClass)}e[t]=s}}t.set=a,t.default=a}));