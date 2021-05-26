/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcreator_gopaychain"] = self["webpackChunkcreator_gopaychain"] || []).push([["src_CreatorInjector_tsx-webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_c-60caf7"],{

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/App.css?");

/***/ }),

/***/ "./src/CreatorForm.tsx":
/*!*****************************!*\
  !*** ./src/CreatorForm.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\"));\r\n__webpack_require__(/*! ./App.css */ \"./src/App.css\");\r\nconst store_1 = __importDefault(__webpack_require__(/*! ./store */ \"./src/store.tsx\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\r\nconst header_component_1 = __importDefault(__webpack_require__(/*! components/header.component */ \"./src/component/header.component.tsx\"));\r\nconst cards_component_1 = __importDefault(__webpack_require__(/*! components/cards.component */ \"./src/component/cards.component.tsx\"));\r\nconst order_component_1 = __importDefault(__webpack_require__(/*! components/order.component */ \"./src/component/order.component.tsx\"));\r\nfunction CreatorForm() {\r\n    return (react_1.default.createElement(\"div\", { className: \"App\" },\r\n        react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },\r\n            react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(header_component_1.default, null),\r\n                react_1.default.createElement(\"div\", { className: \"d-flex\" },\r\n                    react_1.default.createElement(cards_component_1.default, null),\r\n                    react_1.default.createElement(order_component_1.default, null))))));\r\n}\r\nexports.default = CreatorForm;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/CreatorForm.tsx?");

/***/ }),

/***/ "./src/CreatorInjector.tsx":
/*!*********************************!*\
  !*** ./src/CreatorInjector.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst CreatorForm_1 = __importDefault(__webpack_require__(/*! ./CreatorForm */ \"./src/CreatorForm.tsx\"));\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\"));\r\nconst order_slice_1 = __importDefault(__webpack_require__(/*! ./slices/order.slice */ \"./src/slices/order.slice.tsx\"));\r\nconst store_1 = __importDefault(__webpack_require__(/*! ./store */ \"./src/store.tsx\"));\r\nconst CreatorInjector = () => {\r\n    react_1.default.useEffect(() => store_1.default.injectReducer(\"order\", order_slice_1.default), []);\r\n    return react_1.default.createElement(CreatorForm_1.default, null);\r\n};\r\nexports.default = CreatorInjector;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/CreatorInjector.tsx?");

/***/ }),

/***/ "./src/api/request.interface.tsx":
/*!***************************************!*\
  !*** ./src/api/request.interface.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nconst history_1 = __webpack_require__(/*! ../helpers/history */ \"./src/helpers/history.tsx\");\r\nconst axios_2 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nconst authheaders = {\r\n    post: {\r\n        Authorization: \"Bearer \" + localStorage.getItem(\"user\"),\r\n    },\r\n    get: {\r\n        Authorization: \"Bearer \" + localStorage.getItem(\"user\"),\r\n    },\r\n};\r\nclass LoginApi {\r\n    constructor() {\r\n        this.callAPI = (loginRequest) => {\r\n            const config = {\r\n                url: loginRequest.url,\r\n                headers: authheaders,\r\n                data: loginRequest.data,\r\n                method: loginRequest.method,\r\n                timeout: 3000,\r\n                responseType: \"json\",\r\n                validateStatus: (status) => {\r\n                    if (status == 401) {\r\n                        localStorage.removeItem(\"name\");\r\n                        localStorage.removeItem(\"user\");\r\n                        history_1.history.push(\"/home\");\r\n                        window.location.reload();\r\n                    }\r\n                    return true;\r\n                },\r\n                cancelToken: new axios_2.default.CancelToken((cancel) => { }),\r\n            };\r\n            return axios_1.default(config);\r\n        };\r\n    }\r\n}\r\nexports.default = new LoginApi();\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/api/request.interface.tsx?");

/***/ }),

