// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../support/adapters/support/utils","../../../support/arcadeOnDemand"],(function(e,t,n,i,a){function r(e,t,n){return void 0===t&&(t=!0),void 0===n&&(n=!0),i.isValidNumber(e)&&(t||0!==e)&&(n||e>=0)}return function(e){return n.__awaiter(this,void 0,void 0,(function(){var t,i,s,l,u,c,o,d,p,f,g,v,h,b,w,x,m,y,D,_,E,M,F,N,R,V,q,A,C;return n.__generator(this,(function(n){switch(n.label){case 0:t=e.features,i=e.attributes,s=e.includeZeros,l=e.includeNegatives,u=e.view,c=0,o=0,d=1/0,p=-1/0,f=null,g=new Map,F=0,n.label=1;case 1:return F<i.length?(V=i[F].valueExpression)?f?[3,3]:[4,a.loadArcade()]:[3,4]:[3,5];case 2:v=n.sent().arcadeUtils,f=v,n.label=3;case 3:g.set(F,f.createFunction(V)),n.label=4;case 4:return F++,[3,1];case 5:for(h=u&&f&&f.getViewInfo({viewingMode:"2d"===u.type?"map":u.viewingMode,scale:u.scale,spatialReference:u.spatialReference}),b=0,w=t;b<w.length;b++)if(x=w[b],m=x.geometry,y=x.attributes,m&&(D=m.extent)&&(_=D.width*D.height)>0){for(E=0,M=f&&f.createExecContext(x,h),F=0;F<i.length;F++)N=i[F],R=N.field,V=N.valueExpression,q=null,R?q=y[R]:V&&(A=g.get(F),q=f.executeFunction(A,M)),r(q,s,l)&&(E+=q||0);r(E,s,l)&&(++c,o+=C=E/_,C<d&&(d=C),C>p&&(p=C))}return[2,{minDensity:d!==1/0?d:null,maxDensity:p!==-1/0?p:null,avgDensity:c?o/c:null}]}}))}))}}));