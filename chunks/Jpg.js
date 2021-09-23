/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";var n,r,o,a={exports:{}};n=a,r=function(){var e=function(){function e(e){this.message="JPEG error: "+e}return e.prototype=new Error,e.prototype.name="JpegError",e.constructor=e,e}();return function(){if(!self||!self.Uint8ClampedArray)return null;var n=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),r=4017,o=799,a=3406,t=2276,i=1567,s=3784,c=5793,f=2896;function l(){this.decodeTransform=null,this.colorTransform=-1}function u(e,n){for(var r,o,a=0,t=[],i=16;i>0&&!e[i-1];)i--;t.push({children:[],index:0});var s,c=t[0];for(r=0;r<i;r++){for(o=0;o<e[r];o++){for((c=t.pop()).children[c.index]=n[a];c.index>0;)c=t.pop();for(c.index++,t.push(c);t.length<=r;)t.push(s={children:[],index:0}),c.children[c.index]=s.children,c=s;a++}r+1<i&&(t.push(s={children:[],index:0}),c.children[c.index]=s.children,c=s)}return t[0].children}function h(e,n,r){return 64*((e.blocksPerLine+1)*n+r)}function v(r,o,a,t,i,s,c,f,l){var u=a.mcusPerLine,v=a.progressive,m=o,d=0,p=0;function k(){if(p>0)return p--,d>>p&1;if(255===(d=r[o++])){var n=r[o++];if(n)throw new e("unexpected marker "+(d<<8|n).toString(16))}return p=7,d>>>7}function g(n){for(var r=n;;){if("number"==typeof(r=r[k()]))return r;if("object"!=typeof r)throw new e("invalid huffman sequence")}}function C(e){for(var n=0;e>0;)n=n<<1|k(),e--;return n}function w(e){if(1===e)return 1===k()?1:-1;var n=C(e);return n>=1<<e-1?n:n+(-1<<e)+1}function x(e,r){var o=g(e.huffmanTableDC),a=0===o?0:w(o);e.blockData[r]=e.pred+=a;for(var t=1;t<64;){var i=g(e.huffmanTableAC),s=15&i,c=i>>4;if(0!==s){var f=n[t+=c];e.blockData[r+f]=w(s),t++}else{if(c<15)break;t+=16}}}function y(e,n){var r=g(e.huffmanTableDC),o=0===r?0:w(r)<<l;e.blockData[n]=e.pred+=o}function D(e,n){e.blockData[n]|=k()<<l}var T=0;function P(e,r){if(T>0)T--;else for(var o=s,a=c;o<=a;){var t=g(e.huffmanTableAC),i=15&t,f=t>>4;if(0!==i){var u=n[o+=f];e.blockData[r+u]=w(i)*(1<<l),o++}else{if(f<15){T=C(f)+(1<<f)-1;break}o+=16}}}var L,A=0;function _(r,o){for(var a,t,i=s,f=c,u=0;i<=f;){var h=n[i];switch(A){case 0:if(u=(t=g(r.huffmanTableAC))>>4,0==(a=15&t))u<15?(T=C(u)+(1<<u),A=4):(u=16,A=1);else{if(1!==a)throw new e("invalid ACn encoding");L=w(a),A=u?2:3}continue;case 1:case 2:r.blockData[o+h]?r.blockData[o+h]+=k()<<l:0==--u&&(A=2===A?3:0);break;case 3:r.blockData[o+h]?r.blockData[o+h]+=k()<<l:(r.blockData[o+h]=L<<l,A=0);break;case 4:r.blockData[o+h]&&(r.blockData[o+h]+=k()<<l)}i++}4===A&&0==--T&&(A=0)}function U(e,n,r,o,a){var t=r%u;n(e,h(e,(r/u|0)*e.v+o,t*e.h+a))}function I(e,n,r){n(e,h(e,r/e.blocksPerLine|0,r%e.blocksPerLine))}var z,M,Y,q,S,R,H=t.length;R=v?0===s?0===f?y:D:0===f?P:_:x;var E,J,V,j,B=0;for(J=1===H?t[0].blocksPerLine*t[0].blocksPerColumn:u*a.mcusPerColumn;B<J;){var N=i?Math.min(J-B,i):J;for(M=0;M<H;M++)t[M].pred=0;if(T=0,1===H)for(z=t[0],S=0;S<N;S++)I(z,R,B),B++;else for(S=0;S<N;S++){for(M=0;M<H;M++)for(V=(z=t[M]).h,j=z.v,Y=0;Y<j;Y++)for(q=0;q<V;q++)U(z,R,B,Y,q);B++}p=0,(E=b(r,o))&&E.invalid&&(console.log("decodeScan - unexpected MCU data, next marker is: "+E.invalid),o=E.offset);var G=E&&E.marker;if(!G||G<=65280)throw new e("marker was not found");if(!(G>=65488&&G<=65495))break;o+=2}return(E=b(r,o))&&E.invalid&&(console.log("decodeScan - unexpected Scan data, next marker is: "+E.invalid),o=E.offset),o-m}function m(n,l,u){var h,v,m,d,b,p,k,g,C,w,x,y,D,T,P,L,A,_=n.quantizationTable,U=n.blockData;if(!_)throw new e("missing required Quantization Table.");for(var I=0;I<64;I+=8)C=U[l+I],w=U[l+I+1],x=U[l+I+2],y=U[l+I+3],D=U[l+I+4],T=U[l+I+5],P=U[l+I+6],L=U[l+I+7],C*=_[I],0!=(w|x|y|D|T|P|L)?(w*=_[I+1],x*=_[I+2],y*=_[I+3],D*=_[I+4],T*=_[I+5],P*=_[I+6],L*=_[I+7],v=(h=(h=c*C+128>>8)+(v=c*D+128>>8)+1>>1)-v,A=(m=x)*s+(d=P)*i+128>>8,m=m*i-d*s+128>>8,k=(b=(b=f*(w-L)+128>>8)+(k=T<<4)+1>>1)-k,p=(g=(g=f*(w+L)+128>>8)+(p=y<<4)+1>>1)-p,d=(h=h+(d=A)+1>>1)-d,m=(v=v+m+1>>1)-m,A=b*t+g*a+2048>>12,b=b*a-g*t+2048>>12,g=A,A=p*o+k*r+2048>>12,p=p*r-k*o+2048>>12,k=A,u[I]=h+g,u[I+7]=h-g,u[I+1]=v+k,u[I+6]=v-k,u[I+2]=m+p,u[I+5]=m-p,u[I+3]=d+b,u[I+4]=d-b):(A=c*C+512>>10,u[I]=A,u[I+1]=A,u[I+2]=A,u[I+3]=A,u[I+4]=A,u[I+5]=A,u[I+6]=A,u[I+7]=A);for(var z=0;z<8;++z)C=u[z],0!=((w=u[z+8])|(x=u[z+16])|(y=u[z+24])|(D=u[z+32])|(T=u[z+40])|(P=u[z+48])|(L=u[z+56]))?(v=(h=4112+((h=c*C+2048>>12)+(v=c*D+2048>>12)+1>>1))-v,A=(m=x)*s+(d=P)*i+2048>>12,m=m*i-d*s+2048>>12,d=A,k=(b=(b=f*(w-L)+2048>>12)+(k=T)+1>>1)-k,p=(g=(g=f*(w+L)+2048>>12)+(p=y)+1>>1)-p,A=b*t+g*a+2048>>12,b=b*a-g*t+2048>>12,g=A,A=p*o+k*r+2048>>12,p=p*r-k*o+2048>>12,C=(C=(h=h+d+1>>1)+g)<16?0:C>=4080?255:C>>4,w=(w=(v=v+m+1>>1)+(k=A))<16?0:w>=4080?255:w>>4,x=(x=(m=v-m)+p)<16?0:x>=4080?255:x>>4,y=(y=(d=h-d)+b)<16?0:y>=4080?255:y>>4,D=(D=d-b)<16?0:D>=4080?255:D>>4,T=(T=m-p)<16?0:T>=4080?255:T>>4,P=(P=v-k)<16?0:P>=4080?255:P>>4,L=(L=h-g)<16?0:L>=4080?255:L>>4,U[l+z]=C,U[l+z+8]=w,U[l+z+16]=x,U[l+z+24]=y,U[l+z+32]=D,U[l+z+40]=T,U[l+z+48]=P,U[l+z+56]=L):(A=(A=c*C+8192>>14)<-2040?0:A>=2024?255:A+2056>>4,U[l+z]=A,U[l+z+8]=A,U[l+z+16]=A,U[l+z+24]=A,U[l+z+32]=A,U[l+z+40]=A,U[l+z+48]=A,U[l+z+56]=A)}function d(e,n){for(var r=n.blocksPerLine,o=n.blocksPerColumn,a=new Int16Array(64),t=0;t<o;t++)for(var i=0;i<r;i++)m(n,h(n,t,i),a);return n.blockData}function b(e,n,r){function o(n){return e[n]<<8|e[n+1]}var a=e.length-1,t=r<n?r:n;if(n>=a)return null;var i=o(n);if(i>=65472&&i<=65534)return{invalid:null,marker:i,offset:n};for(var s=o(t);!(s>=65472&&s<=65534);){if(++t>=a)return null;s=o(t)}return{invalid:i.toString(16),marker:s,offset:t}}return l.prototype={parse:function(r){function o(){var e=r[c]<<8|r[c+1];return c+=2,e}function a(){var e=o(),n=c+e-2,a=b(r,n,c);a&&a.invalid&&(console.log("readDataBlock - incorrect length, next marker is: "+a.invalid),n=a.offset);var t=r.subarray(c,n);return c+=t.length,t}function t(e){for(var n=Math.ceil(e.samplesPerLine/8/e.maxH),r=Math.ceil(e.scanLines/8/e.maxV),o=0;o<e.components.length;o++){H=e.components[o];var a=Math.ceil(Math.ceil(e.samplesPerLine/8)*H.h/e.maxH),t=Math.ceil(Math.ceil(e.scanLines/8)*H.v/e.maxV),i=n*H.h,s=r*H.v*64*(i+1);H.blockData=new Int16Array(s),H.blocksPerLine=a,H.blocksPerColumn=t}e.mcusPerLine=n,e.mcusPerColumn=r}var i,s,c=0,f=null,l=null,h=[],m=[],p=[],k=o();if(65496!==k)throw new e("SOI not found");for(k=o();65497!==k;){var g,C,w;switch(k){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var x=a();65504===k&&74===x[0]&&70===x[1]&&73===x[2]&&70===x[3]&&0===x[4]&&(f={version:{major:x[5],minor:x[6]},densityUnits:x[7],xDensity:x[8]<<8|x[9],yDensity:x[10]<<8|x[11],thumbWidth:x[12],thumbHeight:x[13],thumbData:x.subarray(14,14+3*x[12]*x[13])}),65518===k&&65===x[0]&&100===x[1]&&111===x[2]&&98===x[3]&&101===x[4]&&(l={version:x[5]<<8|x[6],flags0:x[7]<<8|x[8],flags1:x[9]<<8|x[10],transformCode:x[11]});break;case 65499:for(var y=o()+c-2;c<y;){var D=r[c++],T=new Uint16Array(64);if(D>>4==0)for(C=0;C<64;C++)T[n[C]]=r[c++];else{if(D>>4!=1)throw new e("DQT - invalid table spec");for(C=0;C<64;C++)T[n[C]]=o()}h[15&D]=T}break;case 65472:case 65473:case 65474:if(i)throw new e("Only single frame JPEGs supported");o(),(i={}).extended=65473===k,i.progressive=65474===k,i.precision=r[c++],i.scanLines=o(),i.samplesPerLine=o(),i.components=[],i.componentIds={};var P,L=r[c++],A=0,_=0;for(g=0;g<L;g++){P=r[c];var U=r[c+1]>>4,I=15&r[c+1];A<U&&(A=U),_<I&&(_=I);var z=r[c+2];w=i.components.push({h:U,v:I,quantizationId:z,quantizationTable:null}),i.componentIds[P]=w-1,c+=3}i.maxH=A,i.maxV=_,t(i);break;case 65476:var M=o();for(g=2;g<M;){var Y=r[c++],q=new Uint8Array(16),S=0;for(C=0;C<16;C++,c++)S+=q[C]=r[c];var R=new Uint8Array(S);for(C=0;C<S;C++,c++)R[C]=r[c];g+=17+S,(Y>>4==0?p:m)[15&Y]=u(q,R)}break;case 65501:o(),s=o();break;case 65498:o();var H,E=r[c++],J=[];for(g=0;g<E;g++){var V=i.componentIds[r[c++]];H=i.components[V];var j=r[c++];H.huffmanTableDC=p[j>>4],H.huffmanTableAC=m[15&j],J.push(H)}var B=r[c++],N=r[c++],G=r[c++],O=v(r,c,i,J,s,B,N,G>>4,15&G);c+=O;break;case 65535:255!==r[c]&&c--;break;default:if(255===r[c-3]&&r[c-2]>=192&&r[c-2]<=254){c-=3;break}throw new e("unknown marker "+k.toString(16))}k=o()}for(this.width=i.samplesPerLine,this.height=i.scanLines,this.jfif=f,this.eof=c,this.adobe=l,this.components=[],g=0;g<i.components.length;g++){var Q=h[(H=i.components[g]).quantizationId];Q&&(H.quantizationTable=Q),this.components.push({output:d(i,H),scaleX:H.h/i.maxH,scaleY:H.v/i.maxV,blocksPerLine:H.blocksPerLine,blocksPerColumn:H.blocksPerColumn})}this.numComponents=this.components.length},_getLinearizedBlockData:function(e,n){var r,o,a,t,i,s,c,f,l,u,h,v=this.width/e,m=this.height/n,d=0,b=this.components.length,p=e*n*b,k=new Uint8ClampedArray(p),g=new Uint32Array(e),C=4294967288;for(c=0;c<b;c++){for(o=(r=this.components[c]).scaleX*v,a=r.scaleY*m,d=c,h=r.output,t=r.blocksPerLine+1<<3,i=0;i<e;i++)f=0|i*o,g[i]=(f&C)<<3|7&f;for(s=0;s<n;s++)for(u=t*((f=0|s*a)&C)|(7&f)<<3,i=0;i<e;i++)k[d]=h[u+g[i]],d+=b}var w=this.decodeTransform;if(w)for(c=0;c<p;)for(f=0,l=0;f<b;f++,c++,l+=2)k[c]=(k[c]*w[l]>>8)+w[l+1];return k},_isColorConversionNeeded:function(){return this.adobe?!!this.adobe.transformCode:3===this.numComponents?0!==this.colorTransform:1===this.colorTransform},_convertYccToRgb:function(e){for(var n,r,o,a=0,t=e.length;a<t;a+=3)n=e[a],r=e[a+1],o=e[a+2],e[a]=n-179.456+1.402*o,e[a+1]=n+135.459-.344*r-.714*o,e[a+2]=n-226.816+1.772*r;return e},_convertYcckToRgb:function(e){for(var n,r,o,a,t=0,i=0,s=e.length;i<s;i+=4)n=e[i],r=e[i+1],o=e[i+2],a=e[i+3],e[t++]=r*(-660635669420364e-19*r+.000437130475926232*o-54080610064599e-18*n+.00048449797120281*a-.154362151871126)-122.67195406894+o*(-.000957964378445773*o+.000817076911346625*n-.00477271405408747*a+1.53380253221734)+n*(.000961250184130688*n-.00266257332283933*a+.48357088451265)+a*(-.000336197177618394*a+.484791561490776),e[t++]=107.268039397724+r*(219927104525741e-19*r-.000640992018297945*o+.000659397001245577*n+.000426105652938837*a-.176491792462875)+o*(-.000778269941513683*o+.00130872261408275*n+.000770482631801132*a-.151051492775562)+n*(.00126935368114843*n-.00265090189010898*a+.25802910206845)+a*(-.000318913117588328*a-.213742400323665),e[t++]=r*(-.000570115196973677*r-263409051004589e-19*o+.0020741088115012*n-.00288260236853442*a+.814272968359295)-20.810012546947+o*(-153496057440975e-19*o-.000132689043961446*n+.000560833691242812*a-.195152027534049)+n*(.00174418132927582*n-.00255243321439347*a+.116935020465145)+a*(-.000343531996510555*a+.24165260232407);return e},_convertYcckToCmyk:function(e){for(var n,r,o,a=0,t=e.length;a<t;a+=4)n=e[a],r=e[a+1],o=e[a+2],e[a]=434.456-n-1.402*o,e[a+1]=119.541-n+.344*r+.714*o,e[a+2]=481.816-n-1.772*r;return e},_convertCmykToRgb:function(e){for(var n,r,o,a,t=0,i=1/255,s=0,c=e.length;s<c;s+=4)n=e[s]*i,r=e[s+1]*i,o=e[s+2]*i,a=e[s+3]*i,e[t++]=255+n*(-4.387332384609988*n+54.48615194189176*r+18.82290502165302*o+212.25662451639585*a-285.2331026137004)+r*(1.7149763477362134*r-5.6096736904047315*o-17.873870861415444*a-5.497006427196366)+o*(-2.5217340131683033*o-21.248923337353073*a+17.5119270841813)-a*(21.86122147463605*a+189.48180835922747),e[t++]=255+n*(8.841041422036149*n+60.118027045597366*r+6.871425592049007*o+31.159100130055922*a-79.2970844816548)+r*(-15.310361306967817*r+17.575251261109482*o+131.35250912493976*a-190.9453302588951)+o*(4.444339102852739*o+9.8632861493405*a-24.86741582555878)-a*(20.737325471181034*a+187.80453709719578),e[t++]=255+n*(.8842522430003296*n+8.078677503112928*r+30.89978309703729*o-.23883238689178934*a-14.183576799673286)+r*(10.49593273432072*r+63.02378494754052*o+50.606957656360734*a-112.23884253719248)+o*(.03296041114873217*o+115.60384449646641*a-193.58209356861505)-a*(22.33816807309886*a+180.12613974708367);return e},getData:function(n,r,o){if(this.numComponents>4)throw new e("Unsupported color mode");var a=this._getLinearizedBlockData(n,r);if(1===this.numComponents&&o){for(var t=a.length,i=new Uint8ClampedArray(3*t),s=0,c=0;c<t;c++){var f=a[c];i[s++]=f,i[s++]=f,i[s++]=f}return i}if(3===this.numComponents&&this._isColorConversionNeeded())return this._convertYccToRgb(a);if(4===this.numComponents){if(this._isColorConversionNeeded())return o?this._convertYcckToRgb(a):this._convertYcckToCmyk(a);if(o)return this._convertCmykToRgb(a)}return a}},l}()},void 0!==(o=r())&&(n.exports=o);var t=a.exports;e.JpegImage=t}));