/***/ "./src/component/buy.component.tsx":
/*!*****************************************!*\
  !*** ./src/component/buy.component.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\"));\r\nconst styles_1 = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\r\nconst Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\"));\r\nconst TextField_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\r\nconst useStyles = styles_1.makeStyles((theme) => ({\r\n    root: {\r\n        \"& > *\": {\r\n            margin: theme.spacing(1),\r\n            width: \"300\",\r\n        },\r\n    },\r\n}));\r\nfunction BuyComponent(props) {\r\n    const classes = useStyles();\r\n    const amount = react_redux_1.useSelector((state) => state.creator.amount);\r\n    const [buyPrice, setBuyPrice] = react_1.useState(0);\r\n    const dispatch = react_redux_1.useDispatch();\r\n    function uuidv4() {\r\n        return \"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g, function (c) {\r\n            var r = (Math.random() * 16) | 0, v = c == \"x\" ? r : (r & 0x3) | 0x8;\r\n            return v.toString(16);\r\n        });\r\n    }\r\n    const onBuySet = function (event) {\r\n        event.preventDefault();\r\n        const orderDetails = {\r\n            orderId: uuidv4(),\r\n            itemName: props.title,\r\n            buyPrice: buyPrice,\r\n            buyAmount: amount,\r\n            orderStatus: \"CREATED\",\r\n            createdTime: new Date().toLocaleDateString(),\r\n            updateTime: new Date().toLocaleDateString(),\r\n        };\r\n        let orderAction = {\r\n            type: \"ADD_ORDER\",\r\n            payload: orderDetails,\r\n        };\r\n        dispatch(orderAction);\r\n    };\r\n    const onChange = function (event) {\r\n        event.preventDefault();\r\n        let cardAction = {\r\n            type: \"SET_AMOUNT\",\r\n            payload: {\r\n                amount: parseFloat(event.target.value),\r\n            },\r\n        };\r\n        dispatch(cardAction);\r\n    };\r\n    const onPriceChange = function (event) {\r\n        setBuyPrice(parseFloat(event.target.value));\r\n    };\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", { className: \"d-flex justify-content-around\" },\r\n            react_1.default.createElement(\"form\", { className: classes.root, noValidate: true, autoComplete: \"off\" },\r\n                react_1.default.createElement(TextField_1.default, { id: \"standard-basic\", label: \"Amount\", onChange: onChange })),\r\n            react_1.default.createElement(\"form\", { className: classes.root, noValidate: true, autoComplete: \"off\" },\r\n                react_1.default.createElement(TextField_1.default, { id: \"standard-basic\", label: \"Price\", onChange: onPriceChange }))),\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(Button_1.default, { variant: \"contained\", color: \"primary\", fullWidth: true, onClick: onBuySet }, \"Confirm Buy\"))));\r\n}\r\nexports.default = BuyComponent;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/component/buy.component.tsx?");

/***/ }),

