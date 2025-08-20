class DocumentExporter {
  export(content) {
    throw new Error("Need to be implemented by subclass");
  }
}

class ExporterFactory {
  static createExporter(format) {
    switch (format) {
      case "pdf":
        return new PdfExporter();
      case "docx":
        return new DocxExporter();
      case "html":
        return new HtmlExporter();
      default:
        throw new Error("Unknown format specified.");
    }
  }
}

class PdfExporter extends DocumentExporter {
  export(content) {
    console.log(`Exporting content to PDF: "${content}"`);
  }
}
class DocxExporter extends DocumentExporter {
  export(content) {
    console.log(`Exporting content to DOCX: "${content}"`);
  }
}

class HtmlExporter extends DocumentExporter {
  export(content) {
    console.log(`Exporting content to HTML: "${content}"`);
  }
}

const documentContent = "This is the content of my document.";

try {
  // Client wants to export to PDF
  const pdfExporter = ExporterFactory.createExporter("pdf");
  pdfExporter.export(documentContent);
  // Expected output: Exporting content to PDF: "This is the content of my document."

  // Now, the client wants to export to DOCX
  const docxExporter = ExporterFactory.createExporter("docx");
  docxExporter.export(documentContent);
  // Expected output: Exporting content to DOCX: "This is the content of my document."

  // Client requests an unsupported format
  const csvExporter = ExporterFactory.createExporter("csv");
  csvExporter.export(documentContent);
} catch (error) {
  console.error(`Error: ${error.message}`);
  // Expected output: Error: Unknown format specified.
}
