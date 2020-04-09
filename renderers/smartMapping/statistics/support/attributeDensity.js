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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../support/adapters/support/utils","../../../../support/arcadeOnDemand"],(function(e,t,n,r,i,a){function s(e,t,n){return void 0===t&&(t=!0),void 0===n&&(n=!0),i.isValidNumber(e)&&(t||0!==e)&&(n||e>=0)}return function(e){return r(this,void 0,void 0,(function(){var t,r,i,l,u,o,c,p,d,f,g,v,h,w,x,b,m,y,D,E,M,F,H,N,R,S,V,q,A;return n(this,(function(n){switch(n.label){case 0:t=e.features,r=e.attributes,i=e.includeZeros,l=e.includeNegatives,u=e.view,o=0,c=0,p=1/0,d=-1/0,f=null,g=new Map,H=0,n.label=1;case 1:return H<r.length?(S=r[H].valueExpression)?f?[3,3]:[4,a.loadArcade()]:[3,4]:[3,5];case 2:v=n.sent().arcadeUtils,f=v,n.label=3;case 3:g.set(H,f.createFunction(S)),n.label=4;case 4:return H++,[3,1];case 5:for(h=u&&f&&f.getViewInfo({viewingMode:"2d"===u.type?"map":u.viewingMode,scale:u.scale,spatialReference:u.spatialReference}),w=0,x=t;w<x.length;w++)if(b=x[w],m=b.geometry,y=b.attributes,m&&(D=m.extent)&&(E=D.width*D.height)>0){for(M=0,F=f&&f.createExecContext(b,h),H=0;H<r.length;H++)N=r[H],R=N.field,S=N.valueExpression,V=null,R?V=y[R]:S&&(q=g.get(H),V=f.executeFunction(q,F)),s(V,i,l)&&(M+=V||0);s(M,i,l)&&(++o,c+=A=M/E,A<p&&(p=A),A>d&&(d=A))}return[2,{minDensity:p!==1/0?p:null,maxDensity:d!==-1/0?d:null,avgDensity:o?c/o:null}]}}))}))}}));