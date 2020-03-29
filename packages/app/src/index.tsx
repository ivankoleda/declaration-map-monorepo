import { render } from "react-dom";
import React from "react";
import { sum, Button } from "shared";

// CMD + Click will navigate to .ts file
sum(1, 2);

render(
  <div>
    App that uses shared  components package
    {/* // CMD + Click will navigate .d.ts file */}
    <Button />
  </div>,
  document.getElementById("root")
);
