/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { sendContactEmail } from "@/lib/emailjs";

const GetInTouch: React.FC = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formStatus !== "idle") return;
    setFormStatus("sending");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      await sendContactEmail({
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        location: String(formData.get("location") || ""),
        business_name: String(formData.get("business_name") || ""),
        business_sector: String(formData.get("business_sector") || ""),
        comments: String(formData.get("comments") || ""),
        time: new Date().toLocaleString(),
        source_button: "Enquire Today",
        form_source_page: window.location.href,
      });
      setFormStatus("sent");
    } catch (err) {
      console.error("Email send failed", err);
      setFormStatus("idle");
    }
  };

  return (
    <>
      <div
        className="elementor-element elementor-element-ea14ed8 e-flex e-con-boxed e-con e-parent"
        data-id="ea14ed8"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-18c23ab e-con-full e-flex e-con e-child"
            data-id="18c23ab"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-5dfc195 elementor-invisible animated-fast elementor-widget elementor-widget-heading"
              data-id="5dfc195"
              data-element_type="widget"
              data-settings='{"_animation":"slideInUp"}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container bg-primary">
                <span className="elementor-heading-title elementor-size-default text-white">
                  Get in Touch
                </span>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-583d843 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading"
              data-id="583d843"
              data-element_type="widget"
              data-settings='{"_animation":"slideInUp","_animation_delay":100}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Ready to protect your profits and live tax-free?
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-05fb46d e-flex e-con-boxed e-con e-parent"
        data-id="05fb46d"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-76d6fd8 e-con-full e-flex e-con e-child"
            data-id="76d6fd8"
            data-element_type="container"
            data-settings='{"background_background":"classic"}'
          ></div>
          <div
            className="elementor-element elementor-element-ff6490f e-con-full e-flex e-con e-child"
            data-id="ff6490f"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-01bf392 e-con-full blur-background e-flex e-con e-child"
              data-id="01bf392"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-402605c e-con-full e-flex e-con e-child"
                data-id="402605c"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-b13d4b0 elementor-widget elementor-widget-heading"
                  data-id="b13d4b0"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h5 className="elementor-heading-title elementor-size-default">
                      Book My Free Strategy Session
                    </h5>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-3c3cc14 elementor-widget elementor-widget-heading"
                  data-id="3c3cc14"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      Fill out the form, and let&apos;s talk about how we can
                      support your business with tailored solutions.
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-87af8c8 e-con-full e-flex e-con e-child"
                data-id="87af8c8"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
              >
                <a
                  className="elementor-element elementor-element-374d947 e-con-full e-flex e-con e-child"
                  data-id="374d947"
                  data-element_type="container"
                  data-settings='{"background_background":"classic"}'
                  href="tel:+447832921562"
                >
                  <div
                    className="elementor-element elementor-element-b40313c elementor-view-stacked elementor-shape-rounded elementor-position-left elementor-vertical-align-bottom elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box"
                    data-id="b40313c"
                    data-element_type="widget"
                    data-widget_type="icon-box.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-icon">
                          <span className="elementor-icon">
                            <i
                              aria-hidden="true"
                              className="vamtamtheme- vamtam-theme-phone"
                            ></i>
                          </span>
                        </div>
                        <div className="elementor-icon-box-content">
                          <h6 className="elementor-icon-box-title">
                            <span> Call us at: </span>
                          </h6>
                          <p className="elementor-icon-box-description">
                            +44 7832 921562
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vamtam-has-theme-widget-styles elementor-element elementor-element-b463c00 elementor-view-default elementor-widget elementor-widget-icon"
                    data-id="b463c00"
                    data-element_type="widget"
                    data-widget_type="icon.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <i
                            aria-hidden="true"
                            className="vamtamtheme- vamtam-theme-arrow-right"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div
                  className="elementor-element elementor-element-f3ce20a elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                  data-id="f3ce20a"
                  data-element_type="widget"
                  data-widget_type="divider.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </div>
                </div>
                <a
                  className="elementor-element elementor-element-2d76964 e-con-full e-flex e-con e-child"
                  data-id="2d76964"
                  data-element_type="container"
                  data-settings='{"background_background":"classic"}'
                  href="tel:+447832921562"
                >
                  <div
                    className="elementor-element elementor-element-b9673ed elementor-view-stacked elementor-shape-rounded elementor-position-left elementor-vertical-align-bottom elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box"
                    data-id="b9673ed"
                    data-element_type="widget"
                    data-widget_type="icon-box.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-icon">
                          <span className="elementor-icon">
                            <i
                              aria-hidden="true"
                              className="vamtamtheme- vamtam-theme-location"
                            ></i>
                          </span>
                        </div>
                        <div className="elementor-icon-box-content">
                          <h6 className="elementor-icon-box-title">
                            <span> Visit us at: </span>
                          </h6>
                          <p className="elementor-icon-box-description">
                            First Floor, 499 Union Street, Aberdeen, AB11 6DB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vamtam-has-theme-widget-styles elementor-element elementor-element-c264aaa elementor-view-default elementor-widget elementor-widget-icon"
                    data-id="c264aaa"
                    data-element_type="widget"
                    data-widget_type="icon.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <i
                            aria-hidden="true"
                            className="vamtamtheme- vamtam-theme-arrow-right"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-c3eedfc e-con-full animated-fast e-flex e-con e-child"
              data-id="c3eedfc"
              data-element_type="container"
              data-settings='{"animation":"none"}'
            >
              <div
                className="elementor-element elementor-element-c9694fb elementor-invisible e-con-full animated-fast e-flex e-con e-child"
                data-id="c9694fb"
                data-element_type="container"
                data-settings='{"background_background":"classic","animation":"slideInUp","animation_mobile":"none"}'
              >
                <div
                  className="elementor-element elementor-element-2734fe6 elementor-widget elementor-widget-image"
                  data-id="2734fe6"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="92"
                      height="20"
                      src="/wp-content/uploads/2025/03/Logo-white.svg"
                      className="attachment-medium size-medium wp-image-46"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-aa46181 elementor-widget elementor-widget-heading"
                  data-id="aa46181"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h5 className="elementor-heading-title elementor-size-default">
                      Speak to our Dubai tax strategists and see how much you
                      can save.
                    </h5>
                  </div>
                </div>
                <div
                  className="vamtam-has-theme-widget-styles elementor-element elementor-element-0f759a4 elementor-invisible elementor-absolute animated-fast elementor-view-default elementor-widget elementor-widget-icon"
                  data-id="0f759a4"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","_animation":"slideInLeft","_animation_delay":50}'
                  data-widget_type="icon.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-wrapper">
                      <div className="elementor-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-send"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-8eea291 e-con-full e-flex e-con e-child"
                data-id="8eea291"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
              >
                <div
                  className="vamtam-has-theme-widget-styles elementor-element elementor-element-5099fe1 elementor-invisible animated-fast elementor-button-align-stretch elementor-widget elementor-widget-form"
                  data-id="5099fe1"
                  data-element_type="widget"
                  data-settings='{"button_width":"40","step_next_label":"Next","step_previous_label":"Previous","_animation":"fadeIn","step_type":"number_text","step_icon_shape":"circle"}'
                  data-widget_type="form.default"
                >
                  <div className="elementor-widget-container">
                    <form
                      className="elementor-form"
                      onSubmit={handleSubmit}
                      name="New Form"
                      aria-label="New Form"
                    >
                      <input type="hidden" name="source_button" value="Enquire Today" />
                      <input type="hidden" name="form_source_page" value=" " />
                      <div className="elementor-form-fields-wrapper elementor-labels-above">
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50 elementor-field-required">
                          <label
                            htmlFor="form-field-name"
                            className="elementor-field-label"
                          >
                            Name
                          </label>
                          <input
                            size={1}
                            type="text"
                            name="name"
                            id="form-field-name"
                            className="elementor-field elementor-size-sm elementor-field-textual"
                            required
                          />
                        </div>
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_667018e elementor-col-50 elementor-field-required">
                          <label
                            htmlFor="form-field-field_667018e"
                            className="elementor-field-label"
                          >
                            Email
                          </label>
                          <input
                            size={1}
                            type="email"
                            name="email"
                            id="form-field-field_667018e"
                            className="elementor-field elementor-size-sm elementor-field-textual"
                            required
                          />
                        </div>
                        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                          <label
                            htmlFor="form-field-email"
                            className="elementor-field-label"
                          >
                            Location
                          </label>
                          <input
                            size={1}
                            type="text"
                            name="location"
                            id="form-field-email"
                            className="elementor-field elementor-size-sm elementor-field-textual"
                            required
                          />
                        </div>
                        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_1dac9e8 elementor-col-100 elementor-field-required">
                          <label
                            htmlFor="form-field-field_1dac9e8"
                            className="elementor-field-label"
                          >
                            Phone
                          </label>
                          <input
                            size={1}
                            type="tel"
                            name="phone"
                            id="form-field-field_1dac9e8"
                            className="elementor-field elementor-size-sm elementor-field-textual"
                            required
                            pattern="[0-9()#&+*-=.]+"
                            title="Only numbers and phone characters (#, -, *, etc) are accepted."
                          />
                        </div>
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_91c029d elementor-col-50">
                          <label
                            htmlFor="form-field-field_91c029d"
                            className="elementor-field-label"
                          >
                            Business Name
                          </label>
                          <input
                            size={1}
                            type="text"
                            name="business_name"
                            id="form-field-field_91c029d"
                            className="elementor-field elementor-size-sm elementor-field-textual"
                            required
                          />
                        </div>
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_cc72308 elementor-col-50">
                          <label
                            htmlFor="form-field-field_cc72308"
                            className="elementor-field-label"
                          >
                            Business Sector
                          </label>
                          <select
                            name="business_sector"
                            id="form-field-field_cc72308"
                            className="elementor-field elementor-size-sm elementor-field-textual"
                            required
                          >
                            <option value="">Select Here</option>
                            <option value="Agriculture & Forestry">Agriculture & Forestry</option>
                            <option value="Arts & Creative Industries">Arts & Creative Industries</option>
                            <option value="Automotive & Vehicle Services">Automotive & Vehicle Services</option>
                            <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                            <option value="Construction & Trades">Construction & Trades</option>
                            <option value="Education & Training">Education & Training</option>
                            <option value="Energy & Utilities">Energy & Utilities</option>
                            <option value="Financial & Insurance Services">Financial & Insurance Services</option>
                            <option value="Healthcare & Medical Services">Healthcare & Medical Services</option>
                            <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                            <option value="Information Technology & Software">Information Technology & Software</option>
                            <option value="Legal & Professional Services">Legal & Professional Services</option>
                            <option value="Manufacturing & Engineering">Manufacturing & Engineering</option>
                            <option value="Media & Communications">Media & Communications</option>
                            <option value="Non-profit & Charity">Non-profit & Charity</option>
                            <option value="Property & Real Estate">Property & Real Estate</option>
                            <option value="Retail & E-commerce">Retail & E-commerce</option>
                            <option value="Sport & Leisure">Sport & Leisure</option>
                            <option value="Transport & Logistics">Transport & Logistics</option>
                            <option value="Wholesale & Distribution">Wholesale & Distribution</option>
                            <option value="Oil & Gas">Oil & Gas</option>
                            <option value="Renewable Energy">Renewable Energy</option>
                            <option value="Social Media Influencer & Digital Content Creation">
                              Social Media Influencer & Digital Content Creation
                            </option>
                            <option value="GP Surgery (General Practice)">GP Surgery (General Practice)</option>
                            <option value="Dental Practice">Dental Practice</option>
                            <option value="Pharmaceutical Retail & Distribution">
                              Pharmaceutical Retail & Distribution
                            </option>
                            <option value="Medical Devices & Equipment">Medical Devices & Equipment</option>
                            <option value="Veterinary Practice">Veterinary Practice</option>
                            <option value="Any other sector">Any other sector – explain in Comments</option>
                          </select>
                        </div>
                        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
                          <label
                            htmlFor="form-field-message"
                            className="elementor-field-label"
                          >
                            Comments
                          </label>
                          <textarea
                            className="elementor-field-textual elementor-field elementor-size-sm"
                            name="comments"
                            id="form-field-message"
                            rows={6}
                            placeholder="Comments"
                          ></textarea>
                        </div>
                        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-40 e-form__buttons w-40">
                          <button
                            className="elementor-button elementor-size-sm "
                            type="submit"
                            disabled={formStatus !== "idle"}
                          >
                            <span className="elementor-button-content-wrapper justify-center ">
                              <span className="elementor-button-text">
                                {formStatus === "sending"
                                  ? "Sending..."
                                  : formStatus === "sent"
                                    ? "Sent"
                                    : "Submit"}
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-910203c elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                  data-id="910203c"
                  data-element_type="widget"
                  data-widget_type="divider.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-bf7faf1 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor"
                  data-id="bf7faf1"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      By submitting this form you agree to our{" "}
                      <a href="#">Privacy Policy</a>. Optimum may contact you
                      via email or phone for scheduling or marketing purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
