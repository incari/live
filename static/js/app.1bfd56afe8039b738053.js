webpackJsonp([1],{"/QBt":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(n("Dd8w")),r=n("NYxO"),a=s(n("0xDb"));function s(t){return t&&t.__esModule?t:{default:t}}e.default={props:["item"],computed:(0,i.default)({},(0,r.mapState)(["disabled","isSick"]),{actions:function(){var t=["discard"];return"food"!==this.item.type&&"drink"!==this.item.type||t.unshift("consume"),t}}),methods:(0,i.default)({},(0,r.mapMutations)(["removeInventory","increase","getSick","getCured"]),{discard:function(t){this.removeInventory({item:t.id})},doAction:function(t){if("consume"===t){var e="food"===this.item.type?"food":"water";this.calculateRisk(this.item.risk)?(alert("you got sick!"),this.getSick()):"medicinal-tea"===this.item.id&&(this.isSick&&alert("you got cured!"),this.getCured()),this.increase({stat:e,amount:this.item.value})}this.discard(this.item)},calculateRisk:function(t){for(var e=[],n=0;n<10;n++)n<t?e.push(!0):e.push(!1);return e[a.default.randomizeWithinRange(e.length)]}})}},"/o5o":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Aqhm"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("4A8X"),o=n("VU/8")(r.a,s.a,!1,null,null,null);e.default=o.exports},"/p12":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(n("Dd8w")),r=n("NYxO"),a=u(n("M4fF")),s=n("K30H"),o=u(n("tcnj"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={name:"inventory",data:function(){return{order:"asc",key:"dateAdded"}},computed:(0,i.default)({},(0,r.mapState)(["inventory"]),{length:function(){return this.inventory.length},maxLength:function(){return s.MAXINVENTORY},orderedList:function(){return a.default.orderBy(this.inventory,this.key,this.order)}}),components:{list:o.default}}},"0pd7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=n("zU9e"),a=(i=r)&&i.__esModule?i:{default:i};e.default={name:"list",props:["list"],components:{consume:a.default}}},"0xDb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={randomizeWithinRange:function(t){return Math.floor(Math.random()*t)},randomizeItems:function(t,e){for(var n=[],r=0;r<e;r++){var a=i.randomizeWithinRange(t.length);n.push(t[a])}return n}};e.default=i},"4A8X":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",[n("div",[n("header",[t._t("header")],2),t._v(" "),n("section",[t._t("body")],2),t._v(" "),n("footer",[t.isCloseable?n("button",{attrs:{type:"button"},on:{click:function(e){t.close()}}},[t._v("\n        "+t._s(t.closeText)+"\n      ")]):t._e(),t._v(" "),t._t("actions")],2)])]):t._e()},staticRenderFns:[]};e.a=i},Aqhm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modal",data:function(){return{visible:!1}},props:{isCloseable:{type:Boolean,default:!1},closeText:{type:String,default:"Ok"}},methods:{open:function(){this.visible=!0,this.isCloseable||setTimeout(this.close,3e3)},close:function(){this.visible=!1}}}},CfIO:function(t,e){},G00X:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("\n  "+t._s(t.item.name)+"\n  "),n("div",[t._v("\n    Items needed:\n    "+t._s(t.item.items.join(", "))+"\n  ")]),t._v(" "),n("button",{attrs:{type:"button",disabled:!t.item.isCraftable||t.disabled},on:{click:t.craft}},[t._v("\n    Craft\n  ")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showFireTip,expression:"showFireTip"}]},[t._v("\n    (You need fire to craft this item)\n  ")])])},staticRenderFns:[]};e.a=i},GW1v:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("N3hn"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("zN0Z"),o=n("VU/8")(r.a,s.a,!1,null,null,null);e.default=o.exports},IcnI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(n("7+uW")),r=u(n("NYxO")),a=n("lwq5"),s=u(n("ukYY")),o=u(n("mUbh"));function u(t){return t&&t.__esModule?t:{default:t}}i.default.use(r.default);var c=new r.default.Store({state:a.state,getters:a.getters,mutations:s.default,actions:o.default});e.default=c},JATg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/p12"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("dz8p"),o=n("VU/8")(r.a,s.a,!1,null,null,null);e.default=o.exports},K30H:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.MAX=100,e.MAXINVENTORY=10},KrHW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(n("Gu7T")),r=l(n("Dd8w")),a=n("NYxO"),s=l(n("tG6q")),o=l(n("ftWB")),u=l(n("t/14")),c=l(n("GW1v"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={name:"crafting",components:{CraftableItem:u.default,WaterCollector:c.default},computed:(0,r.default)({},(0,a.mapState)(["inventory","hasFire","disabled"]),{craftableItems:function(){var t=this;return o.default.forEach(function(t){t.condition="fire"}),[].concat((0,i.default)(s.default),(0,i.default)(o.default)).map(function(e){var n=(0,r.default)({},e),i=[],a=t.inventory.map(function(t){return t.id});return n.items.forEach(function(t){var e=a.indexOf(t);-1!==e?(a.splice(e,1),i.push(t)):n.isCraftable=!1}),i.length===n.items.length&&(n.isCraftable=!0,"fire"!==n.condition||t.hasFire||(n.isCraftable=!1)),n})},camp:function(){return this.craftableItems.filter(function(t){return"camp"===t.type})},foodItems:function(){return this.craftableItems.filter(function(t){return"food"===t.type})},drinkItems:function(){return this.craftableItems.filter(function(t){return"drink"===t.type})},tools:function(){return this.craftableItems.filter(function(t){return"tool"===t.type})},weapons:function(){return this.craftableItems.filter(function(t){return"weapon"===t.type})}}),methods:(0,r.default)({},(0,a.mapMutations)(["removeInventory","addInventory","enableFire"]),{craft:function(t){var e=this;t.items.forEach(function(t){e.removeInventory({item:t})}),this.addInventory({item:t})},startFire:function(t){var e=this;t.items.forEach(function(t){e.removeInventory({item:t})}),this.enableFire()}})}},M93x:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("xJD8"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("gpE4");var o=function(t){n("lGLV")},u=n("VU/8")(r.a,s.a,!1,o,null,null);e.default=u.exports},"N/cO":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._v("\n  "+t._s(t.item.name)+"\n  "),n("ul",t._l(t.actions,function(e){return n("li",{staticClass:"action"},[n("button",{attrs:{disabled:t.disabled},on:{click:function(n){t.doAction(e)}}},[t._v(t._s(e))])])}))])},staticRenderFns:[]};e.a=i},N3hn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=n("Dd8w"),a=(i=r)&&i.__esModule?i:{default:i},s=n("NYxO");e.default={data:function(){return{hasWaterCollector:!1,isCollecting:!1,isReady:!1,usesRemaining:3}},props:{item:{type:Object},disabled:{type:Boolean,required:!0}},methods:(0,a.default)({},(0,s.mapMutations)(["increase","removeInventory","addInventory"]),{buildWaterCollector:function(){var t=this;this.item.items.forEach(function(e){t.removeInventory({item:e})}),this.usesRemaining=3,this.hasWaterCollector=!0,this.startCollecting()},startCollecting:function(){var t=this;this.isCollecting=!0,setTimeout(function(){t.isCollecting=!1},6e4)},drinkWater:function(){this.increase({stat:"water",amount:20}),this.usesRemaining--,0===this.usesRemaining?this.hasWaterCollector=!1:this.startCollecting()}})}},NHnr:function(t,e,n){"use strict";var i=s(n("7+uW")),r=s(n("M93x")),a=s(n("IcnI"));function s(t){return t&&t.__esModule?t:{default:t}}new i.default(i.default.util.extend({store:a.default},r.default)).$mount("#app")},O4Ep:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("d4kc"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("glGt");var o=function(t){n("CfIO")},u=n("VU/8")(r.a,s.a,!1,o,null,null);e.default=u.exports},OGY3:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[this.gameOver?n("div",[n("h1",[t._v("GAME OVER")]),t._v(" "),n("p",[t._v("You survived "+t._s(t.daysSurvived)+" days")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){t.newGame()}}},[t._v("Start over")])]):t._e(),t._v(" "),this.gameOver?t._e():n("div",{staticClass:"hud"},[n("div",[n("stats"),t._v(" "),n("actions")],1),t._v(" "),n("inventory"),t._v(" "),n("crafting")],1)])},staticRenderFns:[]};e.a=i},OdHo:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=n("Dd8w"),a=(i=r)&&i.__esModule?i:{default:i},s=n("NYxO");e.default={name:"consume",props:["item"],computed:(0,a.default)({},(0,s.mapState)(["hasFire","disabled"]),{showFireTip:function(){return"fire"===this.item.condition&&!this.hasFire}}),methods:{craft:function(){this.$emit("craft",this.item)}}}},"UvP+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=c(n("Dd8w")),r=n("NYxO"),a=c(n("dY3R")),s=c(n("O4Ep")),o=c(n("rA5C")),u=c(n("JATg"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={name:"mainElement",data:function(){return{navMenu:["Actions","Inventory","Crafting"]}},components:{Actions:s.default,Crafting:o.default,Inventory:u.default,Stats:a.default},computed:(0,i.default)({},(0,r.mapState)(["disabled","gameOver","daysSurvived"])),methods:{newGame:function(){window.location.reload()}}}},VZrM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("UvP+"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("OGY3");var o=function(t){n("cfFu")},u=n("VU/8")(r.a,s.a,!1,o,null,null);e.default=u.exports},Woqv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=n("Dd8w"),a=(i=r)&&i.__esModule?i:{default:i},s=n("NYxO");e.default={name:"stats",data:function(){return{decreaseLoop:null,daysLoop:null}},mounted:function(){this.startGameLoop()},beforeDestroy:function(){this.resetGameLoop()},computed:(0,a.default)({},(0,s.mapState)(["stats","gameOver","isSick","daysSurvived"]),{isActive:function(){return!1===this.gameOver}}),methods:(0,a.default)({},(0,s.mapMutations)(["decrease","increaseDayCount"]),{startGameLoop:function(){this.startDayTimer(),this.decreaseStats()},startDayTimer:function(){var t=this;this.daysLoop=setTimeout(function(){t.isActive&&(t.increaseDayCount(),t.startDayTimer())},6e4)},decreaseStats:function(){var t=this;this.loop=setTimeout(function(){t.isActive&&(t.decrease({stat:"water",amount:3}),t.decrease({stat:"food",amount:1}),t.decrease({stat:"sleep",amount:2}),t.isSick&&t.decrease({stat:"health",amount:2}),t.decreaseStats())},12e3)},resetGameLoop:function(){clearTimeout(this.decreaseLoop),clearTimeout(this.daysLoop),this.daysLoop=null,this.decreaseLoop=null}})}},cfFu:function(t,e){},d4kc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(n("Dd8w")),r=n("NYxO"),a=s(n("/o5o"));function s(t){return t&&t.__esModule?t:{default:t}}e.default={name:"actions",data:function(){return{lastActionResult:"",currentAction:null,inProgress:!1,actions:[{name:"Sleep",method:this.sleep},{name:"Hunt",method:this.goHunt},{name:"Scavenge",method:this.goScavenge}]}},computed:(0,i.default)({},(0,r.mapState)(["disabled","gameOver","inventory"]),(0,r.mapGetters)(["isInventoryFull","slotsInInventoryLeft"])),methods:(0,i.default)({},(0,r.mapActions)(["increaseAsync","hunt","scavenge"]),{handleFullInventory:function(){alert("Your inventory is full. Remove at least one item to proceed.")},sleep:function(){var t=this;this.startProgress("Sleeping"),this.increaseAsync({stat:"sleep",amount:35,time:5e3}).then(function(){t.handleResult()}).catch(function(){console.error("oops")})},goHunt:function(){var t=this;this.isInventoryFull?this.handleFullInventory():this.inventory.filter(function(t){return"weapon"===t.type}).length>0?(this.startProgress("Hunting"),this.lastActionResult="",this.hunt({time:8e3}).then(function(e){t.handleResult(e)})):alert("you need to craft a weapon first")},goScavenge:function(){var t=this;this.isInventoryFull?this.handleFullInventory():(this.startProgress("Scavenging"),this.lastActionResult="",this.scavenge({time:3e3}).then(function(e){t.handleResult(e)}))},handleResult:function(t){if(this.endProgress(),t){var e=[];t.forEach(function(t){e.push(t.name)}),this.$refs.modalResult.open(),this.lastActionResult=e.join(", ")}},startProgress:function(t){this.currentAction=t,this.inProgress=!0},endProgress:function(){this.currentAction=null,this.inProgress=!1}}),components:{modal:a.default}}},dY3R:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Woqv"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("rf75");var o=function(t){n("ueM3")},u=n("VU/8")(r.a,s.a,!1,o,null,null);e.default=u.exports},dz8p:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h2",[this._v("Inventory "+this._s(this.length)+"/"+this._s(this.maxLength))]),this._v(" "),e("list",{attrs:{list:this.orderedList}})],1)},staticRenderFns:[]};e.a=i},ftWB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{id:"meat-cooked",type:"food",name:"Cooked meat",items:["meat"],value:20,risk:0},{id:"water-clean",type:"drink",name:"Clean water",items:["water-dirty"],value:20,risk:0}]},glGt:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",t._l(t.actions,function(e){return n("button",{attrs:{disabled:t.disabled},on:{click:e.method}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),t._v(" "),n("modal",{ref:"modalResult"},[n("div",{attrs:{slot:"body"},slot:"body"},[t._v("\n      You got "+t._s(t.lastActionResult)+"\n    ")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.inProgress,expression:"inProgress"}],staticClass:"progress"},[t._v("\n    "+t._s(t.currentAction)+"\n  ")])],1)},staticRenderFns:[]};e.a=i},gpE4:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t.hasStarted?n("main-component",{on:{newGame:t.start}}):n("section",[n("h1",[t._v("Live")]),t._v(" "),n("p",[t._v("A game about survival")]),t._v(" "),n("button",{on:{click:t.start}},[t._v("New Game")])]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[this._v("\n    Bug report via\n    "),e("a",{attrs:{href:"https://github.com/nuria-fl/live"}},[this._v("Github")]),this._v("\n    or\n    "),e("a",{attrs:{href:"https://twitter.com/pincfloit"}},[this._v("Twitter")])])}]};e.a=i},kHbX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{type:"food",id:"berries",name:"Berries",value:5,risk:0,action:"scavenge"},{type:"food",id:"meat",name:"Raw meat",value:20,risk:6,action:"hunt"},{type:"drink",id:"water-dirty",name:"Dirty Water",value:20,risk:6,action:"scavenge"},{type:"junk",id:"salt",name:"Salt",action:"scavenge"},{type:"junk",id:"string",name:"String",action:"scavenge"},{type:"junk",id:"wood",name:"Wood",action:"scavenge"},{type:"junk",id:"plastic",name:"Plastic",action:"scavenge"},{type:"junk",id:"bottle",name:"Empty bottle",action:"scavenge"},{type:"junk",id:"flint",name:"Flint",action:"scavenge"},{type:"junk",id:"medicinal-herbs",name:"Medicinal herbs",action:"scavenge"}]},lGLV:function(t,e){},lKVW:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",this._l(this.list,function(t){return e("li",[e("consume",{attrs:{item:t}})],1)}))},staticRenderFns:[]};e.a=i},lwq5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getters=e.state=void 0;var i=n("K30H"),r=s(n("kHbX")),a=s(n("0xDb"));function s(t){return t&&t.__esModule?t:{default:t}}var o={gameOver:!1,disabled:!1,stats:{health:i.MAX,water:i.MAX,food:i.MAX,sleep:i.MAX},existingItems:r.default,inventory:a.default.randomizeItems(r.default,2),hasFire:!1,isSick:!1,daysSurvived:0},u={isInventoryFull:function(){return o.inventory.length===i.MAXINVENTORY},slotsInInventoryLeft:function(){return i.MAXINVENTORY-o.inventory.length}};e.state=o,e.getters=u},mUbh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(n("//Fk")),r=a(n("0xDb"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={decreaseAsync:function(t,e){var n=t.state,r=t.commit,a=e.stat,s=e.amount,o=e.time;return new i.default(function(t,e){r("disable"),n.gameOver?e(new Error("game is over")):setTimeout(function(){r("enable"),r("decrease",{stat:a,amount:s}),t()},o)})},increaseAsync:function(t,e){var n=t.state,r=t.commit,a=e.stat,s=e.amount,o=e.time;return new i.default(function(t,e){r("disable"),n.gameOver?e(new Error("game is over")):setTimeout(function(){r("enable"),r("increase",{stat:a,amount:s}),t()},o)})},scavenge:function(t,e){var n=t.state,a=t.getters,s=t.commit,o=e.time;return new i.default(function(t,e){s("disable"),n.gameOver?e(new Error("game is over")):setTimeout(function(){var e=n.existingItems.filter(function(t){return"scavenge"===t.action}),i=a.slotsInInventoryLeft>3?3:a.slotsInInventoryLeft,o=r.default.randomizeItems(e,i);o.forEach(function(t){s("addInventory",{item:t})}),s("decrease",{stat:"sleep",amount:5}),s("decrease",{stat:"water",amount:5}),s("decrease",{stat:"sleep",amount:3}),s("enable"),t(o)},o)})},hunt:function(t,e){var n=t.state,a=t.commit,s=e.time;return new i.default(function(t,e){a("disable"),n.gameOver?e(new Error("game is over")):setTimeout(function(){var e=n.existingItems.filter(function(t){return"hunt"===t.action}),i=r.default.randomizeItems(e,1);i.forEach(function(t){a("addInventory",{item:t})}),a("decrease",{stat:"sleep",amount:10}),a("decrease",{stat:"water",amount:10}),a("decrease",{stat:"sleep",amount:6}),a("enable"),t(i)},s)})}}},mjlK:function(t,e){},rA5C:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("KrHW"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("ygOb"),o=n("VU/8")(r.a,s.a,!1,null,null,null);e.default=o.exports},rf75:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._v("\n  Days survived: "+t._s(t.daysSurvived)+"\n  "),n("ul",t._l(t.stats,function(e,i){return n("li",[t._v("\n      "+t._s(i)+":\n      "),n("strong",{class:{warning:e<50,danger:e<20}},[t._v("\n        "+t._s(e)+"\n      ")])])}))])},staticRenderFns:[]};e.a=i},"t/14":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("OdHo"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("G00X"),o=n("VU/8")(r.a,s.a,!1,null,null,null);e.default=o.exports},tG6q:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{id:"fire",type:"camp",name:"Fire",items:["wood","flint"]},{id:"rope",type:"tool",name:"Rope",items:["string","string"]},{id:"bow",type:"weapon",name:"Bow",items:["string","wood"]},{id:"water-collector",type:"camp",name:"Water collector",items:["plastic","rope","bottle"]},{id:"jerky",type:"food",name:"Jerky",items:["meat","salt"],value:20,risk:0},{id:"medicinal-tea",type:"drink",name:"Medicinal tea",items:["water-clean","medicinal-herbs"],value:20,risk:0}]},tcnj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("0pd7"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("lKVW"),o=n("VU/8")(r.a,s.a,!1,null,null,null);e.default=o.exports},ueM3:function(t,e){},ukYY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("K30H");e.default={increaseDayCount:function(t){t.daysSurvived++},decrease:function(t,e){var n=e.stat,i=e.amount;t.stats[n]=t.stats[n]-i,t.stats[n]<=0&&(t.gameOver=!0,t.disabled=!0)},increase:function(t,e){var n=e.stat,r=e.amount;t.stats[n]=t.stats[n]+r,t.stats[n]>i.MAX&&(t.stats[n]=i.MAX)},addInventory:function(t,e){var n=e.item;t.inventory.length<i.MAXINVENTORY&&t.inventory.push(n)},removeInventory:function(t,e){var n,i=e.item,r=(n=i,t.inventory.findIndex(function(t){return t.id===n}));-1!==r&&t.inventory.splice(r,1)},disable:function(t){t.disabled=!0},enable:function(t){t.disabled=!1},enableFire:function(t){t.hasFire=!0},getSick:function(t){t.isSick=!0},getCured:function(t){t.isSick=!1,t.stats.health=i.MAX}}},xJD8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=n("VZrM"),a=(i=r)&&i.__esModule?i:{default:i};e.default={data:function(){return{hasStarted:!1}},components:{MainComponent:a.default},methods:{start:function(){this.hasStarted=!0}}}},ygOb:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("CAMP UPGRADES")]),t._v(" "),n("ul",t._l(t.camp,function(e){return n("li",["fire"===e.id?[t.hasFire?[t._v("\n          Fire is burning\n        ")]:[t._v("\n          Start a fire to cook items\n          "),n("div",[t._v("\n            Items needed:\n            "+t._s(e.items.join(", "))+"\n          ")]),t._v(" "),n("button",{attrs:{type:"button",disabled:!e.isCraftable||t.disabled},on:{click:function(n){t.startFire(e)}}},[t._v("\n            Craft\n          ")])]]:t._e(),t._v(" "),"water-collector"===e.id?n("water-collector",{attrs:{item:e,disabled:t.disabled}}):t._e()],2)})),t._v(" "),n("h2",[t._v("FOOD AND WATER")]),t._v(" "),n("ul",[t._l(t.foodItems,function(e){return n("craftable-item",{key:e.id,attrs:{item:e},on:{craft:t.craft}})}),t._v(" "),t._l(t.drinkItems,function(e){return n("craftable-item",{key:e.id,attrs:{item:e},on:{craft:t.craft}})})],2),t._v(" "),n("h2",[t._v("TOOLS")]),t._v(" "),n("ul",t._l(t.tools,function(e){return n("craftable-item",{key:e.id,attrs:{item:e},on:{craft:t.craft}})})),t._v(" "),n("h2",[t._v("WEAPONS")]),t._v(" "),n("ul",t._l(t.weapons,function(e){return n("craftable-item",{key:e.id,attrs:{item:e},on:{craft:t.craft}})}))])},staticRenderFns:[]};e.a=i},zN0Z:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.hasWaterCollector?t.isCollecting?[t._v("\n    Uses remaining: "+t._s(t.usesRemaining-1)),n("br"),t._v(" "),n("span",{staticClass:"progress"},[t._v("\n      Collecting water\n    ")])]:[t._v("\n    Uses remaining: "+t._s(t.usesRemaining)),n("br"),t._v(" "),n("button",{attrs:{disabled:t.disabled},on:{click:t.drinkWater}},[t._v("Drink water")])]:[t._v("\n    Build a water collector to get rain water\n    "),n("div",[t._v("\n      Items needed:\n      "+t._s(t.item.items.join(", "))+"\n    ")]),t._v(" "),n("button",{attrs:{type:"button",disabled:!t.item.isCraftable||t.disabled},on:{click:function(e){t.buildWaterCollector()}}},[t._v("\n      Craft\n    ")])]],2)},staticRenderFns:[]};e.a=i},zU9e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/QBt"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("N/cO");var o=function(t){n("mjlK")},u=n("VU/8")(r.a,s.a,!1,o,null,null);e.default=u.exports}},["NHnr"]);
//# sourceMappingURL=app.1bfd56afe8039b738053.js.map