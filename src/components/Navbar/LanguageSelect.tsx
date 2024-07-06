import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { RuIcon } from "../../assets/icons/ru";
import { ArrowIcon } from "../../assets/icons/arrow";

const languages = [
  { name: "RU", icon: <RuIcon /> },
  { name: "UZ", icon: <RuIcon /> },
  { name: "KZ", icon: <RuIcon /> },
];
const LanguageSelect: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("RU");

  const handleChange = (val: string) => {
    setSelectedLanguage(val);
  };

  return (
    <FormControl>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={selectedLanguage}
        onChange={(e) => handleChange(e.target.value)}
        displayEmpty
        sx={{
          padding: 0,
          "&:focus": { backgroundColor: "transparent" },
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& #language-select": { paddingRight: '24px', paddingTop: 0, paddingBottom: 0 },
        }}
        IconComponent={ArrowIcon}
      >
        {languages.map((language, index) => (
          <MenuItem
            key={index}
            value={language.name}
          >
            <Box
              display="flex"
              gap="5px"
              alignItems="center"
              color="#06082C"
              fontSize="14px"
              fontWeight={500}
              padding={0}
            >
              {language.icon}
              {language.name}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
