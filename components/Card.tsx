import React from 'react'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import SocialLink from './SocialLink'

const links = [
    {linkTitle: "Github", link: "https://github.com/"},
    {linkTitle: "Frontend Mentor", link: "https://github.com/"},
    {linkTitle: "LinkedIn", link: "https://github.com/"},
    {linkTitle: "Twitter", link: "https://github.com/"},
    {linkTitle: "Instagram", link: "https://github.com/"},
];

const Card = () => {
    // @ts-ignore
    return (
        <Box
            className="cardBackground"
            sx={{
                padding: '2rem',
                boarderRadius: '0.75rem',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }}>
            <Image
                src="/assets/images/avatar-jessica.jpeg"
                alt="profile image"
                width={88}
                height={88}
                style={{
                    borderRadius: '50%',
                    marginBottom: '1.5rem'
            }}
            />
            <Typography
                variant="h1"
                sx={{
                    fontSize: "2.25rem",
                    marginBottom: "0.25rem"
            }}>Jessica Randall</Typography>
            <Typography
                className="neon"
                variant="h2"
                sx={{
                    fontSize: "1.3125rem",
                    color: "#7d7d7d",
                    marginBottom: "1.5rem"
            }}>London, United
                Kingdom</Typography>
            <Typography sx={{
                fontSize: "1.3125rem",
                marginBottom: "1.5rem"
            }}>{"Front-end developer and avid reader"}
            </Typography>
            {links.map((link) => {
                return <SocialLink linkData={link} key={link.link}/>;
            })}
        </Box>
    );
};
export default Card;
