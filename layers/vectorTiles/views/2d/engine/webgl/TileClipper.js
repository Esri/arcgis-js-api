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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","./Geometry","./GeometryUtils"],(function(i,t,s,h){Object.defineProperty(t,"__esModule",{value:!0});var n=function(i,t,s){this.ratio=i,this.x=t,this.y=s},e=function(){function i(i,t,s,h,n){void 0===h&&(h=8),void 0===n&&(n=8),this.lines=[],this.starts=[],this.pixelRatio=h,this.pixelMargin=n,this.tileSize=512*h,this.dz=i,this.yPos=t,this.xPos=s}return i.prototype.setExtent=function(i){this.finalRatio=this.tileSize/i*(1<<this.dz);var t=this.pixelRatio*this.pixelMargin;t/=this.finalRatio;var s=i>>this.dz;t>s&&(t=s),this.margin=t,this.xmin=s*this.xPos-t,this.ymin=s*this.yPos-t,this.xmax=this.xmin+s+2*t,this.ymax=this.ymin+s+2*t},i.prototype.reset=function(i){this.type=i,this.lines=[],this.starts=[],this.line=null,this.start=0},i.prototype.moveTo=function(i,t){this._pushLine(),this._prevIsIn=this._isIn(i,t),this._moveTo(i,t,this._prevIsIn),this._prevPt=new s.Point(i,t),this._firstPt=new s.Point(i,t),this._dist=0},i.prototype.lineTo=function(i,t){var h,e,l,x,a,r,y,o,p=this._isIn(i,t),u=new s.Point(i,t),m=s.Point.distance(this._prevPt,u);if(p)this._prevIsIn?this._lineTo(i,t,!0):(h=this._prevPt,e=u,l=this._intersect(e,h),this.start=this._dist+m*(1-this._r),this._lineTo(l.x,l.y,!0),this._lineTo(e.x,e.y,!0));else if(this._prevIsIn)e=this._prevPt,h=u,l=this._intersect(e,h),this._lineTo(l.x,l.y,!0),this._lineTo(h.x,h.y,!1);else{var _=this._prevPt,f=u;if(_.x<=this.xmin&&f.x<=this.xmin||_.x>=this.xmax&&f.x>=this.xmax||_.y<=this.ymin&&f.y<=this.ymin||_.y>=this.ymax&&f.y>=this.ymax)this._lineTo(f.x,f.y,!1);else{var v=[];if((_.x<this.xmin&&f.x>this.xmin||_.x>this.xmin&&f.x<this.xmin)&&(x=(this.xmin-_.x)/(f.x-_.x),(o=_.y+x*(f.y-_.y))<=this.ymin?r=!1:o>=this.ymax?r=!0:v.push(new n(x,this.xmin,o))),(_.x<this.xmax&&f.x>this.xmax||_.x>this.xmax&&f.x<this.xmax)&&(x=(this.xmax-_.x)/(f.x-_.x),(o=_.y+x*(f.y-_.y))<=this.ymin?r=!1:o>=this.ymax?r=!0:v.push(new n(x,this.xmax,o))),(_.y<this.ymin&&f.y>this.ymin||_.y>this.ymin&&f.y<this.ymin)&&(x=(this.ymin-_.y)/(f.y-_.y),(y=_.x+x*(f.x-_.x))<=this.xmin?a=!1:y>=this.xmax?a=!0:v.push(new n(x,y,this.ymin))),(_.y<this.ymax&&f.y>this.ymax||_.y>this.ymax&&f.y<this.ymax)&&(x=(this.ymax-_.y)/(f.y-_.y),(y=_.x+x*(f.x-_.x))<=this.xmin?a=!1:y>=this.xmax?a=!0:v.push(new n(x,y,this.ymax))),0===v.length)a?r?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):r?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(v.length>1&&v[0].ratio>v[1].ratio)this.start=this._dist+m*v[1].ratio,this._lineTo(v[1].x,v[1].y,!0),this._lineTo(v[0].x,v[0].y,!0);else{this.start=this._dist+m*v[0].ratio;for(var c=0;c<v.length;c++)this._lineTo(v[c].x,v[c].y,!0)}this._lineTo(f.x,f.y,!1)}}this._dist+=m,this._prevIsIn=p,this._prevPt=u},i.prototype.close=function(){if(this.line.length>2){var i=this._firstPt,t=this._prevPt;i.x===t.x&&i.y===t.y||this.lineTo(i.x,i.y);for(var s=this.line,h=s.length;h>=4&&(s[0].x===s[1].x&&s[0].x===s[h-2].x||s[0].y===s[1].y&&s[0].y===s[h-2].y);)s.pop(),s[0].x=s[h-2].x,s[0].y=s[h-2].y,--h}},i.prototype.result=function(i){return void 0===i&&(i=!0),this._pushLine(),0===this.lines.length?null:(3===this.type&&i&&x.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)},i.prototype.resultWithStarts=function(){if(2!==this.type)throw new Error("Only valid for lines");this._pushLine();var i=this.lines,t=i.length;if(0===t)return null;for(var s=[],h=0;h<t;h++)s.push({line:i[h],start:this.starts[h]||0});return s},i.prototype._isIn=function(i,t){return i>=this.xmin&&i<=this.xmax&&t>=this.ymin&&t<=this.ymax},i.prototype._intersect=function(i,t){var h,n,e;if(t.x>=this.xmin&&t.x<=this.xmax)e=((n=t.y<=this.ymin?this.ymin:this.ymax)-i.y)/(t.y-i.y),h=i.x+e*(t.x-i.x);else if(t.y>=this.ymin&&t.y<=this.ymax)e=((h=t.x<=this.xmin?this.xmin:this.xmax)-i.x)/(t.x-i.x),n=i.y+e*(t.y-i.y);else{n=t.y<=this.ymin?this.ymin:this.ymax;var l=((h=t.x<=this.xmin?this.xmin:this.xmax)-i.x)/(t.x-i.x),x=(n-i.y)/(t.y-i.y);l<x?(e=l,n=i.y+l*(t.y-i.y)):(e=x,h=i.x+x*(t.x-i.x))}return this._r=e,new s.Point(h,n)},i.prototype._pushLine=function(){this.line&&(1===this.type?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):2===this.type?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):3===this.type&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0},i.prototype._moveTo=function(i,t,h){3!==this.type?h&&(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new s.Point(i,t))):(h||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new s.Point(i,t)),this._is_h=!1,this._is_v=!1)},i.prototype._lineTo=function(i,t,h){var n,e;if(3!==this.type)if(h){if(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(n=this.line[this.line.length-1]).equals(i,t))return;this.line.push(new s.Point(i,t))}else this.line&&this.line.length>0&&this._pushLine();else if(h||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){var l=(n=this.line[this.line.length-1]).x===i,x=n.y===t;if(l&&x)return;this._is_h&&l?(n.x=i,n.y=t,(e=this.line[this.line.length-2]).x===i&&e.y===t?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(e=this.line[this.line.length-2],this._is_h=e.x===i,this._is_v=e.y===t)):(this._is_h=e.x===i,this._is_v=e.y===t)):this._is_v&&x?(n.x=i,n.y=t,(e=this.line[this.line.length-2]).x===i&&e.y===t?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(e=this.line[this.line.length-2],this._is_h=e.x===i,this._is_v=e.y===t)):(this._is_h=e.x===i,this._is_v=e.y===t)):(this.line.push(new s.Point(i,t)),this._is_h=l,this._is_v=x)}else this.line.push(new s.Point(i,t))},i}();t.TileClipper=e;var l=function(){function i(){}return i.prototype.setExtent=function(i){this._ratio=4096===i?1:4096/i},i.prototype.reset=function(i){this.type=i,this.lines=[],this.line=null},i.prototype.moveTo=function(i,t){this.line&&this.lines.push(this.line),this.line=[];var h=this._ratio;this.line.push(new s.Point(i*h,t*h))},i.prototype.lineTo=function(i,t){var h=this._ratio;this.line.push(new s.Point(i*h,t*h))},i.prototype.close=function(){var i=this.line;i&&!i[0].isEqual(i[i.length-1])&&i.push(i[0])},i.prototype.result=function(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:this.lines},i}();t.SimpleBuilder=l;var x=function(){function i(){}return i.simplify=function(t,s,h){if(h){for(var n=-s,e=t+s,l=-s,x=t+s,a=[],r=[],y=h.length,o=0;o<y;++o){var p=h[o];if(p&&!(p.length<2))for(var u=p[0],m=void 0,_=p.length,f=1;f<_;++f)m=p[f],u.x===m.x&&(u.x<=n&&(u.y>m.y?(a.push(o),a.push(f),a.push(0),a.push(-1)):(r.push(o),r.push(f),r.push(0),r.push(-1))),u.x>=e&&(u.y<m.y?(a.push(o),a.push(f),a.push(1),a.push(-1)):(r.push(o),r.push(f),r.push(1),r.push(-1)))),u.y===m.y&&(u.y<=l&&(u.x<m.x?(a.push(o),a.push(f),a.push(2),a.push(-1)):(r.push(o),r.push(f),r.push(2),r.push(-1))),u.y>=x&&(u.x>m.x?(a.push(o),a.push(f),a.push(3),a.push(-1)):(r.push(o),r.push(f),r.push(3),r.push(-1)))),u=m}if(0!==a.length&&0!==r.length){i.fillParent(h,r,a),i.fillParent(h,a,r);var v=[];i.calcDeltas(v,r,a),i.calcDeltas(v,a,r),i.addDeltas(v,h)}}},i.fillParent=function(i,t,s){for(var n=s.length,e=t.length,l=0;l<e;l+=4){for(var x=t[l],a=t[l+1],r=t[l+2],y=i[x][a-1],o=i[x][a],p=8092,u=-1,m=0;m<n;m+=4)if(s[m+2]===r){var _=s[m],f=s[m+1],v=i[_][f-1],c=i[_][f];switch(r){case 0:case 1:if(h.between(y.y,v.y,c.y)&&h.between(o.y,v.y,c.y))(g=Math.abs(c.y-v.y))<p&&(p=g,u=m);break;case 2:case 3:var g;if(h.between(y.x,v.x,c.x)&&h.between(o.x,v.x,c.x))(g=Math.abs(c.x-v.x))<p&&(p=g,u=m)}}t[l+3]=u}},i.calcDeltas=function(t,s,h){for(var n=s.length,e=0;e<n;e+=4){var l=i.calcDelta(e,s,h,[]);t.push(s[e]),t.push(s[e+1]),t.push(s[e+2]),t.push(l)}},i.calcDelta=function(t,s,h,n){var e=s[t+3];if(-1===e)return 0;var l=n.length;return l>1&&n[l-2]===e?0:(n.push(e),i.calcDelta(e,h,s,n)+1)},i.addDeltas=function(i,t){for(var s=i.length,h=0,n=0;n<s;n+=4){(x=i[n+3])>h&&(h=x)}for(n=0;n<s;n+=4){var e=t[i[n]],l=i[n+1],x=h-i[n+3];switch(i[n+2]){case 0:e[l-1].x-=x,e[l].x-=x,1===l&&(e[e.length-1].x-=x),l===e.length-1&&(e[0].x-=x);break;case 1:e[l-1].x+=x,e[l].x+=x,1===l&&(e[e.length-1].x+=x),l===e.length-1&&(e[0].x+=x);break;case 2:e[l-1].y-=x,e[l].y-=x,1===l&&(e[e.length-1].y-=x),l===e.length-1&&(e[0].y-=x);break;case 3:e[l-1].y+=x,e[l].y+=x,1===l&&(e[e.length-1].y+=x),l===e.length-1&&(e[0].y+=x)}}},i}()}));