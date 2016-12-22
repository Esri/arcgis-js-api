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

define(["../../../core/numberUtils","./swatchUtils"],function(e,t){var i=[255,255,255],n=[200,200,200],r=[128,128,128],l="<",a=">",o=20,s=5,u={getRampStops:function(i,n,r,o){var s,u,m,c,f,p=n.legendOptions,h=p&&p.customValues;f=this._getSizeSymbol(i,r);var y=!!f,g=!!h,S=null!=n.minSize&&null!=n.maxSize,b=n.stops&&n.stops.length>1,z=!!n.target;if(y&&(g||S||b&&!z)){var v=t.isVolumetricSymbol(f);m=v&&!b?[n.minDataValue,n.maxDataValue]:h||this._getSizeDataValues(i,n,f,o),!m&&b&&(m=n.stops.map(function(e){return e.value}),s=n.stops.some(function(e){return!!e.label}),s&&(u=n.stops.map(function(e){return e.label})));var d=!v||m&&2===m.length;if(!m||!d)return null;var _=m.length-1,V=[12,24];return c=m.map(function(t,r){var m=v?V[r]:this._getSize(i,n,f,t,o),c=this._getSizeAppliedCloneSymbol(f,m),p=e.format(t);return r===_?p=a+" "+p:0===r&&(p=l+" "+p),p=s?u[r]:p,{value:t,symbol:c,label:p,size:m}},this),c.reverse()}},_isFillSymbol:function(e){if(e){if(e.type.indexOf("3d")>-1){var t=e.symbolLayers;return t?t.some(function(e){return e&&"Fill"===e.type}):!1}return-1!==e.type.indexOf("fill-symbol")}},_getSizeSymbol:function(e,l){var a,o;if("simple"===e.type)a=e.symbol;else if("uniqueValue"===e.type||"classBreaks"===e.type){var s=e.classBreakInfos||e.uniqueValueInfos,u=s&&s[0];a=u&&u.symbol,o=s.length>1}if(!a||this._isFillSymbol(a))return null;if(a=a.clone(),l||o){var m=a&&a.type,c=m.indexOf("3d")>-1;c?t.isVolumetricSymbol(a)||(-1!==m.indexOf("line-symbol-3d")?a.symbolLayers.forEach(function(e){e.material={color:r}}):a.symbolLayers.forEach(function(e){"Icon"!==e.type||e.resource&&e.resource.href?e.material={color:n}:(e.material={color:i},e.outline={color:r,size:1.5})})):-1!==m.indexOf("line-symbol")?a.color=r:(a.color=i,"simple-marker-symbol"===m&&(a.outline={color:r,width:1.5}))}return a},_getSizeDataValues:function(t,i,n,r){var l,a=t.getSizeRangeAtScale(i,r),o=a&&this._interpolateSizeRange(a);if(a||o){l=o.map(function(e){return this._getDataValueFromSize(e,i,a)},this),l=e.round(l);for(var s=1;s<l.length-1;s++){var u=this._roundDataValue(t,i,n,l[s],l[s-1],r);u&&(l[s]=u[0],o[s]=u[1])}return l}},_interpolateSizeRange:function(e){for(var t=e.minSize,i=e.maxSize,n=s,r=(i-t)/(n-1),l=[],a=0;n>a;a++)l.push(t+r*a);return l},_getDataValueFromSize:function(e,t,i){var n,r,l=i.minSize,a=i.maxSize,o=t.minDataValue,s=t.maxDataValue;return l>=e?r=o:e>=a?r=s:(n=(e-l)/(a-l),r=n*(s-o)+o),r},_roundDataValue:function(t,i,n,r,l,a){var s,u,m,c,f,p,h,y,g,S,b,z,v,d,_,V=this._getSize(t,i,n,r,a),x=this._getSize(t,i,n,l,a),D=e.numDigits(r),k=D.integer,w=D.fractional,O=o;for(r>0&&1>r&&(s=Math.pow(10,w),r*=s,k=e.numDigits(r).integer),u=k-1;u>=0&&(m=Math.pow(10,u),c=Math.floor(r/m)*m,f=Math.ceil(r/m)*m,null!=s&&(c/=s,f/=s),p=(c+f)/2,p=e.round([c,p,f],{indexes:[1]})[1],h=this._getSize(t,i,n,c,a),y=this._getSize(t,i,n,f,a),g=this._getSize(t,i,n,p,a),S=e.percentChange(V,h,x,null),b=e.percentChange(V,y,x,null),z=e.percentChange(V,g,x,null),v=S.previous<=O,d=b.previous<=O,v&&d&&(S.previous<=b.previous?(v=!0,d=!1):(d=!0,v=!1)),v?_=[c,h]:d?_=[f,y]:z.previous<=O&&(_=[p,g]),!_);u--);return _},_getSizeAppliedCloneSymbol:function(e,i){e=e.clone();var n=e.type,r=n.indexOf("3d")>-1;if(r)t.isVolumetricSymbol(e)||e.symbolLayers.forEach(function(e){"Fill"!==e.type&&(e.size=i)});else switch(n){case"simple-marker-symbol":e.size=i;break;case"picture-marker-symbol":var l=e.width,a=e.height;e.height=i,e.width=i*(l/a);break;case"simple-line-symbol":e.width=i;break;case"text-symbol":e.font&&(e.font.size=i)}return e},_getSize:function(e,t,i,n,r){return e.getSize(n,{sizeInfo:t,scale:r,shape:-1!==i.type.indexOf("marker-symbol")?i.style:null})}};return u});