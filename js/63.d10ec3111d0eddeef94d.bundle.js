(self.webpackChunkcreator_gopaychain=self.webpackChunkcreator_gopaychain||[]).push([[63],{3347:(e,t,a)=>{"use strict";a.r(t)},527:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(1375));a(3347);const u=l(a(4869)),n=a(1250),o=l(a(6280)),i=l(a(137)),d=l(a(283));t.default=function(){return r.default.createElement("div",{className:"App"},r.default.createElement(n.Provider,{store:u.default},r.default.createElement(r.default.Fragment,null,r.default.createElement(o.default,null),r.default.createElement("div",{className:"d-flex"},r.default.createElement(i.default,null),r.default.createElement(d.default,null)))))}},7892:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(527)),u=l(a(1375)),n=l(a(973)),o=l(a(2730)),i=l(a(4869));t.default=()=>(u.default.useEffect((()=>{i.default.injectReducer("order",n.default),i.default.injectReducer("creator",o.default)}),[]),u.default.createElement(r.default,null))},6202:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(9669)),u=a(6578),n=l(a(9669)),o={post:{Authorization:"Bearer "+localStorage.getItem("user")},get:{Authorization:"Bearer "+localStorage.getItem("user")}};t.default=new class{constructor(){this.callAPI=e=>{const t={url:e.url,headers:o,data:e.data,method:e.method,timeout:3e3,responseType:"json",validateStatus:e=>(401==e&&(localStorage.removeItem("name"),localStorage.removeItem("user"),u.history.push("/home"),window.location.reload()),!0),cancelToken:new n.default.CancelToken((e=>{}))};return r.default(t)}}}},7989:function(e,t,a){"use strict";var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return r(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(a(1375)),i=a(5985),d=n(a(8482)),c=n(a(5961)),s=a(1250),f=i.makeStyles((e=>({root:{"& > *":{margin:e.spacing(1),width:"300"}}})));t.default=function(e){const t=f(),a=s.useSelector((e=>e.creator.amount)),[l,r]=o.useState(0),u=s.useDispatch();return o.default.createElement("div",null,o.default.createElement("div",{className:"d-flex justify-content-around"},o.default.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},o.default.createElement(c.default,{id:"standard-basic",label:"Amount",onChange:function(e){e.preventDefault();let t={type:"SET_AMOUNT",payload:{amount:parseFloat(e.target.value)}};u(t)}})),o.default.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},o.default.createElement(c.default,{id:"standard-basic",label:"Price",onChange:function(e){r(parseFloat(e.target.value))}}))),o.default.createElement("div",null,o.default.createElement(d.default,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(t){t.preventDefault();const r={orderId:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})),itemName:e.title,buyPrice:l,buyAmount:a,orderStatus:"CREATED",createdTime:(new Date).toLocaleDateString(),updateTime:(new Date).toLocaleDateString()};u({type:"ADD_ORDER",payload:r})}},"Confirm Buy")))}},3616:function(e,t,a){"use strict";var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return r(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(a(1375)),i=a(5985),d=a(1250),c=n(a(6010)),s=n(a(8149)),f=n(a(4158)),m=n(a(236)),p=n(a(3463)),_=n(a(2650)),y=n(a(503)),h=n(a(1890)),b=n(a(400)),v=a(6889),E=n(a(4566)),D=n(a(8513)),g=n(a(7989)),O=n(a(5890)),P=i.makeStyles((e=>({root:{maxWidth:365},media:{height:0,paddingTop:"46.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:v.blue[500]}})));t.default=function(e){const t=P(),[a,l]=o.default.useState(!1),r=d.useSelector((e=>e.creator.price)),u=d.useSelector((e=>e.creator.total)),n=d.useDispatch();return o.useEffect((()=>{setInterval((()=>{const e=r+5*parseFloat(Math.random().toFixed(2));n({type:"SET_PRICE",payload:{price:e}})}),2e3)}),[]),o.default.createElement(s.default,{className:t.root},o.default.createElement(f.default,{action:o.default.createElement(h.default,{"aria-label":"settings"},o.default.createElement(D.default,null)),title:e.title,subheader:"Bangalore"}),o.default.createElement(m.default,{className:t.media,image:e.image,title:"Paella dish"}),o.default.createElement(p.default,null,o.default.createElement(b.default,{variant:"body2",color:"textSecondary",component:"p"},"The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career.")),o.default.createElement(p.default,null,o.default.createElement("div",{className:"d-flex justify-content-around"},o.default.createElement(b.default,{variant:"h6"},"Price:",r),o.default.createElement(b.default,{variant:"h6"},"Total: ",u))),o.default.createElement(_.default,{disableSpacing:!0},o.default.createElement(g.default,{title:e.title}),o.default.createElement(h.default,{className:c.default(t.expand,{[t.expandOpen]:a}),onClick:()=>{l(!a)},"aria-expanded":a,"aria-label":"show more"},o.default.createElement(E.default,null))),o.default.createElement(y.default,{in:a,timeout:"auto",unmountOnExit:!0},o.default.createElement(p.default,null,o.default.createElement(O.default,{title:e.title}))))}},137:function(e,t,a){"use strict";var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return r(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(8484),i=u(a(1375)),d=n(a(3616)),c=n(a(3815)),s=n(a(4754)),f=n(a(9530));t.default=function(){const[e,t]=i.useState(0),a=[i.default.createElement(d.default,{title:"ShamRock",image:c.default}),i.default.createElement(d.default,{title:"GlamRock",image:s.default}),i.default.createElement(d.default,{title:"JamRock",image:f.default})];return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"d-flex flex-column"},i.default.createElement("div",null,i.default.createElement(o.Button,{className:"flex-grow",style:{width:"50%"},onClick:function(){const a=e-1;t(a>=0?a:0)}},"Prev"),i.default.createElement(o.Button,{className:"mr-auto",style:{width:"50%"},onClick:function(){const l=e+1;t(l<a.length?l:a.length-1)}},"Next")),a[e]))}},5890:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(1375)),u=l(a(8840)),n=l(a(5708));t.default=function(e){const t={chart:{type:"spline"},title:{text:e.title},xAxis:{type:"datetime"},series:[{name:"Coin Value",data:[[Date.UTC(2010,0,1),29.9],[Date.UTC(2010,2,1),71.5],[Date.UTC(2010,3,1),106.4]]}]};return r.default.createElement(n.default,{highcharts:u.default,options:t})}},6280:function(e,t,a){"use strict";var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return r(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(7856),i=u(a(1375)),d=a(1250),c=n(a(4339));t.default=e=>{d.useDispatch();const[t,a]=i.useState(!1);return i.default.createElement("div",{className:"d-flex"},i.default.createElement("div",{className:"p-2 flex-grow-1 bg-dark"},i.default.createElement("img",{src:c.default,style:{width:"40px",marginRight:"10px"}}),i.default.createElement(o.Link,{to:"/",className:" text-white navbar-brand"},"Brand Coin")),i.default.createElement("div",{className:"p-2 bg-dark"},i.default.createElement(o.Link,{to:t?"/":"/order",className:" text-white nav-link",onClick:function(){a(!t)}},"Order History")))}},283:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(1375)),u=a(5985),n=l(a(9809)),o=l(a(1211)),i=l(a(1281)),d=l(a(7224)),c=l(a(5705)),s=l(a(9262)),f=l(a(7613)),m=a(1250),p=u.makeStyles({table:{minWidth:650},tableCellCreated:{color:"orange"},tableCellCompleted:{color:"green"}});t.default=function(){const e=p(),t=m.useSelector((e=>e.order.orderDetails)).map((e=>({itemName:e.itemName,buyPrice:e.buyPrice,buyAmount:e.buyAmount,orderStatus:e.orderStatus})));return r.default.createElement(d.default,{component:f.default},r.default.createElement(n.default,{className:e.table,"aria-label":"simple table"},r.default.createElement(c.default,null,r.default.createElement(s.default,null,r.default.createElement(i.default,null,"Item Name"),r.default.createElement(i.default,{align:"right"},"Buy Price"),r.default.createElement(i.default,{align:"right"},"Buy Amount"),r.default.createElement(i.default,{align:"right"},"Status"))),r.default.createElement(o.default,null,t.map((t=>r.default.createElement(s.default,{key:t.name},r.default.createElement(i.default,{component:"th",scope:"row"},t.itemName),r.default.createElement(i.default,{align:"right"},t.buyPrice),r.default.createElement(i.default,{align:"right"},t.buyAmount),r.default.createElement(i.default,{className:"CREATED"===t.orderStatus?e.tableCellCreated:e.tableCellCompleted,align:"right"},t.orderStatus)))))))}},6578:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.history=void 0;const l=a(71);t.history=l.createBrowserHistory()},599:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(31),u=l(a(2730)),n=l(a(973));t.default=function(e={}){return r.combineReducers({...e,creator:u.default,order:n.default})}},3698:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.setBuyDetailValue=t.setAmountValue=t.setTotalValue=t.setPriceValue=t.setDetailValue=t.getTravel=void 0;const r=a(4857),u=a(2730),n=l(a(6202)),o=a(1690);t.getTravel=function*(e){try{(yield r.call((()=>n.default.callAPI({url:o.API_URL+"/getTravel",method:"POST",data:{origin,destination,travelDate:new Date(travelDate)}})))).status}catch(e){yield r.put({type:"TODO_FETCH_FAILED"})}},t.setDetailValue=function*(){for(;;){const e=yield r.take("SET_DETAIL");yield r.put(u.setDetail(e.payload))}},t.setPriceValue=function*(){for(;;){const e=yield r.take("SET_PRICE");yield r.put(u.setPrice(e.payload))}},t.setTotalValue=function*(){for(;;){const e=yield r.take("SET_TOTAL");yield r.put(u.setTotal(e.payload))}},t.setAmountValue=function*(){for(;;){const e=yield r.take("SET_AMOUNT");yield r.put(u.setAmount(e.payload))}},t.setBuyDetailValue=function*(){for(;;){const e=yield r.take("SET_BUY_DETAIL");yield r.put(u.setBuyDetail(e.payload))}}},8151:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateOrderDetailsValue=t.addOrderDetailsValue=void 0;const l=a(4857),r=a(973);t.addOrderDetailsValue=function*(){for(;;){const e=yield l.take("ADD_ORDER");yield l.put(r.addOrderDetails(e.payload))}},t.updateOrderDetailsValue=function*(){for(;;){const e=yield l.take("UPDATE_ORDER");yield l.put(r.updateOrderDetails(e.payload))}}},787:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.publish=void 0;const r=a(4857),u=l(a(6202)),n=a(1690),o=a(3698),i=a(8151);t.publish=function*(e){const{id:t}=e.payload;try{let e=yield r.call((()=>u.default.callAPI({url:n.API_URL+"/publish?message="+t+"&user="+localStorage.getItem("name"),method:"GET",data:{}})));"Success"===e.data&&200==e.status&&console.log("published sucesfully")}catch(e){yield r.put({type:"TODO_FETCH_FAILED"})}},t.default=function*(){yield r.all([o.setDetailValue(),o.setAmountValue(),o.setPriceValue(),o.setTotalValue(),i.addOrderDetailsValue(),i.updateOrderDetailsValue()])}},1690:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TRAVEL_API_URI=t.AUTH_API_URL=t.API_URL=void 0,t.API_URL="https://www.gopaychain.in",t.AUTH_API_URL="https://www.gopaychain.in",t.TRAVEL_API_URI="travelApp@https://sinfull1.github.io/remoteEntry.js"},2730:(e,t,a)=>{"use strict";var l;Object.defineProperty(t,"__esModule",{value:!0}),t.setBuyDetail=t.setDetail=t.setTotal=t.setPrice=t.setAmount=void 0;const r=a(31).createSlice({name:"creator",initialState:{price:70,amount:0,total:0,buyPrice:0,buyAmount:0},reducers:{setPrice(e,t){e.price=t.payload.price,e.total=parseFloat((t.payload.price*e.amount).toFixed(2))},setAmount(e,t){e.amount=t.payload.amount},setTotal(e,t){e.total=t.payload.total},setBuyDetail(e,t){e.buyAmount=t.payload.buyAmount,e.buyPrice=t.payload.buyPrice},setDetail(e,t){e.price=t.payload.price?t.payload.price:e.price,e.total=t.payload.total?t.payload.price:e.total,e.amount=t.payload.amount?t.payload.amount:e.amount}}});l=r.actions,t.setAmount=l.setAmount,t.setPrice=l.setPrice,t.setTotal=l.setTotal,t.setDetail=l.setDetail,t.setBuyDetail=l.setBuyDetail,t.default=r.reducer},973:(e,t,a)=>{"use strict";var l;Object.defineProperty(t,"__esModule",{value:!0}),t.updateOrderDetails=t.addOrderDetails=void 0;const r=a(31).createSlice({name:"order",initialState:{orderDetails:[]},reducers:{addOrderDetails(e,t){e.orderDetails.push(t.payload)},updateOrderDetails(e,t){for(var a=0,l=e.orderDetails.length;a<l;a++)if(e.orderDetails[a].orderId===t.payload.orderId){e.orderDetails[a].orderStatus=t.payload.orderStatus,e.orderDetails[a].updateTime=t.payload.updateTime;break}}}});l=r.actions,t.addOrderDetails=l.addOrderDetails,t.updateOrderDetails=l.updateOrderDetails,t.default=r.reducer},4869:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(31),u=l(a(32)),n=l(a(787)),o=l(a(4500)),i=l(a(599)),d=u.default(),c=[d,o.default];let s=r.configureStore({reducer:i.default({}),middleware:[...r.getDefaultMiddleware({thunk:!1}),...c]});d.run(n.default),s.asyncReducers={},s.injectReducer=(e,t)=>{s.asyncReducers[e]=t,s.replaceReducer(i.default(s.asyncReducers))},t.default=s},9530:(e,t,a)=>{"use strict";e.exports=a.p+"7ed864b2985ce3618af3.PNG"},4339:(e,t,a)=>{"use strict";e.exports=a.p+"895ccde0669b725e4795.PNG"},4754:(e,t,a)=>{"use strict";e.exports=a.p+"d7df6a2cd279263ec3aa.PNG"},3815:(e,t,a)=>{"use strict";e.exports=a.p+"d5f39a16e43df26e64c6.PNG"}}]);