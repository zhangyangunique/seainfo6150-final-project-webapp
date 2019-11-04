import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedForm: null
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    const submittedForm = e.target;
    const form = {};
    for (let i = 0; i < submittedForm.elements.length; i++) {
      const element = submittedForm.elements[i];
      form[element.name] = element.value;
    }

    const response = await fetch("http://localhost:5000/send", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify({
        from: "seainfo6150-team1@ethereal.email", // sender address
        to: "seainfo6150-team1@ethereal.email", // list of receivers
        subject: "Form submission", // Subject line
        text: `Form submission: ${JSON.stringify(form)}` // plain text body
      }) // body data type must match "Content-Type" header
    });

    if (response.status !== 200) {
      throw Error("error sending email");
    }

    this.setState({ submittedForm: form });
  };

  render() {
    return this.state.submittedForm ? (
      <div>
        {Object.entries(this.state.submittedForm).map(([name, value], i) => (
          <div key={`form-${i}`}>
            {name}: {value}
          </div>
        ))}
      </div>
    ) : (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="blah" />
        <input type="submit" value="Send it" />
      </form>
    );
  }
}
