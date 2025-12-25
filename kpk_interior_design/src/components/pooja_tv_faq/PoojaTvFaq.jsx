import React, { useState } from "react";
import "./PoojaTvFaq.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function PoojaTvFaq({ faq }) {
  const { tabs, data } = faq;

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* Header */}
      <section className="pt-faq-header">
        <p className="pt-faq-pill">FAQ</p>
        <h2 className="pt-faq-title">Frequently Asked Questions</h2>
      </section>

      {/* Tabs */}
      <div className="pt-faq-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pt-faq-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setOpenIndex(0);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="pt-faq-list">
        {data[activeTab].map((item, index) => (
          <div
            key={index}
            className="pt-faq-box"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="pt-faq-question">
              <span>{item.q}</span>
              {openIndex === index ?  <FaChevronUp /> : <FaChevronDown />}
            </div>

            {openIndex === index && (
              <div className="pt-faq-answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
