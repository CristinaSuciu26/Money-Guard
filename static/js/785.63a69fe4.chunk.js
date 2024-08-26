"use strict";(self.webpackChunkreact_team_project=self.webpackChunkreact_team_project||[]).push([[785],{7985:(e,t,n)=>{n.d(t,{Wx:()=>o,Xn:()=>a,Zb:()=>d,zG:()=>i});var r=n(1529);r.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* background-color:purple; */
  min-width: 100vw;
  min-height: 100vh;
`;const o=r.Ay.div`
  /* background-color: rgba(0, 0, 0, 0.25); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 52px;
  max-width: 60vw;
  padding: 60px;
  color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
`,a=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,i=r.Ay.button`
  width: 250px;
  height: 50px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );
  /* box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2); */

  &:hover {
    color: #3a2f43;
    box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.2),
      1px 9px 15px 0px rgba(0, 0, 0, 0.2), 2px 17px 12px -17px #111,
      0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  }
`,d=r.Ay.button`
  width: 250px;
  height: 50px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: rgba(98, 63, 139, 1);

  &:hover {
    color: #3a2f43;
    box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.2),
      1px 9px 15px 0px rgba(0, 0, 0, 0.2), 2px 17px 12px -17px #111,
      0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  }
`},4785:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ye});var r=n(5043),o=n(3003),a=n(3775),i=n(5508),d=n(1529);const l=d.Ay.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(82, 59, 126, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;var c=n(579);const s=()=>(0,c.jsx)(l,{children:(0,c.jsx)(i.IN,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})}),p=d.Ay.div`
  margin: 0 auto;
  @media only screen and (min-width: 1280px) {
    margin-top: 46px;
  }
`,x=(d.Ay.ul`
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: block;
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`,d.Ay.div`
  display: none;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media only screen and (min-width: 1280px) {
    width: fit-content;
    margin-left: 55px;
  }
`),h=d.Ay.table`
  border-collapse: collapse;
  width: 100%;
`,m=d.Ay.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 20px;

  border-radius: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.backgrounds.tableHead}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.default}};
  backdrop-filter: ${e=>{let{theme:t}=e;return t.blur.backdropFilter}};

  @media only screen and (min-width: 768px) {
    padding-right: calc(100% / 4.2);
  }
  @media only screen and (min-width: 1280px) {
    padding-right: calc(100% / 4.05);
  }
`,g=d.Ay.th`
  text-align: center;
  font-size: 16px;
  font-weight: 400;

  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
`,u=(0,d.Ay)(g)`
  cursor: pointer;
`,b=d.Ay.svg`
  margin-left: 6px;
  transition: transform 0.3s ease;
  transform: rotate(180deg);
`,y=d.Ay.tbody`
  display: block;

  max-height: 50vh;
  overflow-y: scroll;
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.bgScrollBar}};
  }
  &::-webkit-scrollbar-track {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.scrollbarShadow}};
  }
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  @media only screen and (min-width: 1280px) {
    max-height: 70vh;
  }
`,f=d.Ay.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px 12px 20px;
  border-bottom: ${e=>{let{theme:t}=e;return t.border.borderBottom}};

  gap: 50px;
`,w=d.Ay.td`
  width: 50px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: ${e=>e.$color};
`,k=(0,d.Ay)(w)`
  flex-basis: 182px;
`,v=d.Ay.div`
  display: flex;
  justify-content: space-between;
`,j=d.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 80px;

  padding: 30px;
  width: 600px;
  height: 200px;
  border-radius: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.backgrounds.tableHead}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.default}};
`;const _=n.p+"static/media/sprite.d34226730588e01b4b6a1ba69b82af33.svg",A=(d.Ay.li`
  margin: 0 auto;
  min-width: 280px;
  max-width: 360px;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.backgrounds.transactionBg}};
  border-left: 5px solid ${e=>e.$color};

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: block;
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`,d.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: ${e=>{let{theme:t}=e;return t.border.borderBottom}};
`,d.Ay.p`
  text-align: right;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
`,d.Ay.span`
  max-width: 120px;
`,d.Ay.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
`,d.Ay.button`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  padding: 4px 12px;

  border-radius: 18px;
  background: ${e=>{let{theme:t}=e;return t.backgrounds.btnGradient}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.deleteBtnShadow}};
  transition: filter 0.3s;
  &:hover {
    filter: drop-shadow(0px 3px 10px rgba(255, 255, 255, 0.6));
  }
`),E=d.Ay.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;

  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  background-color: transparent;
  color: ${e=>{let{theme:t}=e;return t.colors.editBtn}};
  transition: filter 0.3s;
  &:hover {
    filter: drop-shadow(0px 3px 5px rgba(255, 255, 255, 0.8));
  }
`;d.Ay.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 80px;

  padding: 30px;
  width: 260px;
  height: 100px;
  border-radius: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.backgrounds.tableHead}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.default}};
`,d.Ay.h3`
  text-align: center;
`;var S=n(5123);const $=()=>{const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(null);return(0,r.useEffect)((()=>{document.body.style.overflow=e?"hidden":"auto"}),[e]),{isOpen:e,close:()=>{t(!1)},open:e=>{t(!0),null!==e&&o(e)},toggle:()=>t((e=>!e)),data:n}},C=d.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;

  @media screen and (min-width: 768px) {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;
  }
`,D=d.Ay.div`
  width: 320px;
  min-height: 600px;
  @media only screen and (max-width: 767px) {
    min-height: 700px;
  }
  padding: 41px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(#3f2e96, #5f478c);
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: calc(20 * (100vw / 480));
    min-width: 300px;
  }

  @media screen and (min-width: 768px) {
    max-width: 540px;
    max-height: 511px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1280px) {
    border-radius: 8px;
    padding: calc(20 * (100vw / 480));
    min-width: 300px;
  }
`,F=d.Ay.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  padding: 0;
  line-height: 0;
  border: none;
  cursor: pointer;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  &:hover {
    transform: scale(1.4);
    transition: transform 0.3s ease-in-out;
  }
  &:not(:hover) {
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }
`,N=d.Ay.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 50px;
  padding: 13px 68px;
  background-color: rgba(251, 251, 251, 1);
  border-radius: 20px;
  border: none;
  line-height: 1.5;
  font-size: 18px;
  letter-spacing: 1.8px;
  color: rgba(98, 63, 139, 1);
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;

  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }
`;function z(e){let{children:t,showCloseIcon:n=!0,close:o}=e;(0,r.useEffect)((()=>{const e=e=>{"Escape"===e.key&&o()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[o]);const a=e=>{"cancel"!==e.target.name&&"closeSvg"!==e.currentTarget.name||o()};return(0,c.jsx)(C,{onClick:e=>(e=>{e.currentTarget===e.target&&o()})(e),children:(0,c.jsxs)(D,{children:[n&&(0,c.jsx)(F,{type:"button",name:"closeSvg",onClick:a,children:(0,c.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("path",{d:"M1 1L17 17",stroke:"#FBFBFB"}),(0,c.jsx)("path",{d:"M1 17L17 0.999999",stroke:"#FBFBFB"})]})}),t,(0,c.jsx)(N,{type:"button",name:"cancel",onClick:a,children:"Cancel"})]})})}var I=n(3516),M=n(899),B=n(1899),O=n.n(B);const P=d.Ay.div`
  padding: 20px;
`,X=d.Ay.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 32px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 30px;
  }
`,R=d.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 50px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,W=(0,d.Ay)(I.lV)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
`,Y=d.Ay.label`
  position: relative;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  color: ${e=>{let{value:t,selected:n}=e;return"INCOME"===n&&"INCOME"===t||"EXPENSE"===n&&"EXPENSE"===t?"INCOME"===t?"#FFB627":"#FF868D":"#E0E0E0"}};

  @media only screen and (min-width: 768px) {
    font-weight: 700;
  }
`,T=d.Ay.input`
  display: none;
`,L=d.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
    margin-bottom: 40px;
  }
`,q=(0,d.Ay)(I.D0)`
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  padding: 8px;
  padding-left: 20px;
  width: 280px;
  margin-bottom: 40px;
  outline: none;

  border: none;
  background: transparent;
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  border-bottom: ${e=>{let{theme:t}=e;return t.border.borderBottom}};

  @media only screen and (min-width: 768px) {
    width: 180px;
    text-align: center;
  }
`,V=d.Ay.span`
  position: absolute;
  font-size: 14px;
  right: 90px;
  bottom: 90px;
  color: ${e=>{let{theme:t}=e;return t.colors.expenseColor}};

  @media only screen and (min-width: 768px) {
    bottom: 20px;
    right: 210px;
  }
`,G=(d.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.colors.expenseColor}};
`,(0,d.Ay)(I.D0)`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  width: 280px;
  padding: 0 20px 8px 20px;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: ${e=>{let{theme:t}=e;return t.border.borderBottom}};
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};

  @media only screen and (min-width: 768px) {
    width: 394px;
    padding: 0 8px 8px 8px;
  }
