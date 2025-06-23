let newDate = null; // allows reassignment

const handleDateChange = (e) => {
  newDate = new Date(e.target.value); // ✅ this is fine now
  console.log("newDate: ", newDate);

  const targetMilliseconds = newDate.getTime();
  console.log("targetMilliseconds:", targetMilliseconds);

  const currentTimeInMilliseconds = Date.now();
  console.log("currentTimeInMilliseconds: ", currentTimeInMilliseconds);

  const diffInSeconds = (targetMilliseconds - currentTimeInMilliseconds) / 1000;
  console.log("diffInSeconds:", diffInSeconds);
};
