import { Link } from "@mui/material";

interface ITextLoginProps {
  label: string;
  link: string;
}

const TextLogin = ({ label, link }: ITextLoginProps) => {
  return (
    <Link
      variant="body2"
      color="primary"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        textDecoration: "underline",
        cursor: "pointer",
        "&:hover": {
          opacity: 0.8,
        },
      }}
    >
      {label}
    </Link>
  );
};

export default TextLogin;
