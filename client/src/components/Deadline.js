import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const Deadline = (props) => {
	// inits the date object for form.

	const [selectedDate, handleDateChange] = useState(new Date());
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<DateTimePicker
				disablePast
				value={selectedDate}
				onChange={handleDateChange}
				onClose={props.setDate(selectedDate)}
			/>
		</MuiPickersUtilsProvider>
	);
};

export default Deadline;
