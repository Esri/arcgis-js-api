// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../support/adapters/support/utils","../../../../support/arcadeOnDemand"],function(e,t,n,r,a,i){function s(e,t,s){return r(this,void 0,void 0,function(){var r,l,u,o,c,p,d,f,g,h,v,x,w,b,m,y,D,E,M,F,H,R,h,S,V,v,q,A,C;return n(this,function(n){switch(n.label){case 0:r=0,l=0,u=1/0,o=-1/0,c=null,p=new Map,d=[];for(f in t)d.push(f);g=0,n.label=1;case 1:return g<d.length?(h=d[g],v=t[h].valueExpression,v?c?[3,3]:[4,i.loadArcade()]:[3,4]):[3,5];case 2:x=n.sent().arcadeUtils,c=x,n.label=3;case 3:p.set(h,c.createFunction(v)),n.label=4;case 4:return g++,[3,1];case 5:for(w=s&&c&&c.getViewInfo({viewingMode:"2d"===s.type?"map":s.viewingMode,scale:s.scale,spatialReference:s.spatialReference}),b=0,m=e;b<m.length;b++)if(y=m[b],D=y.geometry,E=y.attributes,D&&(M=D.extent)&&(F=M.width*M.height)>0){H=0,R=c&&c.createExecContext(y,w);for(h in t)S=t[h],V=S.field,v=S.valueExpression,q=null,V?q=E[V]:v&&(A=p.get(h),q=c.executeFunction(A,R)),a.isValidNumber(q)&&(H+=q||0);C=H/F,++r,l+=C,C<u&&(u=C),C>o&&(o=C)}return[2,{minDensity:u!==1/0?u:null,maxDensity:o!==-1/0?o:null,avgDensity:r?l/r:null}]}})})}return s});