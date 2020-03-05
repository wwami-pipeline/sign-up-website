import React from "react";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  imgOverlayWrap: {
    display: "inline-block", /* <= shrinks container to image size */
    position: "relative",
    transition: "transform 150ms ease-in-out"
  },
  wwamiImage: {
    maxWidth: "100%"
  },
  alaska: {
    position: "absolute",
    top: 12,
    left: 0
  },
  seattle: {
    position: "absolute",
    top: 17,
    left: 268
  },
  spokane: {
    position: "absolute",
    top: 31,
    left: 414
  },
  idaho: {
    position: "absolute",
    top: 34,
    left: 496
  },
  montana: {
    position: "absolute",
    top: 16,
    left: 582
  },
  wyoming: {
    position: "absolute",
    top: 210,
    left: 685
  },
  wwamiImage_small: {
    maxWidth: "100%",
    width: "360px"
  },
  alaska_small: {
    position: "absolute",
    top: 3,
    left: 0
  },
  seattle_small: {
    position: "absolute",
    top: 6,
    left: 100
  },
  spokane_small: {
    position: "absolute",
    top: 12,
    left: 154 
  },
  idaho_small: {
    position: "absolute",
    top: 12,
    left: 186
  },
  montana_small: {
    position: "absolute",
    top: 5,
    left: 220
  },
  wyoming_small: {
    position: "absolute",
    top: 78,
    left: 259
  },
});