`),H=(0,d.Ay)(O())`
  width: 280px;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
  outline: none;

  background: transparent;
  border: none;
  border-bottom: ${e=>{let{theme:t}=e;return t.border.borderBottom}};
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  }

  @media only screen and (min-width: 768px) {
    width: 180px;
  }
`,U=d.Ay.svg`
  cursor: pointer;
`,Z=d.Ay.div`
  .react-datepicker__view-calendar-icon input {
    padding: 6px 5px 5px 20px;
  }
  .react-datepicker__input {
    border: 2px solid #333;
    border-radius: 4px;
    padding: 8px;
  }
  .react-datepicker__input-container {
    padding-bottom: 15px;
  }
  .react-datepicker__input-container .react-datepicker__calendar-icon {
    position: absolute;
    padding: 0.5rem;
    box-sizing: content-box;
    right: 5px;
    top: -2px;
  }
  .react-datepicker__calendar-icon {
    width: 24px;
    height: 24px;
    vertical-align: -0.125em;
  }
  .react-datepicker__month-container {
    float: left;
    background: ${e=>{let{theme:t}=e;return t.backgrounds.modalBg}};
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name,
  .react-datepicker__current-month {
    color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  }
  .react-datepicker__day:hover {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.active}};
  }
  .react-datepicker__header {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.tableHead}};
  }
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default;
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.white40}};
  }
  .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__year-text--disabled:hover {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.white40}};
    border-radius: 0;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.active}};
  }
