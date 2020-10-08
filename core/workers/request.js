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

define(["require","exports","tslib","../Error","../global"],(function(e,r,s,t,n){"use strict";var a;Object.defineProperty(r,"__esModule",{value:!0}),r.execute=void 0,r.execute=function(e,r){void 0===r&&(r={});var o=r.responseType;o?"json"!==o&&"text"!==o&&"blob"!==o&&"array-buffer"!==o&&(o="text"):o="json";var i=r&&r.signal;return delete r.signal,n.invokeStaticMessage("request",{url:e,options:r},{signal:i}).then((function(n){var i,u,l,c,b=n.data;if(b&&!("json"!==o&&"text"!==o&&"blob"!==o||(i=new Blob([b]),"json"!==o&&"text"!==o||(a||(a=new FileReaderSync),u=a.readAsText(i),"json"!==o)))){try{l=JSON.parse(u||null)}catch(n){var d=s.__assign(s.__assign({},n),{url:e,requestOptions:r});throw new t("request:server",n.message,d)}if(l.error){d=s.__assign(s.__assign({},l.error),{url:e,requestOptions:r});throw new t("request:server",l.error.message,d)}}switch(o){case"json":c=l;break;case"text":c=u;break;case"blob":c=i;break;default:c=b}return{data:c,requestOptions:r,ssl:n.ssl,url:e}}))}}));