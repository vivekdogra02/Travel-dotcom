import { EmailOutlined, LocationCity, Phone, Place } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useGetIdentity } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";
import { AgentCardProp, InfoBarProps } from "interfaces/agent";
import { MyProfile } from "pages";

const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack direction="row" flex={1} minWidth={{ xs: "100%", sm: 300 }} gap={1.5}>
    {icon}
    <Typography fontSize={14} fontWeight={500} color="#808191">
      {name}
    </Typography>
  </Stack>
);

const AgentCard = ({
  id,
  avatar,
  email,
  name,
  noOfProperties,
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();
  const generateLink = () => {
    if (currentUser.email === email) return "/my-profile";
    else return `/agents/show/${id}`;
  };
  return (
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        padding: "20px",
        gap: "20px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
        },
      }}
    >
      <img
        src={avatar}
        alt="user"
        width={90}
        height={90}
        style={{
          borderRadius: 8,
          objectFit: "cover",
        }}
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
          <Typography fontSize={22} fontWeight={500} color="#11142d">
            {name}
          </Typography>
          <Typography fontSize={14} fontWeight={400} color="#808191">
            Real State Agent
          </Typography>
        </Stack>
        <Stack
          gap={2}
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
        >
          <InfoBar
            icon={<EmailOutlined sx={{ color: "#808191" }} />}
            name={email}
          />
          <InfoBar icon={<Place sx={{ color: "#808191" }} />} name="London" />
          <InfoBar
            icon={<Phone sx={{ color: "#808191" }} />}
            name="999-999-999"
          />
          <InfoBar
            icon={<LocationCity sx={{ color: "#808191" }} />}
            name={`${noOfProperties} Properties`}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
