webpackJsonp([1],Array(26).concat([function(e,t,s){"use strict";var r=s(54),i=s.n(r),n=i.a.create({baseURL:"https://api-wfeedme.herokuapp.com"});t.a=n},,,,,,,,,,,,,,,,,function(e,t,s){s(121);var r=s(1)(s(86),s(139),null,null);e.exports=r.exports},function(e,t,s){"use strict";var r=s(9),i=s(129),n=s(74),a=s(75);r.a.use(i.a);var o={en:n.a,es:a.a},u=new i.a({messages:o});t.a=u},function(e,t,s){"use strict";var r={};r.install=function(e){e.prototype.$bus=new e},t.a=r},function(e,t,s){"use strict";var r=s(9),i=s(149),n=s(132),a=s.n(n),o=s(137),u=s.n(o),c=s(133),l=s.n(c);r.a.use(i.a),t.a=new i.a({mode:"history",routes:[{path:"/",name:"home",component:a.a},{path:"/report/:hash",name:"report",props:!0,component:u.a},{path:"*",name:"notFound",component:l.a}]})},function(e,t,s){"use strict";var r=s(9),i=s(4),n=s(78),a=s(77),o=s(79);r.a.use(i.b),t.a=new i.b.Store({modules:{project:n.a,issue:a.a,report:o.a}})},function(e,t,s){"use strict";var r=s(27),i=s.n(r),n={_default:function(e){return"The value is not valid."},after:function(e,t){var s=i()(t,2),r=s[0];return"The must be after "+(s[1]?"or equal to ":"")+r+"."},alpha_dash:function(e){return"The may contain alpha-numeric characters as well as dashes and underscores."},alpha_num:function(e){return"The may only contain alpha-numeric characters."},alpha_spaces:function(e){return"The may only contain alphabetic characters as well as spaces."},alpha:function(e){return"The may only contain alphabetic characters."},before:function(e,t){var s=i()(t,2),r=s[0];return"The must be before "+(s[1]?"or equal to ":"")+r+"."},between:function(e,t){var s=i()(t,2);return"The must be between "+s[0]+" and "+s[1]+"."},confirmed:function(e){return"The confirmation does not match."},credit_card:function(e){return"The is invalid."},date_between:function(e,t){var s=i()(t,2);return"The must be between "+s[0]+" and "+s[1]+"."},date_format:function(e,t){return"The must be in the format "+i()(t,1)[0]+"."},decimal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["*"],s=i()(t,1),r=s[0];return"The must be numeric and may contain "+("*"===r?"":r)+" decimal points."},digits:function(e,t){return"The must be numeric and exactly contain "+i()(t,1)[0]+" digits."},dimensions:function(e,t){var s=i()(t,2);return"The must be "+s[0]+" pixels by "+s[1]+" pixels."},email:function(e){return"The must be a valid email."},ext:function(e){return"The must be a valid file."},image:function(e){return"The must be an image."},in:function(e){return"The must be a valid value."},ip:function(e){return"The must be a valid ip address."},max:function(e,t){return"The may not be greater than "+i()(t,1)[0]+" characters."},max_value:function(e,t){return"The must be "+i()(t,1)[0]+" or less."},mimes:function(e){return"The must have a valid file type."},min:function(e,t){return"The must be at least "+i()(t,1)[0]+" characters."},min_value:function(e,t){return"The must be "+i()(t,1)[0]+" or more."},not_in:function(e){return"The must be a valid value."},numeric:function(e){return"The may only contain numeric characters."},regex:function(e){return"The format is invalid."},required:function(e){return"The field is required."},size:function(e,t){return"The must be less than "+i()(t,1)[0]+" KB."},url:function(e){return"The is not a valid URL."}},a={name:"en",messages:n,attributes:{}};t.a=a},function(e,t,s){"use strict";var r=s(27),i=s.n(r),n={after:function(e,t){return"El campo debe ser posterior a "+i()(t,1)[0]+"."},alpha_dash:function(e){return"El campo solo debe contener letras, números y guiones."},alpha_num:function(e){return"El campo solo debe contener letras y números."},alpha_spaces:function(e){return"El campo solo debe contener letras y espacios."},alpha:function(e){return"El campo solo debe contener letras."},before:function(e,t){return"El campo debe ser anterior a "+i()(t,1)[0]+"."},between:function(e,t){var s=i()(t,2);return"El campo debe estar entre "+s[0]+" y "+s[1]+"."},confirmed:function(e,t){return"El campo no coincide con "+i()(t,1)[0]+"."},credit_card:function(e,t){var s=i()(t,1);s[0];return"El campo es inválido."},date_between:function(e,t){var s=i()(t,2);return"El campo debe estar entre "+s[0]+" y "+s[1]+"."},date_format:function(e,t){return"El campo debe tener formato formato "+i()(t,1)[0]+"."},decimal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["*"],s=i()(t,1),r=s[0];return"El campo debe ser númerico y contener "+("*"===r?"":r)+" puntos decimales."},digits:function(e,t){return"El campo debe ser númerico y contener exactamente "+i()(t,1)[0]+" dígitos."},dimensions:function(e,t){var s=i()(t,2);return"El campo debe ser de "+s[0]+" pixeles por "+s[1]+" pixeles."},email:function(e){return"El campo debe ser un correo electrónico válido."},ext:function(e){return"El campo debe ser un archivo válido."},image:function(e){return"El campo debe ser una imagen."},in:function(e){return"El campo debe ser un valor válido."},ip:function(e){return"El campo debe ser una dirección ip válida."},max:function(e,t){return"El campo no debe ser mayor a "+i()(t,1)[0]+" caracteres."},max_value:function(e,t){return"El campo debe de ser "+i()(t,1)[0]+" o menor."},mimes:function(e){return"El campo debe ser un tipo de archivo válido."},min:function(e,t){return"El campo debe tener al menos "+i()(t,1)[0]+" caracteres."},min_value:function(e,t){return"El campo debe ser "+i()(t,1)[0]+" o superior."},not_in:function(e){return"El campo debe ser un valor válido."},numeric:function(e){return"El campo debe contener solo caracteres númericos."},regex:function(e){return"El formato del campo no es válido."},required:function(e){return"El campo es obligatorio."},size:function(e,t){return"El campo debe ser menor a "+i()(t,1)[0]+" KB."},url:function(e){return"El campo no es una URL válida."}},a={name:"es",messages:n,attributes:{}};t.a=a},,function(e,t,s){s(122);var r=s(1)(s(80),s(140),null,null);e.exports=r.exports},function(e,t,s){s(125);var r=s(1)(null,s(148),"data-v-e7137b7a",null);e.exports=r.exports},,,,,,,,,,,,,,,,,,,,function(e,t,s){"use strict";var r=s(26),i={};i.findProjectByHash=function(e){return r.a.get("/project/"+e).then(function(e){return e.data})},t.a=i},function(e,t,s){"use strict";var r=s(26),i={};i.createReport=function(e){return r.a.post("/project/"+e.project.id+"/issues",{report:e}).then(function(e){return e.data})},t.a=i},function(e,t,s){"use strict";t.a={welcome:"Welcome to FeedMe",title:"Let {project} be incredible",type:"Issue type",priority:"Priority",criticity:"Criticity",level:{maximum:"Maximum",medium:"Medium",minimum:"Minimum",low:"Low",high:"High"},types:{error:"Error",upgrade:"Upgrade"},buttons:{back:"Back",next:"Next",add:"Add Issue",edit:"Edit",delete:"Delete",finish:"Send report"},step1:{title:"Personal info",subtitle:"Tell us about you",name:"What is your name?",holderName:"Joe Doe",mail:"Complete your mail",holderMail:"joe.doe@wolox.com.ar"},step2:{title:"Report upload",subtitle:"Add all issues found",desc:"Description",descLabel:"Describe the issues found",errorMsg:"Please, add at least one issue to continue"},step3:{title:"Confirmation",subtitle:"Check uploaded data",errorMsg:"There was an error, the report could not be loaded"},step4:{title:"Report sent succesfully!",message:"Thank you for your support! Together, we are making {project} incredible!",finish:"Finish"},issueList:{issues:"Issues",errorMsg:"No issues added"}}},function(e,t,s){"use strict";t.a={welcome:"Bienvenido a FeedMe",title:"Hagamos que {project} sea increible",type:"Tipo de problema",priority:"Prioridad",criticity:"Criticidad",level:{maximum:"Máxima",medium:"Media",minimum:"Mínima",low:"Baja",high:"Alta"},types:{error:"Error",upgrade:"Mejora"},buttons:{back:"Anterior",next:"Siguiente",add:"Agregar problema",edit:"Editar",delete:"Eliminar",finish:"Enviar reporte"},step1:{title:"Datos personales",subtitle:"Cuentanos sobre tí",name:"¿Cuál es tu nombre?",holderName:"Juan Perez",mail:"Completa tu mail",holderMail:"juan.perez@wolox.com.ar"},step2:{title:"Carga del reporte",subtitle:"Agrega todos los problemas encontrados",desc:"Descripción",descLabel:"Describa el problema encontrado",errorMsg:"Por favor, ingrese por lo menos un problema para poder continuar"},step3:{title:"Confirmación",subtitle:"Comproba los datos cargados",errorMsg:"Hubo un error, no se pudo cargar el reporte"},step4:{title:"Reporte enviado exitosamente",message:"¡Muchas gracias por tu aporte! Juntos, estamos haciendo a {project} increíble",finish:"Finalizar"},issueList:{issues:"Incidencias",errorMsg:"No hay problemas cargados"}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(9),i=s(50),n=s.n(i),a=s(53),o=s.n(a),u=s(51),c=s.n(u),l=s(46),M=s(47),L=s(44),w=s(48),p=s(49),d=s(52),m=s.n(d),j=s(45);i.Validator.addLocale(p.a),i.Validator.addLocale(w.a),r.a.config.productionTip=!1,r.a.use(n.a,{locale:"en"}),r.a.use(j.a),r.a.use(o.a),r.a.component("loader",m.a),new r.a({el:"#app",router:l.a,store:M.a,i18n:L.a,template:"<App/>",components:{App:c.a}})},function(e,t,s){"use strict";var r={issue:{desc:"",type:"1",criticity:"1",priority:"1"}},i={issue:function(){return r.issue}},n={updateIssue:function(e,t){e.issue=t}},a={updateIssue:function(e,t){(0,e.commit)("updateIssue",t)},clearIssue:function(e){(0,e.commit)("updateIssue",{desc:"",type:"1",criticity:"1",priority:"1"})}};t.a={state:r,getters:i,actions:a,mutations:n}},function(e,t,s){"use strict";var r=s(72),i={project:null,projectNotFound:!1},n={project:function(){return i.project},projectNotFound:function(){return i.projectNotFound}},a={setProject:function(e,t){e.project=t,e.projectNotFound=!1},projectNotFound:function(e,t){e.projectNotFound=t}},o={findProyect:function(e,t){var s=e.commit;r.a.findProjectByHash(t).then(function(e){if(e){var t=e;s("projectNotFound",!1),s("setProject",t),s("updateProject",t)}else s("projectNotFound",!0)})},clearProject:function(e){(0,e.commit)("setProject",null)}};t.a={state:i,getters:n,actions:o,mutations:a}},function(e,t,s){"use strict";var r={report:{project:{},owner:{},issues:[]}},i={report:function(){return r.report},getIssueByIndex:function(e){return r.report.issues[e]}},n={updateProject:function(e,t){e.report.project=t},updateOwner:function(e,t){e.report.owner=t},addIssue:function(e,t){var s=t;e.report.issues.push(s)},editIssue:function(e,t,s){e.report.issues[t]=s},removeIssue:function(e,t){e.report.issues.splice(t,1)},clearReport:function(e){e.report={project:{},owner:{},issues:[]}}},a={updateProject:function(e,t){(0,e.commit)("updateProject",t)},updateOwner:function(e,t){(0,e.commit)("updateOwner",t)},addIssue:function(e,t){(0,e.commit)("addIssue",t)},editIssue:function(e,t,s){(0,e.commit)("editIssue",t,s)},removeIssue:function(e,t){(0,e.commit)("removeIssue",t)},clearReport:function(e){(0,e.commit)("clearReport")}};t.a={state:r,getters:i,actions:a,mutations:n}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(131),i=s.n(r),n=s(130),a=s.n(n);t.default={name:"app",components:{FmHeader:i.a,FmFooter:a.a}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(5),i=s.n(r),n=s(4);t.default={computed:i()({},s.i(n.a)({project:"project"}))}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"home",data:function(){return{code:"",errorMsg:null}},methods:{searchByCode:function(){var e=this;this.$validator.validateAll().then(function(t){e.errorMsg=e.errors,t&&e.$router.push("/report/"+e.code)})}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{owner:{name:"",mail:""}}},methods:{nextStep:function(){var e=this;this.$validator.validateAll().then(function(t){t&&(e.$store.dispatch("updateOwner",e.owner),e.$bus.$emit("changeStep",2))})}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(5),i=s.n(r),n=s(4),a=s(43),o=s.n(a);t.default={components:{IssueList:o.a},data:function(){return{errorMsg:null,priorities:[{text:this.$t("level.low"),value:"1"},{text:this.$t("level.medium"),value:"2"},{text:this.$t("level.high"),value:"3"}],criticities:[{text:this.$t("level.minimum"),value:"1"},{text:this.$t("level.medium"),value:"2"},{text:this.$t("level.maximum"),value:"3"}],types:[{text:this.$t("types.error"),value:"1"},{text:this.$t("types.upgrade"),value:"2"}]}},computed:i()({},s.i(n.a)({report:"report",issue:"issue"})),methods:{addIssue:function(){var e=this;this.errorMsg=null,this.$validator.validateAll().then(function(t){t&&(e.$store.dispatch("addIssue",e.issue),e.$store.dispatch("clearIssue"))})},nextStep:function(){this.errorMsg=null,this.report.issues.length>0?this.$bus.$emit("changeStep",3):this.errorMsg=this.$t("step2.errorMsg")},backStep:function(){this.$bus.$emit("changeStep",1)}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(5),i=s.n(r),n=s(73),a=s(4),o=s(43),u=s.n(o);t.default={data:function(){return{errorMsg:null}},components:{IssueList:u.a},computed:i()({},s.i(a.a)({report:"report"})),methods:{onComplete:function(){var e=this;n.a.createReport(this.report).then(function(t){e.$store.dispatch("clearIssue"),e.$store.dispatch("clearReport"),e.$bus.$emit("showDialog")}).catch(function(){e.errorMsg=e.$t("step3.errorMsg")})},backStep:function(){this.$bus.$emit("changeStep",2)}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(5),i=s.n(r),n=s(4);t.default={data:function(){return{dialog:!1,priorities:[this.$t("level.low"),this.$t("level.medium"),this.$t("level.high")],criticities:[this.$t("level.minimum"),this.$t("level.medium"),this.$t("level.maximum")],types:[this.$t("types.error"),this.$t("types.upgrade")]}},computed:i()({},s.i(n.a)({report:"report",issue:"issue"})),methods:{editIssue:function(e,t){this.$bus.$emit("changeStep",2),this.$store.dispatch("removeIssue",e),this.$store.dispatch("updateIssue",t)},removeIssue:function(e){this.$store.dispatch("removeIssue",e),0===this.report.issues.length&&this.$bus.$emit("changeStep",2)},showDescription:function(){}},filters:{elipsis:function(e){return e.length>=50?e.slice(0,50)+"...":e}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(5),i=s.n(r),n=s(4),a=s(134),o=s.n(a),u=s(135),c=s.n(u),l=s(136),M=s.n(l);t.default={data:function(){return{dialog:!1,step:0}},props:["hash"],computed:i()({},s.i(n.a)({project:"project",projectNotFound:"projectNotFound"})),created:function(){var e=this;this.$store.dispatch("findProyect",this.hash),this.$bus.$on("changeStep",this.changeStep),this.$bus.$on("showDialog",function(){e.dialog=!0})},components:{Step1:o.a,Step2:c.a,Step3:M.a},methods:{changeStep:function(e){this.step=e},closeForm:function(){this.dialog=!1,this.$store.dispatch("clearProject"),this.$router.push("/")}},watch:{project:function(){var e=this.project.locale;this.$validator.setLocale(e),this.$i18n.locale=e},projectNotFound:function(){this.projectNotFound&&this.$router.push("/notFound")}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjQuMyA4Ni42Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojMzUzNTM1O30uYntmaWxsOm5vbmU7c3Ryb2tlOiMzNjM2MzY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjVweDt9LmN7aXNvbGF0aW9uOmlzb2xhdGU7fS5ke2ZpbGw6IzM2MzYzNjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlJlY3Vyc28gMnhoZHBpPC90aXRsZT48cGF0aCBjbGFzcz0iYSIgZD0iTTU5LjksMjguNWMtOC43LDAtMTQuNCw3LjEtMTkuNSwxMy40QzM2LjEsNDcuMiwzMiw1Mi4yLDI3LDUyLjJjLTUuMiwwLTguNC01LjMtOC40LTkuMSwwLTMuNSwzLjUtOC43LDktOC43YTkuODgsOS44OCwwLDAsMSw4LjIsNC41LDMsMywwLDEsMCw1LjEtMy4xYy0uMi0uMy00LjUtNy4zLTEzLjItNy4zQTE1LjE0LDE1LjE0LDAsMCwwLDEyLjgsNDMuMWMwLDcuMSw1LjksMTUuMSwxNC4zLDE1LjEsNy44LDAsMTMtNi40LDE4LjEtMTIuNiw0LjYtNS43LDktMTEuMiwxNC45LTExLjIsMy41LDAsNS43LDEuMiw3LDMuNmExMS4yMSwxMS4yMSwwLDAsMS0uMywxMC4zLDYuMTcsNi4xNywwLDAsMS01LjksMy41LDExLjc0LDExLjc0LDAsMCwxLTkuNS00LjksMy4zMiwzLjMyLDAsMCwwLTUtLjUsMy4wNywzLjA3LDAsMCwwLC4yLDQuMWMwLC4xLjEuMS4yLjJhMTcuNDgsMTcuNDgsMCwwLDAsMTQuMSw3YzEwLDAsMTMuMi05LjgsMTMuMi0xNC41YTE3LjM5LDE3LjM5LDAsMCwwLTEuNy03LjlDNzAuNiwzMi4yLDY3LjIsMjguNSw1OS45LDI4LjVaIi8+PGNpcmNsZSBjbGFzcz0iYiIgY3g9IjQzLjMiIGN5PSI0My4zIiByPSI0MC44Ii8+PGcgY2xhc3M9ImMiPjxwYXRoIGNsYXNzPSJkIiBkPSJNMTE4LjczLDM0LjQ5cTMuMSwwLDMuNjUsMS43MWE3LjY4LDcuNjgsMCwwLDEsLjI3LDIuMjUsNi45Miw2LjkyLDAsMCwxLS4yOSwyLjIzLDIuMTEsMi4xMSwwLDAsMS0uOTIsMS4xOSw1LjYyLDUuNjIsMCwwLDEtMi43NC41NGwtMi44OC0uMThWNTQuMjlhNS44LDUuOCwwLDAsMS0uNDMsMi41NCwyLjEyLDIuMTIsMCwwLDEtMS4zMSwxLjEsNy45Miw3LjkyLDAsMCwxLTIuMjcuMjcsNi44OSw2Ljg5LDAsMCwxLTIuMjMtLjI5LDIuMDgsMi4wOCwwLDAsMS0xLjE5LS45NCwzLjM4LDMuMzgsMCwwLDEtLjQzLTEuMTksMTMuNzIsMTMuNzIsMCwwLDEtLjA3LTEuNThWNDIuMjhoLTEuNjJhMi43OSwyLjc5LDAsMCwxLTEuNjctLjU0cS0uODUtLjg1LS44NS0zLjI5LDAtMy42OSwyLjY2LTMuNjloMS40OFYzMi4zOGE5LjI3LDkuMjcsMCwwLDEsMi40OC02LjI4cTIuNDctMi44MSw3LjE1LTIuODFhMTMuMSwxMy4xLDAsMCwxLDEuNTUuMDcsMy42LDMuNiwwLDAsMSwxLjE5LjQzcTEuMjIuNTgsMS4yMSwzLjQ2YTUsNSwwLDAsMS0uNzYsMy4xMSwyLjc2LDIuNzYsMCwwLDEtMiwuODFoLTEuMjZxLTEuNjcsMC0xLjY3LDEuMTN2Mi40N1oiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTE0Ny41Myw0My40N2E1LjQ3LDUuNDcsMCwwLDEtMS4zNyw0LjA5LDQuMjgsNC4yOCwwLDAsMS0zLDEuMzNIMTMyLjQ1QTIuNDcsMi40NywwLDAsMCwxMzMuOTQsNTFhNS45MSw1LjkxLDAsMCwwLDMsLjg2LDEyLjQsMTIuNCwwLDAsMCw0LjA5LS41NGwuNS0uMThhNC41NCw0LjU0LDAsMCwxLDEuOC0uNXExLjQ0LDAsMi40NywyYTUsNSwwLDAsMSwuNTksMi4wN3EwLDQtOS41OSw0YTE0LjQ3LDE0LjQ3LDAsMCwxLTUuOTItMS4xNSwxMCwxMCwwLDAsMS00LTNBMTIuOTQsMTIuOTQsMCwwLDEsMTI0LDQ2LjQyYTExLjc3LDExLjc3LDAsMCwxLDMuNjctOS4wNywxMywxMywwLDAsMSw5LjE2LTMuNHE2LjI1LDAsOS4xOCw0LjQxQTkuMTUsOS4xNSwwLDAsMSwxNDcuNTMsNDMuNDdaTTEzOCw0NC44cTEuNzEsMCwxLjcxLTEuNDRhMiwyLDAsMCwwLS43OS0xLjY3LDMuNTMsMy41MywwLDAsMC0yLjI1LS42Myw0LjU1LDQuNTUsMCwwLDAtMi45LDEuMTksMy4zNSwzLjM1LDAsMCwwLTEuNDQsMi41NFoiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTE3My4zMSw0My40N2E1LjQ3LDUuNDcsMCwwLDEtMS4zNyw0LjA5LDQuMjgsNC4yOCwwLDAsMS0zLDEuMzNIMTU4LjI0QTIuNDcsMi40NywwLDAsMCwxNTkuNzIsNTFhNS45MSw1LjkxLDAsMCwwLDMsLjg2LDEyLjQsMTIuNCwwLDAsMCw0LjA5LS41NGwuNS0uMThhNC41NCw0LjU0LDAsMCwxLDEuOC0uNXExLjQ0LDAsMi40NywyYTUsNSwwLDAsMSwuNTksMi4wN3EwLDQtOS41OSw0YTE0LjQ3LDE0LjQ3LDAsMCwxLTUuOTItMS4xNSwxMCwxMCwwLDAsMS00LTMsMTIuOTQsMTIuOTQsMCwwLDEtMi44My04LjE1LDExLjc3LDExLjc3LDAsMCwxLDMuNjctOS4wN0ExMywxMywwLDAsMSwxNjIuNiwzNHE2LjI1LDAsOS4xOCw0LjQxQTkuMTUsOS4xNSwwLDAsMSwxNzMuMzEsNDMuNDdabS05LjUsMS4zM3ExLjcxLDAsMS43MS0xLjQ0YTIsMiwwLDAsMC0uNzktMS42NywzLjUzLDMuNTMsMCwwLDAtMi4yNS0uNjMsNC41NSw0LjU1LDAsMCwwLTIuOSwxLjE5LDMuMzUsMy4zNSwwLDAsMC0xLjQ0LDIuNTRaIi8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0xOTIuMTQsMjQuNTdhMS45MSwxLjkxLDAsMCwxLDEuMTktLjkyLDkuNjgsOS42OCwwLDAsMSw0LjU0LDAsMS44OSwxLjg5LDAsMCwxLDEuMTkuOTQsMy44OCwzLjg4LDAsMCwxLC40LDEuMTksMTMuMTEsMTMuMTEsMCwwLDEsLjA3LDEuNTVWNTQuMmExMy4wOSwxMy4wOSwwLDAsMS0uMDcsMS41NSwzLjIsMy4yLDAsMCwxLS40MywxLjE1cS0uNjgsMS4yMS0zLjgsMS4yMXQtMy40OS0yLjJhNi42Myw2LjYzLDAsMCwxLTUuMjcsMi4xNiwxMCwxMCwwLDAsMS03LjM4LTMuNTMsMTEuODUsMTEuODUsMCwwLDEsMC0xNi40OSwxMCwxMCwwLDAsMSw3LjM2LTMuNTUsNi4zMiw2LjMyLDAsMCwxLDUuMTcsMi4yNVYyNy4yOWExMywxMywwLDAsMSwuMDctMS41NUEzLjY0LDMuNjQsMCwwLDEsMTkyLjE0LDI0LjU3Wk0xODQuODMsNDlhMy43OSwzLjc5LDAsMCwwLDIuODMsMS4yMUEzLjU4LDMuNTgsMCwwLDAsMTkwLjQzLDQ5YTMuOSwzLjksMCwwLDAsMS4xLTIuNjgsNC4xNiw0LjE2LDAsMCwwLTEuMDYtMi43MiwzLjU0LDMuNTQsMCwwLDAtMi44Ni0xLjI2LDMuNjMsMy42MywwLDAsMC0yLjg4LDEuMjQsNCw0LDAsMCwwLTEuMDgsMi43MkEzLjgxLDMuODEsMCwwLDAsMTg0LjgzLDQ5WiIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNMjEwLjg5LDM3LjZRMjEzLDM0LjQsMjE2LDM0LjRhNy4zOCw3LjM4LDAsMCwxLDYuODQsMy45MkExNS4yNSwxNS4yNSwwLDAsMSwyMjQsMzYuOWE5LjgxLDkuODEsMCwwLDEsMi4yMy0xLjYyLDYuMjUsNi4yNSwwLDAsMSwzLjE1LS44OCw3LjcsNy43LDAsMCwxLDYsMi43N3EyLjQzLDIuNzcsMi40Myw5LjE2VjU0LjJhMTMuMDksMTMuMDksMCwwLDEtLjA3LDEuNTUsMy42MiwzLjYyLDAsMCwxLS40MywxLjE5cS0uNTksMS4yMS0zLjQ2LDEuMjF0LTMuNDctMS4yNmE0LjE3LDQuMTcsMCwwLDEtLjM4LTEuMTksMTMuMDksMTMuMDksMCwwLDEtLjA3LTEuNTVWNDYuMjhxMC0zLjkyLTIuNzktMy45MmEyLjIxLDIuMjEsMCwwLDAtMi4xNCwxLDYuMjEsNi4yMSwwLDAsMC0uNTYsMi45MlY1NC4yYTEzLDEzLDAsMCwxLS4wNywxLjU4LDMuNjIsMy42MiwwLDAsMS0uNDMsMS4xN3EtLjYzLDEuMjEtMy41MSwxLjIxVDIxNyw1Ni45YTQuMTYsNC4xNiwwLDAsMS0uMzgtMS4xOSwxMy4wOSwxMy4wOSwwLDAsMS0uMDctMS41NVY0Ni4yOHEwLTMuOTItMi43OS0zLjkydC0yLjcsMy45MnY4QTEzLjA3LDEzLjA3LDAsMCwxLDIxMSw1NS44YTMuNjEsMy42MSwwLDAsMS0uNDMsMS4xOXEtLjY4LDEuMTctMy41MSwxLjE3dC0zLjQ2LTEuMjFhNC4xOSw0LjE5LDAsMCwxLS4zOC0xLjE3LDEyLjg5LDEyLjg5LDAsMCwxLS4wNy0xLjU4VjM4LjM2YTEzLDEzLDAsMCwxLC4wNy0xLjU1LDMuMiwzLjIsMCwwLDEsLjQzLTEuMTVxLjY4LTEuMjEsMy4yLTEuMjF0My4yOC44MUEzLjI4LDMuMjgsMCwwLDEsMjEwLjg5LDM3LjZaIi8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0yNjQuMyw0My40N2E1LjQ3LDUuNDcsMCwwLDEtMS4zNyw0LjA5LDQuMjgsNC4yOCwwLDAsMS0zLDEuMzNIMjQ5LjIzQTIuNDcsMi40NywwLDAsMCwyNTAuNzEsNTFhNS45MSw1LjkxLDAsMCwwLDMsLjg2LDEyLjQsMTIuNCwwLDAsMCw0LjA5LS41NGwuNS0uMThhNC41NCw0LjU0LDAsMCwxLDEuOC0uNXExLjQ0LDAsMi40NywyYTUsNSwwLDAsMSwuNTksMi4wN3EwLDQtOS41OSw0YTE0LjQ3LDE0LjQ3LDAsMCwxLTUuOTItMS4xNSwxMCwxMCwwLDAsMS00LTMsMTIuOTQsMTIuOTQsMCwwLDEtMi44My04LjE1LDExLjc3LDExLjc3LDAsMCwxLDMuNjctOS4wNywxMywxMywwLDAsMSw5LjE2LTMuNHE2LjI1LDAsOS4xOCw0LjQxQTkuMTUsOS4xNSwwLDAsMSwyNjQuMyw0My40N1ptLTkuNSwxLjMzcTEuNzEsMCwxLjcxLTEuNDRhMiwyLDAsMCwwLS43OS0xLjY3LDMuNTMsMy41MywwLDAsMC0yLjI1LS42Myw0LjU1LDQuNTUsMCwwLDAtMi45LDEuMTksMy4zNSwzLjM1LDAsMCwwLTEuNDQsMi41NFoiLz48L2c+PC9zdmc+"},,function(e,t,s){s(124);var r=s(1)(null,s(147),"data-v-cbda1034",null);e.exports=r.exports},function(e,t,s){s(123);var r=s(1)(s(81),s(145),"data-v-89754850",null);e.exports=r.exports},function(e,t,s){var r=s(1)(s(82),s(146),null,null);e.exports=r.exports},function(e,t,s){var r=s(1)(null,s(144),null,null);e.exports=r.exports},function(e,t,s){var r=s(1)(s(83),s(143),null,null);e.exports=r.exports},function(e,t,s){var r=s(1)(s(84),s(142),null,null);e.exports=r.exports},function(e,t,s){var r=s(1)(s(85),s(141),null,null);e.exports=r.exports},function(e,t,s){s(120);var r=s(1)(s(87),s(138),null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"issue"},[e.project?s("v-stepper",{attrs:{vertical:"vertical"},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[s("v-container",{attrs:{fluid:"fluid"}},[s("h2",[e._v(e._s(e.$t("welcome")))]),s("h3",[e._v(" "+e._s(e.$t("title",{project:e.project.name})))]),s("v-stepper-step",{attrs:{step:"1",complete:e.step>1}},[e._v(e._s(e.$t("step1.title"))),s("small",[e._v(" "+e._s(e.$t("step1.subtitle")))])]),s("v-stepper-content",{attrs:{step:"1"}},[s("step1")],1),s("v-stepper-step",{attrs:{step:"2",complete:e.step>2}},[e._v(" "+e._s(e.$t("step2.title"))),s("small",[e._v(" "+e._s(e.$t("step2.subtitle")))])]),s("v-stepper-content",{attrs:{step:"2"}},[s("step2")],1),s("v-stepper-step",{attrs:{step:"3",complete:e.step>3}},[e._v(" "+e._s(e.$t("step3.title"))),s("small",[e._v(" "+e._s(e.$t("step3.subtitle")))])]),s("v-stepper-content",{attrs:{step:"3"}},[s("step3")],1)],1),s("v-dialog",{attrs:{persistent:"persistent",width:"50%"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",{staticClass:"text-xs-left"},[s("v-container",{staticClass:"text-xs-center",attrs:{fluid:"fluid"}},[s("h3",[e._v(e._s(e.$t("step4.title")))]),s("h5",[e._v(e._s(e.$t("step4.message",{project:e.project.name})))]),s("v-btn",{staticClass:"darken-1 dialog__button",attrs:{round:"round",primary:"primary"},nativeOn:{click:function(t){e.closeForm(t)}}},[e._v(e._s(e.$t("step4.finish")))])],1)],1)],1)],1):s("loader")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-list",{attrs:{"three-line":"three-line"}},[s("h5",{staticClass:"text-xs-left"},[e._v(e._s(e.$t("issueList.issues")))]),s("v-expansion-panel",[e._l(e.report.issues,function(t,r){return s("v-expansion-panel-content",{key:r},[s("div",{slot:"header"},[s("v-icon",{staticClass:"indigo--text",on:{click:function(s){e.editIssue(r,t)}}},[e._v("edit")]),s("v-icon",{staticClass:"red--text",on:{click:function(t){e.removeIssue(r)}}},[e._v("delete")]),s("b",[e._v("Nº "+e._s(r+1)+": ")]),e._v(e._s(e._f("elipsis")(t.desc)))],1),s("v-card",[s("v-card-text",{staticClass:"grey lighten-3"},[e._v(e._s(t.desc)),s("div",[s("v-chip",{attrs:{outline:"outline"}},[s("b",[e._v(e._s(e.types[t.type-1]))])]),s("v-chip",{attrs:{outline:"outline"}},[s("b",[e._v(e._s(e.$t("priority"))+" "+e._s(e.priorities[t.priority-1]))])]),s("v-chip",{attrs:{outline:"outline"}},[s("b",[e._v(e._s(e.$t("criticity"))+" "+e._s(e.criticities[t.criticity-1]))])])],1)])],1)],1)}),0===e.report.issues.length?s("p",[e._v(e._s(e.$t("issueList.errorMsg")))]):e._e()],2)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{attrs:{toolbar:"toolbar",footer:"footer","fill-height":"fill-height"}},[s("fm-header"),s("main",[s("v-container",{attrs:{fluid:"fluid"}},[s("router-view")],1)],1),s("fm-footer")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step3 reportDetail"},[s("v-container",[s("h4",[e._v(" "+e._s(e.report.owner.name))]),s("span",[e._v("  "+e._s(e.report.owner.mail))])]),s("v-layout",{attrs:{row:"row"}},[s("v-container",[s("issue-list",{staticClass:"issueList"})],1)],1),s("v-layout",{attrs:{row:"row"}},[s("v-container",[e.errorMsg?s("span",{staticClass:"span error-msg"},[e._v(" "+e._s(e.errorMsg))]):e._e()])],1),s("v-btn",{attrs:{primary:"primary",round:"round"},on:{click:e.onComplete}},[e._v(e._s(e.$t("buttons.finish")))]),s("v-btn",{attrs:{round:"round"},on:{click:e.backStep}},[e._v(e._s(e.$t("buttons.back")))])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-layout",{attrs:{row:"row"}},[s("v-flex",{attrs:{xs12:"xs12"}},[s("label",{staticClass:"label"},[e._v(e._s(e.$t("step2.descLabel")))]),s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:30|max:500",expression:"'required|min:30|max:500'"}],attrs:{name:"desc",textarea:"textarea",counter:"counter",max:"500"},model:{value:e.issue.desc,callback:function(t){e.issue.desc=t},expression:"issue.desc"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.first("desc"),expression:"errors.first('desc')"}],staticClass:"span error-msg"},[e._v(" "+e._s(e.errors.first("desc")))])],1)],1),s("v-layout",{attrs:{row:"row"}},[s("v-flex",{attrs:{xs12:"xs12"}},[s("label",{staticClass:"label"},[e._v(e._s(e.$t("type")))]),s("v-select",{attrs:{label:"$t('types.error')",name:"type",segmented:"segmented",items:e.types},model:{value:e.issue.type,callback:function(t){e.issue.type=t},expression:"issue.type"}})],1)],1),s("v-layout",{attrs:{row:"row"}},[s("v-flex",{attrs:{xs12:"xs12",sm6:"sm6"}},[s("label",{staticClass:"label"},[e._v(e._s(e.$t("priority")))]),s("v-select",{attrs:{label:"$t('level.minimum')",name:"priority",segmented:"segmented",items:e.priorities},model:{value:e.issue.priority,callback:function(t){e.issue.priority=t},expression:"issue.priority"}})],1),s("v-flex",{attrs:{xs12:"xs12",sm6:"sm6"}},[s("label",{staticClass:"label"},[e._v(e._s(e.$t("criticity")))]),s("v-select",{attrs:{label:"$t('level.minimum')",name:"criticity",segmented:"segmented",items:e.criticities},model:{value:e.issue.criticity,callback:function(t){e.issue.criticity=t},expression:"issue.criticity"}})],1)],1),s("v-layout",{attrs:{row:"row"}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"xs12"}},[s("v-btn",{staticClass:"white--text",attrs:{secondary:"secondary",round:"round",small:"small"},on:{click:e.addIssue}},[e._v(e._s(e.$t("buttons.add")))])],1)],1),s("v-layout",{attrs:{row:"row"}},[s("v-container",[s("issue-list")],1)],1),e.errorMsg?s("span",{staticClass:"span error-msg"},[e._v(" "+e._s(e.errorMsg))]):e._e(),s("v-layout",{attrs:{row:"row"}},[s("v-container",[s("v-btn",{attrs:{primary:"primary",round:"round"},on:{click:e.nextStep}},[e._v(e._s(e.$t("buttons.next")))]),s("v-btn",{attrs:{round:"round",outline:"outline"},on:{click:e.backStep}},[e._v(e._s(e.$t("buttons.back")))])],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"step1",attrs:{fluid:"fluid"}},[s("v-layout",{attrs:{row:"row",wrap:"wrap"}},[s("label",{staticClass:"label"},[e._v(" "+e._s(e.$t("step1.name")))])]),s("v-layout",{attrs:{row:"row",wrap:"wrap"}},[s("v-flex",{attrs:{xs12:"xs12"}},[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"name",type:"text",placeholder:e.$t("step1.holderName")},model:{value:e.owner.name,callback:function(t){e.owner.name=t},expression:"owner.name"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.first("name"),expression:"errors.first('name')"}],staticClass:"span error-msg"},[e._v(" "+e._s(e.errors.first("name")))])],1)],1),s("v-layout",{attrs:{row:"row",wrap:"wrap"}},[s("label",{staticClass:"label"},[e._v(" "+e._s(e.$t("step1.mail")))])]),s("v-layout",{attrs:{row:"row",wrap:"wrap"}},[s("v-flex",{attrs:{xs12:"xs12"}},[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{name:"mail",type:"email",placeholder:e.$t("step1.holderMail")},model:{value:e.owner.mail,callback:function(t){e.owner.mail=t},expression:"owner.mail"}})],1),s("v-flex",{attrs:{xs12:"xs12"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.first("mail"),expression:"errors.first('mail')"}],staticClass:"span error-msg"},[e._v(" "+e._s(e.errors.first("mail")))])])],1),s("v-btn",{attrs:{primary:"primary",round:"round"},on:{click:e.nextStep}},[e._v(" "+e._s(e.$t("buttons.next")))])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("h1",[e._v(" 404 - Not Found")])},staticRenderFns:[]}},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-toolbar",[r("router-link",{attrs:{to:{path:"/"}}},[r("img",{attrs:{src:s(128),width:"150"}})]),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-xs"},[r("v-btn",{attrs:{disabled:"disabled",flat:"flat"}},[e._v("  "+e._s(e.project?e.project.name:""))])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:"fluid"}},[s("v-layout",[s("v-flex",{attrs:{xs8:"xs8","offset-xs2":"offset-xs2"}},[s("h1",[e._v(" Bienvenido a FeedMe")]),s("h3",[e._v(" Ahora podes brindarnos feedback de manera rápida y sencilla.")]),s("h6",[e._v(" No necesitas iniciar sesión, ingresa a la URL que se fue administrada y comenza a disfrutar de la experiencia FeedMe.")]),s("h6",[e._v(" O ingresa el código de la URL aca para ser redirigido.")])])],1),s("v-layout",[s("v-flex",{attrs:{xs8:"xs8","offset-xs2":"offset-xs2"}},[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"text-xs-center",attrs:{name:"code",type:"text"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e.errorMsg?s("span",{staticClass:"span error-msg"},[e._v(" "+e._s(e.errorMsg.items[0].msg))]):e._e(),s("div",[s("v-btn",{attrs:{principal:"principal",dark:"dark"},on:{click:e.searchByCode}},[e._v(" Buscar")])],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-footer",{staticClass:"text-xs-center"},[s("v-spacer",[e._v("© "+e._s((new Date).getFullYear())+" - Made with "),s("b",{staticClass:"red--text"},[e._v("❤ ")]),e._v("by "),s("a",{attrs:{href:"https://www.wolox.com.ar/"}},[e._v("WOLOX")])])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:"fluid"}},[s("v-layout",[s("div",{staticClass:"loader"})])],1)},staticRenderFns:[]}}]),[76]);
//# sourceMappingURL=app.60fd1faf2b4b69470623.js.map