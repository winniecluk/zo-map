!function t(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Raphael=r():e.Raphael=r()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var i,n;i=[r(1),r(3),r(4)],n=function(t){return t}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(2)],n=function(t){function e(r){if(e.is(r,"function"))return w?r():t.on("raphael.DOMload",r);if(e.is(r,Q))return e._engine.create[z](e,r.splice(0,3+e.is(r[0],$))).add(r);var i=Array.prototype.slice.call(arguments,0);if(e.is(i[i.length-1],"function")){var n=i.pop();return w?n.call(e._engine.create[z](e,i)):t.on("raphael.DOMload",function(){n.call(e._engine.create[z](e,i))})}return e._engine.create[z](e,arguments)}function r(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var i in t)t[A](i)&&(e[i]=r(t[i]));return e}function i(t,e){for(var r=0,i=t.length;r<i;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function n(t,e,r){function n(){var a=Array.prototype.slice.call(arguments,0),s=a.join("␀"),o=n.cache=n.cache||{},l=n.count=n.count||[];return o[A](s)?(i(l,s),r?r(o[s]):o[s]):(l.length>=1e3&&delete o[l.shift()],l.push(s),o[s]=t[z](e,a),r?r(o[s]):o[s])}return n}function a(){return this.hex}function s(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function o(t,e,r,i,n){var a=-3*e+9*r-9*i+3*n,s=t*a+6*e-12*r+6*i;return t*s-3*e+3*r}function l(t,e,r,i,n,a,s,l,h){null==h&&(h=1),h=h>1?1:h<0?0:h;for(var u=h/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;g<c;g++){var v=u*f[g]+u,x=o(v,t,r,n,s),y=o(v,e,i,a,l),m=x*x+y*y;d+=p[g]*Y.sqrt(m)}return u*d}function h(t,e,r,i,n,a,s,o,h){if(!(h<0||l(t,e,r,i,n,a,s,o)<h)){var u=1,c=u/2,f=u-c,p,d=.01;for(p=l(t,e,r,i,n,a,s,o,f);H(p-h)>d;)c/=2,f+=(p<h?1:-1)*c,p=l(t,e,r,i,n,a,s,o,f);return f}}function u(t,e,r,i,n,a,s,o){if(!(W(t,r)<G(n,s)||G(t,r)>W(n,s)||W(e,i)<G(a,o)||G(e,i)>W(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s);if(u){var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2);if(!(p<+G(t,r).toFixed(2)||p>+W(t,r).toFixed(2)||p<+G(n,s).toFixed(2)||p>+W(n,s).toFixed(2)||d<+G(e,i).toFixed(2)||d>+W(e,i).toFixed(2)||d<+G(a,o).toFixed(2)||d>+W(a,o).toFixed(2)))return{x:c,y:f}}}}function c(t,e){return p(t,e)}function f(t,e){return p(t,e,1)}function p(t,r,i){var n=e.bezierBBox(t),a=e.bezierBBox(r);if(!e.isBBoxIntersect(n,a))return i?0:[];for(var s=l.apply(0,t),o=l.apply(0,r),h=W(~~(s/5),1),c=W(~~(o/5),1),f=[],p=[],d={},g=i?0:[],v=0;v<h+1;v++){var x=e.findDotsAtSegment.apply(e,t.concat(v/h));f.push({x:x.x,y:x.y,t:v/h})}for(v=0;v<c+1;v++)x=e.findDotsAtSegment.apply(e,r.concat(v/c)),p.push({x:x.x,y:x.y,t:v/c});for(v=0;v<h;v++)for(var y=0;y<c;y++){var m=f[v],b=f[v+1],_=p[y],w=p[y+1],k=H(b.x-m.x)<.001?"y":"x",B=H(w.x-_.x)<.001?"y":"x",C=u(m.x,m.y,b.x,b.y,_.x,_.y,w.x,w.y);if(C){if(d[C.x.toFixed(4)]==C.y.toFixed(4))continue;d[C.x.toFixed(4)]=C.y.toFixed(4);var S=m.t+H((C[k]-m[k])/(b[k]-m[k]))*(b.t-m.t),A=_.t+H((C[B]-_[B])/(w[B]-_[B]))*(w.t-_.t);S>=0&&S<=1.001&&A>=0&&A<=1.001&&(i?g++:g.push({x:C.x,y:C.y,t1:G(S,1),t2:G(A,1)}))}}return g}function d(t,r,i){t=e._path2curve(t),r=e._path2curve(r);for(var n,a,s,o,l,h,u,c,f,d,g=i?0:[],v=0,x=t.length;v<x;v++){var y=t[v];if("M"==y[0])n=l=y[1],a=h=y[2];else{"C"==y[0]?(f=[n,a].concat(y.slice(1)),n=f[6],a=f[7]):(f=[n,a,n,a,l,h,l,h],n=l,a=h);for(var m=0,b=r.length;m<b;m++){var _=r[m];if("M"==_[0])s=u=_[1],o=c=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,u,c,u,c],s=u,o=c);var w=p(f,d,i);if(i)g+=w;else{for(var k=0,B=w.length;k<B;k++)w[k].segment1=v,w[k].segment2=m,w[k].bez1=f,w[k].bez2=d;g=g.concat(w)}}}}}return g}function g(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function v(){return this.x+j+this.y}function x(){return this.x+j+this.y+j+this.width+" × "+this.height}function y(t,e,r,i,n,a){function s(t){return((c*t+u)*t+h)*t}function o(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,i,n,a,o,l;for(n=t,l=0;l<8;l++){if(a=s(n)-t,H(a)<e)return n;if(o=(3*c*n+2*u)*n+h,H(o)<1e-6)break;n-=a/o}if(r=0,i=1,n=t,n<r)return r;if(n>i)return i;for(;r<i;){if(a=s(n),H(a-t)<e)return n;t>a?r=n:i=n,n=(i-r)/2+r}return n}var h=3*e,u=3*(i-e)-h,c=1-h-u,f=3*r,p=3*(n-r)-f,d=1-f-p;return o(t,1/(200*a))}function m(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[A](n)&&(i[ht(n)]=t[n],r.push(ht(n)));r.sort(Bt)}this.anim=i,this.top=r[r.length-1],this.percents=r}function b(r,i,n,a,s,o){n=ht(n);var l,h,u,c=[],f,p,d,v=r.ms,x={},m={},b={};if(a)for(w=0,B=Ee.length;w<B;w++){var _=Ee[w];if(_.el.id==i.id&&_.anim==r){_.percent!=n?(Ee.splice(w,1),u=1):h=_,i.attr(_.totalOrigin);break}}else a=+m;for(var w=0,B=r.percents.length;w<B;w++){if(r.percents[w]==n||r.percents[w]>a*r.top){n=r.percents[w],p=r.percents[w-1]||0,v=v/r.top*(n-p),f=r.percents[w+1],l=r.anim[n];break}a&&i.attr(r.anim[r.percents[w]])}if(l){if(h)h.initstatus=a,h.start=new Date-h.ms*a;else{for(var C in l)if(l[A](C)&&(pt[A](C)||i.paper.customAttributes[A](C)))switch(x[C]=i.attr(C),null==x[C]&&(x[C]=ft[C]),m[C]=l[C],pt[C]){case $:b[C]=(m[C]-x[C])/v;break;case"colour":x[C]=e.getRGB(x[C]);var S=e.getRGB(m[C]);b[C]={r:(S.r-x[C].r)/v,g:(S.g-x[C].g)/v,b:(S.b-x[C].b)/v};break;case"path":var T=Qt(x[C],m[C]),E=T[1];for(x[C]=T[0],b[C]=[],w=0,B=x[C].length;w<B;w++){b[C][w]=[0];for(var M=1,N=x[C][w].length;M<N;M++)b[C][w][M]=(E[w][M]-x[C][w][M])/v}break;case"transform":var L=i._,z=le(L[C],m[C]);if(z)for(x[C]=z.from,m[C]=z.to,b[C]=[],b[C].real=!0,w=0,B=x[C].length;w<B;w++)for(b[C][w]=[x[C][w][0]],M=1,N=x[C][w].length;M<N;M++)b[C][w][M]=(m[C][w][M]-x[C][w][M])/v;else{var F=i.matrix||new g,R={_:{transform:L.transform},getBBox:function(){return i.getBBox(1)}};x[C]=[F.a,F.b,F.c,F.d,F.e,F.f],se(R,m[C]),m[C]=R._.transform,b[C]=[(R.matrix.a-F.a)/v,(R.matrix.b-F.b)/v,(R.matrix.c-F.c)/v,(R.matrix.d-F.d)/v,(R.matrix.e-F.e)/v,(R.matrix.f-F.f)/v]}break;case"csv":var j=I(l[C])[q](k),D=I(x[C])[q](k);if("clip-rect"==C)for(x[C]=D,b[C]=[],w=D.length;w--;)b[C][w]=(j[w]-x[C][w])/v;m[C]=j;break;default:for(j=[][P](l[C]),D=[][P](x[C]),b[C]=[],w=i.paper.customAttributes[C].length;w--;)b[C][w]=((j[w]||0)-(D[w]||0))/v}var V=l.easing,O=e.easing_formulas[V];if(!O)if(O=I(V).match(st),O&&5==O.length){var Y=O;O=function(t){return y(t,+Y[1],+Y[2],+Y[3],+Y[4],v)}}else O=St;if(d=l.start||r.start||+new Date,_={anim:r,percent:n,timestamp:d,start:d+(r.del||0),status:0,initstatus:a||0,stop:!1,ms:v,easing:O,from:x,diff:b,to:m,el:i,callback:l.callback,prev:p,next:f,repeat:o||r.times,origin:i.attr(),totalOrigin:s},Ee.push(_),a&&!h&&!u&&(_.stop=!0,_.start=new Date-v*a,1==Ee.length))return Ne();u&&(_.start=new Date-_.ms*a),1==Ee.length&&Me(Ne)}t("raphael.anim.start."+i.id,i,r)}}function _(t){for(var e=0;e<Ee.length;e++)Ee[e].el.paper==t&&Ee.splice(e--,1)}e.version="2.2.0",e.eve=t;var w,k=/[, ]+/,B={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},C=/\{(\d+)\}/g,S="prototype",A="hasOwnProperty",T={doc:document,win:window},E={was:Object.prototype[A].call(T.win,"Raphael"),is:T.win.Raphael},M=function(){this.ca=this.customAttributes={}},N,L="appendChild",z="apply",P="concat",F="ontouchstart"in T.win||T.win.DocumentTouch&&T.doc instanceof DocumentTouch,R="",j=" ",I=String,q="split",D="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[q](j),V={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},O=I.prototype.toLowerCase,Y=Math,W=Y.max,G=Y.min,H=Y.abs,X=Y.pow,U=Y.PI,$="number",Z="string",Q="array",J="toString",K="fill",tt=Object.prototype.toString,et={},rt="push",it=e._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,nt=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,at={NaN:1,Infinity:1,"-Infinity":1},st=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,ot=Y.round,lt="setAttribute",ht=parseFloat,ut=parseInt,ct=I.prototype.toUpperCase,ft=e._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0,"class":""},pt=e._availableAnimAttrs={blur:$,"clip-rect":"csv",cx:$,cy:$,fill:"colour","fill-opacity":$,"font-size":$,height:$,opacity:$,path:"path",r:$,rx:$,ry:$,stroke:"colour","stroke-opacity":$,"stroke-width":$,transform:"transform",width:$,x:$,y:$},dt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,gt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,vt={hs:1,rg:1},xt=/,?([achlmqrstvxz]),?/gi,yt=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,mt=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,bt=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,_t=e._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,wt={},kt=function(t,e){return t.key-e.key},Bt=function(t,e){return ht(t)-ht(e)},Ct=function(){},St=function(t){return t},At=e._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},Tt=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},Et=e._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)}},Mt=e.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(t=Qt(t),n=0,s=t.length;n<s;n++)for(l=t[n],a=1,o=l.length;a<o;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(e._g=T,e.type=T.win.SVGAngle||T.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==e.type){var Nt=T.doc.createElement("div"),Lt;if(Nt.innerHTML='<v:shape adj="1"/>',Lt=Nt.firstChild,Lt.style.behavior="url(#default#VML)",!Lt||"object"!=typeof Lt.adj)return e.type=R;Nt=null}e.svg=!(e.vml="VML"==e.type),e._Paper=M,e.fn=N=M.prototype=e.prototype,e._id=0,e.is=function(t,e){return e=O.call(e),"finite"==e?!at[A](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||tt.call(t).slice(8,-1).toLowerCase()==e},e.angle=function(t,r,i,n,a,s){if(null==a){var o=t-i,l=r-n;return o||l?(180+180*Y.atan2(-l,-o)/U+360)%360:0}return e.angle(t,r,a,s)-e.angle(i,n,a,s)},e.rad=function(t){return t%360*U/180},e.deg=function(t){return Math.round(180*t/U%360*1e3)/1e3},e.snapTo=function(t,r,i){if(i=e.is(i,"finite")?i:10,e.is(t,Q)){for(var n=t.length;n--;)if(H(t[n]-r)<=i)return t[n]}else{t=+t;var a=r%t;if(a<i)return r-a;if(a>t-i)return r-a+t}return r};var zt=e.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=16*Y.random()|0,r="x"==t?e:3&e|8;return r.toString(16)});e.setWindow=function(r){t("raphael.setWindow",e,T.win,r),T.win=r,T.doc=T.win.document,e._engine.initWin&&e._engine.initWin(T.win)};var Pt=function(t){if(e.vml){var r=/^\s+|\s+$/g,i;try{var a=new ActiveXObject("htmlfile");a.write("<body>"),a.close(),i=a.body}catch(s){i=createPopup().document.body}var o=i.createTextRange();Pt=n(function(t){try{i.style.color=I(t).replace(r,R);var e=o.queryCommandValue("ForeColor");return e=(255&e)<<16|65280&e|(16711680&e)>>>16,"#"+("000000"+e.toString(16)).slice(-6)}catch(n){return"none"}})}else{var l=T.doc.createElement("i");l.title="Raphaël Colour Picker",l.style.display="none",T.doc.body.appendChild(l),Pt=n(function(t){return l.style.color=t,T.doc.defaultView.getComputedStyle(l,R).getPropertyValue("color")})}return Pt(t)},Ft=function(){return"hsb("+[this.h,this.s,this.b]+")"},Rt=function(){return"hsl("+[this.h,this.s,this.l]+")"},jt=function(){return this.hex},It=function(t,r,i){if(null==r&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,r=t.g,t=t.r),null==r&&e.is(t,Z)){var n=e.getRGB(t);t=n.r,r=n.g,i=n.b}return(t>1||r>1||i>1)&&(t/=255,r/=255,i/=255),[t,r,i]},qt=function(t,r,i,n){t*=255,r*=255,i*=255;var a={r:t,g:r,b:i,hex:e.rgb(t,r,i),toString:jt};return e.is(n,"finite")&&(a.opacity=n),a};e.color=function(t){var r;return e.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(r=e.hsb2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):e.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(r=e.hsl2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):(e.is(t,"string")&&(t=e.getRGB(t)),e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(r=e.rgb2hsl(t),t.h=r.h,t.s=r.s,t.l=r.l,r=e.rgb2hsb(t),t.v=r.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=jt,t},e.hsb2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,i=t.o,t=t.h),t*=360;var n,a,s,o,l;return t=t%360/60,l=r*e,o=l*(1-H(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.hsl2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var n,a,s,o,l;return t=t%360/60,l=2*e*(r<.5?r:1-r),o=l*(1-H(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.rgb2hsb=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s;return a=W(t,e,r),s=a-G(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=(i+360)%6*60/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:Ft}},e.rgb2hsl=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s,o,l;return s=W(t,e,r),o=G(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=(i+360)%6*60/360,a=(s+o)/2,n=0==l?0:a<.5?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:Rt}},e._path2string=function(){return this.join(",").replace(xt,"$1")};var Dt=e._preload=function(t,e){var r=T.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,T.doc.body.removeChild(this)},r.onerror=function(){T.doc.body.removeChild(this)},T.doc.body.appendChild(r),r.src=t};e.getRGB=n(function(t){if(!t||(t=I(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:a};!(vt[A](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=Pt(t));var r,i,n,s,o,l,h,u=t.match(nt);return u?(u[2]&&(s=ut(u[2].substring(5),16),n=ut(u[2].substring(3,5),16),i=ut(u[2].substring(1,3),16)),u[3]&&(s=ut((l=u[3].charAt(3))+l,16),n=ut((l=u[3].charAt(2))+l,16),i=ut((l=u[3].charAt(1))+l,16)),u[4]&&(h=u[4][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),"rgba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100)),u[5]?(h=u[5][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsb2rgb(i,n,s,o)):u[6]?(h=u[6][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsla"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsl2rgb(i,n,s,o)):(u={r:i,g:n,b:s,toString:a},u.hex="#"+(16777216|s|n<<8|i<<16).toString(16).slice(1),e.is(o,"finite")&&(u.opacity=o),u)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a}},e),e.hsb=n(function(t,r,i){return e.hsb2rgb(t,r,i).hex}),e.hsl=n(function(t,r,i){return e.hsl2rgb(t,r,i).hex}),e.rgb=n(function(t,e,r){function i(t){return t+.5|0}return"#"+(16777216|i(r)|i(e)<<8|i(t)<<16).toString(16).slice(1)}),e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},e.getColor.reset=function(){delete this.start},e.parsePathString=function(t){if(!t)return null;var r=Vt(t);if(r.arr)return Yt(r.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return e.is(t,Q)&&e.is(t[0],Q)&&(n=Yt(t)),n.length||I(t).replace(yt,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(bt,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][P](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][P](a));else for(;a.length>=i[s]&&(n.push([e][P](a.splice(0,i[s]))),i[s]););}),n.toString=e._path2string,r.arr=Yt(n),n},e.parseTransformString=n(function(t){if(!t)return null;var r={r:3,s:4,t:2,m:6},i=[];return e.is(t,Q)&&e.is(t[0],Q)&&(i=Yt(t)),i.length||I(t).replace(mt,function(t,e,r){var n=[],a=O.call(e);r.replace(bt,function(t,e){e&&n.push(+e)}),i.push([e][P](n))}),i.toString=e._path2string,i});var Vt=function(t){var e=Vt.ps=Vt.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[A](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};e.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=X(h,3),c=X(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,v=t+2*l*(r-t)+f*(n-2*r+t),x=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,B=90-180*Y.atan2(v-y,x-m)/U;return(v>y||x<m)&&(B+=180),{x:d,y:g,m:{x:v,y:x},n:{x:y,y:m},start:{x:b,y:_},end:{x:w,y:k},alpha:B}},e.bezierBBox=function(t,r,i,n,a,s,o,l){e.is(t,"array")||(t=[t,r,i,n,a,s,o,l]);var h=Zt.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},e.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},e.isBBoxIntersect=function(t,r){var i=e.isPointInsideBBox;return i(r,t.x,t.y)||i(r,t.x2,t.y)||i(r,t.x,t.y2)||i(r,t.x2,t.y2)||i(t,r.x,r.y)||i(t,r.x2,r.y)||i(t,r.x,r.y2)||i(t,r.x2,r.y2)||(t.x<r.x2&&t.x>r.x||r.x<t.x2&&r.x>t.x)&&(t.y<r.y2&&t.y>r.y||r.y<t.y2&&r.y>t.y)},e.pathIntersection=function(t,e){return d(t,e)},e.pathIntersectionNumber=function(t,e){return d(t,e,1)},e.isPointInsidePath=function(t,r,i){var n=e.pathBBox(t);return e.isPointInsideBBox(n,r,i)&&d(t,[["M",r,i],["H",n.x2+10]],1)%2==1},e._removedFactory=function(e){return function(){t("raphael.log",null,"Raphaël: you are calling to method “"+e+"” of removed object",e)}};var Ot=e.pathBBox=function(t){var e=Vt(t);if(e.bbox)return r(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Qt(t);for(var i=0,n=0,a=[],s=[],o,l=0,h=t.length;l<h;l++)if(o=t[l],"M"==o[0])i=o[1],n=o[2],a.push(i),s.push(n);else{var u=Zt(i,n,o[1],o[2],o[3],o[4],o[5],o[6]);a=a[P](u.min.x,u.max.x),s=s[P](u.min.y,u.max.y),i=o[5],n=o[6]}var c=G[z](0,a),f=G[z](0,s),p=W[z](0,a),d=W[z](0,s),g=p-c,v=d-f,x={x:c,y:f,x2:p,y2:d,width:g,height:v,cx:c+g/2,cy:f+v/2};return e.bbox=r(x),x},Yt=function(t){var i=r(t);return i.toString=e._path2string,i},Wt=e._pathToRelative=function(t){var r=Vt(t);if(r.rel)return Yt(r.rel);e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(n=t[0][1],a=t[0][2],s=n,o=a,l++,i.push(["M",n,a]));for(var h=l,u=t.length;h<u;h++){var c=i[h]=[],f=t[h];if(f[0]!=O.call(f[0]))switch(c[0]=O.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;p<d;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,v=f.length;g<v;g++)i[h][g]=f[g]}var x=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][x-1];break;case"v":a+=+i[h][x-1];break;default:n+=+i[h][x-2],a+=+i[h][x-1]}}return i.toString=e._path2string,r.rel=Yt(i),i},Gt=e._pathToAbsolute=function(t){var r=Vt(t);if(r.abs)return Yt(r.abs);if(e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t)),!t||!t.length)return[["M",0,0]];var i=[],n=0,a=0,o=0,l=0,h=0;"M"==t[0][0]&&(n=+t[0][1],a=+t[0][2],o=n,l=a,h++,i[0]=["M",n,a]);for(var u=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),c,f,p=h,d=t.length;p<d;p++){if(i.push(c=[]),f=t[p],f[0]!=ct.call(f[0]))switch(c[0]=ct.call(f[0]),c[0]){case"A":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]+n),c[7]=+(f[7]+a);break;case"V":c[1]=+f[1]+a;break;case"H":c[1]=+f[1]+n;break;case"R":for(var g=[n,a][P](f.slice(1)),v=2,x=g.length;v<x;v++)g[v]=+g[v]+n,g[++v]=+g[v]+a;i.pop(),i=i[P](s(g,u));break;case"M":o=+f[1]+n,l=+f[2]+a;default:for(v=1,x=f.length;v<x;v++)c[v]=+f[v]+(v%2?n:a)}else if("R"==f[0])g=[n,a][P](f.slice(1)),i.pop(),i=i[P](s(g,u)),c=["R"][P](f.slice(-2));else for(var y=0,m=f.length;y<m;y++)c[y]=f[y];switch(c[0]){case"Z":n=o,a=l;break;case"H":n=c[1];break;case"V":a=c[1];break;case"M":o=c[c.length-2],l=c[c.length-1];default:n=c[c.length-2],a=c[c.length-1]}}return i.toString=e._path2string,r.abs=Yt(i),i},Ht=function(t,e,r,i){return[t,e,r,i,r,i]},Xt=function(t,e,r,i,n,a){var s=1/3,o=2/3;return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},Ut=function(t,e,r,i,a,s,o,l,h,u){var c=120*U/180,f=U/180*(+a||0),p=[],d,g=n(function(t,e,r){var i=t*Y.cos(r)-e*Y.sin(r),n=t*Y.sin(r)+e*Y.cos(r);return{x:i,y:n}});if(u)S=u[0],A=u[1],B=u[2],C=u[3];else{d=g(t,e,-f),t=d.x,e=d.y,d=g(l,h,-f),l=d.x,h=d.y;var v=Y.cos(U/180*a),x=Y.sin(U/180*a),y=(t-l)/2,m=(e-h)/2,b=y*y/(r*r)+m*m/(i*i);b>1&&(b=Y.sqrt(b),r=b*r,i=b*i);var _=r*r,w=i*i,k=(s==o?-1:1)*Y.sqrt(H((_*w-_*m*m-w*y*y)/(_*m*m+w*y*y))),B=k*r*m/i+(t+l)/2,C=k*-i*y/r+(e+h)/2,S=Y.asin(((e-C)/i).toFixed(9)),A=Y.asin(((h-C)/i).toFixed(9));S=t<B?U-S:S,A=l<B?U-A:A,S<0&&(S=2*U+S),A<0&&(A=2*U+A),o&&S>A&&(S-=2*U),!o&&A>S&&(A-=2*U)}var T=A-S;if(H(T)>c){var E=A,M=l,N=h;A=S+c*(o&&A>S?1:-1),l=B+r*Y.cos(A),h=C+i*Y.sin(A),p=Ut(l,h,r,i,a,0,o,M,N,[A,E,B,C])}T=A-S;var L=Y.cos(S),z=Y.sin(S),F=Y.cos(A),R=Y.sin(A),j=Y.tan(T/4),I=4/3*r*j,D=4/3*i*j,V=[t,e],O=[t+I*z,e-D*L],W=[l+I*R,h-D*F],G=[l,h];if(O[0]=2*V[0]-O[0],O[1]=2*V[1]-O[1],u)return[O,W,G][P](p);p=[O,W,G][P](p).join()[q](",");for(var X=[],$=0,Z=p.length;$<Z;$++)X[$]=$%2?g(p[$-1],p[$],f).y:g(p[$],p[$+1],f).x;return X},$t=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:X(h,3)*t+3*X(h,2)*l*r+3*h*l*l*n+X(l,3)*s,y:X(h,3)*e+3*X(h,2)*l*i+3*h*l*l*a+X(l,3)*o}},Zt=n(function(t,e,r,i,n,a,s,o){var l=n-2*r+t-(s-2*n+r),h=2*(r-t)-2*(n-r),u=t-r,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,p=[e,o],d=[t,s],g;return H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&c<1&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&f<1&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),l=a-2*i+e-(o-2*a+i),h=2*(i-e)-2*(a-i),u=e-i,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&c<1&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&f<1&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),{min:{x:G[z](0,d),y:G[z](0,p)},max:{x:W[z](0,d),y:W[z](0,p)}}}),Qt=e._path2curve=n(function(t,e){var r=!e&&Vt(t);if(!e&&r.curve)return Yt(r.curve);for(var i=Gt(t),n=e&&Gt(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e,r){var i,n,a={T:1,Q:1};if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in a)&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][P](Ut[z](0,[e.x,e.y][P](t.slice(1))));break;case"S":"C"==r||"S"==r?(i=2*e.x-e.bx,n=2*e.y-e.by):(i=e.x,n=e.y),t=["C",i,n][P](t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][P](Xt(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][P](Xt(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][P](Ht(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][P](Ht(e.x,e.y,t[1],e.y));break;case"V":t=["C"][P](Ht(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][P](Ht(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)u[e]="A",n&&(c[e]="A"),t.splice(e++,0,["C"][P](r.splice(0,6)));t.splice(e,1),g=W(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],g=W(i.length,n&&n.length||0))},u=[],c=[],f="",p="",d=0,g=W(i.length,n&&n.length||0);d<g;d++){i[d]&&(f=i[d][0]),"C"!=f&&(u[d]=f,d&&(p=u[d-1])),i[d]=o(i[d],a,p),"A"!=u[d]&&"C"==f&&(u[d]="C"),l(i,d),n&&(n[d]&&(f=n[d][0]),"C"!=f&&(c[d]=f,d&&(p=c[d-1])),n[d]=o(n[d],s,p),"A"!=c[d]&&"C"==f&&(c[d]="C"),l(n,d)),h(i,n,a,s,d),h(n,i,s,a,d);var v=i[d],x=n&&n[d],y=v.length,m=n&&x.length;a.x=v[y-2],a.y=v[y-1],a.bx=ht(v[y-4])||a.x,a.by=ht(v[y-3])||a.y,s.bx=n&&(ht(x[m-4])||s.x),s.by=n&&(ht(x[m-3])||s.y),s.x=n&&x[m-2],s.y=n&&x[m-1]}return n||(r.curve=Yt(i)),n?[i,n]:i},null,Yt),Jt=e._parseDots=n(function(t){for(var r=[],i=0,n=t.length;i<n;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=e.getRGB(s[1]),a.color.error)return null;a.opacity=a.color.opacity,a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),r.push(a)}for(i=1,n=r.length-1;i<n;i++)if(!r[i].offset){for(var o=ht(r[i-1].offset||0),l=0,h=i+1;h<n;h++)if(r[h].offset){l=r[h].offset;break}l||(l=100,h=n),l=ht(l);for(var u=(l-o)/(h-i+1);i<h;i++)o+=u,r[i].offset=o+"%"}return r}),Kt=e._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)},te=e._tofront=function(t,e){e.top!==t&&(Kt(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},ee=e._toback=function(t,e){e.bottom!==t&&(Kt(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},re=e._insertafter=function(t,e,r){Kt(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},ie=e._insertbefore=function(t,e,r){Kt(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},ne=e.toMatrix=function(t,e){var r=Ot(t),i={_:{transform:R},getBBox:function(){return r}};return se(i,e),i.matrix},ae=e.transformPath=function(t,e){return Mt(t,ne(t,e))},se=e._extractTransform=function(t,r){if(null==r)return t._.transform;r=I(r).replace(/\.{3}|\u2026/g,t._.transform||R);var i=e.parseTransformString(r),n=0,a=0,s=0,o=1,l=1,h=t._,u=new g;if(h.transform=i||[],i)for(var c=0,f=i.length;c<f;c++){var p=i[c],d=p.length,v=I(p[0]).toLowerCase(),x=p[0]!=v,y=x?u.invert():0,m,b,_,w,k;"t"==v&&3==d?x?(m=y.x(0,0),b=y.y(0,0),_=y.x(p[1],p[2]),w=y.y(p[1],p[2]),u.translate(_-m,w-b)):u.translate(p[1],p[2]):"r"==v?2==d?(k=k||t.getBBox(1),u.rotate(p[1],k.x+k.width/2,k.y+k.height/2),n+=p[1]):4==d&&(x?(_=y.x(p[2],p[3]),w=y.y(p[2],p[3]),u.rotate(p[1],_,w)):u.rotate(p[1],p[2],p[3]),n+=p[1]):"s"==v?2==d||3==d?(k=k||t.getBBox(1),u.scale(p[1],p[d-1],k.x+k.width/2,k.y+k.height/2),o*=p[1],l*=p[d-1]):5==d&&(x?(_=y.x(p[3],p[4]),w=y.y(p[3],p[4]),u.scale(p[1],p[2],_,w)):u.scale(p[1],p[2],p[3],p[4]),o*=p[1],l*=p[2]):"m"==v&&7==d&&u.add(p[1],p[2],p[3],p[4],p[5],p[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=n,h.dx=a=u.e,h.dy=s=u.f,1==o&&1==l&&!n&&h.bbox?(h.bbox.x+=+a,h.bbox.y+=+s):h.dirtyT=1},oe=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},le=e._equaliseTransform=function(t,r){r=I(r).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],r=e.parseTransformString(r)||[];for(var i=W(t.length,r.length),n=[],a=[],s=0,o,l,h,u;s<i;s++){if(h=t[s]||oe(r[s]),u=r[s]||oe(h),h[0]!=u[0]||"r"==h[0].toLowerCase()&&(h[2]!=u[2]||h[3]!=u[3])||"s"==h[0].toLowerCase()&&(h[3]!=u[3]||h[4]!=u[4]))return;for(n[s]=[],a[s]=[],o=0,l=W(h.length,u.length);o<l;o++)o in h&&(n[s][o]=h[o]),o in u&&(a[s][o]=u[o])}return{from:n,to:a}};e._getContainer=function(t,r,i,n){var a;if(a=null!=n||e.is(t,"object")?t:T.doc.getElementById(t),null!=a)return a.tagName?null==r?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:r,height:i}:{container:1,x:t,y:r,width:i,height:n}},e.pathToRelative=Wt,e._engine={},e.path2curve=Qt,e.matrix=function(t,e,r,i,n,a){return new g(t,e,r,i,n,a)},function(t){function r(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var e=Y.sqrt(r(t));t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}t.add=function(t,e,r,i,n,a){var s=[[],[],[]],o=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],l=[[t,r,n],[e,i,a],[0,0,1]],h,u,c,f;for(t&&t instanceof g&&(l=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),h=0;h<3;h++)for(u=0;u<3;u++){for(f=0,c=0;c<3;c++)f+=o[h][c]*l[c][u];s[h][u]=f}this.a=s[0][0],this.b=s[1][0],this.c=s[0][1],this.d=s[1][1],this.e=s[0][2],this.f=s[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new g(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new g(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){
this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,r,i){t=e.rad(t),r=r||0,i=i||0;var n=+Y.cos(t).toFixed(9),a=+Y.sin(t).toFixed(9);this.add(n,a,-a,n,r,i),this.add(1,0,0,1,-r,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[I.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return e.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=Y.sqrt(r(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=Y.sqrt(r(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return s<0?(t.rotate=e.deg(Y.acos(s)),a<0&&(t.rotate=360-t.rotate)):t.rotate=e.deg(Y.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[q]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:R)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:R)+(e.rotate?"r"+[e.rotate,0,0]:R)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(g.prototype);for(var he=function(){this.returnValue=!1},ue=function(){return this.originalEvent.preventDefault()},ce=function(){this.cancelBubble=!0},fe=function(){return this.originalEvent.stopPropagation()},pe=function(t){var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,r=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;return{x:t.clientX+r,y:t.clientY+e}},de=function(){return T.doc.addEventListener?function(t,e,r,i){var n=function(t){var e=pe(t);return r.call(i,t,e.x,e.y)};if(t.addEventListener(e,n,!1),F&&V[e]){var a=function(e){for(var n=pe(e),a=e,s=0,o=e.targetTouches&&e.targetTouches.length;s<o;s++)if(e.targetTouches[s].target==t){e=e.targetTouches[s],e.originalEvent=a,e.preventDefault=ue,e.stopPropagation=fe;break}return r.call(i,e,n.x,n.y)};t.addEventListener(V[e],a,!1)}return function(){return t.removeEventListener(e,n,!1),F&&V[e]&&t.removeEventListener(V[e],a,!1),!0}}:T.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||T.win.event;var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,n=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||he,t.stopPropagation=t.stopPropagation||ce,r.call(i,t,a,s)};t.attachEvent("on"+e,n);var a=function(){return t.detachEvent("on"+e,n),!0};return a}:void 0}(),ge=[],ve=function(e){for(var r=e.clientX,i=e.clientY,n=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,a=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,s,o=ge.length;o--;){if(s=ge[o],F&&e.touches){for(var l=e.touches.length,h;l--;)if(h=e.touches[l],h.identifier==s.el._drag.id){r=h.clientX,i=h.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var u=s.el.node,c,f=u.nextSibling,p=u.parentNode,d=u.style.display;T.win.opera&&p.removeChild(u),u.style.display="none",c=s.el.paper.getElementByPoint(r,i),u.style.display=d,T.win.opera&&(f?p.insertBefore(u,f):p.appendChild(u)),c&&t("raphael.drag.over."+s.el.id,s.el,c),r+=a,i+=n,t("raphael.drag.move."+s.el.id,s.move_scope||s.el,r-s.el._drag.x,i-s.el._drag.y,r,i,e)}},xe=function(r){e.unmousemove(ve).unmouseup(xe);for(var i=ge.length,n;i--;)n=ge[i],n.el._drag={},t("raphael.drag.end."+n.el.id,n.end_scope||n.start_scope||n.move_scope||n.el,r);ge=[]},ye=e.el={},me=D.length;me--;)!function(t){e[t]=ye[t]=function(r,i){return e.is(r,"function")&&(this.events=this.events||[],this.events.push({name:t,f:r,unbind:de(this.shape||this.node||T.doc,t,r,i||this)})),this},e["un"+t]=ye["un"+t]=function(r){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!e.is(r,"undefined")&&i[n].f!=r||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);return this}}(D[me]);ye.data=function(r,i){var n=wt[this.id]=wt[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(e.is(r,"object")){for(var a in r)r[A](a)&&this.data(a,r[a]);return this}return t("raphael.data.get."+this.id,this,n[r],r),n[r]}return n[r]=i,t("raphael.data.set."+this.id,this,i,r),this},ye.removeData=function(t){return null==t?wt[this.id]={}:wt[this.id]&&delete wt[this.id][t],this},ye.getData=function(){return r(wt[this.id]||{})},ye.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},ye.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var be=[];ye.drag=function(r,i,n,a,s,o){function l(l){(l.originalEvent||l).preventDefault();var h=l.clientX,u=l.clientY,c=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,f=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;if(this._drag.id=l.identifier,F&&l.touches)for(var p=l.touches.length,d;p--;)if(d=l.touches[p],this._drag.id=d.identifier,d.identifier==this._drag.id){h=d.clientX,u=d.clientY;break}this._drag.x=h+f,this._drag.y=u+c,!ge.length&&e.mousemove(ve).mouseup(xe),ge.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&t.on("raphael.drag.start."+this.id,i),r&&t.on("raphael.drag.move."+this.id,r),n&&t.on("raphael.drag.end."+this.id,n),t("raphael.drag.start."+this.id,s||a||this,l.clientX+f,l.clientY+c,l)}return this._drag={},be.push({el:this,start:l}),this.mousedown(l),this},ye.onDragOver=function(e){e?t.on("raphael.drag.over."+this.id,e):t.unbind("raphael.drag.over."+this.id)},ye.undrag=function(){for(var r=be.length;r--;)be[r].el==this&&(this.unmousedown(be[r].start),be.splice(r,1),t.unbind("raphael.drag.*."+this.id));!be.length&&e.unmousemove(ve).unmouseup(xe),ge=[]},N.circle=function(t,r,i){var n=e._engine.circle(this,t||0,r||0,i||0);return this.__set__&&this.__set__.push(n),n},N.rect=function(t,r,i,n,a){var s=e._engine.rect(this,t||0,r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},N.ellipse=function(t,r,i,n){var a=e._engine.ellipse(this,t||0,r||0,i||0,n||0);return this.__set__&&this.__set__.push(a),a},N.path=function(t){t&&!e.is(t,Z)&&!e.is(t[0],Q)&&(t+=R);var r=e._engine.path(e.format[z](e,arguments),this);return this.__set__&&this.__set__.push(r),r},N.image=function(t,r,i,n,a){var s=e._engine.image(this,t||"about:blank",r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},N.text=function(t,r,i){var n=e._engine.text(this,t||0,r||0,I(i));return this.__set__&&this.__set__.push(n),n},N.set=function(t){!e.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var r=new ze(t);return this.__set__&&this.__set__.push(r),r.paper=this,r.type="set",r},N.setStart=function(t){this.__set__=t||this.set()},N.setFinish=function(t){var e=this.__set__;return delete this.__set__,e},N.getSize=function(){var t=this.canvas.parentNode;return{width:t.offsetWidth,height:t.offsetHeight}},N.setSize=function(t,r){return e._engine.setSize.call(this,t,r)},N.setViewBox=function(t,r,i,n,a){return e._engine.setViewBox.call(this,t,r,i,n,a)},N.top=N.bottom=null,N.raphael=e;var _e=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,o=e.top+(T.win.pageYOffset||n.scrollTop||i.scrollTop)-a,l=e.left+(T.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s;return{y:o,x:l}};N.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=T.doc.elementFromPoint(t,e);if(T.win.opera&&"svg"==n.tagName){var a=_e(i),s=i.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=i.getIntersectionList(s,null);o.length&&(n=o[o.length-1])}if(!n)return null;for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode;return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null},N.getElementsByBBox=function(t){var r=this.set();return this.forEach(function(i){e.isBBoxIntersect(i.getBBox(),t)&&r.push(i)}),r},N.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},N.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;r=r.next}return this},N.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},ye.isPointInside=function(t,r){var i=this.realPath=Et[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(i=e.transformPath(i,this.attr("transform"))),e.isPointInsidePath(i,t,r)},ye.getBBox=function(t){if(this.removed)return{};var e=this._;return t?(!e.dirty&&e.bboxwt||(this.realPath=Et[this.type](this),e.bboxwt=Ot(this.realPath),e.bboxwt.toString=x,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&(!e.dirty&&this.realPath||(e.bboxwt=0,this.realPath=Et[this.type](this)),e.bbox=Ot(Mt(this.realPath,this.matrix)),e.bbox.toString=x,e.dirty=e.dirtyT=0),e.bbox)},ye.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},ye.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:null==t.opacity?.5:t.opacity,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||Et[this.type](this);a=this.matrix?Mt(a,this.matrix):a;for(var s=1;s<r+1;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var we={},ke=function(t,r,i,n,a,s,o,u,c){return null==c?l(t,r,i,n,a,s,o,u):e.findDotsAtSegment(t,r,i,n,a,s,o,u,h(t,r,i,n,a,s,o,u,c))},Be=function(t,r){return function(i,n,a){i=Qt(i);for(var s,o,l,h,u="",c={},f,p=0,d=0,g=i.length;d<g;d++){if(l=i[d],"M"==l[0])s=+l[1],o=+l[2];else{if(h=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6]),p+h>n){if(r&&!c.start){if(f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),u+=["C"+f.start.x,f.start.y,f.m.x,f.m.y,f.x,f.y],a)return u;c.start=u,u=["M"+f.x,f.y+"C"+f.n.x,f.n.y,f.end.x,f.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&&!r)return f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),{x:f.x,y:f.y,alpha:f.alpha}}p+=h,s=+l[5],o=+l[6]}u+=l.shift()+l}return c.end=u,f=t?p:r?c:e.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1),f.alpha&&(f={x:f.x,y:f.y,alpha:f.alpha}),f}},Ce=Be(1),Se=Be(),Ae=Be(0,1);e.getTotalLength=Ce,e.getPointAtLength=Se,e.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return Ae(t,e).end;var i=Ae(t,r,1);return e?Ae(i,e).end:i},ye.getTotalLength=function(){var t=this.getPath();if(t)return this.node.getTotalLength?this.node.getTotalLength():Ce(t)},ye.getPointAtLength=function(t){var e=this.getPath();if(e)return Se(e,t)},ye.getPath=function(){var t,r=e._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return r&&(t=r(this)),t},ye.getSubpath=function(t,r){var i=this.getPath();if(i)return e.getSubpath(i,t,r)};var Te=e.easing_formulas={linear:function(t){return t},"<":function(t){return X(t,1.7)},">":function(t){return X(t,.48)},"<>":function(t){var e=.48-t/1.04,r=Y.sqrt(.1734+e*e),i=r-e,n=X(H(i),1/3)*(i<0?-1:1),a=-r-e,s=X(H(a),1/3)*(a<0?-1:1),o=n+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:X(2,-10*t)*Y.sin((t-.075)*(2*U)/.3)+1},bounce:function(t){var e=7.5625,r=2.75,i;return t<1/r?i=e*t*t:t<2/r?(t-=1.5/r,i=e*t*t+.75):t<2.5/r?(t-=2.25/r,i=e*t*t+.9375):(t-=2.625/r,i=e*t*t+.984375),i}};Te.easeIn=Te["ease-in"]=Te["<"],Te.easeOut=Te["ease-out"]=Te[">"],Te.easeInOut=Te["ease-in-out"]=Te["<>"],Te["back-in"]=Te.backIn,Te["back-out"]=Te.backOut;var Ee=[],Me=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},Ne=function(){for(var r=+new Date,i=0;i<Ee.length;i++){var n=Ee[i];if(!n.el.removed&&!n.paused){var a=r-n.start,s=n.ms,o=n.easing,l=n.from,h=n.diff,u=n.to,c=n.t,f=n.el,p={},d,g={},v;if(n.initstatus?(a=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*s,n.status=n.initstatus,delete n.initstatus,n.stop&&Ee.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(a/s))/n.anim.top,!(a<0))if(a<s){var x=o(a/s);for(var y in l)if(l[A](y)){switch(pt[y]){case $:d=+l[y]+x*s*h[y];break;case"colour":d="rgb("+[Le(ot(l[y].r+x*s*h[y].r)),Le(ot(l[y].g+x*s*h[y].g)),Le(ot(l[y].b+x*s*h[y].b))].join(",")+")";break;case"path":d=[];for(var m=0,_=l[y].length;m<_;m++){d[m]=[l[y][m][0]];for(var w=1,k=l[y][m].length;w<k;w++)d[m][w]=+l[y][m][w]+x*s*h[y][m][w];d[m]=d[m].join(j)}d=d.join(j);break;case"transform":if(h[y].real)for(d=[],m=0,_=l[y].length;m<_;m++)for(d[m]=[l[y][m][0]],w=1,k=l[y][m].length;w<k;w++)d[m][w]=l[y][m][w]+x*s*h[y][m][w];else{var B=function(t){return+l[y][t]+x*s*h[y][t]};d=[["m",B(0),B(1),B(2),B(3),B(4),B(5)]]}break;case"csv":if("clip-rect"==y)for(d=[],m=4;m--;)d[m]=+l[y][m]+x*s*h[y][m];break;default:var C=[][P](l[y]);for(d=[],m=f.paper.customAttributes[y].length;m--;)d[m]=+C[m]+x*s*h[y][m]}p[y]=d}f.attr(p),function(e,r,i){setTimeout(function(){t("raphael.anim.frame."+e,r,i)})}(f.id,f,n.anim)}else{if(function(r,i,n){setTimeout(function(){t("raphael.anim.frame."+i.id,i,n),t("raphael.anim.finish."+i.id,i,n),e.is(r,"function")&&r.call(i)})}(n.callback,f,n.anim),f.attr(u),Ee.splice(i--,1),n.repeat>1&&!n.next){for(v in u)u[A](v)&&(g[v]=n.totalOrigin[v]);n.el.attr(g),b(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&b(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}Ee.length&&Me(Ne)},Le=function(t){return t>255?255:t<0?0:t};ye.animateWith=function(t,r,i,n,a,s){var o=this;if(o.removed)return s&&s.call(o),o;var l=i instanceof m?i:e.animation(i,n,a,s),h,u;b(l,o,l.percents[0],null,o.attr());for(var c=0,f=Ee.length;c<f;c++)if(Ee[c].anim==r&&Ee[c].el==t){Ee[f-1].start=Ee[c].start;break}return o},ye.onAnimation=function(e){return e?t.on("raphael.anim.frame."+this.id,e):t.unbind("raphael.anim.frame."+this.id),this},m.prototype.delay=function(t){var e=new m(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},m.prototype.repeat=function(t){var e=new m(this.anim,this.ms);return e.del=this.del,e.times=Y.floor(W(t,0))||1,e},e.animation=function(t,r,i,n){if(t instanceof m)return t;!e.is(i,"function")&&i||(n=n||i||null,i=null),t=Object(t),r=+r||0;var a={},s,o;for(o in t)t[A](o)&&ht(o)!=o&&ht(o)+"%"!=o&&(s=!0,a[o]=t[o]);if(s)return i&&(a.easing=i),n&&(a.callback=n),new m({100:a},r);if(n){var l=0;for(var h in t){var u=ut(h);t[A](h)&&u>l&&(l=u)}l+="%",!t[l].callback&&(t[l].callback=n)}return new m(t,r)},ye.animate=function(t,r,i,n){var a=this;if(a.removed)return n&&n.call(a),a;var s=t instanceof m?t:e.animation(t,r,i,n);return b(s,a,s.percents[0],null,a.attr()),a},ye.setTime=function(t,e){return t&&null!=e&&this.status(t,G(e,t.ms)/t.ms),this},ye.status=function(t,e){var r=[],i=0,n,a;if(null!=e)return b(t,this,-1,G(e,1)),this;for(n=Ee.length;i<n;i++)if(a=Ee[i],a.el.id==this.id&&(!t||a.anim==t)){if(t)return a.status;r.push({anim:a.anim,status:a.status})}return t?0:r},ye.pause=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.pause."+this.id,this,Ee[r].anim)!==!1&&(Ee[r].paused=!0);return this},ye.resume=function(e){for(var r=0;r<Ee.length;r++)if(Ee[r].el.id==this.id&&(!e||Ee[r].anim==e)){var i=Ee[r];t("raphael.anim.resume."+this.id,this,i.anim)!==!1&&(delete i.paused,this.status(i.anim,i.status))}return this},ye.stop=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.stop."+this.id,this,Ee[r].anim)!==!1&&Ee.splice(r--,1);return this},t.on("raphael.remove",_),t.on("raphael.clear",_),ye.toString=function(){return"Raphaël’s object"};var ze=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;e<r;e++)!t[e]||t[e].constructor!=ye.constructor&&t[e].constructor!=ze||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},Pe=ze.prototype;Pe.push=function(){for(var t,e,r=0,i=arguments.length;r<i;r++)t=arguments[r],!t||t.constructor!=ye.constructor&&t.constructor!=ze||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},Pe.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},Pe.forEach=function(t,e){for(var r=0,i=this.items.length;r<i;r++)if(t.call(e,this.items[r],r)===!1)return this;return this};for(var Fe in ye)ye[A](Fe)&&(Pe[Fe]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][z](r,e)})}}(Fe));return Pe.attr=function(t,r){if(t&&e.is(t,Q)&&e.is(t[0],"object"))for(var i=0,n=t.length;i<n;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;a<s;a++)this.items[a].attr(t,r);return this},Pe.clear=function(){for(;this.length;)this.pop()},Pe.splice=function(t,e,r){t=t<0?W(this.length+t,0):t,e=W(0,G(this.length-t,e));var i=[],n=[],a=[],s;for(s=2;s<arguments.length;s++)a.push(arguments[s]);for(s=0;s<e;s++)n.push(this[t+s]);for(;s<this.length-t;s++)i.push(this[t+s]);var o=a.length;for(s=0;s<o+i.length;s++)this.items[t+s]=this[t+s]=s<o?a[s]:i[s-o];for(s=this.items.length=this.length-=e-o;this[s];)delete this[s++];return new ze(n)},Pe.exclude=function(t){for(var e=0,r=this.length;e<r;e++)if(this[e]==t)return this.splice(e,1),!0},Pe.animate=function(t,r,i,n){(e.is(i,"function")||!i)&&(n=i||null);var a=this.items.length,s=a,o,l=this,h;if(!a)return this;n&&(h=function(){!--a&&n.call(l)}),i=e.is(i,Z)?i:h;var u=e.animation(t,r,i,h);for(o=this.items[--s].animate(u);s--;)this.items[s]&&!this.items[s].removed&&this.items[s].animateWith(o,u,u),this.items[s]&&!this.items[s].removed||a--;return this},Pe.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},Pe.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=G[z](0,t),e=G[z](0,e),r=W[z](0,r),i=W[z](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}},Pe.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;e<r;e++)t.push(this.items[e].clone());return t},Pe.toString=function(){return"Raphaël‘s set"},Pe.glow=function(t){var e=this.paper.set();return this.forEach(function(r,i){var n=r.glow(t);null!=n&&n.forEach(function(t,r){e.push(t)})}),e},Pe.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){if(i.isPointInside(t,e))return r=!0,!1}),r},e.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var i in t.face)t.face[A](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=ut(t.face["units-per-em"],10);for(var n in t.glyphs)if(t.glyphs[A](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[A](s)&&(e.glyphs[n].k[s]=a.k[s])}}return t},N.getFont=function(t,r,i,n){if(n=n||"normal",i=i||"normal",r=+r||{normal:400,bold:700,lighter:300,bolder:800}[r]||400,e.fonts){var a=e.fonts[t];if(!a){var s=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,R)+"(\\s|$)","i");for(var o in e.fonts)if(e.fonts[A](o)&&s.test(o)){a=e.fonts[o];break}}var l;if(a)for(var h=0,u=a.length;h<u&&(l=a[h],l.face["font-weight"]!=r||l.face["font-style"]!=i&&l.face["font-style"]||l.face["font-stretch"]!=n);h++);return l}},N.print=function(t,r,i,n,a,s,o,l){s=s||"middle",o=W(G(o||0,1),-1),l=W(G(l||1,3),1);var h=I(i)[q](R),u=0,c=0,f=R,p;if(e.is(n,"string")&&(n=this.getFont(n)),n){p=(a||16)/n.face["units-per-em"];for(var d=n.face.bbox[q](k),g=+d[0],v=d[3]-d[1],x=0,y=+d[1]+("baseline"==s?v+ +n.face.descent:v/2),m=0,b=h.length;m<b;m++){if("\n"==h[m])u=0,w=0,c=0,x+=v*l;else{var _=c&&n.glyphs[h[m-1]]||{},w=n.glyphs[h[m]];u+=c?(_.w||n.w)+(_.k&&_.k[h[m]]||0)+n.w*o:0,c=1}w&&w.d&&(f+=e.transformPath(w.d,["t",u*p,x*p,"s",p,p,g,y,"t",(t-g)/p,(r-y)/p]))}}return this.path(f).attr({fill:"#000",stroke:"none"})},N.add=function(t){if(e.is(t,"array"))for(var r=this.set(),i=0,n=t.length,a;i<n;i++)a=t[i]||{},B[A](a.type)&&r.push(this[a.type]().attr(a));return r},e.format=function(t,r){var i=e.is(r,Q)?[0][P](r):arguments;return t&&e.is(t,Z)&&i.length-1&&(t=t.replace(C,function(t,e){return null==i[++e]?R:i[e]})),t||R},e.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i;return r.replace(e,function(t,e,r,i,a){e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&a&&(n=n()))}),n=(null==n||n==i?t:n)+""};return function(e,i){return String(e).replace(t,function(t,e){return r(t,e,i)})}}(),e.ninja=function(){if(E.was)T.win.Raphael=E.is;else{window.Raphael=void 0;try{delete window.Raphael}catch(t){}}return e},e.st=Pe,t.on("raphael.DOMload",function(){w=!0}),function(t,r,i){function n(){/in/.test(t.readyState)?setTimeout(n,9):e.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(r,i=function(){t.removeEventListener(r,i,!1),t.readyState="complete"},!1),t.readyState="loading"),n()}(document,"DOMContentLoaded"),e}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;!function(r){var a="0.5.0",s="hasOwnProperty",o=/[\.\/]/,l=/\s*,\s*/,h="*",u=function(){},c=function(t,e){return t-e},f,p,d={n:{}},g=function(){for(var t=0,e=this.length;t<e;t++)if("undefined"!=typeof this[t])return this[t]},v=function(){for(var t=this.length;--t;)if("undefined"!=typeof this[t])return this[t]},x=Object.prototype.toString,y=String,m=Array.isArray||function(t){return t instanceof Array||"[object Array]"==x.call(t)};eve=function(t,e){var r=d,i=p,n=Array.prototype.slice.call(arguments,2),a=eve.listeners(t),s=0,o=!1,l,h=[],u={},x=[],y=f,m=[];x.firstDefined=g,x.lastDefined=v,f=t,p=0;for(var b=0,_=a.length;b<_;b++)"zIndex"in a[b]&&(h.push(a[b].zIndex),a[b].zIndex<0&&(u[a[b].zIndex]=a[b]));for(h.sort(c);h[s]<0;)if(l=u[h[s++]],x.push(l.apply(e,n)),p)return p=i,x;for(b=0;b<_;b++)if(l=a[b],"zIndex"in l)if(l.zIndex==h[s]){if(x.push(l.apply(e,n)),p)break;do if(s++,l=u[h[s]],l&&x.push(l.apply(e,n)),p)break;while(l)}else u[l.zIndex]=l;else if(x.push(l.apply(e,n)),p)break;return p=i,f=y,x},eve._events=d,eve.listeners=function(t){var e=m(t)?t:t.split(o),r=d,i,n,a,s,l,u,c,f,p=[r],g=[];for(s=0,l=e.length;s<l;s++){for(f=[],u=0,c=p.length;u<c;u++)for(r=p[u].n,n=[r[e[s]],r[h]],a=2;a--;)i=n[a],i&&(f.push(i),g=g.concat(i.f||[]));p=f}return g},eve.separator=function(t){t?(t=y(t).replace(/(?=[\.\^\]\[\-])/g,"\\"),t="["+t+"]",o=new RegExp(t)):o=/[\.\/]/},eve.on=function(t,e){if("function"!=typeof e)return function(){};for(var r=m(t)?m(t[0])?t:[t]:y(t).split(l),i=0,n=r.length;i<n;i++)!function(t){for(var r=m(t)?t:y(t).split(o),i=d,n,a=0,s=r.length;a<s;a++)i=i.n,i=i.hasOwnProperty(r[a])&&i[r[a]]||(i[r[a]]={n:{}});for(i.f=i.f||[],a=0,s=i.f.length;a<s;a++)if(i.f[a]==e){n=!0;break}!n&&i.f.push(e)}(r[i]);return function(t){+t==+t&&(e.zIndex=+t)}},eve.f=function(t){var e=[].slice.call(arguments,1);return function(){eve.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},eve.stop=function(){p=1},eve.nt=function(t){var e=m(f)?f.join("."):f;return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},eve.nts=function(){return m(f)?f:f.split(o)},eve.off=eve.unbind=function(t,e){if(!t)return void(eve._events=d={n:{}});var r=m(t)?m(t[0])?t:[t]:y(t).split(l);if(r.length>1)for(var i=0,n=r.length;i<n;i++)eve.off(r[i],e);else{r=m(t)?t:y(t).split(o);var a,u,c,i,n,f,p,g=[d];for(i=0,n=r.length;i<n;i++)for(f=0;f<g.length;f+=c.length-2){if(c=[f,1],a=g[f].n,r[i]!=h)a[r[i]]&&c.push(a[r[i]]);else for(u in a)a[s](u)&&c.push(a[u]);g.splice.apply(g,c)}for(i=0,n=g.length;i<n;i++)for(a=g[i];a.n;){if(e){if(a.f){for(f=0,p=a.f.length;f<p;f++)if(a.f[f]==e){a.f.splice(f,1);break}!a.f.length&&delete a.f}for(u in a.n)if(a.n[s](u)&&a.n[u].f){var v=a.n[u].f;for(f=0,p=v.length;f<p;f++)if(v[f]==e){v.splice(f,1);break}!v.length&&delete a.n[u].f}}else{delete a.f;for(u in a.n)a.n[s](u)&&a.n[u].f&&delete a.n[u].f}a=a.n}}},eve.once=function(t,e){var r=function(){return eve.off(t,r),e.apply(this,arguments)};return eve.on(t,r)},eve.version=a,eve.toString=function(){return"You are running Eve "+a},"undefined"!=typeof t&&t.exports?t.exports=eve:(i=[],n=function(){return eve}.apply(e,i),!(void 0!==n&&(t.exports=n)))}(this)},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.svg){var e="hasOwnProperty",r=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=t.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};t.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var v=function(i,n){if(n){"string"==typeof i&&(i=v(i));for(var a in n)n[e](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),r(n[a])):i.setAttribute(a,r(n[a])))}else i=t._g.doc.createElementNS("http://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");return i},x=function(e,n){var h="linear",u=e.id+n,f=.5,p=.5,d=e.node,g=e.paper,x=d.style,y=t._g.doc.getElementById(u);if(!y){if(n=r(n).replace(t._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e),p=i(r);var n=2*(p>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c}),n=n.split(/\s*\-\s*/),"linear"==h){var b=n.shift();if(b=-i(b),isNaN(b))return null;var _=[0,0,a.cos(t.rad(b)),a.sin(t.rad(b))],w=1/(s(o(_[2]),o(_[3]))||1);_[2]*=w,_[3]*=w,_[2]<0&&(_[0]=-_[2],_[2]=0),_[3]<0&&(_[1]=-_[3],_[3]=0)}var k=t._parseDots(n);if(!k)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&u!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){y=v(h+"Gradient",{id:u}),e.gradient=y,v(y,"radial"==h?{fx:f,fy:p}:{x1:_[0],y1:_[1],x2:_[2],y2:_[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(y);for(var B=0,C=k.length;B<C;B++)y.appendChild(v("stop",{offset:k[B].offset?k[B].offset:B?"100%":"0%","stop-color":k[B].color||"#fff","stop-opacity":isFinite(k[B].opacity)?k[B].opacity:1}))}}return v(d,{fill:m(u),opacity:1,"fill-opacity":1}),x.fill=c,x.opacity=1,x.fillOpacity=1,1},y=function(){var t=document.documentMode;return t&&(9===t||10===t)},m=function(t){if(y())return"url('#"+t+"')";var e=document.location,r=e.protocol+"//"+e.host+e.pathname+e.search;return"url('"+r+"#"+t+"')"},b=function(t){var e=t.getBBox(1);v(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},_=function(i,n,a){if("path"==i.type){for(var s=r(n).toLowerCase().split("-"),o=i.paper,l=a?"end":"start",h=i.node,u=i.attrs,f=u["stroke-width"],p=s.length,x="classic",y,m,b,_,w,k=3,B=3,C=5;p--;)switch(s[p]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":x=s[p];break;case"wide":B=5;break;case"narrow":B=2;break;case"long":k=5;break;case"short":k=2}if("open"==x?(k+=2,B+=2,C+=2,b=1,_=a?4:1,w={fill:"none",stroke:u.stroke}):(_=b=k/2,w={fill:u.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=x){var S="raphael-marker-"+x,A="raphael-marker-"+l+x+k+B+"-obj"+i.id;t._g.doc.getElementById(S)?g[S]++:(o.defs.appendChild(v(v("path"),{"stroke-linecap":"round",d:d[x],id:S})),g[S]=1);var T=t._g.doc.getElementById(A),E;T?(g[A]++,E=T.getElementsByTagName("use")[0]):(T=v(v("marker"),{id:A,markerHeight:B,markerWidth:k,orient:"auto",refX:_,refY:B/2}),E=v(v("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+B/2+") ":c)+"scale("+k/C+","+B/C+")","stroke-width":(1/((k/C+B/C)/2)).toFixed(4)}),T.appendChild(E),o.defs.appendChild(T),g[A]=1),v(E,w);var M=b*("diamond"!=x&&"oval"!=x);a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-M*f):(y=M*f,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),w={},w["marker-"+l]="url(#"+A+")",(m||y)&&(w.d=t.getSubpath(u.path,y,m)),v(h,w),i._.arrows[l+"Path"]=S,i._.arrows[l+"Marker"]=A,i._.arrows[l+"dx"]=M,i._.arrows[l+"Type"]=x,i._.arrows[l+"String"]=n}else a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-y):(y=0,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),i._.arrows[l+"Path"]&&v(h,{d:t.getSubpath(u.path,y,m)}),delete i._.arrows[l+"Path"],delete i._.arrows[l+"Marker"],delete i._.arrows[l+"dx"],delete i._.arrows[l+"Type"],delete i._.arrows[l+"String"];for(w in g)if(g[e](w)&&!g[w]){var N=t._g.doc.getElementById(w);N&&N.parentNode.removeChild(N)}}},w={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},k=function(t,e,i){if(e=w[r(e).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=e.length;o--;)s[o]=e[o]*n+(o%2?1:-1)*a;v(t.node,{"stroke-dasharray":s.join(",")})}else v(t.node,{"stroke-dasharray":"none"})},B=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;l.style.visibility="hidden";for(var d in a)if(a[e](d)){if(!t._availableAttrs[e](d))continue;var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"title":var y=l.getElementsByTagName("title");if(y.length&&(y=y[0]))y.firstChild.nodeValue=g;else{y=v("title");var m=t._g.doc.createTextNode(g);y.appendChild(m),l.appendChild(y)}break;case"href":case"target":var w=l.parentNode;if("a"!=w.tagName.toLowerCase()){var B=v("a");w.insertBefore(B,l),B.appendChild(l),w=B}"target"==d?w.setAttributeNS(p,"show","blank"==g?"new":g):w.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":_(i,g);break;case"arrow-end":_(i,g,1);break;case"clip-rect":var C=r(g).split(h);if(4==C.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var A=v("clipPath"),T=v("rect");A.id=t.createUUID(),v(T,{x:C[0],y:C[1],width:C[2],height:C[3]}),A.appendChild(T),i.paper.defs.appendChild(A),v(l,{"clip-path":"url(#"+A.id+")"}),i.clip=T}if(!g){var E=l.getAttribute("clip-path");if(E){var M=t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g,c));M&&M.parentNode.removeChild(M),v(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(v(l,{d:g?u.path=t._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"r":"rect"==i.type?v(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":1==i._.sx&&1==i._.sy||(g/=s(o(i._.sx),o(i._.sy))||1),l.setAttribute(d,g),u["stroke-dasharray"]&&k(i,u["stroke-dasharray"],a),
i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"stroke-dasharray":k(i,g,a);break;case"fill":var N=r(g).match(t._ISURL);if(N){A=v("pattern");var L=v("image");A.id=t.createUUID(),v(A,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),v(L,{x:0,y:0,"xlink:href":N[1]}),A.appendChild(L),function(e){t._preload(N[1],function(){var t=this.offsetWidth,r=this.offsetHeight;v(e,{width:t,height:r}),v(L,{width:t,height:r})})}(A),i.paper.defs.appendChild(A),v(l,{fill:"url(#"+A.id+")"}),i.pattern=A,i.pattern&&b(i);break}var z=t.getRGB(g);if(z.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g)){if("opacity"in u||"fill-opacity"in u){var P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(P){var F=P.getElementsByTagName("stop");v(F[F.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!t.is(u.opacity,"undefined")&&t.is(a.opacity,"undefined")&&v(l,{opacity:u.opacity}),!t.is(u["fill-opacity"],"undefined")&&t.is(a["fill-opacity"],"undefined")&&v(l,{"fill-opacity":u["fill-opacity"]});z[e]("opacity")&&v(l,{"fill-opacity":z.opacity>1?z.opacity/100:z.opacity});case"stroke":z=t.getRGB(g),l.setAttribute(d,z.hex),"stroke"==d&&z[e]("opacity")&&v(l,{"stroke-opacity":z.opacity>1?z.opacity/100:z.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g);break;case"opacity":u.gradient&&!u[e]("stroke-opacity")&&v(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(u.gradient){P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)),P&&(F=P.getElementsByTagName("stop"),v(F[F.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=n(g,10)+"px");var R=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[R]=g,i._.dirty=1,l.setAttribute(d,g)}}S(i,a),l.style.visibility=f},C=1.2,S=function(i,a){if("text"==i.type&&(a[e]("text")||a[e]("font")||a[e]("font-size")||a[e]("x")||a[e]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[e]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h=r(a.text).split("\n"),u=[],f,p=0,d=h.length;p<d;p++)f=v("tspan"),p&&v(f,{dy:l*C,x:s.x}),f.appendChild(t._g.doc.createTextNode(h[p])),o.appendChild(f),u[p]=f}else for(u=o.getElementsByTagName("tspan"),p=0,d=u.length;p<d;p++)p?v(u[p],{dy:l*C,x:s.x}):v(u[0],{dy:0});v(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),x=s.y-(g.y+g.height/2);x&&t.is(x,"finite")&&v(u[0],{dy:x})}},A=function(t){return t.parentNode&&"a"===t.parentNode.tagName.toLowerCase()?t.parentNode:t},T=function(e,r){function i(){return("0000"+(Math.random()*Math.pow(36,5)<<0).toString(36)).slice(-5)}var n=0,a=0;this[0]=this.node=e,e.raphael=!0,this.id=i(),e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},E=t.el;T.prototype=E,E.constructor=T,t._engine.path=function(t,e){var r=v("path");e.canvas&&e.canvas.appendChild(r);var i=new T(r,e);return i.type="path",B(i,{fill:"none",stroke:"#000",path:t}),i},E.rotate=function(t,e,n){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,e,n]])),this},E.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this},E.translate=function(t,e){return this.removed?this:(t=r(t).split(h),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},E.transform=function(r){var i=this._;if(null==r)return i.transform;if(t._extractTransform(this,r),this.clip&&v(this.clip,{transform:this.matrix.invert()}),this.pattern&&b(this),this.node&&v(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return this},E.hide=function(){return this.removed||(this.node.style.display="none"),this},E.show=function(){return this.removed||(this.node.style.display=""),this},E.remove=function(){var e=A(this.node);if(!this.removed&&e.parentNode){var r=this.paper;r.__set__&&r.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&r.defs.removeChild(this.gradient),t._tear(this,r),e.parentNode.removeChild(e),this.removeData();for(var i in this)this[i]="function"==typeof this[i]?t._removedFactory(i):null;this.removed=!0}},E._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e=!1,r;this.paper.canvas.parentElement?r=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(r=this.paper.canvas.parentNode.style),r&&"none"==r.display&&(e=!0,r.display="");var i={};try{i=this.node.getBBox()}catch(n){i={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{i=i||{},e&&(r.display="none")}return t&&this.hide(),i},E.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==r)return this._.transform;for(var s=r.split(h),o={},l=0,c=s.length;l<c;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return c-1?o:o[s[0]]}if(null==i&&t.is(r,"array")){for(o={},l=0,c=r.length;l<c;l++)o[r[l]]=this.attr(r[l]);return o}if(null!=i){var f={};f[r]=i}else null!=r&&t.is(r,"object")&&(f=r);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[e](g)&&(f[g]=d[g])}return B(this,f),this},E.toFront=function(){if(this.removed)return this;var e=A(this.node);e.parentNode.appendChild(e);var r=this.paper;return r.top!=this&&t._tofront(this,r),this},E.toBack=function(){if(this.removed)return this;var e=A(this.node),r=e.parentNode;r.insertBefore(e,r.firstChild),t._toback(this,this.paper);var i=this.paper;return this},E.insertAfter=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[e.length-1].node);return i.nextSibling?i.parentNode.insertBefore(r,i.nextSibling):i.parentNode.appendChild(r),t._insertafter(this,e,this.paper),this},E.insertBefore=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[0].node);return i.parentNode.insertBefore(r,i),t._insertbefore(this,e,this.paper),this},E.blur=function(e){var r=this;if(0!==+e){var i=v("filter"),n=v("feGaussianBlur");r.attrs.blur=e,i.id=t.createUUID(),v(n,{stdDeviation:+e||1.5}),i.appendChild(n),r.paper.defs.appendChild(i),r._blur=i,v(r.node,{filter:"url(#"+i.id+")"})}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute("filter");return r},t._engine.circle=function(t,e,r,i){var n=v("circle");t.canvas&&t.canvas.appendChild(n);var a=new T(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",v(n,a.attrs),a},t._engine.rect=function(t,e,r,i,n,a){var s=v("rect");t.canvas&&t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:e,y:r,width:i,height:n,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",v(s,o.attrs),o},t._engine.ellipse=function(t,e,r,i,n){var a=v("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new T(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",v(a,s.attrs),s},t._engine.image=function(t,e,r,i,n,a){var s=v("image");v(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},t._engine.text=function(e,r,i,n){var a=v("text");e.canvas&&e.canvas.appendChild(a);var s=new T(a,e);return s.attrs={x:r,y:i,"text-anchor":"middle",text:n,"font-family":t._availableAttrs["font-family"],"font-size":t._availableAttrs["font-size"],stroke:"none",fill:"#000"},s.type="text",B(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&&e.container,i=e.x,n=e.y,a=e.width,s=e.height;if(!r)throw new Error("SVG container not found.");var o=v("svg"),l="overflow:hidden;",h;return i=i||0,n=n||0,a=a||512,s=s||342,v(o,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==r?(o.style.cssText=l+"position:absolute;left:"+i+"px;top:"+n+"px",t._g.doc.body.appendChild(o),h=1):(o.style.cssText=l+"position:relative",r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o)),r=new t._Paper,r.width=a,r.height=s,r.canvas=o,r.clear(),r._left=r._top=0,h&&(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);var a=this.getSize(),o=s(r/a.width,i/a.height),l=this.top,h=n?"xMidYMid meet":"xMinYMin",c,p;for(null==t?(this._vbSize&&(o=1),delete this._vbSize,c="0 0 "+this.width+f+this.height):(this._vbSize=o,c=t+f+e+f+r+f+i),v(this.canvas,{viewBox:c,preserveAspectRatio:h});o&&l;)p="stroke-width"in l.attrs?l.attrs["stroke-width"]:1,l.attr({"stroke-width":p}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[t,e,r,i,!!n],this},t.prototype.renderfix=function(){var t=this.canvas,e=t.style,r;try{r=t.getScreenCTM()||t.createSVGMatrix()}catch(i){r=t.createSVGMatrix()}var n=-r.e%1,a=-r.f%1;(n||a)&&(n&&(this._left=(this._left+n)%1,e.left=this._left+"px"),a&&(this._top=(this._top+a)%1,e.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=v("defs"))},t.prototype.remove=function(){u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null};var M=t.st;for(var N in E)E[e](N)&&!M[e](N)&&(M[N]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(N))}}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.vml){var e="hasOwnProperty",r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=t.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},v=/([clmz]),?([^clmz]*)/gi,x=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute;if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){var s=r(e).replace(v,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))}),s+i});return s}var o=n(e),l,h;s=[];for(var u=0,c=o.length;u<c;u++){l=o[u],h=o[u][0].toLowerCase(),"z"==h&&(h="x");for(var f=1,x=l.length;f<x;f++)h+=a(l[f]*b)+(f!=x-1?",":d);s.push(h)}return s.join(p)},B=function(e,r,i){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},C=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",v,x=b/e,y=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(x)+p+l(y),f.rotation=a*(e*r<0?-1:1),a){var m=B(a,i,n);i=m.dx,n=m.dy}if(e<0&&(g+="x"),r<0&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-x+p+n*-y,u||s.fillsize){var _=c.getElementsByTagName(h);_=_&&_[0],c.removeChild(_),u&&(m=B(a,o.x(u[0],u[1]),o.y(u[0],u[1])),_.position=m.dx*d+p+m.dy*d),s.fillsize&&(_.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(_)}f.visibility="visible"}};t.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var S=function(t,e,i){for(var n=r(e).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},A=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,v,x=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),y=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),m=n;for(var B in l)l[e](B)&&(f[B]=l[B]);if(x&&(f.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||x)&&(c.path=k(~r(f.path).toLowerCase().indexOf("r")?t._pathToAbsolute(f.path):f.path),n._.dirty=1,"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],C(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),y){var A=+f.cx,E=+f.cy,M=+f.rx||+f.r||0,L=+f.ry||+f.r||0;c.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((A-M)*b),a((E-L)*b),a((A+M)*b),a((E+L)*b),a(A*b)),n._.dirty=1}if("clip-rect"in l){var z=r(l["clip-rect"]).split(u);if(4==z.length){z[2]=+z[2]+ +z[0],z[3]=+z[3]+ +z[1];var P=c.clipRect||t._g.doc.createElement("div"),F=P.style;F.clip=t.format("rect({1}px {2}px {3}px {0}px)",z),c.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",c.parentNode.insertBefore(P,c),P.appendChild(c),c.clipRect=P)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var R=n.textpath.style;l.font&&(R.font=l.font),l["font-family"]&&(R.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(R.fontSize=l["font-size"]),l["font-weight"]&&(R.fontWeight=l["font-weight"]),l["font-style"]&&(R.fontStyle=l["font-style"])}if("arrow-start"in l&&S(m,l["arrow-start"]),"arrow-end"in l&&S(m,l["arrow-end"],1),null!=l.opacity||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var j=c.getElementsByTagName(h),I=!1;if(j=j&&j[0],!j&&(I=j=N(h)),"image"==n.type&&l.src&&(j.src=l.src),l.fill&&(j.on=!0),null!=j.on&&"none"!=l.fill&&null!==l.fill||(j.on=!1),j.on&&l.fill){var q=r(l.fill).match(t._ISURL);if(q){j.parentNode==c&&c.removeChild(j),j.rotate=!0,j.src=q[1],j.type="tile";var D=n.getBBox(1);j.position=D.x+p+D.y,n._.fillpos=[D.x,D.y],t._preload(q[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else j.color=t.getRGB(l.fill).hex,j.src=d,j.type="solid",t.getRGB(l.fill).error&&(m.type in{circle:1,ellipse:1}||"r"!=r(l.fill).charAt())&&T(m,l.fill,j)&&(f.fill="none",f.gradient=l.fill,j.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var V=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);V=o(s(V,0),1),j.opacity=V,j.src&&(j.color="none")}c.appendChild(j);var O=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],Y=!1;!O&&(Y=O=N("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var W=t.getRGB(l.stroke);O.on&&l.stroke&&(O.color=W.hex),V=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+W.o+1||2)-1);var G=.75*(i(l["stroke-width"])||1);if(V=o(s(V,0),1),null==l["stroke-width"]&&(G=f["stroke-width"]),l["stroke-width"]&&(O.weight=G),G&&G<1&&(V*=G)&&(O.weight=1),O.opacity=V,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),"stroke-dasharray"in l){var H={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=H[e](l["stroke-dasharray"])?H[l["stroke-dasharray"]]:d}Y&&c.appendChild(O)}if("text"==m.type){m.paper.canvas.style.display=d;var X=m.paper.span,U=100,$=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=X.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),$=i(f["font-size"]||$&&$[0])||10,g.fontSize=$*U+"px",m.textpath.string&&(X.innerHTML=r(m.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var Z=X.getBoundingClientRect();m.W=f.w=(Z.right-Z.left)/U,m.H=f.h=(Z.bottom-Z.top)/U,m.X=f.x,m.Y=f.y+m.H/2,("x"in l||"y"in l)&&(m.path.v=t.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Q=["x","y","text","font","font-family","font-weight","font-style","font-size"],J=0,K=Q.length;J<K;J++)if(Q[J]in l){m._.dirty=1;break}switch(f["text-anchor"]){case"start":m.textpath.style["v-text-align"]="left",m.bbx=m.W/2;break;case"end":m.textpath.style["v-text-align"]="right",m.bbx=-m.W/2;break;default:m.textpath.style["v-text-align"]="center",m.bbx=0}m.textpath.style["v-text-kern"]=!0}},T=function(e,a,s){e.attrs=e.attrs||{};var o=e.attrs,l=Math.pow,h,u,c="linear",f=".5 .5";if(e.attrs.gradient=a,a=r(a).replace(t._radial_gradient,function(t,e,r){return c="radial",e&&r&&(e=i(e),r=i(r),l(e-.5,2)+l(r-.5,2)>.25&&(r=n.sqrt(.25-l(e-.5,2))*(2*(r>.5)-1)+.5),f=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==c){var g=a.shift();if(g=-i(g),isNaN(g))return null}var v=t._parseDots(a);if(!v)return null;if(e=e.shape||e.node,v.length){e.removeChild(s),s.on=!0,s.method="none",s.color=v[0].color,s.color2=v[v.length-1].color;for(var x=[],y=0,m=v.length;y<m;y++)v[y].offset&&x.push(v[y].offset+p+v[y].color);s.colors=x.length?x.join():"0% "+s.color,"radial"==c?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=f,s.angle=0):(s.type="gradient",s.angle=(270-g)%360),e.appendChild(s)}return 1},E=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},M=t.el;E.prototype=M,M.constructor=E,M.transform=function(e){if(null==e)return this._.transform;var i=this.paper._viewBoxShift,n=i?"s"+[i.scale,i.scale]+"-1-1t"+[i.dx,i.dy]:d,a;i&&(a=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||d)),t._extractTransform(this,n+e);var s=this.matrix.clone(),o=this.skew,l=this.node,h,u=~r(this.attrs.fill).indexOf("-"),c=!r(this.attrs.fill).indexOf("url(");if(s.translate(1,1),c||u||"image"==this.type)if(o.matrix="1 0 0 1",o.offset="0 0",h=s.split(),u&&h.noRotation||!h.isSimple){l.style.filter=s.toFilter();var f=this.getBBox(),g=this.getBBox(1),v=f.x-g.x,x=f.y-g.y;l.coordorigin=v*-b+p+x*-b,C(this,1,1,v,x,0)}else l.style.filter=d,C(this,h.scalex,h.scaley,h.dx,h.dy,h.rotate);else l.style.filter=d,o.matrix=r(s),o.offset=s.offset();return null!==a&&(this._.transform=a,t._extractTransform(this,a)),this},M.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},M.translate=function(t,e){return this.removed?this:(t=r(t).split(u),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},M.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this._.dirtyT=1,this},M.hide=function(){return!this.removed&&(this.node.style.display="none"),this},M.show=function(){return!this.removed&&(this.node.style.display=d),this},M.auxGetBBox=t.el.getBBox,M.getBBox=function(){var t=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var e={},r=1/this.paper._viewBoxShift.scale;return e.x=t.x-this.paper._viewBoxShift.dx,e.x*=r,e.y=t.y-this.paper._viewBoxShift.dy,e.y*=r,e.width=t.width*r,e.height=t.height*r,e.x2=e.x+e.width,e.y2=e.y+e.height,e}return t},M._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},M.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},M.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if(r==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=r.split(u),o={},l=0,f=s.length;l<f;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return f-1?o:o[s[0]]}if(this.attrs&&null==i&&t.is(r,"array")){for(o={},l=0,f=r.length;l<f;l++)o[r[l]]=this.attr(r[l]);return o}var p;null!=i&&(p={},p[r]=i),null==i&&t.is(r,"object")&&(p=r);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[e](d)&&p[e](d)&&t.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var v in g)g[e](v)&&(p[v]=g[v])}p.text&&"text"==this.type&&(this.textpath.string=p.text),A(this,p)}return this},M.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},M.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},M.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},M.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},M.blur=function(e){var r=this.node.runtimeStyle,i=r.filter;return i=i.replace(x,d),0!==+e?(this.attrs.blur=e,r.filter=i+p+f+".Blur(pixelradius="+(+e||1.5)+")",r.margin=t.format("-{0}px 0 0 -{0}px",a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur),this},t._engine.path=function(t,e){var r=N("shape");r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new E(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,A(i,n),e.canvas&&e.canvas.appendChild(r);var a=N("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs;return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path(),s=a.attrs;return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",A(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path(),a=n.attrs;return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",A(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=r,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=r,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),C(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=N("shape"),l=N("path"),h=N("textpath");i=i||0,n=n||0,s=s||"",l.v=t.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin="0 0";var u=new E(o,e),c={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,A(u,c),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o);var f=N("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},t._engine.setSize=function(e,r){var i=this.canvas.style;return this.width=e,this.height=r,e==+e&&(e+="px"),r==+r&&(r+="px"),i.width=e,i.height=r,i.clip="rect(0 "+e+" "+r+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve("raphael.setViewBox",this,this._viewBox,[e,r,i,n,a]);var s=this.getSize(),o=s.width,l=s.height,h,u;return a&&(h=l/n,u=o/i,i*h<o&&(e-=(o-i*h)/2/h),n*u<l&&(r-=(l-n*u)/2/u)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:s},this.forEach(function(t){t.transform("...")}),this};var N;t._engine.initWin=function(t){var e=t.document;e.styleSheets.length<31?e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):e.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),N=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){N=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n,a=e.width,s=e.x,o=e.y;if(!r)throw new Error("VML container not found.");var l=new t._Paper,h=l.canvas=t._g.doc.createElement("div"),u=h.style;return s=s||0,o=o||0,a=a||512,i=i||342,l.width=a,l.height=i,a==+a&&(a+="px"),i==+i&&(i+="px"),l.coordsize=1e3*b+p+1e3*b,l.coordorigin="0 0",l.span=t._g.doc.createElement("span"),l.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",h.appendChild(l.span),u.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",a,i),1==r?(t._g.doc.body.appendChild(h),u.left=s+"px",u.top=o+"px",u.position="absolute"):r.firstChild?r.insertBefore(h,r.firstChild):r.appendChild(h),l.renderfix=function(){},l},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;return!0};var L=t.st;for(var z in M)M[e](z)&&!L[e](z)&&(L[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}}.apply(e,i),!(void 0!==n&&(t.exports=n))}])});

