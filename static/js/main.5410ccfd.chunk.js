(this["webpackJsonpreact-simple-slider-example"]=this["webpackJsonpreact-simple-slider-example"]||[]).push([[0],{359:function(e,t,n){"use strict";n.r(t);n(97);var r=n(0),a=n.n(r),l=n(33),i=n.n(l),o=n(87),c=n(17),s=n(376),u=n(379),d=n(5),m=n(85),p=n(375),v=n(58),x=n(12);function f(e){var t=e.listLength,n=e.size,a=e.reverse,l=e.transition,i=Object(r.useState)(0),o=i[0],c=i[1];return{nextSlide:function(){return c((function(e){return e+1>t-1?0:e+1}))},prevSlide:function(){return c((function(e){return e-1<0?t-1:e-1}))},setSlide:function(e){return e>=0&&e<=t&&c(e)},classes:function(e){var t=e.size,n=e.currentSlide,a=e.reverse,l=e.transition,i=Object(r.useRef)("slider"+Math.random().toString(36).substr(2,9)),o=Object(r.useRef)(document.createElement("style")),c=Object(r.useRef)({card:i.current+"-card",flexBox:i.current+"-flexbox",root:i.current+"-root"});return Object(r.useEffect)((function(){var e=o.current;return document.getElementsByTagName("head")[0].appendChild(e),function(){document.getElementsByTagName("head")[0].removeChild(e)}}),[]),Object(r.useEffect)((function(){var e=c.current,r=(t.element+t.margin)*n;o.current.innerHTML="\n."+e.card+" {\n  width: "+t.element+"px;\n  margin-"+(a?"left":"right")+": "+t.margin+"px;\n  cursor: pointer;\n}\n\n."+e.root+" {\n  overflow: hidden;\n}\n\n."+e.flexBox+" {\n  transition: "+(l||"transform .3s ease-in-out")+";\n  transform: translate("+(a?"+":"-")+r+"px);\n  display: flex;\n  "+(a?"flex-direction: row-reverse":"")+"\n}"}),[c,n,t.element,t.margin,a,l]),c.current}({size:n,currentSlide:o,reverse:a,transition:l}),currentSlide:o}}var g=a.a.createContext({elementsDatas:[]}),h=a.a.createContext(null);function E(e){var t=e.datas,n=e.currentSize,r=e.children,l=e.reverse,i=e.transition,o=f({listLength:t.length,size:n,reverse:l,transition:i}),c=o.classes,s=o.setSlide,u=o.nextSlide,d=o.prevSlide,m=o.currentSlide,p=a.a.useMemo((function(){return{nextSlide:u,prevSlide:d,classes:c,setSlide:s,elementsDatas:t}}),[]);return a.a.createElement(g.Provider,{value:p},a.a.createElement(h.Provider,{value:{currentSlide:m}},r))}var b=function(){var e=a.a.useContext(g);if(!e)throw new Error("useCarouselContext must be used within CarouselWrapperContext.Provider");return e},C=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.forEach((function(e){return e&&e.apply(void 0,n)}))}};function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return"string"===typeof e})).join(" ")}function y(e){var t=e.children,n=e.rootClassname,r=e.elementBoxClassname,l=b(),i=l.elementsDatas,o=l.classes,c=l.setSlide;return a.a.createElement("div",{className:w(n,null===o||void 0===o?void 0:o.root)},a.a.createElement("div",{className:w(null===o||void 0===o?void 0:o.flexBox,r)},i.map((function(e,n){return a.a.createElement("div",{key:e.id,onClick:function(){return null===c||void 0===c?void 0:c(n)}},a.a.cloneElement(t,{className:w(t.props.className,null===o||void 0===o?void 0:o.card),data:e}))}))))}function S(e){var t=e.children,n=b().nextSlide;return a.a.cloneElement(t,{onClick:C(n,t.props.onClick)})}function j(e){var t=e.children,n=b().prevSlide;return a.a.cloneElement(t,{onClick:C(n,t.props.onClick)})}var k=[{id:0,text:"McNab",color:"#9b59b6"},{id:1,text:"Pumi",color:"#8e44ad"},{id:2,text:"Huntaway",color:"#273c75"},{id:3,text:"Koolie",color:"#192a56"},{id:4,text:"Kuvasz",color:"#3498db"},{id:5,text:"Mudi",color:"#2980b9"},{id:6,text:"Biard",color:"#7f8c8d"},{id:7,text:"Collies",color:"#95a5a6"},{id:8,text:"Tornjak",color:"#34495e"},{id:9,text:"Lurcher",color:"#2c3e50"},{id:10,text:"Longdog",color:"#e74c3c"},{id:11,text:"Hound",color:"#c0392b"},{id:12,text:"Lurcher",color:"#d35400"}],N=[{id:0,src:"https://lenews.ch/wp-content/uploads/2016/05/Dogs-at-Nestle.jpg"},{id:1,src:"https://www.sbb.ch/content/dam/internet/keyvisual/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"},{id:2,src:"https://fun-dog-garderie.ch/wp-content/uploads/2019/06/Fun-Dog-Garderie-Piscine.jpg"},{id:3,src:"https://www.sbb.ch/content/dam/internet/keyvisual/Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"},{id:4,src:"https://static.secureholiday.net/static/CMS/photos/000/044/000044323.jpg"}],O=n(20),H=n(22),P=n(383),z=n(378),B=n(382);function V(e){var t=e.props,n=e.setProps,r=Object(H.b)(),l=Object(x.a)(r,2),i=l[0],o=l[1];return a.a.createElement(d.a,{className:i({border:"1px solid ".concat(o.colors.backgroundTertiary),marginRight:"16px"}),padding:"8px",width:"100%"},a.a.createElement("h6",{className:i({fontSize:"20px",margin:"0 0 16px 0",lineHeight:1,color:"white"})},"Interactive Carousel Settings"),a.a.createElement(B.a,{checked:t.reverse,onChange:function(e){return n((function(t){return Object(O.a)(Object(O.a)({},t),{},{reverse:e.target.checked})}))},labelPlacement:"right",overrides:{Root:{style:function(){return{marginBottom:"16px"}}}}},"Enable reverse"),a.a.createElement(B.a,{checked:t.one,onChange:function(e){return n((function(t){return Object(O.a)(Object(O.a)({},t),{},{one:e.target.checked})}))},labelPlacement:"right",overrides:{Root:{style:function(){return{marginBottom:"16px"}}}}},"Display only one card"),a.a.createElement(P.a,{label:"transition",caption:"Transition applied to slide change"},a.a.createElement(z.a,{value:t.transition,onChange:function(e){var t,r=null===(t=e.target)||void 0===t?void 0:t.value;r&&n((function(e){return Object(O.a)(Object(O.a)({},e),{},{transition:r})}))},clearOnEscape:!0})))}var M=n(380),R=n(372);var D=function(e){var t=e.className,n=e.data;return a.a.createElement("div",{className:t},a.a.createElement(d.a,{backgroundColor:null===n||void 0===n?void 0:n.color,color:"colorPrimary",padding:"8px"},a.a.createElement("p",null,null===n||void 0===n?void 0:n.text)))},T=function(){var e=a.a.useState({reverse:!1,transition:"transform .3s ease-in-out",one:!1}),t=Object(x.a)(e,2),n=t[0],r=t[1],l=Object(H.b)(),i=Object(x.a)(l,2),o=i[0],c=i[1];return a.a.createElement(d.a,null,a.a.createElement(d.a,{width:"100%",display:"flex",justifyContent:"center"},a.a.createElement(V,{props:n,setProps:r}),a.a.createElement(d.a,{className:o({border:"1px solid ".concat(c.colors.backgroundTertiary)}),minWidth:["200px","400px","400px"]},a.a.createElement(d.a,{width:n.one?"116px":["200px","400px","400px"]},a.a.createElement(E,{transition:n.transition,reverse:n.reverse,datas:k,currentSize:{element:116,margin:10}},a.a.createElement(y,null,a.a.createElement(D,null)),a.a.createElement(j,null,a.a.createElement("button",null,"Prev")),a.a.createElement(S,null,a.a.createElement("button",null,"Next")))))),a.a.createElement(M.a,{language:"tsx",style:R.a},function(e){return"function Carousel() {\n  return (\n    <div".concat(e.one?" style={{ width: 116px }}":"",'>\n      <CarouselWrapper\n        transition="').concat(e.transition.slice(0,42)+(e.transition.length>42?"...":""),'"').concat(e.reverse?"\n        reverse":"","\n        datas={datas}\n        currentSize={{ element: 116, margin: 10 }}>\n        <CarouselElement>\n          <Element />\n        </CarouselElement>\n        <PrevSlideAction>\n          <button>Prev</button>\n        </PrevSlideAction>\n        <NextSlideAction>\n          <button>Next</button>\n        </NextSlideAction>\n      </CarouselWrapper>\n    </div>\n  )\n};\n\nconst Element = ({ className, data }: SliderElementProps<DatasTypes>) => {\n  return (\n    <div className={className}>\n      <Block backgroundColor={data?.color}>\n        <p>{data?.text}</p>\n      </Block>\n    </div>\n  )\n}")}(n)))},A=n(381),I=n(373),L=n(374),W=n(377),Z=n(3);function _(e){var t=e.max,n=function(){var e=a.a.useContext(h);if(!e)throw new Error("You need to set `enableCurrentSlideHook` to true on `CarouselWrapper` to use this hook.");return e}().currentSlide,r=b().setSlide;return a.a.createElement(W.a,{numPages:t,size:Z.d.mini,currentPage:n+1,onPageChange:function(e){var t=e.nextPage;r(t-1)}})}var F=function(e){var t=e.className,n=e.data,r=Object(H.b)(),l=Object(x.a)(r,1)[0];return a.a.createElement("div",{className:t},a.a.createElement("div",{style:{backgroundRepeat:"no-repeat",backgroundSize:"cover"},className:l({overflow:"hidden",height:"250px",background:"url(".concat(null===n||void 0===n?void 0:n.src,")")})}))},q=function(){var e=Object(H.b)(),t=Object(x.a)(e,2),n=t[0],r=t[1];return a.a.createElement(d.a,{margin:"8px",display:"flex",flexDirection:"column",alignItems:"center"},a.a.createElement(E,{datas:N,currentSize:{element:400,margin:16}},a.a.createElement(d.a,{display:"flex",alignItems:"center"},a.a.createElement(j,null,a.a.createElement(A.a,{overrides:{Root:{style:function(){return{position:"relative",left:"24px",zIndex:2}}}},kind:"secondary",shape:"circle",children:a.a.createElement(I.a,{size:32})})),a.a.createElement(y,{rootClassname:n({width:"400px",border:"2px solid ".concat(r.colors.buttonSecondaryFill),borderRadius:"4px"})},a.a.createElement(F,null)),a.a.createElement(S,null,a.a.createElement(A.a,{overrides:{Root:{style:function(){return{position:"relative",right:"24px"}}}},kind:"secondary",shape:"circle",children:a.a.createElement(L.a,{size:32})}))),a.a.createElement(_,{max:N.length})))},G=n(43);function J(e){var t=e.title,n=e.description,r=e.children,l=Object(H.b)(),i=Object(x.a)(l,2),o=i[0],c=i[1];return a.a.createElement(d.a,{className:o({borderBottom:"1px solid ".concat(c.colors.backgroundTertiary)}),padding:["8px","8px","16px","16px"],display:"flex",flexDirection:"column"},a.a.createElement(p.a,{styleLevel:3,className:o({margin:"0",fontSize:"32px",color:c.colors.white})},t),a.a.createElement(G.a,null,n),a.a.createElement(d.a,{display:"flex",justifyContent:"center"},r))}function K(){return a.a.createElement("svg",{width:"128",height:"128",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z",fill:"white"}))}function Y(e){e.width,e.height;return a.a.createElement("svg",{width:"128",height:"41",viewBox:"0 0 180 58",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M55.3846 57.69H78.4615V46.152H101.538V0H55.3846V57.69ZM78.4615 11.538H90V34.614H78.4615V11.538ZM110.769 0V46.152H133.846V11.538H145.385V46.152H156.923V11.538H168.462V46.152H180V0H110.769ZM0 46.152H23.0769V11.538H34.6154V46.152H46.1538V0H0V46.152Z",fill:"white"}))}function Q(){return a.a.createElement(d.a,{margin:"auto",display:"flex",flexDirection:"column",height:"100%",width:["100%","100%","1000px","1000px"]},a.a.createElement(m.b,null,a.a.createElement(p.a,{overrides:{Block:{style:function(){return{margin:"0 0 16px 0",textAlign:"center"}}}}},"react-clear-carousel"),a.a.createElement(d.a,{marginBottom:"16px",display:"flex",flexDirection:"column",alignItems:"center"},a.a.createElement(G.b,null,"Clear carousel easy to integrate."),a.a.createElement(d.a,{display:"flex",alignItems:"center"},a.a.createElement(v.a,{className:"big-link-margin",href:"https://github.com/Melvynx/react-clear-carousel"},a.a.createElement(K,null)),a.a.createElement(v.a,{className:"big-link-margin",href:"https://www.npmjs.com/package/react-clear-carousel"},a.a.createElement(Y,null)))),a.a.createElement(J,{title:"Interactive example",description:"Few codes are needed to have a nice result. Here is an interactive example to try different props."},a.a.createElement(T,null)),a.a.createElement(J,{title:"Customization example",description:"Customization is simple. The index of the slide displayed is easily accessible."},a.a.createElement(q,null))))}var U=new o.a;function X(){return a.a.createElement(c.a,{value:U},a.a.createElement(s.a,{theme:u.a},a.a.createElement(d.a,{backgroundColor:"backgroundPrimary",display:"flex",padding:["8px","16px","32px"]},a.a.createElement(Q,null))))}i.a.render(a.a.createElement(X,null),document.getElementById("root"))},96:function(e,t,n){e.exports=n(359)},97:function(e,t,n){}},[[96,1,2]]]);
//# sourceMappingURL=main.5410ccfd.chunk.js.map