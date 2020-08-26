import React, { useState } from "react";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
      {
        submittedForm ? (
          <div>Your form entry was {submittedForm.get("myText")} and {submittedForm.get("myDropdown")}</div>
        ) : (
          <form onSubmit={onSubmit}>
            <label htmlFor="myTextId">Input</label>
            <input type="text" name="myText" id="myTextId"/>

            <label htmlFor="myDropdownId">Input</label>
            <select name="myDropdown" id="myDropdownId">
              <option value="foo">Foo</option>
              <option value="bar">Bar</option>
              <option value="baz">Baz</option>
            </select>
            <input type="submit" value="Send it" />
          </form>
        )
      }
    </div>
  )
}

export default Form
