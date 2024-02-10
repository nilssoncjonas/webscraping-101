const fs = require('fs');

// Function to read JSON data from file
export const readJSONFromFile = (filePath: string) => {
	try {
		const jsonData = fs.readFileSync(filePath);
		return JSON.parse(jsonData);
	} catch (error) {
		// If the file doesn't exist or is empty, return an empty array
		return [];
	}
};

// Function to write JSON data to file
export const writeJSONToFile = (filePath: string, data: any) => {
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};