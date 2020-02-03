// basic
const white = "#ffffff";
const transparent = "transparent";

// greys
const ligthGrey_30 = "rgba(164, 164, 164, 0.3)";
const ligthGrey_50 = "rgba(164, 164, 164, 0.5)";
const baseGrey = "#a8a6a6";

// blues
const lightBlue_30 = "rgba(199, 203, 255, 0.3)";
const lightBlue_50 = "rgba(199, 203, 255, 0.5)";
const lightBlue = "#c7cbff";
const baseBlue = "#2569c0";

// reds
const baseRed = "#c02549";

// greens
const baseGreen = "#68c025";

export default {
  text: {
    primary: baseGrey,
    highlight: baseBlue
  },
  button: {
    normal: {
      text: white,
      background: baseBlue,
      hover: {
        text: lightBlue,
        boxShadowInset: lightBlue_30,
        boxShadowOutset: lightBlue_50
      },
      disabled: {
        background: white,
        text: baseBlue
      }
    },
    transparent: {
      text: baseBlue,
      background: transparent,
      hover: {
        text: baseGreen
      },
      disabled: {
        text: baseGrey
      }
    },
    onMessagePop: {
      text: baseBlue,
      background: white,
      hover: {
        text: white,
        background: lightBlue_50
      },
      disabled: {
        background: white,
        text: baseBlue
      }
    }
  },
  formLabel: {
    background: white,
    required: baseRed
  },
  formArea: {
    text: {
      highlight: baseBlue,
      error: baseRed
    },
    background: {
      highlight: baseBlue,
      error: baseRed
    }
  },
  textField: {
    border: ligthGrey_50
  },
  errorMessage: {
    background: {
      initial: baseBlue,
      final: baseRed
    },
    text: white
  },
  optionGroup: {
    background: ligthGrey_30,
    border: ligthGrey_50,
    checked: {
      text: white,
      background: baseBlue
    },
    hover: {
      text: white,
      background: baseGreen
    }
  },
  messagePop: {
    screenbackground: ligthGrey_50,
    feedback: {
      text: white,
      background: baseBlue
    }
  }
};
