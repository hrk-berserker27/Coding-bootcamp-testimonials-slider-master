(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6932)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,a=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,s=e.unoptimized,c=void 0!==s&&s,m=e.priority,h=void 0!==m&&m,w=e.loading,C=e.lazyRoot,z=void 0===C?null:C,k=e.lazyBoundary,B=e.className,Q=e.quality,_=e.width,N=e.height,M=e.style,P=e.objectFit,L=e.objectPosition,R=e.onLoadingComplete,D=e.placeholder,O=void 0===D?"empty":D,U=e.blurDataURL,F=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=A.useContext(f.ImageConfigContext),q=A.useMemo((function(){var e=v||T||u.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return r({},e,{allSizes:t,deviceSizes:i})}),[T]),W=F,V=i?"responsive":"intrinsic";"layout"in W&&(W.layout&&(V=W.layout),delete W.layout);var G=j;if("loader"in W){if(W.loader){var Z=W.loader;G=function(e){e.config;var t=l(e,["config"]);return Z(t)}}delete W.loader}var J="";if(function(e){return"object"===typeof e&&(E(e)||function(e){return void 0!==e.src}(e))}(t)){var H=E(t)?t.default:t;if(!H.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(U=U||H.blurDataURL,J=H.src,(!V||"fill"!==V)&&(N=N||H.height,_=_||H.width,!H.height||!H.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)))}var K=!h&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:J).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,K=!1);b.has(t)&&(K=!1);p&&(c=!0);var Y,X=o(A.useState(!1),2),$=X[0],ee=X[1],te=o(g.useIntersection({rootRef:z,rootMargin:k||"200px",disabled:!K}),3),ie=te[0],ne=te[1],oe=te[2],ae=!K||ne,re={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:L},Ae=S(_),de=S(N),ue=S(Q);0;var ge=Object.assign({},M,le),fe="blur"!==O||$?{}:{backgroundSize:P||"cover",backgroundPosition:L||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(U,'")')};if("fill"===V)re.display="block",re.position="absolute",re.top=0,re.left=0,re.bottom=0,re.right=0;else if("undefined"!==typeof Ae&&"undefined"!==typeof de){var me=de/Ae,he=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===V?(re.display="block",re.position="relative",ce=!0,se.paddingTop=he):"intrinsic"===V?(re.display="inline-block",re.position="relative",re.maxWidth="100%",ce=!0,se.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Ae,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===V&&(re.display="inline-block",re.position="relative",re.width=Ae,re.height=de)}else 0;var pe={src:y,srcSet:void 0,sizes:void 0};ae&&(pe=x({config:q,src:t,unoptimized:c,layout:V,width:Ae,quality:ue,sizes:i,loader:G}));var ve=t;0;var be,ye="imagesrcset",we="imagesizes";ye="imageSrcSet",we="imageSizes";var Ee=(n(be={},ye,pe.srcSet),n(be,we,pe.sizes),be),xe=A.default.useLayoutEffect,Se=A.useRef(R),je=A.useRef(t);A.useEffect((function(){Se.current=R}),[R]),xe((function(){je.current!==t&&(oe(),je.current=t)}),[oe,t]);var Ce=r({isLazy:K,imgAttributes:pe,heightInt:de,widthInt:Ae,qualityInt:ue,layout:V,className:B,imgStyle:ge,blurStyle:fe,loading:w,config:q,unoptimized:c,placeholder:O,loader:G,srcString:ve,onLoadingCompleteRef:Se,setBlurComplete:ee,setIntersection:ie,isVisible:ae,noscriptSizes:i},W);return A.default.createElement(A.default.Fragment,null,A.default.createElement("span",{style:re},ce?A.default.createElement("span",{style:se},Y?A.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,A.default.createElement(I,Object.assign({},Ce))),h?A.default.createElement(d.default,null,A.default.createElement("link",Object.assign({key:"__nimg-"+pe.src+pe.srcSet+pe.sizes,rel:"preload",as:"image",href:pe.srcSet?void 0:pe.src},Ee))):null)};var r=i(6495).Z,s=i(2648).Z,c=i(1598).Z,l=i(7273).Z,A=c(i(7294)),d=s(i(5443)),u=i(9309),g=i(7190),f=i(9977),m=(i(3794),i(2392));var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Coding-bootcamp-testimonials-slider-master/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0}||{},p=h.experimentalUnoptimized,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Coding-bootcamp-testimonials-slider-master/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0},b=new Set,y=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,a=new URL("".concat(t.path).concat(z(i))),r=a.searchParams;r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),o&&r.set("q",o.toString());return a.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(z(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(z(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function E(e){return void 0!==e.default}function x(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,r=e.width,s=e.quality,c=e.sizes,l=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var A=function(e,t,i,n){var o=e.deviceSizes,r=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(n);s)l.push(parseInt(s[2]));if(l.length){var A,d=.01*(A=Math).min.apply(A,a(l));return{widths:r.filter((function(e){return e>=o[0]*d})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,o,c),d=A.widths,u=A.kind,g=d.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:d.map((function(e,n){return"".concat(l({config:t,src:i,quality:s,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", "),src:l({config:t,src:i,quality:s,width:d[g]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(i))}function C(e,t,i,n,o,a){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===n&&a(!0),null==o?void 0:o.current)){var i=e.naturalWidth,r=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:r})}})))}var I=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,a=e.className,s=e.imgStyle,c=e.blurStyle,d=e.isLazy,u=e.placeholder,g=e.loading,f=e.srcString,m=e.config,h=e.unoptimized,p=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,y=e.setIntersection,w=e.onLoad,E=e.onError,S=(e.isVisible,e.noscriptSizes),j=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,A.default.createElement(A.default.Fragment,null,A.default.createElement("img",Object.assign({},j,t,{decoding:"async","data-nimg":o,className:a,style:r({},s,c),ref:A.useCallback((function(e){y(e),(null==e?void 0:e.complete)&&C(e,f,0,u,v,b)}),[y,f,o,u,v,b]),onLoad:function(e){C(e.currentTarget,f,0,u,v,b),w&&w(e)},onError:function(e){"blur"===u&&b(!0),E&&E(e)}})),(d||"blur"===u)&&A.default.createElement("noscript",null,A.default.createElement("img",Object.assign({},j,x({config:m,src:f,unoptimized:h,layout:o,width:i,quality:n,sizes:S,loader:p}),{decoding:"async","data-nimg":o,style:s,className:a,loading:g}))))};function z(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,i=e.rootMargin,l=e.disabled||!r,A=o.useRef(),d=n(o.useState(!1),2),u=d[0],g=d[1],f=n(o.useState(null),2),m=f[0],h=f[1];o.useEffect((function(){if(r){if(A.current&&(A.current(),A.current=void 0),l||u)return;return m&&m.tagName&&(A.current=function(e,t,i){var n=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===i.root&&e.margin===i.margin}));if(n&&(t=s.get(n)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return t={id:i,observer:a,elements:o},c.push(i),s.set(i,t),t}(i),o=n.id,a=n.observer,r=n.elements;return r.set(e,t),a.observe(e),function(){if(r.delete(e),a.unobserve(e),0===r.size){a.disconnect(),s.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(m,(function(e){return e&&g(e)}),{root:null==t?void 0:t.current,rootMargin:i})),function(){null==A.current||A.current(),A.current=void 0}}if(!u){var e=a.requestIdleCallback((function(){return g(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[m,l,i,t,u]);var p=o.useCallback((function(){g(!1)}),[]);return[h,u,p]};var o=i(7294),a=i(9311),r="function"===typeof IntersectionObserver;var s=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6932:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var n=i(5893),o=i(9008),a=i.n(o),r=i(7294),s=i(5675),c=i.n(s),l={src:"/Coding-bootcamp-testimonials-slider-master/_next/static/media/image-tanya.a4a053c2.jpg",height:540,width:540,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAL4l/8QAHhABAAAFBQAAAAAAAAAAAAAAAgABAwQTBQYRUoP/2gAIAQEAAT8Av61qN86HN0JhVcpyd0BwfOP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k="},A={src:"/Coding-bootcamp-testimonials-slider-master/_next/static/media/image-john.97aa6777.jpg",height:540,width:540,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAL4FP//EAB4QAAIBAwUAAAAAAAAAAAAAAAECAwAEEwUSFCFB/9oACAEBAAE/ANRnMN6kvGOKJ8av4S/W4V//xAAWEQEBAQAAAAAAAAAAAAAAAAABEQD/2gAIAQIBAT8AGgwN/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAEDAQE/AEjLv//Z"},d={src:"/Coding-bootcamp-testimonials-slider-master/_next/static/media/icon-prev.f8ffb16c.svg",height:18,width:12},u={src:"/Coding-bootcamp-testimonials-slider-master/_next/static/media/icon-next.38c02ccc.svg",height:18,width:13};function g(){var e=[[l,"Tanya Sinclair","UX Engineer","I\u2019ve been interested in coding for a while but never taken the jump, until now. I couldn\u2019t recommend this course enough. I\u2019m now in the job of my dreams and so excited about the future."],[A,"John Tarkpor","Junior Front-end Developer","If you want to lay the best foundation possible I\u2019d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."]],t=(0,r.useState)(0),i=t[0],o=t[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"./images/favicon-32x32.png"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{name:"description",content:"This is a slider"}),(0,n.jsx)("meta",{name:"keywords",content:"Next.js,react,javascript,SASS,SCSS,CSS,HTML-5,Progressive-Web-app,Slider"}),(0,n.jsx)("title",{children:"Frontend Mentor | Coding Bootcamp Testimonials Slider"})]}),(0,n.jsxs)("main",{children:[(0,n.jsxs)("div",{className:"content-section",children:[(0,n.jsx)("p",{className:"review",children:(0,n.jsxs)("span",{className:"quotes",children:["\u201c\xa0",e[i][3],"\xa0\u201d"]})}),(0,n.jsxs)("div",{className:"writer-container",children:[(0,n.jsx)("div",{className:"writer",children:e[i][1]}),(0,n.jsx)("div",{className:"writer-profession",children:e[i][2]})]})]}),(0,n.jsxs)("div",{className:"hero-section",children:[(0,n.jsx)("div",{className:"image-container",children:(0,n.jsx)(c(),{alt:"writer-image",src:e[i][0],layout:"fill",placeholder:"blur",loading:"eager"})}),(0,n.jsxs)("div",{className:"slider-container",children:[(0,n.jsx)("button",{className:"left",onClick:function(){i<=0||i>0&&o(i-1)},children:(0,n.jsx)(c(),{alt:"left-icon",src:d,layout:"intrinsic",loading:"eager"})}),(0,n.jsx)("button",{className:"right",onClick:function(){i>=e.length||0===i&&o(i+1)},children:(0,n.jsx)(c(),{alt:"right-icon",src:u,layout:"intrinsic",loading:"eager"})})]})]})]})]})}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);