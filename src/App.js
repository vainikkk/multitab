import { useState } from "react";
import { Button, CardImg, Col, Form, Row } from "react-bootstrap";
import Header from "./Components/Header";
// import SOUND_MUTE from "./assets/images/sound-mute-alt.svg";
// import SOUND_UNMUTE from "./assets/images/sound-max.svg";
import DEFAULT from "./assets/images/default.jpg";
import YOUTUBE_IMAGE from "./assets/images/youtube.jpg";
import { getId } from "./utils/general";
const youtubeImageUrl = "https://img.youtube.com/vi/{{id}}/0.jpg";
// const youtubeEmbed = "https://www.youtube.com/embed/{{id}}";

function App() {
  // const [youtubeLink, setYoutubeLink] = useState("");
  // const [numberTab, setNumberTab] = useState("");
  // // const [isMute, setIsMute] = useState(true);
  // const [imageUrl, setImageUrl] = useState(YOUTUBE_IMAGE);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if (numberTab > 20) {
  //     alert("Please enter a below 20 tab");
  //   } else {
  //     if (youtubeLink) {
  //       // const finalUrl =
  //       //   youtubeEmbed.replace("{{id}}", getId(youtubeLink)) +
  //       //   `?mute=${isMute ? 1 : 0}&autoplay=1`;
  //       for (let i = 0; i < Number(numberTab); i++) {
  //         window.open(
  //           youtubeLink,
  //           "hello" + i,
  //           `width=200 height=200 left=${50 + 50 * i} top=${100 + 50 * i}`
  //         );
  //       }
  //     } else {
  //     }
  //   }
  // };

  // const handleYoutubeBlur = (e) => {
  //   if (e.target.value) {
  //     const finalUrl = youtubeImageUrl.replace("{{id}}", getId(e.target.value));
  //     setImageUrl(finalUrl);
  //   } else {
  //     alert("please enter valid url");
  //   }
  // };

  // return (
  //   <>
  //     <Header />
  //     <div className="container">
  //       <Row>
  //         <Col md={8}>
  //           <div className="card mt-4 p-4">
  //             <Row>
  //               <Col md={8}>
  //                 <Form>
  //                   <Form.Group className="mb-3" controlId="formBasicEmail">
  //                     <Form.Label>Youtube link</Form.Label>
  //                     <Form.Control
  //                       type="text"
  //                       placeholder="Past youtube link here"
  //                       value={youtubeLink}
  //                       onChange={(e) => setYoutubeLink(e.target.value)}
  //                       onBlur={handleYoutubeBlur}
  //                     />
  //                     {/* <Form.Text className="text-muted">
  //         We'll never share your email with anyone else.
  //       </Form.Text> */}
  //                   </Form.Group>

  //                   <Form.Group className="mb-3" controlId="formBasicPassword">
  //                     <Form.Label>Number of Tabs</Form.Label>
  //                     <Form.Control
  //                       type="number"
  //                       placeholder="number of tabs"
  //                       value={numberTab}
  //                       onChange={(e) => setNumberTab(e.target.value)}
  //                     />
  //                   </Form.Group>
  //                   {/* {isMute ? (
  //                     <div
  //                       className="sound-button"
  //                       onClick={() => setIsMute(!isMute)}
  //                     >
  //                       <img src={SOUND_MUTE} alt="image1" />
  //                       <div>Unmute</div>
  //                     </div>
  //                   ) : (
  //                     <div
  //                       className="sound-button"
  //                       onClick={() => setIsMute(!isMute)}
  //                     >
  //                       <img src={SOUND_UNMUTE} alt="image2" />
  //                       <div>Mute</div>
  //                     </div>
  //                   )} */}
  //                   <Button
  //                     variant="primary"
  //                     type="submit"
  //                     className="w-100"
  //                     onClick={handleClick}
  //                   >
  //                     Submit
  //                   </Button>
  //                 </Form>
  //               </Col>
  //               <Col md={4}>
  //                 <CardImg
  //                   src={imageUrl}
  //                   height={150}
  //                   style={{ objectFit: "cover" }}
  //                 ></CardImg>
  //               </Col>
  //             </Row>
  //           </div>
  //         </Col>
  //         <Col md={4}>
  //           <div className="card mt-4 p-4">hello</div>
  //         </Col>
  //       </Row>
  //     </div>
  //   </>
  // );
  return (
    <div
      style={{ backgroundImage: `url(${DEFAULT})`, height: "100vh" }}
      className="main"
    >
      hello
      <div class="cover black" data-color="black"></div>
    </div>
  );
}

export default App;
