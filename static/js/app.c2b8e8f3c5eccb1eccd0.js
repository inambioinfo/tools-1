webpackJsonp([0,2],[,,,function(e,t){},function(e,t,n){n(9);var s=n(0)(n(6),n(14),null,null);e.exports=s.exports},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(12),i=n.n(s);t.default={name:"app",components:{Hello:i.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=n.n(s),o=n(13),a=n.n(o);t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",all:[{"":-1,SEQ:["asd"],NP_Counts:1,Gene_Name:"aaa001"}],selected:[{"":-1,SEQ:["asd"],NP_Counts:1,Gene_Name:"aaa001"}],sequences:[],genes:[],fasta_seq:["","",""]}},created:function(){var e=this;console.log("created");var t=new XMLHttpRequest;t.open("get","./static/subsetForTesting.txt",!0),t.onreadystatechange=function(n){if(t.readyState===XMLHttpRequest.DONE){var s=t.responseText.replace(/\n$/,"").split("\n"),o=s.shift().split("\t"),a=i.a.map(s,function(e){return i.a.zipObject(o,i.a.map(e.replace(/'/g,"").split("\t")))});e.all=i.a.groupBy(a,"Gene"),e.genes=i.a.keys(e.all),e.selected=e.all.AADACL3,e.fasta_seq=[e.selected[0].FASTA_SEQ,"",""],e.sequences=e.selected[0].UNIQ_SEQ.replace(/\s/g,"").split(",")}},t.onprogress=function(e){e.loaded,e.total,console.log(e.loaded/e.total)},t.send()},components:{GeneList:a.a},methods:{onOptionSelect:function(e){console.log("Selected option:",e),this.selected=this.all[e],this.fasta_seq=[this.selected[0].FASTA_SEQ,"",""],this.sequences=this.selected[0].UNIQ_SEQ.replace(/\s/g,"").split(",")},resetSS:function(){this.fasta_seq=[this.selected[0].FASTA_SEQ,"",""]}},computed:{allSeq:function(){}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=n.n(s);t.default={props:{options:{type:Array,required:!0}},data:function(){return{isOpen:!1,highlightedPosition:0,keyword:""}},methods:{onInput:function(e){this.isOpen=!!e,this.highlightedPosition=0},moveDown:function(){this.isOpen&&(this.highlightedPosition=(this.highlightedPosition+1)%this.fOptions.length)},moveUp:function(){this.isOpen&&(this.highlightedPosition=this.highlightedPosition-1<0?this.fOptions.length-1:this.highlightedPosition-1)},select:function(){var e=this.fOptions[this.highlightedPosition];this.keyword=e.Gene_Name,this.isOpen=!1,this.$emit("select",e)}},computed:{fOptions:function(){var e=new RegExp(this.keyword,"i");return i.a.chain(this.options).filter(function(t){return t.match(e)}).take(10).value()}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){n(10);var s=n(0)(n(7),n(15),"data-v-13df8e30",null);e.exports=s.exports},function(e,t,n){n(11);var s=n(0)(n(8),n(16),null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("hello")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"hero is-fullheight"},[n("div",{staticClass:"hero-head"},[n("header",{staticClass:"nav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"nav-left"},[n("gene-list",{attrs:{options:e.genes},on:{select:e.onOptionSelect}})],1),e._v(" "),e._m(0),e._v(" "),e._m(1)])])]),e._v(" "),n("div",{staticClass:"hero-body has-text-left"},[n("section",[n("div",{staticClass:"container is-fluid"},[n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("Gene Name")]),e._v(" "),n("h2",{staticClass:"subtitle"},[e._v("\n              "+e._s(e.selected.Gene_Name)+"\n            ")])]),e._v(" "),n("div",[n("p",e._l(e.allSeq,function(t){return n("span",{staticStyle:{background:"piece.col"}},[e._v(e._s(t.seq))])})),e._v(" "),n("p",[n("span",[e._v("|")]),e._v(" "),e._l(e.sequences,function(t){return n("span",{staticClass:"tooltip",on:{mouseenter:function(n){e.substrings(t)},mouseout:e.resetSS}},[e._v(" "+e._s(t)+" |")])})],2),e._v(" "),n("p",e._l(e.substrings,function(t){return n("span",[e._v("-"+e._s(t)+"-")])}))])])])]),e._v(" "),e._m(2)]),e._v(" "),n("span",{staticClass:"tooltiptext"},[e._v("Tooltip text")])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"nav-toggle"},[n("span"),e._v(" "),n("span"),e._v(" "),n("span")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-right nav-menu"},[n("a",{staticClass:"nav-item is-active"},[e._v("\n              Home\n            ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero-foot"},[n("nav",{staticClass:"tabs is-boxed is-fullwidth"},[n("div",{staticClass:"container"},[n("ul",[n("li",{staticClass:"is-active"},[n("a",[e._v("Overview")])]),e._v(" "),n("li",[n("a",[e._v("Modifiers")])])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"autocomplete-input"},[n("p",{staticClass:"control has-icon has-icon-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"input is-medium is-loading",attrs:{placeholder:"gene name search"},domProps:{value:e.keyword},on:{input:[function(t){t.target.composing||(e.keyword=t.target.value)},function(t){e.onInput(t.target.value)}],keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27))return null;e.isOpen=!1},blur:function(t){e.isOpen=!1},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40))return null;e.moveDown(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38))return null;e.moveUp(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.select(t)}]}}),e._v(" "),n("i",{staticClass:"fa fa-angle-down"})]),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"options-list"},e._l(e.fOptions,function(t,s){return n("li",{class:{highlighted:s===e.highlightedPosition},on:{mouseenter:function(t){e.highlightedPosition=s},mousedown:e.select}},[e._v("\n        "+e._s(t)+"\n    ")])}))])},staticRenderFns:[]}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=n(4),o=n.n(i);n(3),s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:o.a}})}],[19]);
//# sourceMappingURL=app.c2b8e8f3c5eccb1eccd0.js.map
