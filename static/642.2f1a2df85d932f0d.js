"use strict";(self.webpackChunkelog_web=self.webpackChunkelog_web||[]).push([[642],{1787:(Y,u,a)=>{a.r(u),a.d(u,{ActivityModule:()=>z});var c=a(6895),g=a(3060),t=a(4650),y=a(3248);let d=(()=>{class e{constructor(i){this.httpDataService=i}getAllActivities(){return this.httpDataService.get("activity-type")}createActivity(i){return this.httpDataService.post("activity-type",i)}}return e.\u0275fac=function(i){return new(i||e)(t.LFG(y.L))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=a(3238),Z=a(7392),m=a(9549),f=a(4385),s=a(3848);function A(e,o){if(1&e&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.Q6J("value",i),t.xp6(1),t.hij(" ",i," ")}}function h(e,o){if(1&e&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.Q6J("value",i),t.xp6(1),t.hij(" ",i," ")}}function T(e,o){if(1&e&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.Q6J("value",i),t.xp6(1),t.hij(" ",i," ")}}function C(e,o){1&e&&(t.TgZ(0,"mat-icon"),t._uU(1,"assignment"),t.qZA(),t._uU(2," All Tasks "))}function U(e,o){1&e&&(t.TgZ(0,"mat-icon"),t._uU(1,"assignment_ind"),t.qZA(),t._uU(2," My Tasks "))}function b(e,o){1&e&&(t.TgZ(0,"mat-icon"),t._uU(1,"date_range"),t.qZA(),t._uU(2," Overdue "))}let S=(()=>{class e{constructor(i){this.activityService=i,this.filters=["Created Date","Due Date","Status","Types","Entry Type","GeoGraphy","Scope","Priority","Created By","Assigned to"],this.groupby=["Due Date","Status","Priority","Assigned to"],this.sortby=["Tittle","Activity#","Due Date","Assigned to"]}ngOnInit(){this.getAllActivities()}downloadFile(){}getAllActivities(){this.activityService.getAllActivities().subscribe(i=>{console.log(i)})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-activity"]],decls:25,vars:3,consts:[[1,"text-end"],[1,"btn","btn-secondary","mx-1",3,"click"],[1,"icon-taskdownl"],["appearance","outline"],["placeholder","Filters"],[3,"value",4,"ngFor","ngForOf"],[1,"mx-2"],["placeholder","Group By"],["placeholder","Sort By"],["mat-tab-label",""],[3,"value"]],template:function(i,n){1&i&&(t._UZ(0,"div"),t.TgZ(1,"div",0)(2,"span")(3,"div",1),t.NdJ("click",function(){return n.downloadFile()}),t._UZ(4,"i",2),t.TgZ(5,"mat-icon"),t._uU(6,"file_download"),t.qZA()()(),t.TgZ(7,"mat-form-field",3)(8,"mat-select",4),t.YNc(9,A,2,2,"mat-option",5),t.qZA()(),t.TgZ(10,"span",6)(11,"mat-form-field",3)(12,"mat-select",7),t.YNc(13,h,2,2,"mat-option",5),t.qZA()()(),t.TgZ(14,"span")(15,"mat-form-field",3)(16,"mat-select",8),t.YNc(17,T,2,2,"mat-option",5),t.qZA()()()(),t.TgZ(18,"mat-tab-group")(19,"mat-tab"),t.YNc(20,C,3,0,"ng-template",9),t.qZA(),t.TgZ(21,"mat-tab"),t.YNc(22,U,3,0,"ng-template",9),t.qZA(),t.TgZ(23,"mat-tab"),t.YNc(24,b,3,0,"ng-template",9),t.qZA()()),2&i&&(t.xp6(9),t.Q6J("ngForOf",n.filters),t.xp6(4),t.Q6J("ngForOf",n.groupby),t.xp6(4),t.Q6J("ngForOf",n.sortby))},dependencies:[c.sg,v.ey,Z.Hw,m.KE,f.gD,s.SP,s.uD,s.uX],styles:["md-select[_ngcontent-%COMP%]{background-color:#fff;color:#000;border:1px solid #666666}"]}),e})();var l=a(5869),q=a(7199),r=a(4006),_=a(2653),F=a(4859),D=a(4144);let M=(()=>{class e{constructor(i){this.fb=i,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]]}ngOnInit(){this.editor=new l.ML,this.editor.commands.focus().scrollIntoView().exec(),this.createformgroup()}createformgroup(){this.richtextForm=this.fb.group({editorContent:[""]})}ngOnDestroy(){this.editor.destroy()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(r.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-rich-text-editor"]],decls:3,vars:6,consts:[[3,"formGroup"],[3,"editor","toolbar"],["formControlName","editorContent",3,"editor","placeholder","ngModel"]],template:function(i,n){1&i&&(t.TgZ(0,"form",0),t._UZ(1,"ngx-editor-menu",1)(2,"ngx-editor",2),t.qZA()),2&i&&(t.Q6J("formGroup",n.richtextForm),t.xp6(1),t.Q6J("editor",n.editor)("toolbar",n.toolbar),t.xp6(1),t.Q6J("editor",n.editor)("placeholder","Type here...")("ngModel",n.value))},dependencies:[l.tP,l.Mn,r._Y,r.JJ,r.JL,r.sg,r.u]}),e})();function x(e,o){if(1&e&&(t.TgZ(0,"mat-option",29),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.Q6J("value",i._id),t.xp6(1),t.Oqu(i.organization)}}const J=[{path:"",component:S},{path:"create",component:(()=>{class e{constructor(i,n,p,I){this.organizationService=i,this.formBuilder=n,this.activityService=p,this.alertpopupService=I}ngOnInit(){this.getAllOrganization(),this.generateAddNewUserForm()}getAllOrganization(){this.organizationService.getAllOrganizations().subscribe(i=>{console.log(i),this.organizationsData=i.organizations,this.allOrganization=this.organizationsData.filter(n=>"63973bfb61ab6f49bfdd3c35"==n.type),console.log(this.allOrganization),this.organizationList=i.organizations})}generateAddNewUserForm(){this.activityForm=this.formBuilder.group({type:["",l.kI.required],relatedTo:["",l.kI.required],Ministry:["",l.kI.required],etype:["",l.kI.required],Sector:["",l.kI.required],Scope:["",l.kI.required],Title:["",l.kI.required]})}createAcyivity(i){this.activityService.createActivity(i).subscribe(n=>{this.alertpopupService.open({message:n.message?n.message:"Activity Created Successfully",action:"ok"})})}onSubmit(){console.log(this.activityForm.value)}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(q.M),t.Y36(r.qu),t.Y36(d),t.Y36(_.z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-createactivity"]],decls:75,vars:2,consts:[[3,"formGroup","ngSubmit"],["appearance","outline"],["formControlName","type"],["value","documentation\n      "],["value","policy"],["value","procedure"],["value","scheme"],["value","others"],[1,"d-flex"],["formControlName","relatedTo"],["value","Single Ministry/Department\n      "],["value","Multiple Ministries/Departments"],[1,"mx-5"],["appearance","outline",1,"w-100-per"],["formControlName","Ministry"],[3,"value",4,"ngFor","ngForOf"],["formControlName","etype"],["value","Issue\n  "],["value","Suggestion"],["formControlName","Sector"],["value","EXIM\n  "],["value","Domestic"],["formControlName","Scope"],["value","National"],["value","Interstate"],[1,"row"],[1,"col-12"],["matInput","","placeholder","Add an activity here & hit enter...","input","","type","text","formControlName","Title"],["mat-raised-button","","color","primary","type","submit"],[3,"value"]],template:function(i,n){1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(1,"div")(2,"mat-form-field",1)(3,"mat-label"),t._uU(4,"Type"),t.qZA(),t.TgZ(5,"mat-select",2)(6,"mat-option",3),t._uU(7,"Documentation "),t.qZA(),t.TgZ(8,"mat-option",4),t._uU(9,"Policy"),t.qZA(),t.TgZ(10,"mat-option",5),t._uU(11,"Procedure"),t.qZA(),t.TgZ(12,"mat-option",6),t._uU(13,"Scheme"),t.qZA(),t.TgZ(14,"mat-option",7),t._uU(15,"Others"),t.qZA()()()(),t.TgZ(16,"div",8)(17,"div")(18,"mat-form-field",1)(19,"mat-label"),t._uU(20,"Related To"),t.qZA(),t.TgZ(21,"mat-select",9)(22,"mat-option",10),t._uU(23,"Single Ministry/Department "),t.qZA(),t.TgZ(24,"mat-option",11),t._uU(25,"Multiple Ministries/Departments"),t.qZA(),t.TgZ(26,"mat-option",7),t._uU(27,"Others"),t.qZA()()()(),t.TgZ(28,"div",12)(29,"mat-form-field",13)(30,"mat-label"),t._uU(31,"Ministry/Department"),t.qZA(),t.TgZ(32,"mat-select",14),t.YNc(33,x,2,2,"mat-option",15),t.qZA()()()(),t.TgZ(34,"div")(35,"mat-form-field",1)(36,"mat-label"),t._uU(37,"Entry Type"),t.qZA(),t.TgZ(38,"mat-select",16)(39,"mat-option",17),t._uU(40,"Issue "),t.qZA(),t.TgZ(41,"mat-option",18),t._uU(42,"Suggestion"),t.qZA(),t.TgZ(43,"mat-option",7),t._uU(44,"Others"),t.qZA()()()(),t.TgZ(45,"div",8)(46,"div")(47,"mat-form-field",1)(48,"mat-label"),t._uU(49,"Sector"),t.qZA(),t.TgZ(50,"mat-select",19)(51,"mat-option",20),t._uU(52,"EXIM "),t.qZA(),t.TgZ(53,"mat-option",21),t._uU(54,"Domestic"),t.qZA(),t.TgZ(55,"mat-option",7),t._uU(56,"Others"),t.qZA()()()(),t.TgZ(57,"div",12)(58,"mat-form-field",1)(59,"mat-label"),t._uU(60,"Scope"),t.qZA(),t.TgZ(61,"mat-select",22)(62,"mat-option",23),t._uU(63,"National"),t.qZA(),t.TgZ(64,"mat-option",24),t._uU(65,"Interstate"),t.qZA()()()()(),t.TgZ(66,"div",25)(67,"mat-form-field",1)(68,"mat-label"),t._uU(69,"Title"),t.qZA(),t.TgZ(70,"div",26),t._UZ(71,"input",27),t.qZA()()(),t._UZ(72,"app-rich-text-editor"),t.TgZ(73,"button",28),t._uU(74," Submit "),t.qZA()()),2&i&&(t.Q6J("formGroup",n.activityForm),t.xp6(33),t.Q6J("ngForOf",n.organizationsData))},dependencies:[c.sg,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,v.ey,F.lW,m.KE,m.hX,D.Nt,f.gD,M]}),e})()}];let N=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(J),g.Bz]}),e})();var O=a(8210);let z=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,N,r.UX,O.m]}),e})()}}]);