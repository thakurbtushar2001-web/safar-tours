import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import { signOut } from "firebase/auth";
import { db, auth } from "../firebase/firebase";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Admin.css";

import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Admin() {

  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "bookings"),
      (snapshot) => {

        const bookingList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBookings(bookingList);

      }
    );

    return () => unsubscribe();

  }, []);

  const handleLogout = async () => {

    await signOut(auth);

    navigate("/login");

  };

  const exportToExcel = () => {

    const data = bookings.map((item) => ({
      Name: item.name,
      Phone: item.phone,
      Email: item.email,
      Pickup: item.pickup,
      Drop: item.drop,
      Date: item.date,
      Time: item.time,
      Vehicle: item.vehicle,
      Passengers: item.passengers,
      Status: item.status,
      Message: item.message,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Bookings"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      }
    );

    saveAs(file, "Safar_Tours_Bookings.xlsx");

  };

  const downloadInvoice = (booking) => {

    const pdf = new jsPDF();

    pdf.setFontSize(20);
    pdf.text("Safar Tours & Travels", 20, 20);

    pdf.setFontSize(13);
    pdf.text("Booking Invoice", 20, 30);

    autoTable(pdf, {

      startY: 40,

      head: [["Field", "Value"]],

      body: [

        ["Customer", booking.name],

        ["Phone", booking.phone],

        ["Email", booking.email],

        ["Pickup", booking.pickup],

        ["Drop", booking.drop],

        ["Date", booking.date],

        ["Time", booking.time],

        ["Vehicle", booking.vehicle],

        ["Passengers", booking.passengers],

        ["Status", booking.status],

        ["Message", booking.message || "-"],

      ],

    });

    pdf.save(`Invoice_${booking.name}.pdf`);

  };

  const deleteBooking = async (id) => {

    await deleteDoc(doc(db, "bookings", id));

  };

  const updateStatus = async (id, status) => {

    await updateDoc(
      doc(db, "bookings", id),
      {
        status,
      }
    );

  };

  const filteredBookings = bookings.filter((item) =>

    item.name?.toLowerCase().includes(search.toLowerCase()) ||

    item.phone?.includes(search) ||

    item.vehicle?.toLowerCase().includes(search.toLowerCase())

  );

  const chartData = {

    labels: [
      "Pending",
      "Confirmed",
      "Completed",
      "Cancelled",
    ],

    datasets: [

      {

        label: "Bookings",

        data: [

          bookings.filter(
            (b) => b.status === "Pending"
          ).length,

          bookings.filter(
            (b) => b.status === "Confirmed"
          ).length,

          bookings.filter(
            (b) => b.status === "Completed"
          ).length,

          bookings.filter(
            (b) => b.status === "Cancelled"
          ).length,

        ],

        backgroundColor: [
          "#facc15",
          "#22c55e",
          "#3b82f6",
          "#ef4444",
        ],

      },

    ],

  };
  return (

<div className="admin-page">

  <div className="admin-header">

    <h1>Admin Dashboard</h1>

    <div>

      <button
        className="export-btn"
        onClick={exportToExcel}
      >
        Export Excel
      </button>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>

  </div>


  <div className="dashboard-cards">

    <div className="card">
      <h3>Total Bookings</h3>
      <p>{bookings.length}</p>
    </div>

    <div className="card">
      <h3>Pending</h3>
      <p>{bookings.filter(b=>b.status==="Pending").length}</p>
    </div>

    <div className="card">
      <h3>Confirmed</h3>
      <p>{bookings.filter(b=>b.status==="Confirmed").length}</p>
    </div>

    <div className="card">
      <h3>Completed</h3>
      <p>{bookings.filter(b=>b.status==="Completed").length}</p>
    </div>

  </div>


  <div className="chart-container">

    <h2>Booking Analytics</h2>

   <div style={{ width: "100%", height: "300px" }}>
  <Bar
    data={chartData}
    options={{
      responsive: true,
      maintainAspectRatio: false,
    }}
  />
</div>
  </div>


  <input

    className="search-box"

    type="text"

    placeholder="Search Name / Phone / Vehicle"

    value={search}

    onChange={(e)=>setSearch(e.target.value)}

  />


  <table>

    <thead>

      <tr>

        <th>Name</th>

        <th>Phone</th>

        <th>Pickup</th>

        <th>Drop</th>

        <th>Date</th>

        <th>Vehicle</th>

        <th>Status</th>

        <th>Action</th>

      </tr>

    </thead>

    <tbody>

      {filteredBookings.map((booking)=>(

        <tr key={booking.id}>

          <td>{booking.name}</td>

          <td>{booking.phone}</td>

          <td>{booking.pickup}</td>

          <td>{booking.drop}</td>

          <td>{booking.date}</td>

          <td>{booking.vehicle}</td>

          <td>

            <select

              value={booking.status}

              onChange={(e)=>

                updateStatus(

                  booking.id,

                  e.target.value

                )

              }

            >

              <option>Pending</option>

              <option>Confirmed</option>

              <option>Completed</option>

              <option>Cancelled</option>

            </select>

          </td>

          <td>

            <button

              onClick={()=>deleteBooking(booking.id)}

            >

              Delete

            </button>

            <button

              className="pdf-btn"

              onClick={()=>downloadInvoice(booking)}

            >

              PDF

            </button>

            <a

              href={`https://wa.me/91${booking.phone}?text=Hello ${booking.name}, your Safar Tours booking is ${booking.status}.`}

              target="_blank"

              rel="noreferrer"

              className="whatsapp-btn"

            >

              WhatsApp

            </a>

          </td>

        </tr>

      ))}

    </tbody>

  </table>

</div>

);

}

export default Admin;