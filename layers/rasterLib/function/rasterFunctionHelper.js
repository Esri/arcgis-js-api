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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./rasterFunctionRegistry"],function(n,e,t){return{create:function(n,t){if(n){var r,s,u=Object.keys(n);return n.read&&!t?n:(n.read&&t&&(n=n.toJson()),u.indexOf("name")>-1&&u.indexOf(!1)?(r=e.mixin({},n),s=this._parseV2(r,t)):(r="esri.layers.RasterFunction"===n.declaredClass?n.toJson():e.mixin({},n),s=this._parseV1(r,t)),s.branchCount=s.updateBranchStructure(),s)}},_parseV1:function(n,r){var s,u,i,a,o,c,l,f=n.rasterFunction,m=n.rasterFunctionArguments,p=n.renderTexture||n.rasterFunctionArguments.renderTexture||!1;a=m.raster||m.Raster,a&&a.rasterFunction&&(s=this._parseV1(a,r)),a=m.raster2||m.Raster2,a&&a.rasterFunction&&(u=this._parseV1(a,r)),a=m.rasters||m.Rasters,a&&a.length>0&&(i=a.map(e.hitch(this,function(n){return n&&n.rasterFunction?this._parseV1(n,r):n}))),a=m.dem||m.DEM,a&&(a.functionName||a.rasterFunction)&&(o=this._parseV1(a,r)),(a=m.fillRaster||m.FillRaster)&&(a.functionName||a.rasterFunction)&&(c=this._parseV1(a,r));var g=t.functions[f];if(!g)return console.error("Function is not currently supported: "+f),null;var h=new g(m);return h.variableName&&(a=m[h.variableName])&&(a.functionName||a.rasterFunction)&&(l=this._parseV1(a,r)),n.outputPixelType&&(h.pixelType=n.outputPixelType),"$$"===s?h.functionArguments.raster=r&&r.raster:null!=s?h.functionArguments.raster=s:h.functionArguments.raster||(h.functionArguments.raster=r&&r.raster),null!=u&&(h.functionArguments.raster2=u),null!=i&&(h.functionArguments.rasters=i.map(function(n){return"$$"===n&&(n=r&&r.raster),n})),null!=o&&(h.functionArguments.dem=o),null!=c&&(h.functionArguments.fillRaster=c),null!=l&&(h.functionArguments[h.variableName]=l),h.renderTexture=p,h},_parseV2:function(n,t){if(!n)return null;var r=e.clone(n);this._bindV2Args(r,t);var s={};return this._convertTov1(r,s),this._parseV1(s,t)},_bindV2Args:function(n,e){(n||e)&&Object.keys(n).forEach(function(t){n[t].function&&n[t].arguments?this._bindV2Args(n[t].arguments,e):null!=e[n[t].name]&&(n[t].value=e[n[t].name])}.bind(this))},_convertV2Types:function(n){return n?("ArgumentArray"===n.type?n.elements&&"RasterStatistics"===n.elements[0].type&&(n=n.elements):n instanceof Array&&0===n.length&&(n=null),n):null},_convertTov1:function(n,e){if((n||e)&&n.function){var t=n.function,r=n.arguments;e.rasterFunction=t.type.replace("Function",""),e.outputPixelType="UNKNOWN"===t.pixelType?"Unknown":t.pixelType,e.rasterFunctionArguments={};var s;Object.keys(r).forEach(function(n){r[n].function&&r[n].arguments?(e.rasterFunctionArguments[n]={},this._convertTov1(r[n],e.rasterFunctionArguments[n])):(s=r[n].value,"object"!=typeof s||s.functionArguments?e.rasterFunctionArguments[n]=s:e.rasterFunctionArguments[n]=this._convertV2Types(s))}.bind(this))}}}});