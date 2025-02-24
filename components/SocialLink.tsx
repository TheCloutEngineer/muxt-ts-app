import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import  Link  from "next/link";

interface LinkProps {
   linkData: { linkTitle: string;
    link: string };
}

const socialLink = ({linkData} : LinkProps) => {
    return (
        <Box className="linkBackground" sx={{
            padding: "0.75rem 5.625rem",
            width: "14rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.75rem",
            margin: "0.5rem 0"
        }}>
            <Link href={linkData.link} target="_blank" className="link">{linkData.linkTitle}</Link>
        </Box>
    );
}

export default socialLink;