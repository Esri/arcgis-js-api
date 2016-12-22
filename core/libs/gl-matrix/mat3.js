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

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE. */

define(["./common"],function(t){var a={};return a.create=function(){var a=new t.ARRAY_TYPE(9);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a},a.fromMat4=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[4],t[4]=a[5],t[5]=a[6],t[6]=a[8],t[7]=a[9],t[8]=a[10],t},a.clone=function(a){var n=new t.ARRAY_TYPE(9);return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n},a.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},a.fromValues=function(a,n,r,u,o,M,e,h,i){var s=new t.ARRAY_TYPE(9);return s[0]=a,s[1]=n,s[2]=r,s[3]=u,s[4]=o,s[5]=M,s[6]=e,s[7]=h,s[8]=i,s},a.set=function(t,a,n,r,u,o,M,e,h,i){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=o,t[5]=M,t[6]=e,t[7]=h,t[8]=i,t},a.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},a.transpose=function(t,a){if(t===a){var n=a[1],r=a[2],u=a[5];t[1]=a[3],t[2]=a[6],t[3]=n,t[5]=a[7],t[6]=r,t[7]=u}else t[0]=a[0],t[1]=a[3],t[2]=a[6],t[3]=a[1],t[4]=a[4],t[5]=a[7],t[6]=a[2],t[7]=a[5],t[8]=a[8];return t},a.invert=function(t,a){var n=a[0],r=a[1],u=a[2],o=a[3],M=a[4],e=a[5],h=a[6],i=a[7],s=a[8],c=s*M-e*i,f=-s*o+e*h,b=i*o-M*h,m=n*c+r*f+u*b;return m?(m=1/m,t[0]=c*m,t[1]=(-s*r+u*i)*m,t[2]=(e*r-u*M)*m,t[3]=f*m,t[4]=(s*n-u*h)*m,t[5]=(-e*n+u*o)*m,t[6]=b*m,t[7]=(-i*n+r*h)*m,t[8]=(M*n-r*o)*m,t):null},a.adjoint=function(t,a){var n=a[0],r=a[1],u=a[2],o=a[3],M=a[4],e=a[5],h=a[6],i=a[7],s=a[8];return t[0]=M*s-e*i,t[1]=u*i-r*s,t[2]=r*e-u*M,t[3]=e*h-o*s,t[4]=n*s-u*h,t[5]=u*o-n*e,t[6]=o*i-M*h,t[7]=r*h-n*i,t[8]=n*M-r*o,t},a.determinant=function(t){var a=t[0],n=t[1],r=t[2],u=t[3],o=t[4],M=t[5],e=t[6],h=t[7],i=t[8];return a*(i*o-M*h)+n*(-i*u+M*e)+r*(h*u-o*e)},a.multiply=function(t,a,n){var r=a[0],u=a[1],o=a[2],M=a[3],e=a[4],h=a[5],i=a[6],s=a[7],c=a[8],f=n[0],b=n[1],m=n[2],l=n[3],v=n[4],p=n[5],E=n[6],w=n[7],P=n[8];return t[0]=f*r+b*M+m*i,t[1]=f*u+b*e+m*s,t[2]=f*o+b*h+m*c,t[3]=l*r+v*M+p*i,t[4]=l*u+v*e+p*s,t[5]=l*o+v*h+p*c,t[6]=E*r+w*M+P*i,t[7]=E*u+w*e+P*s,t[8]=E*o+w*h+P*c,t},a.mul=a.multiply,a.translate=function(t,a,n){var r=a[0],u=a[1],o=a[2],M=a[3],e=a[4],h=a[5],i=a[6],s=a[7],c=a[8],f=n[0],b=n[1];return t[0]=r,t[1]=u,t[2]=o,t[3]=M,t[4]=e,t[5]=h,t[6]=f*r+b*M+i,t[7]=f*u+b*e+s,t[8]=f*o+b*h+c,t},a.rotate=function(t,a,n){var r=a[0],u=a[1],o=a[2],M=a[3],e=a[4],h=a[5],i=a[6],s=a[7],c=a[8],f=Math.sin(n),b=Math.cos(n);return t[0]=b*r+f*M,t[1]=b*u+f*e,t[2]=b*o+f*h,t[3]=b*M-f*r,t[4]=b*e-f*u,t[5]=b*h-f*o,t[6]=i,t[7]=s,t[8]=c,t},a.scale=function(t,a,n){var r=n[0],u=n[1];return t[0]=r*a[0],t[1]=r*a[1],t[2]=r*a[2],t[3]=u*a[3],t[4]=u*a[4],t[5]=u*a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},a.fromTranslation=function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=a[0],t[7]=a[1],t[8]=1,t},a.fromRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=0,t[3]=-n,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},a.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=a[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},a.fromMat2d=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=0,t[3]=a[2],t[4]=a[3],t[5]=0,t[6]=a[4],t[7]=a[5],t[8]=1,t},a.fromQuat=function(t,a){var n=a[0],r=a[1],u=a[2],o=a[3],M=n+n,e=r+r,h=u+u,i=n*M,s=r*M,c=r*e,f=u*M,b=u*e,m=u*h,l=o*M,v=o*e,p=o*h;return t[0]=1-c-m,t[3]=s-p,t[6]=f+v,t[1]=s+p,t[4]=1-i-m,t[7]=b-l,t[2]=f-v,t[5]=b+l,t[8]=1-i-c,t},a.normalFromMat4=function(t,a){var n=a[0],r=a[1],u=a[2],o=a[3],M=a[4],e=a[5],h=a[6],i=a[7],s=a[8],c=a[9],f=a[10],b=a[11],m=a[12],l=a[13],v=a[14],p=a[15],E=n*e-r*M,w=n*h-u*M,P=n*i-o*M,S=r*h-u*e,d=r*i-o*e,x=u*i-o*h,I=s*l-c*m,L=s*v-f*m,N=s*p-b*m,O=c*v-f*l,A=c*p-b*l,R=f*p-b*v,y=E*R-w*A+P*O+S*N-d*L+x*I;return y?(y=1/y,t[0]=(e*R-h*A+i*O)*y,t[1]=(h*N-M*R-i*L)*y,t[2]=(M*A-e*N+i*I)*y,t[3]=(u*A-r*R-o*O)*y,t[4]=(n*R-u*N+o*L)*y,t[5]=(r*N-n*A-o*I)*y,t[6]=(l*x-v*d+p*S)*y,t[7]=(v*P-m*x-p*w)*y,t[8]=(m*d-l*P+p*E)*y,t):null},a.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},a.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},a.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t},a.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t},a.sub=a.subtract,a.multiplyScalar=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t},a.multiplyScalarAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t[6]=a[6]+n[6]*r,t[7]=a[7]+n[7]*r,t[8]=a[8]+n[8]*r,t},a.exactEquals=function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]},a.equals=function(a,n){var r=a[0],u=a[1],o=a[2],M=a[3],e=a[4],h=a[5],i=a[6],s=a[7],c=a[8],f=n[0],b=n[1],m=n[2],l=n[3],v=n[4],p=n[5],E=a[6],w=n[7],P=n[8];return Math.abs(r-f)<=t.EPSILON*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-b)<=t.EPSILON*Math.max(1,Math.abs(u),Math.abs(b))&&Math.abs(o-m)<=t.EPSILON*Math.max(1,Math.abs(o),Math.abs(m))&&Math.abs(M-l)<=t.EPSILON*Math.max(1,Math.abs(M),Math.abs(l))&&Math.abs(e-v)<=t.EPSILON*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(h-p)<=t.EPSILON*Math.max(1,Math.abs(h),Math.abs(p))&&Math.abs(i-E)<=t.EPSILON*Math.max(1,Math.abs(i),Math.abs(E))&&Math.abs(s-w)<=t.EPSILON*Math.max(1,Math.abs(s),Math.abs(w))&&Math.abs(c-P)<=t.EPSILON*Math.max(1,Math.abs(c),Math.abs(P))},a});