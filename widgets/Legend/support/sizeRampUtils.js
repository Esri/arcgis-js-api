// COPYRIGHT © 2017 Esri
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

define(["../../../core/numberUtils","../../../symbols/support/symbolUtils"],function(e,t){var i=[255,255,255],r=[200,200,200],n=[128,128,128],l="<",a=">",o=20,s=5,u={getRampStops:function(i,r,n,o){var s,u,m,c,f,p=r.legendOptions,y=p&&p.customValues;f=this._getSizeSymbol(i,n);var h=!!f,g=!!y,S=null!=r.minSize&&null!=r.maxSize,b=r.stops&&r.stops.length>1,z=!!r.target;if(h&&(g||S||b&&!z)){var v=t.isVolumetricSymbol(f);m=v&&!b?[r.minDataValue,r.maxDataValue]:y||this._getSizeDataValues(i,r,f,o),!m&&b&&(m=r.stops.map(function(e){return e.value}),s=r.stops.some(function(e){return!!e.label}),s&&(u=r.stops.map(function(e){return e.label})));var d=!v||m&&2===m.length;if(!m||!d)return null;var _=m.length-1,V=[12,30];return c=m.map(function(t,n){var m=v?V[n]:this._getSize(i,r,f,t,o),c=this._getSizeAppliedCloneSymbol(f,m),p=e.format(t);return n===_?p=a+" "+p:0===n&&(p=l+" "+p),p=s?u[n]:p,{value:t,symbol:c,label:p,size:m}},this),c.reverse()}},_isFillSymbol:function(e){if(e){if(e.type.indexOf("3d")>-1){var t=e.symbolLayers;return t?t.some(function(e){return e&&"Fill"===e.type}):!1}return-1!==e.type.indexOf("fill-symbol")}},_getSizeSymbol:function(e,l){var a,o;if("simple"===e.type)a=e.symbol;else if("uniqueValue"===e.type||"classBreaks"===e.type){var s=e.classBreakInfos||e.uniqueValueInfos,u=s&&s[0];a=u&&u.symbol,o=s.length>1}if(!a||this._isFillSymbol(a))return null;if(a=a.clone(),l||o){var m=a&&a.type,c=m.indexOf("3d")>-1;c?t.isVolumetricSymbol(a)||(-1!==m.indexOf("line-symbol-3d")?a.symbolLayers.forEach(function(e){e.material={color:n}}):a.symbolLayers.forEach(function(e){"Icon"!==e.type||e.resource&&e.resource.href?e.material={color:r}:(e.material={color:i},e.outline={color:n,size:1.5})})):-1!==m.indexOf("line-symbol")?a.color=n:(a.color=i,"simple-marker-symbol"===m&&(a.outline={color:n,width:1.5}))}return a},_getSizeDataValues:function(t,i,r,n){var l,a=t.getSizeRangeAtScale(i,n),o=a&&this._interpolateSizeRange(a);if(a||o){l=o.map(function(e){return this._getDataValueFromSize(e,i,a)},this),l=e.round(l);for(var s=1;s<l.length-1;s++){var u=this._roundDataValue(t,i,r,l[s],l[s-1],n);u&&(l[s]=u[0],o[s]=u[1])}return l}},_interpolateSizeRange:function(e){for(var t=e.minSize,i=e.maxSize,r=s,n=(i-t)/(r-1),l=[],a=0;r>a;a++)l.push(t+n*a);return l},_getDataValueFromSize:function(e,t,i){var r,n,l=i.minSize,a=i.maxSize,o=t.minDataValue,s=t.maxDataValue;return l>=e?n=o:e>=a?n=s:(r=(e-l)/(a-l),n=r*(s-o)+o),n},_roundDataValue:function(t,i,r,n,l,a){var s,u,m,c,f,p,y,h,g,S,b,z,v,d,_,V=this._getSize(t,i,r,n,a),x=this._getSize(t,i,r,l,a),D=e.numDigits(n),k=D.integer,O=D.fractional,w=o;for(n>0&&1>n&&(s=Math.pow(10,O),n*=s,k=e.numDigits(n).integer),u=k-1;u>=0&&(m=Math.pow(10,u),c=Math.floor(n/m)*m,f=Math.ceil(n/m)*m,null!=s&&(c/=s,f/=s),p=(c+f)/2,p=e.round([c,p,f],{indexes:[1]})[1],y=this._getSize(t,i,r,c,a),h=this._getSize(t,i,r,f,a),g=this._getSize(t,i,r,p,a),S=e.percentChange(V,y,x,null),b=e.percentChange(V,h,x,null),z=e.percentChange(V,g,x,null),v=S.previous<=w,d=b.previous<=w,v&&d&&(S.previous<=b.previous?(v=!0,d=!1):(d=!0,v=!1)),v?_=[c,y]:d?_=[f,h]:z.previous<=w&&(_=[p,g]),!_);u--);return _},_getSizeAppliedCloneSymbol:function(e,i){e=e.clone();var r=e.type,n=r.indexOf("3d")>-1;if(n)t.isVolumetricSymbol(e)||e.symbolLayers.forEach(function(e){"Fill"!==e.type&&(e.size=i)});else switch(r){case"simple-marker-symbol":e.size=i;break;case"picture-marker-symbol":var l=e.width,a=e.height;e.height=i,e.width=i*(l/a);break;case"simple-line-symbol":e.width=i;break;case"text-symbol":e.font&&(e.font.size=i)}return e},_getSize:function(e,t,i,r,n){return e.getSize(r,{sizeInfo:t,scale:n,shape:-1!==i.type.indexOf("marker-symbol")?i.style:null})}};return u});