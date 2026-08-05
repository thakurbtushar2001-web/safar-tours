import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Invoice() {

  const downloadInvoice = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Safar Tours & Travels", 20, 20);

    doc.setFontSize(12);
    doc.text("Booking Invoice", 20, 30);

    autoTable(doc, {
      startY: 40,
      head: [["Field", "Details"]],
      body: [
        ["Customer", "Tushar"],
        ["Pickup", "Mumbai"],
        ["Drop", "Pune"],
        ["Vehicle", "Ertiga"],
        ["Passengers", "4"],
        ["Amount", "₹100"],
        ["Status", "Paid"],
      ],
    });

    doc.save("Safar_Invoice.pdf");

  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Invoice</h1>

      <button onClick={downloadInvoice}>
        Download Invoice PDF
      </button>
    </div>
  );
}

export default Invoice;