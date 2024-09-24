export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();

	return `${day}-${month}-${year}`;
};

export const formatMonthYear = (dateString: string) => {
	const date = new Date(dateString);
	return new Intl.DateTimeFormat("id-ID", {
		year: "numeric",
		month: "long", // This will display the full month name
	}).format(date);
};
