import "./pdfViewer.scss";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

export const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="view-window">
      <center>
        <div>
          <Document file="./resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </center>
    </div>
  );
};
