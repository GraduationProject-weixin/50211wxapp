(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wodezhaopian/add-or-update"],{"14a1":function(n,e,a){"use strict";var r=a("b8c3"),t=a.n(r);t.a},"582a":function(n,e,a){"use strict";a.r(e);var r=a("7be9"),t=a.n(r);for(var i in r)"default"!==i&&function(n){a.d(e,n,(function(){return r[n]}))}(i);e["default"]=t.a},"713d":function(n,e,a){"use strict";var r;a.d(e,"b",(function(){return t})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return r}));var t=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"7be9":function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(a("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function i(n,e,a,r,t,i,u){try{var o=n[i](u),s=o.value}catch(c){return void a(c)}o.done?e(s):Promise.resolve(s).then(r,t)}function u(n){return function(){var e=this,a=arguments;return new Promise((function(r,t){var u=n.apply(e,a);function o(n){i(u,r,t,o,s,"next",n)}function s(n){i(u,r,t,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("cafa"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{dingdanbianhao:"",shangpinmingcheng:"",shangpinleixing:"",zhaopian:"",zhanghao:"",xingming:"",shangchuanshijian:"",shangjiazhanghao:"",shangjiaxingming:"",dianhua:"",userid:""},user:{},ro:{dingdanbianhao:!1,shangpinmingcheng:!1,shangpinleixing:!1,zhaopian:!1,zhanghao:!1,xingming:!1,shangchuanshijian:!1,shangjiazhanghao:!1,shangjiaxingming:!1,dianhua:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var a=this;return u(r.default.mark((function t(){var i,u,o,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.ruleForm.shangchuanshijian=a.$utils.getCurDate(),i=n.getStorageSync("nowTable"),t.next=4,a.$api.session(i);case 4:if(u=t.sent,a.user=u.data,a.ruleForm.shangjiazhanghao=a.user.shangjiazhanghao,a.ro.shangjiazhanghao=!0,a.ruleForm.shangjiaxingming=a.user.shangjiaxingming,a.ro.shangjiaxingming=!0,a.ruleForm.dianhua=a.user.dianhua,a.ro.dianhua=!0,a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=20;break}return a.ruleForm.id=e.id,t.next=18,a.$api.info("wodezhaopian",a.ruleForm.id);case 18:u=t.sent,a.ruleForm=u.data;case 20:if(a.cross=e.cross,!e.cross){t.next=72;break}o=n.getStorageSync("crossObj"),t.t0=r.default.keys(o);case 24:if((t.t1=t.t0()).done){t.next=72;break}if(s=t.t1.value,"dingdanbianhao"!=s){t.next=30;break}return a.ruleForm.dingdanbianhao=o[s],a.ro.dingdanbianhao=!0,t.abrupt("continue",24);case 30:if("shangpinmingcheng"!=s){t.next=34;break}return a.ruleForm.shangpinmingcheng=o[s],a.ro.shangpinmingcheng=!0,t.abrupt("continue",24);case 34:if("shangpinleixing"!=s){t.next=38;break}return a.ruleForm.shangpinleixing=o[s],a.ro.shangpinleixing=!0,t.abrupt("continue",24);case 38:if("zhaopian"!=s){t.next=42;break}return a.ruleForm.zhaopian=o[s],a.ro.zhaopian=!0,t.abrupt("continue",24);case 42:if("zhanghao"!=s){t.next=46;break}return a.ruleForm.zhanghao=o[s],a.ro.zhanghao=!0,t.abrupt("continue",24);case 46:if("xingming"!=s){t.next=50;break}return a.ruleForm.xingming=o[s],a.ro.xingming=!0,t.abrupt("continue",24);case 50:if("shangchuanshijian"!=s){t.next=54;break}return a.ruleForm.shangchuanshijian=o[s],a.ro.shangchuanshijian=!0,t.abrupt("continue",24);case 54:if("shangjiazhanghao"!=s){t.next=58;break}return a.ruleForm.shangjiazhanghao=o[s],a.ro.shangjiazhanghao=!0,t.abrupt("continue",24);case 58:if("shangjiaxingming"!=s){t.next=62;break}return a.ruleForm.shangjiaxingming=o[s],a.ro.shangjiaxingming=!0,t.abrupt("continue",24);case 62:if("dianhua"!=s){t.next=66;break}return a.ruleForm.dianhua=o[s],a.ro.dianhua=!0,t.abrupt("continue",24);case 66:if("userid"!=s){t.next=70;break}return a.ruleForm.userid=o[s],a.ro.userid=!0,t.abrupt("continue",24);case 70:t.next=24;break;case 72:a.styleChange();case 73:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shangchuanshijianChange:function(n){this.ruleForm.shangchuanshijian=n.target.value,this.$forceUpdate()},zhaopianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.zhaopian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(r.default.mark((function a(){var t,i,u,o,s,c,h,g,l,d;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.ruleForm.dianhua||e.$validate.isMobile(e.ruleForm.dianhua)){a.next=3;break}return e.$utils.msg("电话应输入手机格式"),a.abrupt("return");case 3:if(!e.cross){a.next=19;break}if(o=n.getStorageSync("statusColumnName"),s=n.getStorageSync("statusColumnValue"),""==o){a.next=19;break}if(c=n.getStorageSync("crossObj"),o.startsWith("[")){a.next=15;break}for(h in c)h==o&&(c[h]=s);return g=n.getStorageSync("crossTable"),a.next=13,e.$api.update("".concat(g),c);case 13:a.next=19;break;case 15:t=Number(n.getStorageSync("userid")),i=c["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 19:if(!i||!t){a.next=41;break}return e.ruleForm.crossuserid=t,e.ruleForm.crossrefid=i,l={page:1,limit:10,crossuserid:t,crossrefid:i},a.next=25,e.$api.list("wodezhaopian",l);case 25:if(d=a.sent,!(d.data.total>=u)){a.next=31;break}return e.$utils.msg(n.getStorageSync("tips")),a.abrupt("return",!1);case 31:if(!e.ruleForm.id){a.next=36;break}return a.next=34,e.$api.update("wodezhaopian",e.ruleForm);case 34:a.next=38;break;case 36:return a.next=38,e.$api.add("wodezhaopian",e.ruleForm);case 38:e.$utils.msgBack("提交成功");case 39:a.next=49;break;case 41:if(!e.ruleForm.id){a.next=46;break}return a.next=44,e.$api.update("wodezhaopian",e.ruleForm);case 44:a.next=48;break;case 46:return a.next=48,e.$api.add("wodezhaopian",e.ruleForm);case 48:e.$utils.msgBack("提交成功");case 49:case"end":return a.stop()}}),a)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),r=e.getMonth()+1,t=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(a,"-").concat(r,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,a("543d")["default"])},"8b99":function(n,e,a){"use strict";a.r(e);var r=a("713d"),t=a("582a");for(var i in t)"default"!==i&&function(n){a.d(e,n,(function(){return t[n]}))}(i);a("14a1");var u,o=a("f0c5"),s=Object(o["a"])(t["default"],r["b"],r["c"],!1,null,"02293894",null,!1,r["a"],u);e["default"]=s.exports},"9e93":function(n,e,a){"use strict";(function(n){a("69ef");r(a("66fd"));var e=r(a("8b99"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},b8c3:function(n,e,a){}},[["9e93","common/runtime","common/vendor"]]]);