import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@pankod/refine-mui";
import { FormProps } from "interfaces/common";
import React from "react";
import CustomButton from "./CustomButton";

const Form = ({
  type,
  register,
  formLoading,
  handleImageChange,
  handleSubmit,
  onFinish,
  onFinishHandler,
  propertyImage,
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Property
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: "500",
                margin: "10px",
                fontSize: "16px",
                color: "#11142d",
              }}
            >
              Enter property name
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("title", { required: true })}
            />
          </FormControl>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: "500",
                margin: "10px",
                fontSize: "16px",
                color: "#11142d",
              }}
            >
              Property Description
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write a description"
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontWeight: "500",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                color: "#919191",
                padding: 10,
              }}
              {...register("description", { required: true })}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Select Property Type
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="apartment"
                {...register("propertyType", { required: true })}
              >
                <MenuItem value="apartment" title="">
                  Apartment
                </MenuItem>
                <MenuItem value="villa" title="">
                  Villa
                </MenuItem>
                <MenuItem value="farmhouse" title="">
                  Farmhouse
                </MenuItem>
                <MenuItem value="condos" title="">
                  Condos
                </MenuItem>
                <MenuItem value="townHouse" title="">
                  Townhouse
                </MenuItem>
                <MenuItem value="duplex" title="">
                  Duplex
                </MenuItem>
                <MenuItem value="studio" title="">
                  Studio
                </MenuItem>
                <MenuItem value="chalet" title="">
                  Chalet
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: "500",
                  margin: "10px",
                  fontSize: "16px",
                  color: "#11142d",
                }}
              >
                Enter property price
              </FormHelperText>
              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                variant="outlined"
                type="number"
                {...register("price", { required: true })}
              />
            </FormControl>
          </Stack>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: "500",
                margin: "10px",
                fontSize: "16px",
                color: "#11142d",
              }}
            >
              Enter Location
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("location", { required: true })}
            />
          </FormControl>

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography
                color="#11142d"
                fontSize={16}
                fontWeight={500}
                my="10px"
              >
                Property Photo
              </Typography>

              <Button
                component="label"
                sx={{
                  color: "#2ed480",
                  width: "fit-content",
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    //@ts-ignore
                    handleImageChange(e?.target?.files[0]);
                  }}
                ></input>
              </Button>
            </Stack>

            <Typography
              fontSize={14}
              color="#808191"
              sx={{
                wordBreak: "break-all",
              }}
            >
              {propertyImage?.name}
            </Typography>
          </Stack>

          <CustomButton
            type="submit"
            title={formLoading ? "Submitting..." : "Submit"}
            backgroundColor="#475be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  );
};

export default Form;
