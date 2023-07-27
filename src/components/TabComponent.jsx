import { useState } from "react";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import PropTypes from "prop-types";

function TabComponent() {
	const [value, setValue] = useState();
	const handleChange = () => {
		setValue();
	};
	return (
		<TabContext value={value}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<TabList onChange={handleChange} aria-label="lab API tabs example">
					<Tab label="Javascript" value="1" />
					<Tab label="Terraform" value="2" />
					<Tab label="React" value="3" />
					<Tab label="Vue" value="4" />
					<Tab label="Android" value="5" />
				</TabList>
			</Box>
			<TabPanel value="1">Item One</TabPanel>
			<TabPanel value="2">Item Two</TabPanel>
			<TabPanel value="3">Item Three</TabPanel>
			<TabPanel value="4">Item Three</TabPanel>
			<TabPanel value="5">Item Three</TabPanel>
		</TabContext>
	);
}

TabComponent.propTypes = {
	codeTab: PropTypes.array.isRequired,
};

export default TabComponent;
