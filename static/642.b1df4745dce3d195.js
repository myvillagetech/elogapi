"use strict";(self.webpackChunkelog_web=self.webpackChunkelog_web||[]).push([[642],{1787:(it,v,a)=>{a.r(v),a.d(v,{ActivityModule:()=>tt});var p=a(6895),f=a(3060),T=a(5017),l=a(3626),t=a(4650),_=a(3248);let h=(()=>{class e{constructor(i){this.httpDataService=i}getAllActivities(){return this.httpDataService.get("activity")}createActivity(i){return this.httpDataService.post("activity-type",i)}postActivity(i){return this.httpDataService.post("activity",i)}}return e.\u0275fac=function(i){return new(i||e)(t.LFG(_.L))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var y=a(3238),C=a(6709),A=a(7392),u=a(9549),Z=a(4385),d=a(3848);function b(e,o){if(1&e&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.Q6J("value",i),t.xp6(1),t.hij(" ",i," ")}}function x(e,o){if(1&e&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.Q6J("value",i),t.xp6(1),t.hij(" ",i," ")}}function S(e,o){if(1&e&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.Q6J("value",i),t.xp6(1),t.hij(" ",i," ")}}function U(e,o){1&e&&(t.TgZ(0,"mat-icon"),t._uU(1,"assignment"),t.qZA(),t._uU(2," All Tasks "))}function q(e,o){1&e&&(t.TgZ(0,"mat-icon"),t._uU(1,"assignment_ind"),t.qZA(),t._uU(2," My Tasks "))}function D(e,o){1&e&&(t.TgZ(0,"mat-icon"),t._uU(1,"date_range"),t.qZA(),t._uU(2," Overdue "))}function N(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"th",21)(1,"mat-checkbox",22),t.NdJ("change",function(s){t.CHM(i);const m=t.oxw();return t.KtG(s?m.toggleAllRows():null)}),t.qZA()()}if(2&e){const i=t.oxw();t.xp6(1),t.Q6J("checked",i.selection.hasValue()&&i.isAllSelected())("indeterminate",i.selection.hasValue()&&!i.isAllSelected())("aria-label",i.checkboxLabel())}}function M(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"td",23)(1,"mat-checkbox",24),t.NdJ("click",function(s){return s.stopPropagation()})("change",function(s){const g=t.CHM(i).$implicit,et=t.oxw();return t.KtG(s?et.selection.toggle(g):null)}),t.qZA()()}if(2&e){const i=o.$implicit,n=t.oxw();t.xp6(1),t.Q6J("checked",n.selection.isSelected(i))("aria-label",n.checkboxLabel(i))}}function k(e,o){1&e&&(t.TgZ(0,"th",21),t._uU(1," Activity "),t.qZA())}function O(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",i.activityType," ")}}function F(e,o){1&e&&(t.TgZ(0,"th",21),t._uU(1," Title "),t.qZA())}function J(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",i.title," ")}}function Y(e,o){1&e&&(t.TgZ(0,"th",21),t._uU(1," Priority "),t.qZA())}function w(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",i.priority," ")}}function z(e,o){1&e&&(t.TgZ(0,"th",21),t._uU(1," Due date "),t.qZA())}function I(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",i.updatedAt," ")}}function Q(e,o){1&e&&t._UZ(0,"tr",25)}function P(e,o){1&e&&t._UZ(0,"tr",26)}let R=(()=>{class e{constructor(i){this.activityService=i,this.filters=["Created Date","Due Date","Status","Types","Entry Type","GeoGraphy","Scope","Priority","Created By","Assigned to"],this.groupby=["Due Date","Status","Priority","Assigned to"],this.sortby=["Tittle","Activity#","Due Date","Assigned to"],this.displayedColumns=["Activity","Title","Priority","Duedate"],this.selection=new T.Ov(!0,[])}ngOnInit(){this.getAllActivities()}downloadFile(){}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}checkboxLabel(i){return i?`${this.selection.isSelected(i)?"deselect":"select"} row ${i.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}getAllActivities(){this.activityService.getAllActivities().subscribe(i=>{console.log(i.data),this.dataSource=new l.by(i.data)})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-activity"]],decls:43,vars:6,consts:[[1,"text-end"],[1,"btn","btn-secondary","mx-1",3,"click"],[1,"icon-taskdownl"],["appearance","outline"],["placeholder","Filters"],[3,"value",4,"ngFor","ngForOf"],[1,"mx-2"],["placeholder","Group By"],["placeholder","Sort By"],["mat-tab-label",""],["mat-table","",1,"mat-elevation-z8","userTable",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Activity"],["matColumnDef","Title"],["matColumnDef","Priority"],["matColumnDef","Duedate"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"value"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-row",""],["mat-row",""]],template:function(i,n){1&i&&(t._UZ(0,"div"),t.TgZ(1,"div",0)(2,"span")(3,"div",1),t.NdJ("click",function(){return n.downloadFile()}),t._UZ(4,"i",2),t.TgZ(5,"mat-icon"),t._uU(6,"file_download"),t.qZA()()(),t.TgZ(7,"mat-form-field",3)(8,"mat-select",4),t.YNc(9,b,2,2,"mat-option",5),t.qZA()(),t.TgZ(10,"span",6)(11,"mat-form-field",3)(12,"mat-select",7),t.YNc(13,x,2,2,"mat-option",5),t.qZA()()(),t.TgZ(14,"span")(15,"mat-form-field",3)(16,"mat-select",8),t.YNc(17,S,2,2,"mat-option",5),t.qZA()()()(),t.TgZ(18,"mat-tab-group")(19,"mat-tab"),t.YNc(20,U,3,0,"ng-template",9),t.qZA(),t.TgZ(21,"mat-tab"),t.YNc(22,q,3,0,"ng-template",9),t.qZA(),t.TgZ(23,"mat-tab"),t.YNc(24,D,3,0,"ng-template",9),t.qZA()(),t.TgZ(25,"table",10),t.ynx(26,11),t.YNc(27,N,2,3,"th",12),t.YNc(28,M,2,2,"td",13),t.BQk(),t.ynx(29,14),t.YNc(30,k,2,0,"th",12),t.YNc(31,O,2,1,"td",13),t.BQk(),t.ynx(32,15),t.YNc(33,F,2,0,"th",12),t.YNc(34,J,2,1,"td",13),t.BQk(),t.ynx(35,16),t.YNc(36,Y,2,0,"th",12),t.YNc(37,w,2,1,"td",13),t.BQk(),t.ynx(38,17),t.YNc(39,z,2,0,"th",12),t.YNc(40,I,2,1,"td",13),t.BQk(),t.YNc(41,Q,1,0,"tr",18),t.YNc(42,P,1,0,"tr",19),t.qZA()),2&i&&(t.xp6(9),t.Q6J("ngForOf",n.filters),t.xp6(4),t.Q6J("ngForOf",n.groupby),t.xp6(4),t.Q6J("ngForOf",n.sortby),t.xp6(8),t.Q6J("dataSource",n.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns))},dependencies:[p.sg,y.ey,C.oG,A.Hw,u.KE,Z.gD,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,d.SP,d.uD,d.uX],styles:["md-select[_ngcontent-%COMP%]{background-color:#fff;color:#000;border:1px solid #666666}.userTable[_ngcontent-%COMP%]{width:100%}.userTable[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{background-color:#818dcf;color:#fff}.userTable[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]{background:whitesmoke}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px;text-align:left;border-bottom:1px solid rgb(206,202,202)}"]}),e})();var r=a(5869),B=a(4025),E=a(7199),c=a(4006),$=a(2653),j=a(9690),G=a(4859),L=a(4144);let X=(()=>{class e{constructor(i){this.fb=i,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]]}ngOnInit(){this.editor=new r.ML,this.editor.commands.focus().scrollIntoView().exec(),this.createformgroup()}createformgroup(){this.richtextForm=this.fb.group({description:[""]})}ngOnDestroy(){this.editor.destroy()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(c.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-rich-text-editor"]],decls:3,vars:6,consts:[[3,"formGroup"],[3,"editor","toolbar"],["formControlName","description",3,"editor","placeholder","ngModel"]],template:function(i,n){1&i&&(t.TgZ(0,"form",0),t._UZ(1,"ngx-editor-menu",1)(2,"ngx-editor",2),t.qZA()),2&i&&(t.Q6J("formGroup",n.richtextForm),t.xp6(1),t.Q6J("editor",n.editor)("toolbar",n.toolbar),t.xp6(1),t.Q6J("editor",n.editor)("placeholder","Type here...")("ngModel",n.value))},dependencies:[r.tP,r.Mn,c._Y,c.JJ,c.JL,c.sg,c.u]}),e})();function H(e,o){if(1&e&&(t.TgZ(0,"mat-option",30),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.Q6J("value",i._id),t.xp6(1),t.Oqu(i.organization)}}const K=[{path:"",component:R},{path:"create",component:(()=>{class e{constructor(i,n,s,m,g){this.organizationService=i,this.formBuilder=n,this.activityService=s,this.alertpopupService=m,this.storageService=g}ngOnInit(){this.getAllOrganization(),this.generateAddNewUserForm()}getAllOrganization(){this.organizationService.getAllOrganizations().subscribe(i=>{console.log(i),this.organizationsData=i.organizations,this.allOrganization=this.organizationsData.filter(n=>"63973bfb61ab6f49bfdd3c35"==n.type),console.log(this.allOrganization),this.organizationList=i.organizations})}generateAddNewUserForm(){this.activityForm=this.formBuilder.group({activityType:["",r.kI.required],activityRelatedTo:["",r.kI.required],organization:["",r.kI.required],activitEntryType:["",r.kI.required],activitySector:["",r.kI.required],activityScope:["",r.kI.required],title:["",r.kI.required],description:["string",r.kI.required],attachments:["string",r.kI.required]})}createActivity(i){this.activityService.createActivity(i).subscribe(n=>{this.alertpopupService.open({message:n.message?n.message:"Activity Created Successfully",action:"ok"})})}onSubmit(){const i={...this.activityForm.value,priority:"none ",status:"string",createdBy:this.storageService.getDataFromLocalStorage(B.I.USER_ID)};console.log(this.activityForm.value),this.activityService.postActivity(i).subscribe(n=>{this.alertpopupService.open({message:n.message?n.message:"Activity Created Successfully",action:"ok"})},n=>{this.alertpopupService.open({message:n.message?n.message:"something went wrong!",action:"ok"})})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(E.M),t.Y36(c.qu),t.Y36(h),t.Y36($.z),t.Y36(j.V))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-createactivity"]],decls:81,vars:2,consts:[[1,"container"],[1,"d-flex"],[3,"formGroup","ngSubmit"],["appearance","outline"],["formControlName","activityType"],["value","documentation\n      "],["value","policy"],["value","procedure"],["value","scheme"],["value","others"],["formControlName","activityRelatedTo"],["value","Single Ministry/Department\n      "],["value","Multiple Ministries/Departments"],[1,"mx-5"],["appearance","outline",1,"w-100-per"],["multiple","multiple","formControlName","organization"],[3,"value",4,"ngFor","ngForOf"],["formControlName","activitEntryType"],["value","Issue\n  "],["value","Suggestion"],["formControlName","activitySector"],["value","EXIM\n  "],["value","Domestic"],["formControlName","activityScope"],["value","National"],["value","Interstate"],[1,"row"],[1,"col-12"],["matInput","","placeholder","Add an activity here & hit enter...","input","","type","text","formControlName","title"],["mat-raised-button","","color","primary","type","submit"],[3,"value"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon"),t._uU(3," note_add"),t.qZA(),t.TgZ(4,"h2"),t._uU(5,"Create Activity"),t.qZA()(),t.TgZ(6,"form",2),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(7,"div")(8,"mat-form-field",3)(9,"mat-label"),t._uU(10,"Type"),t.qZA(),t.TgZ(11,"mat-select",4)(12,"mat-option",5),t._uU(13,"Documentation "),t.qZA(),t.TgZ(14,"mat-option",6),t._uU(15,"Policy"),t.qZA(),t.TgZ(16,"mat-option",7),t._uU(17,"Procedure"),t.qZA(),t.TgZ(18,"mat-option",8),t._uU(19,"Scheme"),t.qZA(),t.TgZ(20,"mat-option",9),t._uU(21,"Others"),t.qZA()()()(),t.TgZ(22,"div",1)(23,"div")(24,"mat-form-field",3)(25,"mat-label"),t._uU(26,"Related To"),t.qZA(),t.TgZ(27,"mat-select",10)(28,"mat-option",11),t._uU(29,"Single Ministry/Department "),t.qZA(),t.TgZ(30,"mat-option",12),t._uU(31,"Multiple Ministries/Departments"),t.qZA(),t.TgZ(32,"mat-option",9),t._uU(33,"Others"),t.qZA()()()(),t.TgZ(34,"div",13)(35,"mat-form-field",14)(36,"mat-label"),t._uU(37,"Ministry/Department"),t.qZA(),t.TgZ(38,"mat-select",15),t.YNc(39,H,2,2,"mat-option",16),t.qZA()()()(),t.TgZ(40,"div")(41,"mat-form-field",3)(42,"mat-label"),t._uU(43,"Entry Type"),t.qZA(),t.TgZ(44,"mat-select",17)(45,"mat-option",18),t._uU(46,"Issue "),t.qZA(),t.TgZ(47,"mat-option",19),t._uU(48,"Suggestion"),t.qZA(),t.TgZ(49,"mat-option",9),t._uU(50,"Others"),t.qZA()()()(),t.TgZ(51,"div",1)(52,"div")(53,"mat-form-field",3)(54,"mat-label"),t._uU(55,"Sector"),t.qZA(),t.TgZ(56,"mat-select",20)(57,"mat-option",21),t._uU(58,"EXIM "),t.qZA(),t.TgZ(59,"mat-option",22),t._uU(60,"Domestic"),t.qZA(),t.TgZ(61,"mat-option",9),t._uU(62,"Others"),t.qZA()()()(),t.TgZ(63,"div",13)(64,"mat-form-field",3)(65,"mat-label"),t._uU(66,"Scope"),t.qZA(),t.TgZ(67,"mat-select",23)(68,"mat-option",24),t._uU(69,"National"),t.qZA(),t.TgZ(70,"mat-option",25),t._uU(71,"Interstate"),t.qZA()()()()(),t.TgZ(72,"div",26)(73,"mat-form-field",3)(74,"mat-label"),t._uU(75,"Title"),t.qZA(),t.TgZ(76,"div",27),t._UZ(77,"input",28),t.qZA()()(),t._UZ(78,"app-rich-text-editor"),t.TgZ(79,"button",29),t._uU(80," Submit "),t.qZA()()()),2&i&&(t.xp6(6),t.Q6J("formGroup",n.activityForm),t.xp6(33),t.Q6J("ngForOf",n.organizationsData))},dependencies:[p.sg,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,y.ey,G.lW,A.Hw,u.KE,u.hX,L.Nt,Z.gD,X],styles:[".container[_ngcontent-%COMP%]{background-color:#fff}"]}),e})()}];let V=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.Bz.forChild(K),f.Bz]}),e})();var W=a(487);let tt=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,V,c.UX,W.m]}),e})()}}]);