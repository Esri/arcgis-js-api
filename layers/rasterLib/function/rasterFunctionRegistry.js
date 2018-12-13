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

define(["dojo/_base/declare","dojo/_base/lang","../../rasterLib/function/AspectFunction","../../rasterLib/function/BandArithmeticFunction","../../rasterLib/function/ColormapFunction","../../rasterLib/function/CompositeBandFunction","../../rasterLib/function/ContrastBrightnessFunction","../../rasterLib/function/ConvolutionFunction","../../rasterLib/function/ExtractBandFunction","../../rasterLib/function/HillshadeFunction","../../rasterLib/function/LocalFunction","../../rasterLib/function/MaskFunction","../../rasterLib/function/NDVIFunction","../../rasterLib/function/SlopeFunction","../../rasterLib/function/StretchFunction","../../rasterLib/function/IdentityFunction","../../rasterLib/function/ResampleFunction"],function(n,t,o,i,r,u,c,e,a,s,f,p,b,L,F,d,l){return function(){function n(n){n.prototype.supportWebGL&&(m[n.prototype.functionName]=n),n.prototype.support2D&&(t[n.prototype.functionName]=n),g[n.prototype.functionName]=n}var t={},m={},g={};return n(o),n(i),n(r),n(u),n(c),n(e),n(a),n(s),n(f),n(p),n(b),n(L),n(F),n(d),n(l),{cpu:t,gpu:m,functions:g,register:n,getFunction:function(n){return g[n]},support:function(n,o){var i;return i="gpu"===o?m:"cpu"===o?t:g,!!i[n]}}}()});