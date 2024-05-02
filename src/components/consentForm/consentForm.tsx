import React, { SyntheticEvent, useState } from "react";
import "./consentForm.scss";
import Divider from "../divider/divider";

export default function ConsentForm({ toggleConsentModal }: any) {
  const [formData, setFormData] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
    check7: false,
    check8: false,
    name: "",
    email: "",
    date: "",
    signature: "",
  });

  const changeChecked = (event: any) => {
    const { name, checked } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: checked }));
  };

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    toggleConsentModal();
  };
  return (
    <form onSubmit={handleSubmit} className="consent-form">
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="check1" className="consent-form__label">
          I understand that my participation is completely voluntary
        </label>
        <input
          type="checkbox"
          id="check1"
          name="check1"
          className="consent-form__input-checkbox"
          checked={formData.check1}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="check2" className="consent-form__label">
          I am aware and understand the potential risks involved in this
          circuits program and have been given ample opportunity to ask
          questions as necessary
        </label>
        <input
          type="checkbox"
          id="check2"
          name="check2"
          className="consent-form__input-checkbox"
          checked={formData.check2}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="check3" className="consent-form__label">
          I give consent to certain physical touching that may be necessary to
          ensure proper technique and body aligned
        </label>
        <input
          type="checkbox"
          id="check3"
          name="check3"
          className="consent-form__input-checkbox"
          checked={formData.check3}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="check4" className="consent-form__label">
          I understand that the achievement of health or fitness goals cannot be
          guaranteed
        </label>
        <input
          type="checkbox"
          id="check4"
          name="check4"
          className="consent-form__input-checkbox"
          checked={formData.check4}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="check5" className="consent-form__label">
          I have had the opportunity to express any concerns regarding any of
          the exercises and activities selected for the circuits program
        </label>
        <input
          type="checkbox"
          id="check5"
          name="check5"
          className="consent-form__input-checkbox"
          checked={formData.check5}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="check6" className="consent-form__label">
          I have been able to ask questions regarding any concerns and have had
          those questions answered to my satisfaction
        </label>
        <input
          type="checkbox"
          id="check6"
          name="check6"
          className="consent-form__input-checkbox"
          checked={formData.check6}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="check7" className="consent-form__label">
          I am in good physical condition, have no impairment and have been
          given the opportunity to inform the instructor of any conditions which
          might prevent my participation in the circuit program or that will be
          exacerbated by the involvement in the circuit programme
        </label>
        <input
          type="checkbox"
          id="check7"
          name="check7"
          className="consent-form__input-checkbox"
          checked={formData.check7}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="check8" className="consent-form__label">
          I have been advised to ease activity and withdraw from the circuit if
          I experience unusual discomfort and feel the need to stop
        </label>
        <input
          type="checkbox"
          id="check8"
          name="check8"
          className="consent-form__input-checkbox"
          checked={formData.check8}
          onChange={changeChecked}
        />
      </div>
      <Divider />
      <p className="consent-form__text">
        I have read and understand the above agreement; I have been able to ask
        questions regarding any concerns I might have; I have had those
        questions answered to my satisfaction; and I am freely signing this
        agreement
      </p>
      <div className="consent-form__grid">
        <div className="consent-form__wrapper">
          <label htmlFor="name" className="consent-form__label">
            Participant name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            className="consent-form__input"
          />
        </div>
        <div className="consent-form__wrapper">
          <label htmlFor="date" className="consent-form__label">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={changeHandler}
            className="consent-form__input"
          />
        </div>
        <div className="consent-form__wrapper">
          <label htmlFor="signature" className="consent-form__label">
            Signature
          </label>
          <input
            type="text"
            id="signature"
            name="signature"
            value={formData.signature}
            onChange={changeHandler}
            className="consent-form__input"
          />
        </div>
        <div className="consent-form__wrapper">
          <label htmlFor="email" className="consent-form__label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className="consent-form__input"
          />
        </div>
      </div>
      <button type="submit" className="consent-form__btn">
        Save
      </button>
    </form>
  );
}
