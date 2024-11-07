import { SyntheticEvent, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import tabsConfig from "../Configs/TabsConfig";
import { useNavigate, useParams } from "react-router-dom";

const TabsHeader = () => {
  const params = useParams();
  const navigate = useNavigate();

  const getTabIndex = (tab: string) => {
    if (!tab) {
      return 0;
    }
    return tabsConfig.findIndex((item) => item.label.toLowerCase() === tab);
  };

  const [value, setValue] = useState<number>(getTabIndex(params.tab || ""));

  const handleChange = (_e: SyntheticEvent, value: number) => {
    setValue(value);
  };

  const handleClick = (label: string) => {
    navigate(
      `/${label.toLowerCase() !== "overview" ? label.toLowerCase() : ""}`
    );
  };

  return (
    <div className="border-bottom text-white">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          "& .MuiTab-root": {
            color: "white", // Default color for inactive tabs
            textTransform: "none",
            "&.Mui-selected": {
              color: "#6ac5fe", // Color for the active tab
            },
          },
        }}
      >
        {tabsConfig.map((item) => (
          <Tab
            label={item.label}
            onClick={() => handleClick(item.label)}
            key={item.id}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default TabsHeader;
