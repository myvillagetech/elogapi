"use strict";(self.webpackChunkelog_web=self.webpackChunkelog_web||[]).push([[301],{4301:(Q,u,a)=>{a.r(u),a.d(u,{DocumentsModule:()=>R});var r=a(6895),p=a(3060),g=a(8739),s=a(3626),h=a(5150),f=a(7335),t=a(4650),v=a(6918),C=a(5641),_=a(4889),A=a(9732),D=a(2653),y=a(2133),O=a(9642),x=a(4859),M=a(7392),d=a(8255);function b(n,c){1&n&&(t.TgZ(0,"th",14),t._uU(1,"Activity"),t.qZA())}function S(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"td",15)(1,"button",16)(2,"mat-icon",17),t.NdJ("click",function(){const l=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.selectedDocument=l)}),t._uU(3,"arrow_drop_down"),t.qZA()(),t._uU(4),t.qZA()}if(2&n){const e=c.$implicit;t.oxw();const o=t.MAs(16);t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(3),t.Oqu(null==e?null:e.uniqIdentity)}}function P(n,c){1&n&&(t.TgZ(0,"th",18),t._uU(1,"FileName"),t.qZA())}function T(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"td",19),t.NdJ("click",function(){const l=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.downloadDocumement(l))}),t.TgZ(1,"div",20),t._UZ(2,"div"),t.TgZ(3,"div")(4,"a"),t._uU(5),t.qZA(),t.TgZ(6,"div",21),t._uU(7," Uploaded by "),t.TgZ(8,"b"),t._uU(9),t.qZA(),t._uU(10),t.ALo(11,"date"),t.qZA()()()()}if(2&n){const e=c.$implicit,o=t.oxw();t.xp6(2),t.Tol(o.getIconClass(null==e||null==e.nestedAttchments?null:e.nestedAttchments.type)),t.xp6(3),t.Oqu(null==e||null==e.nestedAttchments?null:e.nestedAttchments.name),t.xp6(4),t.hij("",null==e||null==e.nestedAttchments?null:e.nestedAttchments.createdByUserName," "),t.xp6(1),t.hij(" ",t.xi3(11,6,null==e||null==e.nestedAttchments?null:e.nestedAttchments.updatedAt," MMMM d,EE")," ")}}function w(n,c){1&n&&(t.TgZ(0,"th",14),t._uU(1,"Size"),t.qZA())}function Z(n,c){if(1&n&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.xp6(1),t.hij(" ",null==e||null==e.nestedAttchments?null:e.nestedAttchments.size," ")}}function z(n,c){1&n&&(t.TgZ(0,"th",14),t._uU(1,"Organisation"),t.qZA())}function U(n,c){if(1&n&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.xp6(1),t.hij(" ",null!=e&&null!=e.docOrg[0]&&e.docOrg[0].organization?null==e||null==e.docOrg[0]?null:e.docOrg[0].organization:null==e||null==e.nestedAttchments?null:e.nestedAttchments.organization," ")}}function N(n,c){1&n&&t._UZ(0,"tr",22)}function k(n,c){1&n&&t._UZ(0,"tr",23)}const I=[{path:"",component:(()=>{class n{constructor(e,o,i,l,m,L,J){this.documentsService=e,this.activityService=o,this.selectedOrganizationService=i,this.userDetailsService=l,this.alertpopupService=m,this.eventCommunicationsService=L,this.confirmationService=J,this.totalUserCount=0,this.paginationProps=h.k,this.attachmentsDetails=[],this.documentsPayload={pageNumber:0,pageSize:10,sortField:"",groupBy:0,fileNameSearchText:"",organizations:[],isArchived:!1},this.displayedColumns=["Activity","FileName","Size","Organisation"],this.dataSource=new s.by(this.attachmentsDetails)}ngOnInit(){this.userDetailsService.getUserDetails().subscribe(e=>{e.roles[0]===f.G.User&&(this.documentsPayload.organizations=e.organization),this.postActivityAttachments()}),this.selectedOrganizationService.getSelectedOrganization().subscribe(e=>{this.documentsPayload.organizations=e,this.postActivityAttachments()})}postActivityAttachments(){this.documentsService.postActivityAttachments(this.documentsPayload).subscribe(e=>{this.attachmentsDetails=e?.data[0]?.attachments,this.totalDocumentCount=e?.data[0]?.count[0]?.count,this.dataSource=new s.by(this.attachmentsDetails),this.eventCommunicationsService.broadcast("DOC_COUNT",this.totalDocumentCount)})}onChangedPageSize(e){this.documentsPayload.pageNumber=this.paginator?.pageIndex,this.documentsPayload.pageSize=this.paginator?.pageSize,this.postActivityAttachments()}ngAfterViewInit(){this.dataSource.paginator=this.paginator}downloadDocumement(e){const o={fileName:e.nestedAttchments.name,path:`${e._id}`};e.nestedAttchments.activityLogId&&(o.path=`${e._id}/${e.nestedAttchments.activityLogId}`),this.activityService.dowloadAttachments(o).subscribe(i=>{const l=document.createElement("a");l.href=window.URL.createObjectURL(i),l.download=e.nestedAttchments.name,l.click(),window.URL.revokeObjectURL(l.href),this.alertpopupService.open({message:"Attachment downloaded successfully",action:"Ok"})},i=>{this.alertpopupService.open({message:"Attachment Not Found",action:"Ok"})})}removeDocument(){const e=[{activityId:this.selectedDocument.nestedAttchments.activityId,activityLogId:this.selectedDocument.nestedAttchments.activityLogId?this.selectedDocument.nestedAttchments.activityLogId:null,attchmentId:this.selectedDocument.nestedAttchments._id}];this.confirmationService.open({message:"Are you sure to remove document"}).afterClosed().subscribe(o=>{o&&this.documentsService.removeDocument(e).subscribe(i=>{this.alertpopupService.open({message:"Document deleted successfully",action:"ok"}),this.postActivityAttachments()},i=>{this.alertpopupService.open({message:i.message?i.message:"Unable to remove document",action:"ok"})})})}archiveDocument(){const e=[{activityId:this.selectedDocument.nestedAttchments.activityId,activityLogId:this.selectedDocument.nestedAttchments.activityLogId?this.selectedDocument.nestedAttchments.activityLogId:null,attchmentId:this.selectedDocument.nestedAttchments._id}];this.confirmationService.open({message:"Are you sure to archive"}).afterClosed().subscribe(o=>{o&&this.documentsService.archiveDocument(e).subscribe(i=>{this.alertpopupService.open({message:"Archived successfully",action:"ok"}),this.postActivityAttachments()},i=>{this.alertpopupService.open({message:i.message?i.message:"Unable to archive",action:"ok"})})})}getIconClass(e){let o="";switch(e){case"application/pdf":o="pdf_icon";break;case"application/vnd.ms-excel":case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":case"application/xls":case"application/xlsx":o="Excel_icon";break;case"image/jpeg":case"image/jpg":case"image/png":case"image/gif":o="img_icon";break;default:o="file_icon"}return o}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(v.S),t.Y36(C.M),t.Y36(_.s),t.Y36(A.H),t.Y36(D.z),t.Y36(y.G),t.Y36(O.O))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-documents"]],viewQuery:function(e,o){if(1&e&&t.Gf(g.NW,5),2&e){let i;t.iGM(i=t.CRH())&&(o.paginator=i.first)}},decls:28,vars:6,consts:[["mat-table","",1,"mat-elevation-z8","documentTable",3,"dataSource"],["matColumnDef","Activity"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","FileName"],["class","FileName_header","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","attachment-download",3,"click",4,"matCellDef"],["matColumnDef","Size"],["matColumnDef","Organisation"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["menu","matMenu"],["mat-menu-item","",3,"click"],["aria-label","Select page of GitHub search results",3,"length","pageSize","pageSizeOptions","page"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"click"],["mat-header-cell","",1,"FileName_header"],["mat-cell","",1,"attachment-download",3,"click"],[1,"file_type"],[1,"uploaded-by"],["mat-header-row",""],["mat-row",""]],template:function(e,o){1&e&&(t.TgZ(0,"table",0),t.ynx(1,1),t.YNc(2,b,2,0,"th",2),t.YNc(3,S,5,2,"td",3),t.BQk(),t.ynx(4,4),t.YNc(5,P,2,0,"th",5),t.YNc(6,T,12,9,"td",6),t.BQk(),t.ynx(7,7),t.YNc(8,w,2,0,"th",2),t.YNc(9,Z,2,1,"td",3),t.BQk(),t.ynx(10,8),t.YNc(11,z,2,0,"th",2),t.YNc(12,U,2,1,"td",3),t.BQk(),t.YNc(13,N,1,0,"tr",9),t.YNc(14,k,1,0,"tr",10),t.qZA(),t.TgZ(15,"mat-menu",null,11)(17,"button",12),t.NdJ("click",function(){return o.archiveDocument()}),t.TgZ(18,"mat-icon"),t._uU(19,"archive"),t.qZA(),t.TgZ(20,"span"),t._uU(21,"Archive"),t.qZA()(),t.TgZ(22,"button",12),t.NdJ("click",function(){return o.removeDocument()}),t.TgZ(23,"mat-icon"),t._uU(24,"delete"),t.qZA(),t.TgZ(25,"span"),t._uU(26,"Remove"),t.qZA()()(),t.TgZ(27,"mat-paginator",13),t.NdJ("page",function(l){return o.onChangedPageSize(l)}),t.qZA()),2&e&&(t.Q6J("dataSource",o.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(13),t.Q6J("length",o.totalDocumentCount)("pageSize",o.paginationProps.pageSize)("pageSizeOptions",o.paginationProps.pageSizeOptions))},dependencies:[x.lW,M.Hw,d.VK,d.OP,d.p6,g.NW,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,r.uU],styles:[".documentTable[_ngcontent-%COMP%]{width:100%}th.mat-header-cell[_ngcontent-%COMP%]{text-align:left;font-size:1rem;background:#f0f0f0}.FileName_header[_ngcontent-%COMP%]{padding-left:3.5rem}.attachment-download[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .attachment-download[_ngcontent-%COMP%]   .zipfile_icon[_ngcontent-%COMP%], .attachment-download[_ngcontent-%COMP%]   .file_icon[_ngcontent-%COMP%], .attachment-download[_ngcontent-%COMP%]   .img_icon[_ngcontent-%COMP%], .attachment-download[_ngcontent-%COMP%]   .Excel_icon[_ngcontent-%COMP%], .attachment-download[_ngcontent-%COMP%]   .pdf_icon[_ngcontent-%COMP%]{margin-right:.5rem;width:16px;height:18px;margin-left:10px;margin-right:30px;margin-top:5px}.attachment-download[_ngcontent-%COMP%]   .pdf_icon[_ngcontent-%COMP%]{background:url(icon-svgs.9c36d7d3b71354b7.png) no-repeat -212px -219px}.attachment-download[_ngcontent-%COMP%]   .Excel_icon[_ngcontent-%COMP%]{background:url(icon-svgs.9c36d7d3b71354b7.png) no-repeat -211px -255px}.attachment-download[_ngcontent-%COMP%]   .img_icon[_ngcontent-%COMP%]{background:url(icon-svgs.9c36d7d3b71354b7.png) no-repeat -230px -219px}.attachment-download[_ngcontent-%COMP%]   .file_icon[_ngcontent-%COMP%]{background:url(icon-svgs.9c36d7d3b71354b7.png) no-repeat -230px -238px}.attachment-download[_ngcontent-%COMP%]   .zipfile_icon[_ngcontent-%COMP%]{background:url(icon-svgs.9c36d7d3b71354b7.png) no-repeat -249px -220px}.attachment-download[_ngcontent-%COMP%]   .file_type[_ngcontent-%COMP%]{cursor:pointer;display:flex}.attachment-download[_ngcontent-%COMP%]   .file_type[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#00f;text-decoration:underline}.attachment-download[_ngcontent-%COMP%]   .uploaded-by[_ngcontent-%COMP%]{color:#999;font-size:12px}.attachment-download[_ngcontent-%COMP%]   .uploaded-by[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:400;color:#000;font-size:12px}"]}),n})()}];let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(I),p.Bz]}),n})();var F=a(1252);let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,Y,F.m]}),n})()}}]);