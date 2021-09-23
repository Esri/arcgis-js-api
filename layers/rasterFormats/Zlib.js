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

define([],(function(){var t=function(){function t(){this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=null}return t.prototype={ensureBuffer:function(t){var e=this.buffer,r=e?e.byteLength:0;if(t<r)return e;for(var i=512;i<t;)i<<=1;for(var s=new Uint8Array(i),f=0;f<r;++f)s[f]=e[f];return this.buffer=s},getByte:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},getBytes:function(t){var e=this.pos;if(t){this.ensureBuffer(e+t);for(var r=e+t;!this.eof&&this.bufferLength<r;)this.readBlock();var i=this.bufferLength;r>i&&(r=i)}else{for(;!this.eof;)this.readBlock();r=this.bufferLength}return this.pos=r,this.buffer.subarray(e,r)},lookChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},makeSubStream:function(t,e,r){for(var i=t+e;this.bufferLength<=i&&!this.eof;)this.readBlock();return new Stream(this.buffer,t,e,r)},skip:function(t){t||(t=1),this.pos+=t},reset:function(){this.pos=0}},t}();return function(){if(!self||!self.Uint32Array)return null;var e=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),r=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),i=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),s=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],f=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];function n(t){throw new Error(t)}function o(e){var r=0,i=e[r++],s=e[r++];-1!=i&&-1!=s||n("Invalid header in flate stream"),8!=(15&i)&&n("Unknown compression method in flate stream"),((i<<8)+s)%31!=0&&n("Bad FCHECK in flate stream"),32&s&&n("FDICT bit set in flate stream"),this.bytes=e,this.bytesPos=2,this.codeSize=0,this.codeBuf=0,t.call(this)}return o.prototype=Object.create(t.prototype),o.prototype.getBits=function(t){for(var e,r=this.codeSize,i=this.codeBuf,s=this.bytes,f=this.bytesPos;r<t;)void 0===(e=s[f++])&&n("Bad encoding in flate stream"),i|=e<<r,r+=8;return e=i&(1<<t)-1,this.codeBuf=i>>t,this.codeSize=r-=t,this.bytesPos=f,e},o.prototype.getCode=function(t){for(var e=t[0],r=t[1],i=this.codeSize,s=this.codeBuf,f=this.bytes,o=this.bytesPos;i<r;){var h;void 0===(h=f[o++])&&n("Bad encoding in flate stream"),s|=h<<i,i+=8}var a=e[s&(1<<r)-1],u=a>>16,l=65535&a;return(0==i||i<u||0==u)&&n("Bad encoding in flate stream"),this.codeBuf=s>>u,this.codeSize=i-u,this.bytesPos=o,l},o.prototype.generateHuffmanTable=function(t){for(var e=t.length,r=0,i=0;i<e;++i)t[i]>r&&(r=t[i]);for(var s=1<<r,f=new Uint32Array(s),n=1,o=0,h=2;n<=r;++n,o<<=1,h<<=1)for(var a=0;a<e;++a)if(t[a]==n){var u=0,l=o;for(i=0;i<n;++i)u=u<<1|1&l,l>>=1;for(i=u;i<s;i+=h)f[i]=n<<16|a;++o}return[f,r]},o.prototype.readBlock=function(){function t(t,e,r,i,s){for(var f=t.getBits(r)+i;f-- >0;)e[b++]=s}var o=this.getBits(3);if(1&o&&(this.eof=!0),0!=(o>>=1)){var h,a;if(1==o)h=s,a=f;else if(2==o){for(var u=this.getBits(5)+257,l=this.getBits(5)+1,c=this.getBits(4)+4,d=Array(e.length),b=0;b<c;)d[e[b++]]=this.getBits(3);for(var v=this.generateHuffmanTable(d),g=0,B=(b=0,u+l),y=new Array(B);b<B;){var p=this.getCode(v);16==p?t(this,y,2,3,g):17==p?t(this,y,3,3,g=0):18==p?t(this,y,7,11,g=0):y[b++]=g=p}h=this.generateHuffmanTable(y.slice(0,u)),a=this.generateHuffmanTable(y.slice(u,B))}else n("Unknown block type in flate stream");for(var m=(E=this.buffer)?E.length:0,k=this.bufferLength;;){var w=this.getCode(h);if(w<256)k+1>=m&&(m=(E=this.ensureBuffer(k+1)).length),E[k++]=w;else{if(256==w)return void(this.bufferLength=k);var C=(w=r[w-=257])>>16;C>0&&(C=this.getBits(C));g=(65535&w)+C;w=this.getCode(a),(C=(w=i[w])>>16)>0&&(C=this.getBits(C));var L=(65535&w)+C;k+g>=m&&(m=(E=this.ensureBuffer(k+g)).length);for(var S=0;S<g;++S,++k)E[k]=E[k-L]}}}else{var A,U=this.bytes,P=this.bytesPos;void 0===(A=U[P++])&&n("Bad block header in flate stream");var z=A;void 0===(A=U[P++])&&n("Bad block header in flate stream"),z|=A<<8,void 0===(A=U[P++])&&n("Bad block header in flate stream");var H=A;void 0===(A=U[P++])&&n("Bad block header in flate stream"),(H|=A<<8)!=(65535&~z)&&n("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0;var T=this.bufferLength,E=this.ensureBuffer(T+z),F=T+z;this.bufferLength=F;for(var I=T;I<F;++I){if(void 0===(A=U[P++])){this.eof=!0;break}E[I]=A}this.bytesPos=P}},o}()}));