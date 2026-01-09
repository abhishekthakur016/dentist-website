import { sendToWhatsApp } from "../../utils/whatsapp";

const AppointmentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      date: e.target.date.value,
      time: e.target.time.value,
    };

    // 🔥 DIRECT user action → popup allowed
    sendToWhatsApp({
      name: data.name,
      phone: "Appointment Request",
      message: `Appointment Date: ${data.date}, Time: ${data.time}`,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Patient Name"
        required
      />

      <input
        name="date"
        type="date"
        required
      />

      <input
        name="time"
        type="time"
        required
      />

      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
