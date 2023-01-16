const Styles = () => ({
  container: {
    '& .formControlLabel': {
      display: 'flex',
      marginBottom: '8px',
      justifyContent: 'space-between',  
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

    }
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #E0E0E0',
    padding: '15px 15px',
    width: '368px',
    borderRadius: '4px',
    background: '#FFF',
    alignItems: 'center',
    '& input': {
      padding: 0,
      border: 'none',
      height: '16px',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px',
      width: '100%',
      outline: 'none',
      '&::placeholder': {
        color: '#9E9E9E',
        fontSize: '14px',
        fontWeight: 400,
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
      '& input': {
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

    '&.submit': {
      padding: '5px 7px 5px 15px',
      width:'376px',
    },
    '& .arrow': {
      display: 'flex',
    },
    '& .buttons': {
      cursor: 'pointer',
      padding: '10px 20px',
      background: '#17827B',
      display: 'flex',
      borderRadius: '4px',
      marginLeft: '10px',
      '& button': {
        border: 'none',
        cursor: 'pointer',
        background: 'none',
        color: '#FFF',
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '16px',
        padding: 0,
      }
    },

  },
})

export default Styles;