(function(){
  'use strict';

  angular.module('app', ['ui.router'])
    .config(Routes)
    .run(run);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
  run.$inject = ['$rootScope', 'LogInService', '$state'];

  function run ($rootScope, LogInService, $state){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams){
      if (toState.authReq && !LogInService.getUser()){
        event.preventDefault();
        $state.go('login');
      }
    })
  }

  function Routes($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('aboutus', {
        url: '/',
        controller: 'AboutUsController as vm',
        templateUrl: 'templates/aboutus.html',
        authReq: false
      })
      .state('map', {
        url: '/map',
        controller: 'MapController as vm',
        templateUrl: 'templates/map.html',
        authReq: false
      })
      .state('signup', {
        url: '/signup',
        controller: 'SignUpController as vm',
        templateUrl: 'templates/signup.html',
        authReq: false
      })
      .state('login', {
        url: '/login',
        controller: 'LogInController as vm',
        templateUrl: 'templates/login.html',
        authReq: false
      })
      .state('artists', {
        url: '/artists',
        resolve: {
          LogInService: 'LogInService',
          user: function(LogInService) {
            return LogInService.getUser();
          }
        },
        controller: 'ArtistsController as vm',
        templateUrl: 'templates/artists.html',
        authReq: true
      })
    $urlRouterProvider.otherwise('/');
  }

})();

