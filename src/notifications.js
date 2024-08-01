import toast from "react-hot-toast";

export const notification = (msg = "Muvaffaqiyatli") => {
  toast(msg + "!", {
    position: "top-right",
    icon: "🟣",
    style: {
      background: "#333",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "normal",
    },
  });
};