/***/ "./src/component/card.component.tsx":
/*!******************************************!*\
  !*** ./src/component/card.component.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\"));\r\nconst styles_1 = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\r\nconst clsx_1 = __importDefault(__webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\"));\r\nconst Card_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\"));\r\nconst CardHeader_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardHeader */ \"./node_modules/@material-ui/core/esm/CardHeader/index.js\"));\r\nconst CardMedia_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardMedia */ \"./node_modules/@material-ui/core/esm/CardMedia/index.js\"));\r\nconst CardContent_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\"));\r\nconst CardActions_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardActions */ \"./node_modules/@material-ui/core/esm/CardActions/index.js\"));\r\nconst Collapse_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Collapse */ \"./node_modules/@material-ui/core/esm/Collapse/index.js\"));\r\nconst IconButton_1 = __importDefault(__webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\"));\r\nconst Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\"));\r\nconst colors_1 = __webpack_require__(/*! @material-ui/core/colors */ \"./node_modules/@material-ui/core/esm/colors/index.js\");\r\nconst ExpandMore_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/ExpandMore */ \"./node_modules/@material-ui/icons/ExpandMore.js\"));\r\nconst MoreVert_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/MoreVert */ \"./node_modules/@material-ui/icons/MoreVert.js\"));\r\nconst buy_component_1 = __importDefault(__webpack_require__(/*! ./buy.component */ \"./src/component/buy.component.tsx\"));\r\nconst chart_component_1 = __importDefault(__webpack_require__(/*! ./chart.component */ \"./src/component/chart.component.tsx\"));\r\nconst useStyles = styles_1.makeStyles((theme) => ({\r\n    root: {\r\n        maxWidth: 365,\r\n    },\r\n    media: {\r\n        height: 0,\r\n        paddingTop: \"46.25%\",\r\n    },\r\n    expand: {\r\n        transform: \"rotate(0deg)\",\r\n        marginLeft: \"auto\",\r\n        transition: theme.transitions.create(\"transform\", {\r\n            duration: theme.transitions.duration.shortest,\r\n        }),\r\n    },\r\n    expandOpen: {\r\n        transform: \"rotate(180deg)\",\r\n    },\r\n    avatar: {\r\n        backgroundColor: colors_1.blue[500],\r\n    },\r\n}));\r\nfunction CardComponent(props) {\r\n    const classes = useStyles();\r\n    const [expanded, setExpanded] = react_1.default.useState(false);\r\n    const price = react_redux_1.useSelector((state) => state.creator.price);\r\n    const total = react_redux_1.useSelector((state) => state.creator.total);\r\n    const dispatch = react_redux_1.useDispatch();\r\n    const handleExpandClick = () => {\r\n        setExpanded(!expanded);\r\n    };\r\n    react_1.useEffect(() => {\r\n        setInterval(() => {\r\n            const newPrice = price + 5 * parseFloat(Math.random().toFixed(2));\r\n            let cardAction = {\r\n                type: \"SET_PRICE\",\r\n                payload: {\r\n                    price: newPrice,\r\n                },\r\n            };\r\n            dispatch(cardAction);\r\n        }, 2000);\r\n    }, []);\r\n    return (react_1.default.createElement(Card_1.default, { className: classes.root },\r\n        react_1.default.createElement(CardHeader_1.default, { action: react_1.default.createElement(IconButton_1.default, { \"aria-label\": \"settings\" },\r\n                react_1.default.createElement(MoreVert_1.default, null)), title: props.title, subheader: \"Bangalore\" }),\r\n        react_1.default.createElement(CardMedia_1.default, { className: classes.media, image: props.image, title: \"Paella dish\" }),\r\n        react_1.default.createElement(CardContent_1.default, null,\r\n            react_1.default.createElement(Typography_1.default, { variant: \"body2\", color: \"textSecondary\", component: \"p\" }, \"The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career.\")),\r\n        react_1.default.createElement(CardContent_1.default, null,\r\n            react_1.default.createElement(\"div\", { className: \"d-flex justify-content-around\" },\r\n                react_1.default.createElement(Typography_1.default, { variant: \"h6\" },\r\n                    \"Price:\",\r\n                    price),\r\n                react_1.default.createElement(Typography_1.default, { variant: \"h6\" },\r\n                    \"Total: \",\r\n                    total))),\r\n        react_1.default.createElement(CardActions_1.default, { disableSpacing: true },\r\n            react_1.default.createElement(buy_component_1.default, { title: props.title }),\r\n            react_1.default.createElement(IconButton_1.default, { className: clsx_1.default(classes.expand, {\r\n                    [classes.expandOpen]: expanded,\r\n                }), onClick: handleExpandClick, \"aria-expanded\": expanded, \"aria-label\": \"show more\" },\r\n                react_1.default.createElement(ExpandMore_1.default, null))),\r\n        react_1.default.createElement(Collapse_1.default, { in: expanded, timeout: \"auto\", unmountOnExit: true },\r\n            react_1.default.createElement(CardContent_1.default, null,\r\n                react_1.default.createElement(chart_component_1.default, { title: props.title })))));\r\n}\r\nexports.default = CardComponent;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/component/card.component.tsx?");

/***/ }),

