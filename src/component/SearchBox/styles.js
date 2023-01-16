const Styles = () => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    border: '1px solid #9E9E9E',
    padding: '15px 15px',
    width: '426px',
    borderRadius: '4px',
    background: '#FFF',
    '&.hasHint': {
      borderColor: '#212121',
      
    },
    '&.hasError': {
      borderColor: '#F44336',
    },
    '&.small': {
      padding: '11px 15px',
      width: '296px',
    },
    '& input': {
      padding: 0,
      border: 'none',
      height: '16px',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px',
      width: '100%',
      outline: 'none',
      margin: '0 9.24px',
      '&::placeholder': {
        color: '#9E9E9E',
        fontSize: '14px',
        fontWeight: 400,
      }
    },

    '& .search': {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      height: '14px',
      width: '14px',
    },
    '& .clear': {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      height: 16,
    },
  },
});

export default Styles;