import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "./datepicker.scss";

const MonthPicker = () => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 1);
  const [startDate, setStartDate] = useState(currentDate);
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMM/yyyy"
        showMonthYearPicker
      />
    );
  };

export default MonthPicker;

