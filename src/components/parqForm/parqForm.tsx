import React, { SyntheticEvent, useState } from "react";
import "./parqForm.scss";
import { useNavigate } from "react-router-dom";

export default function ParqForm({ toggleParqModal }: any) {
  const [formData, setFormData] = useState({
    check1: true,
    check2: true,
    check3: true,
    check4: true,
    ans4: "",
    check5: true,
    ans5: "",
    check6: true,
    ans6: "",
    check7: true,
    name: "",
    signature: "",
    witness: "",
    witnessSignature: "",
    date: "",
  });

  const changeChecked = (event: any) => {
    const { name, checked } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: checked }));
  };

  const changeCheckedNo = (event: any) => {
    const { name, checked } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: !checked }));
  };

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };

  const nav = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    toggleParqModal();
    nav("/sessions");
  };
  return (
    <form className="parq-form" onSubmit={handleSubmit}>
      <h2 className="parq-form__title">General Health Questions</h2>
      <p className="parq-form__subtitle">
        Please read the 7 questions below carefully and answer each one
        honestly:
      </p>
      <div className="parq-form__wrapper-checkbox">
        <p className="parq-form__text">
          1. Has your doctor ever said that you have a heart condition or high
          blood pressure?
        </p>
        <label htmlFor="check1Yes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="check1Yes"
          name="check1"
          checked={formData.check1}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="check1No" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="check1No"
          name="check1"
          checked={!formData.check1}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <p className="parq-form__text">
          2. Do you feel pain in your chest at rest, during your daily
          activities of living or when you do physical activity?
        </p>
        <label htmlFor="check2Yes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="check2Yes"
          name="check2"
          checked={formData.check2}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="check2No" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="check2No"
          name="check2"
          checked={!formData.check2}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <p className="parq-form__text">
          3. Do you lose balance because of dizziness or have you lost
          consciousness in the last 12 months? Please answer ‘no’ if your
          dizziness was associated with over-breathing (including during
          vigorous exercise)
        </p>
        <label htmlFor="check3Yes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="check3Yes"
          name="check3"
          checked={formData.check3}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="check3No" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="check3No"
          name="check3"
          checked={!formData.check3}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <div className="parq-form__container">
          <p className="parq-form__text">
            4. Have you ever been diagnosed with another chronic medical
            condition (other than heart disease or high blood pressure)?
            <br />
            <span className="parq-form__italic">
              Please list conditions here:
            </span>
          </p>
          <label htmlFor="">
            <textarea
              name="ans4"
              value={formData.ans4}
              onChange={changeHandler}
              className="parq-form__textarea"
            />
          </label>
        </div>
        <label htmlFor="check4Yes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="check4Yes"
          name="check4"
          checked={formData.check4}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="check4No" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="check4No"
          name="check4"
          checked={!formData.check4}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <div className="parq-form__container">
          <p className="parq-form__text">
            5. Are you currently taking prescribed medications for a chronic
            medical condition?
            <br />
            <span className="parq-form__italic">
              Please list condition(s) and medications here:
            </span>
          </p>
          <label htmlFor="">
            <textarea
              name="ans4"
              value={formData.ans4}
              onChange={changeHandler}
              className="parq-form__textarea"
            />
          </label>
        </div>
        <label htmlFor="check5Yes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="check5Yes"
          name="check5"
          checked={formData.check5}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="check5No" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="check5No"
          name="check5"
          checked={!formData.check5}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <div className="parq-form__container">
          <p className="parq-form__text">
            6. Do you currently have (or have had within the past 12 months) a
            bone, joint, or soft tissue (muscle, ligament, or tendon) problem
            that could be made worse by becoming more physically active? Please
            answer no if you had a problem in the past, but it does not limit
            your current ability to be physically active. <br />
            <span className="parq-form__italic">
              Please list condition(s) here:
            </span>
          </p>
          <label htmlFor="">
            <textarea
              name="ans4"
              value={formData.ans4}
              onChange={changeHandler}
              className="parq-form__textarea"
            />
          </label>
        </div>
        <label htmlFor="check6Yes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="check6Yes"
          name="check6"
          checked={formData.check6}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="check6No" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="check6No"
          name="check6"
          checked={!formData.check6}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <p className="parq-form__text">
          7. as your doctor ever said that you should only do medically
          supervised physical activity?
        </p>
        <label htmlFor="check7Yes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="check7Yes"
          name="check7"
          checked={formData.check7}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="check7No" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="check7No"
          name="check7"
          checked={!formData.check7}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <p className="parq-form__subtitle">
        If you answered NO to all of the questions above, you are cleared for
        physical activity.
      </p>
      <p className="parq-form__text">
        Please sign the PARTICIPANT DECLARATION at the end of this form
      </p>
      <ul className="parq-form__list">
        <li className="parq-form__list-item">
          Start becoming much more physically active - start slowly and build up
          gradually
        </li>
        <li className="parq-form__list-item">
          Follow International Physical Activity Guidelines for your age (
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
            target="_blank"
            className="parq-form__link"
          >
            physical activity fact sheet
          </a>
          ).
        </li>
        <li className="parq-form__list-item">
          You may take part in a health and fitness appraisal
        </li>
        <li className="parq-form__list-item">
          If you are over the age of 45 and not accustomed to regular vigorous
          to maximal effort exercise, consult a qualified exercise professional
          before engaging in this intensity of exercise
        </li>
        <li className="parq-form__list-item">
          If you have any further questions, contact a qualified exercise
          professional
        </li>
      </ul>
      <p className="parq-form__subtitle">Participant declaration</p>
      <p className="parq-form__text">
        If you are less than the legal age required for consent or require the
        assent of a care provider, your parent, guardian or care provider must
        also sign this form. I, the undersigned, have read, understood to my
        full satisfaction and completed this questionnaire. I acknowledge that
        this physical activity clearance is valid for a maximum of 12 months
        from the date it is completed and becomes invalid if my condition
        changes. I also acknowledge that the community/fitness centre may retain
        a copy of this form for its records. In these instances, it will
        maintain the confidentiality of the same, complying with applicable law.
      </p>
      <div className="parq-form__grid">
        <div className="parq-form__wrapper">
          <label htmlFor="name" className="parq-form__label">
            Participant name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            className="parq-form__input"
          />
        </div>
        <div className="parq-form__wrapper">
          <label htmlFor="signature" className="parq-form__label">
            Signature
          </label>
          <input
            type="text"
            id="signature"
            name="signature"
            value={formData.signature}
            onChange={changeHandler}
            className="parq-form__input"
          />
        </div>
        <div className="parq-form__wrapper">
          <label htmlFor="date" className="parq-form__label">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={changeHandler}
            className="parq-form__input"
          />
        </div>
      </div>
      <button type="submit" className="parq-form__btn">
        Save
      </button>
    </form>
  );
}
