"use strict";(self.webpackChunkelog_web=self.webpackChunkelog_web||[]).push([[301],{4301:(Q,r,s)=>{s.r(r),s.d(r,{DocumentsModule:()=>F});var p=s(6895),d=s(3060),h=s(8739),a=s(3626),g=s(5150),v=s(7335),t=s(4650),f=s(6918),D=s(5641),A=s(4889),y=s(9732),C=s(2653),S=s(2133),T=s(9642),Z=s(4859),z=s(7392),u=s(8255);function O(n,i){1&n&&(t.TgZ(0,"th",13),t._uU(1,"Activity"),t.qZA())}function N(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"td",14)(1,"button",15)(2,"mat-icon",16),t.NdJ("click",function(){const m=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.selectedDocument=m)}),t._uU(3,"arrow_drop_down"),t.qZA()(),t._uU(4),t.qZA()}if(2&n){const e=i.$implicit;t.oxw();const o=t.MAs(16);t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(3),t.Oqu(null==e?null:e.uniqIdentity)}}function b(n,i){1&n&&(t.TgZ(0,"th",13),t._uU(1,"FileName"),t.qZA())}function U(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"td",17),t.NdJ("click",function(){const m=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.downloadDocumement(m))}),t._uU(1),t.qZA()}if(2&n){const e=i.$implicit;t.xp6(1),t.hij(" ",null==e||null==e.nestedAttchments?null:e.nestedAttchments.name," ")}}function _(n,i){1&n&&(t.TgZ(0,"th",13),t._uU(1,"Size"),t.qZA())}function x(n,i){if(1&n&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.hij(" ",null==e||null==e.nestedAttchments?null:e.nestedAttchments.size," ")}}function w(n,i){1&n&&(t.TgZ(0,"th",13),t._uU(1,"Organisation"),t.qZA())}function I(n,i){if(1&n&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.hij(" ",null!=e&&null!=e.docOrg[0]&&e.docOrg[0].organization?null==e||null==e.docOrg[0]?null:e.docOrg[0].organization:null==e||null==e.nestedAttchments?null:e.nestedAttchments.organization," ")}}function M(n,i){1&n&&t._UZ(0,"tr",18)}function Y(n,i){1&n&&t._UZ(0,"tr",19)}const P=[{path:"",component:(()=>{class n{constructor(e,o,c,m,l,J,L){this.documentsService=e,this.activityService=o,this.selectedOrganizationService=c,this.userDetailsService=m,this.alertpopupService=l,this.eventCommunicationsService=J,this.confirmationService=L,this.totalUserCount=0,this.paginationProps=g.k,this.attachmentsDetails=[],this.documentsPayload={pageNumber:0,pageSize:10,sortField:"",groupBy:0,fileNameSearchText:"",organizations:[],isArchived:!1},this.displayedColumns=["Activity","FileName","Size","Organisation"],this.dataSource=new a.by(this.attachmentsDetails)}ngOnInit(){this.userDetailsService.getUserDetails().subscribe(e=>{e.roles[0]===v.G.User&&(this.documentsPayload.organizations=e.organization),this.postActivityAttachments()}),this.selectedOrganizationService.getSelectedOrganization().subscribe(e=>{this.documentsPayload.organizations=e,this.postActivityAttachments()})}postActivityAttachments(){this.documentsService.postActivityAttachments(this.documentsPayload).subscribe(e=>{this.attachmentsDetails=e?.data[0]?.attachments,this.totalDocumentCount=e?.data[0]?.count[0]?.count,this.dataSource=new a.by(this.attachmentsDetails),this.eventCommunicationsService.broadcast("DOC_COUNT",this.totalDocumentCount)})}onChangedPageSize(e){this.documentsPayload.pageNumber=this.paginator?.pageIndex,this.documentsPayload.pageSize=this.paginator?.pageSize,this.postActivityAttachments()}ngAfterViewInit(){this.dataSource.paginator=this.paginator}downloadDocumement(e){const o={fileName:e.nestedAttchments.name,path:`${e._id}`};e.nestedAttchments.activityLogId&&(o.path=`${e._id}/${e.nestedAttchments.activityLogId}`),this.activityService.dowloadAttachments(o).subscribe(c=>{const m=document.createElement("a");m.href=window.URL.createObjectURL(c),m.download=e.nestedAttchments.name,m.click(),window.URL.revokeObjectURL(m.href),this.alertpopupService.open({message:"Attachment downloaded successfully",action:"Ok"})},c=>{this.alertpopupService.open({message:"Attachment Not Found",action:"Ok"})})}removeDocument(){const e=[{activityId:this.selectedDocument.nestedAttchments.activityId,activityLogId:this.selectedDocument.nestedAttchments.activityLogId?this.selectedDocument.nestedAttchments.activityLogId:null,attchmentId:this.selectedDocument.nestedAttchments._id}];this.confirmationService.open({message:"Are you sure to remove document"}).afterClosed().subscribe(o=>{o&&this.documentsService.removeDocument(e).subscribe(c=>{this.alertpopupService.open({message:"Document deleted successfully",action:"ok"}),this.postActivityAttachments()},c=>{this.alertpopupService.open({message:c.message?c.message:"Unable to remove document",action:"ok"})})})}archiveDocument(){const e=[{activityId:this.selectedDocument.nestedAttchments.activityId,activityLogId:this.selectedDocument.nestedAttchments.activityLogId?this.selectedDocument.nestedAttchments.activityLogId:null,attchmentId:this.selectedDocument.nestedAttchments._id}];this.confirmationService.open({message:"Are you sure to archive"}).afterClosed().subscribe(o=>{o&&this.documentsService.archiveDocument(e).subscribe(c=>{this.alertpopupService.open({message:"Archived successfully",action:"ok"}),this.postActivityAttachments()},c=>{this.alertpopupService.open({message:c.message?c.message:"Unable to archive",action:"ok"})})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.S),t.Y36(D.M),t.Y36(A.s),t.Y36(y.H),t.Y36(C.z),t.Y36(S.G),t.Y36(T.O))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-documents"]],viewQuery:function(e,o){if(1&e&&t.Gf(h.NW,5),2&e){let c;t.iGM(c=t.CRH())&&(o.paginator=c.first)}},decls:28,vars:6,consts:[["mat-table","",1,"mat-elevation-z8","documentTable",3,"dataSource"],["matColumnDef","Activity"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","FileName"],["mat-cell","","class","attachment-download",3,"click",4,"matCellDef"],["matColumnDef","Size"],["matColumnDef","Organisation"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["menu","matMenu"],["mat-menu-item","",3,"click"],["aria-label","Select page of GitHub search results",3,"length","pageSize","pageSizeOptions","page"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"click"],["mat-cell","",1,"attachment-download",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,o){1&e&&(t.TgZ(0,"table",0),t.ynx(1,1),t.YNc(2,O,2,0,"th",2),t.YNc(3,N,5,2,"td",3),t.BQk(),t.ynx(4,4),t.YNc(5,b,2,0,"th",2),t.YNc(6,U,2,1,"td",5),t.BQk(),t.ynx(7,6),t.YNc(8,_,2,0,"th",2),t.YNc(9,x,2,1,"td",3),t.BQk(),t.ynx(10,7),t.YNc(11,w,2,0,"th",2),t.YNc(12,I,2,1,"td",3),t.BQk(),t.YNc(13,M,1,0,"tr",8),t.YNc(14,Y,1,0,"tr",9),t.qZA(),t.TgZ(15,"mat-menu",null,10)(17,"button",11),t.NdJ("click",function(){return o.archiveDocument()}),t.TgZ(18,"mat-icon"),t._uU(19,"archive"),t.qZA(),t.TgZ(20,"span"),t._uU(21,"Archive"),t.qZA()(),t.TgZ(22,"button",11),t.NdJ("click",function(){return o.removeDocument()}),t.TgZ(23,"mat-icon"),t._uU(24,"delete"),t.qZA(),t.TgZ(25,"span"),t._uU(26,"Remove"),t.qZA()()(),t.TgZ(27,"mat-paginator",12),t.NdJ("page",function(m){return o.onChangedPageSize(m)}),t.qZA()),2&e&&(t.Q6J("dataSource",o.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(13),t.Q6J("length",o.totalDocumentCount)("pageSize",o.paginationProps.pageSize)("pageSizeOptions",o.paginationProps.pageSizeOptions))},dependencies:[Z.lW,z.Hw,u.VK,u.OP,u.p6,h.NW,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk],styles:[".documentTable[_ngcontent-%COMP%]{width:100%}th.mat-header-cell[_ngcontent-%COMP%]{text-align:left;font-size:1rem;background:#f0f0f0}.attachment-download[_ngcontent-%COMP%]{cursor:pointer;color:#00f;text-decoration:underline}"]}),n})()}];let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(P),d.Bz]}),n})();var k=s(1252);let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,R,k.m]}),n})()}}]);