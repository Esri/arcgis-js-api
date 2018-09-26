// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","../tsSupport/assignHelper","../Error","../global"],function(e,r,t,s,o){function a(e,r){void 0===r&&(r={});var a=r.responseType;return a?"json"!==a&&"text"!==a&&"blob"!==a&&"array-buffer"!==a&&(a="text"):a="json",o.invokeStaticMessage("request",{url:e,options:r}).then(function(o){var u,l,i,b=o.data;if(b&&!("json"!==a&&"text"!==a&&"blob"!==a||(u=new Blob([b]),"json"!==a&&"text"!==a||(n||(n=new FileReaderSync),l=n.readAsText(u),"json"!==a)))){try{i=JSON.parse(l||null)}catch(o){var c=t({},o,{url:e,requestOptions:r});throw new s("request:server",o.message,c)}if(i.error){var c=t({},i.error,{url:e,requestOptions:r});throw new s("request:server",i.error.message,c)}}var p;switch(a){case"json":p=i;break;case"text":p=l;break;case"blob":p=u;break;default:p=b}return{data:p,requestOptions:r,ssl:o.ssl,url:e}})}Object.defineProperty(r,"__esModule",{value:!0});var n;r.execute=a});