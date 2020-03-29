import { render } from "react-dom";
import React from "react";
import { sum, Button } from "shared";

// CMD + Click will get to .ts file
sum(1, 2);

render(
  <div>
    App that uses shared  components package
    {/* // CMD + Click will get to to .d.ts file */}
    <Button />
  </div>,
  document.getElementById("root")
);
