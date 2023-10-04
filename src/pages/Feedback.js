import * as React from "react";
import { useState } from "react";
import { FormControl, useFormControlContext } from "@mui/base/FormControl";
import { Input, inputClasses } from "@mui/base/Input";
import { styled } from "@mui/system";
import clsx from "clsx";
import { left } from "@popperjs/core";
import AppBar from "../components/appBar";
import { ThemeProvider } from "@mui/material/styles";
import { darkGreentheme } from "../themes/darkGreen";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
export default function Feedback() {
  const token = localStorage.getItem("token");
  const [feedBackData, setFeedbackData] = useState("");

  const feedBackDataObj = {
    employeeId: 1,
    hygieneStatus: 3,
    colleagueStatus: 4,
    juniorStatus: 2,
    seniorStatus: 3,
    staffStatus: 4,
    parkingStatus: 5,
    washroomStatus: 3,
  };

  const containerStyle = {
    marginTop: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    borderRadius: "20px",
    padding: "5%",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/feedback/123`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedBackDataObj }),
      });
      
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
      } else {
        throw new Error("Error submitting feedback");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const navigate = useNavigate();
  async function check() {
    try {
      const response = await fetch("http://localhost:1337/api/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });
      console.log(response);
      const data = await response.json();
      const validity = data.status;
      if (!data.error) {
        console.log(validity);
        if (validity === "invalid") {
          localStorage.removeItem("token");
          navigate("/sign-in");
        } else if (validity === "valid") {
          console.log("user authenticated!");
        } else {
          console.log("error during authentification");
        }
      } else {
        console.log(data.error);
      }
    } catch (err) {
      console.log(err);
    }
  }
  check();

  //   {
  //     position: 'absolute',
  //     top: '50%',
  //     left: '50%',
  //     transform: translate(-50%, -50%),
  //     width:'90vw',
  //     height:'100vh',
  //     // marginTop:'40px',
  //     // marginLeft: '40px',
  //     backgroundColor:'black',
  //     // border:'2px solid red',
  //     borderRadius:'10px'

  // }

  return (
    <>
    <ThemeProvider theme={darkGreentheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
      <AppBar/>
      <div className="main_div" style={containerStyle}>
        <FormControl defaultValue="" required>
          <Label>
            Problems with Bathrooms/Washrooms(If none, write 'none'):
          </Label>
          <StyledInput1 placeholder="Write your problems here" />
          <HelperText />
        </FormControl>
        <br />
        <FormControl defaultValue="" required>
          <Label>
            Any problems with your Hygiene of offices'(If none, write 'none'):
          </Label>
          <StyledInput3 placeholder="Write your problems here" />
          <HelperText />
        </FormControl>
        <br />
        <FormControl defaultValue="" required>
          <Label>Problems with your collegue/s(If none, write 'none'):</Label>
          <StyledInput2 placeholder="Write your problems here" />
          <HelperText />
        </FormControl>
        <br />
        <FormControl defaultValue="" required>
          <Label>Problems with your collegue/s(If none, write 'none'):</Label>
          <StyledInput3 placeholder="Write your problems here" />
          <HelperText />
        </FormControl>
        <br />
        <FormControl defaultValue="" required>
          <Label>Problems with your Junior/s(If none, write 'none'):</Label>
          <StyledInput4 placeholder="Write your problems here" />
          <HelperText />
        </FormControl>
        <br />
        <FormControl defaultValue="" required>
          <Label>Problems with your Senior/s(If none, write 'none'):</Label>
          <StyledInput5 placeholder="Write your problems here" />
          <HelperText />
        </FormControl>
        <br />
        <FormControl defaultValue="" required>
          <Label>Problems with Parking Space'(If none, write 'none'):</Label>
          <StyledInput6 placeholder="Write your problems here" />
          <HelperText />
        </FormControl>
      </div>
      </Container>
      </ThemeProvider>
    </>
  );
}

const StyledInput1 = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 500px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 20px;
    line-height: 1.5;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    padding: 8px 12px;
    border-radius: 8px;

    &:hover {
      background: ${theme.palette.mode === "dark" ? "" : grey[100]};
      border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[100]
      };
    }
  }
`
);

const StyledInput2 = styled(Input)(
  ({ theme }) => `
  
    .${inputClasses.input} {
      width: 500px;
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-size: 20px;
      line-height: 1.5;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[800] : grey[300]
      };
      padding: 8px 12px;
      border-radius: 8px;
  
      &:hover {
        background: ${theme.palette.mode === "dark" ? "" : grey[100]};
        border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
      }
  
      &:focus {
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[600] : blue[100]
        };
      }
    }
  `
);

const StyledInput3 = styled(Input)(
  ({ theme }) => `
  
    .${inputClasses.input} {
      width: 500px;
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-size: 20px;
      line-height: 1.5;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[800] : grey[300]
      };
      padding: 8px 12px;
      border-radius: 8px;
  
      &:hover {
        background: ${theme.palette.mode === "dark" ? "" : grey[100]};
        border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
      }
  
      &:focus {
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[600] : blue[100]
        };
      }
    }
  `
);

const StyledInput4 = styled(Input)(
  ({ theme }) => `
  
    .${inputClasses.input} {
      width: 500px;
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-size: 20px;
      line-height: 1.5;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[800] : grey[300]
      };
      padding: 8px 12px;
      border-radius: 8px;
  
      &:hover {
        background: ${theme.palette.mode === "dark" ? "" : grey[100]};
        border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
      }
  
      &:focus {
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[600] : blue[100]
        };
      }
    }
  `
);

const StyledInput5 = styled(Input)(
  ({ theme }) => `
  
    .${inputClasses.input} {
      width: 500px;
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-size: 20px;
      line-height: 1.5;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[800] : grey[300]
      };
      padding: 8px 12px;
      border-radius: 8px;
  
      &:hover {
        background: ${theme.palette.mode === "dark" ? "" : grey[100]};
        border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
      }
  
      &:focus {
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[600] : blue[100]
        };
      }
    }
  `
);

const StyledInput6 = styled(Input)(
  ({ theme }) => `
  
    .${inputClasses.input} {
      width: 500px;
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-size: 20px;
      line-height: 1.5;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[800] : grey[300]
      };
      padding: 8px 12px;
      border-radius: 8px;
  
      &:hover {
        background: ${theme.palette.mode === "dark" ? "" : grey[100]};
        border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
      }
  
      &:focus {
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[600] : blue[100]
        };
      }
    }
  `
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? "invalid" : "")}>
      {children}
      {required ? " *" : ""}
    </p>
  );
})`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 2rem;
  margin-bottom: 4px;
  color: white;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? (
    <p {...props} style={{ color: "greenyellow" }}>
      This field is required.
    </p>
  ) : null;
})`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};
