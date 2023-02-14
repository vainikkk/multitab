import { useEffect, useState } from "react";
// import SOUND_MUTE from "./assets/images/sound-mute-alt.svg";
// import SOUND_UNMUTE from "./assets/images/sound-max.svg";
import DEFAULT from "./assets/images/default.jpg";
import LOGO from "./assets/images/mt_logo.png";
import { getId } from "./utils/general";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import AOS from "aos";
import "aos/dist/aos.css";
const youtubeImageUrl = "https://img.youtube.com/vi/{{id}}/0.jpg";
// const youtubeEmbed = "https://www.youtube.com/embed/{{id}}";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [youtubeLink, setYoutubeLink] = useState("");
  const [numberTab, setNumberTab] = useState("");
  const [errors, setError] = useState({});
  // const [isMute, setIsMute] = useState(true);
  const [imageUrl, setImageUrl] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    if (numberTab > 20) {
      setError({ ...errors, number: "Please enter below 20" });
    } else {
      if (youtubeLink) {
        // const finalUrl =
        //   youtubeEmbed.replace("{{id}}", getId(youtubeLink)) +
        //   `?mute=${isMute ? 1 : 0}&autoplay=1`;
        for (let i = 0; i < Number(numberTab); i++) {
          window.open(youtubeLink, "hello" + i, `width=200 height=200 left=${50 + 50 * i} top=${100 + 50 * i}`);
        }
      } else {
      }
    }
  };

  const handleYoutubeBlur = (e) => {
    if (e.target.value) {
      const finalUrl = youtubeImageUrl.replace("{{id}}", getId(e.target.value));
      setImageUrl(finalUrl);
    } else {
      setError({ ...errors, link: "Please enter valid link" });
      setImageUrl();
    }
  };

  const handleNumber = (e) => {
    const value = e.target.value;
    setNumberTab(value);
    if (value > 20) {
      setError({ ...errors, number: "Please enter a number" });
    } else {
      setError({ ...errors, number: "" });
    }
  };

  const handleLink = (e) => {
    const value = e.target.value;
    setYoutubeLink(value);
    if (value) {
      setError({ ...errors, link: "" });
    } else {
      setImageUrl();
    }
  };

  return (
    <div style={{ backgroundImage: `url(${DEFAULT})`, height: "100vh" }} className="main">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card cardForm" style={{ zIndex: 999 }}>
            <Box
              sx={{
                textAlign: "center",
                mb: 3,
                borderBottom: "1px solid #d4d7d9",
              }}
              className="cardForm1"
            >
              <img src={LOGO} alt="logo" width={80} height={50} style={{ objectFit: "cover" }} />
              {/* <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                Tab Multiplier
              </Typography> */}
            </Box>

            <Box className="cardForm1">
              <TextField
                id="standard-basic"
                label="Tab Link"
                variant="standard"
                value={youtubeLink}
                sx={{ mb: 2 }}
                fullWidth
                onChange={handleLink}
                onBlur={handleYoutubeBlur}
                error={errors?.link}
                helperText={errors?.link}
              />
              {getId(youtubeLink) && imageUrl && (
                <Box data-aos="zoom-in">
                  <img src={imageUrl} width={"100%"} height="125px" style={{ objectFit: "cover" }} alt="thumbnail" />
                </Box>
              )}
              {imageUrl && (
                <Box>
                  <TextField
                    id="standard-basic"
                    label="Number of Tabs"
                    variant="standard"
                    value={numberTab}
                    type="number"
                    fullWidth
                    onChange={handleNumber}
                    error={errors?.number}
                    helperText={errors?.number}
                  />
                </Box>
              )}

              {/* {isMute ? (
                      <div
                        className="sound-button"
                        onClick={() => setIsMute(!isMute)}
                      >
                        <img src={SOUND_MUTE} alt="image1" />
                        <div>Unmute</div>
                      </div>
                    ) : (
                      <div
                        className="sound-button"
                        onClick={() => setIsMute(!isMute)}
                      >
                        <img src={SOUND_UNMUTE} alt="image2" />
                        <div>Mute</div>
                      </div>
                    )} */}
              <div style={{ margin: "auto" }} className="text-center">
                <Button
                  sx={{ mt: 4, borderRadius: "20px" }}
                  variant="contained"
                  disabled={youtubeLink ? false : true}
                  onClick={handleClick}
                >
                  Submit
                </Button>
              </div>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9}></Grid>
      </Grid>
      <div className="cover black" data-color="black"></div>
    </div>
  );
}

export default App;
