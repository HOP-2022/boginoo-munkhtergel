import React from 'react'

export const Header = () => {
    const styles ={
        body:{
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'center',
            flexDirection:'row',
            height:'10vh',
            width:'100vw',
            backgroundColor:'white',
        },
        text:{
            fontFamily: 'Ubuntu',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '23px',
            textTransform: 'uppercase',
            color: '#02B589',
            marginRight:'3vw',
            
        },
        button:{
            width: '183px',
            height: '44px',
            background: '#02B589',
            borderRadius: '100px',
            color:'white',
            marginRight:'5vw',
        
        }

    }
    
  return (
    <div style={styles.body}>
        <p style={styles.text}>Хэрхэн ажилладаж вэ?</p>
        <button style={styles.button}>Нэвтрэх</button>
    </div>
  )
}
