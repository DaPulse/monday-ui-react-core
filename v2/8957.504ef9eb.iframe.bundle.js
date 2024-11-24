"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[8957],{"../../node_modules/@codemirror/legacy-modes/mode/mllike.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function mlLike(parserConfig){var words={as:"keyword",do:"keyword",else:"keyword",end:"keyword",exception:"keyword",fun:"keyword",functor:"keyword",if:"keyword",in:"keyword",include:"keyword",let:"keyword",of:"keyword",open:"keyword",rec:"keyword",struct:"keyword",then:"keyword",type:"keyword",val:"keyword",while:"keyword",with:"keyword"},extraWords=parserConfig.extraWords||{};for(var prop in extraWords)extraWords.hasOwnProperty(prop)&&(words[prop]=parserConfig.extraWords[prop]);var hintWords=[];for(var k in words)hintWords.push(k);function tokenBase(stream,state){var ch=stream.next();if('"'===ch)return state.tokenize=tokenString,state.tokenize(stream,state);if("{"===ch&&stream.eat("|"))return state.longString=!0,state.tokenize=tokenLongString,state.tokenize(stream,state);if("("===ch&&stream.match(/^\*(?!\))/))return state.commentLevel++,state.tokenize=tokenComment,state.tokenize(stream,state);if("~"===ch||"?"===ch)return stream.eatWhile(/\w/),"variableName.special";if("`"===ch)return stream.eatWhile(/\w/),"quote";if("/"===ch&&parserConfig.slashComments&&stream.eat("/"))return stream.skipToEnd(),"comment";if(/\d/.test(ch))return"0"===ch&&stream.eat(/[bB]/)&&stream.eatWhile(/[01]/),"0"===ch&&stream.eat(/[xX]/)&&stream.eatWhile(/[0-9a-fA-F]/),"0"===ch&&stream.eat(/[oO]/)?stream.eatWhile(/[0-7]/):(stream.eatWhile(/[\d_]/),stream.eat(".")&&stream.eatWhile(/[\d]/),stream.eat(/[eE]/)&&stream.eatWhile(/[\d\-+]/)),"number";if(/[+\-*&%=<>!?|@\.~:]/.test(ch))return"operator";if(/[\w\xa1-\uffff]/.test(ch)){stream.eatWhile(/[\w\xa1-\uffff]/);var cur=stream.current();return words.hasOwnProperty(cur)?words[cur]:"variable"}return null}function tokenString(stream,state){for(var next,end=!1,escaped=!1;null!=(next=stream.next());){if('"'===next&&!escaped){end=!0;break}escaped=!escaped&&"\\"===next}return end&&!escaped&&(state.tokenize=tokenBase),"string"}function tokenComment(stream,state){for(var prev,next;state.commentLevel>0&&null!=(next=stream.next());)"("===prev&&"*"===next&&state.commentLevel++,"*"===prev&&")"===next&&state.commentLevel--,prev=next;return state.commentLevel<=0&&(state.tokenize=tokenBase),"comment"}function tokenLongString(stream,state){for(var prev,next;state.longString&&null!=(next=stream.next());)"|"===prev&&"}"===next&&(state.longString=!1),prev=next;return state.longString||(state.tokenize=tokenBase),"string"}return{startState:function(){return{tokenize:tokenBase,commentLevel:0,longString:!1}},token:function(stream,state){return stream.eatSpace()?null:state.tokenize(stream,state)},languageData:{autocomplete:hintWords,commentTokens:{line:parserConfig.slashComments?"//":void 0,block:{open:"(*",close:"*)"}}}}}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{fSharp:()=>fSharp,oCaml:()=>oCaml,sml:()=>sml});const oCaml=mlLike({name:"ocaml",extraWords:{and:"keyword",assert:"keyword",begin:"keyword",class:"keyword",constraint:"keyword",done:"keyword",downto:"keyword",external:"keyword",function:"keyword",initializer:"keyword",lazy:"keyword",match:"keyword",method:"keyword",module:"keyword",mutable:"keyword",new:"keyword",nonrec:"keyword",object:"keyword",private:"keyword",sig:"keyword",to:"keyword",try:"keyword",value:"keyword",virtual:"keyword",when:"keyword",raise:"builtin",failwith:"builtin",true:"builtin",false:"builtin",asr:"builtin",land:"builtin",lor:"builtin",lsl:"builtin",lsr:"builtin",lxor:"builtin",mod:"builtin",or:"builtin",raise_notrace:"builtin",trace:"builtin",exit:"builtin",print_string:"builtin",print_endline:"builtin",int:"type",float:"type",bool:"type",char:"type",string:"type",unit:"type",List:"builtin"}}),fSharp=mlLike({name:"fsharp",extraWords:{abstract:"keyword",assert:"keyword",base:"keyword",begin:"keyword",class:"keyword",default:"keyword",delegate:"keyword","do!":"keyword",done:"keyword",downcast:"keyword",downto:"keyword",elif:"keyword",extern:"keyword",finally:"keyword",for:"keyword",function:"keyword",global:"keyword",inherit:"keyword",inline:"keyword",interface:"keyword",internal:"keyword",lazy:"keyword","let!":"keyword",match:"keyword",member:"keyword",module:"keyword",mutable:"keyword",namespace:"keyword",new:"keyword",null:"keyword",override:"keyword",private:"keyword",public:"keyword","return!":"keyword",return:"keyword",select:"keyword",static:"keyword",to:"keyword",try:"keyword",upcast:"keyword","use!":"keyword",use:"keyword",void:"keyword",when:"keyword","yield!":"keyword",yield:"keyword",atomic:"keyword",break:"keyword",checked:"keyword",component:"keyword",const:"keyword",constraint:"keyword",constructor:"keyword",continue:"keyword",eager:"keyword",event:"keyword",external:"keyword",fixed:"keyword",method:"keyword",mixin:"keyword",object:"keyword",parallel:"keyword",process:"keyword",protected:"keyword",pure:"keyword",sealed:"keyword",tailcall:"keyword",trait:"keyword",virtual:"keyword",volatile:"keyword",List:"builtin",Seq:"builtin",Map:"builtin",Set:"builtin",Option:"builtin",int:"builtin",string:"builtin",not:"builtin",true:"builtin",false:"builtin",raise:"builtin",failwith:"builtin"},slashComments:!0}),sml=mlLike({name:"sml",extraWords:{abstype:"keyword",and:"keyword",andalso:"keyword",case:"keyword",datatype:"keyword",fn:"keyword",handle:"keyword",infix:"keyword",infixr:"keyword",local:"keyword",nonfix:"keyword",op:"keyword",orelse:"keyword",raise:"keyword",withtype:"keyword",eqtype:"keyword",sharing:"keyword",sig:"keyword",signature:"keyword",structure:"keyword",where:"keyword",true:"keyword",false:"keyword",int:"builtin",real:"builtin",string:"builtin",char:"builtin",bool:"builtin"},slashComments:!0})}}]);