`,J=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,K=d.Ay.button`
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  width: 280px;
  height: 50px;
  padding: 13px 100px;
  margin-top: 40px;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  background: ${e=>{let{theme:t}=e;return t.backgrounds.btnGradient}};
`,Q=(d.Ay.button`
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  width: 280px;
  height: 50px;
  padding: 13px 100px;
  border-radius: 20px;
  color: #623f8b;
  background-color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
`,e=>{const t=e.target.value.replace(/[-+eE]/g,"");e.target.value=t}),ee=e=>{let{transaction:t,close:n}=e;const a=(0,o.wA)(),[i,d]=(0,r.useState)(),[l,s]=(0,r.useState)(t.type),p=(0,M.Ik)({amount:(0,M.Yj)().required().min(1,"Too Short!").max(12,"Too Long!"),comment:(0,M.Yj)().max(50,"Too Long!"),type:(0,M.Yj)().oneOf(["INCOME","EXPENSE"],"Invalid transaction type")});return(0,c.jsx)("div",{children:(0,c.jsxs)(P,{children:[(0,c.jsx)(X,{children:"Edit transaction"}),(0,c.jsx)(I.l1,{initialValues:{id:t.id,amount:t.amount,transactionDate:new Date(Date.parse(t.transactionDate)),comment:t.comment,type:t.type},validationSchema:p,onSubmit:e=>{const r={id:t.id,amount:"EXPENSE"===e.type?-Math.abs(e.amount):Math.abs(e.amount),transactionDate:e.transactionDate.toISOString().slice(0,10),type:e.type,comment:e.comment,categoryId:t.categoryId};a((0,S.AF)(r)),n()},children:e=>{let{errors:t,touched:n,values:r,handleChange:o,setFieldValue:a}=e;return(0,c.jsxs)(W,{autoComplete:"off",children:[(0,c.jsxs)(R,{children:[(0,c.jsxs)(Y,{value:"INCOME",selected:l,children:[(0,c.jsx)(T,{type:"radio",name:"type",value:"INCOME",disabled:"EXPENSE"===r.type,checked:"INCOME"===r.type,onChange:()=>{a("type","INCOME"),s("INCOME")}}),"Income"]}),(0,c.jsx)("span",{children:"/"}),(0,c.jsxs)(Y,{value:"EXPENSE",selected:l,children:[(0,c.jsx)(T,{type:"radio",name:"type",disabled:"INCOME"===r.type,value:"EXPENSE",checked:"EXPENSE"===r.type,onChange:()=>{a("type","EXPENSE"),s("EXPENSE")}}),"Expense"]})]}),(0,c.jsxs)(L,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(q,{name:"amount",type:"number",onInput:Q,value:r.amount.toString().replace("-",""),placeholder:"0.0"}),t.amount&&n.amount?(0,c.jsx)(V,{children:t.amount}):null]}),(0,c.jsx)(Z,{children:(0,c.jsx)("label",{children:(0,c.jsx)(H,{name:"transactionDate",value:r.transactionDate,onChange:e=>{o({target:{name:"transactionDate",value:e}}),d(e)},dateFormat:"dd.MM.yyyy",placeholderText:`${r.transactionDate.toLocaleDateString("uk-UA")}`,showIcon:!0,selected:i,maxDate:new Date,style:{float:"left"},icon:(0,c.jsx)(U,{width:"24",height:"24",children:(0,c.jsx)("use",{href:`${_}#calendar`})})})})})]}),(0,c.jsx)(G,{name:"comment",type:"text",value:r.comment,placeholder:"Comment"}),(0,c.jsx)(J,{children:(0,c.jsx)(K,{type:"submit",children:"Save"})})]})}})]})})};var te=n(2963),ne=n.n(te),re=n(3825);const oe=d.Ay.button`
  position: fixed;
  display: flex;
  bottom: 40px;
  right: 40px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  border: none;
  border-radius: 20px;
  color: rgba(251, 251, 251, 1);
  cursor: pointer;

  @media screen and (max-width: 767px) {
    bottom: 10px;
    right: 137.5px;
  }
