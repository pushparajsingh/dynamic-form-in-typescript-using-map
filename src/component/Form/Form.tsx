import React, { useEffect, useState } from "react";
import DenseAppBar from "../Header/DenseAppBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AppDispatch } from "../../redux/store";
import { getPost } from "../../redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

interface Request {
  fieldName: string;
  type: string;
  value: string;
  options?: any[];
}

export default function Form() {
  const [state, setState] = useState([]);
  const dispatch = useDispatch<AppDispatch>();
  const data: any = useSelector<RootState>((state) => state.data);
  const [val, setVal] = useState();

  useEffect(() => {
    dispatch(getPost());
  }, []);
  useEffect(() => {
    setState(data);
  }, [data]);

  // setState((event.target as HTMLInputElement).value);

  return (
    <>
      <DenseAppBar />
      <div className="box">
        <h1>Submit Form</h1>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <div className="field">
            {state?.map(
              ({ fieldName, type, value, options }: Request, index) => {
                return (
                  <span key={index}>
                    {fieldName == "gender" ? (
                      <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                          Gender
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                          />
                        </RadioGroup>
                      </FormControl>
                    ) : (
                      <TextField
                        fullWidth
                        label={fieldName}
                        id="fullWidth"
                        style={{ marginBottom: "4%" }}
                        defaultValue={value}
                        onChange={(event) => {
                          // setVal({
                          //   fieldName: (event.target as HTMLInputElement).value,
                          // });
                        }}
                      />
                    )}
                  </span>
                );
              }
            )}
            <Button
              variant="contained"
              href="#contained-buttons"
              className="mgn-bottom"
            >
              Submit
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
}
