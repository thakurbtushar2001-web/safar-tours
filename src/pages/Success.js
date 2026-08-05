function Success() {
  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h1 style={{ color: "green" }}>✅ Booking Successful!</h1>

      <p>Thank you for choosing Safar Tours & Travels.</p>

      <p>Your payment has been received successfully.</p>

      <a href="/">
        <button
          style={{
            padding: "12px 25px",
            marginTop: "20px",
            background: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Go To Home
        </button>
        <br /><br />

<a href="/invoice">
  <button
    style={{
      padding: "12px 25px",
      background: "#198754",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    📄 Download Invoice
  </button>
</a>
      </a>
    </div>
  );
}

export default Success;