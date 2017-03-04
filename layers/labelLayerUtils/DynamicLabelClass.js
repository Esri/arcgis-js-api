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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../../geometry/Extent","../../geometry/Polygon"],function(t,i,e,s,a,n){var r=t(null,{declaredClass:"esri.layers.labelLayerUtils.DynamicLabelClass",constructor:function(){this._preparedLabels=[],this._placedLabels=[],this._extent=null,this._xmin=0,this._xmax=0,this._ymin=0,this._ymax=0,this._x0=0,this._y0=0,this._x1=0,this._y1=0,this._scale=1},setMap:function(t,i){this._labelLayer=i,this._xmin=t.extent.xmin,this._xmax=t.extent.xmax,this._ymin=t.extent.ymin,this._ymax=t.extent.ymax,this._scale=(this._xmax-this._xmin)/t.width},_process:function(t){this._preparedLabels=t,this._placedLabels=[];var i,e;for(i=this._preparedLabels.length-1;i>=0;i--){var s=this._preparedLabels[i],a=0,n=Math.min(s.labelWidth,s.labelHeight),r=s.labelWidth+a*n,h=s.labelHeight+a*n,l=s.options,o=l&&void 0!==l.lineLabelPlacement?l.lineLabelPlacement:"PlaceAtCenter",_=l&&void 0!==l.lineLabelPosition?l.lineLabelPosition:"Above",f=l&&void 0!==l.pointPriorities?l.pointPriorities:"AboveRight",c=[2,2,1,3,0,2,3,3,2];"AboveLeft"==f?c=[1,2,2,2,0,3,2,3,3]:"AboveCenter"==f?c=[2,1,2,2,0,2,3,3,3]:"AboveRight"==f?c=[2,2,1,3,0,2,3,3,2]:"CenterLeft"==f?c=[2,2,3,1,0,3,2,2,3]:"CenterCenter"==f?c=[0,0,0,0,1,0,0,0,0]:"CenterRight"==f?c=[3,2,2,3,0,1,3,2,2]:"BelowLeft"==f?c=[2,3,3,2,0,3,1,2,2]:"BelowCenter"==f?c=[3,3,3,2,0,2,2,1,2]:"BelowRight"==f&&(c=[3,3,2,3,0,2,2,2,1]);var x=l&&void 0!==l.labelRotation?l.labelRotation:!0,m=s.angle*(Math.PI/180);if(e=l&&void 0!==l.howManyLabels?l.howManyLabels:"OneLabel","point"==s.geometry.type)this._generatePointPositions(s,s.geometry.x,s.geometry.y,s.text,m,r,h,s.symbolWidth,s.symbolHeight,c);else if("multipoint"==s.geometry.type){var y,d=s.geometry;for(y=0;y<d.points.length;y++)this._generatePointPositions(s,d.points[y][0],d.points[y][1],s.text,m,r,h,s.symbolWidth,s.symbolHeight,c)}else"polyline"==s.geometry.type?this._generateLinePositions(s,s.geometry,s.text,r,h,2*s.symbolHeight+h,o,_,x):"polygon"==s.geometry.type&&this._generatePolygonPositions(s,e,s.geometry,s.text,m,r,h)}return this._placedLabels},_generatePointPositions:function(t,i,e,s,a,n,r,h,l,o){var _,f,c=(h+n)*this._scale,x=(l+r)*this._scale;for(_=1;3>=_;_++)for(f=1;9>=f;f++)if(o[f-1]==_)switch(f){case 1:if(this._findPlace(t,s,i-c,e+x,a,n,r))return;break;case 2:if(this._findPlace(t,s,i,e+x,a,n,r))return;break;case 3:if(this._findPlace(t,s,i+c,e+x,a,n,r))return;break;case 4:if(this._findPlace(t,s,i-c,e,a,n,r))return;break;case 5:if(this._findPlace(t,s,i,e,a,n,r))return;break;case 6:if(this._findPlace(t,s,i+c,e,a,n,r))return;break;case 7:if(this._findPlace(t,s,i-c,e-x,a,n,r))return;break;case 8:if(this._findPlace(t,s,i,e-x,a,n,r))return;break;case 9:if(this._findPlace(t,s,i+c,e-x,a,n,r))return}},_generateLinePositions:function(t,i,e,s,a,n,r,h,l){var o,_,f,c=s*this._scale*(s*this._scale);for(o=0;o<i.paths.length;o++){var x=i.paths[o],m=x.length,y=Math.floor((m-1)/2),d=(m-1)%2!==0?1:-1;for("PlaceAtStart"==r&&(y=0,d=1),"PlaceAtEnd"==r&&(y=m-2,d=-1);y>=0&&m-1>y;){for(_=y;m>_;_++){var u=x[y][0],b=x[y][1],g=x[_][0]-u,v=x[_][1]-b;if(g*g+v*v>c){for(var P=Math.atan2(v,g);P>Math.PI/2;)P-=Math.PI;for(;P<-(Math.PI/2);)P+=Math.PI;var p=Math.sin(P),L=Math.cos(P),M=0,C=0;if("Above"==h&&(M=n*p*this._scale,C=n*L*this._scale),"Below"==h&&(M=-n*p*this._scale,C=-n*L*this._scale),_-y==1){if(this._clipLine(u,b,x[_][0],x[_][1])){var w=this._x1-this._x0,N=this._y1-this._y0;if(w*w+N*N>c){var k,A,B=Math.atan2(N,w),I=s/2+2*a,F=I*this._scale*Math.cos(B),R=I*this._scale*Math.sin(B);if("PlaceAtStart"==r?(k=this._x0+F,A=this._y0+R):"PlaceAtEnd"==r?(k=this._x1-F,A=this._y1-R):(k=this._x0+w/2,A=this._y0+N/2),this._findPlace(t,e,k-M,A+C,l?-B:0,s,a))return}}}else{var H=0;for(f=y;_>=f;f++)H=Math.max(H,Math.abs((x[f][1]-b)*L-(x[f][0]-u)*p));if(a>H&&this._findPlace(t,e,u+g/2-M,b+v/2+C,l?-P:0,s,a))return}break}}y+=d}}},_generatePolygonPositions:function(t,i,e,s,a,r,h){var l,o;if("ManyLabels"==i)for(l=0;l<e.rings.length;l++){var _=e.rings[l];n.prototype.isClockwise(_)&&(o=this._findCentroid(_,this._xmin,this._ymin,this._xmax,this._ymax),this._findPlace(t,s,o[0],o[1],a,r,h))}else{o=this._findCentroidForFeature(e,this._xmin,this._ymin,this._xmax,this._ymax);var f=o[1],c=0;for(l=0;10>l;l++){if(c+=h/4,o=this._findCentroidForFeature(e,this._xmin,f+(c-h/4),this._xmax,f+(c+h/4)),this._findPlace(t,s,o[0],o[1],a,r,h))return;if(o=this._findCentroidForFeature(e,this._xmin,f-(c+h/4),this._xmax,f-(c-h/4)),this._findPlace(t,s,o[0],o[1],a,r,h))return}}},_findCentroid:function(t,i,e,s,a){var n=t.length,r=[0,0],h=0,l=t[0][0],o=t[0][1];l>s&&(l=s),i>l&&(l=i),o>a&&(o=a),e>o&&(o=e);for(var _=1;n-1>_;_++){var f=t[_][0],c=t[_][1],x=t[_+1][0],m=t[_+1][1];f>s&&(f=s),i>f&&(f=i),c>a&&(c=a),e>c&&(c=e),x>s&&(x=s),i>x&&(x=i),m>a&&(m=a),e>m&&(m=e);var y=(f-l)*(m-o)-(x-l)*(c-o);r[0]+=y*(l+f+x),r[1]+=y*(o+c+m),h+=y}if(r[0]/=3*h,r[1]/=3*h,isNaN(r[0])||isNaN(r[1]))return r;var d=[];return this._fillBuffer(t,d,r),r[0]=this._sortBuffer(d,r[0],i,s),r},_findCentroidForFeature:function(t,i,e,s,a){for(var n,r=0,h=[0,0],l=0,o=0;o<t.rings.length;o++){var _=t.rings[o],f=_.length;l+=f;var c=_[0][0],x=_[0][1];for(c>s&&(c=s),i>c&&(c=i),x>a&&(x=a),e>x&&(x=e),n=1;f-1>n;n++){var m=_[n][0],y=_[n][1],d=_[n+1][0],u=_[n+1][1];m>s&&(m=s),i>m&&(m=i),y>a&&(y=a),e>y&&(y=e),d>s&&(d=s),i>d&&(d=i),u>a&&(u=a),e>u&&(u=e);var b=(m-c)*(u-x)-(d-c)*(y-x);h[0]+=b*(c+m+d),h[1]+=b*(x+y+u),r+=b}}if(h[0]/=3*r,h[1]/=3*r,isNaN(h[0])||isNaN(h[1]))return h;var g=[];for(n=0;n<t.rings.length;n++)this._fillBuffer(t.rings[n],g,h);return h[0]=this._sortBuffer(g,h[0],i,s),h},_fillBuffer:function(t,i,e){for(var s=t.length-1,a=t[0][1]>=t[s][1]?1:-1,n=0;s>=n;n++){var r=n,h=n+1;n==s&&(h=0);var l=t[r][0],o=t[r][1],_=t[h][0],f=t[h][1],c=f>=o?1:-1;if(o<=e[1]&&e[1]<=f||f<=e[1]&&e[1]<=o){if(e[1]!=o&&e[1]!=f){i.push((e[1]-o)*(_-l)/(f-o)+l),a=c;continue}if(e[1]==o&&e[1]!=f){a!=c&&i.push(l),a=c;continue}if(e[1]!=o&&e[1]==f){i.push(_),a=c;continue}if(e[1]==o&&e[1]==f){1==a&&i.push(l),i.push(_),a=c;continue}}}},_sortBuffer:function(t,i,e,s){var a=t.length;if(t.sort(),a>0){for(var n=0,r=0,h=0;a-1>h;h+=2){var l=Math.abs(t[h+1]-t[h]);t[h]<=e&&t[h+1]<=e||t[h]>=s&&t[h+1]>=s||l>n&&(n=l,r=h)}var o=t[r],_=t[r+1];o>s&&(o=s),e>o&&(o=e),_>s&&(_=s),e>_&&(_=e),i=(o+_)/2}return i},_findPlace:function(t,i,e,s,r,h,l){if(isNaN(e)||isNaN(s))return!1;for(var o=0;o<this._placedLabels.length;o++){var _=this._placedLabels[o].angle,f=this._placedLabels[o].x,c=this._placedLabels[o].y,x=this._placedLabels[o].width*this._scale,m=this._placedLabels[o].height*this._scale,y=f-e,d=c-s;if(0===r&&0===_){if(this._findPlace2(-h*this._scale,-l*this._scale,h*this._scale,l*this._scale,y-x,d-m,y+x,d+m))return!1}else{var u=new a(-h*this._scale,-l*this._scale,h*this._scale,l*this._scale,null),b=0,g=1;0!==r&&(b=Math.sin(r),g=Math.cos(r));var v=y*g-d*b,P=y*b+d*g,p=_-r,L=Math.sin(p),M=Math.cos(p),C=-x*M- -m*L,w=-x*L+-m*M,N=+x*M- -m*L,k=+x*L+-m*M,A=v+C,B=P-w,I=v+N,F=P-k,R=v-C,H=P+w,j=v-N,W=P+k,E=new n;if(E.addRing([[A,B],[I,F],[R,H],[j,W],[A,B]]),u.intersects(E))return!1}}for(;r>Math.PI/2;)r-=Math.PI;for(;r<-(Math.PI/2);)r+=Math.PI;var D={};return D.layer=t,D.text=i,D.angle=r,D.x=e,D.y=s,D.width=h,D.height=l,this._placedLabels.push(D),!0},_findPlace2:function(t,i,e,s,a,n,r,h){return(t>=a&&r>=t||e>=a&&r>=e||a>=t&&e>=r)&&(i>=n&&h>=i||s>=n&&h>=s||n>=i&&s>=h)?!0:!1},_clipLine:function(t,i,e,s){for(var a=this._code(t,i),n=this._code(e,s);0!==a||0!==n;){if(0!==(a&n))return!1;var r=e-t,h=s-i;0!==a?(t<this._xmin?(i+=h*(this._xmin-t)/r,t=this._xmin):t>this._xmax?(i+=h*(this._xmax-t)/r,t=this._xmax):i<this._ymin?(t+=r*(this._ymin-i)/h,i=this._ymin):i>this._ymax&&(t+=r*(this._ymax-i)/h,i=this._ymax),a=this._code(t,i)):(e<this._xmin?(s+=h*(this._xmin-e)/r,e=this._xmin):e>this._xmax?(s+=h*(this._xmax-e)/r,e=this._xmax):s<this._ymin?(e+=r*(this._ymin-s)/h,s=this._ymin):s>this._ymax&&(e+=r*(this._ymax-s)/h,s=this._ymax),n=this._code(e,s))}return this._x0=t,this._y0=i,this._x1=e,this._y1=s,!0},_code:function(t,i){var e=0;return t<this._xmin&&(e+=8),t>this._xmax&&(e+=4),i<this._ymin&&(e+=2),i>this._ymax&&(e+=1),e}});return e("extend-esri")&&i.setObject("layers.labelLayerUtils.DynamicLabelClass",r,s),r});