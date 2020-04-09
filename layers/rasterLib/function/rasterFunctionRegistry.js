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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../rasterLib/function/AspectFunction","../../rasterLib/function/BandArithmeticFunction","../../rasterLib/function/ColormapFunction","../../rasterLib/function/CompositeBandFunction","../../rasterLib/function/ContrastBrightnessFunction","../../rasterLib/function/ConvolutionFunction","../../rasterLib/function/ExtractBandFunction","../../rasterLib/function/HillshadeFunction","../../rasterLib/function/LocalFunction","../../rasterLib/function/MaskFunction","../../rasterLib/function/NDVIFunction","../../rasterLib/function/SlopeFunction","../../rasterLib/function/StretchFunction","../../rasterLib/function/IdentityFunction","../../rasterLib/function/ResampleFunction"],(function(n,t,o,i,r,u,c,e,a,s,f,p,b,L,F,d,l){return function(){var n={},t={},m={};function g(o){o.prototype.supportWebGL&&(t[o.prototype.functionName]=o),o.prototype.support2D&&(n[o.prototype.functionName]=o),m[o.prototype.functionName]=o}return g(o),g(i),g(r),g(u),g(c),g(e),g(a),g(s),g(f),g(p),g(b),g(L),g(F),g(d),g(l),{cpu:n,gpu:t,functions:m,register:g,getFunction:function(n){return m[n]},support:function(o,i){return!!("gpu"===i?t:"cpu"===i?n:m)[o]}}}()}));