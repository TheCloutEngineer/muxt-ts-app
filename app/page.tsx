import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Card from '@/components/Card'

const Home = () => {
    return (
        <Box
            className="container"
            sx={{
                backgroundColor: '#141414',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Card />
        </Box>
    )
}

export default Home
