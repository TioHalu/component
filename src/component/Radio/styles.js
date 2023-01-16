const Styles =() => ({

  wrapper: {
    display: 'flex',
    alignItems: 'center',
    width:'max-content',
    '&.disabled': {
      cursor: 'not-allowed',
    },
    '& .radioInput': {
      display: 'none'
    },

    '& .radioInput:checked + span': {
      border: '2px solid #17827B',
    },
    '& .radioInput:disabled + span': {
      border: '2px solid #9E9E9E',
      '&::before': {
        backgroundColor: '#E0E0E0',
      }
    },

    '& .radioInput:checked + span:after': {
      opacity: 1
    },

    '& .customRadio': {
      left: '-8px',
      top: '6px',
      width: '16px',
      height: '16px',
      border: '1px solid #9a9a9a',
      borderRadius: '50%',
      display: 'inline-block',
      position: 'sticky',
    },

    '& .customRadio.disabled::after': {
      background: '#9E9E9E',
    },
    '& .customRadio::after': {
      content: '" "',
      width: '12px',
      height: '12px',
      background: '#17827B',
      position: 'absolute',
      borderRadius: '50%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 0,
      transition: 'opacity 0.2s',
    },
    '& .label': {
      color: "#212121",
      fontSize: 14,
      marginLeft: 8,
      fontWeight: 400,
    }
  }
})

export default Styles;