/***/ "./src/component/cards.component.tsx":
/*!*******************************************!*\
  !*** ./src/component/cards.component.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst core_1 = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\"));\r\nconst card_component_1 = __importDefault(__webpack_require__(/*! ./card.component */ \"./src/component/card.component.tsx\"));\r\nconst rockBand_PNG_1 = __importDefault(__webpack_require__(/*! ../asset/rockBand.PNG */ \"./src/asset/rockBand.PNG\"));\r\nconst led_PNG_1 = __importDefault(__webpack_require__(/*! ../asset/led.PNG */ \"./src/asset/led.PNG\"));\r\nconst bet_PNG_1 = __importDefault(__webpack_require__(/*! ../asset/bet.PNG */ \"./src/asset/bet.PNG\"));\r\nfunction CardsComponent() {\r\n    const [index, setIndex] = react_1.useState(0);\r\n    const items = [\r\n        react_1.default.createElement(card_component_1.default, { title: \"ShamRock\", image: rockBand_PNG_1.default }),\r\n        react_1.default.createElement(card_component_1.default, { title: \"GlamRock\", image: led_PNG_1.default }),\r\n        react_1.default.createElement(card_component_1.default, { title: \"JamRock\", image: bet_PNG_1.default }),\r\n    ];\r\n    const onPrevClick = function () {\r\n        const prvIndex = index - 1;\r\n        setIndex(prvIndex >= 0 ? prvIndex : 0);\r\n    };\r\n    const onNextClick = function () {\r\n        const nexIndex = index + 1;\r\n        setIndex(nexIndex < items.length ? nexIndex : items.length - 1);\r\n    };\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: \"d-flex flex-column\" },\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(core_1.Button, { className: \"flex-grow\", style: { width: \"50%\" }, onClick: onPrevClick }, \"Prev\"),\r\n                react_1.default.createElement(core_1.Button, { className: \"mr-auto\", style: { width: \"50%\" }, onClick: onNextClick }, \"Next\")),\r\n            items[index])));\r\n}\r\nexports.default = CardsComponent;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/component/cards.component.tsx?");

/***/ }),

/***/ "./src/component/chart.component.tsx":
/*!*******************************************!*\
  !*** ./src/component/chart.component.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\"));\r\nconst highcharts_1 = __importDefault(__webpack_require__(/*! highcharts */ \"./node_modules/highcharts/highcharts.js\"));\r\nconst highcharts_react_official_1 = __importDefault(__webpack_require__(/*! highcharts-react-official */ \"./node_modules/highcharts-react-official/dist/highcharts-react.min.js\"));\r\nfunction ChartComponent(props) {\r\n    const options = {\r\n        chart: {\r\n            type: \"spline\",\r\n        },\r\n        title: {\r\n            text: props.title,\r\n        },\r\n        xAxis: {\r\n            type: \"datetime\",\r\n        },\r\n        series: [\r\n            {\r\n                name: \"Coin Value\",\r\n                data: [\r\n                    [Date.UTC(2010, 0, 1), 29.9],\r\n                    [Date.UTC(2010, 2, 1), 71.5],\r\n                    [Date.UTC(2010, 3, 1), 106.4],\r\n                ],\r\n            },\r\n        ],\r\n    };\r\n    return react_1.default.createElement(highcharts_react_official_1.default, { highcharts: highcharts_1.default, options: options });\r\n}\r\nexports.default = ChartComponent;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/component/chart.component.tsx?");

/***/ }),

/***/ "./src/component/header.component.tsx":
/*!********************************************!*\
  !*** ./src/component/header.component.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\r\nconst coin3_PNG_1 = __importDefault(__webpack_require__(/*! ../asset/coin3.PNG */ \"./src/asset/coin3.PNG\"));\r\nconst Header = (props) => {\r\n    const dispatch = react_redux_1.useDispatch();\r\n    const [toggle, setToggle] = react_1.useState(false);\r\n    const onClick = function () {\r\n        setToggle(!toggle);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: \"d-flex\" },\r\n        react_1.default.createElement(\"div\", { className: \"p-2 flex-grow-1 bg-dark\" },\r\n            react_1.default.createElement(\"img\", { src: coin3_PNG_1.default, style: { width: \"40px\", marginRight: \"10px\" } }),\r\n            react_1.default.createElement(react_router_dom_1.Link, { to: \"/\", className: \" text-white navbar-brand\" }, \"Brand Coin\")),\r\n        react_1.default.createElement(\"div\", { className: \"p-2 bg-dark\" },\r\n            react_1.default.createElement(react_router_dom_1.Link, { to: toggle ? \"/\" : \"/order\", className: \" text-white nav-link\", onClick: onClick }, \"Order History\"))));\r\n};\r\nexports.default = Header;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/component/header.component.tsx?");

