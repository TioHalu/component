const Styles = () => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: 'max-content',
    '& input': {
      display: 'none',
    },
    '&.disabled': {
      cursor: 'not-allowed',
    },
    '& .checkmark': {
      width: 18,
      height: 18,
      borderRadius: 2,
      border: '1px solid #9E9E9E',
      display: 'inline-block',
      position: 'relative',
      '&.isChecked': {
        borderColor: '#17827B',
      },
      '&.disabled': {
        backgroundColor: '#9E9E9E',
        borderColor: '#FFF',
      },
    },
    '& .label': {
      color: "#212121",
      fontSize: 14,
      marginLeft: 8,
      fontWeight: 400,
    }
  },
  
  

})

export default Styles;