(function(){
  'use strict';

  angular.module('app')
    .controller('AboutUsController', AboutUsController);

  AboutUsController.$inject = ['$interval'];

  function AboutUsController($interval){
    var vm = this;

    vm.image = 1;

    var carousel = $interval(function(){
      if (vm.image < 4) {
        vm.image++;
      } else {
        vm.image = 1;
      }
    }, 3000);

  } // this closes the controller function

})();

(function(){
  'use strict';

  angular.module('app')
    .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['ArtistsService', '$http'];

  function ArtistsController(ArtistsService, $http){
    var vm = this;
    vm.artistsAlerts = [];
    vm.approveArtist = approveArtist;
    vm.rejectArtist = rejectArtist;
    vm.popAlert = popAlert;
    vm.pendingArtists = [];
    vm.approvedArtists = [];
    vm.rejectedArtists = [];

    function popAlert(){
      vm.artistsAlerts.pop();
    }

    ArtistsService.getArtists()
      .then(function(artists){
        artists.forEach(function(el){
          if (el.approved == 0){
            vm.pendingArtists.push(el);
          }
          if (el.approved == 1){
            vm.approvedArtists.push(el);
          }
          if (el.approved == 2){
            vm.rejectedArtists.push(el);
          }
        })
        vm.artists = artists;
        // console.log(artists);
      });

    function approveArtist(artist){
      console.log('click approveArtist');
      vm.artistsAlerts.push(1);
      $http.put(`api/artists?approve=true&id=${artist._id}`)
        .then(function(response){
          console.log(response);
        });
      var index = vm.pendingArtists.indexOf(artist);
      vm.pendingArtists.splice(index, 1);
      vm.approvedArtists.push(artist);
    }

    function rejectArtist(artist){
      console.log('click rejectArtist');
      // $http.put(`api/artists/reject/${artist._id}`)
      $http.put(`api/artists/reject?id=${artist._id}`)
        .then(function(response){
          console.log(response);
        });
      var index = vm.pendingArtists.indexOf(artist);
      vm.pendingArtists.splice(index, 1);
      vm.rejected
    } // this closes rejectArtist function

  }

})();

(function(){
  'use strict';

  angular.module('app')
    .controller('LogInController', LogInController);

  LogInController.$inject = ['$http', 'LogInService', '$state'];

  function LogInController($http, LogInService, $state){
    var vm = this;
    vm.login = logIn;

    function logIn(username, password){
      LogInService.login(vm.username, vm.password)
        .then(function(user){
          $state.go('artists');
        })
        .catch(function(err){
          vm.username = '';
          vm.password = '';
          vm.error = err.data.error;
        })
    } // closes logIn function

  } // this closes the LogInController function

})();

(function(){
  'use strict';

  angular.module('app')
    .controller('MapController', MapController);

  MapController.$inject = ['MapService', 'CountriesService', '$http', '$scope'];

  function MapController(MapService, CountriesService, $http, $scope){
    var vm = this;
    vm.searchInput;
    vm.submitSearch = submitSearch

    MapService.renderMap();

    CountriesService.getCountries(function(artistsArr, group_a) {
      vm.artistsArr = artistsArr;
      vm.group_a = group_a;
      setUpEvtListeners(vm.group_a);
    });

    function submitSearch(input){
      var searchableWord = makeSearchableWord(input);
      var idx = vm.artistsArr.map(function(el){
        return el.name;
      }).indexOf(searchableWord);
      vm.selectedCountry = vm.artistsArr[idx].name;
      vm.countryArtists = vm.artistsArr[idx].artists;
    }

    function makeSearchableWord(str){
      var strArr = str.split(' ');
      var newArr = strArr.map(function(el, wordIdx){
        if (el != 'of' && el != 'and'){
          return el.charAt(0).toUpperCase() + el.slice(1);
        } else {
          return el;
        }
      })
      return newArr.join(' ');
    }

    function setUpEvtListeners(arr){
      arr.forEach(function(el, idx, arr){
        addClickEvt(el);
        addMouseover(el);
        addMouseleave(el);
      })
    }

    function addMouseover(el){
      el.node.addEventListener('mouseover', function(evt){
        $scope.$apply(function(){
          el.node.setAttribute('fill', 'gold');
          vm.country = el.data('country');
        });
      })
    }

    function addMouseleave(el){
      el.node.addEventListener('mouseleave', function(evt){
        $scope.$apply(function(){
          el.node.setAttribute('fill', 'black');
          vm.country = ''
        })
      })
    }

    function addClickEvt(el){
      el.node.addEventListener('click', function(evt){
        $scope.$apply(function() {
          vm.countryArtists = el.data('artists');
          vm.selectedCountry = el.data('country');
        });
      })
    }

  } // this closes MapController function

})(); // this closes entire IIFE



(function(){
  'use strict';

  angular.module('app')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$http', '$state'];

  function SignUpController($http, $state){
    var vm = this;
    vm.newArtist = {};
    vm.postArtist = postArtist;
    vm.blankForm = true;

    function postArtist(evt){
      var newArtist = vm.newArtist;
      $http.post('api/artists', {newArtist}).then(function(response){
        vm.blankForm = false;
      })
    } // this ends postArtist function
  } // this ends SignUpController function

})();

(function(){
  'use strict';

  angular.module('app')
    .factory('ArtistsService', ArtistsService);

  ArtistsService.$inject = ['$http'];

  function ArtistsService($http){

    function getArtists(){
      return $http.get('/api/artists')
        .then(function(response){
        // console.log(response.data);
        return response.data;
      })
    } // close getArtists

    var service = {
      getArtists: getArtists
    }

    return service;

  } // this closes ArtistsService


})();

(function(){
  'use strict';

  angular.module('app')
    .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider){
      $httpProvider.interceptors.push('InterceptorService');
    }
})();

(function(){
  'use strict';

  angular.module('app')
    .factory('CountriesService', CountriesService);

  CountriesService.$inject = ['MapService', '$http'];

  function CountriesService(MapService, $http){
    MapService.renderMap();
    var artistsArr = [];

    function getCountries(cb){
      $http.get('/api/countries').then(function(response){
        response.data.forEach(function(country, countryIdx){
          artistsArr.push(country);
        });
        var group_a = MapService.getGroup_a();
        group_a.forEach(function(el, idx, arr){
          el.data('country', artistsArr[idx].name);
          el.data('artists', artistsArr[idx].artists);
        })
        cb(artistsArr, group_a);
      })
    }

    // function getArtistsArr () {
    //   return artistsArr
    // }

    var service = {
      getCountries: getCountries
    }

    return service;
  }


})();

