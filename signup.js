async function authenticate(username, password) {
  try {
    const response = await fetch('data.txt');
    
    // Check if the file was fetched successfully
    if (!response.ok) {
      console.error("Failed to fetch data.txt");
      return false;
    }

    const text = await response.text();

    // Remove empty lines and extra spaces
    const users = text.split('\n').map(line => line.trim()).filter(line => line);

    for (const user of users) {
      const [userFromFile, passFromFile] = user.split(',');

      // Safety check: skip invalid lines
      if (!userFromFile || !passFromFile) continue;

      if (userFromFile === username && passFromFile === password) {
        return true;
      }
    }

    return false; // No match found
  } catch (err) {
    console.error("Error reading user data:", err);
    return false;
  }
}
