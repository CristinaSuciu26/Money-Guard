/*! For license information please see 327.11f3180a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_team_project=self.webpackChunkreact_team_project||[]).push([[327],{5737:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var i=r(461),n=r(6058),o=r(3003),a=r(3775),s=r(1529);const l=s.Ay.div`
  width: 100%;
  padding-bottom: 12px;

  @media (min-width: 1280px) {
    padding-left: 84px;
  }

  @media (min-width: 768px) {
    padding-left: 33px;
    padding-bottom: 152px;
  }
`,p=s.Ay.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: #fbfbfb;
  padding-bottom: 8px;
  padding-top: 8px;
`,d=s.Ay.div`
  width: 280px;
  height: 280px;
  position: relative;
`,c=(s.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
  font-family: 'Poppins-SemiBold', sans-serif;
  color: var(--white);
`,s.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
  font-family: 'Poppins-SemiBold', sans-serif;
  color: white;
`);var f=r(579);i.t1.register(...i.$L);const m=new Map([["Entertainment","#ff85d2"],["Car","rgb(255, 104, 109)"],["Products","rgb(255, 157, 137)"],["Main expenses","rgb(254, 208, 87)"],["Leisure","rgb(91, 255, 167)"],["Other expenses","rgb(0, 173, 95)"],["Education","rgb(115, 222, 255)"],["Self care","rgb(170, 154, 255)"],["Child care","rgb(87, 101, 255)"],["Household products","rgb(114, 61, 239)"]]);function x(){const e=(0,o.d4)(a.z0),t=e.categoriesSummary?e.categoriesSummary.filter((e=>"EXPENSE"===e.type)).map((e=>({...e,color:m.get(e.name)}))).sort(((e,t)=>e.total-t.total)):[],r={datasets:[{data:t.map((e=>e.total)),backgroundColor:t.map((e=>e.color)),boxShadow:"0px 0px 8px 0px #000 inset",borderWidth:0}]},i=e.expenseSummary||0;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(l,{children:[(0,f.jsx)(p,{children:"Statistics"}),(0,f.jsxs)(d,{children:[(0,f.jsx)(n.nu,{data:t.length?r:{datasets:[{data:[1e-10],backgroundColor:["rgba(200, 200, 200, 0.5)"],borderWidth:0}]},options:{cutout:"70%",plugins:{legend:{display:!1}},maintainAspectRatio:!1,responsive:!0}}),(0,f.jsxs)(c,{children:["\u20b4 ",i.toFixed(2)]})]})]})})}var u=r(5043),g=r(7425),h=r(4860),y=r(686),b=r(5123);const w=s.Ay.div`
  display: flex;
  margin-bottom: 20px;
  width: 93%;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-right: 20px;
  }
  @media (min-width: 1280px) {
    margin-left: 30px;
  }
`,v=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 10px;
  align-items: center;
  @media (min-width: 768px) {
    &.tablet {
      flex-direction: row;
      margin-right: 10px;
    }
  }
  @media (min-width: 1280px) {
    &.desktop {
    }
  }
`,j=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-right: 33px;
  }
`,S=()=>{const e=(new Date).getMonth()+1,t=(new Date).getFullYear(),r=Array.from({length:12},((e,t)=>t+1)),i=Array.from({length:t-2020+1},((e,t)=>2020+t)),[n,a]=(0,u.useState)(e),[s,l]=(0,u.useState)(t),p=(0,o.wA)();(0,u.useEffect)((()=>{p((0,b.Be)({month:n,year:s}))}),[p,n,s]);const d={container:e=>({...e,fontFamily:"'Poppins-Regular', sans-serif",width:"290px",height:"50px",paddingLeft:"16px",cursor:"pointer",appearance:"none","@media (min-width: 768px)":{width:"215px",padding:"10px",paddingRight:"0px"}}),control:e=>({...e,backgroundColor:"rgba(74, 86, 226, 0.1)",border:"1px solid white",borderRadius:"8px",cursor:"pointer",height:"50px",marginBottom:"-6px",outline:"none",paddingRight:"13px"}),singleValue:e=>({...e,color:"#FBFBFB",fontSize:"16px"}),placeholder:e=>({...e,color:"white",fontSize:"16px"}),menu:e=>({...e,borderRadius:"8px",backgroundColor:"white",background:"linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)",boxShadow:"0px 4px 60px 0px rgba(0, 0, 0, 0.25)",backdropFilter:"blur(50px)",color:"#FBFBFB",fontFamily:"'Poppins-Regular', sans-serif",fontSize:"16px",fontWeight:"400",overflow:"hidden"}),option:(e,t)=>{let{isFocused:r,isSelected:i}=t;return r?{...e,background:"#FFFFFF1A",color:"#FF868D"}:i?{...e,background:"transparent"}:{...e}},menuList:e=>({...e,"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-track":{background:"transparent"},"&::-webkit-scrollbar-thumb":{background:"#BFB4DD",borderRadius:"12px"}})};(0,u.useEffect)((()=>{const e=document.getElementsByClassName("css-1u9des2-indicatorSeparator");e&&e.length>0&&Array.from(e).forEach((e=>{e.style.display="none"}))}),[]);const c=e=>(0,f.jsx)(g.c.DropdownIndicator,{...e,children:e.selectProps.menuIsOpen?(0,f.jsx)(y.udN,{size:18,label:"Arrow up",color:"var(--white)"}):(0,f.jsx)(y.Bvd,{size:18,label:"Arrow down",color:"var(--white)"})});return(0,f.jsx)(w,{children:(0,f.jsxs)(j,{children:[(0,f.jsx)(v,{children:(0,f.jsx)(h.Ay,{styles:d,options:r.map((e=>({value:e,label:new Date(0,e-1).toLocaleString("default",{month:"long"})}))),value:r.find((e=>e.value===n)),onChange:e=>{a(e.value),p((0,b.Be)({month:e.value,year:s}))},components:{DropdownIndicator:c},isSearchable:!1,placeholder:(new Date).toLocaleString("default",{month:"long"})})}),(0,f.jsx)(v,{children:(0,f.jsx)(h.Ay,{options:i.map((e=>({value:e,label:e.toString()}))),value:i.find((e=>e.value===s)),onChange:e=>{l(e.value),p((0,b.Be)({month:n,year:e.value}))},styles:d,components:{DropdownIndicator:c},isSearchable:!1,placeholder:t})})]})})},P=s.Ay.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin-right: 20px;
  }
  @media (min-width: 1280px) {
    margin-right: 0px;
  }
`,O=s.Ay.div`
  width: 94%;
  margin-right: 8px;

  height: 56px;
  display: flex;
  margin-left: 5px;
  align-items: center;
  justify-content: space-evenly;
  gap: 108px;
  border-radius: 8px;
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.25);
  background: rgba(82, 59, 126, 0.6);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #fbfbfb;
  margin-top: 5px;

  @media (min-width: 768px) {
    width: 427px;
    gap: 206px;
    margin-right: 13px;
  }
`,A=s.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;

  // padding-top: 20px;
  padding-bottom: 15px;
  margin-top: 10px;

  border-bottom: 2px solid rgba(217, 209, 209, 0.3);
  @media (min-width: 768px) {
    gap: 25px;
  }
  @media (min-width: 1280x) {
    margin-left: 10px;
  }
`,k=s.Ay.div`
  display: flex;
  flex-direction: column;
`,$=s.Ay.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  max-height: 200px;
  width: 93%;
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (min-width: 1280px) {
    width: 83%;
  }
`,F=s.Ay.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fbfbfb;
  display: flex;
  align-items: center;
  padding: 16px 10px 3px;
  width: 93%;
  margin-top: 10px;
  @media (min-width: 768px) {
    padding-top: 10px;
    gap: 125px;
  }
  @media (min-width: 1280px) {
    width: 83%;
  }
`,C=s.Ay.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fbfbfb;
  display: flex;
  align-items: center;
  padding: 16px 28px 3px;

  width: 93%;

  @media (min-width: 768px) {
    gap: 240px;
  }
  @media (min-width: 1280px) {
    width: 83%;
  }
`,E=s.Ay.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #fbfbfb;
  padding-right: 50px;
  flex: 1;
  @media (min-width: 768px) {
    padding-right: 137px;
  }
`,z=s.Ay.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  width: 100px;
  text-align: right;
  color: #fbfbfb;
  padding-right: 10px;

  @media (min-width: 768px) {
    padding-right: 20px;
  }
`,D=s.Ay.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fbfbfb;
  text-align: center;
  padding-top: 20px;
  overflow: hidden;
`,N=s.Ay.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-align: right;
  color: #ff868d;

  flex: 1;
`,B=s.Ay.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-align: right;
  color: #ffb627;

  flex: 1;
`,M=s.Ay.div`
  border-radius: 2px;
  width: 24px;
  height: 24px;
`,R=e=>isNaN(e)?"0.00":Math.abs(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "),_=()=>{const e=(0,o.d4)(a.z0),t=(0,o.wA)(),r=(new Date).getMonth()+1,i=(new Date).getFullYear();(0,u.useEffect)((()=>{t((0,b.Be)({month:r,year:i})),t((0,b.bW)())}),[t,r,i]);const n=e.categoriesSummary?e.categoriesSummary.filter((e=>"EXPENSE"===e.type)).map((e=>({...e,color:m.get(e.name)}))).sort(((e,t)=>e.total-t.total)):[];return(0,f.jsxs)(P,{children:[(0,f.jsxs)(O,{children:[(0,f.jsx)("p",{className:"category",children:"Category"}),(0,f.jsx)("p",{className:"sum",children:"Sum"})]}),(0,f.jsx)($,{children:n.length?n.map(((e,t)=>(0,f.jsx)("div",{children:(0,f.jsx)(k,{children:(0,f.jsxs)(A,{children:[(0,f.jsx)(M,{style:{backgroundColor:e.color}}),(0,f.jsx)(E,{children:e.name}),(0,f.jsx)(z,{children:R(e.total)})]})})},t))):(0,f.jsx)("div",{children:(0,f.jsx)("div",{children:(0,f.jsx)(D,{children:"You don't have any transactions in this period"})})})}),(0,f.jsxs)(F,{children:[(0,f.jsx)("h3",{children:"Expenses:"}),(0,f.jsx)(N,{children:R(e.expenseSummary)})]}),(0,f.jsxs)(C,{children:[(0,f.jsx)("h3",{children:"Income:"}),(0,f.jsx)(B,{children:R(e.incomeSummary)})]})]})};var L=r(9404);const T=s.Ay.div`
  background: transparent;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  height: auto;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,I=s.Ay.div`
  display: flex;
  flex-direction: column;
  padding-right: 59px;
`,W=(s.Ay.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 320px;

  @media (min-width: 768px) {
    width: auto;
  }
`,(0,s.Ay)(L.r)`
  color: white;
  display: block;
  position: relative;

  @media only screen and (min-width: 768px) {
    display: flex;
    margin: 0;
    justify-content: space-between;

    max-width: 100%;
    height: 720px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 803px;
    height: calc(100vh - 70px);

    padding: 20px 20px 0 0;
  }
`,s.Ay.div`
  position: relative;
  width: 280px;
  padding: 16px 0;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 336px;
    padding: 0;
    margin: 0;
  }
  @media only screen and (min-width: 1280px) {
    width: 288px;
  }
`,s.Ay.h2`
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  text-align: left;
  font-size: 30px;
  font-weight: 400;
  max-width: 280px;
`,()=>(0,f.jsxs)(T,{children:[(0,f.jsx)(x,{}),(0,f.jsxs)(I,{children:[(0,f.jsx)(S,{}),(0,f.jsx)(_,{})]})]}))},219:(e,t,r)=>{var i=r(2086),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return i.isMemo(e)?a:s[e.$$typeof]||n}s[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[i.Memo]=a;var p=Object.defineProperty,d=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,x=Object.prototype;e.exports=function e(t,r,i){if("string"!==typeof r){if(x){var n=m(r);n&&n!==x&&e(t,n,i)}var a=d(r);c&&(a=a.concat(c(r)));for(var s=l(t),u=l(r),g=0;g<a.length;++g){var h=a[g];if(!o[h]&&(!i||!i[h])&&(!u||!u[h])&&(!s||!s[h])){var y=f(r,h);try{p(t,h,y)}catch(b){}}}}return t}},5082:(e,t)=>{var r="function"===typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,c=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,x=r?Symbol.for("react.suspense_list"):60120,u=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,y=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case d:case c:case o:case s:case a:case m:return e;default:switch(e=e&&e.$$typeof){case p:case f:case g:case u:case l:return e;default:return t}}case n:return t}}}function j(e){return v(e)===c}t.AsyncMode=d,t.ConcurrentMode=c,t.ContextConsumer=p,t.ContextProvider=l,t.Element=i,t.ForwardRef=f,t.Fragment=o,t.Lazy=g,t.Memo=u,t.Portal=n,t.Profiler=s,t.StrictMode=a,t.Suspense=m,t.isAsyncMode=function(e){return j(e)||v(e)===d},t.isConcurrentMode=j,t.isContextConsumer=function(e){return v(e)===p},t.isContextProvider=function(e){return v(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(e){return v(e)===f},t.isFragment=function(e){return v(e)===o},t.isLazy=function(e){return v(e)===g},t.isMemo=function(e){return v(e)===u},t.isPortal=function(e){return v(e)===n},t.isProfiler=function(e){return v(e)===s},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===m},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===c||e===s||e===a||e===m||e===x||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p||e.$$typeof===f||e.$$typeof===y||e.$$typeof===b||e.$$typeof===w||e.$$typeof===h)},t.typeOf=v},2086:(e,t,r)=>{e.exports=r(5082)},3441:(e,t,r)=>{r.d(t,{k5:()=>m});var i=r(5043),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(n),a=["attr","size","title"];function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;r[i]=e[i]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},l.apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e&&e.map(((e,t)=>i.createElement(e.tag,d({key:t},e.attr),f(e.child))))}function m(e){return t=>i.createElement(x,l({attr:d({},e.attr)},t),f(e.child))}function x(e){var t=t=>{var r,{attr:n,size:o,title:p}=e,c=s(e,a),f=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:d(d({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),p&&i.createElement("title",null,p),e.children)};return void 0!==o?i.createElement(o.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=327.11f3180a.chunk.js.map