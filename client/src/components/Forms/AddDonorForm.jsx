import { useState, useEffect } from "react";
function AddDonorForm({ addDonor, editDonor, updateDonor }) {
    const [name, setName] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [city, setCity] = useState("");

useEffect(() => {
  if (editDonor) {
    setName(editDonor.name);
    setBloodGroup(editDonor.bloodGroup);
    setCity(editDonor.city);
  }
}, [editDonor]);
 const handleSubmit = (e) => {
  e.preventDefault();

  // Validation: Check if all fields are filled
  if (!name.trim() || !bloodGroup.trim() || !city.trim()) {
    alert("Please fill in all fields");
    return;
  }

  if (editDonor) {
    updateDonor({
      id: editDonor.id,
      name,
      bloodGroup,
      city,
    });
  } else {
    addDonor({
  id: Date.now(),
  name,
  bloodGroup,
  city,
});
  }

  setName("");
  setBloodGroup("");
  setCity("");
};

    return (        <form onSubmit={handleSubmit}>  
        <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
        />
        <input
            id="bloodGroup"
            name="bloodGroup"
            type="text"
            placeholder="Blood Group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
            autoComplete="off"
        />
        <input
            id="city"
            name="city"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            autoComplete="address-level2"
        />
        <button type="submit">
  {editDonor ? "Update Donor" : "Add Donor"}
</button>
    </form>);
}

export default AddDonorForm;
