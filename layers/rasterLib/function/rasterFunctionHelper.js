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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./rasterFunctionRegistry"],(function(e,n,t){return{create:function(e,t){if(e){var r,s,u=e.renderTexture,i=Object.keys(e);return e.read&&!t?e:(e.read&&t&&(e=e.toJson()),i.indexOf("name")>-1&&i.indexOf(!1)?(r=n.mixin({},e),s=this._parseV2(r,t)):(r="esri.layers.RasterFunction"===e.declaredClass?e.toJson():n.mixin({},e),s=this._parseV1(r,t)),s.branchCount=s.updateBranchStructure(),s.renderTexture||(s.renderTexture=!!u),s)}},_parseV1:function(e,r){var s,u,i,a,o,c,l,f=e.rasterFunction,m=e.rasterFunctionArguments,p=e.renderTexture||e.rasterFunctionArguments.renderTexture||!1;(a=m.raster||m.Raster)&&a.rasterFunction&&(s=this._parseV1(a,r)),(a=m.raster2||m.Raster2)&&a.rasterFunction&&(u=this._parseV1(a,r)),(a=m.rasters||m.Rasters)&&a.length>0&&(i=a.map(n.hitch(this,(function(e){return e&&e.rasterFunction?this._parseV1(e,r):e})))),(a=m.dem||m.DEM)&&(a.functionName||a.rasterFunction)&&(o=this._parseV1(a,r)),(a=m.fillRaster||m.FillRaster)&&(a.functionName||a.rasterFunction)&&(c=this._parseV1(a,r));var g=t.functions[f];if(!g)return console.error("Function is not currently supported: "+f),null;var d=new g(m);return d.variableName&&(a=m[d.variableName])&&(a.functionName||a.rasterFunction)&&(l=this._parseV1(a,r)),e.outputPixelType&&(d.pixelType=e.outputPixelType),"$$"===s?d.functionArguments.raster=r&&r.raster:null!=s?d.functionArguments.raster=s:d.functionArguments.raster||(d.functionArguments.raster=r&&r.raster),null!=u&&(d.functionArguments.raster2=u),null!=i&&(d.functionArguments.rasters=i.map((function(e){return"$$"===e&&(e=r&&r.raster),e}))),null!=o&&(d.functionArguments.dem=o),null!=c&&(d.functionArguments.fillRaster=c),null!=l&&(d.functionArguments[d.variableName]=l),d.renderTexture=p,d},_parseV2:function(e,t){if(!e)return null;var r=n.clone(e);this._bindV2Args(r,t);var s={};return this._convertTov1(r,s),this._parseV1(s,t)},_bindV2Args:function(e,n){(e||n)&&Object.keys(e).forEach(function(t){e[t].function&&e[t].arguments?this._bindV2Args(e[t].arguments,n):null!=n[e[t].name]&&(e[t].value=n[e[t].name])}.bind(this))},_convertV2Types:function(e){return e?("ArgumentArray"===e.type?e.elements&&"RasterStatistics"===e.elements[0].type&&(e=e.elements):e instanceof Array&&0===e.length&&(e=null),e):null},_convertTov1:function(e,n){if((e||n)&&e.function){var t,r=e.function,s=e.arguments;n.rasterFunction=r.type.replace("Function",""),n.outputPixelType="UNKNOWN"===r.pixelType?"Unknown":r.pixelType,n.rasterFunctionArguments={},Object.keys(s).forEach(function(e){s[e].function&&s[e].arguments?(n.rasterFunctionArguments[e]={},this._convertTov1(s[e],n.rasterFunctionArguments[e])):"object"!=typeof(t=s[e].value)||t.functionArguments?n.rasterFunctionArguments[e]=t:n.rasterFunctionArguments[e]=this._convertV2Types(t)}.bind(this))}}}}));