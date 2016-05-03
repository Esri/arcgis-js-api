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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../core/numberUtils"],function(e){var t=[255,255,255],i=[128,128,128],n="<",a=">",l=20,r=5,o={_getRampStops:function(t,i,l,r){var o,s,u,m,g,p=i.legendOptions,c=p&&p.customValues;g=this._getSizeSymbol(t,l);var h=i.valueUnit&&"unknown"!==i.valueUnit,f=!!g,S=!!c,z=null!=i.minSize&&null!=i.maxSize,y=i.stops&&i.stops.length>1,v=!!i.target;if(!h&&f&&(S||z||y&&!v)){u=c||this._getSizeDataValues(t,i,g,r),!u&&y&&(u=i.stops.map(function(e){return e.value}),o=i.stops.some(function(e){return!!e.label}),o&&(s=i.stops.map(function(e){return e.label})));var b=u.length-1;return m=u.map(function(l,u){var m=this._getSizeAppliedCloneSymbol(t,i,g,l,r),p=e.format(l);return u===b?p=a+" "+p:0===u&&(p=n+" "+p),p=o?s[u]:p,{value:l,symbol:m,label:p}},this),m.reverse()}},_getSizeSymbol:function(e,n){var a,l;if("simple"===e.type)a=e.symbol;else if("uniqueValue"===e.type||"classBreaks"===e.type){var r=e.classBreakInfos||e.uniqueValueInfos,o=r&&r[0];a=o&&o.symbol,l=r.length>1}return a=a&&-1!==a.type.indexOf("fill-symbol")?null:a,a&&(a=a.clone(),(n||l)&&(-1!==a.type.indexOf("line-symbol")?a.color=i:(a.color=t,"simple-marker-symbol"===a.type&&(a.outline={color:i,width:1.5})))),a},_getSizeDataValues:function(t,i,n,a){var l,r=t.getSizeRangeAtScale(i,a),o=r&&this._interpolateSizeRange(r);if(r||o){l=o.map(function(e){return this._getDataValueFromSize(e,i,r)},this),l=e.round(l);for(var s=1;s<l.length-1;s++){var u=this._roundDataValue(t,i,n,l[s],l[s-1],a);u&&(l[s]=u[0],o[s]=u[1])}return l}},_interpolateSizeRange:function(e){for(var t=e.minSize,i=e.maxSize,n=r,a=(i-t)/(n-1),l=[],o=0;n>o;o++)l.push(t+a*o);return l},_getDataValueFromSize:function(e,t,i){var n,a,l=i.minSize,r=i.maxSize,o=t.minDataValue,s=t.maxDataValue;return l>=e?a=o:e>=r?a=s:(n=(e-l)/(r-l),a=n*(s-o)+o),a},_roundDataValue:function(t,i,n,a,r,o){var s,u,m,g,p,c,h,f,S,z,y,v,b,_,d,V=this._getSize(t,i,n,a,o),k=this._getSize(t,i,n,r,o),D=e.getDigits(a),x=D.integer,w=D.fractional,C=l;for(a>0&&1>a&&(s=Math.pow(10,w),a*=s,x=e.getDigits(a).integer),u=x-1;u>=0&&(m=Math.pow(10,u),g=Math.floor(a/m)*m,p=Math.ceil(a/m)*m,null!=s&&(g/=s,p/=s),c=(g+p)/2,c=e.round([g,c,p],{indexes:[1]})[1],h=this._getSize(t,i,n,g,o),f=this._getSize(t,i,n,p,o),S=this._getSize(t,i,n,c,o),z=e.getPctChange(V,h,k,null),y=e.getPctChange(V,f,k,null),v=e.getPctChange(V,S,k,null),b=z.prev<=C,_=y.prev<=C,b&&_&&(z.prev<=y.prev?(b=!0,_=!1):(_=!0,b=!1)),b?d=[g,h]:_?d=[p,f]:v.prev<=C&&(d=[c,S]),!d);u--);return d},_getSizeAppliedCloneSymbol:function(e,t,i,n,a){i=i.clone();var l,r,o=i.type,s=this._getSize(e,t,i,n,a);switch(o){case"simple-marker-symbol":i.size=s;break;case"picture-marker-symbol":l=i.width,r=i.height,i.height=s,i.width=s*(l/r);break;case"simple-line-symbol":case"cartographic-line-symbol":i.width=s;break;case"text-symbol":i.font&&(i.font.size=s)}return i},_getSize:function(e,t,i,n,a){return e.getSize(n,{sizeInfo:t,scale:a,shape:-1!==i.type.indexOf("marker-symbol")?i.style:null})}};return o});