/***/ }),

/***/ "./src/component/order.component.tsx":
/*!*******************************************!*\
  !*** ./src/component/order.component.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\"));\r\nconst styles_1 = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\r\nconst Table_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\"));\r\nconst TableBody_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\"));\r\nconst TableCell_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\"));\r\nconst TableContainer_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\"));\r\nconst TableHead_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\"));\r\nconst TableRow_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\"));\r\nconst Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\r\nconst useStyles = styles_1.makeStyles({\r\n    table: {\r\n        minWidth: 650,\r\n    },\r\n    tableCellCreated: {\r\n        color: \"orange\",\r\n    },\r\n    tableCellCompleted: {\r\n        color: \"green\",\r\n    },\r\n});\r\nfunction BasicTable() {\r\n    const classes = useStyles();\r\n    const rawRows = react_redux_1.useSelector((state) => state.order.orderDetails);\r\n    function createData(name, calories, fat, carbs, protein) {\r\n        return { name, calories, fat, carbs, protein };\r\n    }\r\n    const rows = rawRows.map((row) => {\r\n        return {\r\n            itemName: row.itemName,\r\n            buyPrice: row.buyPrice,\r\n            buyAmount: row.buyAmount,\r\n            orderStatus: row.orderStatus,\r\n        };\r\n    });\r\n    return (react_1.default.createElement(TableContainer_1.default, { component: Paper_1.default },\r\n        react_1.default.createElement(Table_1.default, { className: classes.table, \"aria-label\": \"simple table\" },\r\n            react_1.default.createElement(TableHead_1.default, null,\r\n                react_1.default.createElement(TableRow_1.default, null,\r\n                    react_1.default.createElement(TableCell_1.default, null, \"Item Name\"),\r\n                    react_1.default.createElement(TableCell_1.default, { align: \"right\" }, \"Buy Price\"),\r\n                    react_1.default.createElement(TableCell_1.default, { align: \"right\" }, \"Buy Amount\"),\r\n                    react_1.default.createElement(TableCell_1.default, { align: \"right\" }, \"Status\"))),\r\n            react_1.default.createElement(TableBody_1.default, null, rows.map((row) => (react_1.default.createElement(TableRow_1.default, { key: row.name },\r\n                react_1.default.createElement(TableCell_1.default, { component: \"th\", scope: \"row\" }, row.itemName),\r\n                react_1.default.createElement(TableCell_1.default, { align: \"right\" }, row.buyPrice),\r\n                react_1.default.createElement(TableCell_1.default, { align: \"right\" }, row.buyAmount),\r\n                react_1.default.createElement(TableCell_1.default, { className: row.orderStatus === \"CREATED\"\r\n                        ? classes.tableCellCreated\r\n                        : classes.tableCellCompleted, align: \"right\" }, row.orderStatus))))))));\r\n}\r\nexports.default = BasicTable;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/component/order.component.tsx?");

/***/ }),

/***/ "./src/helpers/history.tsx":
/*!*********************************!*\
  !*** ./src/helpers/history.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.history = void 0;\r\nconst history_1 = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\r\nexports.history = history_1.createBrowserHistory();\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/helpers/history.tsx?");

/***/ }),

/***/ "./src/rootReducer.tsx":
/*!*****************************!*\
  !*** ./src/rootReducer.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\r\nconst creator_slice_1 = __importDefault(__webpack_require__(/*! ./slices/creator.slice */ \"./src/slices/creator.slice.tsx\"));\r\nconst order_slice_1 = __importDefault(__webpack_require__(/*! ./slices/order.slice */ \"./src/slices/order.slice.tsx\"));\r\nfunction createReducer(intialReducer = {}) {\r\n    const rootReducer = toolkit_1.combineReducers({\r\n        ...intialReducer,\r\n        creator: creator_slice_1.default,\r\n        order: order_slice_1.default,\r\n    });\r\n    return rootReducer;\r\n}\r\nexports.default = createReducer;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/rootReducer.tsx?");

/***/ }),