class HomeMap extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { classes } = this.props;
    if (this.state.width < 971) {
      return (
        <div className={classes.imgOverlayWrap}>
          <img src='/images/wwami.png' className={classes.wwamiImage_small} alt="WWAMI map"/>
          <svg className={classes.alaska_small} > 
            <g transform="translate(0, 125) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
              <path d="M461 1206 c-14 -8 -31 -12 -38 -9 -7 3 -13 0 -13 -6 0 -6 -17 -11
                -38 -11 -31 0 -43 -6 -60 -30 -15 -19 -34 -31 -59 -36 -40 -7 -73 -29 -73 -49
                0 -6 11 -22 25 -35 15 -14 25 -35 25 -52 0 -23 5 -30 29 -34 31 -7 50 -49 25
                -58 -26 -10 -54 6 -54 32 0 24 -2 24 -47 18 -26 -3 -52 -11 -57 -16 -6 -6 -18
                -10 -28 -10 -26 0 -22 -25 8 -45 24 -15 24 -17 8 -29 -23 -18 -12 -44 23 -51
                15 -3 41 -13 57 -21 26 -13 31 -13 46 1 9 8 23 15 31 15 11 -1 11 -3 -2 -13
                -8 -7 -15 -25 -15 -42 1 -27 -3 -30 -39 -36 -23 -4 -47 -2 -58 5 -15 9 -22 7
                -38 -14 -11 -14 -34 -40 -50 -57 -17 -18 -27 -38 -24 -44 4 -5 7 -27 7 -47 -1
                -20 6 -52 15 -70 13 -29 19 -33 44 -30 26 4 29 2 29 -23 0 -15 -4 -39 -9 -52
                -8 -20 -6 -27 6 -31 8 -4 21 -2 28 4 17 14 65 2 65 -16 0 -9 11 -12 34 -10
                l34 2 -16 -43 c-9 -24 -24 -46 -34 -49 -10 -3 -18 -12 -18 -20 0 -8 -4 -12
                -10 -9 -15 9 -80 -25 -80 -43 0 -12 -3 -13 -12 -4 -18 18 -38 15 -75 -10 -63
                -44 -47 -49 110 -35 9 1 17 5 17 9 0 4 9 8 20 8 11 0 25 9 32 20 7 11 20 20
                28 20 24 0 70 24 70 36 0 6 17 19 39 28 21 10 54 32 72 48 32 30 32 31 13 45
                -19 14 -18 15 5 31 14 10 30 23 35 31 32 42 89 91 99 84 7 -4 -1 -12 -21 -20
                -18 -7 -30 -18 -26 -24 3 -6 -1 -18 -9 -27 -8 -9 -17 -29 -21 -44 -6 -25 -4
                -28 21 -28 16 0 43 9 61 20 18 11 43 22 55 24 21 3 26 19 16 56 -6 21 41 13
                64 -11 10 -10 26 -19 35 -19 10 0 23 -5 30 -12 11 -11 97 -28 154 -30 16 -1
                24 -6 22 -13 -3 -7 10 -18 28 -26 43 -17 117 -71 118 -85 0 -6 9 -22 21 -35
                11 -13 27 -36 35 -52 27 -51 46 -27 22 30 -6 15 -13 37 -15 48 -6 36 -12 43
                -35 47 l-23 3 23 7 c18 5 25 0 38 -24 12 -23 18 -27 29 -18 11 9 16 3 26 -31
                8 -25 20 -44 31 -47 10 -2 18 -11 18 -18 0 -8 4 -14 10 -14 5 0 7 -7 4 -15 -4
                -10 0 -15 11 -15 12 0 15 -5 9 -22 -6 -21 -6 -21 11 -4 16 16 19 16 27 2 17
                -30 38 -19 38 20 0 49 -14 70 -56 84 -25 9 -44 26 -64 56 -31 49 -128 144
                -147 144 -7 0 -20 -11 -29 -25 -17 -25 -44 -34 -44 -14 0 23 -65 73 -95 74
                l-30 0 -7 95 c-5 52 -14 205 -22 339 -14 236 -15 246 -38 263 -13 10 -36 18
                -53 18 -48 -1 -99 11 -117 27 -11 10 -29 14 -49 11 -22 -4 -34 0 -42 14 -7 10
                -19 18 -27 18 -8 0 -26 9 -40 20 -29 23 -46 24 -79 6z"/>
              </a>
            </g>
          </svg>
          <svg className={classes.seattle_small}>
            <g transform="translate(0, 64) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
              <path d="M254 616 c-3 -8 -1 -24 6 -35 7 -14 7 -21 0 -21 -5 0 -10 -10 -10
                -22 0 -42 -15 -52 -67 -49 -33 2 -65 13 -103 37 -31 19 -58 34 -62 34 -14 0
                -1 -106 16 -139 14 -25 19 -63 21 -144 3 -117 7 -127 57 -127 15 0 30 -4 33
                -10 3 -5 15 -10 25 -10 23 0 40 -28 40 -68 0 -38 46 -61 86 -43 30 13 91 15
                98 2 6 -9 103 -5 154 5 17 3 21 9 17 27 -3 12 1 121 10 241 8 121 15 230 15
                243 0 15 8 27 22 32 17 6 9 9 -38 14 -91 10 -276 36 -296 43 -11 3 -20 -1 -24
                -10z"/>
              </a>
            </g>
          </svg>
          <svg className={classes.spokane_small}>
            <g transform="translate(0, 55) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
              <path d="M43 533 c-1 -10 -9 -128 -18 -263 -9 -135 -18 -250 -20 -257 -4 -13
                57 -7 89 9 11 6 68 7 142 3 l124 -7 0 255 0 255 -122 6 c-68 4 -139 9 -158 12
                -29 4 -36 2 -37 -13z"/>
              </a>
            </g>
          </svg>
          <svg className={classes.idaho_small}>
            <g transform="translate(0, 131) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
              <path d="M50 1011 c0 -269 0 -270 23 -288 36 -29 37 -37 12 -88 -14 -27 -25
                -54 -25 -61 0 -6 -11 -32 -25 -55 -30 -53 -31 -70 -6 -86 17 -11 18 -17 10
                -45 -5 -18 -9 -108 -9 -199 l0 -166 152 -6 c83 -4 252 -7 376 -7 l224 0 -5 22
                c-3 13 -9 126 -13 251 l-7 228 -22 -21 c-12 -11 -30 -20 -41 -20 -10 0 -25 -4
                -33 -9 -9 -6 -24 -5 -39 0 -18 7 -27 6 -36 -5 -6 -8 -20 -16 -31 -18 -16 -2
                -21 3 -23 30 -2 22 -8 32 -21 32 -22 0 -41 19 -41 42 0 10 -12 41 -26 68 -25
                48 -26 49 -49 34 -48 -31 -70 16 -55 114 6 37 13 75 16 84 4 13 -5 22 -35 34
                -30 12 -43 24 -50 47 -6 18 -27 45 -46 60 -22 18 -35 36 -35 52 0 13 -8 31
                -17 41 -15 14 -18 35 -18 111 l0 93 -52 0 -53 0 0 -269z"/>
              </a>
            </g>
          </svg>
          <svg className={classes.montana_small}>
            <g transform="translate(0, 96) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
              <path d="M1120 937 c-3 -3 -68 -10 -145 -16 -77 -6 -180 -16 -230 -21 -88 -10
                -627 -40 -705 -40 l-40 0 0 -204 c0 -131 4 -207 10 -211 6 -4 8 -14 6 -23 -12
                -36 -16 -174 -6 -193 14 -24 24 -24 49 2 l20 21 30 -61 c17 -33 31 -71 31 -85
                0 -18 6 -25 23 -28 14 -2 23 -11 25 -26 4 -30 28 -39 50 -19 12 10 33 13 70
                11 42 -3 57 1 73 17 11 11 25 17 30 13 8 -4 9 6 4 34 -3 22 -3 42 2 45 5 3 58
                8 118 12 61 3 137 8 170 10 33 3 112 7 175 10 63 3 160 8 215 11 55 3 122 6
                148 6 l49 1 -6 56 c-37 341 -66 613 -68 641 -3 34 -4 35 -48 38 -25 2 -48 1
                -50 -1z"/>
              </a>
            </g>
          </svg>
          <svg className={classes.wyoming_small}>
            <g transform="translate(0, 83) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
              <path d="M888 820 c-2 -6 -59 -14 -143 -20 -132 -9 -684 -40 -714 -40 -11 0
                -12 -20 -7 -102 3 -57 8 -182 12 -279 6 -168 6 -177 -12 -182 -16 -4 -16 -5
                -2 -6 15 -1 18 -14 20 -88 l3 -88 50 2 c28 2 147 7 265 13 118 5 307 17 418
                27 l204 17 -6 65 c-4 36 -11 100 -16 141 -6 41 -21 180 -35 309 -14 129 -27
                236 -29 238 -2 2 -6 -1 -8 -7z"/>
              </a>
            </g>
          </svg>
        </div>    
      );
    } else {
      return (
        <div className={classes.imgOverlayWrap}>
          <img src='/images/wwami.png' className={classes.wwamiImage} alt="WWAMI map"/>
          <svg width="385px" height="319px" className={classes.alaska} > 
            <g transform="translate(0, 319) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
              <path d="M1277 3107 c-43 -22 -72 -31 -108 -31 -41 0 -49 -3 -49 -19 0 -23
                -18 -57 -30 -57 -6 0 -10 10 -10 21 0 19 -4 21 -31 15 -17 -3 -53 -6 -79 -6
                -45 0 -48 -1 -85 -55 -60 -88 -93 -112 -167 -121 -34 -4 -78 -6 -95 -5 -18 1
                -33 -2 -33 -7 0 -5 -14 -23 -30 -40 -21 -22 -30 -42 -30 -65 0 -38 10 -53 63
                -92 51 -38 67 -72 67 -144 0 -33 5 -63 10 -66 6 -4 35 -9 65 -12 62 -7 72 -14
                77 -62 3 -30 8 -36 36 -43 35 -9 35 -28 0 -28 -11 0 -22 -8 -25 -20 -3 -12
                -14 -20 -27 -20 -12 0 -27 -5 -34 -12 -9 -9 -18 -9 -37 0 -14 7 -34 12 -44 12
                -38 0 -56 25 -53 78 2 59 -7 64 -95 55 -42 -5 -57 -10 -60 -24 -4 -15 -9 -16
                -23 -9 -29 16 -62 12 -85 -10 -12 -11 -42 -24 -66 -28 -68 -12 -62 -32 31
                -101 74 -55 79 -61 60 -71 -15 -8 -20 -8 -20 2 0 6 -13 -1 -30 -17 -49 -47
                -38 -81 39 -120 21 -10 45 -15 63 -11 19 4 38 0 54 -10 13 -9 35 -14 49 -12
                20 4 25 0 30 -24 10 -43 33 -47 64 -10 15 18 44 36 69 43 38 11 45 10 60 -5
                16 -16 16 -18 -4 -34 -12 -9 -30 -22 -40 -28 -16 -10 -17 -15 -6 -33 6 -11 12
                -43 12 -71 0 -45 -3 -51 -32 -66 -20 -10 -45 -14 -69 -11 -28 4 -51 -2 -96
                -25 l-58 -29 -5 28 c-4 19 -14 31 -33 37 -44 16 -77 -2 -106 -59 -14 -27 -30
                -52 -34 -54 -26 -11 -76 -65 -79 -84 -2 -16 -11 -23 -30 -25 -34 -4 -45 -37
                -29 -83 6 -18 11 -42 11 -54 0 -13 7 -25 15 -29 20 -7 19 -40 -1 -60 -21 -22
                -9 -99 22 -136 13 -15 24 -36 24 -47 0 -30 21 -43 71 -43 65 0 77 6 100 52 25
                48 31 46 19 -7 -5 -22 -10 -60 -10 -84 0 -64 -23 -211 -32 -211 -4 0 -8 -6 -8
                -14 0 -25 83 -36 97 -12 22 36 88 47 96 16 4 -14 14 -20 34 -20 39 0 51 -10
                55 -44 3 -29 28 -50 28 -24 1 12 44 68 53 68 3 0 4 -15 3 -32 -1 -29 2 -33 24
                -31 57 5 106 16 119 27 10 8 10 4 -2 -14 -9 -14 -30 -34 -47 -45 -34 -23 -36
                -31 -13 -57 15 -17 15 -18 -5 -18 -12 0 -22 -5 -22 -11 0 -6 -6 -25 -14 -42
                -8 -18 -16 -41 -18 -52 -2 -11 -12 -21 -23 -24 -11 -2 -37 -17 -57 -33 -29
                -22 -38 -37 -38 -59 0 -27 -2 -29 -21 -18 -53 28 -219 -60 -219 -117 0 -17 -5
                -24 -20 -24 -11 0 -20 6 -20 13 0 15 -41 37 -69 37 -32 0 -95 -31 -134 -66
                -20 -19 -46 -34 -57 -34 -25 0 -27 -38 -2 -46 9 -3 28 -11 41 -17 18 -9 25 -8
                35 4 6 9 25 20 41 26 17 5 36 20 42 34 l13 24 0 -29 0 -29 72 7 c41 4 79 13
                89 22 14 13 18 13 29 -1 17 -20 33 -19 48 5 7 11 23 20 36 20 40 0 96 28 96
                49 0 25 32 51 63 51 14 0 29 5 32 10 3 6 19 10 35 10 15 0 30 6 33 14 3 7 21
                16 39 20 27 5 36 12 43 39 9 27 23 39 95 76 47 24 101 51 120 61 19 10 46 30
                60 45 14 15 37 33 52 41 30 16 47 67 28 89 -6 7 -25 17 -41 20 -16 4 -29 10
                -29 15 0 12 81 80 96 80 8 0 18 9 24 19 5 11 20 21 32 23 19 2 23 9 23 35 0
                20 5 33 12 33 7 0 15 10 18 23 4 13 19 31 36 41 16 9 33 25 38 34 5 10 35 35
                65 56 50 34 60 38 81 28 33 -15 31 -38 -4 -57 -16 -8 -31 -20 -33 -26 -2 -7
                -20 -12 -38 -13 -34 -1 -35 -2 -32 -36 2 -29 -5 -44 -33 -77 -47 -56 -47 -81
                3 -85 l37 -3 -47 -23 c-70 -32 -66 -57 9 -65 51 -5 59 -4 79 19 13 13 30 24
                39 24 27 0 75 33 75 52 0 25 13 29 48 16 24 -10 34 -9 48 2 9 8 27 13 39 12
                15 -2 25 5 33 23 19 42 15 58 -12 53 -21 -4 -23 -3 -13 13 9 15 6 22 -16 43
                -49 45 -13 61 91 40 19 -4 38 -2 46 5 12 10 17 8 26 -11 7 -13 22 -31 34 -40
                18 -15 19 -19 6 -28 -16 -10 -9 -13 26 -11 11 1 27 -5 34 -13 18 -23 49 -19
                59 7 9 22 9 22 21 -5 7 -15 31 -40 54 -55 39 -26 47 -28 157 -28 112 0 117 -1
                137 -25 17 -21 28 -25 73 -23 42 1 57 6 68 22 7 12 20 21 27 21 17 0 17 -8 -1
                -40 -31 -53 -10 -74 112 -114 34 -11 54 -24 58 -37 4 -11 19 -25 33 -32 15 -6
                56 -32 92 -59 55 -40 68 -55 83 -99 12 -33 36 -69 65 -98 46 -45 112 -154 112
                -183 0 -7 9 -14 20 -15 16 -1 20 4 20 28 0 43 -39 157 -58 172 -12 8 -18 30
                -20 75 -3 82 -13 100 -54 101 -60 1 -93 16 -90 40 1 13 -5 32 -13 44 -21 30
                -19 46 5 40 12 -3 27 -18 36 -34 20 -40 54 -40 54 1 0 17 3 30 8 29 20 -1 83
                -94 88 -130 6 -36 9 -40 33 -37 22 2 26 8 24 31 -1 15 2 27 6 27 18 0 60 -58
                66 -93 4 -20 16 -48 26 -61 13 -17 17 -33 13 -58 -7 -41 6 -55 56 -60 31 -3
                35 -7 38 -33 5 -39 19 -55 49 -55 20 0 22 -3 13 -19 -19 -36 -12 -51 21 -51
                22 0 32 -5 36 -20 4 -16 11 -19 33 -15 25 4 32 0 51 -35 16 -28 29 -40 45 -40
                51 0 51 130 1 230 -20 40 -28 46 -87 65 -36 12 -75 26 -86 33 -36 19 -97 95
                -138 170 -32 59 -54 84 -128 142 -49 40 -112 101 -139 136 -41 52 -56 64 -79
                64 -25 0 -34 -9 -62 -56 -64 -109 -115 -119 -156 -30 -16 33 -33 51 -62 66
                -25 13 -49 37 -66 66 -25 43 -29 45 -58 38 -108 -27 -156 0 -156 90 0 28 -23
                415 -50 859 -28 445 -50 820 -50 833 0 18 -16 36 -67 74 -70 51 -101 60 -147
                39 -20 -10 -34 -9 -71 5 -24 10 -79 20 -121 23 -65 5 -78 9 -91 30 -32 48 -98
                65 -173 43 -27 -8 -36 -7 -43 5 -4 8 -15 15 -23 15 -8 0 -22 16 -30 35 -16 38
                -50 53 -82 36 -17 -9 -23 -6 -41 24 -22 38 -45 44 -72 19 -12 -10 -25 -14 -36
                -9 -16 6 -16 8 5 18 31 14 27 33 -9 46 -40 14 -33 15 -102 -22z"/>
                <path d="M1270 580 c-19 -17 -42 -49 -52 -73 -9 -23 -17 -36 -17 -29 -1 21
                -41 14 -41 -8 0 -14 -7 -20 -23 -20 -13 0 -36 -14 -52 -30 -25 -26 -28 -33
                -17 -50 7 -11 12 -31 12 -45 0 -32 31 -34 54 -2 l17 22 -6 -28 c-6 -32 19 -40
                28 -8 3 13 11 17 28 14 19 -3 38 9 87 54 69 64 79 93 33 93 -24 0 -63 25 -50
                33 2 1 18 11 34 23 17 11 38 23 48 27 24 9 21 22 -8 41 -32 21 -34 20 -75 -14z"/>
              </a>
            </g>
          </svg>
          <svg width="159px" height="167px" className={classes.seattle}>
            <g transform="translate(0, 167) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
                <path d="M677 1624 c-22 -22 -1 -95 54 -181 18 -30 1 -44 -18 -15 -9 12 -24
                  22 -36 22 -17 0 -19 -5 -14 -33 3 -19 -1 -43 -9 -57 -7 -14 -13 -40 -14 -57 0
                  -25 -4 -33 -18 -33 -9 0 -25 -12 -34 -27 l-16 -28 -7 27 c-7 26 -7 26 -132 33
                  l-126 8 -124 83 c-69 46 -132 84 -140 84 -13 0 -14 -7 -9 -37 9 -44 9 -44 0
                  -104 -8 -55 15 -143 51 -198 17 -25 31 -73 46 -160 19 -107 20 -131 10 -172
                  -9 -35 -10 -57 -2 -81 6 -18 13 -46 16 -62 5 -24 10 -27 31 -23 25 4 25 4 18
                  -57 -8 -77 -14 -84 -14 -18 0 44 -3 52 -19 52 -16 0 -19 -10 -24 -72 -5 -70
                  -4 -74 20 -95 30 -25 94 -43 152 -43 30 0 44 -5 53 -20 9 -14 24 -20 51 -20
                  55 0 75 -15 102 -72 20 -43 23 -61 18 -118 l-6 -67 54 -26 c62 -32 143 -36
                  191 -11 18 9 68 18 122 21 l92 6 36 -32 c40 -34 54 -38 83 -17 14 9 65 15 160
                  18 77 3 152 10 166 16 24 10 26 14 22 59 -4 53 91 1349 101 1373 5 13 -26 20
                  -201 43 -241 33 -604 85 -648 93 -17 3 -34 2 -38 -2z m52 -335 c6 -18 11 -39
                  11 -47 0 -9 7 -23 16 -33 15 -16 14 -21 -6 -58 -19 -33 -22 -49 -17 -92 4 -29
                  11 -56 18 -59 6 -5 2 -9 -11 -13 -20 -5 -21 -10 -15 -46 7 -42 -7 -81 -29 -81
                  -7 0 -25 -9 -39 -20 -14 -11 -39 -20 -55 -20 -22 0 -32 -6 -37 -20 -3 -11 -13
                  -20 -21 -20 -11 0 -7 10 13 35 20 25 36 35 56 35 16 0 41 9 57 20 23 17 28 28
                  33 82 3 34 3 84 0 110 -5 40 -8 45 -19 33 -8 -7 -14 -20 -14 -28 0 -25 -37
                  -63 -50 -51 -8 8 -2 21 20 49 33 42 36 58 15 95 -8 14 -14 43 -14 65 l1 40 21
                  -47 c36 -79 70 -57 42 26 -16 47 -15 76 4 76 5 0 14 -14 20 -31z"/>
              </a>
            </g>
          </svg>
          <svg width="97px" height="146px" className={classes.spokane}>
            <g transform="translate(0, 146) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
              <path d="M101 1412 c-10 -7 -24 -149 -57 -598 -46 -612 -52 -812 -24 -806 8 2
                44 8 80 14 36 6 79 16 95 23 72 31 103 34 273 20 92 -7 228 -17 303 -20 l137
                -8 7 41 c4 25 2 54 -6 75 -10 27 -10 126 0 473 6 242 14 507 18 590 l6 151
                -134 7 c-149 8 -531 33 -624 42 -33 3 -66 1 -74 -4z"/>
              </a>
            </g>
          </svg>
          <svg width="206px" height="345px" className={classes.idaho}>
            <g transform="translate(0, 345) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
              <path d="M104 3212 c0 -103 -3 -374 -7 -602 -4 -228 -7 -422 -7 -430 1 -8 2
                -28 2 -43 1 -20 3 -25 9 -15 5 8 9 -8 9 -42 0 -71 32 -136 82 -170 52 -35 90
                -89 83 -118 -3 -12 -22 -48 -42 -79 -46 -73 -93 -193 -93 -241 0 -28 -8 -46
                -33 -74 -37 -42 -87 -160 -87 -207 0 -24 4 -31 20 -31 10 0 31 -12 45 -27 27
                -29 27 -32 5 -123 -13 -55 -35 -939 -23 -950 4 -5 422 -13 928 -20 506 -6 946
                -12 977 -13 l58 -2 -6 100 c-3 55 -14 343 -25 640 -12 297 -21 547 -22 557 -1
                14 -5 14 -32 -5 -16 -12 -32 -26 -34 -31 -13 -32 -56 -56 -102 -56 -27 0 -67
                -7 -90 -16 -39 -16 -43 -16 -93 5 -28 11 -55 21 -58 21 -4 0 -25 -18 -46 -39
                -82 -83 -136 -65 -143 50 -4 65 -6 67 -62 74 -29 4 -58 12 -64 17 -8 6 -13 33
                -13 62 0 44 -11 74 -75 204 -41 83 -79 152 -86 152 -6 0 -30 -20 -53 -45 -24
                -25 -49 -45 -58 -45 -34 0 -68 41 -88 107 -23 76 -25 106 -7 122 10 8 16 51
                20 147 5 109 10 145 27 180 12 24 19 48 16 53 -4 5 -38 18 -77 28 -83 21 -121
                53 -143 121 -23 68 -44 95 -116 150 -36 28 -80 66 -99 86 l-34 35 18 40 18 40
                -45 53 c-25 29 -51 64 -59 78 -17 31 -26 388 -11 442 l10 36 -141 1 c-77 1
                -143 4 -146 5 -3 2 -6 -80 -7 -182z"/>
              </a>
            </g>
          </svg>
          <svg width="346" height="249px" className={classes.montana}>
            <g transform="translate(0, 249) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
              <path d="M3065 2444 c-1070 -112 -2288 -194 -2892 -194 l-173 0 0 -543 0 -544
                40 -12 40 -12 -22 -42 c-18 -35 -22 -64 -26 -179 -3 -100 -8 -141 -18 -149
                -18 -15 -18 -68 2 -134 33 -117 88 -137 160 -60 31 34 44 42 51 33 6 -7 41
                -75 78 -152 54 -109 69 -150 73 -195 5 -66 19 -81 79 -81 51 0 63 -17 63 -85
                0 -25 5 -55 10 -66 21 -38 110 -16 144 35 19 29 48 33 86 11 32 -18 69 -19
                113 0 19 8 37 12 40 9 3 -3 25 -3 49 1 35 5 57 18 101 59 l57 53 -2 87 c0 47
                1 88 3 91 5 4 164 14 634 40 50 3 131 7 180 10 163 10 259 15 355 20 52 3 138
                8 190 11 52 3 102 6 110 6 8 0 168 8 355 19 187 10 372 19 410 21 l70 3 -3 40
                c-5 67 -192 1848 -198 1883 -3 17 -10 31 -17 31 -7 -1 -70 -8 -142 -15z"/>
            </a>
            </g>
          </svg>
          <svg width="270px" height="218px" className={classes.wyoming}>
            <g transform="translate(0, 218) scale(0.1, -0.1)" fill="transparent" stroke="none">
              <a href="/SHIFA" target="_self" cursor="pointer">
              <path d="M2194 2131 c-2 -2 -43 -5 -91 -7 -272 -10 -431 -18 -1170 -59 -446
                -25 -820 -45 -831 -45 -25 0 -27 89 17 -1070 23 -593 37 -879 45 -886 12 -12
                60 -10 686 21 832 42 1736 112 1751 136 3 6 4 20 2 32 -2 12 -48 436 -103 942
                -56 506 -102 925 -104 930 -3 9 -193 15 -202 6z"/>
              </a>
            </g>
          </svg>
        </div>    
      );
    }
  };
}

export default withStyles(styles)(HomeMap);
