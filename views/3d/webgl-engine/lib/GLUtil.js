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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["./GLVBO","./VertexBufferLayout","./Util","./gl-matrix","./webgl-debug"],function(e,r,t,E,T){var a=E.mat4d,i={texImage2D:function(e,r,E,T,a,R,n,u){return t.assert(e.width>=1&&e.height>=1),u===!0&&E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,!1),!n||t.isPowerOfTwo(e.width)&&t.isPowerOfTwo(e.height)?(E.bindTexture(E.TEXTURE_2D,r),E.texImage2D(E.TEXTURE_2D,0,E.RGBA,E.RGBA,E.UNSIGNED_BYTE,e)):(i.makePotTexture(e,r,E,T,a),E.bindTexture(E.TEXTURE_2D,r)),R?(E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MIN_FILTER,E.LINEAR_MIPMAP_LINEAR),E.generateMipmap(E.TEXTURE_2D)):E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MIN_FILTER,E.LINEAR),E.bindTexture(E.TEXTURE_2D,null),u===!0&&E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,!0),r},copyTextureToTexture:function(e,r,t,E,T,a,R,n,u){var f=u.createFramebuffer();u.bindFramebuffer(u.FRAMEBUFFER,f),u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,e,0),i.checkFramebufferStatus(u.FRAMEBUFFER,u),u.bindTexture(u.TEXTURE_2D,r),u.copyTexSubImage2D(u.TEXTURE_2D,0,T,a,t,E,R,n),u.generateMipmap(u.TEXTURE_2D),u.bindFramebuffer(u.FRAMEBUFFER,null),u.deleteFramebuffer(f)},makePotTexture:function(E,T,i,R,n){var u=t.nextHighestPowerOfTwo(E.width),f=t.nextHighestPowerOfTwo(E.height);t.assert(u!==E.width||f!==E.height);var o=i.createFramebuffer();i.bindFramebuffer(i.FRAMEBUFFER,o),i.bindTexture(i.TEXTURE_2D,T),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,u,f,0,i.RGBA,i.UNSIGNED_BYTE,null),i.generateMipmap(i.TEXTURE_2D),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,T,0);var _=i.createTexture();i.bindTexture(i.TEXTURE_2D,_),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,E),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST);var U=r.Defaults.PosTex,x=new e(t.createQuadVertexUvBuffer(),U,i);void 0===n&&(n=i.getParameter(i.VIEWPORT)),i.viewport(0,0,u,f);var F=R.get("texOnly");F.use();var m=a.identity();F.uniformMatrix4fv("model",m),F.uniformMatrix4fv("view",m),F.uniformMatrix4fv("proj",m),F.uniform4fv("color",[1,1,1,1]),F.uniform1i("tex",0),U.enableVertexAttribArrays(i,F),x.bind(),x.setPointers(F),i.disable(i.DEPTH_TEST),i.drawArrays(i.TRIANGLE_STRIP,0,x.getNum()),i.enable(i.DEPTH_TEST),U.disableVertexAttribArrays(i,F),i.viewport(n[0],n[1],n[2],n[3]),x.dispose(),i.deleteTexture(_),i.bindFramebuffer(i.FRAMEBUFFER,null),i.deleteFramebuffer(o)},createEmptyTexture:function(e){var r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,4,4,0,e.RGBA,e.UNSIGNED_BYTE,null),r},checkError:function(e,r){var t=r.getError();t!=r.NO_ERROR&&alert(e+": gl error "+t)},checkFramebufferStatus:function(e,r){var t=r.checkFramebufferStatus(e);t!=r.FRAMEBUFFER_COMPLETE&&console.log("Framebuffer error 0x"+t)},handleError:function(e,r,t){alert(T.glEnumToString(e)+" was caused by call to: "+r+"("+T.glFunctionArgsToString(r,t)+")")},validateNoneOfTheArgsAreUndefined:function(e,r){for(var t=0;t<r.length;++t)void 0===r[t]&&console.error("undefined passed to gl."+e+"("+T.glFunctionArgsToString(e,r)+")")}};return i});