/***/ "./src/sagas/creator.sagas.tsx":
/*!*************************************!*\
  !*** ./src/sagas/creator.sagas.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setBuyDetailValue = exports.setAmountValue = exports.setTotalValue = exports.setPriceValue = exports.setDetailValue = exports.getTravel = void 0;\r\nconst effects_1 = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\r\nconst creator_slice_1 = __webpack_require__(/*! ../slices/creator.slice */ \"./src/slices/creator.slice.tsx\");\r\nconst request_interface_1 = __importDefault(__webpack_require__(/*! ../api/request.interface */ \"./src/api/request.interface.tsx\"));\r\nconst settings_1 = __webpack_require__(/*! ../settings */ \"./src/settings.tsx\");\r\nfunction* getTravel(CardAction) {\r\n    try {\r\n        let result = yield effects_1.call(() => request_interface_1.default.callAPI({\r\n            url: settings_1.API_URL + \"/getTravel\",\r\n            method: \"POST\",\r\n            data: {\r\n                origin: origin,\r\n                destination: destination,\r\n                travelDate: new Date(travelDate),\r\n            },\r\n        }));\r\n        if (result.status == 200) {\r\n        }\r\n    }\r\n    catch (e) {\r\n        yield effects_1.put({ type: \"TODO_FETCH_FAILED\" });\r\n    }\r\n}\r\nexports.getTravel = getTravel;\r\nfunction* setDetailValue() {\r\n    while (true) {\r\n        const CardAction = yield effects_1.take(\"SET_DETAIL\");\r\n        yield effects_1.put(creator_slice_1.setDetail(CardAction.payload));\r\n    }\r\n}\r\nexports.setDetailValue = setDetailValue;\r\nfunction* setPriceValue() {\r\n    while (true) {\r\n        const CardAction = yield effects_1.take(\"SET_PRICE\");\r\n        yield effects_1.put(creator_slice_1.setPrice(CardAction.payload));\r\n    }\r\n}\r\nexports.setPriceValue = setPriceValue;\r\nfunction* setTotalValue() {\r\n    while (true) {\r\n        const CardAction = yield effects_1.take(\"SET_TOTAL\");\r\n        yield effects_1.put(creator_slice_1.setTotal(CardAction.payload));\r\n    }\r\n}\r\nexports.setTotalValue = setTotalValue;\r\nfunction* setAmountValue() {\r\n    while (true) {\r\n        const CardAction = yield effects_1.take(\"SET_AMOUNT\");\r\n        yield effects_1.put(creator_slice_1.setAmount(CardAction.payload));\r\n    }\r\n}\r\nexports.setAmountValue = setAmountValue;\r\nfunction* setBuyDetailValue() {\r\n    while (true) {\r\n        const CardAction = yield effects_1.take(\"SET_BUY_DETAIL\");\r\n        yield effects_1.put(creator_slice_1.setBuyDetail(CardAction.payload));\r\n    }\r\n}\r\nexports.setBuyDetailValue = setBuyDetailValue;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/sagas/creator.sagas.tsx?");

/***/ }),

/***/ "./src/sagas/order.sagas.tsx":
/*!***********************************!*\
  !*** ./src/sagas/order.sagas.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.updateOrderDetailsValue = exports.addOrderDetailsValue = void 0;\r\nconst effects_1 = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\r\nconst order_slice_1 = __webpack_require__(/*! ../slices/order.slice */ \"./src/slices/order.slice.tsx\");\r\nfunction* addOrderDetailsValue() {\r\n    while (true) {\r\n        const orderAction = yield effects_1.take(\"ADD_ORDER\");\r\n        yield effects_1.put(order_slice_1.addOrderDetails(orderAction.payload));\r\n    }\r\n}\r\nexports.addOrderDetailsValue = addOrderDetailsValue;\r\nfunction* updateOrderDetailsValue() {\r\n    while (true) {\r\n        const orderAction = yield effects_1.take(\"UPDATE_ORDER\");\r\n        yield effects_1.put(order_slice_1.updateOrderDetails(orderAction.payload));\r\n    }\r\n}\r\nexports.updateOrderDetailsValue = updateOrderDetailsValue;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/sagas/order.sagas.tsx?");

