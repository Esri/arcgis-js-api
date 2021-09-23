// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","exports","../2d/engine/webgl/Geometry","./Conflict","./GeometryUtils"],(function(t,e,n,i,o){Object.defineProperty(e,"__esModule",{value:!0});var a=function(t,e,n,i,o){void 0===n&&(n=0),void 0===i&&(i=-1),void 0===o&&(o=s),this.x=t,this.y=e,this.angle=n,this.segment=i,this.minzoom=o};e.Anchor=a;var r=function(t,e,n,i,a,r,l){void 0===a&&(a=!1),void 0===r&&(r=s),void 0===l&&(l=o.C_INFINITY),this.anchor=t,this.labelAngle=e,this.glyphAngle=n,this.page=i,this.upsideDown=a,this.minzoom=r,this.maxzoom=l},l=function(t,e,n,i,o,a,r,l,h,s){this.tl=t,this.tr=e,this.bl=n,this.br=i,this.mosaicRect=o,this.labelAngle=a,this.anchor=r,this.minzoom=l,this.maxzoom=h,this.page=s};e.PlacedSymbol=l;var h=function(t,e){this.footprint=t,this.shapes=e};e.Placement=h;var s=.5,g=function(){function t(){this.mapAngle=0,this._conflictEngine=new i.ConflictEngine}return t.prototype.reset=function(){this._conflictEngine.reset()},t.prototype.setAngle=function(t){this.mapAngle=t,this._conflictEngine.setAngle(t)},t.prototype.getIconPlacement=function(t,e,a,r,g,p,c){var m=a.width/a.pixelRatio,f=a.height/a.pixelRatio,I=p.offset[0]-m/2,d=p.offset[1]-f/2,u=I+m,_=d+f,w=a.rect,x=a.sdf?17:2,y=I-x,v=d-x,N=y+w.width/a.pixelRatio,P=v+w.height/a.pixelRatio,A=new n.Point(y,v),E=new n.Point(N,P),T=new n.Point(y,P),b=new n.Point(N,v),C=p.rotate*o.C_DEG_TO_RAD,M=1===p.rotationAlignment;if(t.segment>=0&&!M&&(C+=t.angle),0!==C){var z=Math.cos(C),F=Math.sin(C);A.rotate(z,F),E.rotate(z,F),T.rotate(z,F),b.rotate(z,F)}var Y=8*p.padding,B=new n.Point(t.x,t.y),G=new i.Footprint(this.mapAngle,Y,M);G.addBox(B,new i.Box(I,d,u,_),r,C,e,s,o.C_INFINITY);var O=new l(A,b,T,E,w,0,B,s,o.C_INFINITY,0),R=new h(G,[O]),D=s;return p.allowOverlap||(D=this._conflictEngine.getMinZoom(R.footprint,D,c,M)),G.minzoom=D,R},t.prototype.getTextPlacement=function(t,e,a,g,p,c,m,f){for(var I,d=new n.Point(t.x,t.y),u=m.rotate*o.C_DEG_TO_RAD,_=0===m.rotationAlignment,w=m.keepUpright,x=s,y=!_,v=y?0:t.angle,N=t.segment>=0&&_,P=8*m.padding,A=new i.Footprint(this.mapAngle,P,y),E=[],T=!N,b=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY,M=b,z=C,F=N?w:_&&w,Y=0,B=g;Y<B.length;Y++){var G=B[Y],O=G.glyphMosaicItem;if(O&&!O.rect.isEmpty){var R=O.rect,D=O.metrics,q=O.page;T&&(I&&I!==G.y&&(A.addBox(d,new i.Box(b,M,C,z),p,u,e,s,o.C_INFINITY),M=b=Number.POSITIVE_INFINITY,z=C=Number.NEGATIVE_INFINITY),I=G.y);var V=[];if(N){var S=.5*O.metrics.width,k=(a.x+G.x+D.left-4+S)*p;if(x=this._placeGlyph(t,x,k,c,t.segment,1,q,V),w&&(x=this._placeGlyph(t,x,k,c,t.segment,-1,q,V)),x>=2)break}else V.push(new r(d,v,v,q)),_&&w&&V.push(new r(d,v+o.C_PI,v+o.C_PI,q,!0));for(var U=G.x+a.x+D.left,Z=G.y+a.y-D.top,j=U+D.width,H=Z+D.height,J=new n.Point(U-4,Z-4),K=new n.Point(J.x+R.width,J.y+R.height),L=new n.Point(J.x,K.y),Q=new n.Point(K.x,J.y),W=0,X=V;W<X.length;W++){var $=X[W],tt=J.clone(),et=L.clone(),nt=Q.clone(),it=K.clone(),ot=Z,at=H,rt=$.glyphAngle+u;if(0!==rt){var lt=Math.cos(rt),ht=Math.sin(rt);tt.rotate(lt,ht),it.rotate(lt,ht),et.rotate(lt,ht),nt.rotate(lt,ht)}E.push(new l(tt,nt,et,it,R,$.labelAngle,$.anchor,$.minzoom,$.maxzoom,$.page)),F&&!this._legible($.labelAngle)||(T?(U<b&&(b=U),ot<M&&(M=ot),j>C&&(C=j),at>z&&(z=at)):$.minzoom<2&&A.addBox($.anchor,new i.Box(U,ot,j,at),p,rt,e,$.minzoom,$.maxzoom))}}}if(x>=2)return null;T&&A.addBox(d,new i.Box(b,M,C,z),p,u,e,s,o.C_INFINITY);var st=new h(A,E);return m.allowOverlap||(x=this._conflictEngine.getMinZoom(st.footprint,x,f,y)),A.minzoom=x,st},t.prototype.add=function(t){this._conflictEngine.add(t.footprint)},t.prototype._legible=function(t){var e=o.radToByte(t);return e<65||e>=193},t.prototype._placeGlyph=function(t,e,i,a,l,h,s,g){var p=h,c=p<0?o.positiveMod(t.angle+o.C_PI,o.C_2PI):t.angle,m=this._legible(c),f=0;i<0&&(p*=-1,i*=-1,f=o.C_PI),p>0&&++l;var I=new n.Point(t.x,t.y),d=a[l],u=o.C_INFINITY;if(a.length<=l)return u;for(;;){var _=d.x-I.x,w=d.y-I.y,x=Math.sqrt(_*_+w*w),y=Math.max(i/x,e),v=_/x,N=w/x,P=o.positiveMod(Math.atan2(N,v)+f,o.C_2PI);if(g.push(new r(I,c,P,s,m,y,u)),y<=e)return y;I=d.clone();do{if(l+=p,a.length<=l||l<0)return y;d=a[l]}while(I.isEqual(d));var A=d.x-I.x,E=d.y-I.y,T=Math.sqrt(A*A+E*E);A*=x/T,E*=x/T,I.x-=A,I.y-=E,u=y}},t}();e.PlacementEngine=g}));