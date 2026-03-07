import axios from "axios";
import { useState, useEffect } from "react";
import AddDonorForm from "../components/Forms/AddDonorForm";
import "./DonorsList.css";

function DonorsList() {
  const [donors, setDonors] = useState([]);
  const [filter, setFilter] = useState("");
  const [editDonor, setEditDonor] = useState(null);

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const res = await axios.get(
        "http://localhost/blood-donation-api/getDonors.php"
      );
      console.log("Donors fetched:", res.data);
      setDonors(res.data);
    } catch (error) {
      console.error("Error fetching donors:", error);
    }
  };

  const addDonor = async (donor) => {
    await axios.post(
      "http://localhost/blood-donation-api/addDonor.php",
      donor,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    fetchDonors();
  };

  const deleteDonor = async (id) => {
    await axios.get(
      `http://localhost/blood-donation-api/deleteDonor.php?id=${id}`
    );
    fetchDonors();
  };

  const updateDonor = async (donor) => {
    await axios.post(
      "http://localhost/blood-donation-api/updateDonor.php",
      donor,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    setEditDonor(null);
    fetchDonors();
  };

  const filteredDonors = donors.filter((donor) =>
    donor.bloodGroup.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="donors-container">
      <h1>Manage Donors</h1>

      <AddDonorForm
        addDonor={addDonor}
        editDonor={editDonor}
        updateDonor={updateDonor}
      />

      <input
        id="bloodGroupFilter"
        name="bloodGroupFilter"
        type="text"
        placeholder="Filter by Blood Group"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        autoComplete="off"
      />

      <div className="donors-list">
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor) => (
            <div className="donor-card" key={donor.id}>
              <span>
                {donor.name} - {donor.bloodGroup} - {donor.city}
              </span>

              <button onClick={() => setEditDonor(donor)} className="edit-btn">
                Edit
              </button>

              <button onClick={() => deleteDonor(donor.id)} className="delete-btn">
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="no-donors">No donors found</p>
        )}
      </div>
    </div>
  );
}

export default DonorsList;