/***/ }),

/***/ "./src/sagas/sagas.tsx":
/*!*****************************!*\
  !*** ./src/sagas/sagas.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.publish = void 0;\r\nconst effects_1 = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\r\nconst request_interface_1 = __importDefault(__webpack_require__(/*! ../api/request.interface */ \"./src/api/request.interface.tsx\"));\r\nconst settings_1 = __webpack_require__(/*! ../settings */ \"./src/settings.tsx\");\r\nconst creator_sagas_1 = __webpack_require__(/*! ./creator.sagas */ \"./src/sagas/creator.sagas.tsx\");\r\nconst order_sagas_1 = __webpack_require__(/*! ./order.sagas */ \"./src/sagas/order.sagas.tsx\");\r\nfunction* publish(payload) {\r\n    const { id } = payload.payload;\r\n    try {\r\n        let result = yield effects_1.call(() => request_interface_1.default.callAPI({\r\n            url: settings_1.API_URL +\r\n                \"/publish?message=\" +\r\n                id +\r\n                \"&user=\" +\r\n                localStorage.getItem(\"name\"),\r\n            method: \"GET\",\r\n            data: {},\r\n        }));\r\n        if (\"Success\" === result.data && result.status == 200) {\r\n            console.log(\"published sucesfully\");\r\n        }\r\n    }\r\n    catch (e) {\r\n        yield effects_1.put({ type: \"TODO_FETCH_FAILED\" });\r\n    }\r\n}\r\nexports.publish = publish;\r\nfunction* rootSaga() {\r\n    yield effects_1.all([\r\n        creator_sagas_1.setDetailValue(),\r\n        creator_sagas_1.setAmountValue(),\r\n        creator_sagas_1.setPriceValue(),\r\n        creator_sagas_1.setTotalValue(),\r\n        order_sagas_1.addOrderDetailsValue(),\r\n        order_sagas_1.updateOrderDetailsValue(),\r\n    ]);\r\n}\r\nexports.default = rootSaga;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/sagas/sagas.tsx?");

/***/ }),

/***/ "./src/settings.tsx":
/*!**************************!*\
  !*** ./src/settings.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.AUTH_API_URL = exports.API_URL = void 0;\r\nexports.API_URL = \"https://www.gopaychain.in\";\r\nexports.AUTH_API_URL = \"https://www.gopaychain.in\";\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/settings.tsx?");

/***/ }),

/***/ "./src/slices/creator.slice.tsx":
/*!**************************************!*\
  !*** ./src/slices/creator.slice.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setBuyDetail = exports.setDetail = exports.setTotal = exports.setPrice = exports.setAmount = void 0;\r\nconst toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\r\nlet initialState = {\r\n    price: 70,\r\n    amount: 0,\r\n    total: 0,\r\n    buyPrice: 0,\r\n    buyAmount: 0,\r\n};\r\nconst creatorSlice = toolkit_1.createSlice({\r\n    name: \"creator\",\r\n    initialState,\r\n    reducers: {\r\n        setPrice(state, action) {\r\n            state.price = action.payload.price;\r\n            state.total = parseFloat((action.payload.price * state.amount).toFixed(2));\r\n        },\r\n        setAmount(state, action) {\r\n            state.amount = action.payload.amount;\r\n        },\r\n        setTotal(state, action) {\r\n            state.total = action.payload.total;\r\n        },\r\n        setBuyDetail(state, action) {\r\n            state.buyAmount = action.payload.buyAmount;\r\n            state.buyPrice = action.payload.buyPrice;\r\n        },\r\n        setDetail(state, action) {\r\n            state.price = action.payload.price ? action.payload.price : state.price;\r\n            state.total = action.payload.total ? action.payload.price : state.total;\r\n            state.amount = action.payload.amount\r\n                ? action.payload.amount\r\n                : state.amount;\r\n        },\r\n    },\r\n});\r\n_a = creatorSlice.actions, exports.setAmount = _a.setAmount, exports.setPrice = _a.setPrice, exports.setTotal = _a.setTotal, exports.setDetail = _a.setDetail, exports.setBuyDetail = _a.setBuyDetail;\r\nexports.default = creatorSlice.reducer;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/slices/creator.slice.tsx?");

/***/ }),

