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

define(["require","exports","../tsSupport/assignHelper","../Error","../global"],(function(e,r,s,t,n){var a;Object.defineProperty(r,"__esModule",{value:!0}),r.execute=function(e,r){void 0===r&&(r={});var o=r.responseType;o?"json"!==o&&"text"!==o&&"blob"!==o&&"array-buffer"!==o&&(o="text"):o="json";var l=r&&r.signal;return delete r.signal,n.invokeStaticMessage("request",{url:e,options:r},{signal:l}).then((function(n){var l,u,i,b,c=n.data;if(c&&!("json"!==o&&"text"!==o&&"blob"!==o||(l=new Blob([c]),"json"!==o&&"text"!==o||(a||(a=new FileReaderSync),u=a.readAsText(l),"json"!==o)))){try{i=JSON.parse(u||null)}catch(n){var p=s({},n,{url:e,requestOptions:r});throw new t("request:server",n.message,p)}if(i.error){p=s({},i.error,{url:e,requestOptions:r});throw new t("request:server",i.error.message,p)}}switch(o){case"json":b=i;break;case"text":b=u;break;case"blob":b=l;break;default:b=c}return{data:b,requestOptions:r,ssl:n.ssl,url:e}}))}}));