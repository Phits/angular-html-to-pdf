import { Component, ViewChild, ElementRef } from '@angular/core';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'htmltopdf';

  @ViewChild('pdfTable') pdfTable: ElementRef | undefined;

  //PDF generate button click function
  public downloadAsPDF() {
    const doc = new jsPDF();

    //get table html
    if (this.pdfTable?.nativeElement) {
      const pdfTable = this.pdfTable.nativeElement;
      //html to pdf format
      let html = htmlToPdfmake(pdfTable.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }
  }

}
