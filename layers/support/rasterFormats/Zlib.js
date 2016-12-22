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

/*
    * Extracted from pdf.js
    * https://github.com/andreasgal/pdf.js
    *
    * Copyright (c) 2011 Mozilla Foundation
    *
    * Contributors: Andreas Gal <gal@mozilla.com>
    *               Chris G Jones <cjones@mozilla.com>
    *               Shaon Barman <shaon.barman@gmail.com>
    *               Vivien Nicolas <21@vingtetun.org>
    *               Justin D'Arcangelo <justindarc@gmail.com>
    *               Yury Delendik
    *
    * Permission is hereby granted, free of charge, to any person obtaining a
    * copy of this software and associated documentation files (the "Software"),
    * to deal in the Software without restriction, including without limitation
    * the rights to use, copy, modify, merge, publish, distribute, sublicense,
    * and/or sell copies of the Software, and to permit persons to whom the
    * Software is furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
    * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    * DEALINGS IN THE SOFTWARE.
    */

define([],function(){var e=function(){function e(){this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=null}return e.prototype={ensureBuffer:function(e){var t=this.buffer,r=t?t.byteLength:0;if(r>e)return t;for(var i=512;e>i;)i<<=1;for(var s=new Uint8Array(i),f=0;r>f;++f)s[f]=t[f];return this.buffer=s},getByte:function(){for(var e=this.pos;this.bufferLength<=e;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},getBytes:function(e){var t=this.pos;if(e){this.ensureBuffer(t+e);for(var r=t+e;!this.eof&&this.bufferLength<r;)this.readBlock();var i=this.bufferLength;r>i&&(r=i)}else{for(;!this.eof;)this.readBlock();var r=this.bufferLength}return this.pos=r,this.buffer.subarray(t,r)},lookChar:function(){for(var e=this.pos;this.bufferLength<=e;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var e=this.pos;this.bufferLength<=e;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},makeSubStream:function(e,t,r){for(var i=e+t;this.bufferLength<=i&&!this.eof;)this.readBlock();return new Stream(this.buffer,e,t,r)},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=0}},e}(),t=function(){function t(e){throw new Error(e)}function r(r){var i=0,s=r[i++],f=r[i++];(-1==s||-1==f)&&t("Invalid header in flate stream"),8!=(15&s)&&t("Unknown compression method in flate stream"),((s<<8)+f)%31!=0&&t("Bad FCHECK in flate stream"),32&f&&t("FDICT bit set in flate stream"),this.bytes=r,this.bytesPos=i,this.codeSize=0,this.codeBuf=0,e.call(this)}var i=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),f=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),n=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],o=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];return r.prototype=Object.create(e.prototype),r.prototype.getBits=function(e){for(var r,i=this.codeSize,s=this.codeBuf,f=this.bytes,n=this.bytesPos;e>i;)"undefined"==typeof(r=f[n++])&&t("Bad encoding in flate stream"),s|=r<<i,i+=8;return r=s&(1<<e)-1,this.codeBuf=s>>e,this.codeSize=i-=e,this.bytesPos=n,r},r.prototype.getCode=function(e){for(var r=e[0],i=e[1],s=this.codeSize,f=this.codeBuf,n=this.bytes,o=this.bytesPos;i>s;){var a;"undefined"==typeof(a=n[o++])&&t("Bad encoding in flate stream"),f|=a<<s,s+=8}var h=r[f&(1<<i)-1],u=h>>16,d=65535&h;return(0==s||u>s||0==u)&&t("Bad encoding in flate stream"),this.codeBuf=f>>u,this.codeSize=s-u,this.bytesPos=o,d},r.prototype.generateHuffmanTable=function(e){for(var t=e.length,r=0,i=0;t>i;++i)e[i]>r&&(r=e[i]);for(var s=1<<r,f=new Uint32Array(s),n=1,o=0,a=2;r>=n;++n,o<<=1,a<<=1)for(var h=0;t>h;++h)if(e[h]==n){for(var u=0,d=o,i=0;n>i;++i)u=u<<1|1&d,d>>=1;for(var i=u;s>i;i+=a)f[i]=n<<16|h;++o}return[f,r]},r.prototype.readBlock=function(){function e(e,t,r,i,s){for(var f=e.getBits(r)+i;f-- >0;)t[C++]=s}var r=this.getBits(3);if(1&r&&(this.eof=!0),r>>=1,0==r){var a,h=this.bytes,u=this.bytesPos;"undefined"==typeof(a=h[u++])&&t("Bad block header in flate stream");var d=a;"undefined"==typeof(a=h[u++])&&t("Bad block header in flate stream"),d|=a<<8,"undefined"==typeof(a=h[u++])&&t("Bad block header in flate stream");var c=a;"undefined"==typeof(a=h[u++])&&t("Bad block header in flate stream"),c|=a<<8,c!=(65535&~d)&&t("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0;var l=this.bufferLength,b=this.ensureBuffer(l+d),g=l+d;this.bufferLength=g;for(var v=l;g>v;++v){if("undefined"==typeof(a=h[u++])){this.eof=!0;break}b[v]=a}return void(this.bytesPos=u)}var y,B;if(1==r)y=n,B=o;else if(2==r){for(var p=this.getBits(5)+257,m=this.getBits(5)+1,k=this.getBits(4)+4,w=Array(i.length),C=0;k>C;)w[i[C++]]=this.getBits(3);for(var L=this.generateHuffmanTable(w),S=0,C=0,A=p+m,U=new Array(A);A>C;){var P=this.getCode(L);16==P?e(this,U,2,3,S):17==P?e(this,U,3,3,S=0):18==P?e(this,U,7,11,S=0):U[C++]=S=P}y=this.generateHuffmanTable(U.slice(0,p)),B=this.generateHuffmanTable(U.slice(p,A))}else t("Unknown block type in flate stream");for(var b=this.buffer,z=b?b.length:0,H=this.bufferLength;;){var T=this.getCode(y);if(256>T)H+1>=z&&(b=this.ensureBuffer(H+1),z=b.length),b[H++]=T;else{if(256==T)return void(this.bufferLength=H);T-=257,T=s[T];var E=T>>16;E>0&&(E=this.getBits(E));var S=(65535&T)+E;T=this.getCode(B),T=f[T],E=T>>16,E>0&&(E=this.getBits(E));var F=(65535&T)+E;H+S>=z&&(b=this.ensureBuffer(H+S),z=b.length);for(var I=0;S>I;++I,++H)b[H]=b[H-F]}}},r}();return t});