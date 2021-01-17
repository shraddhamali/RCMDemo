import { Component, OnInit } from '@angular/core';
import { PdfDocumentInfo } from 'ngx-extended-pdf-viewer/lib/pdf-document-properties-extractor';
// import { listFiles } from 'list-files-in-dir';
//import { Router } from '@angular/router';
//import { PdfDocumentPropertiesExtractor } from 'ngx-extended-pdf-viewer/lib/pdf-document-properties-extractor';

@Component({
  selector: 'app-display-pdf',
  templateUrl: './display-pdf.component.html',
  styleUrls: ['./display-pdf.component.css']
})
export class DisplayPdfComponent implements OnInit {
  public fileInfo!: PdfDocumentInfo;
  public path1= "./assets/data/pdf/Doc1.pdf";
  public path2= "./assets/data/pdf/Doc2.pdf";
  //public path= "./assets/data/pdf";
    public onPagesLoaded() {
      //new PdfDocumentPropertiesExtractor().getDocumentProperties().then((result) => this.fileInfo = result);
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
