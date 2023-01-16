const Styles = () => ({
  container: {
    '& .formControlLabel': {
      display: 'flex',
      marginBottom: '8px',
      justifyContent: 'space-between',  
      border: 'none',
      outline: 'none',
      '& .prefix': {
        display: 'flex',
        '& .subtitle-2': {
          fontSize: '14px',
          fontWeight: 700,
          lineHeight: '16px',
          color: '#212121',
        },
        '& .caption-2': {
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '16px',
          color: '#9E9E9E',
          marginLeft: '8px',
        },
        '& .prefixInfo': {
          marginLeft: '8px',
          height: '16px',
          width: '16px',
        }
      },
      '& .suffix': {
        display: 'flex',
        '& .subtitle-3': {
          fontSize: '12px',
          fontWeight: 700,
          lineHeight: '14px',
          marginLeft: '8px',
          color: '#DE1B1B',
        },
      }

    },
    '& .caption': {
      alignItems: 'start',
      display: 'flex',
      marginTop: '8px',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px',
    }
  },
  textWrapper: {
    border: '1px solid #E0E0E0',
    background: '#FFF',
    borderRadius: '4px',
    padding: '15px 15px',
    width:'367.35px',

    '& textarea': {
      border: 'none',
      width: '100%',
      padding: '0px',
      resize: 'none',
      height: '63.35px',
      color: '#212121',
      fontFamily:'Lato',
      outline: 'none',
      overflow: 'hidden',
      letterSpacing: '0.005em',
      '&::placeholder': {
        color: '#9E9E9E',
        fontSize: '14px',
        lineHeight: '16px',
        fontWeigth:400
      }
    },

    '&.primary': {
      borderColor: '#289F97',
      '& input': {
        '&::placeholder': {
          color: '#212121',
        }
      }
    },
    '&.error': {
      borderColor: '#DE1B1B',
      '& input': {
        '&::placeholder': {
          color: '#212121',
        }
      }
    },
    '&.error + label': {
      color:'#DE1B1B'
    },
    '&.success': {
      borderColor: '#74B816',
      '& input': {
        '&::placeholder': {
          color: '#212121',
        }
      }
    },
    '&.dark': {
      borderColor: '#212121',
      '& input': {
        '&::placeholder': {
          color: '#212121',
        }
      }
    },
    '&.light': {
      borderColor: '#E0E0E0'
    },
    '&.grey': {
      borderColor: '#EEEEEE',
      background: '#EEEEEE',
      cursor: 'not-allowed',
      '& textarea': {
        background: '#EEEEEE',
        cursor: 'not-allowed',
      },
      '& .buttons': {
        cursor: 'not-allowed',
        background: '#E0E0E0',
        '& button': {
          color: '#9E9E9E',
          cursor: 'not-allowed',
        }
      },
      '& .arrow': {
        cursor: 'not-allowed',
        '& svg': {
          color: '#9E9E9E',
        }
      }
    },
  }
})

export default Styles;