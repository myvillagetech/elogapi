"use strict";(self.webpackChunkelog_web=self.webpackChunkelog_web||[]).push([[411],{9411:(b,_,s)=>{s.r(_),s.d(_,{OrganizationModule:()=>ht});var d=s(6895),Z=s(1252),v=s(4006),f=s(3060),g=s(8202),C=s(4025),z=s(7335),t=s(4650),U=s(4068),y=s(3081),I=s(3293),m=s(5938);let N=(()=>{class i{constructor(e){this.matDialog=e}openAddUser(e){return this.matDialog.open(I.H,{disableClose:!0,minWidth:"80vw",data:e})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(m.uw))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var A=s(2653),P=s(5017),c=s(3626),R=s(6903),S=s(9690),w=s(4859),u=s(3546),M=s(6709),T=s(7331),x=s(7392),O=s(9549),L=s(4144),E=s(455);function D(i,o){if(1&i&&(t.TgZ(0,"mat-chip"),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e.Name)}}function Y(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"th",29)(1,"mat-checkbox",30),t.NdJ("change",function(a){t.CHM(e);const r=t.oxw();return t.KtG(a?r.toggleAllRows():null)}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("checked",e.tableRowSelection.hasValue()&&e.isAllSelected())("indeterminate",e.tableRowSelection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function k(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"td",31)(1,"mat-checkbox",32),t.NdJ("click",function(a){return a.stopPropagation()})("change",function(a){const l=t.CHM(e).$implicit,p=t.oxw();return t.KtG(a?p.tableRowSelection.toggle(l):null)}),t.qZA()()}if(2&i){const e=o.$implicit,n=t.oxw();t.xp6(1),t.Q6J("checked",n.tableRowSelection.isSelected(e))("aria-label",n.checkboxLabel(e))}}function F(i,o){1&i&&(t.TgZ(0,"th",29),t._uU(1,"Name"),t.qZA())}function J(i,o){if(1&i&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(null==e?null:e.Name)}}function Q(i,o){1&i&&(t.TgZ(0,"th",29),t._uU(1,"Email"),t.qZA())}function q(i,o){if(1&i&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e.email)}}function B(i,o){1&i&&(t.TgZ(0,"th",29),t._uU(1,"Email Notification"),t.qZA())}function G(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"td",31)(1,"mat-slide-toggle",33),t.NdJ("change",function(a){t.CHM(e);const r=t.oxw();return t.KtG(r.onEmailNotificationChecked(a))}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("color",e.color)}}function $(i,o){1&i&&t._UZ(0,"tr",34)}function j(i,o){1&i&&t._UZ(0,"tr",35)}function H(i,o){1&i&&(t.TgZ(0,"div")(1,"mat-card",36),t._uU(2," No users found "),t.qZA()())}let K=(()=>{class i{constructor(e,n,a,r,l){this.alertpopupService=e,this.storageService=n,this.organizationService=a,this.dialogref=r,this.data=l,this.selectedOrganizationId="",this.organizationUsersData=[],this.displayedColumns=["select","Name","Email","Email Notification"],this.dataSource=new c.by(this.organizationUsersData),this.tableRowSelection=new P.Ov(!0,[]),this.userIdsArray=[],this.color="accent",this.isEmailNotificationActive=!1,this.disabled=!1,this.selectedOrganizationId=l}ngOnInit(){this.getUsersOrgnationById()}getUsersOrgnationById(){this.organizationService.getOrganizationsSearchCriteria({pageNumber:1e3,pageSize:0,sortField:"",sortOrder:0,type:"",organization:"",organizationId:this.selectedOrganizationId,userId:"",userSearch:""}).subscribe(n=>{this.organizationName=n.data.organizations[0].organization,this.organizationUsersData=n.data.organizations[0].users.filter(a=>z.G.SuperAdmin!==a.roles[0]),this.dataSource=new c.by(this.organizationUsersData)})}isAllSelected(){return this.tableRowSelection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.tableRowSelection.clear():this.tableRowSelection.select(...this.dataSource.data)}checkboxLabel(e){return e?`${this.tableRowSelection.isSelected(e)?"deselect":"select"} row ${e.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}userSearch(e){if(e.target.value){const n=new R.C;this.dataSource=new c.by(n.transform(this.organizationUsersData,e.target.value,"Name"))}else this.dataSource=new c.by(this.organizationUsersData)}selectedUsers(){this.tableRowSelection.selected.map(n=>{this.userIdsArray.push(n._id)}),this.organizationService.removeUsersfromOrganization({userIds:this.userIdsArray,organizationId:this.selectedOrganizationId}).subscribe(n=>{this.alertpopupService.open({message:n.message,action:"ok"})},n=>{this.alertpopupService.open({message:"Faild to remove users from Organization! Please try again ",action:"ok"})})}onEmailNotificationChecked(e){}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(A.z),t.Y36(S.V),t.Y36(U.M),t.Y36(m.so),t.Y36(m.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-remove-user-pop-up"]],decls:46,vars:10,consts:[[1,"elog-dialog"],[1,"user"],["mat-dialog-close","true",1,"close",3,"mat-dialog-close"],[1,"row","m-0","my-2"],[1,"col-md-8"],[1,"selected-chips"],[4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"d-flex","justify-content-end"],["appearance","outline"],["matInput","","placeholder","Enter User Name","input","","type","text",3,"keyup"],["matSuffix",""],[1,"elog-dialog-body","p-0"],[1,"row","m-0"],[1,"col-12"],["mat-dialog-content",""],["mat-table","",2,"padding-right","10px","width","100%",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","Email"],["matColumnDef","Email Notification"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],[1,"d-flex","btn","justify-content-end"],["mat-raised-button","","mat-dialog-close","true",3,"mat-dialog-close"],["mat-raised-button","","color","primary","mat-dialog-close","true",3,"disabled","mat-dialog-close","click"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],[3,"color","change"],["mat-header-row",""],["mat-row",""],[1,"noUserFoundCard"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h1",1)(2,"span"),t._uU(3,"Remove User "),t.TgZ(4,"small"),t._uU(5,">"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"button",2),t._uU(8,"x"),t.qZA()(),t.TgZ(9,"div",3)(10,"div",4)(11,"div",5)(12,"mat-chip-list"),t.YNc(13,D,2,1,"mat-chip",6),t.qZA()()(),t.TgZ(14,"div",7)(15,"div",8)(16,"mat-form-field",9)(17,"input",10),t.NdJ("keyup",function(r){return n.userSearch(r)}),t.qZA(),t.TgZ(18,"mat-icon",11),t._uU(19,"search"),t.qZA()()()()(),t.TgZ(20,"mat-card-content",12)(21,"div",13)(22,"div",14)(23,"div",15)(24,"table",16),t.ynx(25,17),t.YNc(26,Y,2,3,"th",18),t.YNc(27,k,2,2,"td",19),t.BQk(),t.ynx(28,20),t.YNc(29,F,2,0,"th",18),t.YNc(30,J,2,1,"td",19),t.BQk(),t.ynx(31,21),t.YNc(32,Q,2,0,"th",18),t.YNc(33,q,2,1,"td",19),t.BQk(),t.ynx(34,22),t.YNc(35,B,2,0,"th",18),t.YNc(36,G,2,1,"td",19),t.BQk(),t.YNc(37,$,1,0,"tr",23),t.YNc(38,j,1,0,"tr",24),t.qZA(),t.YNc(39,H,3,0,"div",25),t.qZA(),t.TgZ(40,"mat-card-actions")(41,"div",26)(42,"button",27),t._uU(43,"Cancel"),t.qZA(),t.TgZ(44,"button",28),t.NdJ("click",function(){return n.selectedUsers()}),t._uU(45," Remove "),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.hij(" ",n.organizationName," "),t.xp6(1),t.Q6J("mat-dialog-close",!1),t.xp6(6),t.Q6J("ngForOf",n.tableRowSelection.selected),t.xp6(11),t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("ngIf",0===(null==n.dataSource.filteredData?null:n.dataSource.filteredData.length)),t.xp6(3),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Q6J("disabled",0===n.tableRowSelection.selected.length)("mat-dialog-close",!0))},dependencies:[d.sg,d.O5,w.lW,u.a8,u.dn,u.hq,M.oG,T.qn,T.HS,m.ZT,m.xY,x.Hw,O.KE,O.R9,L.Nt,E.Rr,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk],styles:[".noUserFoundCard[_ngcontent-%COMP%]{text-align:center;color:#ec5757}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:1em}"]}),i})(),V=(()=>{class i{constructor(e){this.matDialog=e}removeUserPopUp(e){return this.matDialog.open(K,{disableClose:!0,minWidth:"80vw",data:e})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(m.uw))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var W=s(9642),X=s(2133),h=s(3848);function tt(i,o){if(1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"person_pin"),t.qZA(),t._uU(2)),2&i){const e=t.oxw();t.xp6(2),t.hij(" Active (",e.activeMetricsCount?e.activeMetricsCount:0,") ")}}function et(i,o){if(1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"person_outline"),t.qZA(),t._uU(2)),2&i){const e=t.oxw();t.xp6(2),t.hij(" Ministry/Department (",e.ministriesMetricsCount?e.ministriesMetricsCount:0,") ")}}function it(i,o){if(1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"group_add"),t.qZA(),t._uU(2)),2&i){const e=t.oxw();t.xp6(2),t.hij(" Association (",e.associationsMetricsCount?e.associationsMetricsCount:0,") ")}}function nt(i,o){if(1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"not_interested"),t.qZA(),t._uU(2)),2&i){const e=t.oxw();t.xp6(2),t.hij(" Inactive (",e.inActiveMetricsCount?e.inActiveMetricsCount:0,") ")}}function ot(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",9)(1,"mat-card",10),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.createOrganization())}),t.TgZ(2,"mat-card-content")(3,"div",11)(4,"font"),t._uU(5,"+"),t.qZA()(),t.TgZ(6,"h4",12),t._uU(7,"Create Organization"),t.qZA()()()()}}function at(i,o){1&i&&(t.TgZ(0,"div",13)(1,"h4"),t._uU(2,"No Organizations Assigned!!"),t.qZA()())}function st(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"span",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(4).$implicit,r=t.oxw();return t.KtG(r.openRemoveUserPopup(a._id))}),t.TgZ(1,"div",26)(2,"mat-icon"),t._uU(3,"person_remove"),t.qZA(),t._uU(4," Remove User "),t.qZA()()}}function rt(i,o){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"span",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(4).$implicit,r=t.oxw();return t.KtG(r.disableOrganization(a._id,a.organization))}),t.TgZ(2,"div",26)(3,"mat-icon"),t._uU(4,"not_interested "),t.qZA(),t._uU(5," Disable "),t.qZA()(),t.BQk()}}function ct(i,o){1&i&&t.GkF(0)}function lt(i,o){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"span",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(3).$implicit,r=t.oxw();return t.KtG(r.openAddUserPopup(a._id))}),t.TgZ(2,"div",26)(3,"mat-icon"),t._uU(4,"person_add"),t.qZA(),t._uU(5," Add User "),t.qZA()(),t.TgZ(6,"span",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(3).$implicit,r=t.oxw();return t.KtG(r.updateOrganization(a._id))}),t.TgZ(7,"div",26)(8,"mat-icon"),t._uU(9,"edit"),t.qZA(),t._uU(10," Edit "),t.qZA()(),t.YNc(11,st,5,0,"span",27),t.YNc(12,rt,6,0,"ng-container",24),t.YNc(13,ct,1,0,"ng-container",24),t.BQk()}if(2&i){const e=t.oxw(3).$implicit;t.xp6(11),t.Q6J("ngIf",(null==e.users?null:e.users.length)>1),t.xp6(1),t.Q6J("ngIf",(null==e.users?null:e.users.length)>0&&e.activities>0),t.xp6(1),t.Q6J("ngIf",0===(null==e.users?null:e.users.length)||0===e.activities)}}function dt(i,o){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"span",28),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(3).$implicit,r=t.oxw();return t.KtG(r.enableOrganization(a._id,a.organization))}),t._uU(2," Enable "),t.qZA(),t.BQk()}}function pt(i,o){if(1&i&&(t.TgZ(0,"div",23),t.YNc(1,lt,14,3,"ng-container",24),t.YNc(2,dt,3,0,"ng-container",24),t.qZA()),2&i){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",!0===e.organizationList[0].isActive),t.xp6(1),t.Q6J("ngIf",!1===e.organizationList[0].isActive)}}function gt(i,o){if(1&i&&(t.TgZ(0,"div",21),t.YNc(1,pt,3,2,"div",22),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.isUser)}}function mt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",9)(1,"mat-card")(2,"mat-card-content")(3,"div",14)(4,"h3")(5,"span",15),t._uU(6),t.ALo(7,"titlecase"),t.qZA(),t.TgZ(8,"span"),t._uU(9),t.ALo(10,"uppercase"),t.qZA()(),t.TgZ(11,"small",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.openActionBtn())}),t.TgZ(12,"mat-icon"),t._uU(13,"more_horiz"),t.qZA()()(),t.TgZ(14,"div",17)(15,"div",18)(16,"i",19),t._uU(17,"corporate_fare"),t.qZA()(),t.TgZ(18,"div")(19,"p"),t._uU(20),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA(),t.TgZ(23,"p"),t._uU(24,"0 Mb Storage"),t.qZA()()(),t.YNc(25,gt,2,1,"div",20),t.qZA()()()}if(2&i){const e=o.$implicit,n=t.oxw();t.xp6(6),t.Oqu(t.lcZ(7,5,e.organization)),t.xp6(3),t.hij(" (",t.lcZ(10,7,e.shortName),")"),t.xp6(11),t.hij(" ",e.users.length," User(s)"),t.xp6(2),t.hij("",e.activities," Activity(s)"),t.xp6(3),t.Q6J("ngIf",n.showActionBtn)}}const ut=[{path:"",component:(()=>{class i{constructor(e,n,a,r,l,p,vt,ft){this.organizationService=e,this.masterDataService=n,this.addUserPopUpService=a,this.alertpopupService=r,this.removeUserPopUpService=l,this.confirmationDialogService=p,this.storageService=vt,this.eventCommunicationsService=ft,this.filters=g.t,this.organizationListPayload={pageNumber:0,pageSize:50,sortField:"",sortOrder:0,type:"",organization:"",organizationId:"",isActive:!0,userId:"",userSearch:""},this.updatedPayload=this.organizationListPayload,this.isUser=!1,this.activeMetricsCount=0,this.associationsMetricsCount=0,this.ministriesMetricsCount=0,this.inActiveMetricsCount=0,this.showActionBtn=!0}ngOnInit(){this.getAllOrganizationsSearchCriteria(),this.eventCommunicationsService.on("NEW_USER_CREATED").subscribe(e=>{e&&this.getAllOrganizationsSearchCriteria()}),this.eventCommunicationsService.on("NEW_ORGANIZATION_CREATED").subscribe(e=>{e&&this.getAllOrganizationsSearchCriteria()}),this.getOrganizationTypes()}getOrganizationTypes(){this.masterDataService.getOrganizationTypes().subscribe(e=>{this.organizationTypes=e.data})}getAllOrganizationsSearchCriteria(){this.storageService.getDataFromLocalStorage(C.I.ROLE)===z.G.User&&(this.isUser=!0,this.updatedPayload={...this.updatedPayload,userId:this.storageService.getDataFromLocalStorage(C.I.USER_ID)}),this.organizationService.getOrganizationsSearchCriteria(this.updatedPayload).subscribe(e=>{this.organizationList=e.data.organizations.reverse(),this.activeMetricsCount=e.data.metrics[0].active[0]?.activeOrganizatiosns,this.associationsMetricsCount=e.data.metrics[0].associations[0]?.associationCount,this.ministriesMetricsCount=e.data.metrics[0].ministries[0]?.ministriesCount,this.inActiveMetricsCount=e.data.metrics[0].inActive[0]?.inActiveOrganizatiosns>0?e.data.metrics[0].inActive[0]?.inActiveOrganizatiosns:0})}applyOrganizationFilters(e){this.updatedPayload=this.organizationListPayload,Number(e.tab.textLabel)===g.t.MINISTRIES?this.updatedPayload={...this.updatedPayload,isActive:!0,type:this.organizationTypes[g.t.MINISTRIES]._id}:Number(e.tab.textLabel)===g.t.IS_ACTIVE?this.updatedPayload={...this.updatedPayload,isActive:!0}:Number(e.tab.textLabel)===g.t.ASSOCIATION?this.updatedPayload={...this.updatedPayload,isActive:!0,type:this.organizationTypes[g.t.ASSOCIATION]._id}:Number(e.tab.textLabel)===g.t.INACTIVE&&(this.updatedPayload={...this.updatedPayload,isActive:!1}),this.getAllOrganizationsSearchCriteria()}updateOrganization(e){this.organizationService.updateOrganizatioPopup(e).afterClosed().subscribe(n=>{n&&this.getAllOrganizationsSearchCriteria()})}createOrganization(){this.organizationService.openCreateOrganizatioPopup().afterClosed().subscribe(e=>{e&&this.getAllOrganizationsSearchCriteria()})}openAddUserPopup(e){this.addUserPopUpService.openAddUser(e).afterClosed().subscribe(n=>{n&&this.getAllOrganizationsSearchCriteria()})}openRemoveUserPopup(e){this.removeUserPopUpService.removeUserPopUp(e).afterClosed().subscribe(n=>{n&&this.getAllOrganizationsSearchCriteria()})}disableOrganization(e,n){this.confirmationDialogService.open({message:`Are you sure to Disable ${n}`}).afterClosed().subscribe(a=>{a&&this.organizationService.getorganizationById(e).subscribe(r=>{const l={...r.organization,isActive:!1};this.organizationService.updateOrganization(e,l).subscribe(p=>{this.alertpopupService.open({message:p.message,action:"ok"}),this.getAllOrganizationsSearchCriteria()},p=>{this.alertpopupService.open({message:"Faild to create Organization! Please try again ",action:"ok"})})})})}enableOrganization(e,n){this.confirmationDialogService.open({message:`Are you Sure to Enable ${n} `}).afterClosed().subscribe(a=>{a&&this.organizationService.getorganizationById(e).subscribe(r=>{const l={...r.organization,isActive:!0};this.organizationService.updateOrganization(e,l).subscribe(p=>{this.alertpopupService.open({message:p.message,action:"ok"}),this.getAllOrganizationsSearchCriteria()},p=>{this.alertpopupService.open({message:"Faild to create Organization! Please try again ",action:"ok"})})})})}openActionBtn(){this.showActionBtn=!this.showActionBtn}removeOrganization(e,n){this.confirmationDialogService.open({message:`Are you Sure to Delete ${n}`}).afterClosed().subscribe(a=>{a&&this.confirmationDialogService.open({message:`All the Activities, Files associated with ${n} will be deleted permanently. `}).afterClosed().subscribe(r=>{r&&this.organizationService.deleteUser(e).subscribe(l=>{this.alertpopupService.open({message:l.message,action:"ok"}),this.getAllOrganizationsSearchCriteria()},l=>{this.alertpopupService.open({message:"Faild to create Organization! Please try again ",action:"ok"})})})})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(U.M),t.Y36(y.D),t.Y36(N),t.Y36(A.z),t.Y36(V),t.Y36(W.O),t.Y36(S.V),t.Y36(X.G))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-organization-list"]],decls:15,vars:7,consts:[[1,"page-wrapper"],[1,"organization-cards",3,"selectedTabChange"],[3,"label"],["mat-tab-label",""],[1,"in-page-wrapper"],[1,"row"],["class","col-md-4 org-card",4,"ngIf"],["class","col-md-4 no_org-card",4,"ngIf"],["class","col-md-4 org-card",4,"ngFor","ngForOf"],[1,"col-md-4","org-card"],[1,"plus",3,"click"],[1,"add-icon"],[1,"mt-2"],[1,"col-md-4","no_org-card"],[1,"heading","d-flex","align-items-center","justify-content-between"],[1,"organization-title"],[1,"org_mob_icon",3,"click"],[1,"org_box"],[1,"org_icon"],[1,"material-icons"],["class","action-buttons",4,"ngIf"],[1,"action-buttons"],["class","row justify-content-between",4,"ngIf"],[1,"row","justify-content-between"],[4,"ngIf"],[1,"col-6",3,"click"],[1,"d-flex","align-items-center"],["class","col-6",3,"click",4,"ngIf"],[1,"d-flex","justify-content-center",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"mat-tab-group",1),t.NdJ("selectedTabChange",function(r){return n.applyOrganizationFilters(r)}),t.TgZ(2,"mat-tab",2),t.YNc(3,tt,3,1,"ng-template",3),t.qZA(),t.TgZ(4,"mat-tab",2),t.YNc(5,et,3,1,"ng-template",3),t.qZA(),t.TgZ(6,"mat-tab",2),t.YNc(7,it,3,1,"ng-template",3),t.qZA(),t.TgZ(8,"mat-tab",2),t.YNc(9,nt,3,1,"ng-template",3),t.qZA()(),t.TgZ(10,"section",4)(11,"div",5),t.YNc(12,ot,8,0,"div",6),t.YNc(13,at,3,0,"div",7),t.YNc(14,mt,26,9,"div",8),t.qZA()()()),2&e&&(t.xp6(2),t.s9C("label",n.filters.IS_ACTIVE),t.xp6(2),t.s9C("label",n.filters.MINISTRIES),t.xp6(2),t.s9C("label",n.filters.ASSOCIATION),t.xp6(2),t.s9C("label",n.filters.INACTIVE),t.xp6(4),t.Q6J("ngIf",!n.isUser),t.xp6(1),t.Q6J("ngIf",0===(null==n.organizationList?null:n.organizationList.length)),t.xp6(1),t.Q6J("ngForOf",n.organizationList))},dependencies:[d.sg,d.O5,u.a8,u.dn,x.Hw,h.SP,h.uD,h.uX,d.gd,d.rS],styles:[".add-icon[_ngcontent-%COMP%]{height:100px;width:100px;margin:auto;border:.25px solid #f44336;border-radius:50%;display:grid;place-items:center}font[_ngcontent-%COMP%]{font-size:80px;color:#f44336}.plus[_ngcontent-%COMP%]{display:grid;place-items:center;cursor:pointer}.organization-title[_ngcontent-%COMP%]{font-weight:900}.togle-button[_ngcontent-%COMP%]{width:200px!important;min-width:unset!important}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#556ee7;color:#fff!important}.noProjects-message[_ngcontent-%COMP%]{text-align:center;color:#e90e0e}"]}),i})()}];let _t=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[f.Bz.forChild(ut),f.Bz]}),i})(),ht=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.ez,Z.m,v.u5,v.UX,_t]}),i})()},8202:(b,_,s)=>{s.d(_,{t:()=>d});const d={IS_ACTIVE:2,MINISTRIES:1,ASSOCIATION:0,INACTIVE:3,MY_PROFILE:4,CHANGE_PASSWORD:5,NOTIFICATIONS:6,EMAIL_REPORTS:7}}}]);