import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Paper } from "@mui/material";
import Image from "next/image";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

export default function Call({isDarkTheme}) {
  let src='';
  isDarkTheme===true ?  src='/Dark.jpg' : src='/light.jpg' 
  // source of Image in dark or light mode position
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: '/api/contact' ,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status == 200) {
        setValue("name",'');
        setValue("email",'');
        setValue("phone",'');
        setValue("message",'');
        console.log("sended");
      }
    } catch (err) {}
  }

  return (
    <section>
      <Box
        sx={{
          padding: "4em 0",
          "& .MuiTextField-root": { width: "27ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Paper
          elevation={3}
          sx={{
            width: {
              xs: "70vw",
              sm: "45vw",
              md: "68vw",
              lg: "60vw",
              xl: "50vw"
            },
            margin: "auto",
            backgroundColor: "paperColor.superDark"
          }}
        >
          <h1 style={{ textAlign: "center" , paddingTop: ".3em" }}>فرم&nbsp; تماس</h1>
          <Stack
            direction={{ xs: "column", md: "row-reverse" }}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Box sx={{ width:{xs:"200px" ,md:"300px"}, height:{xs:"200px",md:"300px"} }}>
              <Image src={src} width="300%" height="300%" alt="" />
            </Box>
            <form onSubmit={handleSubmit(onSubmitForm)} id="contact" dir="rtl">
              <div>
                <TextField
                  variant="outlined"
                  placeholder="نام"
                  label="name"
                  onChange={(e) => setValue("name", e.target.value)}
                  autoComplete="name"
                  color="success"
                  sx={{ m: ".4em 1em" }}
                  {...register("name", {
                    required: "فیلد الزامی است.",
                  })}
                  error={!!errors?.name}
                  focused
                  helperText={errors?.name ? errors.name.message : null}
                />
              </div>
              <div>
                <TextField
                  variant="outlined"
                  placeholder="ایمیل"
                  label="email"
                  onChange={(e) => setValue("email", e.target.value)}
                  autoComplete="email"
                  color="success"
                  sx={{ m: ".4em 1em" }}
                  {...register("email", {
                    required: "فیلد الزامی است.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "ایمیل نامعتبر است.",
                    },
                  })}
                  error={!!errors?.email}
                  focused
                  helperText={errors?.email ? errors.email.message : null}
                />
              </div>
              <div>
                <TextField
                  variant="outlined"
                  placeholder="شماره تماس"
                  label="phone"
                  onChange={(e) => setValue("phone", e.target.value)}
                  autoComplete="phone"
                  color="success"
                  sx={{ m: ".4em 1em" }}
                  {...register("phone", {
                    pattern: {
                      value: /^(\+98|0)?9\d{9}$/,
                      message: "شماره تماس ایرانی باشد.",
                    },
                  })}
                  error={!!errors?.phone}
                  focused
                  helperText={errors?.phone ? errors.phone.message : null}
                />
              </div>
              <div>
                <TextField
                  dir="rtl"
                  variant="outlined"
                  placeholder="متن پیام"
                  label="message"
                  onChange={(e) => setValue("messge", e.target.value)}
                  multiline
                  rows={4}
                  color="success"
                  sx={{ m: ".4em 1em" }}
                  focused
                  {...register("message", {
                    required: "فیلد الزامی است.",
                    minLength: {
                      value: 20,
                      message: "متن پیام حداقل 20 کاراکتر باید باشد.",
                    },
                  })}
                  error={!!errors?.message}
                  helperText={errors?.message ? errors.message.message : null}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<SendIcon />}
                  sx={{ width: "12ch", m: "10px 8.5ch 20px",p:'.3rem 0',backgroundColor:'#1565c0', color:'white' }}
                >
                 &ensp;ارسال  
                </Button>
              </div>
            </form>
          </Stack>
        </Paper>
      </Box>
    </section>
  );
}