/***/ "./src/slices/order.slice.tsx":
/*!************************************!*\
  !*** ./src/slices/order.slice.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.updateOrderDetails = exports.addOrderDetails = void 0;\r\nconst toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\r\nconst orderDetails = [];\r\nlet initialState = {\r\n    orderDetails,\r\n};\r\nconst orderSlice = toolkit_1.createSlice({\r\n    name: \"order\",\r\n    initialState,\r\n    reducers: {\r\n        addOrderDetails(state, action) {\r\n            state.orderDetails.push(action.payload);\r\n        },\r\n        updateOrderDetails(state, action) {\r\n            for (var i = 0, l = state.orderDetails.length; i < l; i++) {\r\n                if (state.orderDetails[i].orderId === action.payload.orderId) {\r\n                    state.orderDetails[i].orderStatus = action.payload.orderStatus;\r\n                    state.orderDetails[i].updateTime = action.payload.updateTime;\r\n                    break;\r\n                }\r\n            }\r\n        },\r\n    },\r\n});\r\n_a = orderSlice.actions, exports.addOrderDetails = _a.addOrderDetails, exports.updateOrderDetails = _a.updateOrderDetails;\r\nexports.default = orderSlice.reducer;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/slices/order.slice.tsx?");

/***/ }),

/***/ "./src/store.tsx":
/*!***********************!*\
  !*** ./src/store.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\r\nconst redux_saga_1 = __importDefault(__webpack_require__(/*! redux-saga */ \"webpack/sharing/consume/default/redux-saga/redux-saga\"));\r\nconst sagas_1 = __importDefault(__webpack_require__(/*! ./sagas/sagas */ \"./src/sagas/sagas.tsx\"));\r\nconst redux_logger_1 = __importDefault(__webpack_require__(/*! redux-logger */ \"./node_modules/redux-logger/dist/redux-logger.js\"));\r\nconst rootReducer_1 = __importDefault(__webpack_require__(/*! ./rootReducer */ \"./src/rootReducer.tsx\"));\r\nconst sagaMiddleware = redux_saga_1.default();\r\nconst middlewares = [sagaMiddleware, redux_logger_1.default];\r\nlet store = toolkit_1.configureStore({\r\n    reducer: rootReducer_1.default({}),\r\n    middleware: [...toolkit_1.getDefaultMiddleware({ thunk: false }), ...middlewares],\r\n});\r\nsagaMiddleware.run(sagas_1.default);\r\nstore.asyncReducers = {};\r\nstore.injectReducer = (key, asyncReducer) => {\r\n    store.asyncReducers[key] = asyncReducer;\r\n    store.replaceReducer(rootReducer_1.default(store.asyncReducers));\r\n};\r\nexports.default = store;\r\n\n\n//# sourceURL=webpack://creator-gopaychain/./src/store.tsx?");

/***/ }),

/***/ "./src/asset/bet.PNG":
/*!***************************!*\
  !*** ./src/asset/bet.PNG ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7ed864b2985ce3618af3.PNG\";\n\n//# sourceURL=webpack://creator-gopaychain/./src/asset/bet.PNG?");

/***/ }),

/***/ "./src/asset/coin3.PNG":
/*!*****************************!*\
  !*** ./src/asset/coin3.PNG ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"895ccde0669b725e4795.PNG\";\n\n//# sourceURL=webpack://creator-gopaychain/./src/asset/coin3.PNG?");

/***/ }),

/***/ "./src/asset/led.PNG":
/*!***************************!*\
  !*** ./src/asset/led.PNG ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d7df6a2cd279263ec3aa.PNG\";\n\n//# sourceURL=webpack://creator-gopaychain/./src/asset/led.PNG?");

/***/ }),

/***/ "./src/asset/rockBand.PNG":
/*!********************************!*\
  !*** ./src/asset/rockBand.PNG ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d5f39a16e43df26e64c6.PNG\";\n\n//# sourceURL=webpack://creator-gopaychain/./src/asset/rockBand.PNG?");

/***/ })

}]);