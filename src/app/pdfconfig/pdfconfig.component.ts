import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf'


@Component({
  selector: 'app-pdfconfig',
  templateUrl: './pdfconfig.component.html',
  styleUrls: ['./pdfconfig.component.css']
})
export class PdfconfigComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
      downloadPDF() {
    const doc = new jsPDF();
    doc.text('Hello world', 10, 10);
    doc.save('test.pdf');
  }


  preview() {
var doc = new jsPDF("landscape", "mm", "a4");
doc.setFontSize(22);
doc.text(20, 20, 'Example');
//doc.autoPrint();
window.open(doc.output('bloburl'), '_blank');
  }

}
