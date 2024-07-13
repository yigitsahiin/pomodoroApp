import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
export const CustomTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
            {["Pomodoro", "short break", "long break"].map(tab => {
                return (
                    <Tab key={tab}  label={tab} />
                )
            })}
        </Tabs>
    )
}
