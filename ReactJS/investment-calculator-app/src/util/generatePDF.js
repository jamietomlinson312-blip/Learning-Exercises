import jsPDF from "jspdf";

export function generatePDF(userInput, allData) {
  console.log(allData);
  const doc = new jsPDF();
  doc.setFontSize(14);
  doc.setFont("courier", "normal");
  doc.text(`Initial investment: £${userInput.initialInvestment}`, 10, 30);
  doc.text(`Annual investment: £${userInput.annualInvestment}`, 10, 40);
  doc.text(`Return on investment: ${userInput.expectedReturn}%`, 10, 50);
  doc.text(`Years of investment: ${userInput.duration}`, 10, 60);

  const pageHeight = doc.internal.pageSize.height;
  let offset = 80;
  allData.map((yearly) => {
    // map through allData array to render to PDF
    if (offset > pageHeight) {
      // conditional to add a new page when offset reaches the document page height
      doc.addPage();
      offset = 0;
    }
    doc.text(`Year: ${yearly.year}`, 10, (offset += 30)); // extracting data from allData objects
    doc.text(
      `Interest yearly: £${yearly.interest.toFixed(2)}`,
      10,
      (offset += 8),
    );
    doc.text(
      `Investment Value: £${yearly.valueEndOfYear.toFixed(2)}`,
      10,
      (offset += 8),
    );
    doc.text(
      `Invested Capital: £${yearly.annualInvestment.toFixed(2)}`,
      10,
      (offset += 8),
    );
  });
  doc.save("report.pdf");
}