(function(){
  'use strict';

  angular.module('app')
    .factory('InterceptorService', InterceptorService);

    InterceptorService.$inject = ['TokenService'];

    function InterceptorService(TokenService){

      function addToken(config){
        var token = TokenService.getToken();
        if (token){
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${token}`
        }
        return config;
      }

      var service = {
        request: addToken
      }

      return service;
  }
})();

(function(){
  'use strict';

  angular.module('app')
    .factory('LogInService', LogInService);

  LogInService.$inject = ['TokenService', '$http']

  function LogInService(TokenService, $http){

    function login(username, password){
      return $http.post('/login', {username, password})
        .then(function(response){
          TokenService.storeToken(response.data.token);
          var user = TokenService.decodeToken(response.data.token);
          return user;
        })
        .catch(function (err) {
          return Promise.reject(err);
        })
    }

    function getUser(){
      var token = TokenService.getToken();
      if (token){
        var user = TokenService.decodeToken(token);
        return user;
      }
    }

    var service = {
      login: login,
      getUser: getUser
    }

    return service;
  }

})();

(function(){
  'use strict';

  angular.module('app')
    .factory('MapService', MapService);

  MapService.$inject = ['$http'];

  function MapService($http){

    var group_a, rsr, rsrGroups;

    function renderMap() {
      document.getElementById('map').innerHTML = '';
      rsr = Raphael('map', '1050', '700');
      rsrGroups = [group_a];
      group_a = rsr.set();

      // path creates the borders of the country

      // Afghanistan
      var AF = rsr.path("M646.88,356.9L649.74,358.2L651.85,357.74L652.44,356.19L654.65,355.67L656.23,354.62L656.79,351.83L659.15,351.15L659.59,349.9L660.92,350.84L661.76,350.95L663.32,350.98L665.44,351.72L666.29,352.14L668.32,351.02L669.27,351.69L670.17,350.09L671.85,350.16L672.28,349.64L672.58,348.21L673.79,346.98L675.3,347.78L675,348.87L675.85,349.04L675.58,351.99L676.69,353.14L677.67,352.4L678.92,352.06L680.66,350.49L682.59,350.75L685.49,350.75L685.99,351.76L684.35,352.15L682.93,352.8L679.71,353.2L676.7,353.93L675.06,355.44L675.72,356.9L676.05,358.6L674.65,360.03L674.77,361.33L674,362.55L671.33,362.44L672.43,364.66L670.65,365.51L669.46,367.51L669.61,369.49L668.51,370.41L667.48,370.11L665.33,370.54L665.03,371.45L662.94,371.45L661.38,373.29L661.28,376.04L657.63,377.37L655.68,377.09L655.11,377.79L653.44,377.39L650.63,377.87L645.94,376.23L648.48,373.3L648.25,371.2L646.13,370.65L645.91,368.56L644.99,365.92L646.19,364.09L644.97,363.6L645.74,361.15z")
              .attr({id: 'AF',title: 'Afghanistan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'AF'});

      var AL = rsr.path("M532.98,334.66L532.63,335.93L533.03,337.52L534.19,338.42L534.13,339.39L533.22,339.93L533.05,341.12L531.75,342.88L531.27,342.63L531.22,341.83L529.66,340.6L529.42,338.85L529.66,336.32L530.04,335.16L529.57,334.57L529.38,333.38L530.6,331.51L530.77,332.23L531.53,331.89L532.13,332.91L532.8,333.29z")
              .attr({id: 'AL',title: 'Albania',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'AL'});

      var DZ = rsr.path("M508.9,396.08L499.29,401.83L491.17,407.68L487.22,409L484.11,409.29L484.08,407.41L482.78,406.93L481.03,406.08L480.37,404.69L470.91,398.14L461.45,391.49L450.9,383.96L450.96,383.35L450.96,383.14L450.93,379.39L455.46,377.03L458.26,376.54L460.55,375.68L461.63,374.06L464.91,372.77L465.03,370.36L466.65,370.07L467.92,368.86L471.59,368.3L472.1,367.02L471.36,366.31L470.39,362.78L470.23,360.73L469.17,358.55L471.86,356.68L474.9,356.08L476.67,354.65L479.37,353.6L484.12,352.98L488.76,352.69L490.17,353.21L492.81,351.84L495.81,351.81L496.95,352.62L498.86,352.41L498.29,354.2L498.74,357.48L498.08,360.3L496.35,362.18L496.6,364.71L498.89,366.69L498.92,367.5L500.64,368.83L501.84,374.69L502.75,377.53L502.9,379.01L502.41,381.6L502.61,383.04L502.25,384.76L502.5,386.73L501.38,388.02L503.04,390.28L503.15,391.6L504.14,393.31L505.45,392.75L507.67,394.17z")
              .attr({id: 'DZ',title: 'Algeria',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'DZ'});

      var AO = rsr.path("M521.03,479.78l0.69,2.09l0.8,1.68l0.64,0.91l1.07,1.47l1.85,-0.23l0.93,-0.4l1.55,0.4l0.42,-0.7l0.7,-1.64l1.74,-0.11l0.15,-0.49l1.43,-0.01l-0.24,1.01l3.4,-0.02l0.05,1.77l0.57,1.09l-0.41,1.7l0.21,1.74l0.94,1.05l-0.15,3.37l0.69,-0.26l1.22,0.07l1.74,-0.42l1.28,0.17l0.3,0.88l-0.32,1.38l0.49,1.34l-0.42,1.07l0.24,0.99l-5.84,-0.04l-0.13,9.16l1.89,2.38l1.83,1.82l-5.15,1.19l-6.79,-0.41l-1.94,-1.4l-11.37,0.13l-0.42,0.21l-1.67,-1.32l-1.82,-0.09l-1.68,0.5l-1.35,0.56l-0.26,-1.83l0.39,-2.55l0.97,-2.65l0.15,-1.24l0.91,-2.59l0.67,-1.17l1.61,-1.87l0.9,-1.27l0.29,-2.11l-0.15,-1.61l-0.84,-1.01l-0.75,-1.72l-0.69,-1.69l0.15,-0.59l0.86,-1.12l-0.85,-2.72l-0.57,-1.88l-1.4,-1.77l0.27,-0.54l1.16,-0.38l0.81,0.05l0.98,-0.34L521.03,479.78zM510.12,479.24l-0.71,0.3l-0.75,-2.1l1.13,-1.21l0.85,-0.47l1.05,0.96l-1.02,0.59l-0.46,0.72L510.12,479.24z")
              .attr({id: 'AO',title: 'Angola',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'AO'});

      var AR = rsr.path("M291.6,648.91l-2.66,0.25l-1.43,-1.73l-1.69,-0.13l-3,0l0,-10.57l1.08,2.15l1.4,3.53l3.65,2.87l3.93,1.21L291.6,648.91zM293.1,526.47l1.65,2.18l1.09,-2.43l3.2,0.12l0.45,0.64l5.15,4.94l2.29,0.46l3.43,2.26l2.89,1.2l0.4,1.36l-2.76,4.73l2.83,0.85l3.15,0.48l2.22,-0.5l2.54,-2.4l0.46,-2.74l1.39,-0.59l1.41,1.79l-0.06,2.49l-2.36,1.73l-1.88,1.28l-3.16,3.08l-3.74,4.37l-0.7,2.59l-0.75,3.37l0.03,3.3l-0.61,0.74l-0.22,2.17l-0.19,1.76l3.56,2.91l-0.38,2.37l1.75,1.51l-0.14,1.7l-2.69,4.52l-4.16,1.91l-5.62,0.75l-3.08,-0.36l0.59,2.15l-0.57,2.72l0.52,1.85l-1.68,1.3l-2.87,0.51l-2.7,-1.35l-1.08,0.97l0.39,3.71l1.89,1.14l1.54,-1.19l0.84,1.96l-2.58,1.18l-2.25,2.38l-0.41,3.91l-0.66,2.11l-2.65,0.01l-2.2,2.04l-0.8,3.01l2.76,2.98l2.68,0.83l-0.96,3.73l-3.31,2.38l-1.82,5.03l-2.56,1.72l-1.15,2.06l0.91,4.64l1.87,2.63l-1.18,-0.23l-2.6,-0.71l-6.78,-0.61l-1.16,-2.63l0.05,-3.33l-1.87,0.28l-0.99,-1.6l-0.25,-4.6l2.15,-1.88l0.89,-2.68l-0.33,-2.11l1.49,-3.52l1.02,-5.35l-0.3,-2.33l1.22,-0.75l-0.3,-1.48l-1.3,-0.78l0.92,-1.63l-1.27,-1.46l-0.65,-4.4l1.13,-0.77l-0.47,-4.54l0.66,-3.75l0.75,-3.22l1.68,-1.3l-0.85,-3.46l-0.01,-3.22l2.12,-2.26l-0.06,-2.87l1.6,-3.31l0.01,-3.09l-0.73,-0.61l-1.29,-5.69l1.73,-3.34l-0.27,-3.11l1,-2.9l1.84,-2.96l1.98,-1.95l-0.84,-1.23l0.59,-1l-0.09,-5.14l3.05,-1.51l0.96,-3.16l-0.34,-0.76l2.34,-2.72L293.1,526.47z")
              .attr({id: 'AR',title: 'Argentina',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'AR'});

      var AM = rsr.path("M597.45,337.5L601.35,336.92L601.93,337.9L603,338.54L602.43,339.46L603.93,340.72L603.14,341.88L604.33,342.87L605.59,343.46L605.65,345.96L604.63,346.06L603.49,343.98L603.5,343.43L602.26,343.44L601.43,342.46L600.85,342.56L599.74,341.5L597.66,340.59L597.93,338.8z")
              .attr({id: 'AM',title: 'Armenia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'AM'});

      var AU = rsr.path("M882.93,588.16l2.71,1.28l1.53,-0.51l2.19,-0.71l1.68,0.25l0.2,4.43l-0.96,1.3l-0.29,3.06l-0.98,-1.05l-1.95,2.67l-0.58,-0.21l-1.72,-0.12l-1.73,-3.28l-0.38,-2.5l-1.62,-3.25l0.07,-1.7L882.93,588.16zM877.78,502.1l1.01,2.25l1.8,-1.08l0.93,1.22l1.35,1.13l-0.29,1.28l0.6,2.48l0.43,1.45l0.71,0.35l0.76,2.5l-0.27,1.52l0.91,1.99l3.04,1.54l1.98,1.41l1.88,1.29l-0.37,0.72l1.6,1.87l1.09,3.25l1.12,-0.66l1.14,1.31l0.69,-0.46l0.48,3.21l1.99,1.87l1.3,1.17l2.19,2.49l0.79,2.49l0.07,1.77l-0.19,1.94l1.34,2.68l-0.16,2.81l-0.49,1.48l-0.76,2.87l0.06,1.86l-0.55,2.34l-1.24,3l-2.08,1.63l-1.02,2.59l-0.94,1.67l-0.83,2.93l-1.08,1.71l-0.71,2.58l-0.36,2.4l0.14,1.11l-1.61,1.22l-3.14,0.13l-2.59,1.45l-1.29,1.38l-1.69,1.54l-2.32,-1.58l-1.72,-0.63l0.44,-1.85l-1.53,0.67l-2.46,2.58l-2.42,-0.97l-1.59,-0.56l-1.6,-0.25l-2.71,-1.03l-1.81,-2.18l-0.52,-2.66l-0.65,-1.75l-1.38,-1.4l-2.7,-0.41l0.92,-1.66l-0.68,-2.52l-1.37,2.35l-2.5,0.63l1.47,-1.88l0.42,-1.95l1.08,-1.65l-0.22,-2.47l-2.28,2.85l-1.75,1.15l-1.07,2.69l-2.19,-1.4l0.09,-1.79l-1.75,-2.43l-1.48,-1.25l0.53,-0.77l-3.6,-2l-1.97,-0.09l-2.7,-1.6l-5.02,0.31l-3.63,1.18l-3.19,1.1l-2.68,-0.22l-2.97,1.7l-2.43,0.77l-0.54,1.75l-1.04,1.36l-2.38,0.08l-1.76,0.3l-2.48,-0.61l-2.02,0.37l-1.92,0.15l-1.67,1.8l-0.82,-0.15l-1.41,0.96l-1.35,1.08l-2.05,-0.13l-1.88,0l-2.97,-2.17l-1.51,-0.64l0.06,-1.93l1.39,-0.46l0.48,-0.76l-0.1,-1.2l0.34,-2.3l-0.31,-1.95l-1.48,-3.29l-0.46,-1.85l0.12,-1.83l-1.12,-2.08l-0.07,-0.93l-1.24,-1.26l-0.35,-2.47l-1.6,-2.48l-0.39,-1.33l1.23,1.35l-0.95,-2.88l1.39,0.9l0.83,1.2l-0.05,-1.59l-1.39,-2.43l-0.27,-0.97l-0.65,-0.92l0.3,-1.77l0.57,-0.75l0.38,-1.52l-0.3,-1.77l1.16,-2.17l0.21,2.29l1.18,-2.07l2.28,-1l1.37,-1.28l2.14,-1.1l1.27,-0.23l0.77,0.37l2.21,-1.11l1.7,-0.33l0.42,-0.65l0.74,-0.27l1.55,0.07l2.95,-0.87l1.52,-1.31l0.72,-1.58l1.64,-1.49l0.13,-1.17l0.07,-1.59l1.96,-2.47l1.18,2.51l1.19,-0.58l-1,-1.38l0.88,-1.41l1.24,0.63l0.34,-2.21l1.53,-1.42l0.68,-1.14l1.41,-0.49l0.04,-0.8l1.23,0.34l0.05,-0.72l1.23,-0.41l1.36,-0.39l2.07,1.32l1.56,1.71l1.75,0.02l1.78,0.27l-0.59,-1.58l1.34,-2.3l1.26,-0.75l-0.44,-0.71l1.22,-1.63l1.7,-1.01l1.43,0.34l2.36,-0.54l-0.05,-1.45l-2.05,-0.94l1.49,-0.41l1.86,0.7l1.49,1.17l2.36,0.73l0.8,-0.29l1.74,0.88l1.64,-0.82l1.05,0.25l0.66,-0.55l1.29,1.41l-0.75,1.53l-1.06,1.16l-0.96,0.1l0.33,1.15l-0.82,1.43l-1,1.41l0.2,0.81l2.23,1.6l2.16,0.93l1.44,1l2.03,1.72l0.79,0l1.47,0.75l0.43,0.9l2.68,0.99l1.85,-1l0.55,-1.57l0.57,-1.29l0.35,-1.59l0.85,-2.3l-0.39,-1.39l0.2,-0.84l-0.32,-1.64l0.37,-2.16l0.54,-0.58l-0.44,-0.95l0.68,-1.51l0.53,-1.56l0.07,-0.81l1.04,-1.06l0.79,1.39l0.19,1.78l0.7,0.34l0.12,1.2l1.02,1.45l0.21,1.62L877.78,502.1z")
              .attr({id: 'AU',title: 'Australia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'AU'});

      var AT = rsr.path("M522.86,309.85L522.65,311.56L521.07,311.57L521.61,312.46L520.68,315.11L520.15,315.8L517.7,315.9L516.28,316.82L513.96,316.51L509.95,315.46L509.33,314.03L506.56,314.75L506.23,315.52L504.53,314.94L503.1,314.83L501.83,314.09L502.26,313.08L502.15,312.34L503,312.12L504.42,313.26L504.82,312.17L507.29,312.35L509.3,311.61L510.64,311.73L511.51,312.58L511.78,311.88L511.38,309.16L512.39,308.62L513.37,306.67L515.46,308.04L517.03,306.3L518.02,305.98L520.2,307.28L521.51,307.06L522.81,307.86L522.58,308.4z")
              .attr({id: 'AT',title: 'Austria',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'AT'});

      var AZ = rsr.path("M601.43,342.46l0.83,0.97l1.24,-0.01l-0.01,0.56l1.14,2.08l-1.92,-0.48l-1.42,-1.66l-0.44,-1.37L601.43,342.46zM608.08,337.03l1.24,0.25l0.48,-0.95l1.67,-1.51l1.47,1.97l1.43,2.62l1.31,0.17l0.86,0.99l-2.31,0.29l-0.49,2.82l-0.48,1.26l-1.03,0.84l0.08,1.77l-0.7,0.18l-1.75,-1.87l0.97,-1.78l-0.83,-1.06l-1.05,0.27l-3.31,2.66l-0.06,-2.5l-1.26,-0.59l-1.19,-0.99l0.79,-1.16l-1.49,-1.26l0.56,-0.92l-1.07,-0.64l-0.58,-0.97l0.69,-0.61l2.09,1.07l1.51,0.22l0.38,-0.43l-1.38,-2.02l0.73,-0.52l0.79,0.13L608.08,337.03z")
              .attr({id: 'AZ',title: 'Azerbaijan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'AZ'});

      var BS = rsr.path("M257.86,395.2l-0.69,0.15l-0.71,-1.76l-1.05,-0.89l0.61,-1.95l0.84,0.12l0.98,2.55L257.86,395.2zM257.06,386.51l-3.06,0.5l-0.2,-1.15l1.32,-0.25l1.85,0.09L257.06,386.51zM259.36,386.48l-0.48,2.21l-0.52,-0.4l0.05,-1.63l-1.26,-1.23l-0.01,-0.36L259.36,386.48z")
              .attr({id: 'BS',title: 'Bahamas',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BS'});

      var BD = rsr.path("M735.09,400.41L735.04,402.56L734.06,402.1L734.24,404.51L733.44,402.95L733.28,401.43L732.74,399.98L731.57,398.22L728.99,398.1L729.25,399.35L728.37,401.02L727.17,400.41L726.76,400.96L725.97,400.63L724.89,400.36L724.45,397.88L723.48,395.6L723.95,393.76L722.23,392.94L722.85,391.82L724.6,390.67L722.58,389.04L723.57,386.93L725.79,388.27L727.13,388.43L727.38,390.58L730.04,391L732.65,390.95L734.26,391.48L732.97,394.07L731.71,394.25L730.85,395.98L732.38,397.56L732.84,395.62L733.62,395.61z")
              .attr({id: 'BD',title: 'Bangladesh',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BD'});

      var BY = rsr.path("M541.1,284.07L543.81,284.11L546.85,282.31L547.5,279.59L549.8,278.02L549.54,275.82L551.24,274.98L554.26,273.05L557.21,274.31L557.61,275.54L559.08,274.95L561.82,276.13L562.09,278.44L561.49,279.76L563.25,282.91L564.39,283.78L564.22,284.64L566.11,285.47L566.92,286.72L565.83,287.74L563.57,287.58L563.03,288.02L563.69,289.56L564.38,292.49L561.97,292.76L561.11,293.76L560.92,296.02L559.81,295.59L557.28,295.81L556.54,294.76L555.49,295.54L554.44,294.89L552.23,294.8L549.1,293.72L546.27,293.36L544.1,293.46L542.56,294.69L541.22,294.86L541.17,292.85L540.3,290.73L541.98,289.79L542,287.94L541.22,286.16z")
              .attr({id: 'BY',title: 'Belarus',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BY'});

      var BE = rsr.path("M484.55,295.91L486.6,296.26L489.2,295.33L490.97,297.28L492.52,298.32L492.2,301.29L491.47,301.45L491.16,303.88L488.71,301.91L487.27,302.25L485.31,300.19L484.01,298.42L482.71,298.35L482.3,296.79z")
              .attr({id: 'BE',title: 'Belgium',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BE'});

      var BZ = rsr.path("M225.31,412.96L225.29,412.53L225.63,412.39L226.14,412.74L227.14,410.97L227.67,410.93L227.68,411.36L228.21,411.37L228.17,412.17L227.71,413.44L227.96,413.89L227.67,414.94L227.84,415.21L227.52,416.68L226.97,417.46L226.46,417.55L225.9,418.55L225.07,418.55L225.29,415.27z")
              .attr({id: 'BZ',title: 'Belize',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BZ'});

      var BJ = rsr.path("M482.8,445.92L480.48,446.25L479.79,444.31L479.92,437.85L479.35,437.27L479.25,435.88L478.27,434.89L477.42,434.06L477.78,432.56L478.74,432.24L479.31,431L480.68,430.74L481.29,429.88L482.23,429.05L483.24,429.04L485.38,430.68L485.27,431.63L485.9,433.31L485.35,434.45L485.64,435.21L484.28,436.96L483.42,437.83L482.89,439.6L482.96,441.39z")
              .attr({id: 'BJ',title: 'Benin',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BJ'});

      var BT = rsr.path("M732.36,382.78L733.5,383.78L733.3,385.71L731.01,385.8L728.65,385.59L726.88,386.08L724.33,384.89L724.28,384.26L726.13,381.92L727.64,381.12L729.65,381.85L731.13,381.93z")
              .attr({id: 'BT',title: 'Bhutan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BT'});

      var BO = rsr.path("M299.04,526.35L295.84,526.22L294.75,528.65L293.1,526.47L289.43,525.74L287.1,528.46L285.07,528.87L283.97,524.72L282.47,521.38L283.35,518.51L281.88,517.26L281.51,515.14L280.13,513.14L281.9,510L280.69,507.56L281.34,506.59L280.83,505.52L281.93,504.08L281.99,501.64L282.12,499.62L282.73,498.66L280.3,494.08L282.39,494.32L283.83,494.25L284.46,493.4L286.91,492.25L288.38,491.19L292.05,490.71L291.76,492.83L292.1,493.92L291.87,495.82L294.92,498.37L298.06,498.84L299.16,499.91L301.06,500.48L302.22,501.31L303.98,501.28L305.61,502.13L305.73,503.79L306.28,504.63L306.32,505.88L305.5,505.92L306.58,509.29L311.95,509.41L311.54,511.09L311.84,512.24L313.37,513.06L314.04,514.88L313.54,517.2L312.77,518.49L313.04,520.18L312.16,520.79L312.12,519.88L309.5,518.37L306.9,518.32L302.01,519.18L300.67,521.8L300.6,523.4L299.49,526.99z")
              .attr({id: 'BO',title: 'Bolivia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BO'});

      var BA = rsr.path("M528.54,323.11L529.56,323.1L528.86,324.82L530.21,326.32L529.8,328.14L529.14,328.31L528.61,328.67L527.7,329.56L527.29,331.66L524.81,330.22L523.75,328.61L522.68,327.76L521.39,326.31L520.79,325.1L519.41,323.27L520,321.63L521.01,322.54L521.61,321.72L522.92,321.63L525.33,322.29L527.27,322.23z")
              .attr({id: 'BA',title: 'Bosnia and Herzegovina',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})

              .data({'id': 'BA'});

      var BW = rsr.path("M547.17,515.95L547.73,516.47L548.62,518.18L551.79,521.43L552.99,521.75L553,522.8L553.82,524.7L555.99,525.16L557.78,526.52L553.81,528.74L551.29,531L550.36,533.03L549.52,534.18L547.99,534.43L547.5,535.9L547.21,536.86L545.42,537.58L543.14,537.43L541.8,536.57L540.62,536.19L539.25,536.91L538.56,538.39L537.23,539.32L535.83,540.71L533.82,541.03L533.2,539.94L533.46,538.04L531.79,535.11L531.04,534.65L531.04,525.79L533.8,525.68L533.88,515.11L535.97,515.02L540.29,513.99L541.37,515.2L543.15,514.05L544.01,514.04L545.59,513.38L546.09,513.6z")
              .attr({id: 'BW',title: 'Botswana',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BW'});

      var BR = rsr.path("M313.68,551.79L317.42,547.42L320.59,544.34L322.47,543.06L324.83,541.33L324.89,538.84L323.48,537.05L322.09,537.64L322.64,535.86L323.02,534.04L323.02,532.36L322.01,531.81L320.96,532.3L319.92,532.17L319.59,530.99L319.33,528.22L318.8,527.32L316.91,526.5L315.77,527.09L312.81,526.51L312.99,522.45L312.16,520.79L313.04,520.18L312.77,518.49L313.54,517.2L314.04,514.88L313.37,513.06L311.84,512.24L311.54,511.09L311.95,509.41L306.58,509.29L305.5,505.92L306.32,505.88L306.28,504.63L305.73,503.79L305.61,502.13L303.98,501.28L302.22,501.31L301.06,500.48L299.16,499.91L298.06,498.84L294.92,498.37L291.87,495.82L292.1,493.92L291.76,492.83L292.05,490.71L288.38,491.19L286.91,492.25L284.46,493.4L283.83,494.25L282.39,494.32L280.3,494.08L278.72,494.57L277.44,494.24L277.63,489.94L275.33,491.6L272.86,491.53L271.8,490.02L269.94,489.86L270.53,488.65L268.97,486.93L267.8,484.4L268.54,483.89L268.54,482.7L270.24,481.89L269.96,480.38L270.67,479.4L270.88,478.1L274.08,476.19L276.38,475.66L276.75,475.24L279.28,475.37L280.54,467.72L280.61,466.51L280.17,464.92L278.93,463.9L278.94,461.88L280.52,461.42L281.08,461.71L281.17,460.64L279.53,460.35L279.5,458.61L284.96,458.67L285.89,457.71L286.67,458.59L287.21,460.24L287.74,459.89L289.29,461.37L291.47,461.19L292.01,460.33L294.09,459.68L295.25,459.23L295.57,458.05L297.58,457.25L297.42,456.67L295.05,456.43L294.66,454.67L294.77,452.8L293.52,452.08L294.04,451.82L296.12,452.18L298.35,452.88L299.16,452.22L301.17,451.78L304.31,450.74L305.34,449.67L304.96,448.88L306.42,448.76L307.08,449.4L306.71,450.63L307.67,451.05L308.32,452.35L307.54,453.33L307.09,455.71L307.81,457.12L308.01,458.41L309.74,459.71L311.12,459.85L311.43,459.31L312.31,459.19L313.58,458.7L314.49,457.96L316.04,458.19L316.72,458.09L318.25,458.32L318.5,457.75L318.03,457.2L318.31,456.39L319.44,456.64L320.77,456.35L322.37,456.94L323.6,457.52L324.47,456.76L325.09,456.88L325.48,457.67L326.82,457.47L327.89,456.41L328.75,454.35L330.41,451.8L331.37,451.67L332.06,453.21L333.63,458.09L335.13,458.55L335.21,460.47L333.1,462.76L333.97,463.6L338.93,464.04L339.03,466.83L341.16,465L344.69,466.01L349.34,467.71L350.71,469.34L350.25,470.88L353.51,470.02L358.97,471.5L363.16,471.39L367.3,473.7L370.88,476.83L373.04,477.63L375.44,477.75L376.46,478.63L377.41,482.2L377.88,483.89L376.76,488.55L375.33,490.39L371.38,494.33L369.59,497.54L367.52,500.02L366.82,500.08L366.03,502.18L366.23,507.58L365.45,512.06L365.15,513.99L364.27,515.14L363.77,519.08L360.93,522.96L360.45,526.05L358.18,527.36L357.52,529.17L354.48,529.16L350.07,530.33L348.09,531.68L344.95,532.57L341.65,535.01L339.28,538.07L338.87,540.39L339.34,542.12L338.81,545.3L338.18,546.85L336.22,548.6L333.11,554.28L330.64,556.87L328.73,558.41L327.46,561.57L325.6,563.48L324.82,561.58L326.06,560.01L324.44,557.76L322.24,555.94L319.35,553.86L318.31,553.95L315.5,551.45z")
              .attr({id: 'BR',title: 'Brazil',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BR'});

      var BN = rsr.path("M795.46,450.77L796.57,449.72L798.96,448.19L798.83,449.57L798.67,451.35L797.33,451.26L796.74,452.21z")
              .attr({id: 'BN',title: 'Brunei Darussalam',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BN'});

      var BG = rsr.path("M538.78,325.56L539.59,327.16L540.67,326.87L542.83,327.48L546.95,327.68L548.34,326.69L551.64,325.79L553.68,327.2L555.33,327.61L553.87,329.2L552.85,331.93L553.75,334.09L551.34,333.58L548.48,334.76L548.45,336.62L545.9,336.97L543.93,335.67L541.68,336.7L539.61,336.59L539.41,334.12L538,332.91L538.47,332.37L538.16,331.92L538.63,330.71L539.7,329.52L538.34,327.86L538.09,326.44z")
              .attr({id: 'BG',title: 'Bulgaria',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BG'});

      var BF = rsr.path("M467.33,436.4L465.41,435.67L464.09,435.78L463.11,436.49L461.85,435.89L461.36,434.96L460.1,434.34L459.91,432.7L460.68,431.49L460.61,430.53L462.84,428.17L463.25,426.21L464.02,425.51L465.38,425.89L466.55,425.31L466.93,424.57L469.11,423.29L469.64,422.39L472.26,421.19L473.81,420.78L474.51,421.33L476.3,421.32L476.08,422.72L476.46,424.03L478.04,425.9L478.12,427.28L481.36,427.93L481.29,429.88L480.68,430.74L479.31,431L478.74,432.24L477.78,432.56L475.32,432.5L474.02,432.28L473.12,432.74L471.88,432.53L467.01,432.66L466.94,434.27z")
              .attr({id: 'BF',title: 'Burkina Faso',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BF'});

      var BI = rsr.path("M557.52,475.93L557.34,472.56L556.63,471.3L558.34,471.52L559.2,469.93L560.69,470.11L560.85,471.21L561.45,471.84L561.48,472.75L560.79,473.33L559.69,474.79L558.68,475.8z")
              .attr({id: 'BI',title: 'Burundi',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'BI'});

      var KH = rsr.path("M765.44,433.6L764.3,432.12L762.89,429.18L762.22,425.73L764.02,423.35L767.64,422.8L770.27,423.21L772.58,424.34L773.85,422.35L776.34,423.41L776.99,425.33L776.64,428.75L771.93,430.94L773.16,432.67L770.22,432.87L767.79,434.01z")
              .attr({id: 'KH',title: 'Cambodia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'KH'});

      var CM = rsr.path("M511.92,457.07L511.57,456.92L509.91,457.28L508.2,456.9L506.87,457.09L502.31,457.02L502.72,454.82L501.62,452.98L500.34,452.5L499.77,451.25L499.05,450.85L499.09,450.08L499.81,448.1L501.14,445.4L501.95,445.37L503.62,443.73L504.69,443.69L506.26,444.84L508.19,443.89L508.45,442.73L509.08,441.59L509.51,440.17L511.01,439.01L511.58,437.04L512.17,436.41L512.57,434.94L513.31,433.13L515.67,430.93L515.82,429.98L516.13,429.47L515.02,428.33L515.11,427.43L515.9,427.26L517.01,429.09L517.2,430.98L517.1,432.87L518.62,435.44L517.06,435.41L516.27,435.61L514.99,435.33L514.38,436.66L516.03,438.31L517.25,438.79L517.65,439.96L518.53,441.89L518.09,442.66L516.68,445.5L516.01,446.01L515.79,448.18L516.07,449.36L515.85,450.19L517.17,451.65L517.41,452.65L518.45,454.09L519.73,454.99L519.85,456.26L520.15,457.07L519.95,458.57L517.72,457.91L515.45,457.18z")
              .attr({id: 'CM',title: 'Cameroon',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CM'});

      var CA = rsr.path("M198.93,96.23l-0.22,-5.9l3.63,0.58l1.63,0.96l3.35,4.92l-0.76,4.97l-4.15,2.77l-2.28,-3.12L198.93,96.23zM212.14,108.88l0.33,-1.49l-1.97,-2.45l-5.65,-0.19l0.75,3.68l5.25,0.83L212.14,108.88zM248.49,155.83l3.08,5.1l0.81,0.57l3.07,-1.27l3.02,0.2l2.98,0.28l-0.25,-2.64l-4.84,-5.38l-6.42,-1.08l-1.35,0.67L248.49,155.83zM183.06,93.13l-2.71,4.19l6.24,0.52l4.61,4.44l4.58,1.5l-1.09,-5.68l-2.14,-6.73l-7.58,-5.35l-5.5,-2.04l0.2,5.69L183.06,93.13zM208.96,82.89l5.13,-0.12l-2.22,4l-0.04,5.3l3.01,5.76l5.81,1.77l4.96,-0.99l5.18,-10.73l3.85,-4.45l-3.38,-4.97l-2.21,-10.65l-4.6,-3.19l-4.72,-3.68l-3.58,-9.56l-6.52,0.94l1.23,4.15l-2.87,1.25l-1.94,5.32l-1.94,7.46l1.78,7.26L208.96,82.89zM145.21,136.27l3.92,1.95l12.67,-1.3l-5.82,4.77l0.36,3.43l4.26,-0.24l7.07,-4.58l9.5,-1.67l1.71,-5.22l-0.49,-5.57l-2.94,-0.5l-2.5,1.93l-1.1,-4.13l-0.95,-5.7l-2.9,-1.42l-2.57,4.41l4.01,11.05l-4.9,-0.85l-4.98,-6.79l-7.89,-4l-2.64,3.32L145.21,136.27zM167.77,94.21l-3.65,-2.9l-1.5,-0.66l-2.88,4.28l-0.05,2l4.66,0.01L167.77,94.21zM166.31,106.56l0.93,-3.99l-3.95,-2.12l-4.09,1.39l-2.27,4.26l4.16,4.21L166.31,106.56zM195.4,139.8l4.62,-1.11l1.28,-8.25l-0.09,-5.95l-2.14,-5.56l-0.22,1.6l-3.94,-0.7l-4.22,4.09l-3.02,-0.37l0.18,8.92l4.6,-0.87l-0.06,6.47L195.4,139.8zM192.12,185.41l-5.06,-3.93l-4.71,-4.21l-0.87,-6.18l-1.76,-8.92l-3.14,-3.84l-2.79,-1.55l-2.47,1.42l1.99,9.59l-1.41,3.73l-2.29,-8.98l-2.56,-3.11l-3.17,4.81l-3.9,-4.76l-6.24,2.87l1.4,-4.46l-2.87,-1.87l-7.51,5.84l-1.95,3.71l-2.35,6.77l4.9,2.32l4.33,-0.12l-6.5,3.46l1.48,3.13l3.98,0.17l5.99,-0.67l5.42,1.96l-3.66,1.44l-3.95,-0.37l-4.33,1.41l-1.87,0.87l3.45,6.35l2.49,-0.88l3.83,2.15l1.52,3.65l4.99,-0.73l7.1,-1.16l5.26,-2.65l3.26,-0.48l4.82,2.12l5.07,1.22l0.94,-2.86l-1.79,-3.05l4.6,-0.64L192.12,185.41zM199.86,184.43l-1.96,3.54l-2.47,2.49l3.83,3.54l2.28,-0.85l3.78,2.36l1.74,-2.73l-1.71,-3.03l-0.84,-1.53l-1.68,-1.46L199.86,184.43zM182.25,154.98l-2.13,-2.17l-3.76,0.4l-0.95,1.38l4.37,6.75L182.25,154.98zM210.94,168.15l3.01,-6.93l3.34,-1.85l4.19,-8.74l-5.36,-2.47l-5.84,-0.36l-2.78,2.77l-1.47,4.23l-0.04,4.82l1.75,8.19L210.94,168.15zM228.09,145.15l5.76,-0.18l8.04,-1.61l3.59,1.28l4.18,-2.26l1.75,-2.84l-0.63,-4.52l-3,-4.23l-4.56,-0.8l-5.71,0.97l-4.46,2.44l-4.09,-0.94l-3.78,-0.5l-1.78,-2.7l-3.22,-2.61l0.64,-4.43l-2.42,-3.98l-5.52,0.03l-3.11,-3.99l-5.78,-0.8l-1.06,5.1l3.25,3.74l5.8,1.45l2.81,5.09l0.34,5.6l0.97,5.99l7.45,3.42L228.09,145.15zM139.07,126.88l5.21,-5.05l2.62,-0.59l2.16,-4.23l0.38,-9.77l-3.85,1.91l-4.3,-0.18l-5.76,8.19l-4.76,8.98l3.8,2.51L139.07,126.88zM211.25,143.05l1.53,-4.14l-1.02,-3.46l-2.45,-3.92l-4.03,3.02l-1.49,4.92l3.4,2.79L211.25,143.05zM202.94,154.49l-0.73,-2.88l-5,1.26l-3.34,-2.11l-3.32,4.8l3.09,6.28l-5.72,-1.17l-0.06,3.01l6.97,7.05l1.94,3.38l2.7,0.73l4.6,-3.41l0.5,-8.21l-4.24,-4.07L202.94,154.49zM128.95,308.23l-1.16,-2.34l-2.8,-1.77l-1.39,-2.05l-0.95,-1.5l-2.64,-0.46l-1.72,-0.67l-2.94,-0.96l-0.24,1.02l1.08,2.38l2.89,0.78l0.5,1.23l2.51,1.5l0.84,1.51l4.6,1.92L128.95,308.23zM250.65,230.6l-2,-2.11l-2.06,0.5l-0.25,-3.06l-3.21,-2.04l-3.07,-2.27l-1.63,-1.75l-1.43,1.03l-0.52,-2.96l-2.03,-0.55l-0.96,6.13l-0.36,5.11l-2.44,3.14l3.8,-0.6l0.96,3.65l3.99,-3.23l2.78,-3.38l1.57,2.86l4.36,1.51L250.65,230.6zM130.12,178.05l7.38,-4.18V170l3.48,-6.41l6.88,-6.69l3.52,-2.47l-3.01,-4.2l-2.72,-2.95l-7.16,-0.57l-4,-2.16l-9.48,1.63l2.74,6.23l-2.43,6.43l-1.94,6.87l-1.2,3.86l6.47,4.69L130.12,178.05zM264.36,205.36l0.32,-1.01l-0.03,-3.17l-2.19,-2.08l-2.57,1.05l-1.19,4.17l0.7,3.56l3.14,-0.36L264.36,205.36zM288.18,212.9l4.41,6.6l3.45,2.85l4.92,-7.87l0.87,-4.93l-4.41,-0.47l-4.03,-6.7l-4.45,-1.64l-6.6,-4.97l5.15,-3.63l-2.65,-7.54l-2.44,-3.35l-6.77,-3.35l-2.92,-5.55l-5.21,1.99l-0.36,-3.86l-3.86,-4.32l-6.22,-4.71l-2.65,3.71l-5.55,2.66l0.42,-6.06l-4.81,-10.05l-7.11,4.06l-2.59,7.7l-2.21,-5.92l2.06,-6.37l-7.24,2.65l-2.88,3.99l-2.15,8.42l0.89,9.05l3.98,0.04l-2.93,3.92l2.33,2.96l4.55,1.25l5.93,2.42l10.2,1.82l5.08,-1.04l1.5,-2.42l2.21,2.79l2.47,0.46l2.97,4.96l-1.8,1.98l5.68,2.63l4.29,3.68l1.08,2.55l0.77,3.24l-3.63,6.93l-0.98,3.44l0.94,2.42l-5.77,0.86l-5.27,0.12l-1.85,4.87l2.37,2.23l8.11,-1.03l-0.04,-1.89l4.08,3.15l4.18,3.28l-0.98,1.77l3.4,3.02l6.02,3.53l7.6,2.39l-0.46,-2.09l-2.92,-3.67l-3.96,-5.37l7.03,5l3.54,1.66l0.97,-4.44l-1.82,-6.3l-1.16,-1.73l-3.81,-3.03l-2.95,-3.91l0.35,-3.94L288.18,212.9zM222.35,51.34l2.34,7.29l4.96,5.88l9.81,-1.09l6.31,1.97l-4.38,6.05l-2.21,-1.78l-7.66,-0.71l1.19,8.31l3.96,6.04l-0.8,5.2l-4.97,3.46l-2.27,5.47l4.55,2.65l3.82,8.55l-7.5,-5.7l-1.71,0.94l1.38,9.38l-5.18,2.83l0.35,5.85l5.3,0.63l4.17,1.44l8.24,-1.84l7.33,3.27l7.49,-7.19l-0.06,-3.02l-4.79,0.48l-0.39,-2.84l3.92,-3.83l1.33,-5.15l4.33,-3.83l2.66,-4.76l-2.32,-7.1l1.94,-2.65l-3.86,-1.89l8.49,-1.63l1.79,-3.15l5.78,-2.6l4.8,-13.47l4.57,-4.94l6.62,-11.12l-6.1,0.1l2.54,-4.3l6.78,-3.99l6.84,-8.9l0.12,-5.73l-5.13,-6.04l-6.02,-2.93l-7.49,-1.82l-6.07,-1.49l-6.07,-1.5l-8.1,3.98l-1.49,-2.53l-8.57,0.98l-5.03,2.57l-3.7,3.65l-2.13,11.74L239,24.52l-3.48,-1.14l-4.12,7.97l-5.5,3.35l-3.27,0.66l-4.17,3.84l0.61,6.65L222.35,51.34zM296.75,316.34l-0.98,-1.98l-1.06,1.26l0.7,1.36l3.56,1.71l1.04,-0.26l1.38,-1.66l-2.6,0.11L296.75,316.34zM239.75,238.48l0.61,1.63l1.98,0.14l3.28,-3.34l0.06,-1.19l-3.85,-0.06L239.75,238.48zM301.88,304.92l-2.87,-1.8l-3.69,-1.09l-0.97,0.37l2.61,2.04l3.63,1.34l1.36,-0.08L301.88,304.92zM326.76,309.71l-0.36,-2.24l-1.96,0.72l0.87,-3.11l-2.8,-1.32l-1.29,1.05l-2.49,-1.18l0.98,-1.51l-1.88,-0.93l-1.83,1.47l1.86,-3.82l1.5,-2.8l0.54,-1.22l-1.3,-0.2l-2.43,1.55l-1.74,2.53l-2.9,6.92l-2.35,2.56l1.22,1.14l-1.75,1.47l0.43,1.23l5.44,0.13l3.01,-0.25l2.69,1.01l-1.98,1.93l1.67,0.14l3.25,-3.58l0.78,0.53l-0.61,3.37l1.84,0.77l1.27,-0.15l1.18,-3.61L326.76,309.71zM305.57,314.47l-2.81,4.56l-4.63,0.58l-3.64,-2.01l-0.92,-3.07l-0.89,-4.46l2.65,-2.83l-2.48,-2.09l-4.19,0.43l-5.88,3.53l-4.5,5.45l-2.38,0.67l3.23,-3.8l4.04,-5.57l3.57,-1.9l2.35,-3.11l2.9,-0.3l4.21,0.03l6,0.92l4.74,-0.71l3.53,-3.62l4.62,-1.59l2.01,-1.58l2.04,-1.71l-0.2,-5.19l-1.13,-1.77l-2.18,-0.63l-1.11,-4.05l-1.8,-1.55l-4.47,-1.26l-2.52,-2.82l-3.73,-2.83l1.13,-3.2l-3.1,-6.26l-3.65,-6.89l-2.18,-4.98l-1.86,2.61l-2.68,6.05l-4.06,2.97l-2.03,-3.16l-2.56,-0.85l-0.93,-6.99l0.08,-4.8l-5,-0.44l-0.85,-2.27l-3.45,-3.44l-2.61,-2.04l-2.32,1.58l-2.88,-0.58l-4.81,-1.65l-1.95,1.4l0.94,9.18l1.22,5.12l-3.31,5.75l3.41,4.02l1.9,4.44l0.23,3.42l-1.55,3.5l-3.18,3.46l-4.49,2.28l1.98,2.53l1.46,7.4l-1.52,4.68l-2.16,1.46l-4.17,-4.28l-2.03,-5.17l-0.87,-4.76l0.46,-4.19l-3.05,-0.47l-4.63,-0.28l-2.97,-2.08l-3.51,-1.37l-2.01,-2.38l-2.8,-1.94l-5.21,-2.23l-3.92,1.02l-1.31,-3.95l-1.26,-4.99l-4.12,-0.9l0.15,-6.41l1.09,-4.48l3.04,-6.6l3.43,-4.9l3.26,-0.77l0.19,-4.05l2.21,-2.68l4.01,-0.42l3.25,-4.39l0.82,-2.9l2.7,-5.73l0.84,-3.5l2.9,2.11l3.9,-1.08l5.49,-4.96l0.36,-3.54l-1.98,-3.98l2.09,-4.06l-0.17,-3.87l-3.76,-3.95l-4.14,-1.19l-3.98,-0.62l-0.15,8.71l-2.04,6.56l-2.93,5.3l-2.71,-4.95l0.84,-5.61l-3.35,-5.02l-3.75,6.09l0.01,-7.99l-5.21,-1.63l2.49,-4.01l-3.81,-9.59l-2.84,-3.91l-3.7,-1.44l-3.32,6.43l-0.22,9.34l3.27,3.29l3,4.91l-1.27,7.71l-2.26,-0.2l-1.78,5.88l0.02,-7l-4.34,-2.58l-2.49,1.33l0.32,4.67l-4.09,-0.18l-4.35,1.17l-4.95,-3.35l-3.13,0.6l-2.82,-4.11l-2.26,-1.84l-2.24,0.77l-3.41,0.35l-1.81,2.61l2.86,3.19l-3.05,3.72l-2.99,-4.42l-2.39,1.3l-7.57,0.87l-5.07,-1.59l3.94,-3.74l-3.78,-3.9l-2.75,0.5l-3.86,-1.32l-6.56,-2.89l-4.29,-3.37l-3.4,-0.47l-1.06,2.36l-3.44,1.31l-0.38,-6.15l-3.73,5.5l-4.74,-7.32l-1.94,-0.89l-0.63,3.91l-2.09,1.9l-1.93,-3.39l-4.59,2.05l-4.2,3.55l-4.17,-0.98l-3.4,2.5l-2.46,3.28l-2.92,-0.72l-4.41,-3.8l-5.23,-1.94l-0.02,27.65l-0.01,35.43l2.76,0.17l2.73,1.56l1.96,2.44l2.49,3.6l2.73,-3.05l2.81,-1.79l1.49,2.85l1.89,2.23l2.57,2.42l1.75,3.79l2.87,5.88l4.77,3.2l0.08,3.12l-1.56,2.35l0.06,2.48l3.39,3.45l0.49,3.76l3.59,1.96l-0.4,2.79l1.56,3.96l5.08,1.82l2,1.89l5.43,4.23l0.38,0.01h7.96h8.32h2.76h8.55h8.27h8.41l8.42,0l9.53,0l9.59,0l5.8,0l0.01,-1.64l0.95,-0.02l0.5,2.35l0.87,0.72l1.96,0.26l2.86,0.67l2.72,1.3l2.27,-0.55l3.45,1.09l1.14,-1.66l1.59,-0.66l0.62,-1.03l0.63,-0.55l2.61,0.86l1.93,0.1l0.67,0.57l0.94,2.38l3.15,0.63l-0.49,1.18l1.11,1.21l-0.48,1.56l1.18,0.51l-0.59,1.37l0.75,0.13l0.53,-0.6l0.55,0.9l2.1,0.5l2.13,0.04l2.27,0.41l2.51,0.78l0.91,1.26l1.82,3.04l-0.9,1.3l-2.28,-0.54l-1.42,-2.44l0.36,2.49l-1.34,2.17l0.15,1.84l-0.23,1.07l-1.81,1.27l-1.32,2.09l-0.62,1.32l1.54,0.24l2.08,-1.2l1.23,-1.06l0.83,-0.17l1.54,0.38l0.75,-0.59l1.37,-0.48l2.44,-0.47v0l0,0l-0.25,-1.15l-0.13,0.04l-0.86,0.2l-1.12,-0.36l0.84,-1.32l0.85,-0.46l1.98,-0.56l2.37,-0.53l1.24,0.73l0.78,-0.85l0.89,-0.54l0.6,0.29l0.03,0.06l2.87,-2.73l1.27,-0.73l4.26,-0.03l5.17,0l0.28,-0.98l0.9,-0.2l1.19,-0.62l1,-1.82l0.86,-3.15l2.14,-3.1l0.93,1.08l1.88,-0.7l1.25,1.19l0,5.52l1.83,2.25l3.12,-0.48l4.49,-0.13l-4.87,3.26l0.11,3.29l2.13,0.28l3.13,-2.79l2.78,-1.58l6.21,-2.35l3.47,-2.62l-1.81,-1.46L305.57,314.47zM251.91,243.37l1.1,-3.12l-0.71,-1.23l-1.15,-0.13l-1.08,1.8l-0.13,0.41l0.74,1.77L251.91,243.37zM109.25,279.8L109.25,279.8l1.56,-2.35L109.25,279.8zM105.85,283.09l-2.69,0.38l-1.32,-0.62l-0.17,1.52l0.52,2.07l1.42,1.46l1.04,2.13l1.69,2.1l1.12,0.01l-2.44,-3.7L105.85,283.09z")
              .attr({id: 'CA',title: 'Canada',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CA'});

      var CF = rsr.path("M518.09,442.66L520.41,442.44L520.93,441.72L521.39,441.78L522.09,442.41L525.62,441.34L526.81,440.24L528.28,439.25L528,438.26L528.79,438L531.5,438.18L534.14,436.87L536.16,433.78L537.59,432.64L539.36,432.15L539.68,433.37L541.3,435.14L541.3,436.29L540.85,437.47L541.03,438.34L542,439.15L544.14,440.39L545.67,441.52L545.7,442.44L547.58,443.9L548.75,445.11L549.46,446.79L551.56,447.9L552.01,448.79L551.08,449.08L549.28,449.02L547.17,448.73L546.13,448.97L545.71,449.65L544.8,449.73L543.7,449.14L540.57,450.53L539.3,450.25L538.91,450.47L538.07,452.15L535.98,451.61L533.93,451.33L532.15,450.3L529.84,449.35L528.34,450.25L527.24,451.67L526.99,453.62L525.19,453.46L523.29,452.99L521.62,454.47L520.15,457.07L519.85,456.26L519.73,454.99L518.45,454.09L517.41,452.65L517.17,451.65L515.85,450.19L516.07,449.36L515.79,448.18L516.01,446.01L516.68,445.5z")
              .attr({id: 'CF',title: 'Central African Republic',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CF'});

      var TD = rsr.path("M515.9,427.26L516.18,425.92L514.38,425.85L514.39,424L513.22,422.94L514.43,419.14L518.01,416.4L518.15,412.61L519.23,406.63L519.84,405.35L518.68,404.33L518.63,403.38L517.58,402.6L516.89,397.93L519.72,396.27L530.91,402.04L542.09,407.74L542.23,419.35L539.81,419.15L538.53,421.28L537.79,423.06L538.37,423.73L537.45,424.61L537.77,425.79L537.04,426.99L536.76,428.04L537.75,427.87L538.33,428.97L538.36,430.63L539.39,431.46L539.36,432.15L537.59,432.64L536.16,433.78L534.14,436.87L531.5,438.18L528.79,438L528,438.26L528.28,439.25L526.81,440.24L525.62,441.34L522.09,442.41L521.39,441.78L520.93,441.72L520.41,442.44L518.09,442.66L518.53,441.89L517.65,439.96L517.25,438.79L516.03,438.31L514.38,436.66L514.99,435.33L516.27,435.61L517.06,435.41L518.62,435.44L517.1,432.87L517.2,430.98L517.01,429.09z")
              .attr({id: 'TD',title: 'Chad',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TD'});

      var CL = rsr.path("M282.81,636.73l0,10.57l3,0l1.69,0.13l-0.93,1.98l-2.4,1.53l-1.38,-0.16l-1.66,-0.4l-2.04,-1.48l-2.94,-0.71l-3.53,-2.71l-2.86,-2.57l-3.86,-5.25l2.31,0.97l3.94,3.13l3.72,1.7l1.45,-2.17l0.91,-3.2l2.58,-1.91L282.81,636.73zM283.97,524.72l1.1,4.15l2.02,-0.41l0.34,0.76l-0.96,3.16l-3.05,1.51l0.09,5.14l-0.59,1l0.84,1.23l-1.98,1.95l-1.84,2.96l-1,2.9l0.27,3.11l-1.73,3.34l1.29,5.69l0.73,0.61l-0.01,3.09l-1.6,3.31l0.06,2.87l-2.12,2.26l0.01,3.22l0.85,3.46l-1.68,1.3l-0.75,3.22l-0.66,3.75l0.47,4.54l-1.13,0.77l0.65,4.4l1.27,1.46l-0.92,1.63l1.3,0.78l0.3,1.48l-1.22,0.75l0.3,2.33l-1.02,5.35l-1.49,3.52l0.33,2.11l-0.89,2.68l-2.15,1.88l0.25,4.6l0.99,1.6l1.87,-0.28l-0.05,3.33l1.16,2.63l6.78,0.61l2.6,0.71l-2.49,-0.03l-1.35,1.13l-2.53,1.67l-0.45,4.38l-1.19,0.11l-3.16,-1.54l-3.21,-3.25l0,0l-3.49,-2.63l-0.88,-2.87l0.79,-2.62l-1.41,-2.94l-0.36,-7.34l1.19,-4.03l2.96,-3.19l-4.26,-1.19l2.67,-3.57l0.95,-6.56l3.12,1.37l1.46,-7.97l-1.88,-1l-0.88,4.75l-1.77,-0.54l0.88,-5.42l0.96,-6.84l1.29,-2.48l-0.81,-3.5l-0.23,-3.98l1.18,-0.11l1.72,-5.6l1.94,-5.43l1.19,-4.97l-0.65,-4.91l0.84,-2.67l-0.34,-3.96l1.64,-3.87l0.51,-6.04l0.9,-6.37l0.88,-6.75l-0.21,-4.87l-0.58,-4.15l1.44,-0.75l0.75,-1.5l1.37,1.99l0.37,2.12l1.47,1.25l-0.88,2.87L283.97,524.72z")
              .attr({id: 'CL',title: 'Chile',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CL'});

      var CN = rsr.path("M784.63,410.41l-2.42,1.41l-2.3,-0.91l-0.08,-2.53l1.38,-1.34l3.06,-0.83l1.61,0.07l0.63,1.13l-1.23,1.3L784.63,410.41zM833.19,302.89l4.88,1.38l3.32,3.03l1.13,3.95l4.26,0l2.43,-1.65l4.63,-1.24l-1.47,3.76l-1.09,1.51l-0.96,4.46l-1.89,3.89l-3.4,-0.7l-2.41,1.4l0.74,3.36l-0.4,4.55l-1.43,0.1l0.02,1.93l-1.81,-2.24l-1.11,2.13l-4.33,1.62l0.44,1.97l-2.42,-0.14l-1.33,-1.17l-1.93,2.64l-3.09,1.98l-2.28,2.35l-3.92,1.06l-2.06,1.69l-3.02,0.98l1.49,-1.67l-0.59,-1.41l2.22,-2.45l-1.48,-1.93l-2.44,1.3l-3.17,2.54l-1.73,2.34l-2.75,0.17l-1.43,1.68l1.48,2.41l2.29,0.58l0.09,1.58l2.22,1.02l3.14,-2.51l2.49,1.37l1.81,0.09l0.46,1.84l-3.97,0.97l-1.31,1.87l-2.73,1.73l-1.44,2.39l3.02,1.86l1.1,3.31l1.71,3.05l1.9,2.53l-0.05,2.43l-1.76,0.89l0.67,1.73l1.65,1l-0.43,2.61l-0.71,2.52l-1.57,0.28l-2.05,3.41l-2.27,4.09l-2.6,3.68l-3.86,2.82l-3.9,2.55l-3.16,0.35l-1.71,1.34l-0.97,-0.98l-1.59,1.5l-3.92,1.5l-2.97,0.46l-0.96,3.15l-1.55,0.17l-0.74,-2.16l0.66,-1.16l-3.76,-0.96l-1.33,0.49l-2.82,-0.78l-1.33,-1.22l0.44,-1.74l-2.56,-0.55l-1.35,-1.14l-2.39,1.62l-2.73,0.35l-2.24,-0.02l-1.5,0.74l-1.45,0.44l0.42,3.43l-1.5,-0.08l-0.25,-0.7l-0.08,-1.24l-2.06,0.87l-1.21,-0.55l-2.08,-1.13l0.82,-2.51l-1.78,-0.59l-0.67,-2.8l-2.96,0.51l0.34,-3.63l2.66,-2.58l0.11,-2.57l-0.08,-2.4l-1.22,-0.75l-0.94,-1.86l-1.64,0.24l-3.02,-0.47l0.95,-1.33l-1.31,-1.99l-2,1.35L740.4,378l-3.23,2.03l-2.55,2.36l-2.26,0.39l-1.23,-0.85l-1.48,-0.08l-2,-0.73l-1.51,0.8l-1.85,2.34l-0.24,-2.48l-1.71,0.66l-3.27,-0.31l-3.17,-0.73l-2.28,-1.39l-2.18,-0.63l-0.94,-1.53l-1.58,-0.46l-2.83,-2.09l-2.25,-0.99l-1.16,0.77l-3.9,-2.26l-2.75,-2.07l-0.79,-3.63l2.01,0.44l0.09,-1.69l-1.12,-1.71l0.28,-2.74l-3.01,-3.99l-4.61,-1.39l-0.83,-2.66l-2.07,-1.63l-0.5,-1.01l-0.42,-2.01l0.1,-1.38l-1.7,-0.81l-0.92,0.36l-0.71,-3.32l0.8,-0.83l-0.39,-0.85l2.68,-1.73l1.94,-0.72l2.97,0.49l1.06,-2.35l3.6,-0.44l1,-1.48l4.42,-2.03l0.39,-0.85l-0.22,-2.17l1.92,-1l-2.52,-6.75l5.55,-1.58l1.44,-0.89l2.02,-7.26l5.56,1.35l1.56,-1.86l0.13,-4.19l2.33,-0.39l2.13,-2.83l1.1,-0.35l0.74,2.97l2.36,2.23l4,1.57l1.93,3.32l-1.08,4.73l1.01,1.73l3.33,0.68l3.78,0.55l3.39,2.45l1.73,0.43l1.28,3.57l1.65,2.27l3.09,-0.09l5.79,0.85l3.73,-0.53l2.77,0.57l4.15,2.29l3.39,0l1.24,1.16l3.26,-2.01l4.53,-1.31l4.2,-0.14l3.28,-1.34l2.01,-2.05l1.96,-1.3l-0.45,-1.28l-0.9,-1.5l1.47,-2.54l1.58,0.36l2.88,0.8l2.79,-2.1l4.28,-1.55l2.05,-2.66l1.97,-1.16l4.07,-0.54l2.21,0.46l0.31,-1.45l-2.54,-2.89l-2.25,-1.33l-2.16,1.54l-2.77,-0.65l-1.59,0.53l-0.72,-1.71l1.98,-4.23l1.37,-3.25l3.37,1.63l3.95,-2.74l-0.03,-1.93l2.53,-4.73l1.56,-1.45l-0.04,-2.52l-1.54,-1.1l2.32,-2.31l3.48,-0.84l3.72,-0.13l4.2,1.39l2.46,1.71l1.73,4.61l1.05,1.94l0.98,2.73L833.19,302.89z")
              .attr({id: 'CN',title: 'China',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CN'});

      var CO = rsr.path("M263.92,463.81L262.72,463.15L261.34,462.23L260.54,462.67L258.16,462.28L257.48,461.08L256.96,461.13L254.15,459.54L253.77,458.67L254.82,458.46L254.7,457.07L255.35,456.06L256.74,455.87L257.93,454.12L259,452.66L257.96,451.99L258.49,450.37L257.86,447.81L258.46,447.08L258.02,444.71L256.88,443.21L257.24,441.85L258.15,442.05L258.68,441.21L258.03,439.56L258.37,439.14L259.81,439.23L261.92,437.26L263.07,436.96L263.1,436.03L263.62,433.64L265.23,432.32L266.99,432.27L267.21,431.68L269.41,431.91L271.62,430.48L272.71,429.84L274.06,428.47L275.06,428.64L275.79,429.39L275.25,430.35L273.45,430.83L272.74,432.25L271.65,433.06L270.84,434.12L270.49,436.13L269.72,437.79L271.16,437.97L271.52,439.27L272.14,439.89L272.36,441.02L272.03,442.06L272.13,442.65L272.82,442.88L273.49,443.86L277.09,443.59L278.72,443.95L280.7,446.36L281.83,446.06L283.85,446.21L285.45,445.89L286.44,446.38L285.93,447.88L285.31,448.82L285.09,450.83L285.65,452.68L286.45,453.51L286.54,454.14L285.12,455.53L286.14,456.14L286.89,457.12L287.74,459.89L287.21,460.24L286.67,458.59L285.89,457.71L284.96,458.67L279.5,458.61L279.53,460.35L281.17,460.64L281.08,461.71L280.52,461.42L278.94,461.88L278.93,463.9L280.17,464.92L280.61,466.51L280.54,467.72L279.28,475.37L277.88,473.88L277.04,473.82L278.85,470.98L276.7,469.67L275.02,469.91L274.01,469.43L272.46,470.17L270.37,469.82L268.72,466.9L267.42,466.18L266.53,464.86L264.67,463.54z")
              .attr({id: 'CO',title: 'Colombia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CO'});

      var CR = rsr.path("M242.63,440.4L241.11,439.77L240.54,439.18L240.86,438.69L240.76,438.07L239.98,437.39L238.88,436.84L237.91,436.48L237.73,435.65L236.99,435.14L237.17,435.97L236.61,436.64L235.97,435.86L235.07,435.58L234.69,435.01L234.71,434.15L235.08,433.25L234.29,432.85L234.93,432.31L235.35,431.94L237.2,432.69L237.84,432.32L238.73,432.56L239.2,433.14L240.02,433.33L240.69,432.73L241.41,434.27L242.49,435.41L243.81,436.62L242.72,436.87L242.74,438L243.32,438.42L242.9,438.76L243.01,439.27L242.78,439.84z")
              .attr({id: 'CR',title: 'Costa Rica',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CR'});

      var HR = rsr.path("M528.05,318.93L528.73,320.48L529.62,321.62L528.54,323.11L527.27,322.23L525.33,322.29L522.92,321.63L521.61,321.72L521.01,322.54L520,321.63L519.41,323.27L520.79,325.1L521.39,326.31L522.68,327.76L523.75,328.61L524.81,330.22L527.29,331.66L526.98,332.3L524.35,330.9L522.72,329.52L520.16,328.38L517.8,325.53L518.37,325.23L517.09,323.59L517.03,322.25L515.23,321.63L514.37,323.34L513.54,322.01L513.61,320.63L513.71,320.57L515.66,320.71L516.18,320.03L517.13,320.68L518.23,320.76L518.22,319.64L519.19,319.23L519.47,317.61L521.7,316.53L522.59,317.03L524.69,318.76L527,319.53z")
              .attr({id: 'HR',title: 'Croatia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'HR'});

      var CU = rsr.path("M244.58,396.94L247.01,397.16L249.21,397.19L251.84,398.22L252.96,399.33L255.58,398.99L256.57,399.69L258.95,401.56L260.69,402.91L261.61,402.87L263.29,403.48L263.08,404.32L265.15,404.44L267.27,405.66L266.94,406.35L265.07,406.73L263.18,406.88L261.25,406.64L257.24,406.93L259.12,405.27L257.98,404.5L256.17,404.3L255.2,403.44L254.53,401.74L252.95,401.85L250.33,401.05L249.49,400.42L245.84,399.95L244.86,399.36L245.91,398.61L243.16,398.46L241.15,400.02L239.98,400.06L239.58,400.8L238.2,401.13L237,400.84L238.48,399.91L239.08,398.82L240.35,398.15L241.78,397.56L243.91,397.27z")
              .attr({id: 'CU',title: 'Cuba',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CU'});

      var CY = rsr.path("M570.31,358.29L572.2,356.83L569.65,357.85L567.63,357.8L567.23,358.63L567.03,358.65L565.7,358.77L566.35,360.14L567.72,360.58L570.6,359.2L570.51,358.93z")
              .attr({id: 'CY',title: 'Cyprus',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CY'});

      var CZ = rsr.path("M522.81,307.86L521.51,307.06L520.2,307.28L518.02,305.98L517.03,306.3L515.46,308.04L513.37,306.67L511.79,304.84L510.36,303.8L510.06,301.98L509.57,300.68L511.61,299.73L512.65,298.63L514.66,297.77L515.37,296.93L516.11,297.44L517.36,296.97L518.69,298.4L520.78,298.79L520.61,300L522.13,300.9L522.55,299.77L524.47,300.26L524.74,301.63L526.82,301.89L528.11,304.02L527.28,304.03L526.84,304.8L526.2,304.99L526.02,305.96L525.48,306.17L525.4,306.56L524.45,307L523.2,306.93z")
              .attr({id: 'CZ',title: 'Czech Republic',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CZ'});

      var CI = rsr.path("M467.24,449.46L465.97,449.49L464.01,448.94L462.22,448.97L458.89,449.46L456.95,450.27L454.17,451.29L453.63,451.22L453.84,448.92L454.11,448.57L454.03,447.46L452.84,446.29L451.95,446.1L451.13,445.33L451.74,444.09L451.46,442.73L451.59,441.91L452.04,441.91L452.2,440.68L451.98,440.14L452.25,439.75L453.29,439.41L452.6,437.15L451.95,435.99L452.18,435.02L452.74,434.81L453.1,434.55L453.88,434.97L456.04,435L456.56,434.17L457.04,434.23L457.85,433.91L458.29,435.12L458.94,434.76L460.1,434.34L461.36,434.96L461.85,435.89L463.11,436.49L464.09,435.78L465.41,435.67L467.33,436.4L468.07,440.41L466.89,442.77L466.16,445.94L467.37,448.35z")
              .attr({id: 'CI',title: 'Côte d\'Ivoire',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CI'});

      var CD = rsr.path("M561.71,453.61L561.54,456.87L562.66,457.24L561.76,458.23L560.68,458.97L559.61,460.43L559.02,461.72L558.86,463.96L558.21,465.02L558.19,467.12L557.38,467.9L557.28,469.56L556.89,469.77L556.63,471.3L557.34,472.56L557.52,475.93L558.02,478.5L557.74,479.96L558.3,481.58L559.93,483.15L561.44,486.7L560.34,486.41L556.57,486.89L555.82,487.22L555.02,489.02L555.65,490.27L555.15,493.62L554.8,496.47L555.56,496.98L557.52,498.08L558.29,497.57L558.53,500.65L556.38,500.62L555.23,499.05L554.2,497.83L552.05,497.43L551.42,495.94L549.7,496.84L547.46,496.44L546.52,495.15L544.74,494.89L543.43,494.96L543.27,494.08L542.3,494.01L541.02,493.84L539.29,494.26L538.07,494.19L537.37,494.45L537.52,491.08L536.59,490.03L536.38,488.3L536.79,486.6L536.23,485.51L536.18,483.75L532.77,483.77L533.02,482.76L531.59,482.77L531.44,483.26L529.7,483.37L528.99,485L528.57,485.71L527.02,485.31L526.1,485.71L524.24,485.93L523.17,484.46L522.53,483.55L521.72,481.87L521.03,479.78L512.76,479.75L511.77,480.08L510.96,480.03L509.8,480.41L509.41,479.54L510.12,479.24L510.21,478.02L510.67,477.3L511.69,476.72L512.43,477L513.39,475.93L514.91,475.96L515.09,476.75L516.14,477.25L517.79,475.49L519.42,474.13L520.13,473.24L520.04,470.94L521.26,468.23L522.54,466.8L524.39,465.46L524.71,464.57L524.78,463.55L525.24,462.58L525.09,461L525.44,458.53L525.99,456.79L526.83,455.3L526.99,453.62L527.24,451.67L528.34,450.25L529.84,449.35L532.15,450.3L533.93,451.33L535.98,451.61L538.07,452.15L538.91,450.47L539.3,450.25L540.57,450.53L543.7,449.14L544.8,449.73L545.71,449.65L546.13,448.97L547.17,448.73L549.28,449.02L551.08,449.08L552.01,448.79L553.7,451.1L554.96,451.43L555.71,450.96L557.01,451.15L558.57,450.56L559.24,451.75z")
              .attr({id: 'CD',title: 'Democratic Republic of Congo',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CD'});

      var DK = rsr.path("M510.83,275.84l-1.68,3.97l-2.93,-2.76l-0.39,-2.05l4.11,-1.66L510.83,275.84zM505.85,271.59l-0.69,1.9l-0.83,-0.55l-2.02,3.59l0.76,2.39l-1.79,0.74l-2.12,-0.64l-1.14,-2.72l-0.08,-5.12l0.47,-1.38l0.8,-1.54l2.47,-0.32l0.98,-1.43l2.26,-1.47l-0.1,2.68l-0.83,1.68l0.34,1.43L505.85,271.59z")
              .attr({id: 'DK',title: 'Denmark',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'DK'});

      var DJ = rsr.path("M596.05,427.72L596.71,428.6L596.62,429.79L595.02,430.47L596.23,431.24L595.19,432.76L594.57,432.26L593.9,432.46L592.33,432.41L592.28,431.55L592.07,430.76L593.01,429.43L594,428.17L595.2,428.42z")
              .attr({id: 'DJ',title: 'Djibouti',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'DJ'});


      var DO = rsr.path("M274.18,407.35L274.53,406.84L276.72,406.86L278.38,407.62L279.12,407.54L279.63,408.59L281.16,408.53L281.07,409.41L282.32,409.52L283.7,410.6L282.66,411.8L281.32,411.16L280.04,411.28L279.12,411.14L278.61,411.68L277.53,411.86L277.11,411.14L276.18,411.57L275.06,413.57L274.34,413.11L274.19,412.27L274.25,411.47L273.53,410.59L274.21,410.09L274.43,408.96z")
              .attr({id: 'DO',title: 'Dominican Republic',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'DO'});

      var EC = rsr.path("M250.1,472.87L251.59,470.79L250.98,469.57L249.91,470.87L248.23,469.64L248.8,468.86L248.33,466.33L249.31,465.91L249.83,464.18L250.89,462.38L250.69,461.25L252.23,460.65L254.15,459.54L256.96,461.13L257.48,461.08L258.16,462.28L260.54,462.67L261.34,462.23L262.72,463.15L263.92,463.81L264.31,465.92L263.44,467.73L260.38,470.65L257.01,471.75L255.29,474.18L254.76,476.06L253.17,477.21L252,475.8L250.86,475.5L249.7,475.72L249.63,474.7L250.43,474.04z")
              .attr({id: 'EC',title: 'Ecuador',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'EC'});

      var EG = rsr.path("M573.17,377.28L572.38,378.57L571.78,380.97L571.02,382.61L570.36,383.17L569.43,382.15L568.16,380.73L566.16,376.16L565.88,376.45L567.04,379.82L568.76,383L570.88,387.88L571.91,389.56L572.81,391.3L575.33,394.7L574.77,395.23L574.86,397.2L578.13,399.91L578.62,400.53L567.5,400.53L556.62,400.53L545.35,400.53L545.35,389.3L545.35,378.12L544.51,375.54L545.23,373.54L544.8,372.15L545.81,370.58L549.54,370.53L552.24,371.39L555.02,372.36L556.32,372.86L558.48,371.83L559.63,370.9L562.11,370.63L564.1,371.04L564.87,372.66L565.52,371.59L567.76,372.36L569.95,372.55L571.33,371.73z")
              .attr({id: 'EG',title: 'Egypt',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'EG'});

      var SV = rsr.path("M229.09,425.76L228.78,426.43L227.16,426.39L226.15,426.12L224.99,425.55L223.43,425.37L222.64,424.75L222.73,424.33L223.69,423.61L224.21,423.29L224.06,422.95L224.72,422.78L225.55,423.02L226.15,423.59L227,424.05L227.1,424.44L228.33,424.1L228.91,424.3L229.29,424.61z")
              .attr({id: 'SV',title: 'El Salvador',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SV'});

      var GQ = rsr.path("M501.87,460.57L501.34,460.15L502.31,457.02L506.87,457.09L506.89,460.44L502.82,460.41z")
              .attr({id: 'GQ',title: 'Equatorial Guinea',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GQ'});

      var ER = rsr.path("M594,428.17L593.04,427.24L591.89,425.57L590.65,424.65L589.92,423.65L587.48,422.5L585.56,422.47L584.88,421.86L583.24,422.54L581.54,421.23L580.66,423.38L577.4,422.78L577.1,421.63L578.31,417.38L578.58,415.45L579.46,414.55L581.53,414.07L582.95,412.4L584.58,415.78L585.35,418.45L586.89,419.86L590.71,422.58L592.27,424.22L593.79,425.88L594.67,426.86L596.05,427.72L595.2,428.42z")
              .attr({id: 'ER',title: 'Eritrea',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'ER'});

      var EE = rsr.path("M543.42,264.71L543.75,261.59L542.72,262.26L540.94,260.36L540.69,257.25L544.24,255.72L547.77,254.91L550.81,255.83L553.71,255.66L554.13,256.62L552.14,259.76L552.97,264.72L551.77,266.38L549.45,266.37L547.04,264.43L545.81,263.78z")
              .attr({id: 'EE',title: 'Estonia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'EE'});

      var ET = rsr.path("M581.54,421.23L583.24,422.54L584.88,421.86L585.56,422.47L587.48,422.5L589.92,423.65L590.65,424.65L591.89,425.57L593.04,427.24L594,428.17L593.01,429.43L592.07,430.76L592.28,431.55L592.33,432.41L593.9,432.46L594.57,432.26L595.19,432.76L594.58,433.77L595.62,435.33L596.65,436.69L597.72,437.7L606.89,441.04L609.25,441.02L601.32,449.44L597.67,449.56L595.17,451.53L593.38,451.58L592.61,452.46L590.69,452.46L589.56,451.52L587,452.69L586.17,453.85L584.3,453.63L583.68,453.31L583.02,453.38L582.14,453.36L578.59,450.98L576.64,450.98L575.68,450.07L575.68,448.5L574.22,448.03L572.57,444.98L571.29,444.33L570.79,443.21L569.37,441.84L567.65,441.64L568.61,440.03L570.09,439.96L570.51,439.1L570.48,436.57L571.31,433.61L572.63,432.81L572.92,431.65L574.12,429.48L575.81,428.06L576.95,425.25L577.4,422.78L580.66,423.38z")
              .attr({id: 'ET',title: 'Ethiopia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'ET'});

      var FK = rsr.path("M303.66,633.13L307.02,630.44L309.41,631.56L311.09,629.77L313.33,631.78L312.49,633.36L308.7,634.72L307.44,633.13L305.06,635.18z")
              .attr({id: 'FK',title: 'Falkland Islands',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'FK'});

      var FJ = rsr.path("M980.53,508.61l-0.35,1.4l-0.23,0.16l-1.78,0.72l-1.79,0.61l-0.36,-1.09l1.4,-0.6l0.89,-0.16l1.64,-0.91L980.53,508.61zM974.69,512.92l-1.27,-0.36l-1.08,1l0.27,1.29l1.55,0.36l1.74,-0.4l0.46,-1.53l-0.96,-0.84L974.69,512.92z")
              .attr({id: 'FJ',title: 'Fiji',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'FJ'});

      var FI = rsr.path("M555.42,193.1L555.01,198.5L559.31,203.49L556.72,208.97L559.98,216.93L558.09,222.69L560.62,227.55L559.47,231.69L563.62,235.95L562.56,239.05L559.96,242.5L553.96,249.91L548.87,250.36L543.94,252.43L539.38,253.61L537.75,250.54L535.04,248.67L535.66,242.95L534.3,237.54L535.64,233.96L538.18,230.02L544.59,223L546.47,221.61L546.17,218.77L542.27,215.55L541.33,212.85L541.25,201.73L536.88,196.58L533.14,192.77L534.82,190.69L537.94,194.84L541.6,194.45L544.61,196.32L547.28,192.88L548.66,187.03L553.01,184.25L556.61,187.51z")
              .attr({id: 'FI',title: 'Finland',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'FI'});

      var FR = rsr.path("M502.06,333.54l-0.93,2.89l-1.27,-0.76l-0.65,-2.53l0.57,-1.41l1.81,-1.45L502.06,333.54zM485.31,300.19l1.96,2.06l1.44,-0.34l2.45,1.97l0.63,0.37l0.81,-0.09l1.32,1.12l4.04,0.79l-1.42,2.9l-0.36,2.98l-0.77,0.71l-1.28,-0.38l0.09,1.05l-2.05,2.3l-0.04,1.84l1.34,-0.63l0.96,1.77l-0.12,1.13l0.83,1.5l-0.97,1.21l0.72,3.04l1.52,0.49l-0.32,1.68l-2.54,2.17l-5.53,-1.04l-4.08,1.24l-0.32,2.29l-3.25,0.49l-3.15,-1.72l-1.02,0.82l-5.16,-1.73l-1.12,-1.49l1.45,-2.32l0.53,-7.88l-2.89,-4.26l-2.07,-2.09l-4.29,-1.6l-0.28,-3.07l3.64,-0.92l4.71,1.09l-0.89,-4.84l2.65,1.85l6.53,-3.37l0.84,-3.61l2.45,-0.9l0.41,1.56l1.3,0.07L485.31,300.19z")
              .attr({id: 'FR',title: 'France',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'FR'});

      var GF = rsr.path("M327.89,456.41l-1.07,1.06l-1.34,0.2l-0.38,-0.78l-0.63,-0.12l-0.87,0.76l-1.22,-0.57l0.71,-1.19l0.24,-1.27l0.48,-1.2l-1.09,-1.65l-0.22,-1.91l1.46,-2.41l0.95,0.31l2.06,0.66l2.97,2.36l0.46,1.14l-1.66,2.55L327.89,456.41z")
              .attr({id: 'GF',title: 'French Guiana',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GF'});

      var TF = rsr.path("M668.54,619.03L670.34,620.36L672.99,620.9L673.09,621.71L672.31,623.67L668,623.95L667.93,621.66L668.35,619.9z")
              .attr({id: 'TF',title: 'French Southern and Antarctic Lands',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TF'});

      var GA = rsr.path("M506.36,474.48L503.48,471.66L501.62,469.36L499.92,466.48L500.01,465.56L500.62,464.66L501.3,462.64L501.87,460.57L502.82,460.41L506.89,460.44L506.87,457.09L508.2,456.9L509.91,457.28L511.57,456.92L511.92,457.07L511.71,458.29L512.5,459.72L514.58,459.5L515.28,460.05L514.07,463.28L515.39,464.92L515.7,467.1L515.35,468.95L514.49,470.27L512.01,470.15L510.51,468.81L510.29,470.05L508.4,470.39L507.44,471.09L508.49,472.94z")
              .attr({id: 'GA',title: 'Gabon',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GA'});

      var GM = rsr.path("M428.03,426.43L428.39,425.16L431.44,425.07L432.08,424.4L432.97,424.35L434.07,425.06L434.94,425.07L435.87,424.59L436.43,425.41L435.22,426.06L434,426.01L432.8,425.4L431.76,426.06L431.26,426.09L430.58,426.49z")
              .attr({id: 'GM',title: 'Gambia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GM'});

      var GE = rsr.path("M591.76,335.85L592.18,334.25L591.48,331.68L589.86,330.27L588.31,329.83L587.28,328.66L587.62,328.2L589.99,328.86L594.12,329.48L597.94,331.31L598.43,332.02L600.13,331.42L602.75,332.22L603.6,333.77L605.37,334.64L604.64,335.15L606.02,337.17L605.64,337.6L604.13,337.38L602.04,336.32L601.35,336.92L597.45,337.5L594.75,335.68z")
              .attr({id: 'GE',title: 'Georgia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GE'});

      var DE = rsr.path("M503.07,278.92L503.12,280.8L505.96,281.92L505.93,283.62L508.78,282.72L510.35,281.41L513.52,283.3L514.84,284.81L515.5,287.2L514.72,288.45L515.73,290.1L516.43,292.55L516.21,294.11L517.36,296.97L516.11,297.44L515.37,296.93L514.66,297.77L512.65,298.63L511.61,299.73L509.57,300.68L510.06,301.98L510.36,303.8L511.79,304.84L513.37,306.67L512.39,308.62L511.38,309.16L511.78,311.88L511.51,312.58L510.64,311.73L509.3,311.61L507.29,312.35L504.82,312.17L504.42,313.26L503,312.12L502.15,312.34L499.15,311.08L498.57,311.98L496.19,311.95L496.54,308.97L497.96,306.07L493.92,305.29L492.6,304.16L492.76,302.27L492.2,301.29L492.52,298.32L492.04,293.63L493.73,293.63L494.44,291.92L495.14,287.69L494.61,286.11L495.16,285.11L497.5,284.85L498.02,285.89L499.93,283.56L499.29,281.77L499.16,279.02L501.28,279.66z")
              .attr({id: 'DE',title: 'Germany',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'DE'});

      var GH = rsr.path("M478.23,446.84L473.83,448.48L472.27,449.44L469.74,450.25L467.24,449.46L467.37,448.35L466.16,445.94L466.89,442.77L468.07,440.41L467.33,436.4L466.94,434.27L467.01,432.66L471.88,432.53L473.12,432.74L474.02,432.28L475.32,432.5L475.11,433.39L476.28,434.85L476.28,436.9L476.55,439.12L477.25,440.15L476.63,442.68L476.85,444.08L477.6,445.86z")
              .attr({id: 'GH',title: 'Ghana',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GH'});

      var GR = rsr.path("M541.7,356.71l1.53,1.16l2.18,-0.19l2.09,0.24l-0.07,0.6l1.53,-0.41l-0.35,1.01l-4.04,0.29l0.03,-0.56l-3.42,-0.67L541.7,356.71zM549.85,335.75l-0.87,2.33l-0.67,0.41l-1.71,-0.1l-1.46,-0.35l-3.4,0.96l1.94,2.06l-1.42,0.59l-1.56,0l-1.48,-1.88l-0.53,0.8l0.63,2.18l1.4,1.7l-1.06,0.79l1.56,1.65l1.39,1.03l0.04,2l-1.36,-1.15l-1.24,0.21l0.83,1.8l-0.92,0.19l-1,-0.69l1.2,3.95l-0.58,0l-0.45,-1.25l-0.57,-0.02l-0.26,1.32l-0.45,-0.3l0.1,-0.74l-0.56,-1.04h-0.64l0.12,0.84l-0.25,0.27l-0.62,-0.54l-0.38,-1.01l0.52,-0.57l-0.36,-0.74l-0.41,-0.38l-0.42,-0.09l-0.49,-0.94l0.58,-0.52l0.36,-0.48l0.56,0.1l0.25,-0.41l0.59,-0.16l0.68,0.46l0.55,0.17l0.39,-0.62l-0.94,-0.08l-0.56,-0.19l-1.25,0.28l-1.22,0.05l-1.09,-1.64l-0.18,-0.25l0.17,-0.64l-1.42,-1.15l-0.19,-1.03l1.3,-1.76l0.17,-1.19l0.91,-0.53l0.06,-0.97l1.83,-0.33l1.07,-0.81l1.52,0.07l0.46,-0.65l0.53,-0.12l2.07,0.11l2.25,-1.02l1.98,1.3l2.55,-0.35l0.03,-1.86L549.85,335.75z")
              .attr({id: 'GR',title: 'Greece',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GR'});

      var GL = rsr.path("M344.13,23.91L353.55,10.3L363.39,11.37L366.96,2.42L376.87,0L399.27,3.15L416.81,21.74L411.63,30.04L400.9,30.97L385.81,33L387.22,36.64L397.15,34.4L405.59,41.31L411.04,35.19L413.37,42.34L410.29,53.31L417.43,46.38L431.04,38.83L439.45,42.64L441.02,50.76L429.59,63.42L428.01,67.32L419.05,70.18L425.54,70.97L422.26,82.48L420,92.07L420.09,107.33L423.46,115.67L419.08,116.18L414.47,120.06L419.64,126.36L420.3,135.98L417.3,137L420.93,146.15L414.71,146.9L417.96,151.04L417.04,154.55L413.09,156.06L409.18,156.09L412.69,162.57L412.73,166.7L407.18,162.87L405.74,165.36L409.52,167.65L413.2,173.13L414.26,180.08L409.26,181.7L407.1,178.44L403.63,173.46L404.59,179.33L401.34,183.74L408.72,184.09L412.59,184.54L405.07,191.57L397.45,197.7L389.25,200.31L386.16,200.35L383.26,203.22L379.36,210.85L373.33,215.74L371.39,216.03L367.65,217.7L363.63,219.29L361.22,223.41L361.18,227.97L359.77,232.13L355.19,237.08L356.32,241.79L355.06,246.64L353.63,252.2L349.68,252.54L345.54,247.91L339.93,247.88L337.21,244.7L335.34,238.9L330.48,231.22L329.06,227.07L328.68,221.18L324.79,214.91L325.8,209.74L323.93,207.21L326.7,198.56L330.92,195.71L332.03,192.45L332.62,186.19L329.41,189.05L327.89,190.24L325.37,191.38L321.93,188.77L321.74,183.22L322.84,178.74L325.44,178.62L331.16,180.87L326.34,175.44L323.83,172.43L321.04,173.67L318.7,171.48L321.83,162.98L320.13,159.45L317.9,152.71L314.53,141.8L310.96,137.63L310.99,133L303.46,126.31L297.51,125.46L290.02,125.93L283.18,126.79L279.92,123.04L275.05,115.38L282.41,111.41L288.06,110.73L276.06,107.37L269.74,101.93L270.13,96.59L280.74,89.72L291.01,82.56L292.09,76.92L284.53,71.16L286.97,64.52L296.68,52.19L300.76,50.21L299.59,41.64L306.23,36.4L314.85,33.19L323.47,33.01L326.53,39.31L333.97,27.99L340.66,35.77L344.59,37.36L350.42,43.77L343.75,33z")
              .attr({id: 'GL',title: 'Greenland',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GL'});

      var GT = rsr.path("M222.64,424.75L221.2,424.25L219.45,424.2L218.17,423.63L216.66,422.45L216.73,421.61L217.05,420.93L216.66,420.39L218.01,418.03L221.6,418.02L221.68,417.04L221.22,416.86L220.91,416.23L219.87,415.56L218.83,414.58L220.1,414.58L220.1,412.93L222.72,412.93L225.31,412.96L225.29,415.27L225.07,418.55L225.9,418.55L226.82,419.08L227.06,418.64L227.88,419.01L226.61,420.12L225.28,420.93L225.08,421.48L225.3,422.04L224.72,422.78L224.06,422.95L224.21,423.29L223.69,423.61L222.73,424.33z")
              .attr({id: 'GT',title: 'Guatemala',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GT'});

      var GN = rsr.path("M451.59,441.91L450.8,441.84L450.23,442.97L449.43,442.96L448.89,442.36L449.07,441.23L447.9,439.51L447.17,439.82L446.57,439.89L445.8,440.05L445.83,439.02L445.38,438.28L445.47,437.46L444.86,436.27L444.08,435.26L441.84,435.26L441.19,435.79L440.41,435.85L439.93,436.46L439.61,437.25L438.11,438.49L436.88,436.82L435.79,435.71L435.07,435.35L434.37,434.78L434.06,433.53L433.65,432.91L432.83,432.44L434.08,431.06L434.93,431.11L435.66,430.63L436.28,430.63L436.72,430.25L436.48,429.31L436.79,429.01L436.84,428.04L438.19,428.07L440.21,428.77L440.83,428.7L441.04,428.39L442.56,428.61L442.97,428.45L443.13,429.5L443.58,429.49L444.31,429.11L444.77,429.21L445.55,429.93L446.75,430.16L447.52,429.54L448.43,429.16L449.1,428.76L449.66,428.84L450.28,429.46L450.62,430.25L451.77,431.44L451.19,432.17L451.08,433.09L451.68,432.81L452.03,433.15L451.88,433.99L452.74,434.81L452.18,435.02L451.95,435.99L452.6,437.15L453.29,439.41L452.25,439.75L451.98,440.14L452.2,440.68L452.04,441.91z")
              .attr({id: 'GN',title: 'Guinea',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GN'});

      var GW = rsr.path("M432.83,432.44L431.33,431.25L430.15,431.07L429.51,430.26L429.52,429.83L428.67,429.23L428.49,428.62L429.98,428.15L430.91,428.24L431.66,427.92L436.84,428.04L436.79,429.01L436.48,429.31L436.72,430.25L436.28,430.63L435.66,430.63L434.93,431.11L434.08,431.06z")
              .attr({id: 'GW',title: 'Guinea-Bissau',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GW'});

      var GY = rsr.path("M307.7,440L309.54,441.03L311.28,442.86L311.35,444.31L312.41,444.38L313.91,445.74L315.02,446.72L314.57,449.24L312.87,449.97L313.02,450.62L312.5,452.07L313.75,454.09L314.64,454.1L315.01,455.67L316.72,458.09L316.04,458.19L314.49,457.96L313.58,458.7L312.31,459.19L311.43,459.31L311.12,459.85L309.74,459.71L308.01,458.41L307.81,457.12L307.09,455.71L307.54,453.33L308.32,452.35L307.67,451.05L306.71,450.63L307.08,449.4L306.42,448.76L304.96,448.88L303.07,446.76L303.83,445.99L303.77,444.69L305.5,444.24L306.19,443.72L305.23,442.68L305.48,441.65z")
              .attr({id: 'GY',title: 'Guyana',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GY'});

      var HT = rsr.path("M270.04,406.75L271.75,406.88L274.18,407.35L274.43,408.96L274.21,410.09L273.53,410.59L274.25,411.47L274.19,412.27L272.33,411.77L271.01,411.97L269.3,411.76L267.99,412.31L266.48,411.39L266.73,410.44L269.31,410.85L271.43,411.09L272.44,410.43L271.16,409.16L271.18,408.03L269.41,407.57z")
              .attr({id: 'HT',title: 'Haiti',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'HT'});

      var HN = rsr.path("M230.43,426.9L229.95,426.01L229.09,425.76L229.29,424.61L228.91,424.3L228.33,424.1L227.1,424.44L227,424.05L226.15,423.59L225.55,423.02L224.72,422.78L225.3,422.04L225.08,421.48L225.28,420.93L226.61,420.12L227.88,419.01L228.17,419.13L228.79,418.62L229.59,418.58L229.85,418.81L230.29,418.67L231.59,418.93L232.89,418.85L233.79,418.53L234.12,418.21L235.01,418.36L235.68,418.56L236.41,418.49L236.97,418.24L238.25,418.64L238.7,418.7L239.55,419.24L240.36,419.89L241.38,420.33L242.12,421.13L241.16,421.07L240.77,421.46L239.8,421.84L239.09,421.84L238.47,422.21L237.91,422.08L237.43,421.64L237.14,421.72L236.78,422.41L236.51,422.38L236.46,422.98L235.48,423.77L234.97,424.11L234.68,424.47L233.85,423.89L233.25,424.65L232.66,424.63L232,424.7L232.06,426.11L231.65,426.13L231.3,426.79z")
              .attr({id: 'HN',title: 'Honduras',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'HN'});

      var HU = rsr.path("M520.68,315.11L521.61,312.46L521.07,311.57L522.65,311.56L522.86,309.85L524.29,310.92L525.32,311.38L527.68,310.87L527.9,310.03L529.02,309.9L530.38,309.25L530.68,309.52L532,309L532.66,308L533.58,307.75L536.58,309.03L537.18,308.6L538.73,309.74L538.93,310.86L537.22,311.73L535.89,314.53L534.2,317.29L531.95,318.05L530.2,317.88L528.05,318.93L527,319.53L524.69,318.76L522.59,317.03L521.7,316.53L521.15,315.16z")
              .attr({id: 'HU',title: 'Hungary',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'HU'});

      var IS = rsr.path("M434.57,212.43L433.93,216.91L437.09,221.51L433.45,226.52L425.36,230.9L422.94,232.05L419.25,231.12L411.43,229.11L414.19,226.27L408.09,223.07L413.05,221.79L412.93,219.82L407.05,218.25L408.94,213.78L413.19,212.75L417.56,217.43L421.82,213.68L425.35,215.64L429.92,211.93z")
              .attr({id: 'IS',title: 'Iceland',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'IS'});

      var IN = rsr.path("M693.5,357.44L696.51,361.43L696.23,364.17L697.34,365.88L697.25,367.57L695.24,367.13L696.03,370.76L698.78,372.82L702.68,375.09L700.9,376.55L699.81,379.54L702.53,380.74L705.17,382.29L708.83,384.06L712.67,384.47L714.29,386.06L716.45,386.35L719.83,387.08L722.16,387.03L722.48,385.79L722.11,383.8L722.33,382.45L724.04,381.78L724.28,384.26L724.33,384.89L726.88,386.08L728.65,385.59L731.01,385.8L733.3,385.71L733.5,383.78L732.36,382.78L734.62,382.38L737.17,380.03L740.4,378L742.75,378.78L744.75,377.44L746.07,379.42L745.12,380.76L748.14,381.23L748.36,382.43L747.37,383.01L747.6,384.94L745.6,384.37L741.97,386.53L742.05,388.31L740.51,390.91L740.36,392.41L739.11,394.93L736.92,394.23L736.81,397.38L736.18,398.41L736.48,399.69L735.09,400.41L733.62,395.61L732.84,395.62L732.38,397.56L730.85,395.98L731.71,394.25L732.97,394.07L734.26,391.48L732.65,390.95L730.04,391L727.38,390.58L727.13,388.43L725.79,388.27L723.57,386.93L722.58,389.04L724.6,390.67L722.85,391.82L722.23,392.94L723.95,393.76L723.48,395.6L724.45,397.88L724.89,400.36L724.48,401.46L722.58,401.42L719.12,402.04L719.28,404.29L717.78,406.05L713.75,408.05L710.61,411.51L708.5,413.36L705.71,415.27L705.71,416.61L704.31,417.33L701.78,418.36L700.47,418.52L699.63,420.72L700.21,424.47L700.36,426.84L699.18,429.55L699.16,434.38L697.71,434.52L696.44,436.67L697.29,437.6L694.73,438.4L693.79,440.32L692.66,441.13L690.01,438.5L688.71,434.54L687.63,431.68L686.65,430.34L685.16,427.6L684.47,424.02L683.98,422.22L681.43,418.25L680.27,412.61L679.43,408.84L679.44,405.26L678.9,402.46L674.82,404.25L672.84,403.89L669.18,400.26L670.53,399.17L669.7,397.99L666.41,395.41L668.28,393.37L674.45,393.38L673.89,390.74L672.32,389.18L672,386.79L670.16,385.39L673.25,382.09L676.51,382.33L679.44,379.01L681.2,375.75L683.92,372.51L683.88,370.18L686.27,368.27L684,366.64L683.03,364.39L682.04,361.44L683.41,359.98L687.67,360.81L690.79,360.3z")
              .attr({id: 'IN',title: 'India',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'IN'});

      var ID = rsr.path("M813.72,492.06l-1.18,0.05l-3.72,-1.98l2.61,-0.56l1.47,0.86l0.98,0.86L813.72,492.06zM824.15,491.78l-2.4,0.62l-0.34,-0.34l0.25,-0.96l1.21,-1.72l2.77,-1.12l0.28,0.56l0.05,0.86L824.15,491.78zM805.83,486.01l1.01,0.75l1.73,-0.23l0.7,1.2l-3.24,0.57l-1.94,0.38l-1.51,-0.02l0.96,-1.62l1.54,-0.02L805.83,486.01zM819.86,486l-0.41,1.56l-4.21,0.8l-3.73,-0.35l-0.01,-1.03l2.23,-0.59l1.76,0.84l1.87,-0.21L819.86,486zM779.82,482.31l5.37,0.28l0.62,-1.16l5.2,1.35l1.02,1.82l4.21,0.51l3.44,1.67l-3.2,1.07l-3.08,-1.13l-2.54,0.08l-2.91,-0.21l-2.62,-0.51l-3.25,-1.07l-2.06,-0.28l-1.17,0.35l-5.11,-1.16l-0.49,-1.21l-2.57,-0.21l1.92,-2.68l3.4,0.17l2.26,1.09l1.16,0.21L779.82,482.31zM853,480.73l-1.44,1.91l-0.27,-2.11l0.5,-1.01l0.59,-0.95l0.64,0.82L853,480.73zM832.04,473.02l-1.05,0.93l-1.94,-0.51l-0.55,-1.2l2.84,-0.13L832.04,473.02zM841.08,472.01l1.02,2.13l-2.37,-1.15l-2.34,-0.23l-1.58,0.18l-1.94,-0.1l0.67,-1.53l3.46,-0.12L841.08,472.01zM851.37,466.59l0.78,4.51l2.9,1.67l2.34,-2.96l3.22,-1.68l2.49,0l2.4,0.97l2.08,1l3.01,0.53l0.05,9.1l0.05,9.16l-2.5,-2.31l-2.85,-0.57l-0.69,0.8l-3.55,0.09l1.19,-2.29l1.77,-0.78l-0.73,-3.05l-1.35,-2.35l-5.44,-2.37l-2.31,-0.23l-4.21,-2.58l-0.83,1.36l-1.08,0.25l-0.64,-1.02l-0.01,-1.21l-2.14,-1.37l3.02,-1l2,0.05l-0.24,-0.74l-4.1,-0.01l-1.11,-1.66l-2.5,-0.51l-1.19,-1.38l3.78,-0.67l1.44,-0.91l4.5,1.14L851.37,466.59zM826.41,459.43l-2.25,2.76l-2.11,0.54l-2.7,-0.54l-4.67,0.14l-2.45,0.4l-0.4,2.11l2.51,2.48l1.51,-1.26l5.23,-0.95l-0.23,1.28l-1.22,-0.4l-1.22,1.63l-2.47,1.08l2.65,3.57l-0.51,0.96l2.52,3.22l-0.02,1.84l-1.5,0.82l-1.1,-0.98l1.36,-2.29l-2.75,1.08l-0.7,-0.77l0.36,-1.08l-2.02,-1.64l0.21,-2.72l-1.87,0.85l0.24,3.25l0.11,4l-1.78,0.41l-1.2,-0.82l0.8,-2.57l-0.43,-2.69l-1.18,-0.02l-0.87,-1.91l1.16,-1.83l0.4,-2.21l1.41,-4.2l0.59,-1.15l2.38,-2.07l2.19,0.82l3.54,0.39l3.22,-0.12l2.77,-2.02L826.41,459.43zM836.08,460.23l-0.15,2.43l-1.45,-0.27l-0.43,1.69l1.16,1.47l-0.79,0.33l-1.13,-1.76l-0.83,-3.56l0.56,-2.23l0.93,-1.01l0.2,1.52l1.66,0.24L836.08,460.23zM805.76,458.29l3.14,2.58l-3.32,0.33l-0.94,1.9l0.12,2.52l-2.7,1.91L802,470.3l-1.08,4.27l-0.41,-0.99l-3.19,1.26l-1.11,-1.71l-2,-0.16l-1.4,-0.89l-3.33,1l-1.02,-1.35l-1.84,0.15l-2.31,-0.32l-0.43,-3.74l-1.4,-0.77l-1.35,-2.38l-0.39,-2.44l0.33,-2.58l1.67,-1.85l0.47,1.86l1.92,1.57l1.81,-0.57l1.79,0.2l1.63,-1.41l1.34,-0.24l2.65,0.78l2.29,-0.59l1.44,-3.88l1.08,-0.97l0.97,-3.17l3.22,0l2.43,0.47l-1.59,2.52l2.06,2.64L805.76,458.29zM771.95,479.71l-3.1,0.06l-2.36,-2.34l-3.6,-2.28l-1.2,-1.69l-2.12,-2.27l-1.39,-2.09l-2.13,-3.9l-2.46,-2.32l-0.82,-2.39l-1.03,-2.17l-2.53,-1.75l-1.47,-2.39l-2.11,-1.56l-2.92,-3.08l-0.25,-1.42l1.81,0.11l4.34,0.54l2.48,2.73l2.17,1.89l1.55,1.16l2.66,3l2.85,0.04l2.36,1.91l1.62,2.33l2.13,1.27l-1.12,2.27l1.61,0.97l1.01,0.07l0.48,1.94l0.98,1.56l2.06,0.25l1.36,1.76l-0.7,3.47L771.95,479.71z")
              .attr({id: 'ID',title: 'Indonesia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'ID'});

      var IR = rsr.path("M626.44,351.53L628.91,350.85L630.9,348.83L632.77,348.93L634,348.27L636,348.6L639.1,350.39L641.34,350.78L644.54,353.87L646.63,353.99L646.88,356.9L645.74,361.15L644.97,363.6L646.19,364.09L644.99,365.92L645.91,368.56L646.13,370.65L648.25,371.2L648.48,373.3L645.94,376.23L647.32,377.91L648.45,379.84L651.13,381.24L651.21,384.01L652.55,384.52L652.78,385.96L648.74,387.57L647.68,391.17L642.41,390.24L639.35,389.53L636.19,389.12L634.99,385.31L633.65,384.75L631.49,385.31L628.67,386.82L625.24,385.79L622.41,383.38L619.71,382.48L617.84,379.47L615.77,375.2L614.26,375.72L612.48,374.65L611.43,375.91L609.88,374.22L609.85,372.49L608.96,372.49L609.42,370.12L607.97,367.62L604.54,365.8L602.59,362.62L603.24,359.98L604.66,358.81L604.44,356.81L602.61,355.77L600.79,351.63L599.26,348.8L599.8,347.71L598.93,343.59L600.85,342.56L601.29,343.93L602.71,345.59L604.63,346.06L605.65,345.96L608.96,343.3L610.01,343.03L610.83,344.1L609.87,345.88L611.62,347.74L612.31,347.57L613.2,350.18L615.86,350.91L617.81,352.67L621.79,353.27L626.17,352.35z")
              .attr({id: 'IR',title: 'Iran',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'IR'});

      var IQ = rsr.path("M602.61,355.77L604.44,356.81L604.66,358.81L603.24,359.98L602.59,362.62L604.54,365.8L607.97,367.62L609.42,370.12L608.96,372.49L609.85,372.49L609.88,374.22L611.43,375.91L609.77,375.76L607.88,375.49L605.82,378.57L600.61,378.31L592.71,371.82L588.53,369.53L585.15,368.64L584.02,364.6L590.23,361.1L591.29,356.98L591.02,354.46L592.56,353.6L594,351.42L595.2,350.87L598.46,351.33L599.45,352.22L600.79,351.63z")
              .attr({id: 'IQ',title: 'Iraq',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'IQ'});

      var IE = rsr.path("M457.88,284.29L458.34,287.65L456.22,291.77L451.25,294.45L447.28,293.77L449.55,288.99L448.09,284.22L451.9,280.47L454.02,278.2L454.6,280.8L454.02,283.37L455.76,283.31z")
              .attr({id: 'IE',title: 'Ireland',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'IE'});

      var IL = rsr.path("M575.41,366.82L574.92,367.87L573.9,367.41L573.32,369.61L574.02,369.97L573.31,370.43L573.18,371.29L574.5,370.84L574.57,372.11L573.17,377.28L571.33,371.73L572.14,370.65L571.95,370.46L572.69,368.93L573.26,366.43L573.66,365.59L573.74,365.56L574.68,365.56L574.94,364.98L575.69,364.93L575.73,366.3L575.35,366.8z")
              .attr({id: 'IL',title: 'Israel',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'IL'});

      var IT = rsr.path("M518.77,347.88l-1.01,2.78l0.42,1.09l-0.59,1.79l-2.14,-1.31l-1.43,-0.38l-3.91,-1.79l0.39,-1.82l3.28,0.32l2.86,-0.39L518.77,347.88zM501.08,337.06l1.68,2.62l-0.39,4.81l-1.27,-0.23l-1.14,1.2l-1.06,-0.95l-0.11,-4.38l-0.64,-2.1l1.54,0.19L501.08,337.06zM509.95,315.46l4.01,1.05l-0.3,1.99l0.67,1.71l-2.23,-0.58l-2.28,1.42l0.16,1.97l-0.34,1.12l0.92,1.99l2.63,1.95l1.41,3.17l3.12,3.05l2.2,-0.02l0.68,0.83l-0.79,0.74l2.51,1.35l2.06,1.12l2.4,1.92l0.29,0.68l-0.52,1.31l-1.56,-1.7l-2.44,-0.6l-1.18,2.36l2.03,1.34l-0.33,1.88l-1.17,0.21l-1.5,3.06l-1.17,0.27l0.01,-1.08l0.57,-1.91l0.61,-0.77l-1.09,-2.09l-0.86,-1.83l-1.16,-0.46l-0.83,-1.58l-1.8,-0.67l-1.21,-1.49l-2.07,-0.24l-2.19,-1.68l-2.56,-2.45l-1.91,-2.19l-0.87,-3.8l-1.4,-0.45l-2.28,-1.29l-1.29,0.53l-1.62,1.8l-1.17,0.28l0.32,-1.68l-1.52,-0.49l-0.72,-3.04l0.97,-1.21l-0.83,-1.5l0.12,-1.13l1.21,0.86l1.35,-0.19l1.57,-1.36l0.49,0.64l1.34,-0.13l0.61,-1.63l2.07,0.51l1.24,-0.68l0.22,-1.67l1.7,0.58l0.33,-0.78l2.77,-0.71L509.95,315.46z")
              .attr({id: 'IT',title: 'Italy',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'IT'});

      var JM = rsr.path("M257.76,410.96L259.65,411.22L261.14,411.93L261.6,412.73L259.63,412.78L258.78,413.27L257.21,412.8L255.61,411.73L255.94,411.06L257.12,410.86z")
              .attr({id: 'JM',title: 'Jamaica',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'JM'});

      var JP = rsr.path("M852.76,362.01l0.36,1.15l-1.58,2.03l-1.15,-1.07l-1.44,0.78l-0.74,1.95l-1.83,-0.95l0.02,-1.58l1.55,-2l1.59,0.39l1.15,-1.42L852.76,362.01zM870.53,351.73l-1.06,2.78l0.49,1.73l-1.46,2.42l-3.58,1.6l-4.93,0.21l-4,3.84l-1.88,-1.29L854,360.5l-4.88,0.75l-3.32,1.59l-3.28,0.06l2.84,2.46l-1.87,5.61l-1.81,1.37l-1.36,-1.27l0.69,-2.96l-1.77,-0.96l-1.14,-2.28l2.65,-1.03l1.47,-2.11l2.82,-1.75l2.06,-2.33l5.58,-1.02l3,0.7l2.93,-6.17l1.87,1.67l4.11,-3.51l1.59,-1.38l1.76,-4.38l-0.48,-4.1l1.18,-2.33l2.98,-0.68l1.53,5.11l-0.08,2.94l-2.59,3.6L870.53,351.73zM878.76,325.8l1.97,0.83l1.98,-1.65l0.62,4.35l-4.16,1.05l-2.46,3.76l-4.41,-2.58l-1.53,4.12l-3.12,0.06l-0.39,-3.74l1.39,-2.94l3,-0.21l0.82,-5.38l0.83,-3.09l3.29,4.12L878.76,325.8z")
              .attr({id: 'JP',title: 'Japan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'JP'});

      var JO = rsr.path("M574.92,367.87L575.41,366.82L578.53,368.14L584.02,364.6L585.15,368.64L584.62,369.13L579,370.78L581.8,374.04L580.87,374.58L580.41,375.67L578.27,376.11L577.6,377.27L576.38,378.25L573.26,377.74L573.17,377.28L574.57,372.11L574.5,370.84L574.92,369.88z")
              .attr({id: 'JO',title: 'Jordan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'JO'});

      var KZ = rsr.path("M674.22,333.11L672.61,333.81L668.92,336.42L667.69,339.07L666.64,339.09L665.88,337.34L662.31,337.22L661.74,334.16L660.37,334.13L660.58,330.33L657.23,327.53L652.42,327.83L649.13,328.39L646.45,324.89L644.16,323.41L639.81,320.57L639.29,320.22L632.07,322.57L632.18,336.7L630.74,336.88L628.78,333.95L626.88,332.89L623.7,333.68L622.46,334.93L622.3,334.01L622.99,332.44L622.46,331.12L619.21,329.82L617.94,326.35L616.4,325.37L616.3,324.09L619.03,324.46L619.14,321.58L621.52,320.94L623.97,321.53L624.48,317.62L623.98,315.11L621.17,315.31L618.79,314.31L615.54,316.1L612.93,316.96L611.5,316.3L611.79,314.2L610,311.44L607.92,311.55L605.54,308.72L607.16,305.5L606.34,304.63L608.57,299.86L611.46,302.39L611.81,299.2L617.59,294.35L621.97,294.23L628.16,297.33L631.47,299.12L634.45,297.25L638.89,297.17L642.48,299.46L643.3,298.15L647.23,298.34L647.94,296.23L643.39,293.14L646.08,290.91L645.56,289.66L648.25,288.45L646.23,285.25L647.51,283.63L658,281.97L659.37,280.78L666.39,278.99L668.91,276.95L673.95,278.01L674.83,283.02L677.76,281.86L681.36,283.49L681.13,286.07L683.82,285.8L690.84,281.31L689.82,282.81L693.4,286.47L699.66,298.05L701.16,295.72L705.02,298.28L709.05,297.14L710.59,297.94L711.94,300.49L713.9,301.33L715.1,303.18L718.71,302.6L720.2,305.23L718.06,308.06L715.73,308.46L715.6,312.64L714.04,314.5L708.48,313.15L706.46,320.41L705.02,321.3L699.47,322.88L701.99,329.63L700.07,330.63L700.29,332.79L698.56,332.24L697.16,330.87L693,330.47L688.35,330.37L687.33,330.79L683.33,329.18L681.74,329.98L681.31,332.22L676.69,330.91L674.85,331.45z")
              .attr({id: 'KZ',title: 'Kazakhstan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'KZ'});

      var KE = rsr.path("M590.19,465.78L591.85,468.07L589.89,469.19L589.2,470.35L588.14,470.55L587.75,472.52L586.85,473.64L586.3,475.5L585.17,476.42L581.15,473.63L580.95,472.01L570.79,466.34L570.31,466.03L570.29,463.08L571.09,461.95L572.47,460.11L573.49,458.08L572.26,454.88L571.93,453.48L570.6,451.54L572.32,449.87L574.22,448.03L575.68,448.5L575.68,450.07L576.64,450.98L578.59,450.98L582.14,453.36L583.02,453.38L583.68,453.31L584.3,453.63L586.17,453.85L587,452.69L589.56,451.52L590.69,452.46L592.61,452.46L590.16,455.63z")
              .attr({id: 'KE',title: 'Kenya',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'KE'});

      var KX = rsr.path("M533.47,333.92L533.34,334.69L532.98,334.66L532.8,333.29L532.13,332.91L531.53,331.89L532.05,331.04L532.72,330.76L533.11,329.5L533.61,329.28L534.01,329.82L534.54,330.06L534.9,330.67L535.36,330.85L535.91,331.55L536.31,331.53L535.99,332.46L535.66,332.91L535.75,333.19L535.12,333.33z")
              .attr({id: 'KX',title: 'Kosovo',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'KX'});

      var KW = rsr.path("M609.77,375.76L610.35,377.17L610.1,377.9L611,380.31L609.02,380.39L608.32,378.88L605.82,378.57L607.88,375.49z")
              .attr({id: 'KW',title: 'Kuwait',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'KW'});

      var KG = rsr.path("M674.22,333.11L674.85,331.45L676.69,330.91L681.31,332.22L681.74,329.98L683.33,329.18L687.33,330.79L688.35,330.37L693,330.47L697.16,330.87L698.56,332.24L700.29,332.79L699.9,333.65L695.48,335.68L694.48,337.16L690.88,337.6L689.82,339.95L686.85,339.46L684.92,340.18L682.24,341.9L682.63,342.75L681.83,343.58L676.53,344.13L673.06,342.96L670.02,343.24L670.29,341.14L673.34,341.75L674.37,340.62L676.5,340.98L680.09,338.34L676.77,336.38L674.77,337.31L672.7,335.91L675.05,333.48z")
              .attr({id: 'KG',title: 'Kyrgyzstan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'KG'});

      var LA = rsr.path("M770.27,423.21L771.18,421.91L771.31,419.47L769.04,416.94L768.86,414.07L766.73,411.69L764.61,411.49L764.05,412.51L762.4,412.59L761.56,412.08L758.61,413.82L758.54,411.2L759.23,408.09L757.34,407.96L757.18,406.18L755.96,405.26L756.56,404.16L758.95,402.22L759.2,402.92L760.69,403L760.27,399.57L761.72,399.13L763.36,401.5L764.62,404.22L768.07,404.25L769.16,406.84L767.37,407.61L766.56,408.68L769.92,410.44L772.25,413.9L774.02,416.47L776.14,418.49L776.85,420.53L776.34,423.41L773.85,422.35L772.58,424.34z")
              .attr({id: 'LA',title: 'Lao People\'s Democratic Republic',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'LA'});

      var LV = rsr.path("M534.29,273.75L534.39,269.94L535.77,266.7L538.41,264.92L540.63,268.8L542.88,268.7L543.42,264.71L545.81,263.78L547.04,264.43L549.45,266.37L551.77,266.38L553.12,267.57L553.35,270.06L554.26,273.05L551.24,274.98L549.54,275.82L546.84,273.4L545.35,273.08L544.96,272.03L542.2,272.53L537.5,272.2z")
              .attr({id: 'LV',title: 'Latvia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'LV'});

      var LB = rsr.path("M575.69,364.93L574.94,364.98L574.68,365.56L573.74,365.56L574.74,362.83L576.13,360.45L576.19,360.33L577.45,360.51L577.91,361.83L576.38,363.1z")
              .attr({id: 'LB',title: 'Lebanon',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'LB'});

      var LS = rsr.path("M556.5,547.75L557.48,548.71L556.62,550.27L556.14,551.32L554.58,551.82L554.06,552.86L553.06,553.18L550.96,550.69L552.45,548.66L553.97,547.41L555.28,546.77z")
              .attr({id: 'LS',title: 'Lesotho',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'LS'});

      var LR = rsr.path("M453.63,451.22L452.89,451.24L450,449.91L447.46,447.78L445.07,446.25L443.18,444.44L443.85,443.54L444,442.73L445.26,441.2L446.57,439.89L447.17,439.82L447.9,439.51L449.07,441.23L448.89,442.36L449.43,442.96L450.23,442.97L450.8,441.84L451.59,441.91L451.46,442.73L451.74,444.09L451.13,445.33L451.95,446.1L452.84,446.29L454.03,447.46L454.11,448.57L453.84,448.92z")
              .attr({id: 'LR',title: 'Liberia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'LR'});

      var LY = rsr.path("M516.89,397.93L514.91,399.05L513.33,397.39L508.9,396.08L507.67,394.17L505.45,392.75L504.14,393.31L503.15,391.6L503.04,390.28L501.38,388.02L502.5,386.73L502.25,384.76L502.61,383.04L502.41,381.6L502.9,379.01L502.75,377.53L501.84,374.69L503.21,373.94L503.45,372.56L503.15,371.21L505.08,369.95L505.94,368.9L507.31,367.95L507.47,365.4L510.76,366.55L511.94,366.26L514.28,366.82L518,368.29L519.31,371.21L521.83,371.85L525.78,373.21L528.77,374.82L530.14,373.98L531.48,372.49L530.83,369.98L531.71,368.38L533.73,366.83L535.66,366.38L539.45,367.06L540.41,368.54L541.45,368.55L542.34,369.11L545.13,369.5L545.81,370.58L544.8,372.15L545.23,373.54L544.51,375.54L545.35,378.12L545.35,389.3L545.35,400.53L545.35,406.49L542.13,406.5L542.09,407.74L530.91,402.04L519.72,396.27z")
              .attr({id: 'LY',title: 'Libya',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'LY'});

      var LT = rsr.path("M538.99,282.09L538.76,280.87L539.06,279.54L537.82,278.77L534.89,277.91L534.29,273.75L537.5,272.2L542.2,272.53L544.96,272.03L545.35,273.08L546.84,273.4L549.54,275.82L549.8,278.02L547.5,279.59L546.85,282.31L543.81,284.11L541.1,284.07L540.43,282.61z")
              .attr({id: 'LT',title: 'Lithuania',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'LT'});

      var LU = rsr.path("M492.2,301.29L492.76,302.27L492.6,304.16L491.79,304.26L491.16,303.88L491.47,301.45z")
              .attr({id: 'LU',title: 'Luxembourg',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'LU'});

      var MK = rsr.path("M532.98,334.66L533.34,334.69L533.47,333.92L535.12,333.33L535.75,333.19L536.71,332.97L538,332.91L539.41,334.12L539.61,336.59L539.07,336.71L538.61,337.36L537.09,337.29L536.02,338.1L534.19,338.42L533.03,337.52L532.63,335.93z")
              .attr({id: 'MK',title: 'Macedonia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'MK'});

      var MG = rsr.path("M614.17,498.4L614.91,499.61L615.6,501.5L616.06,504.96L616.78,506.31L616.5,507.69L616.01,508.55L615.05,506.85L614.53,507.71L615.06,509.85L614.81,511.09L614.04,511.76L613.86,514.24L612.76,517.66L611.38,521.75L609.64,527.42L608.57,531.63L607.3,535.18L605.02,535.91L602.57,537.22L600.96,536.43L598.73,535.33L597.96,533.71L597.77,531L596.79,528.58L596.53,526.41L597.03,524.25L598.32,523.73L598.33,522.74L599.67,520.48L599.92,518.6L599.27,517.2L598.74,515.35L598.52,512.65L599.5,511.02L599.87,509.17L601.27,509.07L602.84,508.47L603.87,507.95L605.11,507.91L606.7,506.26L609.01,504.48L609.85,503.04L609.47,501.81L610.66,502.16L612.21,500.17L612.26,498.45L613.19,497.17z")
              .attr({id: 'MG',title: 'Madagascar',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'MG'});

      var MW = rsr.path("M572.15,495.69L571.37,497.85L572.15,501.57L573.13,501.53L574.14,502.45L575.31,504.53L575.55,508.25L574.34,508.86L573.48,510.87L571.65,509.08L571.45,507.04L572.04,505.69L571.87,504.54L570.77,503.81L569.99,504.07L568.38,502.69L566.91,501.95L567.76,499.29L568.64,498.3L568.1,495.94L568.66,493.64L569.14,492.87L568.43,490.47L567.11,489.21L569.85,489.73L570.42,490.51L571.37,491.83z")
              .attr({id: 'MW',title: 'Malawi',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'MW'});

      var MY = rsr.path("M758.65,446.07l0.22,1.44l1.85,-0.33l0.92,-1.15l0.64,0.26l1.66,1.69l1.18,1.87l0.16,1.88l-0.3,1.27l0.27,0.96l0.21,1.65l0.99,0.77l1.1,2.46l-0.05,0.94l-1.99,0.19l-2.65,-2.06l-3.32,-2.21l-0.33,-1.42l-1.62,-1.87l-0.39,-2.31l-1.01,-1.52l0.31,-2.04l-0.62,-1.19l0.49,-0.5L758.65,446.07zM807.84,450.9l-2.06,0.95l-2.43,-0.47l-3.22,0l-0.97,3.17l-1.08,0.97l-1.44,3.88l-2.29,0.59l-2.65,-0.78l-1.34,0.24l-1.63,1.41l-1.79,-0.2l-1.81,0.57l-1.92,-1.57l-0.47,-1.86l2.05,0.96l2.17,-0.52l0.56,-2.36l1.2,-0.53l3.36,-0.6l2.01,-2.21l1.38,-1.77l1.28,1.45l0.59,-0.95l1.34,0.09l0.16,-1.78l0.13,-1.38l2.16,-1.95l1.41,-2.19l1.13,-0.01l1.44,1.42l0.13,1.22l1.85,0.78l2.34,0.84l-0.2,1.1l-1.88,0.14L807.84,450.9z")
              .attr({id: 'MY',title: 'Malaysia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'MY'});

      var ML = rsr.path("M441.13,422.22L442.07,421.7L442.54,420L443.43,419.93L445.39,420.73L446.97,420.16L448.05,420.35L448.48,419.71L459.73,419.67L460.35,417.64L459.86,417.28L458.51,404.6L457.16,391.54L461.45,391.49L470.91,398.14L480.37,404.69L481.03,406.08L482.78,406.93L484.08,407.41L484.11,409.29L487.22,409L487.23,415.75L485.69,417.69L485.45,419.48L482.96,419.93L479.14,420.18L478.1,421.21L476.3,421.32L474.51,421.33L473.81,420.78L472.26,421.19L469.64,422.39L469.11,423.29L466.93,424.57L466.55,425.31L465.38,425.89L464.02,425.51L463.25,426.21L462.84,428.17L460.61,430.53L460.68,431.49L459.91,432.7L460.1,434.34L458.94,434.76L458.29,435.12L457.85,433.91L457.04,434.23L456.56,434.17L456.04,435L453.88,434.97L453.1,434.55L452.74,434.81L451.88,433.99L452.03,433.15L451.68,432.81L451.08,433.09L451.19,432.17L451.77,431.44L450.62,430.25L450.28,429.46L449.66,428.84L449.1,428.76L448.43,429.16L447.52,429.54L446.75,430.16L445.55,429.93L444.77,429.21L444.31,429.11L443.58,429.49L443.13,429.5L442.97,428.45L443.1,427.56L442.86,426.46L441.81,425.65L441.26,424.01z")
              .attr({id: 'ML',title: 'Mali',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'ML'});

      var MR = rsr.path("M441.13,422.22L439.28,420.24L437.58,418.11L435.72,417.34L434.38,416.49L432.81,416.52L431.45,417.15L430.05,416.9L429.09,417.83L428.85,416.27L429.63,414.83L429.98,412.08L429.67,409.17L429.33,407.7L429.61,406.23L428.89,404.81L427.41,403.53L428.02,402.53L439,402.55L438.47,398.2L439.16,396.65L441.78,396.38L441.69,388.52L450.9,388.69L450.9,383.96L461.45,391.49L457.16,391.54L458.51,404.6L459.86,417.28L460.35,417.64L459.73,419.67L448.48,419.71L448.05,420.35L446.97,420.16L445.39,420.73L443.43,419.93L442.54,420L442.07,421.7z")
              .attr({id: 'MR',title: 'Mauritania',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'MR'});

      var MX = rsr.path("M202.89,388.72L201.8,391.43L201.31,393.64L201.1,397.72L200.83,399.19L201.32,400.83L202.19,402.3L202.75,404.61L204.61,406.82L205.26,408.51L206.36,409.96L209.34,410.75L210.5,411.97L212.96,411.15L215.09,410.86L217.19,410.33L218.96,409.82L220.74,408.62L221.41,406.89L221.64,404.4L222.13,403.53L224.02,402.74L226.99,402.05L229.47,402.15L231.17,401.9L231.84,402.53L231.75,403.97L230.24,405.74L229.58,407.55L230.09,408.06L229.67,409.34L228.97,411.63L228.26,410.88L227.67,410.93L227.14,410.97L226.14,412.74L225.63,412.39L225.29,412.53L225.31,412.96L222.72,412.93L220.1,412.93L220.1,414.58L218.83,414.58L219.87,415.56L220.91,416.23L221.22,416.86L221.68,417.04L221.6,418.02L218.01,418.03L216.66,420.39L217.05,420.93L216.73,421.61L216.66,422.45L213.49,419.34L212.04,418.4L209.75,417.64L208.19,417.85L205.93,418.94L204.52,419.23L202.54,418.47L200.44,417.91L197.82,416.58L195.72,416.17L192.54,414.82L190.2,413.42L189.49,412.64L187.92,412.47L185.05,411.54L183.88,410.2L180.87,408.53L179.47,406.66L178.8,405.21L179.73,404.92L179.44,404.07L180.09,403.3L180.1,402.26L179.16,400.92L178.9,399.72L177.96,398.2L175.49,395.18L172.67,392.79L171.31,390.88L168.9,389.62L168.39,388.86L168.82,386.94L167.39,386.21L165.73,384.69L165.03,382.5L163.52,382.24L161.9,380.58L160.58,379.03L160.46,378.03L158.95,375.61L157.96,373.13L158,371.88L155.97,370.59L155.04,370.73L153.44,369.83L152.99,371.16L153.45,372.72L153.72,375.15L154.69,376.48L156.77,378.69L157.23,379.44L157.66,379.66L158.02,380.76L158.52,380.71L159.09,382.75L159.94,383.55L160.53,384.66L162.3,386.26L163.23,389.15L164.06,390.5L164.84,391.94L164.99,393.56L166.34,393.66L167.47,395.05L168.49,396.41L168.42,396.95L167.24,398.06L166.74,398.05L166,396.2L164.17,394.47L162.15,392.99L160.71,392.21L160.8,389.96L160.38,388.28L159.04,387.32L157.11,385.93L156.74,386.33L156.04,385.51L154.31,384.76L152.66,382.93L152.86,382.69L154.01,382.87L155.05,381.69L155.16,380.26L153,377.99L151.36,377.1L150.32,375.09L149.28,372.97L147.98,370.36L146.84,367.4L150.03,367.15L153.59,366.79L153.33,367.43L157.56,369.04L163.96,371.35L169.54,371.32L171.76,371.32L171.76,369.97L176.62,369.97L177.64,371.14L179.08,372.17L180.74,373.6L181.67,375.29L182.37,377.05L183.82,378.02L186.15,378.98L187.91,376.45L190.21,376.39L192.18,377.67L193.59,379.85L194.56,381.71L196.21,383.51L196.83,385.7L197.62,387.17L199.8,388.13L201.79,388.81z")
              .attr({id: 'MX',title: 'Mexico',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'MX'});

      var MD = rsr.path("M549.89,309.45L550.56,308.83L552.42,308.41L554.49,309.72L555.64,309.88L556.91,311L556.71,312.41L557.73,313.08L558.13,314.8L559.11,315.84L558.92,316.44L559.44,316.86L558.7,317.15L557.04,317.04L556.77,316.47L556.18,316.8L556.38,317.52L555.61,318.81L555.12,320.18L554.42,320.62L553.91,318.79L554.21,317.07L554.12,315.28L552.5,312.84L551.61,311.09L550.74,309.85z")
              .attr({id: 'MD',title: 'Moldova',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'MD'});

      var MN = rsr.path("M721.29,304.88L724.25,304.14L729.6,300.4L733.87,298.33L736.3,299.68L739.23,299.74L741.1,301.79L743.9,301.94L747.96,303.03L750.68,300L749.54,297.4L752.45,292.74L755.59,294.61L758.13,295.14L761.43,296.29L761.96,299.61L765.95,301.45L768.6,300.64L772.14,300.07L774.95,300.65L777.7,302.74L779.4,304.94L782,304.9L785.53,305.59L788.11,304.53L791.8,303.82L795.91,300.76L797.59,301.23L799.06,302.69L802.4,302.33L801.04,305.58L799.06,309.8L799.78,311.51L801.37,310.98L804.13,311.63L806.29,310.09L808.54,311.42L811.08,314.31L810.77,315.76L808.56,315.3L804.49,315.84L802.51,317L800.46,319.66L796.18,321.21L793.39,323.31L790.51,322.51L788.93,322.15L787.46,324.69L788.35,326.19L788.81,327.47L786.84,328.77L784.83,330.82L781.56,332.15L777.35,332.3L772.82,333.61L769.56,335.62L768.32,334.46L764.93,334.46L760.78,332.17L758.01,331.6L754.28,332.13L748.49,331.28L745.4,331.37L743.76,329.1L742.48,325.53L740.75,325.1L737.36,322.65L733.58,322.1L730.25,321.42L729.24,319.69L730.32,314.96L728.39,311.65L724.39,310.08L722.03,307.85z")
              .attr({id: 'MN',title: 'Mongolia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'MN'});

      var ME = rsr.path("M530.77,332.23L530.6,331.51L529.38,333.38L529.57,334.57L528.98,334.28L528.2,333.05L526.98,332.3L527.29,331.66L527.7,329.56L528.61,328.67L529.14,328.31L529.88,328.97L530.29,329.51L531.21,329.92L532.28,330.71L532.05,331.04L531.53,331.89z")
              .attr({id: 'ME',title: 'Montenegro',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'ME'});

      var MA = rsr.path("M450.96,383.14L450.93,379.39L455.46,377.03L458.26,376.54L460.55,375.68L461.63,374.06L464.91,372.77L465.03,370.36L466.65,370.07L467.92,368.86L471.59,368.3L472.1,367.02L471.36,366.31L470.39,362.78L470.23,360.73L469.17,358.55L467.95,358.51L465.05,357.76L462.38,358L460.69,356.54L458.63,356.52L457.74,358.63L455.87,362.14L453.79,363.53L450.98,365.06L449.18,367.3L448.8,369.04L447.73,371.86L448.43,375.89L446.09,378.57L444.69,379.42L442.48,381.59L439.87,381.94L438.57,383.06L442.19,383.07L450.94,383.1L450.94,383.1L450.94,383.1L442.19,383.07L438.57,383.06z")
              .attr({id: 'MA',title: 'Morocco',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'MA'});

      var MZ = rsr.path("M572.15,495.69L574.26,495.46L577.63,496.26L578.37,495.9L580.32,495.83L581.32,494.98L583,495.02L586.06,493.92L588.29,492.28L588.75,493.55L588.63,496.38L588.98,498.88L589.09,503.36L589.58,504.76L588.75,506.83L587.66,508.84L585.87,510.64L583.31,511.75L580.15,513.16L576.98,516.31L575.9,516.85L573.94,518.94L572.79,519.63L572.55,521.75L573.88,524L574.43,525.76L574.47,526.66L574.96,526.51L574.88,529.47L574.43,530.88L575.09,531.4L574.67,532.67L573.5,533.76L571.19,534.8L567.82,536.46L566.59,537.61L566.83,538.91L567.54,539.12L567.3,540.76L565.18,540.74L564.94,539.36L564.52,537.97L564.28,536.86L564.78,533.43L564.05,531.26L562.71,527L565.66,523.59L566.4,521.44L566.83,521.17L567.14,519.43L566.69,518.55L566.81,516.35L567.36,514.31L567.35,510.62L565.9,509.68L564.56,509.47L563.96,508.75L562.66,508.14L560.32,508.2L560.14,507.12L559.87,505.07L568.38,502.69L569.99,504.07L570.77,503.81L571.87,504.54L572.04,505.69L571.45,507.04L571.65,509.08L573.48,510.87L574.34,508.86L575.55,508.25L575.31,504.53L574.14,502.45L573.13,501.53L572.15,501.57L571.37,497.85z")
              .attr({id: 'MZ',title: 'Mozambique',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'MZ'});

      var MM = rsr.path("M754.36,405.95L752.72,407.23L750.74,407.37L749.46,410.56L748.28,411.09L749.64,413.66L751.42,415.79L752.56,417.71L751.54,420.23L750.57,420.76L751.24,422.21L753.11,424.49L753.43,426.09L753.38,427.42L754.48,430.02L752.94,432.67L751.58,435.58L751.31,433.48L752.17,431.3L751.23,429.62L751.46,426.51L750.32,425.03L749.41,421.59L748.9,417.93L747.69,415.53L745.84,416.99L742.65,419.05L741.08,418.79L739.34,418.12L740.31,414.51L739.73,411.77L737.53,408.38L737.87,407.31L736.23,406.93L734.24,404.51L734.06,402.1L735.04,402.56L735.09,400.41L736.48,399.69L736.18,398.41L736.81,397.38L736.92,394.23L739.11,394.93L740.36,392.41L740.51,390.91L742.05,388.31L741.97,386.53L745.6,384.37L747.6,384.94L747.37,383.01L748.36,382.43L748.14,381.23L749.78,380.99L750.72,382.85L751.94,383.6L752.03,386L751.91,388.57L749.26,391.15L748.92,394.78L751.88,394.28L752.55,397.08L754.33,397.67L753.51,400.17L755.59,401.3L756.81,401.85L758.86,400.98L758.95,402.22L756.56,404.16L755.96,405.26z")
              .attr({id: 'MM',title: 'Myanmar',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'MM'});

      var NA = rsr.path("M521.08,546.54L519,544.15L517.9,541.85L517.28,538.82L516.59,536.57L515.65,531.85L515.59,528.22L515.23,526.58L514.14,525.34L512.69,522.87L511.22,519.3L510.61,517.45L508.32,514.58L508.15,512.33L509.5,511.78L511.18,511.28L513,511.37L514.67,512.69L515.09,512.48L526.46,512.36L528.4,513.76L535.19,514.17L540.34,512.98L542.64,512.31L544.46,512.48L545.56,513.14L545.59,513.38L544.01,514.04L543.15,514.05L541.37,515.2L540.29,513.99L535.97,515.02L533.88,515.11L533.8,525.68L531.04,525.79L531.04,534.65L531.03,546.17L528.53,547.8L527.03,548.03L525.26,547.43L524,547.2L523.53,545.84L522.42,544.97z")
              .attr({id: 'NA',title: 'Namibia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'NA'});

      var NP = rsr.path("M722.33,382.45L722.11,383.8L722.48,385.79L722.16,387.03L719.83,387.08L716.45,386.35L714.29,386.06L712.67,384.47L708.83,384.06L705.17,382.29L702.53,380.74L699.81,379.54L700.9,376.55L702.68,375.09L703.84,374.31L706.09,375.31L708.92,377.4L710.49,377.86L711.43,379.39L713.61,380.02L715.89,381.41L719.06,382.14z")
              .attr({id: 'NP',title: 'Nepal',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'NP'});

      var NL = rsr.path("M492.28,285.98L494.61,286.11L495.14,287.69L494.44,291.92L493.73,293.63L492.04,293.63L492.52,298.32L490.97,297.28L489.2,295.33L486.6,296.26L484.55,295.91L485.99,294.67L488.45,287.93z")
              .attr({id: 'NL',title: 'Netherlands',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'NL'});

      var NC = rsr.path("M940.08,523.48L942.38,525.34L943.83,526.72L942.77,527.45L941.22,526.63L939.22,525.28L937.41,523.69L935.56,521.59L935.17,520.58L936.37,520.63L937.95,521.64L939.18,522.65z")
              .attr({id: 'NC',title: 'New Caledonia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'NC'});

      var NZ = rsr.path("M960.38,588.63l0.64,1.53l1.99,-1.5l0.81,1.57l0,1.57l-1.04,1.74l-1.83,2.8l-1.43,1.54l1.03,1.86l-2.16,0.05l-2.4,1.46l-0.75,2.57l-1.59,4.03l-2.2,1.8l-1.4,1.16l-2.58,-0.09l-1.82,-1.34l-3.05,-0.28l-0.47,-1.48l1.51,-2.96l3.53,-3.87l1.81,-0.73l2.01,-1.47l2.4,-2.01l1.68,-1.98l1.25,-2.81l1.06,-0.95l0.42,-2.07l1.97,-1.7L960.38,588.63zM964.84,571.61l2.03,3.67l0.06,-2.38l1.27,0.95l0.42,2.65l2.26,1.15l1.89,0.28l1.6,-1.35l1.42,0.41l-0.68,3.15l-0.85,2.09l-2.14,-0.07l-0.75,1.1l0.26,1.56l-0.41,0.68l-1.06,1.97l-1.39,2.53l-2.17,1.49l-0.48,-0.98l-1.17,-0.54l1.62,-3.04l-0.92,-2.01l-3.02,-1.45l0.08,-1.31l2.03,-1.25l0.47,-2.74l-0.13,-2.28l-1.14,-2.34l0.08,-0.61l-1.34,-1.43l-2.21,-3.04l-1.17,-2.41l1.04,-0.27l1.53,1.89l2.18,0.89L964.84,571.61z")
              .attr({id: 'NZ',title: 'New Zealand',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'NZ'});

      var NI = rsr.path("M234.93,432.31L233.96,431.41L232.65,430.26L232.03,429.3L230.85,428.41L229.44,427.12L229.75,426.68L230.22,427.11L230.43,426.9L231.3,426.79L231.65,426.13L232.06,426.11L232,424.7L232.66,424.63L233.25,424.65L233.85,423.89L234.68,424.47L234.97,424.11L235.48,423.77L236.46,422.98L236.51,422.38L236.78,422.41L237.14,421.72L237.43,421.64L237.91,422.08L238.47,422.21L239.09,421.84L239.8,421.84L240.77,421.46L241.16,421.07L242.12,421.13L241.88,421.41L241.74,422.05L242.02,423.1L241.38,424.08L241.08,425.23L240.98,426.5L241.14,427.23L241.21,428.52L240.78,428.8L240.52,430.02L240.71,430.77L240.13,431.5L240.27,432.26L240.69,432.73L240.02,433.33L239.2,433.14L238.73,432.56L237.84,432.32L237.2,432.69L235.35,431.94z")
              .attr({id: 'NI',title: 'Nicaragua',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'NI'});

      var NE = rsr.path("M481.29,429.88L481.36,427.93L478.12,427.28L478.04,425.9L476.46,424.03L476.08,422.72L476.3,421.32L478.1,421.21L479.14,420.18L482.96,419.93L485.45,419.48L485.69,417.69L487.23,415.75L487.22,409L491.17,407.68L499.29,401.83L508.9,396.08L513.33,397.39L514.91,399.05L516.89,397.93L517.58,402.6L518.63,403.38L518.68,404.33L519.84,405.35L519.23,406.63L518.15,412.61L518.01,416.4L514.43,419.14L513.22,422.94L514.39,424L514.38,425.85L516.18,425.92L515.9,427.26L515.11,427.43L515.02,428.33L514.49,428.4L512.6,425.27L511.94,425.15L509.75,426.75L507.58,425.92L506.07,425.75L505.26,426.15L503.61,426.07L501.96,427.29L500.53,427.36L497.14,425.88L495.81,426.58L494.38,426.53L493.33,425.45L490.51,424.38L487.5,424.72L486.77,425.34L486.38,426.99L485.57,428.14L485.38,430.68L483.24,429.04L482.23,429.05z")
              .attr({id: 'NE',title: 'Niger',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'NE'});

      var NG = rsr.path("M499.09,450.08L496.18,451.08L495.11,450.94L494.03,451.56L491.79,451.5L490.29,449.75L489.37,447.73L487.38,445.89L485.27,445.92L482.8,445.92L482.96,441.39L482.89,439.6L483.42,437.83L484.28,436.96L485.64,435.21L485.35,434.45L485.9,433.31L485.27,431.63L485.38,430.68L485.57,428.14L486.38,426.99L486.77,425.34L487.5,424.72L490.51,424.38L493.33,425.45L494.38,426.53L495.81,426.58L497.14,425.88L500.53,427.36L501.96,427.29L503.61,426.07L505.26,426.15L506.07,425.75L507.58,425.92L509.75,426.75L511.94,425.15L512.6,425.27L514.49,428.4L515.02,428.33L516.13,429.47L515.82,429.98L515.67,430.93L513.31,433.13L512.57,434.94L512.17,436.41L511.58,437.04L511.01,439.01L509.51,440.17L509.08,441.59L508.45,442.73L508.19,443.89L506.26,444.84L504.69,443.69L503.62,443.73L501.95,445.37L501.14,445.4L499.81,448.1z")
              .attr({id: 'NG',title: 'Nigeria',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'NG'});

      var KP = rsr.path("M841.55,332.62L841.94,333.29L840.88,333.06L839.66,334.33L838.82,335.61L838.93,338.28L837.48,339.09L836.98,339.74L835.92,340.82L834.05,341.42L832.84,342.4L832.75,343.97L832.42,344.37L833.54,344.95L835.13,346.53L834.72,347.39L833.53,347.62L831.55,347.79L830.46,349.39L829.2,349.27L829.03,349.59L827.67,348.92L827.33,349.58L826.51,349.87L826.41,349.21L825.68,348.89L824.93,348.32L825.7,346.75L826.36,346.33L826.11,345.68L826.82,343.74L826.63,343.15L825,342.75L823.68,341.78L825.96,339.43L829.05,337.45L830.98,334.8L832.31,335.97L834.73,336.11L834.29,334.14L838.62,332.51L839.74,330.38z")
              .attr({id: 'KP',title: 'North Korea',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'KP'});

      var NO = rsr.path("M554.23,175.61l8.77,6.24l-3.61,2.23l3.07,5.11l-4.77,3.19l-2.26,0.72l1.19,-5.59l-3.6,-3.25l-4.35,2.78l-1.38,5.85l-2.67,3.44l-3.01,-1.87l-3.66,0.38l-3.12,-4.15l-1.68,2.09l-1.74,0.32l-0.41,5.08l-5.28,-1.22l-0.74,4.22l-2.69,-0.03l-1.85,5.24l-2.8,7.87l-4.35,9.5l1.02,2.23l-0.98,2.55l-2.78,-0.11l-1.82,5.91l0.17,8.04l1.79,2.98l-0.93,6.73l-2.33,3.81l-1.24,3.15l-1.88,-3.35l-5.54,6.27l-3.74,1.24l-3.88,-2.71l-1,-5.86l-0.89,-13.26l2.58,-3.88l7.4,-5.18l5.54,-6.59l5.13,-9.3l6.74,-13.76l4.7,-5.67l7.71,-9.89l6.15,-3.59l4.61,0.44l4.27,-6.99l5.11,0.38L554.23,175.61z")
              .attr({id: 'NO',title: 'Norway',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'NO'});

      var OM = rsr.path("M640.29,403.18l-1.05,2.04l-1.27,-0.16l-0.58,0.71l-0.45,1.5l0.34,1.98l-0.26,0.36l-1.29,-0.01l-1.75,1.1l-0.27,1.43l-0.64,0.62l-1.74,-0.02l-1.1,0.74l0.01,1.18l-1.36,0.81l-1.55,-0.27l-1.88,0.98l-1.3,0.16l-0.92,-2.04l-2.19,-4.84l8.41,-2.96l1.87,-5.97l-1.29,-2.14l0.07,-1.22l0.82,-1.26l0.01,-1.25l1.27,-0.6l-0.5,-0.42l0.23,-2l1.43,-0.01l1.26,2.09l1.57,1.11l2.06,0.4l1.66,0.55l1.27,1.74l0.76,1l1,0.38l-0.01,0.67l-1.02,1.79l-0.45,0.84L640.29,403.18zM633.37,388.64L633,389.2l-0.53,-1.06l0.82,-1.06l0.35,0.27L633.37,388.64z")
              .attr({id: 'OM',title: 'Oman',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'OM'});

      var PK = rsr.path("M685.99,351.76L688.06,353.39L688.89,356.05L693.5,357.44L690.79,360.3L687.67,360.81L683.41,359.98L682.04,361.44L683.03,364.39L684,366.64L686.27,368.27L683.88,370.18L683.92,372.51L681.2,375.75L679.44,379.01L676.51,382.33L673.25,382.09L670.16,385.39L672,386.79L672.32,389.18L673.89,390.74L674.45,393.38L668.28,393.37L666.41,395.41L664.36,394.64L663.52,392.44L661.35,390.1L656.19,390.68L651.63,390.73L647.68,391.17L648.74,387.57L652.78,385.96L652.55,384.52L651.21,384.01L651.13,381.24L648.45,379.84L647.32,377.91L645.94,376.23L650.63,377.87L653.44,377.39L655.11,377.79L655.68,377.09L657.63,377.37L661.28,376.04L661.38,373.29L662.94,371.45L665.03,371.45L665.33,370.54L667.48,370.11L668.51,370.41L669.61,369.49L669.46,367.51L670.65,365.51L672.43,364.66L671.33,362.44L674,362.55L674.77,361.33L674.65,360.03L676.05,358.6L675.72,356.9L675.06,355.44L676.7,353.93L679.71,353.2L682.93,352.8L684.35,352.15z")
              .attr({id: 'PK',title: 'Pakistan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'PK'});

      var PS = rsr.path("M574.92,367.87L574.92,369.88L574.5,370.84L573.18,371.29L573.31,370.43L574.02,369.97L573.32,369.61L573.9,367.41z")
              .attr({id: 'PS',title: 'Palestinian Territories',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'PS'});

      var PA = rsr.path("M256.88,443.21L255.95,442.4L255.35,440.88L256.04,440.13L255.33,439.94L254.81,439.01L253.41,438.23L252.18,438.41L251.62,439.39L250.48,440.09L249.87,440.19L249.6,440.78L250.93,442.3L250.17,442.66L249.76,443.08L248.46,443.22L247.97,441.54L247.61,442.02L246.68,441.86L246.12,440.72L244.97,440.54L244.24,440.21L243.04,440.21L242.95,440.82L242.63,440.4L242.78,439.84L243.01,439.27L242.9,438.76L243.32,438.42L242.74,438L242.72,436.87L243.81,436.62L244.81,437.63L244.75,438.23L245.87,438.35L246.14,438.12L246.91,438.82L248.29,438.61L249.48,437.9L251.18,437.33L252.14,436.49L253.69,436.65L253.58,436.93L255.15,437.03L256.4,437.52L257.31,438.36L258.37,439.14L258.03,439.56L258.68,441.21L258.15,442.05L257.24,441.85z")
              .attr({id: 'PA',title: 'Panama',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'PA'});

      var PG = rsr.path("M912.32,482.42l-0.79,0.28l-1.21,-1.08l-1.23,-1.78l-0.6,-2.13l0.39,-0.27l0.3,0.83l0.85,0.63l1.36,1.77l1.32,0.95L912.32,482.42zM901.39,478.67l-1.47,0.23l-0.44,0.79l-1.53,0.68l-1.44,0.66l-1.49,0l-2.3,-0.81l-1.6,-0.78l0.23,-0.87l2.51,0.41l1.53,-0.22l0.42,-1.34l0.4,-0.07l0.27,1.49l1.6,-0.21l0.79,-0.96l1.57,-1l-0.31,-1.65l1.68,-0.05l0.57,0.46l-0.06,1.55L901.39,478.67zM887.96,484.02l2.5,1.84l1.82,2.99l1.61,-0.09l-0.11,1.25l2.17,0.48l-0.84,0.53l2.98,1.19l-0.31,0.82l-1.86,0.2l-0.69,-0.73l-2.41,-0.32l-2.83,-0.43l-2.18,-1.8l-1.59,-1.55l-1.46,-2.46l-3.66,-1.23l-2.38,0.8l-1.71,0.93l0.36,2.08l-2.2,0.97l-1.57,-0.47l-2.9,-0.12l-0.05,-9.16l-0.05,-9.1l4.87,1.92l5.18,1.6l1.93,1.43l1.56,1.41l0.43,1.65l4.67,1.73l0.68,1.49l-2.58,0.3L887.96,484.02zM904.63,475.93l-0.88,0.74l-0.53,-1.65l-0.65,-1.08l-1.27,-0.91l-1.6,-1.19l-2.02,-0.82l0.78,-0.67l1.51,0.78l0.95,0.61l1.18,0.67l1.12,1.17l1.07,0.89L904.63,475.93z")
              .attr({id: 'PG',title: 'Papua New Guinea',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'PG'});

      var PY = rsr.path("M299.49,526.99L300.6,523.4L300.67,521.8L302.01,519.18L306.9,518.32L309.5,518.37L312.12,519.88L312.16,520.79L312.99,522.45L312.81,526.51L315.77,527.09L316.91,526.5L318.8,527.32L319.33,528.22L319.59,530.99L319.92,532.17L320.96,532.3L322.01,531.81L323.02,532.36L323.02,534.04L322.64,535.86L322.09,537.64L321.63,540.39L319.09,542.79L316.87,543.29L313.72,542.81L310.9,541.96L313.66,537.23L313.25,535.86L310.37,534.66L306.94,532.4L304.65,531.94z")
              .attr({id: 'PY',title: 'Paraguay',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'PY'});

      var PE = rsr.path("M280.13,513.14L279.38,514.65L277.94,515.39L275.13,513.71L274.88,512.51L269.33,509.59L264.3,506.42L262.13,504.64L260.97,502.27L261.43,501.44L259.06,497.69L256.29,492.45L253.65,486.83L252.5,485.54L251.62,483.48L249.44,481.64L247.44,480.51L248.35,479.26L246.99,476.59L247.86,474.64L250.1,472.87L250.43,474.04L249.63,474.7L249.7,475.72L250.86,475.5L252,475.8L253.17,477.21L254.76,476.06L255.29,474.18L257.01,471.75L260.38,470.65L263.44,467.73L264.31,465.92L263.92,463.81L264.67,463.54L266.53,464.86L267.42,466.18L268.72,466.9L270.37,469.82L272.46,470.17L274.01,469.43L275.02,469.91L276.7,469.67L278.85,470.98L277.04,473.82L277.88,473.88L279.28,475.37L276.75,475.24L276.38,475.66L274.08,476.19L270.88,478.1L270.67,479.4L269.96,480.38L270.24,481.89L268.54,482.7L268.54,483.89L267.8,484.4L268.97,486.93L270.53,488.65L269.94,489.86L271.8,490.02L272.86,491.53L275.33,491.6L277.63,489.94L277.44,494.24L278.72,494.57L280.3,494.08L282.73,498.66L282.12,499.62L281.99,501.64L281.93,504.08L280.83,505.52L281.34,506.59L280.69,507.56L281.9,510z")
              .attr({id: 'PE',title: 'Peru',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'PE'});

      var PH = rsr.path("M829.59,439.86l0.29,1.87l0.17,1.58l-0.96,2.57l-1.02,-2.86l-1.31,1.42l0.9,2.06l-0.8,1.31l-3.3,-1.63l-0.79,-2.03l0.86,-1.33l-1.78,-1.33l-0.88,1.17l-1.32,-0.11l-2.08,1.57l-0.46,-0.82l1.1,-2.37l1.77,-0.79l1.53,-1.06l0.99,1.27l2.13,-0.77l0.46,-1.26l1.98,-0.08l-0.17,-2.18l2.27,1.34l0.24,1.42L829.59,439.86zM822.88,434.6l-1.01,0.93l-0.88,1.79l-0.88,0.84l-1.73,-1.95l0.58,-0.76l0.7,-0.79l0.31,-1.76l1.55,-0.17l-0.45,1.91l2.08,-2.74L822.88,434.6zM807.52,437.32l-3.73,2.67l1.38,-1.97l2.03,-1.74l1.68,-1.96l1.47,-2.82l0.5,2.31l-1.85,1.56L807.52,437.32zM817,430.02l1.68,0.88l1.78,0l-0.05,1.19l-1.3,1.2l-1.78,0.85l-0.1,-1.32l0.2,-1.45L817,430.02zM827.14,429.25l0.79,3.18l-2.16,-0.75l0.06,0.95l0.69,1.75l-1.33,0.63l-0.12,-1.99l-0.84,-0.15l-0.44,-1.72l1.65,0.23l-0.04,-1.08l-1.71,-2.18l2.69,0.06L827.14,429.25zM816,426.66l-0.74,2.47l-1.2,-1.42l-1.43,-2.18l2.4,0.1L816,426.66zM815.42,410.92l1.73,0.84l0.86,-0.76l0.25,0.75l-0.46,1.22l0.96,2.09l-0.74,2.42l-1.65,0.96l-0.44,2.33l0.63,2.29l1.49,0.32l1.24,-0.34l3.5,1.59l-0.27,1.56l0.92,0.69l-0.29,1.32l-2.18,-1.4l-1.04,-1.5l-0.72,1.05l-1.79,-1.72l-2.55,0.42l-1.4,-0.63l0.14,-1.19l0.88,-0.73l-0.84,-0.67l-0.36,1.04l-1.38,-1.65l-0.42,-1.26l-0.1,-2.77l1.13,0.96l0.29,-4.55l0.91,-2.66L815.42,410.92z")
              .attr({id: 'PH',title: 'Philippines',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'PH'});

      var PL = rsr.path("M517.36,296.97L516.21,294.11L516.43,292.55L515.73,290.1L514.72,288.45L515.5,287.2L514.84,284.81L516.76,283.42L521.13,281.2L524.67,279.56L527.46,280.38L527.67,281.56L530.38,281.62L533.83,282.17L538.99,282.09L540.43,282.61L541.1,284.07L541.22,286.16L542,287.94L541.98,289.79L540.3,290.73L541.17,292.85L541.22,294.86L542.63,298.75L542.33,299.99L540.94,300.5L538.39,304.11L539.11,306.03L538.5,305.78L535.84,304.14L533.82,304.74L532.5,304.3L530.84,305.22L529.43,303.7L528.27,304.28L528.11,304.02L526.82,301.89L524.74,301.63L524.47,300.26L522.55,299.77L522.13,300.9L520.61,300L520.78,298.79L518.69,298.4z")
              .attr({id: 'PL',title: 'Poland',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'PL'});

      var PT = rsr.path("M449.92,334.56L450.94,333.61L452.08,333.06L452.79,334.9L454.44,334.89L454.92,334.42L456.56,334.55L457.34,336.43L456.04,337.43L456.01,340.31L455.55,340.84L455.44,342.56L454.23,342.86L455.35,345.03L454.58,347.38L455.54,348.44L455.16,349.4L454.12,350.72L454.35,351.88L453.23,352.79L451.75,352.3L450.3,352.68L450.73,349.94L450.47,347.76L449.21,347.43L448.54,346.08L448.77,343.72L449.88,342.41L450.08,340.94L450.67,338.73L450.6,337.16L450.04,335.82z")
              .attr({id: 'PT',title: 'Portugal',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'PT'});

      var PR = rsr.path("M289.41,410.89L290.84,411.15L291.35,411.73L290.63,412.47L288.52,412.45L286.88,412.55L286.72,411.3L287.11,410.87z")
              .attr({id: 'PR',title: 'Puerto Rico',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'PR'});

      var QA = rsr.path("M617.72,392.16L617.53,389.92L618.29,388.3L619.05,387.96L619.9,388.93L619.95,390.74L619.34,392.55L618.56,392.77z")
              .attr({id: 'QA',title: 'Qatar',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'QA'});

      var CG = rsr.path("M511.69,476.72L510.64,475.76L509.79,476.23L508.66,477.43L506.36,474.48L508.49,472.94L507.44,471.09L508.4,470.39L510.29,470.05L510.51,468.81L512.01,470.15L514.49,470.27L515.35,468.95L515.7,467.1L515.39,464.92L514.07,463.28L515.28,460.05L514.58,459.5L512.5,459.72L511.71,458.29L511.92,457.07L515.45,457.18L517.72,457.91L519.95,458.57L520.15,457.07L521.62,454.47L523.29,452.99L525.19,453.46L526.99,453.62L526.83,455.3L525.99,456.79L525.44,458.53L525.09,461L525.24,462.58L524.78,463.55L524.71,464.57L524.39,465.46L522.54,466.8L521.26,468.23L520.04,470.94L520.13,473.24L519.42,474.13L517.79,475.49L516.14,477.25L515.09,476.75L514.91,475.96L513.39,475.93L512.43,477z")
              .attr({id: 'CG',title: 'Republic of Congo',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CG'});

      var RO = rsr.path("M538.93,310.86L540.14,309.97L541.88,310.43L543.67,310.45L544.97,311.46L545.93,310.82L548,310.42L548.71,309.44L549.89,309.45L550.74,309.85L551.61,311.09L552.5,312.84L554.12,315.28L554.21,317.07L553.91,318.79L554.42,320.62L555.67,321.35L556.98,320.71L558.26,321.39L558.32,322.42L556.96,323.26L556.11,322.9L555.33,327.61L553.68,327.2L551.64,325.79L548.34,326.69L546.95,327.68L542.83,327.48L540.67,326.87L539.59,327.16L538.78,325.56L538.27,324.88L538.92,324.22L538.22,323.73L537.34,324.61L535.71,323.47L535.49,321.84L533.78,320.9L533.47,319.63L531.95,318.05L534.2,317.29L535.89,314.53L537.22,311.73z")
              .attr({id: 'RO',title: 'Romania',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'RO'});

      var RU = rsr.path("M1008.27,215.75l-2.78,2.97l-4.6,0.7l-0.07,6.46l-1.12,1.35l-2.63,-0.19l-2.14,-2.26l-3.73,-1.92l-0.63,-2.89l-2.85,-1.1l-3.19,0.87l-1.52,-2.37l0.61,-2.55l-3.36,1.64l1.26,3.19l-1.59,2.83l-0.02,0.04l-3.6,2.89l-3.63,-0.48l2.53,3.44l1.67,5.2l1.29,1.67l0.33,2.53l-0.72,1.6l-5.23,-1.32l-7.84,4.51l-2.49,0.69l-4.29,4.1l-4.07,3.5l-1.03,2.55l-4.01,-3.9l-7.31,4.42l-1.28,-2.08l-2.7,2.39l-3.75,-0.76l-0.9,3.63l-3.36,5.22l0.1,2.14l3.19,1.17l-0.38,7.46l-2.6,0.19l-1.2,4.15l1.17,2.1l-4.9,2.47l-0.97,5.4l-4.18,1.14l-0.84,4.66l-4.04,4.18l-1.04,-3.08l-1.2,-6.69l-1.56,-10.65l1.35,-6.95l2.37,-3.07l0.15,-2.44l4.36,-1.18l5.01,-6.78l4.83,-5.73l5.04,-4.57l2.25,-8.37l-3.41,0.51l-1.68,4.92l-7.11,6.36l-2.3,-7.14l-7.24,2l-7.02,9.56l2.32,3.38l-6.26,1.42l-4.33,0.56l0.2,-3.95l-4.36,-0.84l-3.47,2.7l-8.57,-0.94l-9.22,1.62l-9.08,10.33l-10.75,11.78l4.42,0.61l1.38,3l2.72,1.05l1.79,-2.38l3.08,0.31l4.05,5.19l0.09,3.92l-2.19,4.51l-0.24,5.27l-1.26,6.85l-4.23,6.01l-0.94,2.82l-3.81,4.66l-3.78,4.53l-1.81,2.28l-3.74,2.25l-1.77,0.05l-1.76,-1.86l-3.76,2.79l-0.44,1.26l-0.39,-0.66l-0.02,-1.93l1.43,-0.1l0.4,-4.55l-0.74,-3.36l2.41,-1.4l3.4,0.7l1.89,-3.89l0.96,-4.46l1.09,-1.51l1.47,-3.76l-4.63,1.24l-2.43,1.65l-4.26,0l-1.13,-3.95l-3.32,-3.03l-4.88,-1.38l-1.04,-4.28l-0.98,-2.73l-1.05,-1.94l-1.73,-4.61l-2.46,-1.71l-4.2,-1.39l-3.72,0.13l-3.48,0.84l-2.32,2.31l1.54,1.1l0.04,2.52l-1.56,1.45l-2.53,4.72l0.03,1.93l-3.95,2.74l-3.37,-1.63l-3.35,0.36l-1.47,-1.46l-1.68,-0.47l-4.11,3.06l-3.69,0.71l-2.58,1.06l-3.53,-0.7l-2.6,0.04l-1.7,-2.2l-2.75,-2.09l-2.81,-0.58l-3.55,0.57l-2.65,0.81l-3.98,-1.84l-0.53,-3.32l-3.3,-1.15l-2.54,-0.53l-3.14,-1.87l-2.9,4.66l1.14,2.6l-2.73,3.03l-4.05,-1.09l-2.8,-0.16l-1.87,-2.04l-2.92,-0.06l-2.44,-1.35l-4.26,2.07l-5.35,3.74l-2.96,0.74l-1.1,0.35l-1.49,-2.63l-3.61,0.58l-1.19,-1.84l-1.96,-0.85l-1.35,-2.55l-1.55,-0.8l-4.03,1.14l-3.86,-2.57l-1.49,2.33l-6.27,-11.58l-3.58,-3.66l1.03,-1.5l-7.03,4.49l-2.69,0.27l0.23,-2.58l-3.6,-1.63l-2.93,1.17l-0.88,-5.01l-5.04,-1.06l-2.52,2.03l-7.02,1.79l-1.37,1.19l-10.49,1.66l-1.29,1.62l2.02,3.21l-2.69,1.2l0.53,1.25l-2.69,2.22l4.54,3.1l-0.7,2.11l-3.94,-0.19l-0.81,1.31l-3.59,-2.29l-4.45,0.09l-2.98,1.87l-3.32,-1.79l-6.18,-3.1l-4.38,0.12l-5.79,4.85l-0.35,3.19l-2.88,-2.53l-2.24,4.77l0.82,0.87l-1.62,3.21l2.38,2.84l2.08,-0.12l1.79,2.76l-0.28,2.1l1.42,0.66l-1.28,2.39l-2.72,0.66l-2.79,4.09l2.55,3.7l-0.28,2.59l3.06,4.46l-1.67,1.51l-0.48,0.95l-1.24,-0.25l-1.93,-2.27l-0.79,-0.13l-1.76,-0.87l-0.86,-1.55l-2.62,-0.79l-1.7,0.6l-0.49,-0.71l-3.82,-1.83l-4.13,-0.62l-2.37,-0.66l-0.34,0.45l-3.57,-3.27l-3.2,-1.48l-2.42,-2.32l2.04,-0.64l2.33,-3.35l-1.57,-1.6l4.13,-1.67l-0.07,-0.9l-2.52,0.66l0.09,-1.83l1.45,-1.16l2.71,-0.31l0.44,-1.4l-0.62,-2.33l1.14,-2.23l-0.03,-1.26l-4.13,-1.41l-1.64,0.05l-1.73,-2.04l-2.15,0.69l-3.56,-1.54l0.06,-0.87l-1,-1.93l-2.24,-0.22l-0.23,-1.39l0.7,-0.91l-1.79,-2.58l-2.91,0.44l-0.85,-0.23l-0.71,1.04l-1.05,-0.18l-0.69,-2.94l-0.66,-1.54l0.54,-0.44l2.26,0.16l1.09,-1.02l-0.81,-1.25l-1.89,-0.83l0.17,-0.86l-1.14,-0.87l-1.76,-3.15l0.6,-1.31l-0.27,-2.31l-2.74,-1.18l-1.47,0.59l-0.4,-1.24l-2.95,-1.26l-0.9,-2.99l-0.24,-2.49l-1.35,-1.19l1.2,-1.66l-0.83,-4.96l2,-3.13l-0.42,-0.96l3.19,-3.07l-2.94,-2.68l6,-7.41l2.6,-3.45l1.05,-3.1l-4.15,-4.26l1.15,-4.15l-2.52,-4.85l1.89,-5.76l-3.26,-7.96l2.59,-5.48l-4.29,-4.99l0.41,-5.4l2.26,-0.72l4.77,-3.19l2.89,-2.81l4.61,4.86l7.68,1.88l10.59,8.65l2.15,3.51l0.19,4.8l-3.11,3.69l-4.58,1.85l-12.52,-5.31l-2.06,0.9l4.57,5.1l0.18,3.15l0.18,6.75l3.61,1.97l2.19,1.66l0.36,-3.11l-1.69,-2.8l1.78,-2.51l6.78,4.1l2.36,-1.59l-1.89,-4.88l6.53,-6.74l2.59,0.4l2.62,2.43l1.63,-4.81l-2.34,-4.28l1.37,-4.41l-2.06,-4.69l7.84,2.44l1.6,4.18l-3.55,0.91l0.02,4.04l2.21,2.44l4.33,-1.54l0.69,-4.61l5.86,-3.52l9.79,-6.54l2.11,0.38l-2.76,4.64l3.48,0.78l2.01,-2.58l5.25,-0.21l4.16,-3.19l3.2,4.62l3.19,-5.09l-2.94,-4.58l1.46,-2.66l8.28,2.44l3.88,2.49l10.16,8.8l1.88,-3.97l-2.85,-4.11l-0.08,-1.68l-3.38,-0.78l0.92,-3.83l-1.5,-6.49l-0.08,-2.74l5.17,-7.99l1.84,-8.42l2.08,-1.88l7.42,2.51l0.58,5.18l-2.66,7.28l1.74,2.78l0.9,5.94l-0.64,11.07l3.09,4.73l-1.2,5.01l-5.49,10.2l3.21,1.02l1.12,-2.51l3.08,-1.82l0.74,-3.55l2.43,-3.49l-1.63,-4.26l1.31,-5.08l-3.07,-0.64l-0.67,-4.42l2.24,-8.28l-3.64,-7.03l5.02,-6.04l-0.65,-6.62l1.4,-0.22l1.47,5.19l-1.11,8.67l3,1.59l-1.28,-6.37l4.69,-3.58l5.82,-0.49l5.18,5.18l-2.49,-7.62l-0.28,-10.28l4.88,-2.02l6.74,0.44l6.08,-1.32l-2.28,-5.38l3.25,-7.02l3.22,-0.3l5.45,-5.51l7.4,-1.51l0.94,-3.15l7.36,-1.08l2.29,2.61l6.29,-6.24l5.15,0.2l0.77,-5.24l2.68,-5.33l6.62,-5.31l4.81,4.21l-3.82,3.13l6.35,1.92l0.76,6.03l2.56,-2.94l8.2,0.16l6.32,5.84l2.25,4.35l-0.7,5.85l-3.1,3.24l-7.37,5.92l-2.11,3.08l3.48,1.43l4.15,2.55l2.52,-1.91l1.43,6.39l1.23,-2.56l4.48,-1.57l9,1.65l0.68,4.58l11.72,1.43l0.16,-7.47l5.95,1.74l4.48,-0.05l4.53,5.14l1.29,6.04l-1.66,3.84l3.52,6.98l4.41,3.49l2.71,-9.18l4.5,4l4.78,-2.38l5.43,2.72l2.07,-2.47l4.59,1.24l-2.02,-8.4l3.7,-4.07l25.32,6.06l2.39,5.35l7.34,6.65l11.32,-1.62l5.58,1.41l2.33,3.5l-0.34,6.02l3.45,2.29l3.75,-1.64l4.97,-0.21l5.29,1.57l5.31,-0.89l4.88,6.99l3.47,-2.48l-2.27,-5.07l1.25,-3.62l8.95,2.29l5.83,-0.49l8.06,3.84l3.92,3.44l6.87,5.86l7.35,7.34l-0.24,4.44l1.89,1.74l-0.65,-5.15l7.61,1.07L1008.27,215.75zM880.84,306.25l-2.82,-7.68l-1.16,-4.51l0.07,-4.5l-0.97,-4.5l-0.73,-3.15l-1.25,0.67l1.11,2.21l-2.59,2.17l-0.25,6.3l1.64,4.41l-0.12,5.85l-0.65,3.24l0.32,4.54l-0.31,4.01l0.52,3.4l1.84,-3.13l2.13,2.44l0.08,-2.84l-2.73,-4.23l1.72,-6.11L880.84,306.25zM537.82,278.77l-2.94,-0.86l-3.87,1.58l-0.64,2.13l3.45,0.55l5.16,-0.07l-0.22,-1.23l0.3,-1.33L537.82,278.77zM979.95,178.65l3.66,-0.52l2.89,-2.06l0.24,-1.19l-4.06,-2.51l-2.38,-0.02l-0.36,0.37l-3.57,3.64l0.5,2.73L979.95,178.65zM870.07,151.56l-2.66,3.92l0.49,0.52l5.75,1.08l4.25,-0.07l-0.34,-2.57l-3.98,-3.81L870.07,151.56zM894.64,142.03l3.24,-4.25l-7.04,-2.88l-5.23,-1.68l-0.67,3.59l5.21,4.27L894.64,142.03zM869.51,140.34l10.33,0.3l2.21,-8.14l-10.13,-6.07l-7.4,-0.51l-3.7,2.18l-1.51,7.75l5.55,7.01L869.51,140.34zM622.39,166.28l-2.87,1.96l0.41,4.83l5.08,2.35l0.74,3.82l9.16,1.1l1.66,-0.74l-5.36,-7.11l-0.57,-7.52l4.39,-9.14l4.18,-9.82l8.71,-10.17l8.56,-5.34l9.93,-5.74l1.88,-3.71l-1.95,-4.83l-5.46,1.6l-4.8,4.49l-9.33,2.22l-9.26,7.41l-6.27,5.85l0.76,4.87l-6.71,9.03l2.58,1.22l-5.56,8.27L622.39,166.28zM769.87,98.34l0.83,-5.72l-7.11,-8.34l-2.11,-0.98l-2.3,1.7l-5.12,18.6L769.87,98.34zM605.64,69.03l3.04,3.88l3.28,-2.69l0.39,-2.72l2.52,-1.27l3.76,-2.23l1.08,-2.62l-4.16,-3.85l-2.64,2.9l-1.61,4.12l-0.57,-4.65l-4.26,0.21L601,63.25l6.24,0.52L605.64,69.03zM736.89,82.07l4.65,5.73l7.81,4.2l6.12,-1.8l0.69,-13.62l-6.46,-16.04l-5.45,-9.02l-6.07,4.11l-7.28,11.83l3.83,3.27L736.89,82.07z")
              .attr({id: 'RU',title: 'Russia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'RU'});

      var RW = rsr.path("M560.54,466.55L561.66,468.12L561.49,469.76L560.69,470.11L559.2,469.93L558.34,471.52L556.63,471.3L556.89,469.77L557.28,469.56L557.38,467.9L558.19,467.12L558.87,467.41z")
              .attr({id: 'RW',title: 'Rwanda',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'RW'});

      var SA = rsr.path("M595.2,417.22L594.84,415.98L593.99,415.1L593.77,413.93L592.33,412.89L590.83,410.43L590.04,408.02L588.1,405.98L586.85,405.5L584.99,402.65L584.67,400.57L584.79,398.78L583.18,395.42L581.87,394.23L580.35,393.6L579.43,391.84L579.58,391.15L578.8,389.55L577.98,388.86L576.89,386.54L575.18,384.02L573.75,381.86L572.36,381.87L572.79,380.13L572.92,379.02L573.26,377.74L576.38,378.25L577.6,377.27L578.27,376.11L580.41,375.67L580.87,374.58L581.8,374.04L579,370.78L584.62,369.13L585.15,368.64L588.53,369.53L592.71,371.82L600.61,378.31L605.82,378.57L608.32,378.88L609.02,380.39L611,380.31L612.1,383.04L613.48,383.75L613.96,384.86L615.87,386.17L616.04,387.46L615.76,388.49L616.12,389.53L616.92,390.4L617.3,391.41L617.72,392.16L618.56,392.77L619.34,392.55L619.87,393.72L619.98,394.43L621.06,397.51L629.48,399.03L630.05,398.39L631.33,400.53L629.46,406.5L621.05,409.46L612.97,410.59L610.35,411.91L608.34,414.98L607.03,415.46L606.33,414.49L605.26,414.64L602.55,414.35L602.03,414.05L598.8,414.12L598.04,414.39L596.89,413.63L596.14,415.06L596.43,416.29z")
              .attr({id: 'SA',title: 'Saudi Arabia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SA'});

      var SN = rsr.path("M428.39,425.16L427.23,422.92L425.83,421.9L427.07,421.35L428.43,419.32L429.09,417.83L430.05,416.9L431.45,417.15L432.81,416.52L434.38,416.49L435.72,417.34L437.58,418.11L439.28,420.24L441.13,422.22L441.26,424.01L441.81,425.65L442.86,426.46L443.1,427.56L442.97,428.45L442.56,428.61L441.04,428.39L440.83,428.7L440.21,428.77L438.19,428.07L436.84,428.04L431.66,427.92L430.91,428.24L429.98,428.15L428.49,428.62L428.03,426.43L430.58,426.49L431.26,426.09L431.76,426.06L432.8,425.4L434,426.01L435.22,426.06L436.43,425.41L435.87,424.59L434.94,425.07L434.07,425.06L432.97,424.35L432.08,424.4L431.44,425.07z")
              .attr({id: 'SN',title: 'Senegal',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SN'});

      var RS = rsr.path("M533.78,320.9L535.49,321.84L535.71,323.47L537.34,324.61L538.22,323.73L538.92,324.22L538.27,324.88L538.78,325.56L538.09,326.44L538.34,327.86L539.7,329.52L538.63,330.71L538.16,331.92L538.47,332.37L538,332.91L536.71,332.97L535.75,333.19L535.66,332.91L535.99,332.46L536.31,331.53L535.91,331.55L535.36,330.85L534.9,330.67L534.54,330.06L534.01,329.82L533.61,329.28L533.11,329.5L532.72,330.76L532.05,331.04L532.28,330.71L531.21,329.92L530.29,329.51L529.88,328.97L529.14,328.31L529.8,328.14L530.21,326.32L528.86,324.82L529.56,323.1L528.54,323.11L529.62,321.62L528.73,320.48L528.05,318.93L530.2,317.88L531.95,318.05L533.47,319.63z")
              .attr({id: 'RS',title: 'Serbia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'RS'});

      var SL = rsr.path("M443.18,444.44L442.42,444.23L440.41,443.1L438.95,441.6L438.46,440.57L438.11,438.49L439.61,437.25L439.93,436.46L440.41,435.85L441.19,435.79L441.84,435.26L444.08,435.26L444.86,436.27L445.47,437.46L445.38,438.28L445.83,439.02L445.8,440.05L446.57,439.89L445.26,441.2L444,442.73L443.85,443.54z")
              .attr({id: 'SL',title: 'Sierra Leone',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SL'});

      var SK = rsr.path("M528.11,304.02L528.27,304.28L529.43,303.7L530.84,305.22L532.5,304.3L533.82,304.74L535.84,304.14L538.5,305.78L537.73,306.89L537.18,308.6L536.58,309.03L533.58,307.75L532.66,308L532,309L530.68,309.52L530.38,309.25L529.02,309.9L527.9,310.03L527.68,310.87L525.32,311.38L524.29,310.92L522.86,309.85L522.58,308.4L522.81,307.86L523.2,306.93L524.45,307L525.4,306.56L525.48,306.17L526.02,305.96L526.2,304.99L526.84,304.8L527.28,304.03z")
              .attr({id: 'SK',title: 'Slovakia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SK'});

      var SI = rsr.path("M513.96,316.51L516.28,316.82L517.7,315.9L520.15,315.8L520.68,315.11L521.15,315.16L521.7,316.53L519.47,317.61L519.19,319.23L518.22,319.64L518.23,320.76L517.13,320.68L516.18,320.03L515.66,320.71L513.71,320.57L514.33,320.21L513.66,318.5z")
              .attr({id: 'SI',title: 'Slovenia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SI'});

      var SB = rsr.path("M929.81,492.75l0.78,0.97l-1.96,-0.02l-1.07,-1.74l1.67,0.69L929.81,492.75zM926.26,491.02l-1.09,0.06l-1.72,-0.29l-0.59,-0.44l0.18,-1.12l1.85,0.44l0.91,0.59L926.26,491.02zM928.58,490.25l-0.42,0.52l-2.08,-2.45l-0.58,-1.68h0.95l1.01,2.25L928.58,490.25zM923.52,486.69l0.12,0.57l-2.2,-1.19l-1.54,-1.01l-1.05,-0.94l0.42,-0.29l1.29,0.67l2.3,1.29L923.52,486.69zM916.97,483.91l-0.56,0.16l-1.23,-0.64l-1.15,-1.15l0.14,-0.47l1.67,1.18L916.97,483.91z")
              .attr({id: 'SB',title: 'Solomon Islands',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SB'});

      var SO = rsr.path("M618.63,430.43L618.56,429.64L617.5,429.65L616.17,430.63L614.68,430.91L613.39,431.33L612.5,431.39L610.9,431.49L609.9,432.01L608.51,432.2L606.04,433.08L602.99,433.41L600.34,434.14L598.95,434.13L597.69,432.94L597.14,431.77L596.23,431.24L595.19,432.76L594.58,433.77L595.62,435.33L596.65,436.69L597.72,437.7L606.89,441.04L609.25,441.02L601.32,449.44L597.67,449.56L595.17,451.53L593.38,451.58L592.61,452.46L590.16,455.63L590.19,465.78L591.85,468.07L592.48,467.41L593.13,465.95L596.2,462.57L598.81,460.45L603.01,457.69L605.81,455.43L609.11,451.62L611.5,448.49L613.91,444.39L615.64,440.8L616.99,437.65L617.78,434.6L618.38,433.58L618.37,432.08z")
              .attr({id: 'SO',title: 'Somalia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SO'});

      var ZA = rsr.path("M563.63,548.71l-0.55,0.46l-1.19,1.63l-0.78,1.66l-1.59,2.33l-3.17,3.38l-1.98,1.98l-2.12,1.51l-2.93,1.3l-1.43,0.17l-0.36,0.93l-1.7,-0.5l-1.39,0.64l-3.04,-0.65l-1.7,0.41l-1.16,-0.18l-2.89,1.33l-2.39,0.54l-1.73,1.28l-1.28,0.08l-1.19,-1.21l-0.95,-0.06l-1.21,-1.51l-0.13,0.47l-0.37,-0.91l0.02,-1.96l-0.91,-2.23l0.9,-0.6l-0.07,-2.53l-1.84,-3.05l-1.41,-2.74l0,-0.01l-2.01,-4.15l1.34,-1.57l1.11,0.87l0.47,1.36l1.26,0.23l1.76,0.6l1.51,-0.23l2.5,-1.63l0,-11.52l0.76,0.46l1.66,2.93l-0.26,1.89l0.63,1.1l2.01,-0.32l1.4,-1.39l1.33,-0.93l0.69,-1.48l1.37,-0.72l1.18,0.38l1.34,0.87l2.28,0.15l1.79,-0.72l0.28,-0.96l0.49,-1.47l1.53,-0.25l0.84,-1.15l0.93,-2.03l2.52,-2.26l3.97,-2.22l1.14,0.03l1.36,0.51l0.94,-0.36l1.49,0.3l1.34,4.26l0.73,2.17l-0.5,3.43l0.24,1.11l-1.42,-0.57l-0.81,0.22l-0.26,0.9l-0.77,1.17l0.03,1.08l1.67,1.7l1.64,-0.34l0.57,-1.39l2.13,0.03l-0.7,2.28l-0.33,2.62l-0.73,1.43L563.63,548.71zM556.5,547.75l-1.22,-0.98l-1.31,0.65l-1.52,1.25l-1.5,2.03l2.1,2.48l1,-0.32l0.52,-1.03l1.56,-0.5l0.48,-1.05l0.86,-1.56L556.5,547.75z")
              .attr({id: 'ZA',title: 'South Africa',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'ZA'});

      var KR = rsr.path("M835.13,346.53L837.55,350.71L838.24,352.98L838.26,356.96L837.21,358.84L834.67,359.5L832.43,360.91L829.9,361.2L829.59,359.35L830.11,356.78L828.87,353.18L830.95,352.59L829.03,349.59L829.2,349.27L830.46,349.39L831.55,347.79L833.53,347.62L834.72,347.39z")
              .attr({id: 'KR',title: 'South Korea',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'KR'});

      var SS = rsr.path("M570.48,436.9L570.51,439.1L570.09,439.96L568.61,440.03L567.65,441.64L569.37,441.84L570.79,443.21L571.29,444.33L572.57,444.98L574.22,448.03L572.32,449.87L570.6,451.54L568.87,452.82L566.9,452.82L564.64,453.47L562.86,452.84L561.71,453.61L559.24,451.75L558.57,450.56L557.01,451.15L555.71,450.96L554.96,451.43L553.7,451.1L552.01,448.79L551.56,447.9L549.46,446.79L548.75,445.11L547.58,443.9L545.7,442.44L545.67,441.52L544.14,440.39L542.23,439.29L543.09,438.98L544.05,438.45L544.77,435.93L545.54,434.62L547.57,434.23L548.05,435L549.49,436.65L550.26,436.9L551.27,436.41L553.29,436.51L553.68,437.09L556.47,437.09L556.57,436.51L558.01,435.98L558.3,435.15L559.36,434.57L561.72,436.22L563.16,435.93L564.56,433.89L566.1,432.33L565.86,430.62L565.18,429.79L566.87,429.64L567.06,429.01L568.36,429.2L568.02,431.3L568.36,433.35L569.8,434.47L570.14,435.44L570.09,436.85z")
              .attr({id: 'SS',title: 'South Sudan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SS'});

      var ES = rsr.path("M449.92,334.56L450.06,331.88L448.92,330.22L452.88,327.45L456.31,328.15L460.08,328.12L463.06,328.78L465.39,328.58L469.92,328.7L471.04,330.19L476.2,331.92L477.22,331.1L480.38,332.82L483.63,332.33L483.78,334.52L481.12,337.01L477.53,337.79L477.28,339.03L475.55,341.06L474.47,344.02L475.56,346.07L473.94,347.67L473.34,349.97L471.22,350.67L469.23,353.36L465.68,353.41L463,353.35L461.25,354.57L460.18,355.88L458.8,355.59L457.77,354.42L456.97,352.42L454.35,351.88L454.12,350.72L455.16,349.4L455.54,348.44L454.58,347.38L455.35,345.03L454.23,342.86L455.44,342.56L455.55,340.84L456.01,340.31L456.04,337.43L457.34,336.43L456.56,334.55L454.92,334.42L454.44,334.89L452.79,334.9L452.08,333.06L450.94,333.61z")
              .attr({id: 'ES',title: 'Spain',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'ES'});

      var LK = rsr.path("M704.57,442.37L704.15,445.29L702.98,446.09L700.54,446.73L699.2,444.5L698.71,440.47L699.98,435.89L701.91,437.46L703.22,439.44z")
              .attr({id: 'LK',title: 'Sri Lanka',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'LK'});

      var SD = rsr.path("M570.48,436.9L570.09,436.85L570.14,435.44L569.8,434.47L568.36,433.35L568.02,431.3L568.36,429.2L567.06,429.01L566.87,429.64L565.18,429.79L565.86,430.62L566.1,432.33L564.56,433.89L563.16,435.93L561.72,436.22L559.36,434.57L558.3,435.15L558.01,435.98L556.57,436.51L556.47,437.09L553.68,437.09L553.29,436.51L551.27,436.41L550.26,436.9L549.49,436.65L548.05,435L547.57,434.23L545.54,434.62L544.77,435.93L544.05,438.45L543.09,438.98L542.23,439.29L542,439.15L541.03,438.34L540.85,437.47L541.3,436.29L541.3,435.14L539.68,433.37L539.36,432.15L539.39,431.46L538.36,430.63L538.33,428.97L537.75,427.87L536.76,428.04L537.04,426.99L537.77,425.79L537.45,424.61L538.37,423.73L537.79,423.06L538.53,421.28L539.81,419.15L542.23,419.35L542.09,407.74L542.13,406.5L545.35,406.49L545.35,400.53L556.62,400.53L567.5,400.53L578.62,400.53L579.52,403.47L578.91,404.01L579.32,407.07L580.35,410.59L581.41,411.32L582.95,412.4L581.53,414.07L579.46,414.55L578.58,415.45L578.31,417.38L577.1,421.63L577.4,422.78L576.95,425.25L575.81,428.06L574.12,429.48L572.92,431.65L572.63,432.81L571.31,433.61L570.48,436.57z")
              .attr({id: 'SD',title: 'Sudan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SD'});

      var SR = rsr.path("M315.02,446.72L318.38,447.28L318.68,446.77L320.95,446.57L323.96,447.33L322.5,449.73L322.72,451.64L323.83,453.3L323.34,454.5L323.09,455.77L322.37,456.94L320.77,456.35L319.44,456.64L318.31,456.39L318.03,457.2L318.5,457.75L318.25,458.32L316.72,458.09L315.01,455.67L314.64,454.1L313.75,454.09L312.5,452.07L313.02,450.62L312.87,449.97L314.57,449.24z")
              .attr({id: 'SR',title: 'Suriname',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SR'});

      var SJ = rsr.path("M544.58,104.49l-6.26,5.36l-4.95,-3.02l1.94,-3.42l-1.69,-4.34l5.81,-2.78l1.11,5.18L544.58,104.49zM526.43,77.81l9.23,11.29l-7.06,5.66l-1.56,10.09l-2.46,2.49l-1.33,10.51l-3.38,0.48l-6.03,-7.64l2.54,-4.62l-4.2,-3.86l-5.46,-11.82l-2.18,-11.79l7.64,-5.69l1.54,5.56l3.99,-0.22l1.06,-5.43l4.12,-0.56L526.43,77.81zM546.6,66.35l5.5,5.8l-4.16,8.52l-8.13,1.81l-8.27,-2.56l-0.5,-4.32l-4.02,-0.28l-3.07,-7.48l8.66,-4.72l4.07,4.08l2.84,-5.09L546.6,66.35z")
              .attr({id: 'SJ',title: 'Svalbard and Jan Mayen',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SJ'});

      var SZ = rsr.path("M565.18,540.74L564.61,542.13L562.97,542.46L561.29,540.77L561.27,539.69L562.03,538.52L562.3,537.62L563.11,537.4L564.52,537.97L564.94,539.36z")
              .attr({id: 'SZ',title: 'Swaziland',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SZ'});

      var SE = rsr.path("M537.45,217.49L534.73,222.18L535.17,226.2L530.71,231.33L525.3,236.67L523.25,245.08L525.25,249.15L527.93,252.29L525.36,258.52L522.44,259.78L521.37,268.62L519.78,273.38L516.38,272.89L514.79,276.84L511.54,277.07L510.65,272.36L508.3,266.55L506.17,259.05L507.41,255.9L509.74,252.09L510.67,245.36L508.88,242.38L508.7,234.34L510.53,228.43L513.31,228.54L514.28,225.99L513.26,223.76L517.61,214.26L520.42,206.39L522.27,201.15L524.96,201.17L525.71,196.96L530.99,198.18L531.4,193.1L533.14,192.77L536.88,196.58L541.25,201.73L541.33,212.85L542.27,215.55z")
              .attr({id: 'SE',title: 'Sweden',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SE'});

      var CH = rsr.path("M502.15,312.34L502.26,313.08L501.83,314.09L503.1,314.83L504.53,314.94L504.31,316.61L503.08,317.3L501,316.79L500.39,318.42L499.06,318.55L498.57,317.91L497,319.27L495.65,319.46L494.44,318.6L493.48,316.83L492.14,317.47L492.18,315.63L494.23,313.32L494.14,312.27L495.42,312.66L496.19,311.95L498.57,311.98L499.15,311.08z")
              .attr({id: 'CH',title: 'Switzerland',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'CH'});

      var SY = rsr.path("M584.02,364.6L578.53,368.14L575.41,366.82L575.35,366.8L575.73,366.3L575.69,364.93L576.38,363.1L577.91,361.83L577.45,360.51L576.19,360.33L575.93,357.72L576.61,356.31L577.36,355.56L578.11,354.8L578.27,352.86L579.18,353.54L582.27,352.57L583.76,353.22L586.07,353.21L589.29,351.9L590.81,351.96L594,351.42L592.56,353.6L591.02,354.46L591.29,356.98L590.23,361.1z")
              .attr({id: 'SY',title: 'Syria',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'SY'});


      var TW = rsr.path("M816.7,393.27L815.01,398.14L813.81,400.62L812.33,398.07L812.01,395.82L813.66,392.82L815.91,390.5L817.19,391.41z")
              .attr({id: 'TW',title: 'Taiwan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TW'});

      var TJ = rsr.path("M674.37,340.62L673.34,341.75L670.29,341.14L670.02,343.24L673.06,342.96L676.53,344.13L681.83,343.58L682.54,346.91L683.46,346.55L685.16,347.36L685.07,348.74L685.49,350.75L682.59,350.75L680.66,350.49L678.92,352.06L677.67,352.4L676.69,353.14L675.58,351.99L675.85,349.04L675,348.87L675.3,347.78L673.79,346.98L672.58,348.21L672.28,349.64L671.85,350.16L670.17,350.09L669.27,351.69L668.32,351.02L666.29,352.14L665.44,351.72L667.01,348.15L666.41,345.49L664.35,344.63L665.08,343.04L667.42,343.21L668.75,341.2L669.64,338.85L673.39,337.99L672.81,339.7L673.21,340.72z")
              .attr({id: 'TJ',title: 'Tajikistan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TJ'});

      var TZ = rsr.path("M570.31,466.03L570.79,466.34L580.95,472.01L581.15,473.63L585.17,476.42L583.88,479.87L584.04,481.46L585.84,482.48L585.92,483.21L585.15,484.91L585.31,485.76L585.13,487.11L586.11,488.87L587.27,491.66L588.29,492.28L586.06,493.92L583,495.02L581.32,494.98L580.32,495.83L578.37,495.9L577.63,496.26L574.26,495.46L572.15,495.69L571.37,491.83L570.42,490.51L569.85,489.73L567.11,489.21L565.51,488.36L563.73,487.89L562.61,487.41L561.44,486.7L559.93,483.15L558.3,481.58L557.74,479.96L558.02,478.5L557.52,475.93L558.68,475.8L559.69,474.79L560.79,473.33L561.48,472.75L561.45,471.84L560.85,471.21L560.69,470.11L561.49,469.76L561.66,468.12L560.54,466.55L561.53,466.21L564.6,466.25z")
              .attr({id: 'TZ',title: 'Tanzania',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TZ'});

      var TH = rsr.path("M762.89,429.18L760.37,427.87L757.97,427.93L758.38,425.68L755.91,425.7L755.69,428.84L754.18,432.99L753.27,435.49L753.46,437.54L755.28,437.63L756.42,440.2L756.93,442.63L758.49,444.24L760.19,444.57L761.64,446.02L760.73,447.17L758.87,447.51L758.65,446.07L756.37,444.84L755.88,445.34L754.77,444.27L754.29,442.88L752.8,441.29L751.44,439.96L750.98,441.61L750.45,440.05L750.76,438.29L751.58,435.58L752.94,432.67L754.48,430.02L753.38,427.42L753.43,426.09L753.11,424.49L751.24,422.21L750.57,420.76L751.54,420.23L752.56,417.71L751.42,415.79L749.64,413.66L748.28,411.09L749.46,410.56L750.74,407.37L752.72,407.23L754.36,405.95L755.96,405.26L757.18,406.18L757.34,407.96L759.23,408.09L758.54,411.2L758.61,413.82L761.56,412.08L762.4,412.59L764.05,412.51L764.61,411.49L766.73,411.69L768.86,414.07L769.04,416.94L771.31,419.47L771.18,421.91L770.27,423.21L767.64,422.8L764.02,423.35L762.22,425.73z")
              .attr({id: 'TH',title: 'Thailand',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TH'});

      var TL = rsr.path("M825.65,488.25L825.98,487.59L828.39,486.96L830.35,486.86L831.22,486.51L832.28,486.86L831.25,487.62L828.33,488.85L825.98,489.67L825.93,488.81z")
              .attr({id: 'TL',title: 'Timor-Leste',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TL'});

      var TG = rsr.path("M480.48,446.25L478.23,446.84L477.6,445.86L476.85,444.08L476.63,442.68L477.25,440.15L476.55,439.12L476.28,436.9L476.28,434.85L475.11,433.39L475.32,432.5L477.78,432.56L477.42,434.06L478.27,434.89L479.25,435.88L479.35,437.27L479.92,437.85L479.79,444.31z")
              .attr({id: 'TG',title: 'Togo',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TG'});

      var TT = rsr.path("M302.31,433.24L303.92,432.87L304.51,432.97L304.4,435.08L302.06,435.39L301.55,435.14L302.37,434.36z")
              .attr({id: 'TT',title: 'Trinidad and Tobago',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TT'});

      var TN = rsr.path("M501.84,374.69L500.64,368.83L498.92,367.5L498.89,366.69L496.6,364.71L496.35,362.18L498.08,360.3L498.74,357.48L498.29,354.2L498.86,352.41L501.92,351L503.88,351.42L503.8,353.19L506.18,351.9L506.38,352.57L504.97,354.28L504.96,355.88L505.93,356.73L505.56,359.69L503.71,361.4L504.24,363.23L505.69,363.29L506.4,364.88L507.47,365.4L507.31,367.95L505.94,368.9L505.08,369.95L503.15,371.21L503.45,372.56L503.21,373.94z")
              .attr({id: 'TN',title: 'Tunisia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TN'});

      var TR = rsr.path("M578.75,336.6l4.02,1.43l3.27,-0.57l2.41,0.33l3.31,-1.94l2.99,-0.18l2.7,1.83l0.48,1.3l-0.27,1.79l2.08,0.91l1.1,1.06l-1.92,1.03l0.88,4.11l-0.55,1.1l1.53,2.82l-1.34,0.59l-0.98,-0.89l-3.26,-0.45l-1.2,0.55l-3.19,0.54l-1.51,-0.06l-3.23,1.31l-2.31,0.01l-1.49,-0.66l-3.09,0.97l-0.92,-0.68l-0.15,1.94l-0.75,0.76l-0.75,0.76l-1.03,-1.57l1.06,-1.3l-1.71,0.3l-2.35,-0.8l-1.93,2l-4.26,0.39l-2.27,-1.86l-3.02,-0.12l-0.65,1.44l-1.94,0.41l-2.71,-1.85l-3.06,0.06l-1.66,-3.48l-2.05,-1.96l1.36,-2.78l-1.78,-1.72l3.11,-3.48l4.32,-0.15l1.18,-2.81l5.34,0.49l3.37,-2.42l3.27,-1.06l4.64,-0.08L578.75,336.6zM551.5,338.99l-2.34,1.98l-0.88,-1.71l0.04,-0.76l0.67,-0.41l0.87,-2.33l-1.37,-0.99l2.86,-1.18l2.41,0.5l0.33,1.44l2.45,1.2l-0.51,0.91l-3.33,0.2L551.5,338.99z")
              .attr({id: 'TR',title: 'Turkey',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TR'});

      var TM = rsr.path("M646.88,356.9L646.63,353.99L644.54,353.87L641.34,350.78L639.1,350.39L636,348.6L634,348.27L632.77,348.93L630.9,348.83L628.91,350.85L626.44,351.53L625.92,349.04L626.33,345.31L624.14,344.09L624.86,341.61L623,341.39L623.62,338.3L626.26,339.21L628.73,338.02L626.68,335.79L625.88,333.65L623.62,334.61L623.34,337.34L622.46,334.93L623.7,333.68L626.88,332.89L628.78,333.95L630.74,336.88L632.18,336.7L635.34,336.65L634.88,334.77L637.28,333.47L639.64,331.27L643.42,333.27L643.72,336.26L644.79,337.03L647.82,336.86L648.76,337.53L650.14,341.32L653.35,343.83L655.18,345.52L658.11,347.27L661.84,348.79L661.76,350.95L660.92,350.84L659.59,349.9L659.15,351.15L656.79,351.83L656.23,354.62L654.65,355.67L652.44,356.19L651.85,357.74L649.74,358.2z")
              .attr({id: 'TM',title: 'Turkmenistan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'TM'});

      var UG = rsr.path("M564.6,466.25L561.53,466.21L560.54,466.55L558.87,467.41L558.19,467.12L558.21,465.02L558.86,463.96L559.02,461.72L559.61,460.43L560.68,458.97L561.76,458.23L562.66,457.24L561.54,456.87L561.71,453.61L562.86,452.84L564.64,453.47L566.9,452.82L568.87,452.82L570.6,451.54L571.93,453.48L572.26,454.88L573.49,458.08L572.47,460.11L571.09,461.95L570.29,463.08L570.31,466.03z")
              .attr({id: 'UG',title: 'Uganda',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'UG'});

      var UA = rsr.path("M564.38,292.49L565.42,292.68L566.13,291.64L566.98,291.87L569.89,291.43L571.68,294L570.98,294.92L571.21,296.31L573.45,296.52L574.45,298.45L574.39,299.32L577.95,300.86L580.1,300.17L581.83,302.21L583.47,302.17L587.6,303.57L587.63,304.84L586.5,307.07L587.11,309.4L586.67,310.79L583.96,311.1L582.52,312.26L582.43,314.09L580.19,314.42L578.32,315.74L575.7,315.95L573.28,317.47L571.96,318.5L573.45,319.97L574.82,320.93L577.68,320.69L577.13,322.11L574.06,322.79L570.25,325.06L568.7,324.27L569.31,322.42L566.25,321.26L566.75,320.49L569.91,318.86L569.51,318.05L569.06,318.46L568.62,318.24L564.26,317.22L564.07,315.71L561.47,316.21L560.43,318.44L558.26,321.39L556.98,320.71L555.67,321.35L554.42,320.62L555.12,320.18L555.61,318.81L556.38,317.52L556.18,316.8L556.77,316.48L557.04,317.04L558.7,317.15L559.44,316.86L558.92,316.44L559.11,315.84L558.13,314.8L557.73,313.08L556.71,312.41L556.91,311L555.64,309.88L554.49,309.72L552.42,308.41L550.56,308.83L549.89,309.45L548.71,309.44L548,310.42L545.93,310.82L544.98,311.46L543.67,310.45L541.88,310.43L540.14,309.97L538.93,310.86L538.73,309.74L537.18,308.6L537.73,306.89L538.5,305.79L539.12,306.03L538.39,304.11L540.94,300.5L542.33,299.99L542.63,298.75L541.22,294.86L542.56,294.69L544.1,293.46L546.27,293.36L549.1,293.72L552.23,294.8L554.44,294.89L555.49,295.54L556.54,294.76L557.28,295.81L559.81,295.59L560.92,296.02L561.11,293.76L561.97,292.76z")
              .attr({id: 'UA',title: 'Ukraine',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'UA'});

      // United Arab Emirates
      var UAE = rsr.path("M619.87,393.72L620.37,393.57L620.48,394.41L622.67,393.93L624.99,394.01L626.68,394.1L628.6,392.03L630.7,390.05L632.47,388.15L633,389.2L633.38,391.64L631.95,391.65L631.72,393.65L632.22,394.07L630.95,394.67L630.94,395.92L630.12,397.18L630.05,398.39L629.48,399.03L621.06,397.51L619.98,394.43z")
                // attr styles the country
                .attr({id: 'AE',title: 'United Arab Emirates',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
                // this sets the id for the path/country
                .data({'id': 'AE'});

      var GB = rsr.path("M459.38,281l-1.5,3.29l-2.12,-0.98l-1.73,0.07l0.58,-2.57l-0.58,-2.6l2.35,-0.2L459.38,281zM466.83,260.24l-3,5.73l2.86,-0.72l3.07,0.03l-0.73,4.22l-2.52,4.53l2.9,0.32l0.22,0.52l2.5,5.79l1.92,0.77l1.73,5.41l0.8,1.84l3.4,0.88l-0.34,2.93l-1.43,1.33l1.12,2.33l-2.52,2.33l-3.75,-0.04l-4.77,1.21l-1.31,-0.87l-1.85,2.06l-2.59,-0.5l-1.97,1.67l-1.49,-0.87l4.11,-4.64l2.51,-0.97l-0.02,0l-4.38,-0.75l-0.79,-1.8l2.93,-1.41l-1.54,-2.48l0.53,-3.06l4.17,0.42l0,0l0.41,-2.74l-1.88,-2.95l-0.04,-0.07l-3.4,-0.85l-0.67,-1.32l1.02,-2.2l-0.92,-1.37l-1.51,2.34l-0.16,-4.8l-1.42,-2.59l1.02,-5.36l2.18,-4.31l2.24,0.42L466.83,260.24z")
              .attr({id: 'GB',title: 'United Kingdom',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'GB'});

      var US = rsr.path("M109.25,279.8L109.25,279.8l-1.54,-1.83l-2.47,-1.57l-0.79,-4.36l-3.61,-4.13l-1.51,-4.94l-2.69,-0.34l-4.46,-0.13l-3.29,-1.54l-5.8,-5.64l-2.68,-1.05l-4.9,-1.99l-3.88,0.48l-5.51,-2.59l-3.33,-2.43l-3.11,1.21l0.58,3.93l-1.55,0.36l-3.24,1.16l-2.47,1.86l-3.11,1.16l-0.4,-3.24l1.26,-5.53l2.98,-1.77l-0.77,-1.46l-3.57,3.22l-1.91,3.77l-4.04,3.95l2.05,2.65l-2.65,3.85l-3.01,2.21l-2.81,1.59l-0.69,2.29l-4.38,2.63l-0.89,2.36l-3.28,2.13l-1.92,-0.38l-2.62,1.38l-2.85,1.67l-2.33,1.63l-4.81,1.38l-0.44,-0.81l3.07,-2.27l2.74,-1.51l2.99,-2.71l3.48,-0.56l1.38,-2.06l3.89,-3.05l0.63,-1.03l2.07,-1.83l0.48,-4l1.43,-3.17l-3.23,1.64l-0.9,-0.93l-1.52,1.95l-1.83,-2.73l-0.76,1.94l-1.05,-2.7l-2.8,2.17l-1.72,0l-0.24,-3.23l0.51,-2.02l-1.81,-1.98l-3.65,1.07l-2.37,-2.63l-1.92,-1.36l-0.01,-3.25l-2.16,-2.48l1.08,-3.41l2.29,-3.37l1,-3.15l2.27,-0.45l1.92,0.99l2.26,-3.01l2.04,0.54l2.14,-1.96l-0.52,-2.92l-1.57,-1.16l2.08,-2.52l-1.72,0.07l-2.98,1.43l-0.85,1.43l-2.21,-1.43l-3.97,0.73l-4.11,-1.56l-1.18,-2.65l-3.55,-3.91l3.94,-2.87l6.25,-3.41h2.31l-0.38,3.48l5.92,-0.27l-2.28,-4.34l-3.45,-2.72l-1.99,-3.64l-2.69,-3.17l-3.85,-2.38l1.57,-4.03l4.97,-0.25l3.54,-3.58l0.67,-3.92l2.86,-3.91l2.73,-0.95l5.31,-3.76l2.58,0.57l4.31,-4.61l4.24,1.83l2.03,3.87l1.25,-1.65l4.74,0.51l-0.17,1.95l4.29,1.43l2.86,-0.84l5.91,2.64l5.39,0.78l2.16,1.07l3.73,-1.34l4.25,2.46l3.05,1.13l-0.02,27.65l-0.01,35.43l2.76,0.17l2.73,1.56l1.96,2.44l2.49,3.6l2.73,-3.05l2.81,-1.79l1.49,2.85l1.89,2.23l2.57,2.42l1.75,3.79l2.87,5.88l4.77,3.2l0.08,3.12L109.25,279.8zM285.18,314.23l-1.25,-1.19l-1.88,0.7l-0.93,-1.08l-2.14,3.1l-0.86,3.15l-1,1.82l-1.19,0.62l-0.9,0.2l-0.28,0.98l-5.17,0l-4.26,0.03l-1.27,0.73l-2.87,2.73l0.29,0.54l0.17,1.51l-2.1,1.27l-2.3,-0.32l-2.2,-0.14l-1.33,0.44l0.25,1.15l0,0l0.05,0.37l-2.42,2.27l-2.11,1.09l-1.44,0.51l-1.66,1.03l-2.03,0.5l-1.4,-0.19l-1.73,-0.77l0.96,-1.45l0.62,-1.32l1.32,-2.09l-0.14,-1.57l-0.5,-2.24l-1.04,-0.39l-1.74,1.7l-0.56,-0.03l-0.14,-0.97l1.54,-1.56l0.26,-1.79l-0.23,-1.79l-2.08,-1.55l-2.38,-0.8l-0.39,1.52l-0.62,0.4l-0.5,1.95l-0.26,-1.33l-1.12,0.95l-0.7,1.32l-0.73,1.92l-0.14,1.64l0.93,2.38l-0.08,2.51l-1.14,1.84l-0.57,0.52l-0.76,0.41l-0.95,0.02l-0.26,-0.25l-0.76,-1.98l-0.02,-0.98l0.08,-0.94l-0.35,-1.87l0.53,-2.18l0.63,-2.71l1.46,-3.03l-0.42,0.01l-2.06,2.54l-0.38,-0.46l1.1,-1.42l1.67,-2.57l1.91,-0.36l2.19,-0.8l2.21,0.42l0.09,0.02l2.47,-0.36l-1.4,-1.61l-0.75,-0.13l-0.86,-0.16l-0.59,-1.14l-2.75,0.36l-2.49,0.9l-1.97,-1.55l-1.59,-0.52l0.9,-2.17l-2.48,1.37l-2.25,1.33l-2.16,1.04l-1.72,-1.4l-2.81,0.85l0.01,-0.6l1.9,-1.73l1.99,-1.65l2.86,-1.37l-3.45,-1.09l-2.27,0.55l-2.72,-1.3l-2.86,-0.67l-1.96,-0.26l-0.87,-0.72l-0.5,-2.35l-0.95,0.02l-0.01,1.64l-5.8,0l-9.59,0l-9.53,0l-8.42,0h-8.41h-8.27h-8.55h-2.76h-8.32h-7.96l0.95,3.47l0.45,3.41l-0.69,1.09l-1.49,-3.91l-4.05,-1.42l-0.34,0.82l0.82,1.94l0.89,3.53l0.51,5.42l-0.34,3.59l-0.34,3.54l-1.1,3.61l0.9,2.9l0.1,3.2l-0.61,3.05l1.49,1.99l0.39,2.95l2.17,2.99l1.24,1.17l-0.1,0.82l2.34,4.85l2.72,3.45l0.34,1.87l0.71,0.55l2.6,0.33l1,0.91l1.57,0.17l0.31,0.96l1.31,0.4l1.82,1.92l0.47,1.7l3.19,-0.25l3.56,-0.36l-0.26,0.65l4.23,1.6l6.4,2.31l5.58,-0.02l2.22,0l0.01,-1.35l4.86,0l1.02,1.16l1.43,1.03l1.67,1.43l0.93,1.69l0.7,1.77l1.45,0.97l2.33,0.96l1.77,-2.53l2.29,-0.06l1.98,1.28l1.41,2.18l0.97,1.86l1.65,1.8l0.62,2.19l0.79,1.47l2.19,0.96l1.99,0.68l1.09,-0.09l-0.53,-1.06l-0.14,-1.5l0.03,-2.16l0.65,-1.42l1.53,-1.51l2.79,-1.37l2.55,-2.37l2.36,-0.75l1.74,-0.23l2.04,0.74l2.45,-0.4l2.09,1.69l2.03,0.1l1.05,-0.61l1.04,0.47l0.53,-0.42l-0.6,-0.63l0.05,-1.3l-0.5,-0.86l1.16,-0.5l2.14,-0.22l2.49,0.36l3.17,-0.41l1.76,0.8l1.36,1.5l0.5,0.16l2.83,-1.46l1.09,0.49l2.19,2.68l0.79,1.75l-0.58,2.1l0.42,1.23l1.3,2.4l1.49,2.68l1.07,0.71l0.44,1.35l1.38,0.37l0.84,-0.39l0.7,-1.89l0.12,-1.21l0.09,-2.1l-1.33,-3.65l-0.02,-1.37l-1.25,-2.25l-0.94,-2.75l-0.5,-2.25l0.43,-2.31l1.32,-1.94l1.58,-1.57l3.08,-2.16l0.4,-1.12l1.42,-1.23l1.4,-0.22l1.84,-1.98l2.9,-1.01l1.78,-2.53l-0.39,-3.46l-0.29,-1.21l-0.8,-0.24l-0.12,-3.35l-1.93,-1.14l1.85,0.56l-0.6,-2.26l0.54,-1.55l0.33,2.97l1.43,1.36l-0.87,2.4l0.26,0.14l1.58,-2.81l0.9,-1.38l-0.04,-1.35l-0.7,-0.64l-0.58,-1.94l0.92,0.9l0.62,0.19l0.21,0.92l2.04,-2.78l0.61,-2.62l-0.83,-0.17l0.85,-1.02l-0.08,0.45l1.79,-0.01l3.93,-1.11l-0.83,-0.7l-4.12,0.7l2.34,-1.07l1.63,-0.18l1.22,-0.19l2.07,-0.65l1.35,0.07l1.89,-0.61l0.22,-1.07l-0.84,-0.84l0.29,1.37l-1.16,-0.09l-0.93,-1.99l0.03,-2.01l0.48,-0.86l1.48,-2.28l2.96,-1.15l2.88,-1.34l2.99,-1.9l-0.48,-1.29l-1.83,-2.25L285.18,314.23zM45.62,263.79l-1.5,0.8l-2.55,1.86l0.43,2.42l1.43,1.32l2.8,-1.95l2.43,-2.47l-1.19,-1.63L45.62,263.79zM0,235.22l2.04,-1.26l0.23,-0.68L0,232.61V235.22zM8.5,250.59l-2.77,0.97l1.7,1.52l1.84,1.04l1.72,-0.87l-0.27,-2.15L8.5,250.59zM105.85,283.09l-2.69,0.38l-1.32,-0.62l-0.17,1.52l0.52,2.07l1.42,1.46l1.04,2.13l1.69,2.1l1.12,0.01l-2.44,-3.7L105.85,283.09zM37.13,403.77l-1,-0.28l-0.27,0.26l0.02,0.19l0.32,0.24l0.48,0.63l0.94,-0.21l0.23,-0.36L37.13,403.77zM34.14,403.23l1.5,0.09l0.09,-0.32l-1.38,-0.13L34.14,403.23zM40.03,406.52l-0.5,-0.26l-1.07,-0.5l-0.21,-0.06l-0.16,0.28l0.19,0.58l-0.49,0.48l-0.14,0.33l0.46,1.08l-0.08,0.83l0.7,0.42l0.41,-0.49l0.9,-0.46l1.1,-0.63l0.07,-0.16l-0.71,-1.04L40.03,406.52zM32.17,401.38l-0.75,0.41l0.11,0.12l0.36,0.68l0.98,0.11l0.2,0.04l0.15,-0.17l-0.81,-0.99L32.17,401.38zM27.77,399.82l-0.43,0.3l-0.15,0.22l0.94,0.55l0.33,-0.3l-0.06,-0.7L27.77,399.82z")
              .attr({id: 'US',title: 'United States',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'US', 'country': 'United States'});

      var UY = rsr.path("M313.68,551.79L315.5,551.45L318.31,553.95L319.35,553.86L322.24,555.94L324.44,557.76L326.06,560.01L324.82,561.58L325.6,563.48L324.39,565.6L321.22,567.48L319.15,566.8L317.63,567.17L315.04,565.71L313.14,565.82L311.43,563.95L311.65,561.79L312.26,561.05L312.23,557.75L312.98,554.38z")
              .attr({id: 'UY',title: 'Uruguay',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'UY'});

      var UZ = rsr.path("M661.76,350.95L661.84,348.79L658.11,347.27L655.18,345.52L653.35,343.83L650.14,341.32L648.76,337.53L647.82,336.86L644.79,337.03L643.72,336.26L643.42,333.27L639.64,331.27L637.28,333.47L634.88,334.77L635.34,336.65L632.18,336.7L632.07,322.57L639.29,320.22L639.81,320.57L644.16,323.41L646.45,324.89L649.13,328.39L652.42,327.83L657.23,327.53L660.58,330.33L660.37,334.13L661.74,334.16L662.31,337.22L665.88,337.34L666.64,339.09L667.69,339.07L668.92,336.42L672.61,333.81L674.22,333.11L675.05,333.48L672.7,335.91L674.77,337.31L676.77,336.38L680.09,338.34L676.5,340.98L674.37,340.62L673.21,340.72L672.81,339.7L673.39,337.99L669.64,338.85L668.75,341.2L667.42,343.21L665.08,343.04L664.35,344.63L666.41,345.49L667.01,348.15L665.44,351.72L663.32,350.98z")
              .attr({id: 'UZ',title: 'Uzbekistan',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'UZ'});

      var VU = rsr.path("M945.87,509.9l-0.92,0.38l-0.94,-1.27l0.1,-0.78L945.87,509.9zM943.8,505.46l0.46,2.33l-0.75,-0.36l-0.58,0.16l-0.4,-0.8l-0.06,-2.21L943.8,505.46z")
              .attr({id: 'VU',title: 'Vanuatu',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'VU'});

      var VE = rsr.path("M275.25,430.35L275.17,431.02L273.52,431.35L274.44,432.64L274.4,434.13L273.17,435.77L274.23,438.01L275.44,437.83L276.07,435.79L275.2,434.79L275.06,432.65L278.55,431.49L278.16,430.15L279.14,429.25L280.15,431.25L282.12,431.3L283.94,432.88L284.05,433.82L286.56,433.84L289.56,433.55L291.17,434.82L293.31,435.17L294.88,434.29L294.91,433.57L298.39,433.4L301.75,433.36L299.37,434.2L300.32,435.54L302.57,435.75L304.69,437.14L305.14,439.4L306.6,439.33L307.7,440L305.48,441.65L305.23,442.68L306.19,443.72L305.5,444.24L303.77,444.69L303.83,445.99L303.07,446.76L304.96,448.88L305.34,449.67L304.31,450.74L301.17,451.78L299.16,452.22L298.35,452.88L296.12,452.18L294.04,451.82L293.52,452.08L294.77,452.8L294.66,454.67L295.05,456.43L297.42,456.67L297.58,457.25L295.57,458.05L295.25,459.23L294.09,459.68L292.01,460.33L291.47,461.19L289.29,461.37L287.74,459.89L286.89,457.12L286.14,456.14L285.12,455.53L286.54,454.14L286.45,453.51L285.65,452.68L285.09,450.83L285.31,448.82L285.93,447.88L286.44,446.38L285.45,445.89L283.85,446.21L281.83,446.06L280.7,446.36L278.72,443.95L277.09,443.59L273.49,443.86L272.82,442.88L272.13,442.65L272.03,442.06L272.36,441.02L272.14,439.89L271.52,439.27L271.16,437.97L269.72,437.79L270.49,436.13L270.84,434.12L271.65,433.06L272.74,432.25L273.45,430.83z")
              .attr({id: 'VE',title: 'Venezuela',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'VE'});

      var VN = rsr.path("M778.21,401.87L774.47,404.43L772.13,407.24L771.51,409.29L773.66,412.38L776.28,416.2L778.82,417.99L780.53,420.32L781.81,425.64L781.43,430.66L779.1,432.53L775.88,434.36L773.6,436.72L770.1,439.34L769.08,437.53L769.87,435.62L767.79,434.01L770.22,432.87L773.16,432.67L771.93,430.94L776.64,428.75L776.99,425.33L776.34,423.41L776.85,420.53L776.14,418.49L774.02,416.47L772.25,413.9L769.92,410.44L766.56,408.68L767.37,407.61L769.16,406.84L768.07,404.25L764.62,404.22L763.36,401.5L761.72,399.13L763.23,398.39L765.46,398.41L768.19,398.06L770.58,396.44L771.93,397.58L774.5,398.13L774.05,399.87L775.39,401.09z")
              .attr({id: 'VN',title: 'Vietnam',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'VN'});

      var EH = rsr.path("M438.57,383.06L442.19,383.07L450.94,383.1L450.94,383.1L450.94,383.1L442.19,383.07L438.57,383.06L438.46,383.15L438.41,383.19L436.63,386.39L434.77,387.53L433.75,389.44L433.69,391.09L432.94,392.88L432,393.37L430.44,395.31L429.48,397.46L429.66,398.48L428.74,400.05L427.66,400.87L427.53,402.26L427.41,403.53L428.02,402.53L439,402.55L438.47,398.2L439.16,396.65L441.78,396.38L441.69,388.52L450.9,388.69L450.9,383.96L450.96,383.35L450.96,383.14z")
              .attr({id: 'EH',title: 'Western Sahara',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'EH'});

      var YE = rsr.path("M624.16,416.33L622.13,417.12L621.59,418.4L621.52,419.39L618.73,420.61L614.25,421.96L611.74,423.99L610.51,424.14L609.67,423.97L608.03,425.17L606.24,425.72L603.89,425.87L603.18,426.03L602.57,426.78L601.83,426.99L601.4,427.72L600.01,427.66L599.11,428.04L597.17,427.9L596.44,426.23L596.52,424.66L596.07,423.81L595.52,421.69L594.71,420.5L595.27,420.36L594.98,419.04L595.32,418.48L595.2,417.22L596.43,416.29L596.14,415.06L596.89,413.63L598.04,414.39L598.8,414.12L602.03,414.05L602.55,414.35L605.26,414.64L606.33,414.49L607.03,415.46L608.34,414.98L610.35,411.91L612.97,410.59L621.05,409.46L623.25,414.3z")
              .attr({id: 'YE',title: 'Yemen',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'YE'});

      var ZM = rsr.path("M567.11,489.21L568.43,490.47L569.14,492.87L568.66,493.64L568.1,495.94L568.64,498.3L567.76,499.29L566.91,501.95L568.38,502.69L559.87,505.07L560.14,507.12L558.01,507.52L556.42,508.67L556.08,509.68L555.07,509.9L552.63,512.3L551.08,514.19L550.13,514.26L549.22,513.92L546.09,513.6L545.59,513.38L545.56,513.14L544.46,512.48L542.64,512.31L540.34,512.98L538.51,511.16L536.62,508.78L536.75,499.62L542.59,499.66L542.35,498.67L542.77,497.6L542.28,496.27L542.6,494.89L542.3,494.01L543.27,494.08L543.43,494.96L544.74,494.89L546.52,495.15L547.46,496.44L549.7,496.84L551.42,495.94L552.05,497.43L554.2,497.83L555.23,499.05L556.38,500.62L558.53,500.65L558.29,497.57L557.52,498.08L555.56,496.98L554.8,496.47L555.15,493.62L555.65,490.27L555.02,489.02L555.82,487.22L556.57,486.89L560.34,486.41L561.44,486.7L562.61,487.41L563.73,487.89L565.51,488.36z")
              .attr({id: 'ZM',title: 'Zambia',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'ZM'});

      var ZW = rsr.path("M562.71,527L561.22,526.7L560.27,527.06L558.92,526.55L557.78,526.52L555.99,525.16L553.82,524.7L553,522.8L552.99,521.75L551.79,521.43L548.62,518.18L547.73,516.47L547.17,515.95L546.09,513.6L549.22,513.92L550.13,514.26L551.08,514.19L552.63,512.3L555.07,509.9L556.08,509.68L556.42,508.67L558.01,507.52L560.14,507.12L560.32,508.2L562.66,508.14L563.96,508.75L564.56,509.47L565.9,509.68L567.35,510.62L567.36,514.31L566.81,516.35L566.69,518.55L567.14,519.43L566.83,521.17L566.4,521.44L565.66,523.59z")
              .attr({id: 'ZW',title: 'Zimbabwe',class: 'land',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#000000'})
              .data({'id': 'ZW'});

      group_a.attr({'name': 'group_a'});

      group_a.push(
        AF ,
        AL ,
        DZ ,
        AO ,
        AR ,
        AM ,
        AU ,
        AT ,
        AZ ,
        BS ,
        BD ,
        BY ,
        BE ,
        BZ ,
        BJ ,
        BT ,
        BO ,
        BA ,
        BW ,
        BR ,
        BN ,
        BG ,
        BF ,
        BI ,
        KH ,
        CM ,
        CA ,
        CF ,
        TD ,
        CL ,
        CN ,
        CO ,
        CR ,
        HR ,
        CU ,
        CY ,
        CZ ,
        CI ,
        CD ,
        DK ,
        DJ ,
        DO ,
        EC ,
        EG ,
        SV ,
        GQ ,
        ER ,
        EE ,
        ET ,
        FK ,
        FJ ,
        FI ,
        FR ,
        GF ,
        TF ,
        GA ,
        GM ,
        GE ,
        DE ,
        GH ,
        GR ,
        GL ,
        GT ,
        GN ,
        GW ,
        GY ,
        HT ,
        HN ,
        HU ,
        IS ,
        IN ,
        ID ,
        IR ,
        IQ ,
        IE ,
        IL ,
        IT ,
        JM ,
        JP ,
        JO ,
        KZ ,
        KE ,
        KX ,
        KW ,
        KG ,
        LA ,
        LV ,
        LB ,
        LS ,
        LR ,
        LY ,
        LT ,
        LU ,
        MK ,
        MG ,
        MW ,
        MY ,
        ML ,
        MR ,
        MX ,
        MD ,
        MN ,
        ME ,
        MA ,
        MZ ,
        MM ,
        NA ,
        NP ,
        NL ,
        NC ,
        NZ ,
        NI ,
        NE ,
        NG ,
        KP ,
        NO ,
        OM ,
        PK ,
        PS ,
        PA ,
        PG ,
        PY ,
        PE ,
        PH ,
        PL ,
        PT ,
        PR ,
        QA ,
        CG ,
        RO ,
        RU ,
        RW ,
        SA ,
        SN ,
        RS ,
        SL ,
        SK ,
        SI ,
        SB ,
        SO ,
        ZA ,
        KR ,
        SS ,
        ES ,
        LK ,
        SD ,
        SR ,
        SJ ,
        SZ ,
        SE ,
        CH ,
        SY ,
        TW ,
        TJ ,
        TZ ,
        TH ,
        TL ,
        TG ,
        TT ,
        TN ,
        TR ,
        TM ,
        UG ,
        UA ,
        UAE ,
        GB ,
        US ,
        UY ,
        UZ ,
        VU ,
        VE ,
        VN ,
        EH ,
        YE ,
        ZM ,
        ZW
      ); // this is the end of the push method on group_a

    }

    function getGroup_a() {
      return group_a;
    }

    var service = {
      getGroup_a: getGroup_a,
      renderMap: renderMap
    }

    return service;

  } // this closes the MapService function

})(); // this closes the IIFE

(function(){
  'use strict';

  angular.module('app')
    .factory('TokenService', TokenService);

  TokenService.$inject = ['$window'];

  function TokenService($window){

    function storeToken(token){
      return $window.localStorage.setItem('token', token);
    }

    function getToken(){
      return $window.localStorage.getItem('token');
    }

    function removeToken(){
      return $window.localStorage.removeItem('token');
    }

    function decodeToken(token){
      return JSON.parse($window.atob(token.split('.')[1]));
    }

    var service = {
      storeToken: storeToken,
      getToken: getToken,
      removeToken: removeToken,
      decodeToken: decodeToken
    }

    return service;
  } // this closes TokenService function
})();
