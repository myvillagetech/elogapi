"use strict";(self.webpackChunkelog_web=self.webpackChunkelog_web||[]).push([[713],{713:(re,g,a)=>{a.r(g),a.d(g,{ArchiveModule:()=>le});var h=a(6895),u=a(3060),v=a(5017),l=a(3626),A=a(7030),_=a(8739),f=a(5150),e=a(4650),C=a(3248);let T=(()=>{class n{constructor(t){this.httpDataService=t}getArchiveActivities(){return this.httpDataService.get("activity/archive/activities")}postRestoreSelectedActivities(t){return this.httpDataService.post("activity/archive/multiple",t)}postDeleteSelectedActivities(t){return this.httpDataService.post("activity/delete/multiple",t)}restoreDocuments(t){return this.httpDataService.post("activity/document/archive/revert",t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(C.L))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var x=a(2653),S=a(6918),b=a(5641),Z=a(9642),y=a(4859),k=a(3546),D=a(6709),N=a(7392),d=a(8255),p=a(3848);function w(n,c){1&n&&(e.TgZ(0,"div",24)(1,"mat-icon"),e._uU(2,"assignment"),e.qZA(),e._uU(3," Tasks "),e.qZA())}function O(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"th",25)(1,"mat-checkbox",26),e.NdJ("change",function(o){e.CHM(t);const s=e.oxw();return e.KtG(o?s.masterToggle():null)}),e.qZA(),e.TgZ(2,"button",27)(3,"mat-icon"),e._uU(4,"arrow_drop_down"),e.qZA()()()}if(2&n){const t=e.oxw(),i=e.MAs(45);e.xp6(1),e.Q6J("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected()),e.xp6(1),e.Q6J("disabled",0===t.selection.selected.length)("matMenuTriggerFor",i)}}function M(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"td",28)(1,"mat-checkbox",29),e.NdJ("click",function(o){return o.stopPropagation()})("change",function(o){const r=e.CHM(t).$implicit,m=e.oxw();return e.KtG(o?m.selection.toggle(r):null)}),e.qZA()()}if(2&n){const t=c.$implicit,i=e.oxw();e.xp6(1),e.Q6J("checked",i.selection.isSelected(t))}}function U(n,c){1&n&&(e.TgZ(0,"th",25),e._uU(1," Activity "),e.qZA())}function z(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"td",30),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.navigateToActivityDetails(s._id))}),e._uU(1),e.qZA()}if(2&n){const t=c.$implicit;e.xp6(1),e.hij(" ",t.uniqIdentity?t.uniqIdentity:t.createdByOrganizationData[0].shortName," ")}}function F(n,c){1&n&&(e.TgZ(0,"th",25),e._uU(1," Title "),e.qZA())}function Y(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"td",30),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.navigateToActivityDetails(s._id))}),e._uU(1),e.qZA()}if(2&n){const t=c.$implicit;e.xp6(1),e.hij(" ",t.title," ")}}function P(n,c){1&n&&(e.TgZ(0,"th",31),e._uU(1," Status "),e.qZA())}const J=function(n,c,t,i){return{"badge-not-admissible":n,"badge-resolved":c,"badge-in-progress":t,"badge-new":i}};function I(n,c){if(1&n&&(e.TgZ(0,"td",32)(1,"span",33),e._uU(2),e.ALo(3,"titlecase"),e.qZA()()),2&n){const t=c.$implicit;e.xp6(1),e.Q6J("ngClass",e.l5B(4,J,"rejected"===(null==t?null:t.status.toLowerCase()),"resolved"===(null==t?null:t.status.toLowerCase()),"inprogress"===(null==t?null:t.status.toLowerCase()),"new"===(null==t?null:t.status.toLowerCase()))),e.xp6(1),e.hij(" ",e.lcZ(3,2,t.status)," ")}}function Q(n,c){1&n&&(e.TgZ(0,"th",25),e._uU(1," Organisation "),e.qZA())}function L(n,c){if(1&n&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.xp6(1),e.hij("",t.createdByOrganizationData[0].organization," ")}}function R(n,c){1&n&&e._UZ(0,"tr",34)}function q(n,c){1&n&&e._UZ(0,"tr",35)}function B(n,c){1&n&&(e.TgZ(0,"div")(1,"mat-card",36),e._uU(2," No Archived Activities found "),e.qZA()())}function $(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",37),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.logSelection())}),e.TgZ(1,"mat-icon"),e._uU(2,"attachment"),e.qZA(),e._uU(3," Files "),e.qZA()}}function H(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"th",25)(1,"mat-checkbox",26),e.NdJ("change",function(o){e.CHM(t);const s=e.oxw();return e.KtG(o?s.masterFilesToggle():null)}),e.qZA(),e.TgZ(2,"button",27)(3,"mat-icon"),e._uU(4,"arrow_drop_down"),e.qZA()()()}if(2&n){const t=e.oxw(),i=e.MAs(57);e.xp6(1),e.Q6J("checked",t.fileSelection.hasValue()&&t.isAllFileSelection())("indeterminate",t.fileSelection.hasValue()&&!t.isAllFileSelection()),e.xp6(1),e.Q6J("disabled",0===t.fileSelection.selected.length)("matMenuTriggerFor",i)}}function j(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"td",28)(1,"mat-checkbox",29),e.NdJ("click",function(o){return o.stopPropagation()})("change",function(o){const r=e.CHM(t).$implicit,m=e.oxw();return e.KtG(o?m.fileSelection.toggle(r):null)}),e.qZA()()}if(2&n){const t=c.$implicit,i=e.oxw();e.xp6(1),e.Q6J("checked",i.fileSelection.isSelected(t))}}function E(n,c){1&n&&(e.TgZ(0,"th",25),e._uU(1," Activity"),e.qZA())}function G(n,c){if(1&n&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.xp6(1),e.hij(" ",null==t?null:t.uniqIdentity," ")}}function K(n,c){1&n&&(e.TgZ(0,"th",25),e._uU(1," FileName "),e.qZA())}function V(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"td",38),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.downloadDocumement(s))}),e._uU(1),e.qZA()}if(2&n){const t=c.$implicit;e.xp6(1),e.hij(" ",null==t||null==t.nestedAttchments?null:t.nestedAttchments.name," ")}}function W(n,c){1&n&&(e.TgZ(0,"th",25),e._uU(1," Size "),e.qZA())}function X(n,c){if(1&n&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.xp6(1),e.hij(" ",null==t||null==t.nestedAttchments?null:t.nestedAttchments.size," ")}}function ee(n,c){1&n&&(e.TgZ(0,"th",25),e._uU(1," Organisation "),e.qZA())}function te(n,c){if(1&n&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.xp6(1),e.hij(" ",null!=t&&null!=t.docOrg[0]&&t.docOrg[0].organization?null==t||null==t.docOrg[0]?null:t.docOrg[0].organization:null==t||null==t.nestedAttchments?null:t.nestedAttchments.organization," ")}}function ne(n,c){1&n&&e._UZ(0,"tr",34)}function ie(n,c){1&n&&e._UZ(0,"tr",35)}function ce(n,c){1&n&&(e.TgZ(0,"div",36)(1,"mat-icon"),e._uU(2,"archive"),e.qZA(),e.TgZ(3,"div",39),e._uU(4," No Tasks have been archieved yet/ All archieved tasks of all projects will appear here "),e.qZA()())}const oe=[{path:"",component:(()=>{class n{constructor(t,i,o,s,r,m){this.archiveService=t,this.router=i,this.alertpopupService=o,this.documentsService=s,this.activityService=r,this.confirmationService=m,this.archiveActivitiesList=[],this.taskDisplayedColumns=["checkbox","Activity","Title","Status","Organisation"],this.fileDisplayedColumns=["checkbox","Activity","FileName","Size","Organization"],this.dataSource=new l.by(this.archiveActivitiesList),this.selection=new v.Ov(!0,[]),this.archiveDocuments=[],this.paginationProps=f.k,this.fileSelection=new v.Ov(!0,[]),this.displayedColumns=["checkbox","Activity","FileName","Size","Organisation"],this.dataSourceArchiveDocs=new l.by(this.archiveDocuments),this.documentsPayload={pageNumber:0,pageSize:10,sortField:"",groupBy:0,fileNameSearchText:"",organizations:[],isArchived:!0}}ngOnInit(){this.getArchiveActivities(),this.getAllArchiveDocuments()}getArchiveActivities(){this.archiveService.getArchiveActivities().subscribe(t=>{this.archiveActivitiesList=t.data,this.dataSource=new l.by(this.archiveActivitiesList)})}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}isAllFileSelection(){return this.fileSelection.selected.length===this.archiveDocumentsTotalCount}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(t=>this.selection.select(t))}masterFilesToggle(){this.isAllFileSelection()?this.fileSelection.clear():this.dataSourceArchiveDocs.data.forEach(t=>this.fileSelection.select(t))}logSelection(){this.selection.selected.forEach(t=>{})}navigateToActivityDetails(t){this.router.navigate([A.p.ACTIVITY_DETAILS],{queryParams:{aId:t}})}archiveActionClick(t){if("Restore"===t){const i={activityIds:this.selection.selected.map(o=>o._id),isArchive:!1};this.archiveService.postRestoreSelectedActivities(i).subscribe(o=>{o&&(this.alertpopupService.open({message:o?.message?o?.message:"Activities archived successfully",action:"ok"}),this.getArchiveActivities())},o=>{this.alertpopupService.open({message:o?.message?o?.message:"Failed to archive Activities  ",action:"ok"})})}else"Remove"===t&&this.archiveService.postDeleteSelectedActivities({activityIds:this.selection.selected.map(i=>i._id)}).subscribe(i=>{i&&(this.alertpopupService.open({message:i?.message?i?.message:"Activities removed successfully",action:"ok"}),this.getArchiveActivities())},i=>{this.alertpopupService.open({message:i?.message?i?.message:"Failed to remove Activities  ",action:"ok"})})}getAllArchiveDocuments(){this.documentsService.postActivityAttachments(this.documentsPayload).subscribe(t=>{this.archiveDocuments=t?.data[0]?.attachments,this.archiveDocumentsTotalCount=t?.data[0]?.count[0]?.count,this.dataSourceArchiveDocs=new l.by(this.archiveDocuments)})}onChangedPageSize(t){this.documentsPayload.pageNumber=this.paginator?.pageIndex,this.documentsPayload.pageSize=this.paginator?.pageSize,this.getAllArchiveDocuments()}downloadDocumement(t){const i={fileName:t.nestedAttchments.name,path:`${t._id}`};t.nestedAttchments.activityLogId&&(i.path=`${t._id}/${t.nestedAttchments.activityLogId}`),this.activityService.dowloadAttachments(i).subscribe(o=>{const s=document.createElement("a");s.href=window.URL.createObjectURL(o),s.download=t.nestedAttchments.name,s.click(),window.URL.revokeObjectURL(s.href),this.alertpopupService.open({message:"Attachment downloaded successfully",action:"Ok"})},o=>{this.alertpopupService.open({message:"Attachment Not Found",action:"Ok"})})}removeFile(){const t=this.fileSelection.selected.map(i=>({activityId:i.nestedAttchments.activityId,activityLogId:i.nestedAttchments.activityLogId?i.nestedAttchments.activityLogId:null,attchmentId:i.nestedAttchments._id}));this.confirmationService.open({message:"Are you sure to remove documents"}).afterClosed().subscribe(i=>{i&&this.documentsService.removeDocument(t).subscribe(o=>{this.alertpopupService.open({message:"Documents removed successfully",action:"ok"}),this.getAllArchiveDocuments()},o=>{this.alertpopupService.open({message:o.message?o.message:"Unable to remove document",action:"ok"})})})}restoreFile(){const t=this.fileSelection.selected.map(i=>({activityId:i.nestedAttchments.activityId,activityLogId:i.nestedAttchments.activityLogId?i.nestedAttchments.activityLogId:null,attchmentId:i.nestedAttchments._id}));this.confirmationService.open({message:"Are you sure to restore documents"}).afterClosed().subscribe(i=>{i&&this.archiveService.restoreDocuments(t).subscribe(o=>{this.alertpopupService.open({message:"Documents restored successfully",action:"ok"}),this.getAllArchiveDocuments()},o=>{this.alertpopupService.open({message:o.message?o.message:"Unable to restore document",action:"ok"})})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T),e.Y36(u.F0),e.Y36(x.z),e.Y36(S.S),e.Y36(b.M),e.Y36(Z.O))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-archive"]],viewQuery:function(t,i){if(1&t&&e.Gf(_.NW,5),2&t){let o;e.iGM(o=e.CRH())&&(i.paginator=o.first)}},decls:68,vars:11,consts:[["mat-tab-label",""],["mat-table","",1,"mat-elevation-z8","archiveTable",3,"dataSource"],["matColumnDef","checkbox"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Activity"],["mat-cell","","class","cursor",3,"click",4,"matCellDef"],["matColumnDef","Title"],["matColumnDef","Status"],["mat-header-cell","","class","status-badge",4,"matHeaderCellDef"],["mat-cell","","class","status-badge",4,"matCellDef"],["matColumnDef","Organisation"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],["mat-table","",1,"mat-elevation-z8","documentTable",3,"dataSource"],["matColumnDef","FileName"],["mat-cell","","class","attachment-download",3,"click",4,"matCellDef"],["matColumnDef","Size"],["aria-label","Select page of GitHub search results",3,"length","pageSize","pageSizeOptions","page"],["class","noTask-message",4,"ngIf"],["menu","matMenu"],["mat-menu-item","",3,"click"],["fileMenu","matMenu"],[1,"d-flex","align-items-center","gap-1"],["mat-header-cell",""],[3,"checked","indeterminate","change"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"disabled","matMenuTriggerFor"],["mat-cell",""],[3,"checked","click","change"],["mat-cell","",1,"cursor",3,"click"],["mat-header-cell","",1,"status-badge"],["mat-cell","",1,"status-badge"],[1,"badge",3,"ngClass"],["mat-header-row",""],["mat-row",""],[1,"noTask-message"],[1,"d-flex","align-items-center","gap-1",3,"click"],["mat-cell","",1,"attachment-download",3,"click"],[1,"text"]],template:function(t,i){1&t&&(e.TgZ(0,"mat-tab-group")(1,"mat-tab"),e.YNc(2,w,4,0,"ng-template",0),e.TgZ(3,"table",1),e.ynx(4,2),e.YNc(5,O,5,4,"th",3),e.YNc(6,M,2,1,"td",4),e.BQk(),e.ynx(7,5),e.YNc(8,U,2,0,"th",3),e.YNc(9,z,2,1,"td",6),e.BQk(),e.ynx(10,7),e.YNc(11,F,2,0,"th",3),e.YNc(12,Y,2,1,"td",6),e.BQk(),e.ynx(13,8),e.YNc(14,P,2,0,"th",9),e.YNc(15,I,4,9,"td",10),e.BQk(),e.ynx(16,11),e.YNc(17,Q,2,0,"th",3),e.YNc(18,L,2,1,"td",4),e.BQk(),e.YNc(19,R,1,0,"tr",12),e.YNc(20,q,1,0,"tr",13),e.qZA(),e.YNc(21,B,3,0,"div",14),e.qZA(),e.TgZ(22,"mat-tab"),e.YNc(23,$,4,0,"ng-template",0),e.TgZ(24,"table",15),e.ynx(25,2),e.YNc(26,H,5,4,"th",3),e.YNc(27,j,2,1,"td",4),e.BQk(),e.ynx(28,5),e.YNc(29,E,2,0,"th",3),e.YNc(30,G,2,1,"td",4),e.BQk(),e.ynx(31,16),e.YNc(32,K,2,0,"th",3),e.YNc(33,V,2,1,"td",17),e.BQk(),e.ynx(34,18),e.YNc(35,W,2,0,"th",3),e.YNc(36,X,2,1,"td",4),e.BQk(),e.ynx(37,11),e.YNc(38,ee,2,0,"th",3),e.YNc(39,te,2,1,"td",4),e.BQk(),e.YNc(40,ne,1,0,"tr",12),e.YNc(41,ie,1,0,"tr",13),e.qZA(),e.TgZ(42,"mat-paginator",19),e.NdJ("page",function(s){return i.onChangedPageSize(s)}),e.qZA(),e.YNc(43,ce,5,0,"div",20),e.qZA()(),e.TgZ(44,"mat-menu",null,21)(46,"button",22),e.NdJ("click",function(){return i.archiveActionClick("Restore")}),e.TgZ(47,"mat-icon"),e._uU(48,"refresh"),e.qZA(),e.TgZ(49,"span"),e._uU(50,"Restore"),e.qZA()(),e.TgZ(51,"button",22),e.NdJ("click",function(){return i.archiveActionClick("Remove")}),e.TgZ(52,"mat-icon"),e._uU(53,"delete"),e.qZA(),e.TgZ(54,"span"),e._uU(55,"Remove"),e.qZA()()(),e.TgZ(56,"mat-menu",null,23)(58,"button",22),e.NdJ("click",function(){return i.restoreFile()}),e.TgZ(59,"mat-icon"),e._uU(60,"refresh"),e.qZA(),e.TgZ(61,"span"),e._uU(62,"Restore"),e.qZA()(),e.TgZ(63,"button",22),e.NdJ("click",function(){return i.removeFile()}),e.TgZ(64,"mat-icon"),e._uU(65,"delete"),e.qZA(),e.TgZ(66,"span"),e._uU(67,"Remove"),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("dataSource",i.dataSource),e.xp6(16),e.Q6J("matHeaderRowDef",i.taskDisplayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.taskDisplayedColumns),e.xp6(1),e.Q6J("ngIf",0===(null==i.dataSource||null==i.dataSource.filteredData?null:i.dataSource.filteredData.length)),e.xp6(3),e.Q6J("dataSource",i.dataSourceArchiveDocs),e.xp6(16),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns),e.xp6(1),e.Q6J("length",i.archiveDocumentsTotalCount)("pageSize",i.paginationProps.pageSize)("pageSizeOptions",i.paginationProps.pageSizeOptions),e.xp6(1),e.Q6J("ngIf",0===i.archiveDocuments.length))},dependencies:[h.mk,h.O5,y.lW,k.a8,D.oG,N.Hw,d.VK,d.OP,d.p6,_.NW,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,p.SP,p.uD,p.uX,h.rS],styles:[".archiveTable[_ngcontent-%COMP%]{width:100%}th[_ngcontent-%COMP%]{background-color:#f0f0f0;font-size:1em}.badge[_ngcontent-%COMP%], .badge-resolved[_ngcontent-%COMP%], .badge-not-admissible[_ngcontent-%COMP%], .badge-in-progress[_ngcontent-%COMP%], .badge-new[_ngcontent-%COMP%]{width:100px;color:#fff;text-align:center;padding:5px 9px;letter-spacing:.1em;font-weight:500;font-size:12px;border-radius:0;text-transform:capitalize}.badge-new[_ngcontent-%COMP%]{background-color:#ffae3ee0}.badge-in-progress[_ngcontent-%COMP%]{background-color:#012970c2}.badge-not-admissible[_ngcontent-%COMP%]{background-color:#ff4b3edb}.badge-resolved[_ngcontent-%COMP%]{background-color:#4bec81}.cursor[_ngcontent-%COMP%]{cursor:pointer}.documentTable[_ngcontent-%COMP%]{width:100%}th.mat-header-cell[_ngcontent-%COMP%]{text-align:left;font-size:1rem;background:#f0f0f0}.attachment-download[_ngcontent-%COMP%]{cursor:pointer;color:#00f;text-decoration:underline}.noTask-message[_ngcontent-%COMP%]{text-align:center;margin-block:1rem}.noTask-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:100px;height:100px;font-size:100px;color:#f0f0f0}.noTask-message[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#626060;font-size:14px;letter-spacing:.05em;margin-top:1rem}"]}),n})()}];let ae=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(oe),u.Bz]}),n})();var se=a(1252);let le=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.ez,ae,se.m]}),n})()}}]);