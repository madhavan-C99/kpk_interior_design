import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./Icon.css";

export default function Icon() {
  return (
    <div className="floating-actions">
      {/* Phone */}
      <a
        href="tel:+918764839262"
        className="floating-icon phone"
      >
        <FaPhoneAlt className="icon-phone" />
      </a>
      {/* WhatsApp */}
      <a
        href="https://wa.me/918764839262 "
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon whatsapp"
      >
        <FaWhatsapp className="icon-whatsapp" />
      </a>
    </div>
  );
}