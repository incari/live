webpackJsonp([1],{"/451":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("dqfa"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("bBkS");var o=function(t){n("LPJ/")},u=n("VU/8")(a.a,r.a,!1,o,null,null);e.default=u.exports},"/AJC":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("lXtq"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("i1ns"),o=n("VU/8")(a.a,r.a,!1,null,null,null);e.default=o.exports},"/QBt":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(n("Dd8w")),a=n("NYxO"),s=o(n("0xDb")),r=o(n("irLX"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={props:["item"],computed:(0,i.default)({},(0,a.mapState)(["disabled","isSick"]),{actions:function(){var t=["discard"];return"food"!==this.item.type&&"drink"!==this.item.type||t.push("consume"),t}}),methods:(0,i.default)({},(0,a.mapMutations)(["removeInventory","increase","getSick","getCured"]),{discard:function(t){this.removeInventory(t.uid)},doAction:function(t){if("consume"===t){var e="food"===this.item.type?"food":"water";this.calculateRisk(this.item.risk)?(console.log("get sick"),r.default.$emit("showModal",{body:"You got sick!"}),this.getSick()):"medicinal-tea"===this.item.id&&(this.isSick&&r.default.$emit("showModal",{body:"You got cured!"}),this.getCured()),this.increase({stat:e,amount:this.item.value})}this.discard(this.item)},calculateRisk:function(t){for(var e=[],n=0;n<10;n++)n<t?e.push(!0):e.push(!1);return e[s.default.randomizeWithinRange(e.length)]}})}},"/o5o":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Aqhm"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("8ZEx");var o=function(t){n("Vctu")},u=n("VU/8")(a.a,r.a,!1,o,null,null);e.default=u.exports},"/p12":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(n("Dd8w")),a=n("NYxO"),s=u(n("M4fF")),r=n("K30H"),o=u(n("tcnj"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={name:"inventory",data:function(){return{order:"asc",key:"id"}},computed:(0,i.default)({},(0,a.mapState)(["inventory"]),{length:function(){return this.inventory.length},maxLength:function(){return r.MAXINVENTORY},orderedList:function(){var t=this.inventory.reduce(function(t,e){var n=(0,i.default)({},e),a=t.find(function(t){return t.id===n.id});return a?a.amount++:(n.amount=1,t.push(n)),t},[]);return s.default.orderBy(t,this.key,this.order)}}),components:{list:o.default}}},"0pd7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("zU9e"),s=(i=a)&&i.__esModule?i:{default:i};e.default={name:"list",props:["list"],components:{consume:s.default}}},"0xDb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("Dd8w"),s=(i=a)&&i.__esModule?i:{default:i};var r={randomizeWithinRange:function(t){return Math.floor(Math.random()*t)},randomizeItems:function(t,e){for(var n=[],i=0;i<e;i++){var a=r.randomizeWithinRange(t.length);n.push((0,s.default)({},t[a]))}return n},generateId:function(){return"_"+Math.random().toString(36).substr(2,9)}};e.default=r},"1ZlX":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("irLX"),s=(i=a)&&i.__esModule?i:{default:i};e.default={data:function(){return{loop:null}},mounted:function(){s.default.$on("gameStatusChange",this.handleGameStatusChange),this.startGameLoop()},beforeDestroy:function(){this.resetGameLoop()},methods:{startGameLoop:function(){},resetGameLoop:function(){clearTimeout(this.loop),this.loop=null},handleGameStatusChange:function(t){t?this.resetGameLoop():this.startGameLoop()}}}},"219g":function(t,e){},"6C7m":function(t,e){},"6n3d":function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\n  Days survived: "+this._s(this.daysSurvived)+"\n")])},staticRenderFns:[]};e.a=i},"8ZEx":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{staticClass:"Modal"},[n("div",{staticClass:"Modal__content"},[n("header",[t._t("header")],2),t._v(" "),n("section",[t._t("body")],2),t._v(" "),n("footer",[t.isCloseable?n("button",{staticClass:"Btn",on:{click:function(e){t.close()}}},[t._v("\n        "+t._s(t.closeText)+"\n      ")]):t._e(),t._v(" "),t._t("actions")],2)])]):t._e()},staticRenderFns:[]};e.a=i},"9r+9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("Dd8w"),s=(i=a)&&i.__esModule?i:{default:i},r=n("NYxO"),o=n("K30H");e.default={data:function(){return{isMenuVisible:!1}},computed:(0,s.default)({},(0,r.mapState)(["inventory"]),{length:function(){return this.inventory.length},maxLength:function(){return o.MAXINVENTORY}}),methods:(0,s.default)({},(0,r.mapMutations)(["changePage"]),{toggleMenu:function(){this.isMenuVisible=!this.isMenuVisible},goTo:function(t){this.changePage({newPage:t}),this.toggleMenu()}})}},Aqhm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{visible:{type:Boolean,required:!0},isCloseable:{type:Boolean,default:!1},closeText:{type:String,default:"Ok"}},methods:{open:function(){this.$emit("update:visible",!0)},close:function(){this.$emit("update:visible",!1)}}}},B3y0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("GppE"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("UQXY"),o=n("VU/8")(a.a,r.a,!1,null,null,null);e.default=o.exports},CYRi:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{isCloseable:!0,visible:t.visible},on:{"update:visible":[function(e){t.visible=e},t.closeModal]}},[n("p",{attrs:{slot:"body"},slot:"body"},[t._v(t._s(t.text))])])},staticRenderFns:[]};e.a=i},Ftlf:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"SectionTitle"},[t._v("Actions")]),t._v(" "),n("modal",{attrs:{visible:t.showResults,isCloseable:!0},on:{"update:visible":function(e){t.showResults=e}}},[n("p",{attrs:{slot:"body"},slot:"body"},[t._v("\n      You got "+t._s(t.lastActionResult)+"\n    ")])]),t._v(" "),n("modal",{attrs:{visible:t.inProgress},on:{"update:visible":function(e){t.inProgress=e}}},[n("p",{staticClass:"progress",attrs:{slot:"body"},slot:"body"},[t._v("\n      "+t._s(t.currentAction)+"\n    ")])]),t._v(" "),t._l(t.actions,function(e){return n("button",{staticClass:"Btn Action",attrs:{type:"button",disabled:t.disabled},on:{click:e.method}},[n("h3",{staticClass:"Action__title"},[t._v("\n      "+t._s(e.name)+"\n    ")]),t._v(" "),n("p",{staticClass:"Action__stats"},[t._v("\n      "+t._s(e.stats)+"\n    ")]),t._v(" "),n("p",{staticClass:"Action__desc"},[t._v("\n      "+t._s(e.description)+"\n    ")])])})],2)},staticRenderFns:[]};e.a=i},GW1v:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("N3hn"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("M1pf"),o=n("VU/8")(a.a,r.a,!1,null,null,null);e.default=o.exports},GppE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(n("Dd8w")),a=n("NYxO"),s=o(n("/AJC")),r=o(n("GW1v"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Fire:s.default,WaterCollector:r.default},computed:(0,i.default)({},(0,a.mapGetters)(["craftableItems"]),{items:function(){return this.craftableItems.filter(function(t){return"camp"===t.type})}})}},"H/9w":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t.hasStarted?n("main-component",{on:{newGame:t.start}}):n("section",{staticClass:"Splash"},[n("h1",[t._v("Live")]),t._v(" "),n("p",[t._v("A game about survival")]),t._v(" "),n("button",{staticClass:"Btn",on:{click:t.start}},[t._v("New Game")])]),t._v(" "),n("footer",{staticClass:"Footer"},[t.hasStarted?n("game-status-button"):t._e(),t._v("\n    Bug report via\n    "),n("a",{attrs:{href:"https://github.com/nuria-fl/live"}},[t._v("Github")]),t._v("\n    or\n    "),n("a",{attrs:{href:"https://twitter.com/pincfloit"}},[t._v("Twitter")]),t._v("\n    ·\n    ☕ "),n("a",{attrs:{href:"https://ko-fi.com/G2G5AV2X"}},[t._v("Buy Me a Coffee")])],1)],1)},staticRenderFns:[]};e.a=i},HbTY:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("article",{staticClass:"Item"},[n("h4",[t._v(t._s(t.item.name))]),t._v(" "),n("p",[t._v("\n      Items needed:\n      "+t._s(t.item.items.join(", "))+"\n    ")]),t._v(" "),n("button",{staticClass:"Btn",attrs:{type:"button",disabled:!t.item.isCraftable||t.disabled},on:{click:t.craft}},[t._v("\n      Craft\n    ")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showFireTip,expression:"showFireTip"}]},[t._v("\n      (You need fire to craft this item)\n    ")])])])},staticRenderFns:[]};e.a=i},Hcch:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"Item"},[n("h4",[t._v(t._s(t.item.name)+" "+t._s(t.item.amount>1?"x"+t.item.amount:""))]),t._v(" "),n("p",[t._v(t._s(t.item.description))]),t._v(" "),n("div",{staticClass:"Item__actions Item__actions--multi"},t._l(t.actions,function(e){return n("button",{staticClass:"Btn",attrs:{disabled:t.disabled},on:{click:function(n){t.doAction(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])}))])},staticRenderFns:[]};e.a=i},Hvfw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("9r+9"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("hxbI");var o=function(t){n("gSsH")},u=n("VU/8")(a.a,r.a,!1,o,null,null);e.default=u.exports},IcnI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(n("7+uW")),a=u(n("NYxO")),s=n("lwq5"),r=u(n("ukYY")),o=u(n("mUbh"));function u(t){return t&&t.__esModule?t:{default:t}}i.default.use(a.default);var c=new a.default.Store({state:s.state,getters:s.getters,mutations:r.default,actions:o.default});e.default=c},JATg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/p12"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("JD2x"),o=n("VU/8")(a.a,r.a,!1,null,null,null);e.default=o.exports},JD2x:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h2",{staticClass:"SectionTitle"},[this._v("Backpack "+this._s(this.length)+"/"+this._s(this.maxLength))]),this._v(" "),e("list",{attrs:{list:this.orderedList}})],1)},staticRenderFns:[]};e.a=i},"JK/a":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[this.gameOver?n("div",{staticClass:"Splash"},[n("h1",[t._v("GAME OVER")]),t._v(" "),n("p",[t._v(t._s(t.deathText))]),t._v(" "),n("p",[t._v("You survived "+t._s(t.daysSurvived)+" days")]),t._v(" "),n("button",{staticClass:"Btn",on:{click:function(e){t.newGame()}}},[t._v("Start over")])]):t._e(),t._v(" "),this.gameOver?t._e():n("div",[n("alert"),t._v(" "),n("header",{staticClass:"Header"},[n("div",{staticClass:"Header__content"},[n("mobile-menu"),t._v(" "),n("stats"),t._v(" "),n("days-counter")],1)]),t._v(" "),n("div",{staticClass:"Main"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileHome,expression:"mobileHome"}],staticClass:"Main__column"},[n("actions")],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileInventory,expression:"mobileInventory"}],staticClass:"Main__column"},[n("inventory")],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileCrafting,expression:"mobileCrafting"}],staticClass:"Main__column"},[n("crafting")],1)])],1)])},staticRenderFns:[]};e.a=i},K30H:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.MAX=100,e.MAXINVENTORY=10},KrHW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(n("Dd8w")),a=n("NYxO"),s=o(n("t/14")),r=o(n("B3y0"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CraftableItem:s.default,CampUpgrades:r.default},computed:(0,i.default)({},(0,a.mapState)(["hasFire","disabled"]),(0,a.mapGetters)(["craftableItems"]),{foodItems:function(){return this.craftableItems.filter(function(t){return"food"===t.type})},drinkItems:function(){return this.craftableItems.filter(function(t){return"drink"===t.type})},tools:function(){return this.craftableItems.filter(function(t){return"tool"===t.type})},weapons:function(){return this.craftableItems.filter(function(t){return"weapon"===t.type})}}),methods:(0,i.default)({},(0,a.mapMutations)(["addInventory","enableFire"]),(0,a.mapActions)(["removeItemsById"]),{craft:function(t){this.removeItemsById(t.items),this.addInventory({item:t})}})}},"LPJ/":function(t,e){},M1pf:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"Item"},[n("h4",[t._v("Water collector")]),t._v(" "),t.hasWaterCollector?t.isCollecting?[t._v("\n    Uses remaining: "+t._s(t.usesRemaining-1)),n("br"),t._v(" "),n("span",{staticClass:"progress"},[t._v("\n      Collecting water\n    ")])]:[t._v("\n    Uses remaining: "+t._s(t.usesRemaining-1)),n("br"),t._v(" "),n("button",{staticClass:"Btn",attrs:{disabled:t.disabled},on:{click:t.drinkWater}},[t._v("\n      Drink water\n    ")])]:[n("p",[t._v("\n      Items needed:\n      "+t._s(t.item.items.join(", "))+"\n      "),n("br"),t._v("\n      Build a water collector to get rain water\n    ")]),t._v(" "),n("div",{staticClass:"Item__actions"},[n("button",{staticClass:"Btn",attrs:{type:"button",disabled:!t.item.isCraftable||t.disabled},on:{click:function(e){t.buildWaterCollector()}}},[t._v("\n        Craft\n      ")])])]],2)},staticRenderFns:[]};e.a=i},M93x:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("xJD8"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("H/9w");var o=function(t){n("6C7m")},u=n("VU/8")(a.a,r.a,!1,o,null,null);e.default=u.exports},N3hn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("Dd8w"),s=(i=a)&&i.__esModule?i:{default:i},r=n("NYxO");e.default={data:function(){return{hasWaterCollector:!1,isCollecting:!1,isReady:!1,usesRemaining:3}},props:{item:{type:Object}},computed:(0,s.default)({},(0,r.mapState)(["disabled"])),methods:(0,s.default)({},(0,r.mapMutations)(["increase","addInventory"]),(0,r.mapActions)(["removeItemsById"]),{buildWaterCollector:function(){this.removeItemsById(this.item.items),this.usesRemaining=3,this.hasWaterCollector=!0,this.startCollecting()},startCollecting:function(){var t=this;this.isCollecting=!0,setTimeout(function(){t.isCollecting=!1},6e4)},drinkWater:function(){this.increase({stat:"water",amount:20}),this.usesRemaining--,0===this.usesRemaining?this.hasWaterCollector=!1:this.startCollecting()}})}},NHnr:function(t,e,n){"use strict";var i=r(n("7+uW")),a=r(n("M93x")),s=r(n("IcnI"));function r(t){return t&&t.__esModule?t:{default:t}}var o,u,c,l,d,f,v,m,h=new i.default(i.default.util.extend({store:s.default},a.default));window._fs_debug=!1,window._fs_host="fullstory.com",window._fs_org="BM5SM",window._fs_namespace="FS",o=window,u=document,c=window._fs_namespace,l="script",d="user",c in o?o.console&&o.console.log&&o.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'):((v=o[c]=function(t,e){v.q?v.q.push([t,e]):v._api(t,e)}).q=[],(f=u.createElement(l)).async=1,f.src="https://"+_fs_host+"/s/fs.js",(m=u.getElementsByTagName(l)[0]).parentNode.insertBefore(f,m),v.identify=function(t,e){v(d,{uid:t}),e&&v(d,e)},v.setUserVars=function(t){v(d,t)},m="rec",v.shutdown=function(t,e){v(m,!1)},v.restart=function(t,e){v(m,!0)},v[m="consent"]=function(t){v(m,!arguments.length||t)},v.identifyAccount=function(t,e){f="account",(e=e||{}).acctId=t,v(f,e)},v.clearUserCookie=function(){}),h.$mount("#app")},O4Ep:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("d4kc"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("Ftlf");var o=function(t){n("ieXs")},u=n("VU/8")(a.a,r.a,!1,o,null,null);e.default=u.exports},OdHo:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("Dd8w"),s=(i=a)&&i.__esModule?i:{default:i},r=n("NYxO");e.default={name:"consume",props:["item"],computed:(0,s.default)({},(0,r.mapState)(["hasFire","disabled"]),{showFireTip:function(){return"fire"===this.item.condition&&!this.hasFire}}),methods:{craft:function(){this.$emit("craft",this.item)}}}},UQXY:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"SectionTitle"},[t._v("Camp upgrades")]),t._v(" "),n("ul",t._l(t.items,function(e){return n("li",["fire"===e.id?n("fire",{attrs:{item:e}}):t._e(),t._v(" "),"water-collector"===e.id?n("water-collector",{attrs:{item:e}}):t._e()],1)}))])},staticRenderFns:[]};e.a=i},"UvP+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=f(n("Dd8w")),a=n("NYxO"),s=f(n("Z/1V")),r=f(n("Hvfw")),o=f(n("dY3R")),u=f(n("yL53")),c=f(n("O4Ep")),l=f(n("rA5C")),d=f(n("JATg"));function f(t){return t&&t.__esModule?t:{default:t}}e.default={name:"mainElement",data:function(){return{navMenu:["Actions","Inventory","Crafting"],isMobile:!0}},components:{Alert:u.default,Actions:c.default,Crafting:l.default,Inventory:d.default,DaysCounter:s.default,MobileMenu:r.default,Stats:o.default},mounted:function(){var t=document.querySelector("body").getBoundingClientRect();this.isMobile=t.width<=680,this.initInventory()},computed:(0,i.default)({},(0,a.mapState)(["disabled","gameOver","daysSurvived","currentPage","causeOfDeath"]),{mobileHome:function(){return!1===this.isMobile||this.isMobile&&"home"===this.currentPage},mobileInventory:function(){return!1===this.isMobile||this.isMobile&&"inventory"===this.currentPage},mobileCrafting:function(){return!1===this.isMobile||this.isMobile&&"crafting"===this.currentPage},deathText:function(){switch(this.causeOfDeath){case"sleep":return"You died from exhaustion. Remember, sleeping is important, even in the wild.";case"water":return"You died of thirst. A water collector could have saved your life.";case"food":return"You died of hunger. A sturdy weapon would have provided you with a steady food supply.";case"health":return"You died of sickness. Skip the paleo diet, cooking your food is important."}}}),methods:(0,i.default)({},(0,a.mapActions)(["initInventory"]),{newGame:function(){window.location.reload()}})}},"V+of":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("camp-upgrades"),t._v(" "),n("h2",{staticClass:"SectionTitle"},[t._v("Food and water")]),t._v(" "),n("ul",[t._l(t.foodItems,function(e){return n("craftable-item",{key:e.id,attrs:{item:e},on:{craft:t.craft}})}),t._v(" "),t._l(t.drinkItems,function(e){return n("craftable-item",{key:e.id,attrs:{item:e},on:{craft:t.craft}})})],2),t._v(" "),n("h2",{staticClass:"SectionTitle"},[t._v("Tools")]),t._v(" "),n("ul",t._l(t.tools,function(e){return n("craftable-item",{key:e.id,attrs:{item:e},on:{craft:t.craft}})})),t._v(" "),n("h2",{staticClass:"SectionTitle"},[t._v("Weapons")]),t._v(" "),n("ul",t._l(t.weapons,function(e){return n("craftable-item",{key:e.id,attrs:{item:e},on:{craft:t.craft}})}))],1)},staticRenderFns:[]};e.a=i},VZrM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("UvP+"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("JK/a");var o=function(t){n("xm5c")},u=n("VU/8")(a.a,r.a,!1,o,null,null);e.default=u.exports},Vctu:function(t,e){},Woqv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("Dd8w")),a=n("NYxO"),s=r(n("1ZlX"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{icons:{health:"❤️",water:"💧",food:"🍗",sleep:"⚡"}}},mixins:[s.default],computed:(0,i.default)({},(0,a.mapState)(["stats","gameOver","isSick"]),{isActive:function(){return!1===this.gameOver}}),methods:(0,i.default)({},(0,a.mapMutations)(["decrease"]),{startGameLoop:function(){this.decreaseStats()},decreaseStats:function(){var t=this;this.loop=setTimeout(function(){t.isActive&&(t.decrease({stat:"water",amount:3}),t.decrease({stat:"food",amount:2}),t.decrease({stat:"sleep",amount:2}),t.isSick&&t.decrease({stat:"health",amount:2}),t.decreaseStats())},12e3)}})}},"Z/1V":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("vO53"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("6n3d"),o=n("VU/8")(a.a,r.a,!1,null,null,null);e.default=o.exports},bBkS:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"GameStatusButton",on:{click:this.toggleStatus}},[e("img",{attrs:{src:"./static/"+this.iconName+".svg",alt:this.iconName}})])},staticRenderFns:[]};e.a=i},cjNI:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"Stats"},t._l(t.stats,function(e,i){return n("li",{staticClass:"Stats__item"},[n("span",{staticClass:"Stats__icon"},[t._v(t._s(t.icons[i]))]),t._v(" "),n("strong",{class:{warning:e<50,danger:e<20}},[t._v("\n      "+t._s(e)+"\n    ")])])}))},staticRenderFns:[]};e.a=i},d4kc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(n("Dd8w")),a=n("NYxO"),s=o(n("/o5o")),r=o(n("irLX"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:"actions",data:function(){return{lastActionResult:"",currentAction:null,inProgress:!1,showResults:!1,actions:[{name:"Sleep",description:"Rest to replenish your energy",stats:"+35 energy",method:this.sleep},{name:"Hunt",description:"Hunt for food and fur to craft equipment",stats:"-10 energy, -10 water. -6 food",method:this.goHunt},{name:"Scavenge",description:"Find useful items to survive",stats:"-5 energy, -5 water. -3 food",method:this.goScavenge}]}},computed:(0,i.default)({},(0,a.mapState)(["disabled","gameOver","inventory"]),(0,a.mapGetters)(["isInventoryFull","slotsInInventoryLeft"])),methods:(0,i.default)({},(0,a.mapActions)(["increaseAsync","hunt","scavenge"]),{handleFullInventory:function(){r.default.$emit("showModal",{body:"Your inventory is full. Remove at least one item to proceed."})},sleep:function(){var t=this;this.startProgress("Sleeping"),this.increaseAsync({stat:"sleep",amount:35,time:5e3}).then(function(){t.handleResult()}).catch(function(){console.error("oops")})},goHunt:function(){var t=this;this.isInventoryFull?this.handleFullInventory():this.inventory.filter(function(t){return"weapon"===t.type}).length>0?(this.startProgress("Hunting"),this.lastActionResult="",this.hunt({time:8e3}).then(function(e){t.handleResult(e)})):r.default.$emit("showModal",{body:"You need to craft a weapon first"})},goScavenge:function(){var t=this;this.isInventoryFull?this.handleFullInventory():(this.startProgress("Scavenging"),this.lastActionResult="",this.scavenge({time:3e3}).then(function(e){t.handleResult(e)}))},handleResult:function(t){if(this.endProgress(),t){var e=[];t.forEach(function(t){e.push(t.name)}),this.showResults=!0,this.lastActionResult=e.join(", ")}},startProgress:function(t){this.currentAction=t,this.inProgress=!0},endProgress:function(){this.currentAction=null,this.inProgress=!1}}),components:{modal:s.default}}},dY3R:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Woqv"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("cjNI");var o=function(t){n("mCG8")},u=n("VU/8")(a.a,r.a,!1,o,null,null);e.default=u.exports},dqfa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("Dd8w")),a=n("NYxO"),s=r(n("irLX"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={mounted:function(){document.addEventListener("visibilitychange",this.handleVisibilityChange)},beforeDestroy:function(){document.removeEventListener("visibilitychange",this.handleVisibilityChange)},computed:(0,i.default)({},(0,a.mapState)(["paused"]),{iconName:function(){return this.paused?"play":"pause"}}),methods:(0,i.default)({},(0,a.mapMutations)(["pauseGame","playGame"]),{notifyApp:function(){s.default.$emit("gameStatusChange",this.paused)},toggleStatus:function(){this.paused?this.playGame():this.pauseGame(),this.notifyApp()},handleVisibilityChange:function(){"hidden"===document.visibilityState?this.pauseGame():"visible"===document.visibilityState&&this.playGame(),this.notifyApp()}})}},ftWB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{id:"meat-cooked",type:"food",name:"Cooked meat",items:["meat"],value:20,risk:0},{id:"water-clean",type:"drink",name:"Clean water",items:["water-dirty"],value:20,risk:0}]},"gSR+":function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"List"},this._l(this.list,function(t){return e("li",[e("consume",{attrs:{item:t}})],1)}))},staticRenderFns:[]};e.a=i},gSsH:function(t,e){},hxbI:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Menu"},[n("div",{staticClass:"Btn Menu__toggle",on:{click:t.toggleMenu}},[n("span")]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isMenuVisible,expression:"isMenuVisible"}],staticClass:"Menu__dropdown"},[n("li",{on:{click:function(e){t.goTo("home")}}},[t._v("\n      Actions\n    ")]),t._v(" "),n("li",{on:{click:function(e){t.goTo("inventory")}}},[t._v("\n      Backpack ("+t._s(t.length)+"/"+t._s(t.maxLength)+")\n    ")]),t._v(" "),n("li",{on:{click:function(e){t.goTo("crafting")}}},[t._v("\n      Crafting\n    ")])])])},staticRenderFns:[]};e.a=i},i1ns:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"Item"},[n("h4",[t._v("Fire")]),t._v(" "),t.hasFire?n("div",[n("p",[t._v(t._s(t.statusMessage))]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.fireStatus>0,expression:"fireStatus > 0"}],staticClass:"Btn",attrs:{type:"button",disabled:!t.hasWood||t.disabled},on:{click:function(e){t.rekindle()}}},[t._v("\n      Add more wood\n    ")])]):[n("p",[t._v("\n      Items needed:\n      "+t._s(t.item.items.join(", "))+"\n      "),n("br"),t._v("\n      Start a fire to cook items\n    ")]),t._v(" "),n("button",{staticClass:"Btn",attrs:{type:"button",disabled:!t.item.isCraftable||t.disabled},on:{click:function(e){t.startFire()}}},[t._v("\n      Craft\n    ")])]],2)},staticRenderFns:[]};e.a=i},ieXs:function(t,e){},irLX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("7+uW");var s=new((i=a)&&i.__esModule?i:{default:i}).default;e.default=s},kHbX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{type:"food",id:"berries",name:"Berries",value:5,risk:0,action:"scavenge"},{type:"food",id:"meat",name:"Raw meat",value:20,risk:6,action:"hunt"},{type:"drink",id:"water-dirty",name:"Dirty Water",value:20,risk:6,action:"scavenge"},{type:"junk",id:"salt",name:"Salt",action:"scavenge"},{type:"junk",id:"string",name:"String",action:"scavenge"},{type:"junk",id:"wood",name:"Wood",action:"scavenge"},{type:"junk",id:"plastic",name:"Plastic",action:"scavenge"},{type:"junk",id:"bottle",name:"Empty bottle",action:"scavenge"},{type:"junk",id:"flint",name:"Flint",action:"scavenge"},{type:"junk",id:"medicinal-herbs",name:"Medicinal herbs",action:"scavenge"}]},lXtq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("Dd8w")),a=n("NYxO"),s=r(n("irLX"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{fireStatus:0,fireInterval:null}},props:{item:{type:Object,required:!0}},computed:(0,i.default)({},(0,a.mapState)(["hasFire","disabled","inventory"]),{hasWood:function(){return!!this.inventory.find(function(t){return"wood"===t.id})},statusMessage:function(){switch(this.fireStatus){case 0:return"Fire is burning hot";case 1:return"Fire is burning";case 2:return"Fire is burning low"}}}),methods:(0,i.default)({},(0,a.mapMutations)(["enableFire","disableFire"]),(0,a.mapActions)(["removeItemsById"]),{startFire:function(){this.removeItemsById(this.item.items),this.enableFire(),this.startFireInterval()},startFireInterval:function(){var t=this;this.fireInterval=setInterval(function(){t.fireStatus++,3===t.fireStatus&&t.resetFire()},6e4)},resetFire:function(){clearInterval(this.fireInterval),s.default.$emit("showModal",{body:"Fire has burnt out!"}),this.disableFire(),this.fireStatus=0},rekindle:function(){this.removeItemsById(["wood"]),this.fireStatus=0,clearInterval(this.fireInterval),this.startFireInterval()}})}},lwq5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getters=e.state=void 0;var i=c(n("Dd8w")),a=c(n("Gu7T")),s=n("K30H"),r=c(n("kHbX")),o=c(n("tG6q")),u=c(n("ftWB"));function c(t){return t&&t.__esModule?t:{default:t}}var l={gameOver:!1,causeOfDeath:null,paused:!1,disabled:!1,stats:{health:s.MAX,water:s.MAX,food:s.MAX,sleep:s.MAX},existingItems:r.default,inventory:[],hasFire:!1,isSick:!1,daysSurvived:0,currentPage:"home"},d={isInventoryFull:function(){return l.inventory.length===s.MAXINVENTORY},slotsInInventoryLeft:function(){return s.MAXINVENTORY-l.inventory.length},craftableItems:function(){return u.default.forEach(function(t){t.condition="fire"}),[].concat((0,a.default)(o.default),(0,a.default)(u.default)).map(function(t){var e=(0,i.default)({},t),n=[],a=l.inventory.map(function(t){return t.id});return e.items.forEach(function(t){var i=a.indexOf(t);-1!==i?(a.splice(i,1),n.push(t)):e.isCraftable=!1}),n.length===e.items.length&&(e.isCraftable=!0,"fire"!==e.condition||l.hasFire||(e.isCraftable=!1)),e})}};e.state=l,e.getters=d},mCG8:function(t,e){},mUbh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(n("//Fk")),a=s(n("0xDb"));function s(t){return t&&t.__esModule?t:{default:t}}e.default={initInventory:function(t){var e=t.state,n=t.commit;a.default.randomizeItems(e.existingItems,2).forEach(function(t){return n("addInventory",{item:t})})},decreaseAsync:function(t,e){var n=t.state,a=t.commit,s=e.stat,r=e.amount,o=e.time;return new i.default(function(t,e){a("disable"),n.gameOver?e(new Error("game is over")):setTimeout(function(){a("enable"),a("decrease",{stat:s,amount:r}),t()},o)})},increaseAsync:function(t,e){var n=t.state,a=t.commit,s=e.stat,r=e.amount,o=e.time;return new i.default(function(t,e){a("disable"),n.gameOver?e(new Error("game is over")):setTimeout(function(){a("enable"),a("increase",{stat:s,amount:r}),t()},o)})},scavenge:function(t,e){var n=t.state,s=t.getters,r=t.commit,o=e.time;return new i.default(function(t,e){r("disable"),n.gameOver?e(new Error("game is over")):setTimeout(function(){var e=n.existingItems.filter(function(t){return"scavenge"===t.action}),i=s.slotsInInventoryLeft>3?3:s.slotsInInventoryLeft,o=a.default.randomizeItems(e,i);o.forEach(function(t){r("addInventory",{item:t})}),r("decrease",{stat:"sleep",amount:5}),r("decrease",{stat:"water",amount:5}),r("decrease",{stat:"sleep",amount:3}),r("enable"),t(o)},o)})},hunt:function(t,e){var n=t.state,s=t.commit,r=e.time;return new i.default(function(t,e){s("disable"),n.gameOver?e(new Error("game is over")):setTimeout(function(){var e=n.existingItems.filter(function(t){return"hunt"===t.action}),i=a.default.randomizeItems(e,1);i.forEach(function(t){s("addInventory",{item:t})}),s("decrease",{stat:"sleep",amount:10}),s("decrease",{stat:"water",amount:10}),s("decrease",{stat:"sleep",amount:6}),s("enable"),t(i)},r)})},removeItemsById:function(t,e){var n=t.state,i=t.commit;e.forEach(function(t){var e,a=(e=t,n.inventory.find(function(t){return t.id===e}));i("removeInventory",a.uid)})}}},"pmm/":function(t,e){},rA5C:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("KrHW"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("V+of"),o=n("VU/8")(a.a,r.a,!1,null,null,null);e.default=o.exports},shTL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={trackEvent:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(window.ga)window.gtag("event",e,{event_category:t,event_label:n,value:i});else if(console.info("[TRACKER] send","event",t,e,n,i),void 0!==i&&isNaN(i))throw Error("If defined, event value must be an integer")}}},"t/14":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("OdHo"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("HbTY"),o=n("VU/8")(a.a,r.a,!1,null,null,null);e.default=o.exports},tG6q:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{id:"fire",type:"camp",name:"Fire",items:["wood","flint"]},{id:"rope",type:"tool",name:"Rope",items:["string","string"]},{id:"bow",type:"weapon",name:"Bow",items:["string","wood"]},{id:"water-collector",type:"camp",name:"Water collector",items:["plastic","rope","bottle"]},{id:"jerky",type:"food",name:"Jerky",items:["meat","salt"],value:20,risk:0},{id:"medicinal-tea",type:"drink",name:"Medicinal tea",items:["water-clean","medicinal-herbs"],value:20,risk:0}]},tcnj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("0pd7"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("gSR+"),o=n("VU/8")(a.a,r.a,!1,null,null,null);e.default=o.exports},ukYY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("K30H"),a=r(n("0xDb")),s=r(n("shTL"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={pauseGame:function(t){t.paused=!0,t.disabled=!0},playGame:function(t){t.paused=!1,t.disabled=!1},changePage:function(t,e){var n=e.newPage;t.currentPage=n},increaseDayCount:function(t){t.daysSurvived++},decrease:function(t,e){var n=e.stat,i=e.amount;t.stats[n]=t.stats[n]-i,t.stats[n]<=0&&(s.default.trackEvent("game","game-over",n,t.daysSurvived),t.gameOver=!0,t.causeOfDeath=n,t.disabled=!0)},increase:function(t,e){var n=e.stat,a=e.amount;t.stats[n]=t.stats[n]+a,t.stats[n]>i.MAX&&(t.stats[n]=i.MAX)},addInventory:function(t,e){var n=e.item;t.inventory.length<i.MAXINVENTORY&&(n.uid=a.default.generateId(),t.inventory.push(n))},removeInventory:function(t,e){var n=function(t,e){return e.findIndex(function(e){return e.uid===t})}(e,t.inventory);-1!==n&&t.inventory.splice(n,1)},disable:function(t){t.disabled=!0},enable:function(t){t.disabled=!1},enableFire:function(t){t.hasFire=!0},disableFire:function(t){t.hasFire=!1},getSick:function(t){t.isSick=!0},getCured:function(t){t.isSick=!1,t.stats.health=i.MAX}}},vO53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("Dd8w")),a=n("NYxO"),s=r(n("1ZlX"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[s.default],computed:(0,i.default)({},(0,a.mapState)(["gameOver","daysSurvived"]),{isActive:function(){return!1===this.gameOver}}),methods:(0,i.default)({},(0,a.mapMutations)(["increaseDayCount"]),{startGameLoop:function(){this.startDayTimer()},startDayTimer:function(){var t=this;this.loop=setTimeout(function(){t.isActive&&(t.increaseDayCount(),t.startDayTimer())},6e4)}})}},xJD8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("VZrM")),a=r(n("/451")),s=r(n("shTL"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{hasStarted:!1}},components:{MainComponent:i.default,GameStatusButton:a.default},methods:{start:function(){s.default.trackEvent("game","start"),this.hasStarted=!0}}}},xm5c:function(t,e){},yL53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("zvUr"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("CYRi");var o=function(t){n("219g")},u=n("VU/8")(a.a,r.a,!1,o,null,null);e.default=u.exports},zU9e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/QBt"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("Hcch");var o=function(t){n("pmm/")},u=n("VU/8")(a.a,r.a,!1,o,null,null);e.default=u.exports},zvUr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(n("/o5o")),a=s(n("irLX"));function s(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{visible:!1,text:""}},components:{Modal:i.default},mounted:function(){a.default.$on("showModal",this.showModal)},methods:{showModal:function(t){this.visible=!0,this.text=t.body},closeModal:function(){this.text=""}}}}},["NHnr"]);
//# sourceMappingURL=app.d7eb48212c6813f24106.js.map