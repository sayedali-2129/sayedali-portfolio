import { db } from "@/firebase/firebaseConfigue";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const addContactEnqry = async ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  if (name === "" || email === "" || subject === "" || message === "") {
    toast.error("All fields are required");
    return;
  }

  if (!validateEmail(email)) {
    toast.error("Please enter a valid email address");
    return;
  }

  try {
    const contactRef = collection(db, "contact");
    const docRef = await addDoc(contactRef, {
      name,
      email,
      subject,
      message,
    });
    await sendEmail({
      name,
      message,
      subject,
      email,
    });
    toast.success("Message sent successfully");
    return docRef;
  } catch (error) {
    console.error("Error sending message:", error);
    toast.error("Failed to send message. Please try again.");
  }
};

const sendEmail = async ({
  name,
  message,
  subject,
  email,
}: {
  name: string;
  message: string;
  subject: string;
  email: string;
}): Promise<void> => {
  if (name === "" || email === "" || subject === "" || message === "") {
    return;
  }

  try {
    const apiUrl = "https://api.emailjs.com/api/v1.0/email/send";
    const response = await axios.post(
      apiUrl,
      {
        service_id: "service_ev5plu6",
        template_id: "template_esaai6l",
        user_id: "YMMo0lQaFr081p4lX",
        template_params: {
          user_name: name,
          user_email: email,
          user_message: message,
          user_subject: subject,
          to_email: email,
          from_name: name,
        },
      },
      {
        headers: {
          Origin: "https://sayedali.web.app",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("Email sent successfully");
    } else {
      console.error(`Error sending email: ${response.data}`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export { addContactEnqry, sendEmail };
