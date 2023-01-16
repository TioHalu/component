import "./App.css";
import Checkbox from "./component/CheckBox";
import Radio from "./component/Radio";
import SearchBox from "./component/SearchBox";
import FormControl from "./component/FormControl";
import React, { useState } from "react";
import TextArea from "./component/TextArea";

import withStyles from "react-jss";

const Style = () => ({
  App: {
    textAlign: "center",
    padding: "20px",
    "& .customClass": {
      marginBottom: "20px",
    },
    '& .container': {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      "& .formGroup": {
        "& .formControl": {
          marginBottom: "20px",
        },
      },
    }
  },
});

function App({ classes }) {
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState("");
  const [hint, setHint] = useState(false);
  const [clearIcon, setClearIcon] = useState(true);
  const handleChange = (e) => {
    setChecked(e);
  };
  const _handleFocus = (e) => {
    if (e === "hint") {
      setHint(true);
    }
  };
  return (
    <div className={classes.App}>
      <TextArea
        placeholder="You can enter something here"
      />
      <h1>Checkbox and Radio</h1>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        disabled={false}
        label="Checkbox"
      />
      <Radio
        checked={checked}
        onChange={handleChange}
        disabled={false}
        label="Options"
      />
      <Checkbox
        checked={checked}
        onChange={handleChange}
        disabled={true}
        label="Checkbox"
      />
      <Radio
        checked={checked}
        onChange={handleChange}
        disabled={true}
        label="Options"
      />
      <h1>Search Box</h1>
      <SearchBox
        placeholder="Search"
        value={value}
        onFocus={_handleFocus.bind(this, "hint")}
        hint={hint}
        onChange={(e) => setValue(e.target.value)}
        onSearch={() => {
          console.log("search");
        }}
        closeIcon={clearIcon}
        className="customClass"
      />
      <SearchBox
        placeholder="Search"
        value={value}
        onFocus={_handleFocus.bind(this, "hint")}
        hint={hint}
        onChange={(e) => setValue(e.target.value)}
        onSearch={() => {
          console.log("search");
        }}
        closeIcon={clearIcon}
        size="small"
      />
      <h1>Form Control</h1>
      <div className="container">
        <div className="formGroup">
          <div className="formControl">
            <TextArea
              placeholder="You can enter something here"
              variant="light"
              captions="This is caption"
            />
          </div>
          <div className="formControl">
            <TextArea
              placeholder="You can enter something here"
              variant="primary"

              captions="This is caption"
            />
          </div>
          <div className="formControl">
            <TextArea
              placeholder="You can enter something here"
              variant="error"

              captions="This is caption"
            />
          </div>
          <div className="formControl">
            <TextArea
              placeholder="You can enter something here"
              variant="success"

              captions="This is caption"
            />
          </div>
          <div className="formControl">
            <TextArea
              placeholder="You can enter something here"
              variant="grey"

              captions="This is caption"
              disabled={true}
            />
          </div>
          <div className="formControl">
            <TextArea
              placeholder="You can enter something here"
              variant="dark"

              captions="This is caption"
            />
          </div>
        </div>
        <div className="formGroup">
          <div className="formControl">
            <FormControl
              placeholder="You can enter something here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="formControl">
            <FormControl
              placeholder="You can enter something here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant="primary"
            />
          </div>
          <div className="formControl">
            <FormControl
              placeholder="You can enter something here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant="error"
            />
          </div>
          <div className="formControl">
            <FormControl
              placeholder="You can enter something here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant="success"
            />
          </div>
          <div className="formControl">
            <FormControl
              placeholder="You can enter something here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant="dark"
            />
          </div>
          <div className="formControl">
            <FormControl
              placeholder="You can enter something here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant="grey"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(Style)(App);
