(this["webpackJsonpreact-realtime-chart"]=this["webpackJsonpreact-realtime-chart"]||[]).push([[0],{11:function(e,t,r){e.exports={"react-vis-magic-css-import-rule":"styles_react-vis-magic-css-import-rule__2iO81","rv-treemap":"styles_rv-treemap__11VV5","rv-treemap__leaf":"styles_rv-treemap__leaf__3wN3e","rv-treemap__leaf--circle":"styles_rv-treemap__leaf--circle__2Ncda","rv-treemap__leaf__content":"styles_rv-treemap__leaf__content__o1_7W","rv-xy-plot":"styles_rv-xy-plot__1GQO3","rv-xy-canvas":"styles_rv-xy-canvas__Zxb7Z","rv-xy-plot__inner":"styles_rv-xy-plot__inner__27HVk","rv-xy-plot__axis__line":"styles_rv-xy-plot__axis__line__3UdpY","rv-xy-plot__axis__tick__line":"styles_rv-xy-plot__axis__tick__line__327Jc","rv-xy-plot__axis__tick__text":"styles_rv-xy-plot__axis__tick__text__2MAZX","rv-xy-plot__axis__title":"styles_rv-xy-plot__axis__title__15rnz","rv-xy-plot__grid-lines__line":"styles_rv-xy-plot__grid-lines__line__1rAsK","rv-xy-plot__circular-grid-lines__line":"styles_rv-xy-plot__circular-grid-lines__line__uKVHY","rv-xy-plot__series":"styles_rv-xy-plot__series__2gdSc","rv-xy-plot__series--line":"styles_rv-xy-plot__series--line__3Jm0J","rv-crosshair":"styles_rv-crosshair__33HYi","rv-crosshair__line":"styles_rv-crosshair__line__17sK4","rv-crosshair__inner":"styles_rv-crosshair__inner__1x2_b","rv-crosshair__inner__content":"styles_rv-crosshair__inner__content__5FYnM","rv-crosshair__inner--left":"styles_rv-crosshair__inner--left__1cXwt","rv-crosshair__inner--right":"styles_rv-crosshair__inner--right__1_KQI","rv-crosshair__title":"styles_rv-crosshair__title__2KJg0","rv-crosshair__item":"styles_rv-crosshair__item__1awPb","rv-hint":"styles_rv-hint__4eULC","rv-hint__content":"styles_rv-hint__content__1CX9D","rv-discrete-color-legend":"styles_rv-discrete-color-legend__21Fb1",horizontal:"styles_horizontal__LNLMH","rv-discrete-color-legend-item":"styles_rv-discrete-color-legend-item__2ECNb","rv-discrete-color-legend-item__title":"styles_rv-discrete-color-legend-item__title__12L5A","rv-discrete-color-legend-item__color":"styles_rv-discrete-color-legend-item__color__ga7tH","rv-discrete-color-legend-item__color__path":"styles_rv-discrete-color-legend-item__color__path__1znuv",disabled:"styles_disabled__2JGRC",clickable:"styles_clickable__38niY","rv-search-wrapper":"styles_rv-search-wrapper__2osT_","rv-search-wrapper__form":"styles_rv-search-wrapper__form__1hg19","rv-search-wrapper__form__input":"styles_rv-search-wrapper__form__input__BD_In","rv-search-wrapper__contents":"styles_rv-search-wrapper__contents__3CfzX","rv-continuous-color-legend":"styles_rv-continuous-color-legend__3ntQd","rv-gradient":"styles_rv-gradient__KLACI","rv-continuous-size-legend":"styles_rv-continuous-size-legend__1me6I","rv-bubbles":"styles_rv-bubbles__2Xugv","rv-bubble":"styles_rv-bubble__31PFh","rv-spacer":"styles_rv-spacer__1pl0z","rv-legend-titles":"styles_rv-legend-titles__kvxph","rv-legend-titles__left":"styles_rv-legend-titles__left__lky1O","rv-legend-titles__right":"styles_rv-legend-titles__right__25Bgs","rv-legend-titles__center":"styles_rv-legend-titles__center__1D5uR","rv-radial-chart":"styles_rv-radial-chart__4cntE","rv-xy-plot__series--label":"styles_rv-xy-plot__series--label__1IgEA",main_chart_container:"styles_main_chart_container__1RTOC",chart_header:"styles_chart_header__cwsKU",left_container:"styles_left_container__2oa9E",currency_value:"styles_currency_value__OOVDq",custoom_tooltip:"styles_custoom_tooltip__2p4Uz",tooltip_label:"styles_tooltip_label__11Src",tooltip_id:"styles_tooltip_id__231TS",tooltip_value:"styles_tooltip_value__2Kwpl"}},169:function(e,t,r){e.exports=r(355)},174:function(e,t,r){},355:function(e,t,r){"use strict";r.r(t);var _=r(1),a=r.n(_),l=r(49),s=r.n(l),n=(r(174),r(139)),i=r(140),o=r(11),c=r.n(o),v=r(18),p=function(e){var t=e.active,r=e.payload,_=e.label;return t?a.a.createElement("div",{className:c.a.custoom_tooltip},a.a.createElement("div",{className:c.a.tooltip_label},_),a.a.createElement("p",{className:c.a.tooltip_id},r[0].payload.id),a.a.createElement("p",{className:c.a.tooltip_value},r[0].payload.Price)):null},y={width:"90%",marginLeft:"auto",marginRight:"auto"};var d=function(e){var t=e.data[e.data.length-1];return t?a.a.createElement("div",{className:c.a.main_chart_container,style:y},a.a.createElement("div",{className:c.a.chart_header},a.a.createElement("div",{className:c.a.left_container},a.a.createElement("p",{className:c.a.currency_name},e.currency),a.a.createElement("p",{className:c.a.currency_value},t.Price))),a.a.createElement(v.d,{width:"100%",height:"90%"},a.a.createElement(v.b,{data:e.data,margin:{top:10,right:20,left:20,bottom:30}},a.a.createElement("defs",null,a.a.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},a.a.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),a.a.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0}))),a.a.createElement(v.c,{strokeDasharray:"2 2"}),a.a.createElement(v.f,{dataKey:"name"}),a.a.createElement(v.g,{type:"number",domain:["dataMin - 0.1","dataMax + 0.1"],orientation:"right"}),a.a.createElement(v.e,{content:a.a.createElement(p,null)}),a.a.createElement(v.a,{type:"monotone",dataKey:"Price",stroke:"#8884d8",fill:"url(#colorUv)",fillOpacity:1,legendType:"circle",dot:!0})))):a.a.createElement("h1",{style:{textAlign:"center"}},"Loading ...")},m=r(79),h=r.n(m);var u=function(){var e=Object(_.useState)([]),t=Object(i.a)(e,2),r=t[0],l=t[1];return Object(_.useEffect)((function(){var e=new WebSocket("wss://ws-feed.pro.coinbase.com");e.onopen=function(t){e.send(JSON.stringify({type:"subscribe",channels:[{name:"ticker",product_ids:["ETH-EUR"]}]}))},e.onmessage=function(e){var t=JSON.parse(e.data);if("ticker"==t.type){var r=parseFloat(t.price).toFixed(3),_=t.product_id,a=new Date;l((function(e){return[].concat(Object(n.a)(e),[{name:a.toDateString()+" "+a.toLocaleTimeString(),Price:r,id:_}])}))}},e.onerror=function(e){console.log(e)},e.onclose=function(e){console.log(e)}}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:h.a.app_header,style:{alignItems:"center"}},a.a.createElement("h1",null,"RealTime Crypto Chart")),a.a.createElement("div",{className:h.a.chart_container},a.a.createElement(d,{data:r,currency:"ETH-EUR"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,r){e.exports={app_header:"styles_app_header__3mbHn",chart_container:"styles_chart_container__22SJl"}}},[[169,1,2]]]);
//# sourceMappingURL=main.ff9dddbe.chunk.js.map