// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojox/dgauges/CircularScale","dojox/gfx"],(function(t,a,h){var i=Math.PI/180;return t([a],{_layoutLabel:function(t,a,n,e,s,o,u){var l=this._getFont(),g=h._base._getTextBox(a,{font:h.makeFontString(h.makeParameters(h.defaultFont,l))}).w,r=l.size,M=h.normalizedLength(r);this.azimuthAngle=this.azimuthAngle||0;var m,x,d=this.azimuthAngle*i,z=n+Math.cos(o)*s-g/2,c=e-Math.sin(o)*s-M/2,f=[],y=m=z,A=-Math.tan(o)*m+e+Math.tan(o)*n;if(A>=c&&A<=c+M&&f.push({x:y,y:A}),y=m=z+g,(A=-Math.tan(o)*m+e+Math.tan(o)*n)>=c&&A<=c+M&&f.push({x:y,y:A}),A=m=c,(y=-1/Math.tan(o)*m+n+1/Math.tan(o)*e)>=z&&y<=z+g&&f.push({x:y,y:A}),A=m=c+M,(y=-1/Math.tan(o)*m+n+1/Math.tan(o)*e)>=z&&y<=z+g&&f.push({x:y,y:A}),"inside"==u)for(var _=0;_<f.length;_++){var b=f[_];if((x=this._distance(b.x,b.y,n,e)-s)>=0){z=n+Math.cos(o)*(s-x)-g/2,c=e-Math.sin(o)*(s-x)-M/2;break}}else for(_=0;_<f.length;_++)if(b=f[_],(x=this._distance(b.x,b.y,n,e)-s)<=0){z=n+Math.cos(o)*(s-x)-g/2,c=e-Math.sin(o)*(s-x)-M/2;break}this.azimuthAngle>315&&this.azimuthAngle<=360||this.azimuthAngle>=0&&this.azimuthAngle<=45?g/=2:this.azimuthAngle>45&&this.azimuthAngle<=135?(g=0,M/=2):this.azimuthAngle>135&&this.azimuthAngle<=225?(g/=2,M=0):M/=2,t&&t.setTransform([{dx:z+g,dy:c+M,xx:Math.cos(d),xy:-Math.sin(d),yx:Math.sin(d),yy:Math.cos(d)}])}})}));