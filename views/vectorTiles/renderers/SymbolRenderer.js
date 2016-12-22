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

define(["require","exports","./IconRenderer","./SDFRenderer"],function(e,n,r,t){var i=function(){function e(){this._iconRenderer=new r,this._sdfRenderer=new t}return e.prototype.render=function(e,n,r,t,i,d,o,s,u,c,f,R,a){n.hasData()&&(n.marketElementCount>0&&(n.isSDF||this._iconRenderer.render(e,n,r,t,i,d,o,s,c,f,a)),n.textElementCount>0&&this._sdfRenderer.render(e,n,r,t,i,d,o,u,c,f,R,a))},e}();return i});