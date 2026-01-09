export const sendToWhatsApp = (data) => {
  const message =
    "Name: " + data.name + "\n" +
    "Phone: " + data.phone + "\n" +
    "Message: " + data.message;

  // ✅ STEP 2 (yehi line tum pooch rahe the)
  const url = `https://wa.me/917876689520?text=${encodeURIComponent(message)}`;

  console.log("WHATSAPP URL 👉", url);

  // ✅ STEP 3: open logic
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = url;   // mobile
  } else {
    window.open(url, "_blank");  // desktop
  }
};
