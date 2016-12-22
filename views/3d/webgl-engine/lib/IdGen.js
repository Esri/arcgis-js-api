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

define(["require","exports"],function(n,t){var i=function(){function n(){this.id2count={}}return n.prototype.gen=function(n){null==n&&(n="a");var t=this.id2count[n];if(null==t)return this.id2count[n]=0,n;for(;;){var i=n+"_"+t++;if(null==this.id2count[i])return this.id2count[n]=t,this.id2count[i]=0,i}},n}();return i});