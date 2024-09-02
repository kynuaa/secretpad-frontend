"use strict";(self.webpackChunksecretpad_doc=self.webpackChunksecretpad_doc||[]).push([[446],{68324:function(ut,De,E){E.d(De,{Z:function(){return be}});var ye=E(36443),Q=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,ue=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,Z="".concat(Q," ").concat(ue).split(/[\s\n]+/),z="aria-",we="data-";function t(ee,X){return ee.indexOf(X)===0}function be(ee){var X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,K;X===!1?K={aria:!0,data:!0,attr:!0}:X===!0?K={aria:!0}:K=(0,ye.Z)({},X);var ce={};return Object.keys(ee).forEach(function(G){(K.aria&&(G==="role"||t(G,z))||K.data&&t(G,we)||K.attr&&Z.includes(G))&&(ce[G]=ee[G])}),ce}},64669:function(ut,De,E){E.d(De,{Z:function(){return Pt}});var ye=E(73909),Q=E(36443),ue=E(76499),Z=E(96138),z=E(77726),we=E(3664),t=E(58757),be=E(26736),ee=E(87608),X=E.n(ee),K=E(16098),ce=t.forwardRef(function(e,i){var n=e.height,a=e.offsetY,g=e.offsetX,r=e.children,o=e.prefixCls,s=e.onInnerResize,m=e.innerProps,S=e.rtl,v=e.extra,c={},d={display:"flex",flexDirection:"column"};if(a!==void 0){var h;c={height:n,position:"relative",overflow:"hidden"},d=(0,Q.Z)((0,Q.Z)({},d),{},(h={transform:"translateY(".concat(a,"px)")},(0,z.Z)(h,S?"marginRight":"marginLeft",-g),(0,z.Z)(h,"position","absolute"),(0,z.Z)(h,"left",0),(0,z.Z)(h,"right",0),(0,z.Z)(h,"top",0),h))}return t.createElement("div",{style:c},t.createElement(K.Z,{onResize:function(f){var R=f.offsetHeight;R&&s&&s()}},t.createElement("div",(0,ye.Z)({style:d,className:X()((0,z.Z)({},"".concat(o,"-holder-inner"),o)),ref:i},m),r,v)))});ce.displayName="Filler";var G=ce,Y=E(63971);function Xe(e,i){var n="touches"in e?e.touches[0]:e;return n[i?"pageX":"pageY"]}var ct=t.forwardRef(function(e,i){var n,a=e.prefixCls,g=e.rtl,r=e.scrollOffset,o=e.scrollRange,s=e.onStartMove,m=e.onStopMove,S=e.onScroll,v=e.horizontal,c=e.spinSize,d=e.containerSize,h=t.useState(!1),M=(0,Z.Z)(h,2),f=M[0],R=M[1],L=t.useState(null),b=(0,Z.Z)(L,2),O=b[0],V=b[1],se=t.useState(null),B=(0,Z.Z)(se,2),A=B[0],D=B[1],$=!g,T=t.useRef(),te=t.useRef(),y=t.useState(!1),P=(0,Z.Z)(y,2),j=P[0],ne=P[1],fe=t.useRef(),N=function(){clearTimeout(fe.current),ne(!0),fe.current=setTimeout(function(){ne(!1)},3e3)},q=o-d||0,ve=d-c||0,xe=q>0,W=t.useMemo(function(){if(r===0||q===0)return 0;var I=r/q;return I*ve},[r,q,ve]),de=function(x){x.stopPropagation(),x.preventDefault()},he=t.useRef({top:W,dragging:f,pageY:O,startTop:A});he.current={top:W,dragging:f,pageY:O,startTop:A};var re=function(x){R(!0),V(Xe(x,v)),D(he.current.top),s(),x.stopPropagation(),x.preventDefault()};t.useEffect(function(){var I=function(me){me.preventDefault()},x=T.current,k=te.current;return x.addEventListener("touchstart",I),k.addEventListener("touchstart",re),function(){x.removeEventListener("touchstart",I),k.removeEventListener("touchstart",re)}},[]);var Ze=t.useRef();Ze.current=q;var ge=t.useRef();ge.current=ve,t.useEffect(function(){if(f){var I,x=function(me){var Se=he.current,Pe=Se.dragging,He=Se.pageY,ae=Se.startTop;if(Y.Z.cancel(I),Pe){var Le=Xe(me,v)-He,oe=ae;!$&&v?oe-=Le:oe+=Le;var le=Ze.current,Te=ge.current,ie=Te?oe/Te:0,F=Math.ceil(ie*le);F=Math.max(F,0),F=Math.min(F,le),I=(0,Y.Z)(function(){S(F,v)})}},k=function(){R(!1),m()};return window.addEventListener("mousemove",x),window.addEventListener("touchmove",x),window.addEventListener("mouseup",k),window.addEventListener("touchend",k),function(){window.removeEventListener("mousemove",x),window.removeEventListener("touchmove",x),window.removeEventListener("mouseup",k),window.removeEventListener("touchend",k),Y.Z.cancel(I)}}},[f]),t.useEffect(function(){N()},[r]),t.useImperativeHandle(i,function(){return{delayHidden:N}});var U="".concat(a,"-scrollbar"),H={position:"absolute",visibility:j&&xe?null:"hidden"},w={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return v?(H.height=8,H.left=0,H.right=0,H.bottom=0,w.height="100%",w.width=c,$?w.left=W:w.right=W):(H.width=8,H.top=0,H.bottom=0,$?H.right=0:H.left=0,w.width="100%",w.height=c,w.top=W),t.createElement("div",{ref:T,className:X()(U,(n={},(0,z.Z)(n,"".concat(U,"-horizontal"),v),(0,z.Z)(n,"".concat(U,"-vertical"),!v),(0,z.Z)(n,"".concat(U,"-visible"),j),n)),style:H,onMouseDown:de,onMouseMove:N},t.createElement("div",{ref:te,className:X()("".concat(U,"-thumb"),(0,z.Z)({},"".concat(U,"-thumb-moving"),f)),style:w,onMouseDown:re}))}),Ve=ct;function st(e){var i=e.children,n=e.setRef,a=t.useCallback(function(g){n(g)},[]);return t.cloneElement(i,{ref:a})}function ft(e,i,n,a,g,r,o){var s=o.getKey;return e.slice(i,n+1).map(function(m,S){var v=i+S,c=r(m,v,{style:{width:a}}),d=s(m);return t.createElement(st,{key:d,setRef:function(M){return g(m,M)}},c)})}var vt=E(4470),dt=E(14349),ht=E(54211),gt=function(){function e(){(0,dt.Z)(this,e),this.maps=void 0,this.id=0,this.maps=Object.create(null)}return(0,ht.Z)(e,[{key:"set",value:function(n,a){this.maps[n]=a,this.id+=1}},{key:"get",value:function(n){return this.maps[n]}}]),e}(),mt=gt;function St(e,i,n){var a=t.useState(0),g=(0,Z.Z)(a,2),r=g[0],o=g[1],s=(0,t.useRef)(new Map),m=(0,t.useRef)(new mt),S=(0,t.useRef)();function v(){Y.Z.cancel(S.current)}function c(){v(),S.current=(0,Y.Z)(function(){s.current.forEach(function(h,M){if(h&&h.offsetParent){var f=(0,vt.Z)(h),R=f.offsetHeight;m.current.get(M)!==R&&m.current.set(M,f.offsetHeight)}}),o(function(h){return h+1})})}function d(h,M){var f=e(h),R=s.current.get(f);M?(s.current.set(f,M),c()):s.current.delete(f),!R!=!M&&(M?i==null||i(h):n==null||n(h))}return(0,t.useEffect)(function(){return v},[]),[d,c,m.current,r]}function Rt(e,i,n,a,g,r,o,s){var m=t.useRef();return function(S){if(S==null){s();return}if(Y.Z.cancel(m.current),typeof S=="number")o(S);else if(S&&(0,ue.Z)(S)==="object"){var v,c=S.align;"index"in S?v=S.index:v=i.findIndex(function(f){return g(f)===S.key});var d=S.offset,h=d===void 0?0:d,M=function f(R,L){if(!(R<0||!e.current)){var b=e.current.clientHeight,O=!1,V=L;if(b){for(var se=L||c,B=0,A=0,D=0,$=Math.min(i.length,v),T=0;T<=$;T+=1){var te=g(i[T]);A=B;var y=n.get(te);D=A+(y===void 0?a:y),B=D,T===v&&y===void 0&&(O=!0)}var P=null;switch(se){case"top":P=A-h;break;case"bottom":P=D-b+h;break;default:{var j=e.current.scrollTop,ne=j+b;A<j?V="top":D>ne&&(V="bottom")}}P!==null&&P!==e.current.scrollTop&&o(P)}m.current=(0,Y.Z)(function(){O&&r(),f(R-1,V)},2)}};M(3)}}}function jt(e,i,n,a){var g=n-e,r=i-n,o=Math.min(g,r)*2;if(a<=o){var s=Math.floor(a/2);return a%2?n+s+1:n-s}return g>r?n-(a-r):n+(a-g)}function pt(e,i,n){var a=e.length,g=i.length,r,o;if(a===0&&g===0)return null;a<g?(r=e,o=i):(r=i,o=e);var s={__EMPTY_ITEM__:!0};function m(M){return M!==void 0?n(M):s}for(var S=null,v=Math.abs(a-g)!==1,c=0;c<o.length;c+=1){var d=m(r[c]),h=m(o[c]);if(d!==h){S=c,v=v||d!==m(o[c+1]);break}}return S===null?null:{index:S,multiple:v}}function Mt(e,i,n){var a=t.useState(e),g=(0,Z.Z)(a,2),r=g[0],o=g[1],s=t.useState(null),m=(0,Z.Z)(s,2),S=m[0],v=m[1];return t.useEffect(function(){var c=pt(r||[],e||[],i);(c==null?void 0:c.index)!==void 0&&(n==null||n(c.index),v(e[c.index])),o(e)},[e]),[S]}var Et=(typeof navigator=="undefined"?"undefined":(0,ue.Z)(navigator))==="object"&&/Firefox/i.test(navigator.userAgent),ke=Et,Ke=function(e,i){var n=(0,t.useRef)(!1),a=(0,t.useRef)(null);function g(){clearTimeout(a.current),n.current=!0,a.current=setTimeout(function(){n.current=!1},50)}var r=(0,t.useRef)({top:e,bottom:i});return r.current.top=e,r.current.bottom=i,function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=o<0&&r.current.top||o>0&&r.current.bottom;return s&&m?(clearTimeout(a.current),n.current=!1):(!m||n.current)&&g(),!n.current&&m}};function yt(e,i,n,a,g){var r=(0,t.useRef)(0),o=(0,t.useRef)(null),s=(0,t.useRef)(null),m=(0,t.useRef)(!1),S=Ke(i,n);function v(R){Y.Z.cancel(o.current);var L=R.deltaY;r.current+=L,s.current=L,!S(L)&&(ke||R.preventDefault(),o.current=(0,Y.Z)(function(){var b=m.current?10:1;g(r.current*b),r.current=0}))}function c(R){var L=R.deltaX;g(L,!0),ke||R.preventDefault()}var d=(0,t.useRef)(null),h=(0,t.useRef)(null);function M(R){if(e){Y.Z.cancel(h.current),h.current=(0,Y.Z)(function(){d.current=null},2);var L=R.deltaX,b=R.deltaY,O=Math.abs(L),V=Math.abs(b);d.current===null&&(d.current=a&&O>V?"x":"y"),d.current==="x"?c(R):v(R)}}function f(R){e&&(m.current=R.detail===s.current)}return[M,f]}var ze=E(55366),bt=14/15;function xt(e,i,n){var a=(0,t.useRef)(!1),g=(0,t.useRef)(0),r=(0,t.useRef)(null),o=(0,t.useRef)(null),s,m=function(d){if(a.current){var h=Math.ceil(d.touches[0].pageY),M=g.current-h;g.current=h,n(M)&&d.preventDefault(),clearInterval(o.current),o.current=setInterval(function(){M*=bt,(!n(M,!0)||Math.abs(M)<=.1)&&clearInterval(o.current)},16)}},S=function(){a.current=!1,s()},v=function(d){s(),d.touches.length===1&&!a.current&&(a.current=!0,g.current=Math.ceil(d.touches[0].pageY),r.current=d.target,r.current.addEventListener("touchmove",m),r.current.addEventListener("touchend",S))};s=function(){r.current&&(r.current.removeEventListener("touchmove",m),r.current.removeEventListener("touchend",S))},(0,ze.Z)(function(){return e&&i.current.addEventListener("touchstart",v),function(){var c;(c=i.current)===null||c===void 0||c.removeEventListener("touchstart",v),s(),clearInterval(o.current)}},[e])}var Zt=20;function Be(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=e/i*100;return isNaN(n)&&(n=0),n=Math.max(n,Zt),n=Math.min(n,e/2),Math.floor(n)}var Ae=E(29802);function Ct(e,i,n,a){var g=t.useMemo(function(){return[new Map,[]]},[e,n.id,a]),r=(0,Z.Z)(g,2),o=r[0],s=r[1],m=function(v){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v,d=o.get(v),h=o.get(c);if(d===void 0||h===void 0)for(var M=e.length,f=s.length;f<M;f+=1){var R,L=e[f],b=i(L);o.set(b,f);var O=(R=n.get(b))!==null&&R!==void 0?R:a;if(s[f]=(s[f-1]||0)+O,b===v&&(d=f),b===c&&(h=f),d!==void 0&&h!==void 0)break}return{top:s[d-1]||0,bottom:s[h]}};return m}var Lt=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender"],Tt=[],Dt={overflowY:"auto",overflowAnchor:"none"};function wt(e,i){var n=e.prefixCls,a=n===void 0?"rc-virtual-list":n,g=e.className,r=e.height,o=e.itemHeight,s=e.fullHeight,m=s===void 0?!0:s,S=e.style,v=e.data,c=e.children,d=e.itemKey,h=e.virtual,M=e.direction,f=e.scrollWidth,R=e.component,L=R===void 0?"div":R,b=e.onScroll,O=e.onVirtualScroll,V=e.onVisibleChange,se=e.innerProps,B=e.extraRender,A=(0,we.Z)(e,Lt),D=!!(h!==!1&&r&&o),$=D&&v&&o*v.length>r,T=M==="rtl",te=X()(a,(0,z.Z)({},"".concat(a,"-rtl"),T),g),y=v||Tt,P=(0,t.useRef)(),j=(0,t.useRef)(),ne=(0,t.useState)(0),fe=(0,Z.Z)(ne,2),N=fe[0],q=fe[1],ve=(0,t.useState)(0),xe=(0,Z.Z)(ve,2),W=xe[0],de=xe[1],he=(0,t.useState)(!1),re=(0,Z.Z)(he,2),Ze=re[0],ge=re[1],U=function(){ge(!0)},H=function(){ge(!1)},w=t.useCallback(function(l){return typeof d=="function"?d(l):l==null?void 0:l[d]},[d]),I={getKey:w};function x(l){q(function(u){var p;typeof l=="function"?p=l(u):p=l;var C=Yt(p);return P.current.scrollTop=C,C})}var k=(0,t.useRef)({start:0,end:y.length}),Ce=(0,t.useRef)(),me=Mt(y,w),Se=(0,Z.Z)(me,1),Pe=Se[0];Ce.current=Pe;var He=St(w,null,null),ae=(0,Z.Z)(He,4),Le=ae[0],oe=ae[1],le=ae[2],Te=ae[3],ie=t.useMemo(function(){if(!D)return{scrollHeight:void 0,start:0,end:y.length-1,offset:void 0};if(!$){var l;return{scrollHeight:((l=j.current)===null||l===void 0?void 0:l.offsetHeight)||0,start:0,end:y.length-1,offset:void 0}}for(var u=0,p,C,J,At=y.length,Ee=0;Ee<At;Ee+=1){var Ut=y[Ee],Gt=w(Ut),it=le.get(Gt),We=u+(it===void 0?o:it);We>=N&&p===void 0&&(p=Ee,C=u),We>N+r&&J===void 0&&(J=Ee),u=We}return p===void 0&&(p=0,C=0,J=Math.ceil(r/o)),J===void 0&&(J=y.length-1),J=Math.min(J+1,y.length-1),{scrollHeight:u,start:p,end:J,offset:C}},[$,D,N,y,Te,r]),F=ie.scrollHeight,Re=ie.start,pe=ie.end,Ge=ie.offset;k.current.start=Re,k.current.end=pe;var Ht=t.useState({width:0,height:r}),je=(0,Z.Z)(Ht,2),_=je[0],It=je[1],Ot=function(u){It(u)},Je=(0,t.useRef)(),Qe=(0,t.useRef)(),Nt=t.useMemo(function(){return Be(_.width,f)},[_.width,f]),Ft=t.useMemo(function(){return Be(_.height,F)},[_.height,F]),Ie=F-r,Oe=(0,t.useRef)(Ie);Oe.current=Ie;function Yt(l){var u=l;return Number.isNaN(Oe.current)||(u=Math.min(u,Oe.current)),u=Math.max(u,0),u}var qe=N<=0,_e=N>=Ie,$t=Ke(qe,_e),Ne=function(){return{x:T?-W:W,y:N}},Fe=(0,t.useRef)(Ne()),Ye=(0,Ae.zX)(function(){if(O){var l=Ne();(Fe.current.x!==l.x||Fe.current.y!==l.y)&&(O(l),Fe.current=l)}});function et(l,u){var p=l;u?((0,be.flushSync)(function(){de(p)}),Ye()):x(p)}function Wt(l){var u=l.currentTarget.scrollTop;u!==N&&x(u),b==null||b(l),Ye()}var tt=function(u){var p=u,C=f-_.width;return p=Math.max(p,0),p=Math.min(p,C),p},Xt=(0,Ae.zX)(function(l,u){u?((0,be.flushSync)(function(){de(function(p){var C=p+(T?-l:l);return tt(C)})}),Ye()):x(function(p){var C=p+l;return C})}),Vt=yt(D,qe,_e,!!f,Xt),nt=(0,Z.Z)(Vt,2),$e=nt[0],rt=nt[1];xt(D,P,function(l,u){return $t(l,u)?!1:($e({preventDefault:function(){},deltaY:l}),!0)}),(0,ze.Z)(function(){function l(p){D&&p.preventDefault()}var u=P.current;return u.addEventListener("wheel",$e),u.addEventListener("DOMMouseScroll",rt),u.addEventListener("MozMousePixelScroll",l),function(){u.removeEventListener("wheel",$e),u.removeEventListener("DOMMouseScroll",rt),u.removeEventListener("MozMousePixelScroll",l)}},[D]);var at=function(){var u,p;(u=Je.current)===null||u===void 0||u.delayHidden(),(p=Qe.current)===null||p===void 0||p.delayHidden()},ot=Rt(P,y,le,o,w,oe,x,at);t.useImperativeHandle(i,function(){return{getScrollInfo:Ne,scrollTo:function(u){function p(C){return C&&(0,ue.Z)(C)==="object"&&("left"in C||"top"in C)}p(u)?(u.left!==void 0&&de(tt(u.left)),ot(u.top)):ot(u)}}}),(0,ze.Z)(function(){if(V){var l=y.slice(Re,pe+1);V(l,y)}},[Re,pe,y]);var kt=Ct(y,w,le,o),Kt=B==null?void 0:B({start:Re,end:pe,virtual:$,offsetX:W,offsetY:Ge,rtl:T,getSize:kt}),Bt=ft(y,Re,pe,f,Le,c,I),Me=null;r&&(Me=(0,Q.Z)((0,z.Z)({},m?"height":"maxHeight",r),Dt),D&&(Me.overflowY="hidden",f&&(Me.overflowX="hidden"),Ze&&(Me.pointerEvents="none")));var lt={};return T&&(lt.dir="rtl"),t.createElement("div",(0,ye.Z)({style:(0,Q.Z)((0,Q.Z)({},S),{},{position:"relative"}),className:te},lt,A),t.createElement(K.Z,{onResize:Ot},t.createElement(L,{className:"".concat(a,"-holder"),style:Me,ref:P,onScroll:Wt,onMouseEnter:at},t.createElement(G,{prefixCls:a,height:F,offsetX:W,offsetY:Ge,scrollWidth:f,onInnerResize:oe,ref:j,innerProps:se,rtl:T,extra:Kt},Bt))),$&&F>r&&t.createElement(Ve,{ref:Je,prefixCls:a,scrollOffset:N,scrollRange:F,rtl:T,onScroll:et,onStartMove:U,onStopMove:H,spinSize:Ft,containerSize:_.height}),$&&f&&t.createElement(Ve,{ref:Qe,prefixCls:a,scrollOffset:W,scrollRange:f,rtl:T,onScroll:et,onStartMove:U,onStopMove:H,spinSize:Nt,containerSize:_.width,horizontal:!0}))}var Ue=t.forwardRef(wt);Ue.displayName="List";var zt=Ue,Pt=zt}}]);