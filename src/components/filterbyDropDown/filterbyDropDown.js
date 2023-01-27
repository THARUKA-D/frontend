import React from "react";

const FilterByDropDown = (props) => {
	const alphabetOrderSort = () => {
		const sortedUserArray = props.users.sort(function (a, b) {
			if (a.FirstName.toLowerCase() < b.FirstName.toLowerCase()) {
				return -1;
			}
			if (a.FirstName.toLowerCase() > b.FirstName.toLowerCase()) {
				return 1;
			}
			return 0;
		});

		return sortedUserArray;
	};

	const onFilter = (filterOption) => {
		switch (filterOption.target.value) {
			case "alphabetOrder": {
				const sortedUserArray = alphabetOrderSort();

				props.setUsers([...sortedUserArray]);
				return;
			}
			case "reversAlphabetOrder": {
				const reversAlphabetOrderArray = alphabetOrderSort().reverse();

				props.setUsers([...reversAlphabetOrderArray]);
				return;
			}
			default:
				return;
		}
	};

	return (
		<div>
			<label for="users">Filter by : </label>
			<select name="users" onChange={(filterOption) => onFilter(filterOption)}>
				<option value="default">--</option>
				<option value="alphabetOrder">User name ( A - Z )</option>
				<option value="reversAlphabetOrder">User name ( Z - A )</option>
			</select>
		</div>
	);
};

export default FilterByDropDown;
