import { render } from "react-dom";
import React from "react";
import { sum, Button } from "shared";

// CMD + Click will get to source code
sum(1, 2);

render(
  <div>
    App that uses shared  components package
    {/* // CMD + Click will get to declaration */}
    <Button />
  </div>,
  document.getElementById("root")
);
