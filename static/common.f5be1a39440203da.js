"use strict";(self.webpackChunkelog_web=self.webpackChunkelog_web||[]).push([[592],{5641:(m,l,a)=>{a.d(l,{M:()=>y});var n=a(5938),h=a(7335),u=a(4025),c=a(6903),i=a(4650),o=a(7199),s=a(9690),z=a(2126),O=a(9642),A=a(2653),D=a(6895),S=a(7957),C=a(3238),I=a(4859),P=a(9549),U=a(4144);function T(r,p){if(1&r){const t=i.EpF();i.TgZ(0,"mat-option",10,11),i.NdJ("click",function(){const g=i.CHM(t).$implicit,d=i.oxw();return i.KtG(d.optionSelected(g))}),i._uU(2),i.qZA()}if(2&r){const t=p.$implicit;i.Q6J("value",t.organization),i.xp6(2),i.hij(" ",t.organization," ")}}let L=(()=>{class r{constructor(t,e,v,g,d,$,Z,f){this.activityService=t,this.organizationService=e,this.storageService=v,this.companySettingsService=g,this.confirmationPopup=d,this.alertPopupService=$,this.dialogref=Z,this.data=f,this.organizationsList=[],this.searchedOrganizationList=[],this.isSuperAdmin=!1,this.selectedActivityId="",this.selectedActivityId=f}ngOnInit(){this.isSuperAdmin=this.storageService.getDataFromLocalStorage(u.I.ROLE)===h.G.SuperAdmin,this.logedInUserId=this.storageService.getDataFromLocalStorage(u.I.USER_ID),this.isSuperAdmin?this.getAllOrganizations():this.getOrganizationsSearchCriteria()}getAllOrganizations(){this.companySettingsService.getAllOrganizations().subscribe(t=>{this.organizationsList=t.organizations,this.searchedOrganizationList=t.organizations})}filterOrganization(t){if(t.target.value){const e=new c.C;this.searchedOrganizationList=e.transform(this.organizationsList,t.target.value,"organization")}}getOrganizationsSearchCriteria(){this.organizationService.getOrganizationsSearchCriteria({pageNumber:0,pageSize:0,sortField:"",sortOrder:0,type:"",role:"",userSearch:"",organizationId:"",organization:"",organizationSerach:"",userId:this.logedInUserId}).subscribe(e=>{this.organizationsList=e.data.organizations,this.searchedOrganizationList=e.data.organizations})}optionSelected(t){this.selectOrganization=t}selectedOrganization(){this.confirmationPopup.open({message:`Are sure to move activity to ${this.selectOrganization.organization}`}).afterClosed().subscribe(t=>{t&&this.activityService.updateActivityOrganization({organzation:this.selectOrganization._id,activityId:this.selectedActivityId}).subscribe(e=>{this.alertPopupService.open({message:"Activity Updated Successfully",action:"ok"})},e=>{this.alertPopupService.open({message:e.message?e.message:"Unable to move organization to this activity",action:"ok"})})})}}return r.\u0275fac=function(t){return new(t||r)(i.Y36(y),i.Y36(o.M),i.Y36(s.V),i.Y36(z.$),i.Y36(O.O),i.Y36(A.z),i.Y36(n.so),i.Y36(n.WI))},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-move-to-organization-pop-up"]],decls:14,vars:4,consts:[[1,"elog-dialog"],[1,"user"],[1,"elog-dialog-body"],["appearance","outline","width","100%"],["placeholder","Find an Organisation","matInput","",1,"p-2",3,"matAutocomplete","keyup"],["auto","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","p-1"],["mat-button","","mat-dialog-close","true",3,"mat-dialog-close"],["mat-dialog-close","true","mat-raised-button","","color","primary",3,"mat-dialog-close","click"],[3,"value","click"],["matOption",""]],template:function(t,e){if(1&t&&(i.TgZ(0,"div",0)(1,"h1",1),i._uU(2,"Move Organization"),i.qZA(),i.TgZ(3,"mat-dialog-content",2)(4,"mat-form-field",3)(5,"input",4),i.NdJ("keyup",function(g){return e.filterOrganization(g)}),i.qZA(),i.TgZ(6,"mat-autocomplete",null,5),i.YNc(8,T,3,2,"mat-option",6),i.qZA()()(),i.TgZ(9,"mat-dialog-actions",7)(10,"button",8),i._uU(11," Cancel "),i.qZA(),i.TgZ(12,"button",9),i.NdJ("click",function(){return e.selectedOrganization()}),i._uU(13," MOVE "),i.qZA()()()),2&t){const v=i.MAs(7);i.xp6(5),i.Q6J("matAutocomplete",v),i.xp6(3),i.Q6J("ngForOf",e.searchedOrganizationList),i.xp6(2),i.Q6J("mat-dialog-close",!1),i.xp6(2),i.Q6J("mat-dialog-close",!0)}},dependencies:[D.sg,S.XC,S.ZL,C.ey,I.lW,n.ZT,n.xY,n.H8,P.KE,U.Nt]}),r})();var M=a(3248);let y=(()=>{class r{constructor(t,e){this.httpDataService=t,this.matDialog=e}getAllActivities(){return this.httpDataService.get("activity")}getActivitiesMasterData(){return this.httpDataService.get("activity-masterdata")}createActivity(t){return this.httpDataService.post("activity-type",t)}postActivity(t){return this.httpDataService.post("activity",t)}getActivityMastarData(){return this.httpDataService.get("activity-masterdata")}getActivityById(t){return this.httpDataService.get(`activity/${t}`)}updateActivity(t,e){return this.httpDataService.put(`activity/${t}`,e)}updateActivityLogById(t,e){return this.httpDataService.put(`activity/activityLog/${t}`,e)}updateArchivestatus(t,e){return this.httpDataService.put(`activity/archive/${t}`,e)}deleteSelectedActivity(t){return this.httpDataService.delete(`activity/${t}`)}updateActivityStatus(t,e){return this.httpDataService.put(`activity/update/activityStatus/${t}`,e)}updateActivityDueDate(t,e){return this.httpDataService.put(`activity/update/dueDate/${t}`,e)}openMoveToOrganizationPopup(t){return this.matDialog.open(L,{width:"600px",height:"280px",disableClose:!0,data:t})}updateActivityOrganization(t){return this.httpDataService.put("activity/update/moveOrganization",t)}getActivitiesSearchCriteria(t){return this.httpDataService.post("activity/activitysearch",t)}}return r.\u0275fac=function(t){return new(t||r)(i.LFG(M.L),i.LFG(n.uw))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},8276:(m,l,a)=>{a.d(l,{H:()=>u});var n=a(4650),h=a(3248);let u=(()=>{class c{constructor(o){this.httpDataService=o}getUserById(o){return this.httpDataService.get(`user/${o}`)}getUser(){return this.httpDataService.get("user")}createProfile(o){return this.httpDataService.post("profile",o)}updateProfile(o,s){return this.httpDataService.put(`profile/${o}`,s)}getProfileByUserId(o){return this.httpDataService.get(`profile/userId/${o}`)}profileNotifications(o,s){return this.httpDataService.post(`profile/notifications/${o}`,s)}updateNotifications(o,s){return this.httpDataService.put(`profile/notifications/${o}`,s)}updateEmailReport(o,s){return this.httpDataService.put(`profile/emailReports/${o}`,s)}getUsersBySearchCriteria(o){return this.httpDataService.post("user/searchCriteria",o)}inActiveUser(o,s){return this.httpDataService.put(`user/${o}`,s)}}return c.\u0275fac=function(o){return new(o||c)(n.LFG(h.L))},c.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},5150:(m,l,a)=>{a.d(l,{Z:()=>n});const n={pageSize:10,pageSizeOptions:[5,10,20]}}}]);