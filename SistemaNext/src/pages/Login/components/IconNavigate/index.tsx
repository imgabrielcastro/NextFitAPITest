import Link from "@mui/material/Link";

interface IconNavigateProps {
    icon: any
    link: string
}

const IconLink = ({icon, link}: IconNavigateProps) => { 
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt="Icon" width="auto" height={52}/>
        </Link>
    )
}

export default IconLink