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

define(["dojo/_base/declare","dojox/dgauges/CircularScale","dojox/gfx"],function(t,a,h){var i=Math.PI/180;return t([a],{_layoutLabel:function(t,a,n,e,s,o,r){var u=this._getFont(),l=h._base._getTextBox(a,{font:h.makeFontString(h.makeParameters(h.defaultFont,u))}),g=l.w,M=u.size,m=h.normalizedLength(M);this.azimuthAngle=this.azimuthAngle||0;var x,d=this.azimuthAngle*i,z=n+Math.cos(o)*s-g/2,c=e-Math.sin(o)*s-m/2,f=[];x=z;var y=x,A=-Math.tan(o)*x+e+Math.tan(o)*n;A>=c&&A<=c+m&&f.push({x:y,y:A}),x=z+g,y=x,A=-Math.tan(o)*x+e+Math.tan(o)*n,A>=c&&A<=c+m&&f.push({x:y,y:A}),x=c,y=-1/Math.tan(o)*x+n+1/Math.tan(o)*e,A=x,y>=z&&y<=z+g&&f.push({x:y,y:A}),x=c+m,y=-1/Math.tan(o)*x+n+1/Math.tan(o)*e,A=x,y>=z&&y<=z+g&&f.push({x:y,y:A});var v;if("inside"==r)for(var _=0;_<f.length;_++){var b=f[_];if((v=this._distance(b.x,b.y,n,e)-s)>=0){z=n+Math.cos(o)*(s-v)-g/2,c=e-Math.sin(o)*(s-v)-m/2;break}}else for(_=0;_<f.length;_++)if(b=f[_],(v=this._distance(b.x,b.y,n,e)-s)<=0){z=n+Math.cos(o)*(s-v)-g/2,c=e-Math.sin(o)*(s-v)-m/2;break}this.azimuthAngle>315&&this.azimuthAngle<=360||this.azimuthAngle>=0&&this.azimuthAngle<=45?g/=2:this.azimuthAngle>45&&this.azimuthAngle<=135?(g=0,m/=2):this.azimuthAngle>135&&this.azimuthAngle<=225?(g/=2,m=0):m/=2,t&&t.setTransform([{dx:z+g,dy:c+m,xx:Math.cos(d),xy:-Math.sin(d),yx:Math.sin(d),yy:Math.cos(d)}])}})});