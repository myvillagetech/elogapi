"use strict";(self.webpackChunkelog_web=self.webpackChunkelog_web||[]).push([[744],{7744:(jt,T,l)=>{l.r(T),l.d(T,{UserModule:()=>Ft});var d=l(6895),x=l(4006),h=l(3060),m=l(8202);var s=l(3626),Z=l(8739),w=l(5150),O=l(4025),t=l(4650),f=l(1584),I=l(8552),Y=l(8276),D=l(9690),k=l(9642),p=l(5938),S=l(5017),z=l(6903),U=l(2653),C=l(4859),u=l(3546),N=l(6709),v=l(7392),_=l(9549),y=l(4144),R=l(455);function L(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"th",22)(1,"mat-checkbox",23),t.NdJ("change",function(a){t.CHM(e);const r=t.oxw();return t.KtG(a?r.toggleAllRows():null)}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function J(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"td",24)(1,"mat-checkbox",25),t.NdJ("click",function(a){return a.stopPropagation()})("change",function(a){const c=t.CHM(e).$implicit,g=t.oxw();return t.KtG(a?g.selection.toggle(c):null)}),t.qZA()()}if(2&i){const e=o.$implicit,n=t.oxw();t.xp6(1),t.Q6J("checked",n.selection.isSelected(e))("aria-label",n.checkboxLabel(e))}}function Q(i,o){1&i&&(t.TgZ(0,"th",22),t._uU(1,"Organization"),t.qZA())}function q(i,o){if(1&i&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(null==e?null:e.organization)}}function M(i,o){1&i&&(t.TgZ(0,"th",22),t._uU(1,"Short Name"),t.qZA())}function F(i,o){if(1&i&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(null==e?null:e.shortName)}}function E(i,o){1&i&&(t.TgZ(0,"th",22),t._uU(1,"Email Notification"),t.qZA())}function $(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"td",24)(1,"mat-slide-toggle",26),t.NdJ("change",function(a){t.CHM(e);const r=t.oxw();return t.KtG(r.onEmailNotificationChecked(a))}),t.qZA()()}}function H(i,o){1&i&&t._UZ(0,"tr",27)}function j(i,o){1&i&&t._UZ(0,"tr",28)}function B(i,o){1&i&&(t.TgZ(0,"div")(1,"mat-card",29),t._uU(2," No organizations(s) found "),t.qZA()())}let G=(()=>{class i{constructor(e,n,a,r){this.userService=e,this.alertpopupService=n,this.dialogref=a,this.data=r,this.orgnizationsData=[],this.dataSource=new s.by(this.orgnizationsData),this.selection=new S.Ov(!0,[]),this.displayedColumns=["select","Organization","shortName","emailNotification"],this.organizationIDs=[],this.userPayload={pageNumber:0,pageSize:50,sortField:"",sortOrder:0,type:"",role:"",userId:"",user:""},this.selectedUser=r}ngOnInit(){this.userSearchCriteria(this.userPayload)}userSearchCriteria(e){e.userId=this.selectedUser._id,e.userId&&this.userService.userSearchCriteria(e).subscribe(n=>{this.orgnizationsData=n.data.users[0]?.organizationsdata,this.dataSource=new s.by(this.orgnizationsData)})}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}checkboxLabel(e){return e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}removeOrganization(){this.selection.selected.map(n=>{this.organizationIDs.push(n._id)}),this.userService.removeOrganizationsfromUser({userId:this.selectedUser._id,organizationIds:this.organizationIDs}).subscribe(n=>{this.alertpopupService.open({message:"Organization removed successfully.",action:"ok"}),this.userSearchCriteria(this.userPayload)},n=>{this.alertpopupService.open({message:"Faild to remove users from Organization! Please try again ",action:"ok"})})}onEmailNotificationChecked(e){console.log(e)}organisationSearch(e){if(e.target.value){const n=new z.C;this.dataSource=new s.by(n.transform(this.orgnizationsData,e.target.value,"organization"))}else this.dataSource=new s.by(this.orgnizationsData)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.K),t.Y36(U.z),t.Y36(p.so),t.Y36(p.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-remove-org-pop-up"]],decls:38,vars:9,consts:[[1,"elog-dialog"],[1,"user"],["color","warn","mat-dialog-close","true",1,"close",3,"mat-dialog-close"],[1,"d-flex","justify-content-end"],["appearance","outline"],["matInput","","placeholder","Enter Organisation Name","input","","type","text",3,"keyup"],["matSuffix",""],[1,"elog-dialog-body","pt-0"],["mat-dialog-content",""],["mat-table","",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Organization"],["matColumnDef","shortName"],["matColumnDef","emailNotification"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],[1,"d-flex","btn","justify-content-end"],["mat-raised-button","","mat-dialog-close","true",3,"mat-dialog-close"],["mat-raised-button","","color","primary","mat-dialog-close","true",3,"mat-dialog-close","disabled","click"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],[3,"change"],["mat-header-row",""],["mat-row",""],[1,"noUserFoundCard"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h1",1)(2,"span"),t._uU(3,"Remove Organization "),t.TgZ(4,"small"),t._uU(5,">"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"button",2),t._uU(8,"x"),t.qZA()(),t.TgZ(9,"div",3)(10,"mat-form-field",4)(11,"input",5),t.NdJ("keyup",function(r){return n.organisationSearch(r)}),t.qZA(),t.TgZ(12,"mat-icon",6),t._uU(13,"search"),t.qZA()()(),t.TgZ(14,"mat-card-content",7)(15,"div",8)(16,"table",9),t.ynx(17,10),t.YNc(18,L,2,3,"th",11),t.YNc(19,J,2,2,"td",12),t.BQk(),t.ynx(20,13),t.YNc(21,Q,2,0,"th",11),t.YNc(22,q,2,1,"td",12),t.BQk(),t.ynx(23,14),t.YNc(24,M,2,0,"th",11),t.YNc(25,F,2,1,"td",12),t.BQk(),t.ynx(26,15),t.YNc(27,E,2,0,"th",11),t.YNc(28,$,2,0,"td",12),t.BQk(),t.YNc(29,H,1,0,"tr",16),t.YNc(30,j,1,0,"tr",17),t.qZA(),t.YNc(31,B,3,0,"div",18),t.qZA(),t.TgZ(32,"mat-card-actions")(33,"div",19)(34,"button",20),t._uU(35,"Cancel"),t.qZA(),t.TgZ(36,"button",21),t.NdJ("click",function(){return n.removeOrganization()}),t._uU(37," Remove "),t.qZA()()()()()),2&e&&(t.xp6(6),t.hij(" ",n.selectedUser.Name,""),t.xp6(1),t.Q6J("mat-dialog-close",!1),t.xp6(9),t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("ngIf",0==(null==n.dataSource.filteredData?null:n.dataSource.filteredData.length)),t.xp6(3),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Q6J("mat-dialog-close",!0)("disabled",0===n.selection.selected.length))},dependencies:[d.O5,C.lW,u.a8,u.dn,u.hq,N.oG,p.ZT,p.xY,v.Hw,_.KE,_.R9,y.Nt,R.Rr,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk]}),i})(),K=(()=>{class i{constructor(e){this.matDialog=e}removeOrgPopUp(e){return this.matDialog.open(G,{disableClose:!0,minWidth:"800px",data:e})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(p.uw))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var V=l(7199),P=l(7331);function W(i,o){if(1&i&&(t.TgZ(0,"mat-chip"),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e.organization)}}function X(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"th",30)(1,"mat-checkbox",31),t.NdJ("change",function(a){t.CHM(e);const r=t.oxw();return t.KtG(a?r.toggleAllRows():null)}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function tt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"td",32)(1,"mat-checkbox",33),t.NdJ("click",function(a){return a.stopPropagation()})("change",function(a){const c=t.CHM(e).$implicit,g=t.oxw();return t.KtG(a?g.selection.toggle(c):null)}),t.qZA()()}if(2&i){const e=o.$implicit,n=t.oxw();t.xp6(1),t.Q6J("checked",n.selection.isSelected(e))("aria-label",n.checkboxLabel(e))}}function et(i,o){1&i&&(t.TgZ(0,"th",30),t._uU(1,"Organization"),t.qZA())}function it(i,o){if(1&i&&(t.TgZ(0,"td",32),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(null==e?null:e.organization)}}function nt(i,o){1&i&&(t.TgZ(0,"th",30),t._uU(1,"ShortName"),t.qZA())}function ot(i,o){if(1&i&&(t.TgZ(0,"td",32),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(null==e?null:e.shortName)}}function at(i,o){1&i&&t._UZ(0,"tr",34)}function st(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"tr",35),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.selection.toggle(r))}),t.qZA()}}function rt(i,o){1&i&&(t.TgZ(0,"div")(1,"mat-card",36),t._uU(2," No organizations(s) found "),t.qZA()())}function lt(i,o){1&i&&(t.TgZ(0,"th",30),t._uU(1,"Assigned Project(s)"),t.qZA())}function ct(i,o){if(1&i&&(t.TgZ(0,"td",32),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(null==e?null:e.organization)}}function pt(i,o){1&i&&t._UZ(0,"tr",34)}function mt(i,o){1&i&&t._UZ(0,"tr",37)}function ut(i,o){1&i&&(t.TgZ(0,"div")(1,"mat-card",36),t._uU(2," No project(s) assigned "),t.qZA()())}let dt=(()=>{class i{constructor(e,n,a,r,c){this.userService=e,this.organizationService=n,this.alertpopupService=a,this.dialogref=r,this.data=c,this.organizations=[],this.displayedColumns=["select","organization","shortName"],this.displayedOrgColumns=["organization"],this.selection=new S.Ov(!0,[]),this.dataSource=new s.by(this.organizations),this.assignOrgs=[],this.selectedUser=c}ngOnInit(){this.getOrganizations()}getOrganizations(){this.userService.getOrganisation().subscribe(e=>{this.organizations=e.organizations,this.dataSource=new s.by(this.organizations)})}addOrganisation(){this.organizationService.openCreateOrganizatioPopup().afterClosed().subscribe(e=>{console.log(e)})}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}checkboxLabel(e){return e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}assignProjects(){this.selection._selected.length>0&&(this.assignOrgs=[],this.selection._selected.forEach(e=>{this.assignOrgs.push({id:e._id,organization:e.organization})}),this.getOrganizations())}assign(){var e=[];this.selection.selected.map(a=>{e.push(a._id)}),this.userService.addUsersToOrganizationsfromUser({userId:this.selectedUser._id,organizationIds:e}).subscribe(a=>{a.success&&(this.alertpopupService.open({message:"Organization(s) assigned successfully.",action:"ok"}),this.getOrganizations())},a=>{this.alertpopupService.open({message:"Faild to assign Organization(s)! Please try again ",action:"ok"})})}organisationSearch(e){if(e.target.value){const n=new z.C;this.dataSource=new s.by(n.transform(this.organizations,e.target.value,"organization"))}else this.dataSource=new s.by(this.organizations)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.K),t.Y36(V.M),t.Y36(U.z),t.Y36(p.so),t.Y36(p.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-assign-organization-pop-up"]],decls:50,vars:12,consts:[[1,"elog-dialog"],[1,"user"],["mat-raised-button","","color","primary",3,"click"],[1,"row","mt-2"],[1,"col-md-8"],[1,"selected-chips"],[4,"ngFor","ngForOf"],[1,"col-md-4"],["appearance","outline"],["matInput","","placeholder","Enter Organisation Name","input","","type","text",3,"keyup"],["matSuffix",""],[1,"elog-dialog-body","p-0"],[1,"row","mt-4"],[1,"col-md-7"],["mat-dialog-content",""],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","organization"],["matColumnDef","shortName"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],[1,"col-md-5","px-4"],["mat-table","",1,"mat-elevation-z8","assigned-projects",3,"dataSource"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"d-flex","btn","justify-content-end"],["mat-raised-button","","mat-dialog-close","true",3,"mat-dialog-close"],["mat-raised-button","","color","primary","mat-dialog-close","true",3,"disabled","click"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-row",""],["mat-row","",3,"click"],[1,"noUserFoundCard"],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h1",1)(2,"span"),t._uU(3,"Assign Organization "),t.TgZ(4,"small"),t._uU(5,">"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"button",2),t.NdJ("click",function(){return n.addOrganisation()}),t._uU(8," Add Organisation "),t.qZA()(),t.TgZ(9,"div",3)(10,"div",4)(11,"div",5)(12,"mat-chip-list"),t.YNc(13,W,2,1,"mat-chip",6),t.qZA()()(),t.TgZ(14,"div",7)(15,"mat-form-field",8)(16,"input",9),t.NdJ("keyup",function(r){return n.organisationSearch(r)}),t.qZA(),t.TgZ(17,"mat-icon",10),t._uU(18,"search"),t.qZA()()()(),t.TgZ(19,"mat-card-content",11)(20,"div",12)(21,"div",13)(22,"div",14)(23,"table",15),t.ynx(24,16),t.YNc(25,X,2,3,"th",17),t.YNc(26,tt,2,2,"td",18),t.BQk(),t.ynx(27,19),t.YNc(28,et,2,0,"th",17),t.YNc(29,it,2,1,"td",18),t.BQk(),t.ynx(30,20),t.YNc(31,nt,2,0,"th",17),t.YNc(32,ot,2,1,"td",18),t.BQk(),t.YNc(33,at,1,0,"tr",21),t.YNc(34,st,1,0,"tr",22),t.qZA(),t.YNc(35,rt,3,0,"div",23),t.qZA()(),t.TgZ(36,"div",24)(37,"table",25),t.ynx(38,19),t.YNc(39,lt,2,0,"th",17),t.YNc(40,ct,2,1,"td",18),t.BQk(),t.YNc(41,pt,1,0,"tr",21),t.YNc(42,mt,1,0,"tr",26),t.qZA(),t.YNc(43,ut,3,0,"div",23),t.qZA()(),t.TgZ(44,"mat-card-actions")(45,"div",27)(46,"button",28),t._uU(47,"Cancel"),t.qZA(),t.TgZ(48,"button",29),t.NdJ("click",function(){return n.assign()}),t._uU(49," Assign "),t.qZA()()()()()),2&e&&(t.xp6(6),t.hij(" ",n.selectedUser.Name,""),t.xp6(7),t.Q6J("ngForOf",n.selection.selected),t.xp6(10),t.Q6J("dataSource",n.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("ngIf",0==(null==n.dataSource.filteredData?null:n.dataSource.filteredData.length)),t.xp6(2),t.Q6J("dataSource",n.assignOrgs),t.xp6(4),t.Q6J("matHeaderRowDef",n.displayedOrgColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedOrgColumns),t.xp6(1),t.Q6J("ngIf",0===(null==n.assignOrgs?null:n.assignOrgs.length)),t.xp6(3),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Q6J("disabled",0==n.selection.selected.length))},dependencies:[d.sg,d.O5,C.lW,u.a8,u.dn,u.hq,N.oG,P.qn,P.HS,p.ZT,p.xY,v.Hw,_.KE,_.R9,y.Nt,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk],styles:[".userTable[_ngcontent-%COMP%]{width:100%}.userTable[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{background-color:#818dcf;color:#fff}.userTable[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]{background:whitesmoke}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px;text-align:left;border-bottom:1px solid rgb(206,202,202)}"]}),i})(),gt=(()=>{class i{constructor(e){this.matDialog=e}assignOrgPopUp(e){return this.matDialog.open(dt,{data:e,minWidth:"800px"})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(p.uw))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var b=l(3848);function _t(i,o){if(1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"person_pin"),t.qZA(),t._uU(2)),2&i){const e=t.oxw();t.xp6(2),t.hij(" Active (",e.activeMetricsCount,") ")}}function ht(i,o){1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"person_outline"),t.qZA(),t._uU(2,"Admin (1) "))}function ft(i,o){if(1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"people"),t.qZA(),t._uU(2)),2&i){const e=t.oxw();t.xp6(2),t.hij(" Ministry/Department(",e.ministriesMetricsCount,") ")}}function Ut(i,o){if(1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"group_add"),t.qZA(),t._uU(2)),2&i){const e=t.oxw();t.xp6(2),t.hij(" Association (",e.associationsMetricsCount,") ")}}function Ct(i,o){if(1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"not_interested"),t.qZA(),t._uU(2)),2&i){const e=t.oxw();t.xp6(2),t.hij(" Inactive (",e.inActiveMetricsCount,") ")}}function vt(i,o){1&i&&(t.TgZ(0,"th",18),t._uU(1," Name "),t.qZA())}function bt(i,o){if(1&i&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij(" ",e.Name," ")}}function Tt(i,o){1&i&&(t.TgZ(0,"th",18),t._uU(1," Email "),t.qZA())}function xt(i,o){if(1&i&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij(" ",e.email," ")}}function At(i,o){1&i&&(t.TgZ(0,"th",18),t._uU(1," Organizations "),t.qZA())}function Zt(i,o){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" +",e.organizationsdata.length-1," More")}}function Ot(i,o){if(1&i&&(t.TgZ(0,"div"),t._uU(1),t.YNc(2,Zt,2,1,"span",20),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==e||null==e.organizationsdata[0]?null:e.organizationsdata[0].organization,"... "),t.xp6(1),t.Q6J("ngIf",(null==e.organizationsdata?null:e.organizationsdata.length)>1)}}function St(i,o){1&i&&(t.TgZ(0,"div")(1,"span"),t._uU(2,"N/A"),t.qZA()())}function zt(i,o){if(1&i&&(t.TgZ(0,"td",19),t.YNc(1,Ot,3,2,"div",20),t.YNc(2,St,3,0,"div",20),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf",(null==e.organizationsdata?null:e.organizationsdata.length)>0),t.xp6(1),t.Q6J("ngIf",0===(null==e.organizationsdata?null:e.organizationsdata.length))}}function Nt(i,o){1&i&&(t.TgZ(0,"th",21),t._uU(1," Actions "),t.qZA())}function yt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",2),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.editUser(a._id))}),t._uU(1,"Edit"),t.qZA()}}function Pt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.disableOrenableUser(a._id,!1))}),t._uU(1,"Disable"),t.qZA()}}function wt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.disableOrenableUser(a._id,!0))}),t._uU(1,"Enable"),t.qZA()}}function It(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.removeOrganisation(a))}),t._uU(1,"Remove Organisation"),t.qZA()}}function Yt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.assignOrganisation(a))}),t._uU(1,"Assign Organisation"),t.qZA()}}function Dt(i,o){if(1&i&&(t.TgZ(0,"div",23),t.YNc(1,yt,2,0,"button",24),t.YNc(2,Pt,2,0,"button",25),t.YNc(3,wt,2,0,"button",25),t.YNc(4,It,2,0,"button",26),t.YNc(5,Yt,2,0,"button",27),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",e.isActive),t.xp6(1),t.Q6J("ngIf",e.isActive),t.xp6(1),t.Q6J("ngIf",!e.isActive),t.xp6(1),t.Q6J("ngIf",(null==e.organizationsdata?null:e.organizationsdata.length)>0),t.xp6(1),t.Q6J("ngIf",0===(null==e.organizationsdata?null:e.organizationsdata.length))}}function kt(i,o){if(1&i&&(t.TgZ(0,"td",19),t.YNc(1,Dt,6,5,"div",22),t.qZA()),2&i){const e=o.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.loginUserID!==e._id)}}function Rt(i,o){1&i&&t._UZ(0,"tr",31)}function Lt(i,o){1&i&&t._UZ(0,"tr",32)}const Jt=[{path:"",component:(()=>{class i{constructor(e,n,a,r,c,g,Et,$t,Ht){this.userService=e,this.addNewUserService=n,this.profileService=a,this.storageService=r,this.router=c,this.confirmationDialogService=g,this.removeOrgPopUpService=Et,this.alertpopupService=$t,this.assignOrganizationPopUpService=Ht,this.usersList=[],this.filters=m.t,this.customPage=w.Z,this.selectedTab={tab:{textLabel:m.t.IS_ACTIVE}},this.userPayload={pageNumber:0,pageSize:50,sortField:"",sortOrder:0,type:"",isActive:!0,role:"",userId:"",user:""},this.activeMetricsCount=0,this.adminMetricsCount=0,this.associationsMetricsCount=0,this.ministriesMetricsCount=0,this.inActiveMetricsCount=0,this.displayedColumns=["Name","Email","Organization","Actions"],this.dataSource=new s.by(this.usersList)}ngOnInit(){this.userSearchCriteria(this.userPayload)}userSearchCriteria(e){this.userService.userSearchCriteria(e).subscribe(n=>{this.activeMetricsCount=n.data.metrics[0].active[0]?.activeUsers,this.associationsMetricsCount=n.data.metrics[0].associations[0]?.associationCount,this.ministriesMetricsCount=n.data.metrics[0].ministries[0]?.ministriesCount,this.inActiveMetricsCount=n.data.metrics[0].inActive[0]?.inActiveUsers,this.usersList=n.data.users.reverse(),this.dataSource=new s.by(this.usersList),this.dataSource.paginator=this.paginator})}get loginUserID(){return this.storageService.getDataFromLocalStorage(O.I.USER_ID)}editUser(e){this.addNewUserService.openUpdateUserPopup(e).afterClosed().subscribe(n=>{n&&this.applyUserFilters(this.selectedTab)})}assignOrganisation(e){this.assignOrganizationPopUpService.assignOrgPopUp(e).afterClosed().subscribe(n=>{n&&this.applyUserFilters(this.selectedTab)})}removeOrganisation(e){this.removeOrgPopUpService.removeOrgPopUp(e).afterClosed().subscribe(n=>{n&&this.applyUserFilters(this.selectedTab)})}disableOrenableUser(e,n){var a={isActive:n};this.confirmationDialogService.open({message:n?"Are you sure want to enable!!":"Are you sure want to disable!!"}).afterClosed().subscribe(r=>{r&&this.profileService.inActiveUser(e,a).subscribe(c=>{this.alertpopupService.open({message:n?"User enabled successfully":"User disabled successfully",action:"ok"}),this.applyUserFilters(this.selectedTab)})})}addUser(){this.addNewUserService.openAddUser()}updateUserDetails(e){this.profileService.getUsersBySearchCriteria(e).subscribe(n=>{this.usersList=n.users[0].users})}applyUserFilters(e){this.selectedTab=e;let n=this.userPayload;if(Number(e.tab.textLabel)===m.t.IS_ACTIVE)n={...n,isActive:!0};else if(Number(e.tab.textLabel)===m.t.MY_PROFILE){var a=this.storageService.getDataFromLocalStorage(O.I.USER_ID);n={...n,isActive:!0,userId:a}}else Number(e.tab.textLabel)===m.t.INACTIVE?n={...n,isActive:!1}:Number(e.tab.textLabel)===m.t.MINISTRIES?n={...n,isActive:!0,type:"63973bfb61ab6f49bfdd3c35"}:Number(e.tab.textLabel)===m.t.ASSOCIATION&&(n={...n,isActive:!0,type:"63973c8961ab6f49bfdd3c38"});this.userSearchCriteria(n)}ngAfterViewInit(){this.dataSource.paginator=this.paginator}onChangedPageSize(e){console.log(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.K),t.Y36(I.E),t.Y36(Y.H),t.Y36(D.V),t.Y36(h.F0),t.Y36(k.O),t.Y36(K),t.Y36(U.z),t.Y36(gt))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-user-list"]],viewQuery:function(e,n){if(1&e&&t.Gf(Z.NW,5),2&e){let a;t.iGM(a=t.CRH())&&(n.paginator=a.first)}},decls:33,vars:11,consts:[[1,"page-wrapper","add-height"],[1,"text-end"],["mat-raised-button","","color","primary",3,"click"],[1,"mt-2","users_list",3,"selectedTabChange"],[3,"label"],["mat-tab-label",""],["mat-table","",1,"mat-elevation-z8","userTable",3,"dataSource"],["matColumnDef","Name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Email"],["matColumnDef","Organization"],["matColumnDef","Actions"],["class","action-center","mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSize","length","pageSizeOptions","page"],["paginator",""],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["mat-header-cell","",1,"action-center"],["class","d-flex",4,"ngIf"],[1,"d-flex"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","",3,"click",4,"ngIf"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click",4,"ngIf"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return n.addUser()}),t._uU(3,"Add Users"),t.qZA()(),t.TgZ(4,"mat-tab-group",3),t.NdJ("selectedTabChange",function(r){return n.applyUserFilters(r)}),t.TgZ(5,"mat-tab",4),t.YNc(6,_t,3,1,"ng-template",5),t.qZA(),t.TgZ(7,"mat-tab",4),t.YNc(8,ht,3,0,"ng-template",5),t.qZA(),t.TgZ(9,"mat-tab",4),t.YNc(10,ft,3,1,"ng-template",5),t.qZA(),t.TgZ(11,"mat-tab",4),t.YNc(12,Ut,3,1,"ng-template",5),t.qZA(),t.TgZ(13,"mat-tab",4),t.YNc(14,Ct,3,1,"ng-template",5),t.qZA()(),t.TgZ(15,"table",6),t.ynx(16,7),t.YNc(17,vt,2,0,"th",8),t.YNc(18,bt,2,1,"td",9),t.BQk(),t.ynx(19,10),t.YNc(20,Tt,2,0,"th",8),t.YNc(21,xt,2,1,"td",9),t.BQk(),t._uU(22," Weight Column "),t.ynx(23,11),t.YNc(24,At,2,0,"th",8),t.YNc(25,zt,3,2,"td",9),t.BQk(),t.ynx(26,12),t.YNc(27,Nt,2,0,"th",13),t.YNc(28,kt,2,1,"td",9),t.BQk(),t.YNc(29,Rt,1,0,"tr",14),t.YNc(30,Lt,1,0,"tr",15),t.qZA(),t.TgZ(31,"mat-paginator",16,17),t.NdJ("page",function(r){return n.onChangedPageSize(r)}),t.qZA()()),2&e&&(t.xp6(5),t.s9C("label",n.filters.IS_ACTIVE),t.xp6(2),t.s9C("label",n.filters.MY_PROFILE),t.xp6(2),t.s9C("label",n.filters.MINISTRIES),t.xp6(2),t.s9C("label",n.filters.ASSOCIATION),t.xp6(2),t.s9C("label",n.filters.INACTIVE),t.xp6(2),t.Q6J("dataSource",n.dataSource),t.xp6(14),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSize",n.customPage.pageSize)("length",n.usersList.length)("pageSizeOptions",n.customPage.pageSizeOptions))},dependencies:[d.O5,C.lW,v.Hw,Z.NW,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,b.SP,b.uD,b.uX]}),i})()}];let Qt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.Bz.forChild(Jt),h.Bz]}),i})();var qt=l(4660),Mt=l(9411);let Ft=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.ez,x.u5,x.UX,Qt,qt.m,Mt.OrganizationModule]}),i})()}}]);