(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{6179:function(e,l,s){Promise.resolve().then(s.bind(s,7462))},7462:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return i}});var r=s(7437),t=s(7445),a=s(2265),n=s(8792),o=s(3107),i=()=>{let[e,l]=(0,a.useState)(!1),[s,i]=(0,a.useState)({userName:!1,email:!1,companyName:!1,contactNumber:!1,details:!1,category:!1}),d=async e=>{for(let[l,s]of e.entries())0===e.get(l).length||null===e.get(l)?i(e=>({...e,[l]:!0})):i(e=>({...e,[l]:!1}));try{let l=await o.Z.post("http://localhost:80/emailscript/send-email.php",e,{headers:{"Content-Type":"multipart/form-data"}});console.log("This is the response",l)}catch(e){console.error("There is an error",e.response||e.message)}};return(0,r.jsxs)("main",{className:"pt-10 flex flex-col justify-center items-center py-5 w-full max-sm:px-5 sm:px-10 relative",children:[(0,r.jsxs)("section",{className:"  flex lg:flex-row flex-col bg-offwhite rounded-sm lg:rounded-xl w-full max-w-[74rem] shadow-xl py-10 border items-center justify-center  ",children:[(0,r.jsxs)("section",{className:"lg:w-[50%]  w-[100%] h-auto flex flex-col items-center justify-evenly lg:border-b-0 py-3  border-newgold ",children:[(0,r.jsxs)("div",{className:" w-[80%] flex flex-col",children:[(0,r.jsx)("p",{className:"lg:text-2xl text-[16px] font-medium lg:py-2",children:"Address"}),(0,r.jsx)("header",{className:"text-[16px] lg:text-[18px] font-medium  py-1 lg:py-2",children:"Registered Office"}),(0,r.jsx)("span",{className:"text-[14px] max-lg:max-w-lg py-1 lg:py-2",children:"Room no. 2, Municipal building no. 3, 71- Morland Road, Mumbai, Maharashtra 400 008, India"}),(0,r.jsx)("header",{className:"text-[16px] lg:text-[18px] font-medium  py-1 lg:py-2",children:"Factory"}),(0,r.jsx)("span",{className:"text-[14px] max-lg:max-w-lg py-1 lg:py-2",children:"Hose Assembly unit: 67/A , Factory No. 1, Suryaji compound, Tank pakhadi Road, Byculla west, Mumbai, Maharashtra 400 011, India"})]}),(0,r.jsxs)("div",{className:"w-[80%] max-small:flex-col max-lg:mt-4 max-lg:flex gap-3 small:max-lg:gap-10",children:[(0,r.jsxs)("div",{className:"  flex flex-col",children:[(0,r.jsx)("p",{className:"lg:text-2xl text-[16px] font-medium lg:py-3",children:"Call us"}),(0,r.jsx)(n.default,{href:"tel:+12346567890",children:(0,r.jsx)("span",{className:"text-[14px]",children:"+91 123456789"})})]}),(0,r.jsxs)("div",{className:"  flex flex-col ",children:[(0,r.jsx)("p",{className:"lg:text-2xl text-[16px] font-medium lg:py-3",children:"Email"}),(0,r.jsx)(n.default,{href:"https://mail.google.com/mail/?view=cm&fs=1&to=cewtech2024@gmail.com",target:"_blank",children:(0,r.jsx)("span",{className:"text-[14px] ",children:"cewtech2024@gmail.com"})})]})]})]}),(0,r.jsx)("form",{action:d,className:"lg:w-[50%] w-[90%] h-auto flex flex-col items-center justify-evenly",children:(0,r.jsxs)("div",{className:" w-[90%] flex flex-col  lg:items-start",children:[(0,r.jsxs)("div",{className:"flex max-small:flex-col small:max-lg:gap-6 lg:flex-col w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("p",{className:" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4",children:"Name"}),(0,r.jsx)("input",{name:"userName",placeholder:"Enter your name",className:" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("p",{className:" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4",children:"Company Name"}),(0,r.jsx)("input",{name:"companyName",placeholder:"Enter your company name",className:" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "}),s.companyName&&(0,r.jsx)("p",{className:"text-red-600 text-[14px] pt-2",children:"Company name is required"})]})]}),(0,r.jsxs)("div",{className:" flex max-small:flex-col lg:flex-col  small:max-lg:gap-6  w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("p",{className:" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4",children:"Email"}),(0,r.jsx)("input",{name:"email",type:"email",placeholder:"Enter your email",className:" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "}),s.email&&(0,r.jsx)("p",{className:"text-red-600 text-[14px] pt-2",children:"Email is required"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("p",{className:" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4",children:"Contact number"}),(0,r.jsx)("input",{name:"contactNumber",placeholder:"Enter your contact no",type:"text",e:!0,maxLength:"10",className:" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "}),s.contactNumber&&(0,r.jsx)("p",{className:"text-red-600 text-[14px] pt-2",children:"Contact Number is required"})]})]}),(0,r.jsxs)("label",{className:"text-[14px] lg:text-[16px] font-medium py-2 lg:py-4",children:[" ","Enquiry Category"]}),(0,r.jsxs)("select",{name:"category",className:"lg:w-[70%] w-[100%]  p-2 rounded-md border border-newgold text-gray-700   leading-tight focus:outline-none ",children:[(0,r.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select enquiry type"}),(0,r.jsx)("option",{value:"Hose Assembly",children:"Hose Assembly"}),(0,r.jsx)("option",{value:"Hose fitting",children:"Hose fitting"}),(0,r.jsx)("option",{value:"Bare Hose",children:"Bare Hose"}),(0,r.jsx)("option",{value:"General enquiry",children:"General enquiry"})]}),(0,r.jsx)("p",{className:" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4",children:"Message"}),(0,r.jsx)("textarea",{name:"details",placeholder:"Enter your message",className:"lg:w-[70%] resize-none p-2 h-28 w-[100%] focus:outline-none border border-newgold rounded-md "}),s.details&&(0,r.jsxs)("p",{className:"text-red-600 text-[14px] pt-2",children:["Please enter a Message"," "]}),(0,r.jsx)(t.z,{className:"my-4 lg:w-[70%] w-[100%]",variant:"goldbtn",children:"Send message"})]})})]}),(0,r.jsxs)("div",{className:"mt-20 mb-20 h-[100%]  smallest:w-[100%] flex justify-center",children:[(0,r.jsx)("iframe",{className:"border-2 max-smallest:hidden border-newgold rounded-md  smallest:w-[74rem] h-[500px] ",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0080428387796!2d72.8292141!3d18.975252200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce69b9b7f711%3A0x4f9e67b0fbc590ea!2sCrown%20Engineering%20Works%20-%20FDA%20Hoses%20Suppliers%20-%20Mumbai!5e0!3m2!1sen!2sin!4v1722600233190!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),(0,r.jsx)("div",{className:"grid grid-cols-1 max-w-[74rem] overflow-x-auto smallest:hidden ",children:(0,r.jsx)("iframe",{className:"border-2 border-newgold rounded-md  smallest:w-[74rem] h-[500px] ",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0080428387796!2d72.8292141!3d18.975252200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce69b9b7f711%3A0x4f9e67b0fbc590ea!2sCrown%20Engineering%20Works%20-%20FDA%20Hoses%20Suppliers%20-%20Mumbai!5e0!3m2!1sen!2sin!4v1722600233190!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})]})}},7445:function(e,l,s){"use strict";s.d(l,{z:function(){return d}});var r=s(7437),t=s(2265),a=s(9143),n=s(7742),o=s(8243);let i=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",goldbtn:"bg-newgold text-white hover:bg-transparent hover:text-newgold hover:border-newgold hover:border-2 ",whitegold:"text-newgold border-newgold border bg-offwhite "},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=t.forwardRef((e,l)=>{let{className:s,variant:t,size:n,asChild:d=!1,...c}=e,m=d?a.g7:"button";return(0,r.jsx)(m,{className:(0,o.cn)(i({variant:t,size:n,className:s})),ref:l,...c})});d.displayName="Button"},8243:function(e,l,s){"use strict";s.d(l,{cn:function(){return a}});var r=s(3167),t=s(1367);function a(){for(var e=arguments.length,l=Array(e),s=0;s<e;s++)l[s]=arguments[s];return(0,t.m6)((0,r.W)(l))}}},function(e){e.O(0,[250,684,659,971,69,744],function(){return e(e.s=6179)}),_N_E=e.O()}]);