`,ae=(0,d.Ay)(re.tNe)`
  width: 25px;
  height: 25px;
`;var ie=n(4860);const de=d.Ay.h2`
  margin-bottom: 30px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  color: #fbfbfb;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 30px;
  }
`,le=(d.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  padding: 12px 68px;
  margin-bottom: 20px;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  border: none;
  border-radius: 20px;
  line-height: 1.5;
  font-size: 18px;
  color: rgba(251, 251, 251, 1);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;
`,d.Ay.label`
  margin-bottom: 40px;
  width: 100%;
`),ce=(0,d.Ay)(I.lV)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Select {
    width: 100%;
    margin-bottom: 42px;
  }

  .custom-input {
    box-sizing: border-box;
    display: inherit;
    width: 181px;
    background-color: transparent;
    border: none;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    padding-bottom: 8px;
    padding-top: 5px;
    padding-left: 21px;
  }

  .react-datepicker-wrapper {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .react-datepicker__input-container {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    display: flex;
  }

  .date-icon {
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    fill: #734aef;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
`,se=(0,d.Ay)(I.D0)`
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  text-align: center;
  line-height: 1.5;
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  width: 181px;
  padding-bottom: 8px;
  padding-top: 5px;

  &::placeholder {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: left;
    padding-left: 21px;

    &::placeholder {
      text-align: left;
    }
  }
`,pe=(0,d.Ay)(ie.Ay)`
  font-size: 18px;
  width: 100%;

  .Select__control {
    background-color: transparent;
    height: 35px;
    width: 100%;
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    cursor: pointer;
    color: rgba(251, 251, 251, 1);
  }

  .Select__placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .Select__single-value {
    color: rgba(251, 251, 251, 1);
  }

  .Select__control:hover {
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .Select__control--is-focused {
    border: 0;
    box-shadow: none;
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    color: rgba(255, 255, 255, 0.1);
    width: auto;
  }

  .Select__menu {
    background: linear-gradient(
      0deg,
      rgba(83, 61, 186, 1) 0%,
      rgba(80, 48, 154, 1) 43.14%,
      rgba(106, 70, 165, 1) 73.27%,
      rgba(133, 93, 175, 0.9) 120.03%
    );
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    color: rgba(251, 251, 251, 1);
    font-size: 16px;
    border-radius: 8px;
    max-height: 352px;
  }

  .Select__menu-list {
    height: 100%;
  }

  .Select__option--is-focused {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }

  .Select__option--is-selected {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 134, 141, 1);
  }

  .Select__dropdown-indicator {
    color: rgba(251, 251, 251, 1);

    &:hover {
      color: rgba(251, 251, 251, 1);
    }
  }

  @media screen and (max-width: 767px) {
    .Select__value-container {
      padding-left: 21px;
    }

    .Select__menu-list {
      max-height: 352px;
    }
  }
`,xe=(0,d.Ay)(I.D0)`
  display: inherit;
  width: 95%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 5px 5px 8px 10px;

  &::placeholder {
    text-align: left;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: 0;
  }

  @media screen and (max-width: 767px) {
    padding-left: 21px;
    padding-bottom: 52px;
  }
`,he=d.Ay.label`
  width: 254px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 42px;
`,me=d.Ay.label`
  width: 181px;
  &:not(:last-child) {
    margin-right: 32px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }
`,ge=d.Ay.div`
  margin-bottom: 40px;
  display: flex;
  align-items: baseline;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,ue=(0,d.Ay)(I.Kw)`
  color: #ff868d;
  font-size: 14px;
  margin-top: 2px;
`,be=(d.Ay.div`
  border-radius: 2px;
  padding: 20px;
  /* background-color: greenyellow; */
  /* border:1px groove rgba(255, 255, 255, 0.4);/ */
  /* box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2),
0px 4px 60px 0px rgba(0, 0, 0, 0.25); */
`,d.Ay.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`,d.Ay.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: relative;
    width: 80px;
    height: 40px;
    background-color: #fbfbfb;
    border-radius: 30px;
    cursor: pointer;
  }
`),ye=(d.Ay.div`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,d.Ay.span`
  right: 100px;
  font-weight: 600;
  color: ${e=>{let{checked:t}=e;return t?"rgba(255, 255, 255, 0.60)":"#FFB627"}};
  @media screen and (min-width: 768px) {
    position: absolute;
  }
`),fe=(0,d.Ay)(ye)`
  left: 100px;
  color: ${e=>{let{checked:t}=e;return t?"#FF868D":"rgba(255, 255, 255, 0.60)"}};
`,we=d.Ay.div`
  position: absolute;
  top: 50%;
  transform: ${e=>{let{checked:t}=e;return`translateY(-50%) translateX(${t?"40px":"0"})`}};
  width: 44px;
  height: 44px;
  background-color: ${e=>{let{checked:t}=e;return t?"#FF868D":"#FFB627"}};
  box-shadow: ${e=>{let{checked:t}=e;return t?"0px 6px 15px 0px rgba(255, 134, 141, 0.50)":"0px 6px 15px 0px rgba(255, 199, 39, 0.50)"}};
  border-radius: 50%;
  transition: 0.3s;
  margin-left: ${e=>{let{checked:t}=e;return t?"0":"-4px"}};
`,ke=d.Ay.div`
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: #fbfbfb;
  top: 50%;
  left: 50%;
  transform: ${e=>{let{checked:t}=e;return`translate(-50%, -50%) rotate(${t?"0deg":"90deg"})`}};
  transition: 0.3s;
`,ve=d.Ay.div`
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: #fbfbfb;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  transition: 0.3s;
`,je=e=>{let{checked:t,onChange:n}=e;return(0,c.jsxs)(be,{onClick:()=>{n(!t)},children:[(0,c.jsx)(ye,{checked:t,children:"Income"}),(0,c.jsx)(fe,{checked:t,children:"Expense"}),(0,c.jsxs)(we,{checked:t,children:[(0,c.jsx)(ke,{checked:t}),(0,c.jsx)(ve,{checked:t})]})]})};var _e=n(7196),Ae=n(7425),Ee=n(5659);const Se=e=>e.isFocused?(0,c.jsx)(Ae.c.DropdownIndicator,{...e,children:(0,c.jsx)(Ee.prc,{})}):(0,c.jsx)(Ae.c.DropdownIndicator,{...e,children:(0,c.jsx)(Ee.KZO,{})}),$e={menuList:e=>({...e,"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#BFB4DD",borderRadius:"12px"}})},Ce=e=>{let{onChange:t,options:n,value:r,className:o}=e;return(0,c.jsx)("div",{className:o,children:(0,c.jsx)(pe,{value:((e,t)=>e?e.find((e=>e.value===t)):"")(n,r),placeholder:"Select a category",components:{DropdownIndicator:Se},onChange:e=>t(e),options:n,classNamePrefix:"Select",styles:$e})})};n(5015);var De=n(7985),Fe=n(3401);const Ne=(0,M.Ik)({value:(0,M.ai)().positive().required("Amount is required"),comment:(0,M.Yj)().max(30,"Maximum must be 30 characters").required("Please fill in comment"),category:(0,M.Yj)().min(3)}),ze={type:"expense",category:"",value:"",date:new Date,comment:""},Ie=(0,r.forwardRef)(((e,t)=>{let{value:n,onClick:r}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{type:"button",className:"custom-input",onClick:r,ref:t,children:n}),(0,c.jsx)(_e.TDs,{className:"date-icon",onClick:r})]})}));function Me(e){let{closeModal:t}=e;const n=(0,o.wA)(),i=(0,o.d4)(a.Jk);(0,r.useEffect)((()=>{n((0,S.bW)())}),[n]);const d=i.map((e=>({value:e.id,label:e.name})));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(de,{children:"Add transaction"}),(0,c.jsx)(I.l1,{initialValues:ze,validationSchema:Ne,onSubmit:(e,r)=>{let{resetForm:o}=r;"expense"===e.type&&(e.type="EXPENSE");const a={amount:"EXPENSE"===e.type?Number(0-e.value):Number(e.value),categoryId:"EXPENSE"===e.type?e.category:"063f1132-ba5d-42b4-951d-44011ca46262",comment:e.comment,transactionDate:(new Date).toISOString().slice(0,10),type:e.type.toUpperCase()};n((0,S.yY)(a)).unwrap().then((()=>{t(),Fe.oR.success("Transaction added\ud83d\udcb8")})).catch((()=>{Fe.oR.error("Something went wrong, enter amount or choose a category!\ud83e\udd37\u200d\u2640\ufe0f")})),o()},children:e=>{let{values:n,setFieldValue:r,validate:o,...a}=e;return(0,c.jsxs)(ce,{autoComplete:"off",children:[(0,c.jsx)(he,{children:(0,c.jsx)(je,{checked:"expense"===n.type,onChange:e=>{r("type",e?"expense":"income")}})}),"expense"===n.type?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(Ce,{options:d,value:d.find((e=>e.value===n.category)),onChange:e=>{r("category",e.value)},className:"Select",name:"category"}),(0,c.jsx)(ue,{name:"category",component:"div"})]}):n.category="",(0,c.jsxs)(ge,{children:[(0,c.jsxs)(me,{children:[(0,c.jsx)(se,{type:"number",name:"value",placeholder:"0.00"}),(0,c.jsx)(ue,{name:"value",component:"div"})]}),(0,c.jsx)(me,{children:(0,c.jsx)(I.D0,{name:"date",validate:o,children:e=>{let{field:t,form:o,meta:a}=e;return(0,c.jsx)(O(),{name:"date",dateFormat:"dd.MMM.yyyy",maxDate:new Date,selected:n.date||null,onChange:e=>r("date",e),shouldCloseOnSelect:!0,customInput:(0,c.jsx)(Ie,{})})}})})]}),(0,c.jsxs)(le,{children:[(0,c.jsx)(xe,{type:"textarea",name:"comment",placeholder:"Comment"}),(0,c.jsx)(ue,{name:"comment",component:"div"})]}),(0,c.jsx)(De.zG,{type:"submit",children:"Add"}),(0,c.jsx)(De.Zb,{onClick:t,children:"Cancel"})]})}})]})}const Be={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",border:"none",backgroundColor:"rgba(91, 13, 218, 0.9)",transform:"translate(-50%, -50%)",borderRadius:"8px",backdropFilter:"blur(40px)",padding:"20px 10px"},overlay:{backgroundColor:"rgba(136, 134, 134, 0.25)",backdropFilter:"blur(1.5px)"}},Oe=()=>{const[e,t]=(0,r.useState)(!1);function n(){t(!1)}return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(oe,{onClick:function(){t(!0)},children:(0,c.jsx)(ae,{})}),(0,c.jsx)(ne(),{isOpen:e,onRequestClose:n,style:Be,children:(0,c.jsx)(Me,{closeModal:n})})]})};function Pe(e){const t=new Date(e);return`${t.getDate().toString().padStart(2,"0")}.${(t.getMonth()+1).toString().padStart(2,"0")}.${t.getFullYear().toString().slice(-2)}`}const Xe=()=>{const e=(0,o.wA)(),[t,n]=(0,r.useState)({value:"date",label:"Date",isReverse:!1}),{open:i,close:d,isOpen:l,data:C}=$(),D=(0,o.d4)(a.Jk),F=(0,o.d4)((e=>(0,a.y7)(e,t))),N=(0,o.d4)(a.Di),[I,M]=(0,r.useState)(!1);I&&new Date;const B=(0,r.useRef)(null),O=(0,r.useRef)(null),P=(0,r.useRef)(null);(0,r.useEffect)((()=>{e((0,S.r2)()),e((0,S.bW)())}),[e]);const X=e=>{t.value===e.value?n((e=>({...e,isReverse:!e.isReverse}))):n({...e,isReverse:!1})},R=e=>{switch(e){case"date":B.current.style.transform="rotate(0)",O.current.style.transform="rotate(180deg)",P.current.style.transform="rotate(180deg)";break;case"category":B.current.style.transform="rotate(180deg)",O.current.style.transform="rotate(180deg)",P.current.style.transform="rotate(0)";break;case"amount":B.current.style.transform="rotate(180deg)",O.current.style.transform="rotate(0)",P.current.style.transform="rotate(180deg)"}};return(0,c.jsxs)(c.Fragment,{children:[N&&(0,c.jsx)(s,{}),F.length>0?(0,c.jsxs)(p,{children:[(0,c.jsx)(x,{children:(0,c.jsxs)(h,{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)(m,{children:[(0,c.jsxs)(u,{onClick:()=>{X({value:"date"}),R("date")},children:["Date",(0,c.jsx)(b,{ref:B,width:"14",height:"14",children:(0,c.jsx)("use",{href:`${_}#arrow_down`})})]}),(0,c.jsx)(g,{children:"Type"}),(0,c.jsxs)(u,{onClick:()=>{X({value:"category"}),R("category")},children:["Category",(0,c.jsx)(b,{ref:P,width:"14",height:"14",children:(0,c.jsx)("use",{href:`${_}#arrow_down`})})]}),(0,c.jsx)(g,{children:"Comment"}),(0,c.jsxs)(u,{onClick:()=>{X({value:"amount"}),R("amount")},children:["Sum",(0,c.jsx)(b,{ref:O,width:"14",height:"14",children:(0,c.jsx)("use",{href:`${_}#arrow_down`})})]})]})}),(0,c.jsx)(y,{children:F.map((t=>{var n;return(0,c.jsxs)(f,{children:[(0,c.jsx)(w,{children:Pe(t.transactionDate)}),(0,c.jsx)(w,{children:"INCOME"===t.type?"+":"-"}),(0,c.jsx)(w,{children:(null===(n=D.find((e=>e.id===t.categoryId)))||void 0===n?void 0:n.name)||"Other"}),(0,c.jsx)(k,{children:t.comment.length>15?`${t.comment.slice(0,15)}...`:t.comment}),(0,c.jsx)(w,{$color:"INCOME"===t.type?"#FFB627":"#FF868D",children:t.amount.toString().replace("-","")}),(0,c.jsx)("td",{children:(0,c.jsxs)(v,{children:[(0,c.jsx)(E,{onClick:()=>i(t),children:(0,c.jsx)("svg",{width:"14",height:"14",children:(0,c.jsx)("use",{href:`${_}#edit`})})}),(0,c.jsx)(A,{onClick:()=>{return n=t.id,e((0,S.Uw)(n)),void M(!0);var n},children:"Delete"})]})})]},t.id)}))})]})}),l&&(0,c.jsx)(z,{close:d,children:(0,c.jsx)(ee,{transaction:C,close:d})})]}):(0,c.jsx)(j,{children:(0,c.jsx)("h2",{children:"No transactions found, lets create!"})}),(0,c.jsx)(Oe,{})]})};var Re=n(9404);const We=(0,d.Ay)(Re.r)`
  @media only screen and (min-width: 768px) {
    padding: 0;
  }
`,Ye=()=>(0,c.jsx)(We,{children:(0,c.jsx)(Xe,{})})}}]);
//# sourceMappingURL=785.63a69fe4.chunk.js.map