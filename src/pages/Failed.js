function Failed() {
  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h1 style={{ color: "red" }}>❌ Payment Failed</h1>

      <p>Sorry! Your payment could not be completed.</p>

      <p>Please try again.</p>

      <a href="/booking">
        <button
          style={{
            padding: "12px 25px",
            marginTop: "20px",
            background: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </a>
    </div>
  );
}

export default Failed;