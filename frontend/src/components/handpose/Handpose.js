import { Grid, Typography } from "@material-ui/core";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import React, { useRef } from "react";
import { drawHand } from "./utilities";

const Handpose = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasRef2 = useRef(null);
  const runHandpose = async () => {
    console.log("Loading model ....");
    const net = await handpose.load();
    console.log("Handpose Model Loaded.");
    // Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current != "undefined" &&
      webcamRef.current != null &&
      webcamRef.current.video.readyState == 4
    ) {
      // Get video properties
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
      // Set video height and width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      canvasRef2.current.width = videoWidth;
      canvasRef2.current.height = videoHeight;
      // Make detection
      const hand = await net.estimateHands(video);
      // console.log(hand);
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      const ctx2 = canvasRef2.current.getContext("2d");
      drawHand(hand, ctx);
      drawHand(hand, ctx2);
    }
  };

  runHandpose();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ width: "50%" }}
      >
        <Grid item>
          <Webcam
            ref={webcamRef}
            style={{
              position: "absolute",
              left: "10%",
              // right: 0,
              margin: "auto",
              textAlign: "center",
              zindex: 0,
              width: "80vh",
              height: "50vh",
            }}
          />
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              left: "10%",
              // right: 0,
              margin: "auto",
              textAlign: "center",
              zindex: 0,
              width: "80vh",
              height: "50vh",
            }}
          ></canvas>
        </Grid>
        {/* <Grid container>
          <Typography>Canvas2</Typography>
        </Grid> */}
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ width: "50%" }}
      >
        <Grid item>
          <canvas
            ref={canvasRef2}
            style={{
              // position: "absolute",
              // left: 0,
              right: 0,
              margin: "auto",
              textAlign: "center",
              zindex: 0,
              width: "80vh",
              height: "50vh",
            }}
          ></canvas>
        </Grid>
        <Grid item>
          <Typography>Canvas4</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Handpose;
